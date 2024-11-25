---
aliases:
  - Moon server publisher
author:
  - Roman Provazník
author_page: https://github.com/Dzoukr
categories:
  - "[[categories/Sharing and publishing|Sharing and publishing]]"
description: Publish your notes directly to Moon server instance.
downloads: 2296
mobile: true
number: 1225
title: Moon server publisher
type: plugin
updated: 2023-10-20T19:33:50
url: https://github.com/Dzoukr/MoonServerObsidianPlugin
version: 1.0.0
---

%% README_START %%

# Moon server publisher

An Obsidian plugin for publishing notes to [Moon server](https://github.com/Dzoukr/MoonServerSpecification) instance.

## Configuration

1. Enter the base URL of your [Moon server](https://github.com/Dzoukr/MoonServerSpecification) instance.
2. Enter the API key for your Moon server instance. _(optional)_ 
3. Enter the API secret for your Moon server instance. _(optional)_ 

## Usage

![](https://raw.githubusercontent.com/Dzoukr/MoonServerObsidianPlugin/HEAD/docs/command.png)

### Publishing a note
1. Open the Obsidian note you want to publish. 
2. Open the command palette and run the `Publish to Moon server` command.
3. The note will be published to your Moon server instance and the ID will be applied to note as property. 

### Unpublishing a note
1. Open the Obsidian note you want to unpublish.
2. Open the command palette and run the `Unpublish from Moon server` command.
3. The note will be unpublished from your Moon server instance and the ID property will be removed from the note.

Alternatively you can use command from the note's context menu.

![](https://raw.githubusercontent.com/Dzoukr/MoonServerObsidianPlugin/HEAD/docs/menu.png)


%% README_END %%