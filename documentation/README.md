# Documentation

[VIDEO](https://drive.google.com/file/d/165_0D0-cwN7hoa9JBdyCK_z8gTB9gRgB/view?usp=sharing)

## Summary

**Category:** 1. Sitecore Meetup Website

Our team MASHED POTATOES Decided to help Sitecore Developer to catch up with each other and share knowledge.
We have build the a meetup website which is completely based on Sitecore using Sitecore JSS with Headless approach.

It supports following features:

1. Read/Create/Update/Delete operations for meetups
2. Contains information about meetups from all over the world and can be used as a single content hub for meetups for all Sitecore user groups
3. Except basic meetup information there was also implemented an integration with Azure Text Analytics Service which give several benefits:

```
1. Meetup(Event) Tags are managed automatically based on the content in the meetup description, so Content Editor doesn't need to spent any effort on it

2. With tagged content, for end-users it is much easier to find a relevant meeting in the area
```

We assume that this web-site can be separetelly hosted (front-end part at least) and mapped to any existing sub-domain: `meetups.sitecore.com`

Of course it was hard to implement everything we planned during the hackathon, so here is a list of improvements to the web-site:

- Implement Events decomission functionlity (it could be sitecore job which archives items as soon as the meetup is over)
- Add opportunity to add shared materials to the finished meeting (slides, links to repos, etc)
- Implement filtering by area(location) on the home page
- Implement filtering by tags
- Implement location resolving based on user location (automatically wire google API)
- Implement subscription functionality in order to receive emails about upcoming meetups
- Extend Tagging functionality to support multiple languages
- [Tech] Complete full docker support even integrated 'next.js' application in the docker-compose
- [Tech] Fix issues with request to layout service (remove the some redundant like for 'favicon')
- [Tech] Clean-up the code and create a separate yarn workspace for the common components which are reused across the web-site

### Several notes about architecture and development approach.

We have decided to use Sitecore JSS Headless with Docker. In general high-level architecture diagram looks like this:

![Architecture](images/architecture.jpg?raw=true "Hackathon Logo")

Of course during the Hackathon we haven't build the entire infrastructure, faced with some issue with Sitecore Docker and had to fallback to Vagrant.

Nevetheless, the code has been written following the HELIX principles and Sitecore Standards.

On the front-end we selected next.js +

## Pre-requisites

Does your module rely on other Sitecore modules or frameworks?

- Sitecore 9.3
- Sitecore JSS 13.0

## Installation

1. Use the Sitecore Installation wizard to install the [package] from `/documentation/packages/` folder in the repo
2. Navigate to `front-end` folder
3. Open the '.env.example' file and remove `example` in the extension
4. Specify right parameters in the `.env` file:

```
- SITECORE_URL is url to sitecore instance (there is a vagrant file in the back-end folder, you can utilize it to start a clean instance, by default the url is equalt to `https://sc9.local`)
- SITECORE_API_KEY must be created in Sitecore Editor and added here
- SITECORE_DEFAULT_LANG must be equal to `en`
```

4. Run the following commands sequentially: `yarn`, `yarn dev`

## Configuration

### Sitecore

The only configuration required is change of config to pass tokens for Azure's cognitive service.

In order to do it you need to update 'Hackathon.Feature.Events.AzureTextAnalytics.config' after package is installed with your personal key and url to Azure Text Analytics Service

```xml
<?xml version="1.0"?>
<!--
  Purpose: Azure Text Analytics Service configuration
-->
<configuration
    xmlns:patch="http://www.sitecore.net/xmlconfig/">
    <sitecore>
        <azureTextAnalyticsConfiguration type="Hackathon.Feature.Events.Models.AzureTextAnalyticsConfiguration, Hackathon.Feature.Events">
            <apiKey>[key]</apiKey>
            <endpoint>https://enpoint.cognitiveservices.azure.com/</endpoint>
        </azureTextAnalyticsConfiguration>
    </sitecore>
</configuration>

```

### Next.js

There are no any specific configuration connected with next.js except the env file. It was described in the 'Installation' section.

## Usage

Features which are support by Events HUB (it's a name of our meetup web site) is described in the Summary section. Here we just attach screenshots and link to video with demo and presentation.

### Home page

![Home page](images/home.png?")

### Event Details page

![Event Details page](images/details.png?")

### [VIDEO](https://drive.google.com/file/d/165_0D0-cwN7hoa9JBdyCK_z8gTB9gRgB/view?usp=sharing)
