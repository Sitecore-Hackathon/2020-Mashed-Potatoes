namespace Hackathon.Feature.Events.Services
{
    using System.Collections.Generic;
    using System.Linq;

    using Microsoft.Azure.CognitiveServices.Language.TextAnalytics;

    using Credentials;
    using Models;

    public class AzureTextAnalyticsService : ITextAnalyticsService
    {
        private readonly TextAnalyticsClient textAnalyticsClient;

        public AzureTextAnalyticsService()
        {
            var configuration = AzureTextAnalyticsConfiguration.LoadConfiguration();
            var credentials = new ApiKeyServiceClientCredentials(configuration.ApiKey);
            var client = new TextAnalyticsClient(credentials)
            {
                Endpoint = configuration.Endpoint
            };

            this.textAnalyticsClient = client;
        }

        public List<string> ExtractKeyPhrazes(string text)
        {
            if (string.IsNullOrWhiteSpace(text))
            {
                return new List<string>();
            }

            var result = this.textAnalyticsClient.KeyPhrases(text);

            return result.KeyPhrases.Take(5).ToList();
        }
    }
}