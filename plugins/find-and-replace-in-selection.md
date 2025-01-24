---
aliases:
- Find and replace in selection
author:
- '[[authors/dy-sh|Dmitry Savosh]]'
categories: []
description: Finds what you are looking for in the selected text and replaces it with
  the specified text
downloads: 15763
mobile: true
number: 137
stars: 33
title: Find and replace in selection
type: plugin
updated: '2021-03-22T21:47:06'
url: https://github.com/dy-sh/obsidian-find-and-replace-in-selection
version: 1.0.1
---

%% README_START %%

# Find and replace in selection

This plugin for [Obsidian](https://obsidian.md/) adds a "Find and replace in selection" command. This command performs a search in the selected text, and all found characters/words/text constructions will be replaced with others. The plugin can search for plain text or regular expressions.

## How to configure

Assign a hotkey to "Find and replace in selection" command.

## How to use

- In the plugin settings, specify which text to search for (plain text or regular expression) and what to replace it with. 
- Just select the text (you can select the entire note) and press hotkey or call "Find and replace in selection" command. To quickly make a replacement in one line of text, you can simply put the cursor on this line and press the hotkey.

### Examples

**Remove bold highlighting from all text**:

- Text to find: "**"
- Replace by: "" (empty)

**Replace all H2 headers with H3 headers**:

- RegExp to find: "^## " (space at the end)
- RegExp flags: "gm" (global, multiline)
- Replace by: "### " (space at the end)

If you want to make all H1 become H2, all H2 become H3, H3 become H4, then you need to start with H3, then H2, then H1.

**Remove all display text from embed links**:

- RegExp to find: "```(?<!\\)\!\[(.*?)(?<!\\)\]\((.*?)(?<!\\)\)```"
- RegExp flags: "gm"
- Replace by: "```![](https://raw.githubusercontent.com/dy-sh/obsidian-find-and-replace-in-selection/HEAD/$2)```"

As result, this: 
```![Description](https://raw.githubusercontent.com/dy-sh/obsidian-find-and-replace-in-selection/HEAD/URL)```
will become:
```![](https://raw.githubusercontent.com/dy-sh/obsidian-find-and-replace-in-selection/HEAD/URL)```

%% README_END %%