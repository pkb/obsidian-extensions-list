---
aliases:
- Filtered Opener
author:
- '[[Balibaloo|Roman Kubiv]]'
categories: []
description: Open notes and folders. Chose from sets defined by filters.
downloads: 2529
mobile: true
number: 1461
stars: 9
title: Filtered Opener
type: plugin
updated: '2024-08-25T08:03:09'
url: https://github.com/Balibaloo/obsidian-picker
version: 1.3.0
---

%% README_START %%


Sets of notes defined by filters to open notes.

Is this [Obsidian](https://obsidian.md) plugin for you? [You should use this plugin if](#you-should-use-this-plugin-if)

To open a note, use the "Pick note" command.

<img src="https://raw.githubusercontent.com/Balibaloo/obsidian-picker/HEAD/assets/cover.gif" width=800px>


If you have more than one Note Filter Set, you will be prompted to chose one.

<img src="https://raw.githubusercontent.com/Balibaloo/obsidian-picker/HEAD/assets/new_set.gif" width=800px>

## Filter Sets
Filter sets can be created, deleted and configured in the settings of this plugin.

All filters support using [special characters](#special-characters) and regular expressions.
### regular expressions
All filters support regex matching. (including Tags!)
Any input that matches this format (`/^\/(.*)\/([gimuy]*)$/`) will be treated as regex.

### Open Note commands
When you create a Note Filter Set, a command to open a note from that set is created.

When using [special characters](#special-characters) in Filter Set names, some commands for Filter Sets could be merged and overwritten.
Obsidian requires command names to be normalised.
After the normalisation process some names might become the same.

For example, Set names `tasks ✅` and `tasks 👔` will be the same name after after removing the emojis.
When creating commands for both of these sets the command for the second set will overwrite the command for the first set.


## Pickers
Pickers display a list of items to select from.
There are multiple types of pickers that display items differently.

The main difference is the way they display items located in different folders.

### Flat picker
The flat picker "flattens" the folders of all the notes.
If a Note Filter Set matches items that contain the "🏗" emoji:

<img src="https://raw.githubusercontent.com/Balibaloo/obsidian-picker/HEAD/assets/folder_structure.png" width=300px>


The flat picker will show these notes like so:

<img src="https://raw.githubusercontent.com/Balibaloo/obsidian-picker/HEAD/assets/flat-picker.png" width=700px>


It will show the first folder that is different and the note name for each note.
If a Filter Set only has one item, that item will be selected automatically.

### Recursive Picker
The recursive picker steps through one level of folders at a time.
If a Note Filter Set matches items that contain the "✅" emoji:

<img src="https://raw.githubusercontent.com/Balibaloo/obsidian-picker/HEAD/assets/folder_structure.png" width=300px>

The recursive picker will first show the folders like so:

<img src="https://raw.githubusercontent.com/Balibaloo/obsidian-picker/HEAD/assets/recursive-1.png" width=700px>

If you select "👔 Work Category" it will recurse and show the notes inside the folder:

<img src="https://raw.githubusercontent.com/Balibaloo/obsidian-picker/HEAD/assets/recursive-2.png" width=700px>


If any folders have only one item inside, that item is selected automatically.

## special characters
All inputs in this plugin support special characters but may cause issues in some cases.

These characters include:
- punctuation `!@+/`
- emojis 😎
- other Unicode characters

Note: When using Unicode characters like emojis different characters with different character codes may look the same.
This may lead to issues referencing Filter Sets by name in other plugins.
To fix this try copying and pasting the name of the set to ensure that the characters are identical.

# You should use this plugin if
- You want to open notes from a set of notes.
- You want to define multiple sets of notes.
- You want to define a set of notes by their:
	- filename
	- pathname
	- tags
- You want to use regex for matching properties to define sets.
- You want to open notes from different sets with assigned hotkeys.


## API
This plugin has an API that can be used for developing other plugins.
It exposes functions to:
- get paths to notes and folders in a Filter Set
	- Filter Sets are referenced by names
- create setting interface elements to input and maintain Filter Sets

The core of the API was developed for the [Local Template Configuration Plugin](https://github.com/Balibaloo/obsidian-local-template-configuration) which was then extended to include create setting elements.

# Attributions
This repository uses code from the following projects:
- https://github.com/chhoumann/quickadd

Code credits are also placed in comments above code.

%% README_END %%