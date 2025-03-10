---
aliases:
- File Cooker
author:
- '[[authors/ivaneye|iuian]]'
categories: []
description: Deal multi notes from Search results、current file、Dataview query string...
downloads: 9862
mobile: true
number: 573
stars: 50
title: File Cooker
type: plugin
updated: '2024-05-13T17:29:24'
url: https://github.com/ivaneye/obsidian-files-cooker
version: 1.9.0
---

%% README_START %%

> 欢迎加微讨论：SuppleThinking

> [中文文档](README_zh.md)

# obsidian-file-cooker

This plugin for Obsidian deals multi notes from search results、current file、Dataview query string...
    
## Features

- Add/Delete values to tags、alias、cssclasses（delete values when values start with - ,multi values split by ,）---**New in 1.8.1**
- Add Search-Results-Command,can deal with search results directly---**New in v1.7.8**
- Add Multi-File to target Canvas --- **New in v1.7.0**
- Add text to target Canvas---**New in v1.7.6**
- Add Dataview Task to target Canvas---**New in v1.7.7**
- Move/Copy Multi-File to target folder
- Rename Multi-File
- Add/Edit/- Add/Edit/Delete:-） Multi-File's Props（no need to install **MetaEdit** plugin from 1.8.0）
（propValue:-） Multi-File's Props（no need to install **MetaEdit** plugin from 1.8.0）
- Delete Multi-File
- Merge Multi-File to target file
- Create files from unresolved links
- Sync Multi-File to flomo
- Copy Dataview result links to clipboard(DataviewJS pages queries is supported since **v1.7.1**))

> - files from clipboard
> - file links in current file
> - files from dataview query（need to install **dataview** plugin）

![obsidian-file-cooker Demo Image](https://raw.githubusercontent.com/ivaneye/obsidian-files-cooker/HEAD/demo.png)

## Usage

- **Select**:Select at least one file you want to cook
- **Cook**:Execute target command(e.g. Move/Copy, Delete ...)
- **Confirm**:Confirm execution

### Select

Support 3 selects ways：
- Copy file links to clipboard. e.g. Copy obsidian search results
- Content or links in current file
- Dataview search command/DataviewJS pages queries(**New in v1.7.1**)

### Cook

Depends on the different way to select, execute a different command.Ensure:
- Copy before executing deal-with-clipboard command.
- Open file before executing deal-with-current-file command.
- Selected Dataview-Command before executing deal-with-dataview command

### Confirm

All commands open a popup to be confirmed.

## How to install

### From within Obsidian
You can activate this plugin within Obsidian by doing the following:
- Open Settings > Third-party plugin
- Make sure Safe mode is off
- Click Browse community plugins
- Search for "File Cooker"
- Click Install
- Once installed, close the community plugins window and activate the newly installed plugin

### Manual installation

- Download the [latest release](https://github.com/ivaneye/obsidian-files-cooker/releases/latest)
- Extract the obsidian-file-cooker folder from the zip to your vault's plugins folder: `<vault>/.obsidian/plugins/`  
Note: On some machines the `.obsidian` folder may be hidden. On MacOS you should be able to press `Command+Shift+Dot` to show the folder in Finder.
- Reload Obsidian
- If prompted about Safe Mode, you can disable safe mode and enable the plugin.

# Buy me a coffee

<div display="flex">
  <img src="https://raw.githubusercontent.com/ivaneye/obsidian-files-cooker/HEAD/wx_pay.png" width="300px"/>
  <span style="margin:0 3px"></span>
  <img src="https://raw.githubusercontent.com/ivaneye/obsidian-files-cooker/HEAD/alipay.png" width="300px"/>
</div>

%% README_END %%