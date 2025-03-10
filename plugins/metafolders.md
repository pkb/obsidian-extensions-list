---
aliases:
- Metafolders
author:
- '[[authors/makary-s|Makary Sharoyan]]'
categories: []
description: Multidimensional note navigation
downloads: 1683
mobile: true
number: 1524
stars: 21
title: Metafolders
type: plugin
updated: '2024-03-14T04:09:39'
url: https://github.com/makary-s/obsidian-metafolders
version: 1.1.4
---

%% README_START %%

# Metafolders Plugin for Obsidian

Metafolders is an Obsidian plugin which reimagines file management by overcoming typical limitations:

-   It allows a single note to exist in multiple locations simultaneously.
-   It abandons folders, utilizing notes themselves as both content and containers.

## Design Philosophy

-   **Minimal Impact**: The goal is to minimally interfere with users' existing note-taking habits, enabling them to continue their workflow without reliance on the plugin, providing a natural extension to their note management system.
-   **Familiar Interface**: The goal is to provide a user interface that feels as natural and conventional as a standard file navigator.

## How It Works

Metafolders builds a tree of notes based on a special (customizable) property that contains links to parent notes. You can easily navigate the hierarchy by viewing the parents and children of each note directly on the plugin panel. Even without the plugin, you can navigate such a structure, but with Metafolders, it becomes significantly more convenient.

## Installation

-   Download the latest [release](https://github.com/makary-s/obsidian-metafolders/releases).
-   Unzip the files into your Obsidian vault's `.obsidian/plugins` directory.
-   Enable the plugin in Obsidian's settings under "Community Plugins".

## Features

-   **Linking:** Any note in the navigator can be made a parent or removed from the parents of the active note by pressing a link button.

-   **Root note pinning:** The root note can be pinned or changed with the active file. This can be adjusted by pressing the "pin" button.

    -   Any child tab can be made the root by double-clicking on it (relevant in pinned mode).

-   **Root file history:** The plugin panel has its own history of root files, which can be navigated using the "back" and "forward" buttons.

    -   The previous root note is marked with a special clock icon to visually see where you came from.
    -   The "home" button returns to the home file (see settings).

-   **Opening notes:** A note in the navigator can be opened differently:

    -   Click - opens in the active tab.
    -   Click + Ctrl - opens in a new tab.
    -   Click + Ctrl + Alt - opens in a new section.

-   **Title source** - You can specify where the text for the note title will come from (filename, heading, special prop). See settings section.

-   **Additional features:**

    -   Sorting items in a tree by name or dates.
    -   The plugin state is saved between reloads.
    -   Tree expansion within the session is preserved even when changing the root file.
    -   When you hover over a note, it is highlighted throughout the tree, wherever it appears (as it could occur multiple times).

## Settings

-   **Parent property name** - You can specify any name for the property that indicates the parents. By default, it is "up".

-   **Title source** - You can specify where the text for the file title will come from. Options include:

    -   File name
    -   A property from the front-matter
    -   The first h1 heading (enter `{{h1}}`)

    You can specify multiple options separated by commas. If the title cannot be found using the first option, the algorithm will move to the next one. If none of the options are found or the field is empty, the file name will be used as the title.

-   **Home file path** - In the settings, you can specify a home page, then a home button will appear on the toolbar, which will open it.

## Future Plans

You can view detailed information on the development roadmap and upcoming features [here](https://github.com/users/makary-s/projects/1/views/1).

## Support & Feedback

Your contributions and feedback are invaluable! If you have any suggestions, improvements, or questions, please don't hesitate to submit a pull request, open an issue, or reach out through any contact listed in my profile [here](https://github.com/makary-s).

## Changelog

### 1.1.0

-   [2024.03.02] Now you can specify properties or a heading from which the file title will be derived. This can be done in the settings under the "Title source" section.
-   [2024.03.03] Added the ability to sort files.


%% README_END %%