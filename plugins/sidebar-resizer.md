---
aliases:
- Sidebar Resizer
author:
- Jeet Sukumaran
author_page: https://github/jeetsukumaran/obsidian-sidebar-resizer
categories: []
description: Adjust the sidebar sizes easily.
downloads: 350
funding_page:
  Buy Me a Coffee: https://www.buymeacoffee.com/jeetsukumaran
mobile: true
number: 1768
title: Sidebar Resizer
type: plugin
updated: '2024-07-05T08:27:47'
url: https://github.com/jeetsukumaran/obsidian-sidebar-resizer
version: 1.0.11
---

%% README_START %%

# Sidebar Resizer Plugin for Obsidian

This plugin allows users to programmatically adjust the widths of the left and right sidebars in Obsidian. Users can increase, decrease, toggle, and evenly distribute sidebar widths using commands. The widths can be specified in pixels (px) or percentages (%).

## Features

- Increase or decrease the left and right sidebar widths by a specified increment.
- Toggle the left and right sidebars to their standard widths.
- Expand or collapse both sidebars to their standard widths or to zero width.
- Evenly distribute the left and right sidebar widths to specified percentages.

## Installation

1. Clone or download the repository.
2. Place the plugin files in the Obsidian plugins directory (typically located at `YourVault/.obsidian/plugins/sidebar-resizer`).
3. Enable the plugin in Obsidian settings under "Community plugins."

## Usage

### Commands

The following commands are available for adjusting sidebar widths:

1. **Increase left sidebar width**: Increases the left sidebar width by the specified increment.
2. **Decrease left sidebar width**: Decreases the left sidebar width by the specified increment.
3. **Increase right sidebar width**: Increases the right sidebar width by the specified increment.
4. **Decrease right sidebar width**: Decreases the right sidebar width by the specified increment.
5. **Toggle left sidebar (standard width)**: Toggles the left sidebar between its standard width and zero width.
6. **Toggle right sidebar (standard width)**: Toggles the right sidebar between its standard width and zero width.
7. **Expand both sidebars to standard widths**: Sets both sidebars to their standard widths.
8. **Collapse both sidebars**: Collapses both sidebars to zero width.

### Hotkeys

There are no hotkeys bound by default.
The commands above can be bound to keys following your preferences through the normal Obsidian settings.
Following are some examples or recommendations:

| Command                                 | Keybinding         |
|-----------------------------------------|--------------------|
| Increase left sidebar width             | `Ctrl+[`           |
| Decrease left sidebar width             | `Ctrl+Alt+[`       |
| Toggle left sidebar (standard width)    | `Ctrl+Shift+[`     |
| Increase right sidebar width            | `Ctrl+]`           |
| Decrease right sidebar width            | `Ctrl+Alt+]`       |
| Toggle right sidebar (standard width)   | `Ctrl+Shift+]`     |
| Expand both sidebars to standard widths | `Ctrl+Alt+Shift+]` |
| Collapse both sidebars                  | `Ctrl+Alt+Shift+[` |


### Settings

You can adjust the following settings in the plugin settings tab:

1. **Width increment**: The amount to increase or decrease the sidebar width. This can be specified in pixels (e.g., "50px") or percentages (e.g., "10%").
2. **Left sidebar standard width**: The standard width for the left sidebar. This can be specified in pixels (e.g., "100px") or percentages (e.g., "20%").
3. **Right sidebar standard width**: The standard width for the right sidebar. This can be specified in pixels (e.g., "100px") or percentages (e.g., "20%").

## License

This plugin is released under the MIT License.


%% README_END %%