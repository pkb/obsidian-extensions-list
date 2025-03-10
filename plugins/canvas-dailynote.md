---
aliases:
- Canvas Daily Note
author:
- '[[authors/andrewmcgivery|Andrew McGivery]]'
categories: []
description: Allows you to add a daily note node to the canvas that will always show
  todays note.
downloads: 1963
mobile: false
number: 1398
stars: 14
title: Canvas Daily Note
type: plugin
updated: '2024-02-15T02:52:22'
url: https://github.com/andrewmcgivery/obsidian-canvas-dailynote
version: 1.0.2
---

%% README_START %%

# Obsidian Canvas Daily Note

A plugin for Obsidian.MD that allows you to add a daily note node to the canvas that will always show todays note.

![A screenshot of a daily note on the canvas and the "add daily note" button in the bottom controls](https://raw.githubusercontent.com/andrewmcgivery/obsidian-canvas-dailynote/HEAD/canvas.png)

## How to Install

Plugin is availale to isntall from the [Official Community Plugins](https://obsidian.md/plugins?id=canvas-dailynote).

## How to Use

On a canvas view, a new button will be added. When you click this button, it will add a new file node for your daily note. The plugin will automatically keep this file node up to date with the latest daily note whenever you open the canvas.

![A screenshot showing the "add daily note" button](https://raw.githubusercontent.com/andrewmcgivery/obsidian-canvas-dailynote/HEAD/add_button.png)

> [!NOTE]
> This plugin works by adding a special metadata (`unknownData`) to the file node. It will only work on these nodes crated via the plugin and will not work on existing file nodes.

> [!WARNING]
> The updating of the daily note to today's note involved removing the existing canvas node and replacing it with a new one. As a result, the plugin currently doesn't support connections from the daily note node to other nodes.

## Settings

When inserting a new node, or updating en existing node to today's daily note, the plugin by default will create the daily note if it does not already exist.

If you would like the plugin to not do this, or not do it on specific days of the week, you can update this in settings.

![A screenshot of the settings screen](https://raw.githubusercontent.com/andrewmcgivery/obsidian-canvas-dailynote/HEAD/settings.png)

## Customization

To customize the appearance of a daily note node, you can utilize CSS to target the element.

```css
/* Change look of Button */
.canvas-button-adddailynote {
}
/* Change look of daily note node */
.canvas-node-dailynote {
}
/* Change look of daily note node label */
.canvas-node-dailynote .canvas-node-label {
}
/* Change look of daily note node label pre-text */
.canvas-node-dailynote .canvas-node-label:before {
}
```

## Reporting Issues

If you run into any issues with this plugin, please [open an issue](https://github.com/andrewmcgivery/obsidian-ribbon-divider/issues/new) and incude as much detail as possible, including screenshots.

# Leave a Tip

<a href="https://www.buymeacoffee.com/andrewmcgivery" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>


%% README_END %%