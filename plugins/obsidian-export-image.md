---
aliases:
- Export Image plugin
author:
- '[[authors/zhouhua|Zhou Hua]]'
categories:
- '[[categories/Export|Export]]'
description: Easily convert your article to image.
downloads: 28803
mobile: true
number: 665
stars: 121
title: Export Image plugin
type: plugin
updated: '2024-12-29T19:12:59'
url: https://github.com/zhouhua/obsidian-export-image
version: 2.4.1
---

%% README_START %%

# Obsidian Export Image Plugin

![GitHub Release](https://img.shields.io/github/v/release/zhouhua/obsidian-export-image?include_prereleases&style=flat) ![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/zhouhua/obsidian-export-image/total?style=flat)

This Obsidian plugin can easily help you export any article as an image.

## Features

- <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Camera.png" alt="Camera" width="25" height="25" /> Export any article as an image, with the option to save it as a local image file or copy it to the clipboard.
- <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Locked%20with%20Pen.png" alt="Locked with Pen" width="25" height="25" /> Support adding watermarks, both text and image watermarks, to protect your copyrights.
- <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Identification%20Card.png" alt="Identification Card" width="25" height="25" /> Support adding author information (avatar, name, etc.) for easier sharing and dissemination.
- <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Mobile%20Phone.png" alt="Mobile Phone" width="25" height="25" /> Support outputting images at twice the resolution for clearer display on high PPI devices like smartphones.
- <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Straight%20Ruler.png" alt="Straight Ruler" width="25" height="25" /> Support adjusting the image width to cater to different scenarios, such as exporting images suitable for viewing on mobile devices or ensuring readability when embedding images in articles.
- <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Level%20Slider.png" alt="Level Slider" width="25" height="25" /> Offer flexible configuration options with a convenient WYSIWYG (What You See Is What You Get) interface.
- <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Bookmark%20Tabs.png" alt="Bookmark Tabs" width="25" height="25" /> Support exporting selected content as an image.
- <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Card%20Index%20Dividers.png" alt="Card Index Dividers" width="25" height="25" /> Support for batch exporting all notes in a folder as images.
- <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Receipt.png" alt="Receipt" width="25" height="25" /> Support displaying obsidian [metadata](https://help.obsidian.md/Editing+and+formatting/Properties).

## Usage

~~Note: This plugin works in preview mode.~~

Now, it works in both preview and read mode.

~~- Use the command `export to image` in command palette (Press cmd/ctrl+P to enter the command) to generate a image and download it to your file system.~~

~~- Use the command `copy as image` in command palette (Press cmd/ctrl+P to enter the command) to generate a image and copy it to clipboard, so you can paste in other softwares easily.~~

Use the command `export as a image` in command palette (Press cmd/ctrl+P to enter the command) to generate a image. You can download it to your file system, or copy to clipboard.

![](https://raw.githubusercontent.com/zhouhua/obsidian-export-image/HEAD/assets/commad.png)

![](https://raw.githubusercontent.com/zhouhua/obsidian-export-image/HEAD/assets/config.png)

Also, you can access this function from the editor menu:

![](https://raw.githubusercontent.com/zhouhua/obsidian-export-image/HEAD/assets/menu.png)

> [!NOTE]
> Due to device limitations, exporting images on mobile can only be saved to the current vault.

## Installation

### Obsidian

Search `Export Image` in community plugins.

## Custom Styles

To help experienced users write their own CSS styles, here is the combined DOM structure of the exported image.


```html
<!-- Export Image Root -->
<div class="export-image-root markdown-reading-view">
  <!-- Watermark Container -->
  <div class="markdown-preview-view markdown-rendered export-image-preview-container">
    <!-- Inline Title -->
    <div class="inline-title"></div>
    <!-- Metadata -->
    <div class="metadata-container">
      <div class="metadata-content">
        <!-- Metadata Items -->
        <div class="metadata-property">
          <!-- Metadata Key -->
          <div class="metadata-property-key">
            <!-- Metadata Icon -->
            <span class="metadata-property-icon"></span>
            <!-- Metadata Name -->
            <span class="metadata-property-name"></span>
          </div>
          <!-- Metadata Value -->
          <div class="metadata-property-value"></div>
        </div>
      </div>
    </div>
    
    <!-- Note Content -->
    <div>...</div>
  </div>
  
  <!-- Author Info -->
  <div class="user-info-container">
    <!-- Author Avatar -->
    <div class="user-info-avatar"></div>
    <div>
      <!-- Author Name -->
      <div class="user-info-name"></div>
      <!-- Extra Info -->
      <div class="user-info-remark"></div>
    </div>
  </div>
</div>
```



## Special Thanks

- [dom-to-image](https://github.com/tsayen/dom-to-image) & [dom-to-image-more](https://github.com/1904labs/dom-to-image-more). This repo borrows lots of code from [dom-to-image-more](https://github.com/1904labs/dom-to-image-more). The amazing lib helps me generate images from dom.

## My Other Obsidian Plugins

- [Markdown Media Card](https://github.com/zhouhua/obsidian-markdown-media-card)
- [vConsole](https://github.com/zhouhua/obsidian-vconsole)
- [POWER MODE](https://github.com/zhouhua/obsidian-power-mode)
- [Another Sticky Headings](https://github.com/zhouhua/obsidian-sticky-headings)
- [PopKit](https://github.com/zhouhua/obsidian-popkit)


%% README_END %%