---
aliases:
- Mass Create
author:
- '[[authors/vellikhor|vellikhor]]'
categories: []
description: Create large quantities of notes easily at one time.
downloads: 325
mobile: true
number: 2045
stars: 5
title: Mass Create
type: plugin
updated: '2025-01-12T02:23:27'
url: https://github.com/vellikhor/mass-create
version: 1.0.3
---

%% README_START %%

# Mass Create Plugin for Obsidian

## Overview

The Mass Create plugin for [Obsidian](https://obsidian.md/) allows users to create large quantities of notes at one time. 
## Features

- **Mass File Creation**: Create multiple files within a selected folder with ease.
- **Folder Creation**: Add extra folders as part of the mass creation process.
- **Template Option**: Use an existing file as a template for all new files, making it easy to replicate file structures and content.
  
## Installation

1. **Manual Installation**:
   - Create a folder titled `mass-create` within the `.obsidian/plugins` folder of your Obsidian vault.
   - Download the plugin files(main.js and manifest.json).
   - Place them in the `mass-create` folder.
   - Go to Settings > Community plugins in Obsidian and enable the "Mass Create" plugin.

2. **Community Plugin Directory** (when available):
   - Search for "Mass Create" in the Obsidian Community Plugins browser.
   - Install and enable the plugin from there.

## Usage

1. **Open a Folder's Right-Click Menu**: In the file explorer, right-click on the folder where you want to create multiple files.
2. **Select "Mass Create"**: From the menu, click on "Mass Create."
3. **Configure File and Folder Names**:
   - Create any additional folders you would like the files to go within. (optional)
   - Enter the names of the files you'd like to create.
4. **Template Selection** (optional): If you’d like to use an existing file as a template, choose the template file, and its content will be duplicated in each new file.
5. **Finish**: Confirm your selection, and the plugin will create the files and folders accordingly.

You can also run Mass Create from the command menu. It will create the files in your currently active folder. If you have no files open, the bulk files will be created in your main vault folder.

![](https://github.com/vellikhor/mass-create/blob/master/assets/mass-create-runthrough.gif)

## License

This plugin is open-source and licensed under the MIT License.


%% README_END %%