---
aliases:
- Orion Publish
author:
- Sean Collings
author_page: https://seancollings.dev
categories:
- '[[categories/Sharing and publishing|Sharing and publishing]]'
description: Quickly and easily publish your notes to the web with Orion Publish.
downloads: 977
funding_page: https://ko-fi.com/seancollings
mobile: true
number: 1504
title: Orion Publish
type: plugin
updated: '2024-01-12T12:22:21'
url: https://github.com/seanrcollings/orion-publish-plugin
version: 0.2.2
---

%% README_START %%

## Orion Publish Obsiain Plugin

Orion Publish is a plugin for [Obsidian](https://obsidian.md) that allows you to easly publish notes on the web & share them with others.

The site is hosted at [orion.seancollings.dev](https://orion.seancollings.dev). The source code for the site is available [here](https://github.com/seanrcollings/orion-publish-site). You are free to host your own version of it if you wish (or implement your own version entirely, as long as it follows the same URL patterns!).


## Instructions
All of Orion's functionality is available in the command palette.

![Orion Commands](https://raw.githubusercontent.com/seanrcollings/orion-publish-plugin/HEAD/images/commands.png)

- `Orion Publish: Publish Note` - Publishes the current note to the web.
- `Orion Publish: Update Published Note` - Updates the current note on the web.
- `Orion Publish: Unpublish Note` - Removes the current note from the web.
- `Orion Publish: Copy Published Note URL` - Copies the current note's URL to the clipboard.

### Settings

![Orion Settings](https://raw.githubusercontent.com/seanrcollings/orion-publish-plugin/HEAD/images/settings.png)

### Custom Domain
You can point the plugin to a custom domain in the settings menu. This will change the URL that your notes are published to.

#### Feeds
Orion Publish supports feeds to collect multiple notes into a single group. You can create a feed in the settings menu.


After you create a feed, each time you publish a note you can select which feed to add it to. You also have the option to publish a note without adding it to a feed.

**Note**: When you delete a feed, the notes in that feed will not be deleted from the web. You will need to manually unpublish each of them.


%% README_END %%