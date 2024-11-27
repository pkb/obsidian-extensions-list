---
aliases:
- Hide Folders
author:
- JonasDoesThings
author_page: https://jonasdoesthings.com/
categories:
- '[[categories/UI customization|UI customization]]'
description: Hides & Toggles configured folders (e.g. attachments folders).
downloads: 17119
funding_page: https://www.buymeacoffee.com/jonasdoesthings
mobile: true
number: 1000
title: Hide Folders
type: plugin
updated: '2024-06-26T00:30:35'
url: https://github.com/JonasDoesThings/obsidian-hide-folders
version: 1.5.1
---

%% README_START %%

# obsidian-hide-folders

A simple plugin for [obsidian.md](https://obsidian.md) that hides configured folders, with the ability to toggle their visibility.  
This can be used for hiding attachments folders when you don't need them.

<a href="https://www.buymeacoffee.com/JonasDoesThings" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="27" width="116"></a>  

## Installation
Search in the community plugins menu of Obsidian for "Hide Folders" look for the right plugin ("by JonasDoesThings"), there you can install the latest stable version.  

![Screenshot of the Plugin Installation Menu](https://raw.githubusercontent.com/JonasDoesThings/obsidian-hide-folders/HEAD/docs/assets/installation-screenshot.png)

## Configuration
Enter the list of folder names to hide in the settings menu, **one folder per line**.
You can match folders using three ways:
* Exact folder-names (for example `attachments`)
* All folders **starting with** a specific string (for example `startsWith::_` to filter out all folders whose name starting with a `_`)
* All folders **ending with** a specific string (for example `endsWith::_trash` to filter out all folders whose name is ending with `_trash`)

![Screenshot of the Plugin Settings Screen in Obsidian.md](https://raw.githubusercontent.com/JonasDoesThings/obsidian-hide-folders/HEAD/docs/assets/settings-screenshot.png)  

You can then also use a sidebar button to quickly toggle the visibility without having to enter the settings menu:  

![Screenshot of the Plugin's Sidebar Button in Obsidian.md](https://raw.githubusercontent.com/JonasDoesThings/obsidian-hide-folders/HEAD/docs/assets/sidebar-screenshot.png)

Using the command palette is also supported:  

![Screenshot of the Plugin's Command Palette Action in Obsidian..md](https://raw.githubusercontent.com/JonasDoesThings/obsidian-hide-folders/HEAD/docs/assets/command-palette-screenshot.png)

## Development
### Setup
- Clone this repo.
- `npm i` or `yarn` to install dependencies
- `npm run dev` to start compilation in watch mode.

### Building
- `npm run build` to do a one-off build of the project, which produces the files needed for manually installing the plugin.

### Manually installing the plugin
- Copy over the outputted `main.js`, `manifest.json` from the `dist/` folder to your vault `VaultFolder/.obsidian/plugins/obsidian-hide-folders/`.  
-> Watch Out! You cannot copy-over the raw *main.**ts***. You need to run a build first and then copy over the produced *main.**js***.

## Support my work
I am maintaining free open source tools like this in my free-time.  
If I helped you, and you want to give back, you can [buy me a coffee (green tea)](https://www.buymeacoffee.com/jonasdoesthings).

## License
MIT License, see [LICENSE.md](./LICENSE.md)


%% README_END %%