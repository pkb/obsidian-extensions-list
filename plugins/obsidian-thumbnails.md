---
aliases:
- Thumbnails
author:
- '[[authors/Meikul|Michael Harris]]'
categories: []
description: Insert video thumbnails into your notes
downloads: 13927
mobile: true
number: 550
stars: 51
title: Thumbnails
type: plugin
updated: '2023-07-19T23:29:38'
url: https://github.com/Meikul/obsidian-thumbnails
version: 1.3.0
---

%% README_START %%

![version badge](https://img.shields.io/github/v/release/Meikul/obsidian-thumbnails)
<!--![downloads badge](https://img.shields.io/github/downloads/Meikul/obsidian-thumbnails/total.svg)-->
# Obsidian Thumbnails
This plugin lets you insert video thumbnails into your notes to help you keep track of what you're actually linking.

Works with Youtube and Vimeo.
<img src="https://raw.githubusercontent.com/Meikul/obsidian-thumbnails/master/demo_images/block_demo.gif" alt="GIF showing how to create a thumbnail with the plugin">

## Usage
Place a code block with the `vid` type, and include the link to your video:
````markdown
```vid
https://youtu.be/dQw4w9WgXcQ
```
````
*OR* use the "Insert from clipboard" command (bit faster)
## Commands
### Insert thumbnail from URL in clipboard
If you have a video URL in your clipboard, this command will create the code block for you.

### Insert video title link from URL in clipboard
If you have a video URL in your clipboard, this command will automatically create a link with the text set to the video title.

<img src="https://raw.githubusercontent.com/Meikul/obsidian-thumbnails/master/demo_images/title_link_demo.gif" alt="GIF demonstrating the insert video title link command" width="480">

## Offline Options
If you're offline, the thumbnails will just appear like a normal link.
### **Save Thumbnail Info**
If you want your thumbnails to work better offline, you can enable `Save Thumbnail Info` in the settings tab. When offline, the image will be blank but the title and channel will be shown like normal.
### **Save Images**
If you also want to store the thumbnail images locally, you can enable `Save Images` in the settings tab. Then you will be able to see the images whether you're online or not.


%% README_END %%