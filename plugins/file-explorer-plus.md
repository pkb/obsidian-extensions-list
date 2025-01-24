---
aliases:
- File Explorer++
author:
- '[[authors/kelszo|kelszo]]'
categories: []
description: Hide and pin files and folders in the file explorer using custom filters,
  such as wildcards and regex, based on their names, paths, and tags. Additionally,
  achieve the same with a single click in the file menu.
downloads: 18768
mobile: true
number: 1123
stars: 63
title: File Explorer++
type: plugin
updated: '2024-06-10T22:55:48'
url: https://github.com/kelszo/obsidian-file-explorer-plus
version: 1.2.1
---

%% README_START %%

# File Explorer++ Plugin for [Obsidian.md](https://obsidian.md/)

**File Explorer++** enhances the built-in file explorer in [Obsidian.md](https://obsidian.md/). This plugin enables users to efficiently
hide and pin files and folders. You can utilize custom wildcard or regex filters based on file/folder names, paths, and tags. Additionally,
a simple click in the file menu lets you hide or pin specific files or folders.

<p align="center"><img src="https://raw.githubusercontent.com/kelszo/obsidian-file-explorer-plus/HEAD/assets/example.png" width="350"></p>

## **Usage**

1. Set up filters either via the plugin settings tab in Obsidian or by right-clicking on a file/folder and choosing "Hide/Pin file".
2. Toggle filters on/off in settings or using the `Toggle all pin/hide filters` command. For individual filters, use the
   `Toggle pin/hide filter` command.

## **Features**

-   **Flexibility in Filtering**: Hide and pin files and folders using wildcard or regex filters for names, paths, and tags.
-   **Quick Action**: Instantly hide or pin specific files and folders with a right-click.
-   **Efficiency**: Through monkey patching, the plugin only runs during Obsidian folder sorting or when a filter changes.
-   **Transparency**: View the paths hidden or pinned and understand the filter behind each.
-   **Mobile Compatibility**: This plugin supports mobile devices.

## **Ribbon Icon**
If you want an icon in the ribbon sidebar, I would recommend using [Obsidian Commander](https://github.com/phibr0/obsidian-commander)
and adding the `File Explorer++: Toggle all hide filters` command.

## **Feature Requests and Bug Reporting**

Though the plugin is in its initial stages, we're open to enhancement suggestions. If you encounter any bugs or have a feature in mind,
kindly open an issue for discussion.

## **License**

File Explorer++ is under the GNU [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.en.html) license. For more details, see the `LICENSE`
file.


%% README_END %%