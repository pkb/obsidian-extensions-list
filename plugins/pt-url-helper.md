---
aliases:
- Pivotal Tracker URL Helper
author:
- '[[authors/kndshein|kndshein]]'
categories: []
description: Automatically creates a Markdown link for Pivotal Tracker stories.
downloads: 64
mobile: true
number: 1701
stars: 0
title: Pivotal Tracker URL Helper
type: plugin
updated: '2024-06-06T10:14:45'
url: https://github.com/kndshein/obsidian-pt-url-helper
version: 0.1.4
---

%% README_START %%

# Pivotal Tracker URL Helper

An Obsidian plugin that aids w/ pasting [Pivotal Tracker](https://www.pivotaltracker.com) (PT) stories. When pasting PT story links, a formatted hyperlink will be created w/ the story number as the text.

Pasting `https://www.pivotaltracker.com/story/show/123456789` will become `[#123456789](https://www.pivotaltracker.com/story/show/123456789)`, which would render as `#123456789`.

## Quirks

-   If there is existing text selected when pasted, this plugin will favor default behavior (as if this plugin doesn't exist at all).
    -   If no other plugins that mutate selected-text behavior is installed, the selected text will simply be replaced w/ the "raw" link.
    -   If there is another URL-mutating plugin installed, such as [obsidian-url-into-selection](https://github.com/denolehov/obsidian-url-into-selection), pt-url-helper will not cause any conflicts.

## Potential Future Work

-   Adding a setting toggle to disable `#` prefix.
-   Allow pasting into selected text, simply replacing the selection with the formatted hyperlink.
    -   The main issue for this work is that I'm currently unsure how to override the behavior of other plugins that mutate selected texts.
-   Integrate w/ PT for the latest status of the story, and indicate that in the link.


%% README_END %%