namespace Hackathon.Feature.Events.Credentials
{
    using System.Net.Http;
    using System.Threading;
    using System.Threading.Tasks;

    using Microsoft.Rest;

    using Sitecore.Diagnostics;

    public class ApiKeyServiceClientCredentials : ServiceClientCredentials
    {
        private readonly string apiKey;

        public ApiKeyServiceClientCredentials(string apiKey)
        {
            this.apiKey = apiKey;
        }

        public override Task ProcessHttpRequestAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            Assert.IsNotNull(request, nameof(request));

            request.Headers.Add("Ocp-Apim-Subscription-Key", this.apiKey);

            return base.ProcessHttpRequestAsync(request, cancellationToken);
        }
    }
}