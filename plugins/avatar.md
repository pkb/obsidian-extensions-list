---
aliases:
- Avatar
author:
- '[[froehlichA|froehlichA]]'
categories: []
description: Display an avatar image in your notes.
downloads: 7255
mobile: true
number: 849
title: Avatar
type: plugin
updated: '2023-03-23T03:44:31'
url: https://github.com/froehlichA/obsidian-avatar
version: 1.0.5
---

%% README_START %%

# Obsidian Avatar

This plugin provides you with a component that will display a small image with some accompanying text. That's it.

![Preview Mode](./docs/avatar_preview.PNG)

To use, insert the following snippet into your markdown.

````
```avatar
```
````

## Editing the picture / description

**In source mode**, you can edit the codeblock directly:

````
```avatar
image: your-image-here.png
description: This will be displayed as the description!
```
````

**In live preview mode**, click on the image to change it *(then either select one from your vault, or paste in a URL to a picture online)*, or edit the description by clicking on it *(Don't forget to click the button to save your changes!)*

![Edit Mode](./docs/avatar_edit.PNG)

The description editor supports all markdown features of Obsidian.

## Installation

### Using Obsidian

1. Open Obsidian
2. Open `Settings` -> `Community Plugins`
3. Click on `Turn on Community plugins` if prompted
4. Click on `Browse`, and search for `Avatar`
6. Install & enable the plugin

### Manual installation

1. Download the latest release .zip from the `Releases` section of this Github repository
2. Extract the .zip to your vault's plugin folder: `<vault>/.obsidian/plugins`
3. Reload Obsidian


%% README_END %%