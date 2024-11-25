---
aliases:
  - Vitepress Publisher
author:
  - mistj
author_page: https://mistj.com
categories:
  - "[[categories/Sharing and publishing|Sharing and publishing]]"
description: This is an plugin for more convenient preview and publishing of .md files using vitepress
downloads: 160
mobile: false
number: 1860
title: Vitepress Publisher
type: plugin
updated: 2024-09-30T20:27:39
url: https://github.com/tyrad/obsidian-vitepress
version: 1.2.0
---

%% README_START %%

# Obsidian Vitepress Plugin   [中文文档](./README_zh.md)

Obsidian Vitepress Plugin is a tool that allows you to easily preview and compile your .md files using Vitepress in Obsidian.

## Installation

### Manual Installation

Download `main.js`, `manifest.json`, and `styles.css` from the [release](https://github.com/tyrad/obsidian-vitepress/releases) page and place them in `<vault>/.obsidian/plugins/obsidian-vitepress` directory.

## Configuration

### Required Settings

![Settings](https://raw.githubusercontent.com/tyrad/obsidian-vitepress/HEAD/demo/setting1-en.png)

- `Publish Content`: Select the top level directories or files to be previewed or published using Vitepress
- `Directory Settings`:
	- `Vitepress Path`: Path to Vitepress on your local machine
	- `Vitepress srcDir Path`: Location of Vitepress [src directory](https://vitepress.dev/reference/site-config#srcdir)

### Advanced Settings

![Advanced Settings](https://raw.githubusercontent.com/tyrad/obsidian-vitepress/HEAD/demo/setting2-en.png)

## Usage

### Sidebar Button

![Sidebar Button](https://raw.githubusercontent.com/tyrad/obsidian-vitepress/HEAD/demo/aside-button.png)

Click to start or stop `vitepress dev` and open the Vitepress homepage in your browser.

![Preview Action](https://raw.githubusercontent.com/tyrad/obsidian-vitepress/HEAD/demo/action-preview.gif)

### Top Bar Button

Click to copy the current document to the Vitepress srcDir directory and preview it.

![Preview Action 2](https://raw.githubusercontent.com/tyrad/obsidian-vitepress/HEAD/demo/action-preview2.gif)

### Commands

![Commands](https://raw.githubusercontent.com/tyrad/obsidian-vitepress/HEAD/demo/commands.png)

- `Show log`: Open the log window for this plugin
- `vitepress build`: Execute the default build command `npm run docs:build` in the Vitepress directory
- `vitepress preview`: Execute the default preview command `npm run docs:preview` in the Vitepress directory
- `vitepress preview close`: Close Vitepress preview
- `vitepress publish`: Open a new terminal window and run the publish script specified in the settings

# License

MIT


%% README_END %%