---
aliases:
- open-as-md
author:
- '[[kursad-k|kursad-k]]'
categories: []
description: Edit non-md file types as markdown files
downloads: 2432
mobile: true
number: 1342
title: open-as-md
type: plugin
updated: '2023-12-10T00:57:57'
url: https://github.com/kursad-k/obsidian-openasmd
version: 0.0.8
---

%% README_START %%




### How it works

This plugin lets you edit non-markdown files in Obsidian as if they are .md files. You can set the extension of the file type you want to be able to edit in Obsidian by setting the extension in the plugin's settings window. Please be sure to separate them by commas as shown in the image below.

You need to disable and enable the plugin after setting the file extensions.


![Alt text](https://raw.githubusercontent.com/kursad-k/obsidian-openasmd/HEAD/image.png)


### Compatibility

The required APIs were only added in Obsidian **0.10.12**, and as such, that is the minimum version of Obsidian required to use this plugin. 

## Installation

### From within Obsidian
You can activate this plugin within Obsidian by doing the following:
- Open Settings > Third-party plugin
- Make sure Safe mode is **off**
- Click Browse community plugins
- Search for this plugin
- Click Install
- Once installed, close the community plugins window and activate the newly installed plugin
#### Updates
You can follow the same procedure to update the plugin

### From GitHub
- Download the Latest Release from the Releases section of the GitHub Repository
- Extract the plugin folder from the zip to your vault's plugins folder: `<vault>/.obsidian/plugins/`  
Note: On some machines the `.obsidian` folder may be hidden. On MacOS you should be able to press `Command+Shift+Dot` to show the folder in Finder.
- Reload Obsidian
- If prompted about Safe Mode, you can disable safe mode and enable the plugin.
Otherwise head to Settings, third-party plugins, make sure safe mode is off and
enable the plugin from there.

## Development

This project uses Typescript to provide type checking and documentation.  
The repo depends on the latest [plugin API](https://github.com/obsidianmd/obsidian-api) in Typescript Definition format, which contains TSDoc comments describing what it does.

If you want to contribute to development and/or just customize it with your own
tweaks, you can do the following:
- Clone this repo.
- `npm i` or `yarn` to install dependencies
- `npm run build` to compile.
- Copy `manifest.json`, `main.js`
folder (e.g, `<vault>/.obsidian/plugins/<plugin-name>/`)
- Reload obsidian to see changes

Alternately, you can clone the repo directly into your plugins folder and once
dependencies are installed use `npm run dev` to start compilation in watch mode.  
You may have to reload obsidian (`ctrl+R`) to see changes.


# Version History
## 0.0.3
Initial release!


%% README_END %%