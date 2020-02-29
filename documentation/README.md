# Documentation

## Summary

**Category:** 1. Sitecore Meetup Website

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

![Hackathon Logo](images/architecture.jpg?raw=true "Hackathon Logo")

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

How do you configure your module once it is installed? Are there items that need to be updated with settings, or maybe config files need to have keys updated?

Remember you are using Markdown, you can provide code samples too:

```xml
<?xml version="1.0"?>
<!--
  Purpose: Configuration settings for my hackathon module
-->
<configuration xmlns:patch="http://www.sitecore.net/xmlconfig/">
  <sitecore>
    <settings>
      <setting name="MyModule.Setting" value="Hackathon" />
    </settings>
  </sitecore>
</configuration>
```

## Usage

Provide documentation about your module, how do the users use your module, where are things located, what do icons mean, are there any secret shortcuts etc.

Please include screenshots where necessary. You can add images to the `./images` folder and then link to them from your documentation:

![Hackathon Logo](images/hackathon.png?raw=true "Hackathon Logo")

You can embed images of different formats too:

![Deal With It](images/deal-with-it.gif?raw=true "Deal With It")

And you can embed external images too:

![Random](https://placeimg.com/480/240/any "Random")

## Video

Please provide a video highlighing your Hackathon module submission and provide a link to the video. Either a [direct link](https://www.youtube.com/watch?v=EpNhxW4pNKk) to the video, upload it to this documentation folder or maybe upload it to Youtube...

[![Sitecore Hackathon Video Embedding Alt Text](https://img.youtube.com/vi/EpNhxW4pNKk/0.jpg)](https://www.youtube.com/watch?v=EpNhxW4pNKk)
