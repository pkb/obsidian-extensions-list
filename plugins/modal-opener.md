---
aliases:
- Modal Opener
author:
- '[[authors/likemuuxi|Muuxi]]'
categories: []
description: Open files and links in modal windows, or create and edit compatible
  files in modal windows.
downloads: 1762
mobile: true
number: 1934
stars: 15
title: Modal Opener
type: plugin
updated: '2025-01-23T20:26:25'
url: https://github.com/likemuuxi/obsidian-modal-opener
version: 0.7.17
---

%% README_START %%

# 🎉Obsidian Modal Opener

English Doc｜[中文文档](https://github.com/likemuuxi/obsidian-modal-plugin/blob/main/README-ZH.md)

> This is a plugin that uses the Obsidian modal window to open files and links.
> It can be combined with other plug-ins to easily read and edit various types of files, block various interferences for you.

![image](https://github.com/user-attachments/assets/dd59221d-701e-4ca6-9235-807c2b5ea1fa)

![image](https://github.com/user-attachments/assets/f826b237-f1b9-4b3a-bf1b-2b2c43a32325)

# ✨Feature

- Support Markdown file titles and block link anchor jumps
- Support switching between editing modes
- Double click the modal border to restore to the tab
- Support setting shortcut keys to open current files and links
- Support adding custom commands, one click opening of files or links (can be combined with Command plugin to add icons)
- Support right-click menu to create multiple file types and edit them in the modal window. After editing, the link will be automatically embedded to the current cursor position
  ![image](https://github.com/user-attachments/assets/a6303d46-10a1-4f82-a758-5dd6ddfbec40)

> The use of Diagrams requires the installation of my modified plugin: [obsidian-diagrams-net](https://github.com/likemuuxi/obsidian-diagrams-net)
> 
> Using `alt+click` to enter the modal window to Edit the code block requires a modified version using the `VSCode Edit` plugin: [download link](https://github.com/likemuuxi/obsidian-modal-opener/releases/tag/0.7.8)
> 

# 🎯How to use

- Reading mode

  - Drag and drop
  - Right click menu
  - `alt` + Left mouse button
- Edit mode

  - Right click menu
  - `alt` + Left mouse button

# 🪒How to install

## Install from community

[obsidian-modal-opener](https://obsidian.md/plugins?id=modal-opener)

## Manual installation

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/modal-opener/`.

## Install by BRAT

1. Install [BRAT](https://github.com/TfTHacker/obsidian42-brat) Plugin.
2. Add "Modal Plugin" to BRAT:
   1. Go to *Settings > BRAT > Beta Plugin List*
   2. Click on "Add Beta plugin"
   3. Enter `https://github.com/likemuuxi/obsidian-modal-plugin`
   4. Click on Add Plugin
3. After installation, enable the plugin to use it

# 🚧Compatibility

Currently known plugins with conflicts.

- `no dupe leave`
- `mononote`

The above plugins are all for handling duplicate tabs, now the plugin has a built-in duplicate tab detection function, which comes from the `mononote` plugin and has been modified on the basis of the original one.

> Notice: When loading a Web page using the `surfing` plugin, do not turn on the **option to open a web page in a fixed and unique tab**. This affects the plugin's functionality.

# 🥰Special thanks

Special thanks to these amazing plugins! I use these plugins as a reference for developing my first public plugin. The basic structure of this plugin is mainly based on [obidian link opener](https://github.com/zorazrr/obsidian-link-opener). I referred to other plugins and completed the modal window file display and prevent duplicate tabs functions, The list of plug-ins is as follows.

- [obsidian-link-opener](https://github.com/zorazrr/obsidian-link-opener) by zorazrr
- [Obsidian-Float-Search](https://github.com/Quorafind/Obsidian-Float-Search) by Quorafind
- [obsidian-copilot](https://github.com/logancyang/obsidian-copilot) by logancyang
- [obsidian-mononote](https://github.com/czottmann/obsidian-mononote/tree/main) by czottmann
- [Cursor](https://www.cursor.com/) 、[ChatGPT](https://chatgpt.com/)


%% README_END %%