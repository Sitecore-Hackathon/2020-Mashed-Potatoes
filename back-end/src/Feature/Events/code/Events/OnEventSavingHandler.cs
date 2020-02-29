namespace Hackathon.Feature.Events.Events
{
    using System;

    using Sitecore.Diagnostics;
    using Sitecore.Data.Fields;
    using Sitecore.Data.Items;
    using Sitecore.Events;

    using Services;

    public class OnEventSavingHandler
    {
        private readonly ITextAnalyticsService textAnalyticsService;

        public OnEventSavingHandler(ITextAnalyticsService textAnalyticsService)
        {
            this.textAnalyticsService = textAnalyticsService;
        }

        public void OnItemSaving(object sender, EventArgs args)
        {
            Assert.IsNotNull(args, nameof(args));

            var eventArgs = args as SitecoreEventArgs;
            var updatedItem = eventArgs?.Parameters[0] as Item;

            if (updatedItem == null || !updatedItem.IsDerived(Templates.EventDetails.ID))
            {
                return;
            }

            var existingItem = updatedItem?.Database?.GetItem(updatedItem.ID, updatedItem.Language, updatedItem.Version);

            if (existingItem == null)
            {
                return;
            }

            TextField updatedDescription = updatedItem.Fields[Templates.EventDetails.Fields.DescriptionFieldName];
            TextField existingDescription = existingItem.Fields[Templates.EventDetails.Fields.DescriptionFieldName];

            if (existingDescription.Value == updatedDescription.Value)
            {
                return;
            }

            try
            {
                var tags = this.textAnalyticsService.ExtractKeyPhrazes(updatedDescription.Value);

                TextField tagsField = updatedItem.Fields[Templates.EventDetails.Fields.TagsFieldName];

                tagsField.Value = string.Join("|", tags);
            }
            catch (Exception e)
            {
                Log.Error($"Processing of {Templates.EventDetails.Fields.DescriptionFieldName} field failed", e, this);
            }

        }
    }
}