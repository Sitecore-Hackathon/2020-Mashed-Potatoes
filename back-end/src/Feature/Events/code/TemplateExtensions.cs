namespace Hackathon.Feature.Events
{
    using System.Linq;
    using Sitecore.Data;
    using Sitecore.Data.Templates;

    public static class TemplateExtensions
    {
        public static bool IsDerived(this Template template, ID templateId)
        {
            if (template == null)
            {
                return false;
            }

            return template.ID == templateId || template.GetBaseTemplates().Any(baseTemplate => IsDerived(baseTemplate, templateId));
        }
    }
}