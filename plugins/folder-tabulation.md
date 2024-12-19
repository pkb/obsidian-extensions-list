---
aliases:
- Folder Tabulation
author:
- '[[authors/SpeedaRJ|SpeedaRJ]]'
categories: []
description: Enables navigation between files in a folder via hotkeys and commands.
downloads: 81
mobile: true
number: 2024
stars: 3
title: Folder Tabulation
type: plugin
updated: '2024-11-14T09:28:35'
url: https://github.com/SpeedaRJ/obsidian_folder_tabulation
version: 1.0.2
---

%% README_START %%

# File Tabulation Plugin

A simple plugin for Obsidian designed to help you with navigating your vault by enabling you to move through files in a single folder like they are tabs in a web browser.

## Features

The plugin gives you the following: 
1. Enables two new commands that let you move to the next and previous files in a folder relative to the current file.
2. If you reach the end of the folder, the files will loop.
3. You can choose weather you want the new files to be opened in the same tab, new tab, new pane, or new window (not supported on mobile).
4. If a file is already open, it will be focused instead of opening a new one.
5. The plugin add two buttons to the file bar above the editor, that enables you to cycle between the files.[^1]
6. If you don't like the position of these buttons, you can disable them from the settings menu. I would recommend the [Obsidian Commander](https://github.com/phibr0/obsidian-commander) plugin to place these buttons wherever you want if you want to move them.

## Installation

I'm working on getting this plugin published on the Obsidian Plugin Store, as soon as I can.

In the meantime you can install it in one of the following ways.

### BRAT

Use the [Obsidian BRAT plugin](https://github.com/TfTHacker/obsidian42-brat) and install it using the link to this repository:  
`https://github.com/SpeedaRJ/obsidian_folder_tabulation`

### Manually

1. Download the latest release files from the [Releases](https://github.com/SpeedaRJ/obsidian_folder_tabulation/releases) page.
2. Inside your Obsidian plugins folder (`%OBSIDIAN_HOME%/.obsidian/plugins/`) create the folder `obsidian_folder_tabulation`.
3. Move the files to the created folder.

Alternatively, you can build the plugin yourself by downloading the source code (`zip`/`tar.gz` from the Releases page) and running `npm i` and `npm run build` inside the created folder after extracting the archive.

## Known Issues

- You might need to restart Obsidian after installing the plugin for the buttons to appear.
- The plugin doesn't play well with pinned tabs. Otherwise it should work fine.
- Performance might be an issue on large vaults (don't quite know why).
- If a window is in the background, the plugin will not move it to the front.

# Demo

Below is a demonstration of the plugin in action. I bound my hotkeys to the following key-bindings:
- `Ctrl + Shift + ]` - Move to the next file
- `Ctrl + Shift + [` - Move to the previous file

![Demo](https://raw.githubusercontent.com/SpeedaRJ/obsidian_folder_tabulation/HEAD/assets/demo_folder_tabulation.gif)

[^1]: To change their color use CSS snippets, the default color is your Obsidian accents color.

---

<small>*If you find this plugin helpful and want to support me!*</small>

<a href='https://ko-fi.com/speedarj' target='_blank'><img style='border:0px;height:32px;' src='https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' />


%% README_END %%