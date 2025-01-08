---
aliases:
- Color Folders and Files
author:
- '[[authors/Mithadon|Mithadon]]'
categories: []
description: Customize the appearance of folders and files in the file explorer.
downloads: 1113
mobile: true
number: 2077
stars: 13
title: Color Folders and Files
type: plugin
updated: '2024-12-12T07:20:40'
url: https://github.com/Mithadon/obsidian-color-folders-files
version: 1.4.1
---

%% README_START %%

# Color Folders and Files

Customize the appearance of folders and files in Obsidian through an easy-to-use context menu with color picker and style options.

The aim is to provide a more robust, customizeable, plugin-based solution inspired
by .css snippet applications like https://github.com/CyanVoxel/Obsidian-Colored-Sidebar.

Tested with Obsidian's default theme on Windows and Android. Compatible with the Iconize plugin, which takes precedence (default icon colors are changed with text, while defined icon colors remain).

New in version 1.4.0:
- !!! New style snippet (custom-file-styles.css) to style filenames based on their extension. Designed to work with the Style Settings plugin (https://github.com/mgmeyers/obsidian-style-settings). Supports a wide number of file types, with default colors matching the common software that use them. You can easily add your own extensions as well by editing the file.
- Automatic hover styling
- Settings menu preset selector

<img src="https://raw.githubusercontent.com/Mithadon/obsidian-color-folders-files/HEAD/res/contextual.png" alt="Context Menu" width="300"/> <img src="res/settings.png" alt="Settings" width="500"/>

## Features

- Right-click any file or folder to customize its appearance
- Change background and text colors with a color picker
- Adjust font weight (normal/bold) and style (normal/italic)
- Control opacity
- Save and apply style presets
- Works in both light and dark themes
- Apply styles to subfolders and contained files (optional)

## Usage

1. Right-click any file or folder in the file explorer
2. Select "Customize appearance"
3. Use the color pickers and style options to customize the appearance:
   - Background color
   - Text color
   - Font weight (normal/bold)
   - Font style (normal/italic)
   - Opacity
   - Apply to subfolders (optional)
   - Apply to files (optional)
4. Click "Apply changes" to save

### Presets

Save your favorite style combinations as presets to quickly apply them to other files and folders:

1. Create a preset:
   - Customize a file/folder appearance as desired
   - Enter a name in the "Save as preset" field
   - Click "Save preset"

2. Apply a preset:
   - Select a preset from the "Apply preset" dropdown
   - Click "Apply changes"

You can also manage presets in the plugin settings:
- Create new presets
- Preview existing presets
- Delete unwanted presets

## Installation

### Manually
1. Download the `main.js`, `manifest.json`, and `styles.css` files from the releases page
2. Copy these into a folder called `color-folders-files` inside of your vault,
for example: \vault\.obsidian\plugins\color-folders-files
3. Restart Obsidian



### Within Obsidian (NOT YET AVAILABLE)
1. Open Obsidian Settings
2. Navigate to Community Plugins and disable Safe Mode
3. Click Browse and search for "Color Folders and Files"
4. Install the plugin
5. Enable the plugin in the Community Plugins tab


## Future improvements
1. Apply opacity only to background (not to text, icon, or arrows)
2. Fix bug where changing a parent folder without "apply to subfolders" removes styling from subfolders. 
3. Apply to subfolders should apply once, not in perpetuity. *Debatable
4. Fix bug where modal preview does not update if only text color is changed

## Support

If you find this plugin helpful and would like to support its development:

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/mithadon)


%% README_END %%