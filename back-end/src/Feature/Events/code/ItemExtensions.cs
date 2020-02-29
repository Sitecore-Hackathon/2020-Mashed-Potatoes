namespace Hackathon.Feature.Events
{
    using Sitecore.Data;
    using Sitecore.Data.Items;
    using Sitecore.Data.Managers;

    public static class ItemExtensions
    {
        public static bool IsDerived(this Item item, ID templateId)
        {
            if (item == null)
            {
                return false;
            }

            return TemplateManager.GetTemplate(item).IsDerived(templateId);
        }
    }
}