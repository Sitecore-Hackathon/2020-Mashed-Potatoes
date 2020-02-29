namespace Hackathon.Feature.Events.Services
{
    using System.Collections.Generic;

    public interface ITextAnalyticsService
    {
        List<string> ExtractKeyPhrazes(string text);
    }
}