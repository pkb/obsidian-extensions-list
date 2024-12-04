---
aliases:
- Confluence Sync
author:
- '[[kerry|Prateek Grover]]'
categories: []
description: Sync Obsidian notes with Confluence
downloads: 1523
mobile: true
number: 1501
stars: 9
title: Confluence Sync
type: plugin
updated: '2024-03-01T09:03:54'
url: https://github.com/kerry/obsidian-confluence-sync
version: 1.0.8
---

%% README_START %%

# Confluence Sync Plugin

A plugin to sync obsidian notes to [Confluence](https://www.atlassian.com/software/confluence). The plugin is in a very early phase.

## Steps to follow to enable sync

- From the command palette, select command to create new confluence connection with the relevant obsidian note opened
- Enter the confluence page id (numerical)
- From the command palette, select command to sync obsidian note to confluence

## Caveats

- To enable sync there needs to be a unique ID for each note so that even if the note changes path, its settings and confluence connection is maintained
- Confluence pages can also change their title, hence need to use confluence page ID.


%% README_END %%