---
aliases:
- HTML Tags Autocomplete
author:
- '[[authors/bicarlsen|Brian Carlsen]]'
categories: []
description: Autocomplete HTML tags.
downloads: 14051
mobile: true
number: 331
stars: 27
title: HTML Tags Autocomplete
type: plugin
updated: '2023-04-23T21:58:35'
url: https://github.com/bicarlsen/obsidian_html_tags_autocomplete
version: 0.0.7
---

%% README_START %%

# Obsidian HTML Tags Autocomplete

### Autocomplete HTML tags. It's as simple as that.

![Autoccomplete example](https://raw.githubusercontent.com/bicarlsen/obsidian_html_tags_autocomplete/HEAD/autocomplete_example.png)

This plugin does three things:
 1. **Add closing tag.** When typing HTML tags for formatting, the closing tag will be suggested. For example, for subscripts in text you type `<sub>` and this plugin will add the closing `</sub>` tag for you.
 
 2. **Skip over tags.** Skip across the entire tag when moving the cursor next to or inside of a tag.
 
 3. (Coming soon) **Modify matching tag.** If you modify an HTML tag, its matching tag will also be updated.


 ## Commands
 
 Three navigation commands are added with this plugin.

 ### Skipping over tags
 To skip across a tag use the `Skip over tag backward` or `Skip over tag forward` command. these commands are only available when inside of or next to a tag.
 
 **Suggested hotkeys**: `Ctrl + Meta + <-`, `Ctrl + Meta + ->`


 ### Go to matching tag
 When inside of or next to a tag, go to the matching tag, if it exists using the `To matching tag` command.

 **Suggested hotkey:** `Ctrl + m`

%% README_END %%