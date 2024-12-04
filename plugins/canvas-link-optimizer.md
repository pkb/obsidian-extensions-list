---
aliases:
- Canvas Link Optimizer
author:
- '[[khaelar|khaelar]]'
categories: []
description: Optimize canvas links by displaying a page thumbnail.
downloads: 2674
mobile: false
number: 1459
stars: 16
title: Canvas Link Optimizer
type: plugin
updated: '2024-10-28T21:10:04'
url: https://github.com/khaelar/obsidian-canvas-link-optimizer
version: 1.3.0
---

%% README_START %%

# Obsidian Canvas Link Optimizer Plugin

This is a lightweight Obsidian plugin designed to enhance the user experience with canvas link nodes. By default, link nodes in Obsidian canvas load the web page content as they come into view. The plugin modifies this behavior by displaying a preview thumbnail instead, which significantly reduces resource consumption. Users can still access the full web page by clicking on the thumbnail if they need more detailed information.

Here's the default behavior of link nodes in Obsidian:
![](https://raw.githubusercontent.com/khaelar/obsidian-canvas-link-optimizer/HEAD/doc/img/showcase-no-plugin.gif)

With the Canvas Link Optimizer Plugin enabled, it looks like this:
![](https://raw.githubusercontent.com/khaelar/obsidian-canvas-link-optimizer/HEAD/doc/img/showcase-with-plugin.gif)

This plugin does not modify your vault data. All thumbnails are cached locally in the `.obsidian/plugins/canvas-link-optimizer/data` directory, which can be safely cleared if necessary.

## Installation

You can install the plugin from the official [Obsidian Plugin Market](https://obsidian.md/plugins?id=canvas-link-optimizer). Alternatively, you can download the latest release from this repository and move its files `main.js`, `manifest.json` and `styles.css` to folder `.obsidian/plugins/canvas-link-optimizer` within your vault.

## Keep In Mind

To generate a page thumbnail, the plugin initially performs a standard page load. Thus, it won't immediately optimize pre-existing link nodes as well as newly created ones.

## Why Use This Plugin?

Link nodes provide convenient previews of linked content without having to open the link itself. However, the auto-loading feature comes with its drawbacks, including:

- **Performance Impact**: Auto-loading is akin to opening additional browser tabs, which can significantly increase CPU and RAM usage. This can lead to performance issues, particularly on less powerful devices.
- **Security Concerns**: Autoloading pages can inadvertently load malicious content, posing potential risks such as cryptocurrency mining or sandbox escape attempts.
- **Visual Distractions**: The auto-loading of links can create flickering and other visual disturbances that interrupt your workflow and focus.
- **Loading Delays**: Full page loads can be sluggish, particularly with a slow internet connection, leading to a less streamlined experience.
- **Unexpected Autoplay**: Autoloaded pages, such as YouTube channel homepages, may contain autoplay content, which can be disruptive if audio begins playing unexpectedly while navigating the canvas.


%% README_END %%