---
aliases:
- Poker Range
author:
- '[[authors/marplek|marplek]]'
categories: []
description: Create a poker range grid
downloads: 80
mobile: true
number: 1899
stars: 1
title: Poker Range
type: plugin
updated: '2024-09-05T08:59:06'
url: https://github.com/marplek/obsidian-poker-range
version: 1.0.0
---

%% README_START %%

# Obsidian Poker Range

Easily create, view, and interact with poker hand ranges in your notes.

## Screenshot

![Poker Range Grid](https://raw.githubusercontent.com/marplek/obsidian-poker-range/HEAD/image/poker-range-grid.gif)

## How to Install

In Obsidian go to `Settings > Third-party plugins > Community Plugins > Browse` and search for `Poker Range`.

### Manual installation

Unzip the [latest release](https://github.com/marplek/obsidian-poker-range/releases/latest) into your `<vault>/.obsidian/plugins/` folder.

## How to Configure

The plugin allows you to customize the default range for new grids. Go to `Settings -> Poker Range` to set your preferred default range.

## How to Use

### Creating a Poker Range Grid

1. Manually create a code block:

    Use the following code block structure:

```poker-range
<!-- grid-id: grid-[enter random alphanumeric string]-[enter random alphanumeric string] -->
AA,87o
```

Note: Replace `[enter random alphanumeric string]` with any random alphanumeric string of your choice.
Ex:

```poker-range
<!-- grid-id: grid-1725446018704-29wjpy1f1 -->
AA,KK,AKs,AQs,AJs,ATs,A9s,A8s,A7s,A6s,A5s,A4s,A3s
```

2. Use the command palette:

    1. Press `Ctrl+P` (or `Cmd+P` on Mac) to open the command palette
    2. Type "Insert Range Table" and select the command

    This will insert a new poker range grid at your cursor position.

Both methods will create an interactive poker range grid in your note.

### Interacting with the Grid

-   Click on individual cells to select or deselect hands
-   Click and drag to select multiple hands at once
-   The first click determines whether you're selecting or deselecting hands
-   Release the mouse button or move out of the grid to end the selection
-   The plugin will automatically update the range information in your note


%% README_END %%