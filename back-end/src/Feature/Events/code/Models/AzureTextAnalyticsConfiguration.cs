namespace Hackathon.Feature.Events.Models
{
    using Sitecore.Configuration;

    public class AzureTextAnalyticsConfiguration
    {
        public static AzureTextAnalyticsConfiguration LoadConfiguration()
        {
            return Factory.CreateObject("azureTextAnalyticsConfiguration", true) as AzureTextAnalyticsConfiguration;
        }

        public string ApiKey { get; protected set; }

        public string Endpoint { get; protected set; }
}
}