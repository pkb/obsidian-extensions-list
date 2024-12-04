---
aliases:
- Automatic Renumbering
author:
- '[[OmriLeviGit|Omri Levi]]'
categories: []
description: Updates numbered lists automatically to keep them in sequential order.
  Offers both live updating and manual control options, and supports nested lists.
downloads: 335
mobile: false
number: 2008
stars: 5
title: Automatic Renumbering
type: plugin
updated: '2024-11-26T16:02:54'
url: https://github.com/OmriLeviGit/Automatic-Renumbering-Obsidian
version: 1.1.0
---

%% README_START %%

# Automatic Renumbering Plugin for Obsidian

The Automatic Renumbering plugin helps keep your numbered lists in sequential order automatically, which is particularly useful for users who frequently work with structured documents. It features live updates, smart pasting, and manual control options.

## Installation Steps

To get started with the Automatic Renumbering Plugin, follow these steps:

1. Download the latest release files and place them into a folder.
2. Move that folder into Obsidian's **plugins** folder. You can find this folder by opening Obsidian and navigating to **Options → Community plugins**, where you'll see a **folder** and a **refresh** buttons next to the **Installed plugins** heading.

    > **Note:** If the **Installed plugins** heading isn’t visible, this may be because this is your first plugin. Downloading any other community plugin will give you access to this section and the associated buttons.

3. Click the **refresh** button and enable the plugin.
4. Adjust the **tab size** in the plugin’s in the settings to match your editor’s settings (found under **Options → Editor → Tab indent size**).

## Features

-   **Live Update**: Automatically renumbers lists as you edit, helping maintain accurate sequencing without manual adjustments.

-   **Pasting**: Ensures correct sequencing when pasting numbered content. When live update is enabled, an optional smart pasting feature can be enabled to keep the sequencing consistent with the original numbered list.

-   **Special Key Handling**: Temporarily disables the live update when special keys (`Ctrl`, `Command` on Mac, or `Alt/Option`) are pressed during editing, enabling actions such as undo without triggering unnecessary renumbering.

-   **Manual Control**: Offers commands for manual renumbering if you prefer to manage updates yourself.

<br>
<br>

![Regular paste](https://raw.githubusercontent.com/OmriLeviGit/Automatic-Renumbering-Obsidian/HEAD/resources/regular_paste.gif)
![Smart paste](https://raw.githubusercontent.com/OmriLeviGit/Automatic-Renumbering-Obsidian/HEAD/resources/smart_paste.gif)

> Regular paste (left) | Smart paste (right).

## Commands

You can view the available commands by pressing `Ctrl + P`.

-   **Renumber at Cursor**: This command will renumber the list starting from the current cursor position, allowing you to make quick adjustments as needed.
-   **Renumber Selected Lists**: If you highlight multiple numbered lists, this command renumbers all of them at once.
-   **Renumber Entire Note**: For a comprehensive update, this command renumbers every numbered list in your active note, ensuring complete consistency.

## Performance

The live update feature renumbers lists locally, adjusting the current line based on the previous line until it reaches the first correctly numbered line, which minimizes unnecessary calculations.
In addition, the plugin was tested with documents containing lists with over 10,000 lines, and no performance issues were found on my machine.

## Limitations

The plugin does not support automatic renumbering in Vim mode, but you can still trigger renumbering commands manually. Additionally, it requires manual specification of tab sizes for correct nested numbering, as automatic detection is not available.


%% README_END %%