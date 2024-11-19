---
aliases:
- OnlyWorlds Builder
author:
- Titus
author_page: https://onlyworlds.github.io
categories: []
description: World building structure with OnlyWorlds integration
downloads: 145
funding_page: https://www.onlyworlds.com
mobile: false
number: 1928
title: OnlyWorlds Builder
type: plugin
updated: '2024-10-09T01:33:20'
url: https://github.com/OnlyWorlds/obsidian-plugin
version: 1.0.2
---

%% README_START %%

# OnlyWorlds Plugin for Obsidian

This plugin provides complete workflows for world creation, building, and management, fully compatible with the [OnlyWorlds](https://www.onlyworlds.com) framework.

It functions as a standalone tool for organizing worlds, and facilitates the transfer of these worlds across various other tools and games.

## OnlyWorlds

OnlyWorlds is a framework for creating, building, sharing, and simulating worlds.

It is currently in a closed release. A public release is planned for December 2024. 

More information in this [technical documentation](https://onlyworlds.github.io/), although this site is still under construction and revision.

To register, please request a keycode by:

- Using [this form](https://www.onlyworlds.com/about/), or
- Joining [discord](https://discord.gg/twCjqvVBwb), or
- Emailing onlyworldsdev@gmail.com



## Configuring Hotkeys

This plugin requires a custom hotkey to link element fields

Suggestion: CTRL/CMD + SHIFT + L

To set up:
1. Open Obsidian
2. Go to `Settings` -> `Hotkeys`
3. Search for "Link Elements"
4. Click on the + symbol, then input a combination
 
## Getting Started 

Use the Create World command (Ctrl + P)

If necessary folders and/or files are missing, this command will automatically import and create them

A folder 'OnlyWorlds' will be created at the top of your vault. As of release 1.0.2, this folder must remain at the top of your vault for the plugin to function

Use Create Element to fill your world with elements of [various categories](https://onlyworlds.github.io/docs/framework/categories.html)

Integrate existing world content, or create new content, by shaping elements through their attribute fields. Join community [discussions](https://github.com/OnlyWorlds/OnlyWorlds/discussions) on improving field definitions

Convert your worlds into a JSON data file by using the 'Copy World' command, or export it to OnlyWorlds.com using the 'Export World' command

## Folder Structure
- **OnlyWorlds/**: Parent folder at top of vault
	- **PluginFiles**:
		- **Handlebars/**: Should not be modified
    	- **Templates/**: Should not be modified
    - **Worlds/**: User worlds directory
        - **WorldOne/**:  
            - **Elements/**: World elements, represented as notes
            - **World**: World configuration file 
            - **World Data**: Output file for Copy World command
        - **WorldTwo/**:  
            - ..
    - **README**: ..
    - **Settings**: A few plugin options

## Commands 
- `Create World` Create a new world file and necessary files
- `Paste World`  Create necessary files and world directly from a World Data string - `Import World` Create necessary files and world from online World Data using a world key
- `Copy World` Create World Data string for a world in your vault
- `Export World` Send World Data of your world online using a world key
- `Rename World`  Alter the name of your world (safely)
- `Validate World`  Manual call that is forced on export for ensuring correct content and formatting
 - `Create Element`  Choose a category, then enter a name to create
 - `Create {Category}`  Enable 18 direct category creation commands in Settings  

## Element Editing
- **Normal fields**: Accept text of any length

- **Italic fields**: Numeric only. Hover or click the field to see potential maximum value

- **Link fields** (underlined): Place cursor behind, then use {your-link-elements-hotkey} to view pickable elements. Light blue for single reference, dark multi

### Editing Guidelines
- The **Name** field of an element must match the note name
- Each element must have a unique Id, generated automatically with **Create Element** command. When duplicating manually, ensure to generate a [new UUIDv7](https://www.uuidgenerator.net/version7)

## Settings 
- Write the **active world** name for ongoing work 
- Enable 18 category-specific commands for creating elements
- Set the default category for creating new elements
   
## Contact and Contribution
Feedback and contribution for this plugin or anything OnlyWorlds is always welcome, via  [discord](https://discord.gg/twCjqvVBwb) or [github](https://github.com/OnlyWorlds/OnlyWorlds) or [reddit](https://www.reddit.com/r/OnlyWorlds/) or [email](onlyworldsdev@gmail.com)

  


%% README_END %%