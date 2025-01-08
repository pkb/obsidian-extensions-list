---
aliases:
- Simple Mention
author:
- '[[authors/der-tobi|der-tobi]]'
categories: []
description: Get highlighted mentions and mention suggestions. Find all occurrences
  of a mention
downloads: 5307
mobile: false
number: 596
stars: 37
title: Simple Mention
type: plugin
updated: '2023-05-25T01:16:38'
url: https://github.com/der-tobi/obsidian-simple-mention
version: 1.0.0
---

%% README_START %%

# Obsidian simple mention
A simple plugin that visually highlights mentions and suggests existing ones as you write (except in codeblocks).   
The mention prefix can be customized and defaults to `@`.  
Find all occurrences of a mention in the side pane and jump to the corresponding line in the document.  
Distinguish your personal mentions from the others by a different color.

![Overview obsidian simple mention](https://raw.githubusercontent.com/der-tobi/obsidian-simple-mention/HEAD/obsidian_general.gif)

Filter your mentions by a phrase

![Filter your mentions](https://raw.githubusercontent.com/der-tobi/obsidian-simple-mention/HEAD/obsidian_filter.gif)

## Settings
You can:
- set the trigger phrase (@)
- set the color of the mentions (green)
- set the color of your own mentions (deeppink)
- set the name, how you want to mention yourself (Me)
- delete the cache (indexeddb)

## Shortcuts
### In edit mode
`ctrl+space` or `ctrl+click` on a mention, opens the right side pane with all occurrences of that mention.

![Edit mode shortcuts (ctrl+space or ctrl+click)](https://raw.githubusercontent.com/der-tobi/obsidian-simple-mention/HEAD/obsidian_ctrl_space.gif)

### In preview mode
When you click on a mention, the right side pane opens with all occurrences of that mention.

![Preview Mode shortcuts](https://raw.githubusercontent.com/der-tobi/obsidian-simple-mention/HEAD/obsidian_preview_klick.gif)

## Known issues
- We need to restart Obsidian after
  - adjusting the trigger phrase for the changes to take effect.
  - changing the name of yourself for the changes to take effect.
  - ignoring a directory
  - deleting the cache
- Style could currently not be overridden by a template (simple fix)

## Ideas
- Group mentions
  - eg. @group-x(@bob,@lisa)
  - usage: find all mentions of @bob and @lisa by searching for @group-x
- Multi select of mentions in the view
- Show sub bullet points
- own color for each "person"

%% README_END %%