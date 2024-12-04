---
aliases:
- Local Images Plus
author:
- '[[authors/catalysm|catalysm]]'
- '[[authors/aleksey-rezvov|aleksey-rezvov]]'
- '[[Sergei-Korneev|Sergei Korneev]]'
categories:
- '[[categories/Image handling|Image handling]]'
description: Local Images Plus plugin searches for all external media links in your
  notes, downloads and saves them locally and adjusts the links in your notes to point
  to the saved files.
downloads: 52377
mobile: false
number: 731
stars: 270
title: Local Images Plus
type: plugin
updated: '2023-10-27T17:35:46'
url: https://github.com/Sergei-Korneev/obsidian-local-images-plus
version: 0.15.9
---

%% README_START %%

# Obsidian Local Images Plus

***

**By using this software, you accept all terms and agree to the [license agreement](https://github.com/Sergei-Korneev/obsidian-local-images-plus/blob/main/LICENSE).**

**The author of this software is not obligated to provide any form of support and assumes no liability.**

***


Obsidian Local Images Plus is a plugin for [Obsidian](https://obsidian.md/) 

## Main features of the plugin include:

- Downloading media files from copied/pasted content of web pages
- Localizing media files from copied/pasted content of word / Open Office documents
- Saving attachments next to note in folder named after  note
- Downloading files embedded in markdown tags from web to vault 
- Saving base64 embedded images to vault
- Converting PNG images to JPEG images with various quality
- Attachments de-dulication by using MD5 hashing algorithm
- Removing orphaned attachments from vault



## Installation

- Download the latest version from [GitHub](https://github.com/Sergei-Korneev/obsidian-local-images-plus) / [GitHub page](https://sergei-korneev.github.io/obsidian-local-images-plus). [Read release notes](https://github.com/Sergei-Korneev/obsidian-local-images-plus/releases).
- Remove obsidian-local-images plugin to avoid any conflicts.
- Extract the archive into your Obsidian vault (e.g. Myvault/.obsidian/plugins)
- Restart Obsidian.
- Or install from "Obsidian Community Plugins"
- Open "Community plugins" dialog and change plugin settings at will.
- Enjoy


## Updating

- Update the plugin from Obsidian settings and restart Obsidian


```

This plugin has known compatibility issues with the following plugins:

* Paste Image Rename

* Pretty BibTex

```


## Usage

Just copy any web content, Word/Open Office content and paste it into your regular note or a note in canvas.

Starting from version 0.15.0 the plugin also handles all attachments (screenshots/drag-and-drop for files/audio records).




![img](https://raw.githubusercontent.com/Sergei-Korneev/obsidian-local-images-plus/HEAD/docs/exampleimage.gif)

Use it in the command/menu mode or in automatic mode (toggle "Automatic processing" option in the settings):



![img](https://raw.githubusercontent.com/Sergei-Korneev/obsidian-local-images-plus/HEAD/docs/commands.png)



<a href="https://www.buymeacoffee.com/sergeikorneev"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=sergeikorneev&button_colour=5F7FFF&font_colour=ffffff&font_family=Inter&outline_colour=000000&coffee_colour=FFDD00"></a>



## Credits

[niekcandaele's](https://github.com/niekcandaele/obsidian-local-images)

[aleksey-rezvov](https://github.com/aleksey-rezvov/obsidian-local-images)


## Build from source
```
npm run build
npm run dev
```


%% README_END %%