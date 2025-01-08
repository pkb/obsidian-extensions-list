---
aliases:
- Local Images Plus
author:
- '[[authors/catalysm|catalysm]]'
- '[[authors/aleksey-rezvov|aleksey-rezvov]]'
- '[[authors/Sergei-Korneev|Sergei Korneev]]'
categories:
- '[[categories/Image handling|Image handling]]'
description: Local Images Plus plugin searches for all external media links in your
  notes, downloads and saves them locally and adjusts the links in your notes to point
  to the saved files.
downloads: 56632
mobile: false
number: 731
stars: 288
title: Local Images Plus
type: plugin
updated: '2025-01-03T00:49:53'
url: https://github.com/Sergei-Korneev/obsidian-local-images-plus
version: 0.16.0
---

%% README_START %%

# Obsidian Local Images Plus


***

**Notes for 0.16.0**

**First off, I'd like to say a huge thank you to everyone who donated a few bucks. Thank you!**

**And secondly, as far as I know Obsidian version 1.8 supports some features of this plugin out of the box. So the future need for this plugin is questionable.**
 
**All the best to you in the new year.**

**Sergei Korneev**

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

This plugin also handles all attachments (screenshots/drag-and-drop for files/audio records).




![img](https://raw.githubusercontent.com/Sergei-Korneev/obsidian-local-images-plus/HEAD/docs/exampleimage.gif)

Use it in the command/menu mode or in automatic mode (toggle "Automatic processing" option in the settings):


![img](https://raw.githubusercontent.com/Sergei-Korneev/obsidian-local-images-plus/HEAD/docs/commands.png)


![img](https://raw.githubusercontent.com/Sergei-Korneev/obsidian-local-images-plus/HEAD/docs/menuex.png)


```Localize attachments for the current note (plugin folder)``` - your active note will be processed and attachments will be saved in the folder preconfigured in the plugin settings. 

or

```Localize attachments for the current note (Obsidian folder)``` - your active note will be processed and attachments will be saved in the folder preconfigured in the Obsidian settings.

or


```Localize attachments for all your notes (plugin folder)``` - will be processed all the pages in your vault, that corresponds to **Include** parameter in the plugin's settings and attachments will be saved in the folder(s) preconfigured in the plugin settings.



**NOTE: This plugin can change all your notes at once, so you should consider doing backups of your files periodically.**

You can also insert any file e.g:

```![mypdf](http://mysite/mypdf.pdf)```

```![mylocalfile](https://raw.githubusercontent.com/Sergei-Korneev/obsidian-local-images-plus/HEAD/file:///mylinuxdisk/mysong.mp3)```

Files will be copied or downloaded to your attachments folder.

![img](https://raw.githubusercontent.com/Sergei-Korneev/obsidian-local-images-plus/HEAD/docs/examplepdf.gif)

**NOTE: I would not recommend to use this plugin for copying really big files, since buffered reading from disk not implemented yet.**

This plugin also allows you to remove unused attachments by running commands:

```Remove all orphaned attachments (Plugin folder)```

and

```Remove all orphaned attachments (Obsidian folder)```

The first one searches orphans in the folder next to the active note, while the second one searches all unused attachments for all your notes. (this requires you to set some root subfolder in Obsidian settings)


All attachment names are generated according to MD5, therefore they are pretty unique within the vault.        

This means you can place an attachment file anywhere within your vault, replace the absolute path in a tag with the file name and Obsidian will still show it in your note.
 



## Donations

Share your  wishes and ideas about this software or buy me a coffee (or hot chocolate)



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