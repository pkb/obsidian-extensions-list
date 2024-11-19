---
aliases:
- Multi Tag
author:
- technohiker
author_page: https://github.com/technohiker
categories: []
description: Adds a tag to multiple notes at once.  Either right-click a folder, or
  select multiple notes and right-click the selection.
downloads: 9785
mobile: false
number: 1082
title: Multi Tag
type: plugin
updated: '2023-11-29T08:14:11'
url: https://github.com/fez-github/obsidian-multi-tag
version: 0.10.0
---

%% README_START %%

# Multi-Tag

![Multi Tag Demo](https://github.com/fez-github/obsidian-multi-tag/assets/75589254/8cb7cd25-9fd5-4105-8658-6d32e1f219b4)


UPDATE: This plugin will remain functional, but I will be focusing on [obsidian-multi-properties](https://github.com/fez-github/obsidian-multi-properties) instead, which serves very similar functionality.  Multi Tag will be around for anyone who wants to use inline tags.

When installed, right-clicking on a folder will bring up an option to add a tag to all notes within a folder. Upon clicking this, a message will pop up asking you to add a tag. You may add your tag, and it will be appended to each note in the folder.

You can also select multiple notes with Shift+Mouse, and right-click the selection to get the same efect.

If you want your tags to be appended to the frontmatter via YAML/Properties, there is a toggle for this in the plugin's Settings menu. "YAML" will add the tags as a property, and "Inline" will append each tag to the bottom of the note. Note that "YAML" checks for duplicate tags, but "Inline" does not.

# Installation:

This project is available as a community plugin in Obsidian that can be installed directly in the app, under the name `Multi Tag`.

If you wish to install it manually,

1. Download the latest release.
2. Extract the folder within the release and add it to `[yourVault]/.obsidian/plugins/`.

## Ideas for Features:

- [x] Settings option for whether tag appears in YAML or bottom of file.

## Next Steps:

- [x] Update obsidian typing so "files-menu" is properly implemented.
- [x] Allow user to change between YAML/Inline directly from the form instead of needing to go into Settings.
- [x] Clean up code. It's kind of messy right now.
- [x] Try converting to front-end framework to make forms easier to manage. Will try Svelte.
- [ ] Add tests.


%% README_END %%