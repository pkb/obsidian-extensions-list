---
aliases:
- Fuzzy Note Creator
author:
- '[[HaloGamer33|HaloGamer33]]'
categories: []
description: Create notes in folders with the help of a fuzzy finder.
downloads: 362
mobile: false
number: 1649
title: Fuzzy Note Creator
type: plugin
updated: '2024-11-13T03:49:54'
url: https://github.com/HaloGamer33/Obsidian-Fuzzy-Note-Creator
version: 0.6.3
---

%% README_START %%

[![Obsidian](https://img.shields.io/badge/Obsidian-Plugin-%237C3AED?style=flat-square&logo=obsidian)](https://obsidian.md)
[![GitHub Release](https://img.shields.io/github/v/release/HaloGamer33/Obsidian-Fuzzy-Note-Creator?sort=semver&display_name=release&style=flat-square&label=Version&color=48b235)](https://github.com/HaloGamer33/Obsidian-Fuzzy-Note-Creator/releases/latest)
[![Made By](https://img.shields.io/badge/Made%20By-HaloGamer33-white?style=flat-square&label=Made%20by%20&color=%23e12a56)](https://github.com/HaloGamer33)

# Obsidian Fuzzy Note Creator

This Obsidian plugin allows users to quickly create new notes using a fuzzy search interface for selecting the destination folder and providing the note title.

# Usage

https://github.com/user-attachments/assets/fc866ea6-fd51-4d87-b868-01154af9843d

## Opening Fuzzy Note Creator

1. Press Ctrl + P (Cmd + P on macOS) to open the command palette.
2. Type 'Fuzzy Note Creator' and select one of the following commands:

- Note in new tab
- Note in current tab
- Note in new window
- Note in current window splitting horizontally
- Note in current window splitting vertically

The names explain what they do, but I would recommend trying them out to see which functionality you like the most. You may also 
set a key bind to open the note creator (settings -> hotkeys).

## Bulk note creation

Each one of the commands has a 'bulk' version, this means that after selecting the desired folder the creation dialogue 
won't close after the new note has been created, this allows you to create multiple files in the same folder without having to call the 
command multiple times.

## Creating a New Note

1. Upon opening the Fuzzy Note Creator, you will be prompted to enter the path to the folder where you want to create the note.
2. Type the path into the input field. You will receive suggestions based on existing folders in your vault. Use tab to autocomplete.
3. Select the desired folder from the suggestions.
4. After selecting the folder, you will be prompted to enter the title of the new note.
5. Enter the title and press Enter.
6. The note will be opened in the Obsidian workspace based on the command that you selected.

## Use of `/` and `\` when inputting the note title

If you use either `/` or `\` in the title note, the plugin assumes that you want to create the parent folders for your note, for example:

Let's say that you selected `Parent Folder` as the folder where you want to create the note, and then you input `This is a folder/This is a note`
as the title of the note, the plugin will then create the folder `This is a folder` inside `Parent Folder` which would result in a path that
looks like this `Parent Folder/This is a folder` afterwards the plugin will create your note with the title `This is a note` inside `This is a folder`, so the final note will
be located at: `Parent Folder/This is a folder/This is a note.md`.

You can use either `/` or `\` to trigger this functionality, you can even combine the two.

`/\this//is/\/a /test to // demostrate functionality \ hope you\ \ \like it \/` is a valid input that would result in: `this/is/a/test to/demostrate functionality/hope you/like it.md`.

## Settings

As of version 0.4.0 there are 4 settings that you can configure:

### General

#### 1. **Show instructions**

This toggles the visibility of the built-in instructions that you see when opening the plugin:

Setting turned on
<p align="center">
    <img src="https://i.imgur.com/hy0FAij.png" alt="Image of the setting turned on" width=75%>
</p>

Setting turned off
<p align="center">
    <img src="https://i.imgur.com/YuEjGzH.png" alt="Image of the setting turned off" width=75%>
</p>

#### 2. **File extension**

When creating any note with the plugin, the file extension that you define on this setting will be appended to the end of the note title that you provide. If you set anything other
than `.md` (Markdown) then Obsidian will try to open the file in system's the default application after it has been created. If left empty, it will default to `.md`.

### Current Folder Recommendations

#### 1. **Current folder first**

When this setting is active, the plugin looks at your current active note, and then gives you the
folder where that note is located as your first recommendation.

#### 2. **Current folder recommendation**

This setting makes it, so the plugin adds a recommendation named (by default) "Current Folder", this
works as you'd expect, when you select this as your folder, the current folder from your currently
active note will be used for the new note. This setting exists to mimic the way that other plugins
handle similar behavior, so people that are already used to a certain name for the "Current Folder"
concept don't have to re-adapt to my plugin.

#### 3. **Current folder recommendation name**

This is the name for your "Current Folder" recommendation.

### Untitled Notes

#### 1. **Allow untitled notes**

If you have this setting turned on, then when you provide no title name, the plugin will create a new note based on the title that you give on the `Name for untitled notes` setting,
if you have it turned off, then a notice will appear on the top right of the screen asking you to set a title for your note.

#### 2. **Name for untitled notes**

This is the name that the plugin will use when you provide no title for your new note and the setting `Allow untitled notes` is turned on. If left empty, it will default to
`Untitled`.

### Note Templates

#### 1. **Use note templates**

Toggle the use of note templates, these templates define what your note will contain at the time of its creation.

#### 2. **Template folder location**

This sets the path of the folder from where the plugin will grab the templates, any markdown note (and some non-markdown as well) on this folder will be shown to you as options for when you
create a new note.

#### 3. **Date format**

Inside your templates you can write {{date}} to have it replaced by the current date, you can personalize how the date is going to be shown via the text box in this setting, you can see how the
formatting of this setting works [here](https://momentjs.com/docs/#/displaying/format/).

#### 4. **Time format**

This is the same as the 'Date format' but with time instead, you can use {{time}} inside your note to have your current time be replaced based on the same formatting as the date option, and since
the formatting is the same you could even use this setting as a second time of date, or vice versa. [Formatting reference here](https://momentjs.com/docs/#/displaying/format/).

### Note Title Templates

#### 1. **Use note title templates**

This setting toggles the use of 'Note title templates' a functionality very similar to the one of normal templates, however this one works with the title/name of the note.

#### 2. **Note title templates**

In here you define the templates that you want for your note titles, each one of them must be separated by a new line, and all the characters that can be replaced based on
[this format](https://momentjs.com/docs/#/displaying/format/) will be replaced (you can use a `\` at the beginning of a character if you don't want it replaced) then, when
you create a new note, this title template will be suggested to you, the note will have its title replaced for what your template dictates, and a new empty note will be created.

There are plans to pair this functionality with the normal templates, so that way you can use a title template and a normal template at the same time. Stay tuned for that.

### Override New Note Button

#### 1. **Override Obsidian's new note button**

This slider activates the override for the native 'New note' button that is located on top of the file explorer, when active the normal functionality will be replaced for the one
defined at the setting 'Override command'.

#### 2. **Override command**

This dropdown menu selects the command that will be called when the override for the 'New note' button is active, if none is set the default command is 'New tab'.

# Contributing

If you encounter any issues or have suggestions for improvements, please feel free to open an issue on the GitHub repository.

# License

This plugin is licensed under the GNU GPLv3 License.


%% README_END %%