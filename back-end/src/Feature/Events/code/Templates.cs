namespace Hackathon.Feature.Events
{
    using Sitecore.Data;

    public struct Templates
    {
        public struct EventDetails
        {
            public static readonly ID ID = new ID("{1C492664-3D2B-4656-8D92-E98DB282AE40}");

            public struct Fields
            {
                public const string DescriptionFieldName = "Description";
                public const string TagsFieldName = "Tags";
            }
        }
    }
}