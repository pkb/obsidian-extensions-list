---
aliases:
- Min Width
author:
- '[[authors/doitian|doitian]]'
categories: []
description: Set the Minimum Width of the Active Pane in Obsidian
downloads: 4693
mobile: true
number: 615
stars: 13
title: Min Width
type: plugin
updated: '2022-10-13T18:05:39'
url: https://github.com/doitian/obsidian-min-width
version: 1.0.4
---

%% README_START %%

# Obsidian Min Width Plugin

## What This Plugin Does?

The Min Width plugin sets the minimum width for the active pane. Obsidian will auto resize the active pane to ensure it is wider enough and shrink other panes accordingly.

This plugin is based on the blog post [_Set the Minimum Width of the Active Pane in Obsidian_](https://blog.iany.me/2022/09/set-the-minimum-width-of-the-active-pane-in-obsidian/).

[![](https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/5569408d-3300-4b5c-b4b8-6e8baa5ad413.gif?ClientID=vimeo-core-prod&Date=1663953976&Signature=3840517f68f618fa3b48788f5cc5c1579d95b46b)](https://vimeo.com/752964835)

## How to Use

Install the plugin by searching "Min Width" in the community plugins. Or manually copy over `main.js`, `manifest.json` in the release to the folder `.obsidian/plugins/obsidian-min-width/` in your vault.

The default settings set the minimum width to either 40 columns or 88% of the whole editing area, depending on which is smaller. The settings tab also supports overriding the minimum width for different view types. Following is a list of some known view types:

- `markdown`: The markdown editor
- `excalidraw`: The view type used by plugin Excalidraw and Excalibrain.

## CSS Snippet

This plugin will add the class `min-width-plugin-active` to the active column. If you find out that the plugin does not work as expected, the possible cause is some more specific CSS rules have overridden the rules set in this plugin. You can add more specific CSS rules in the `Appearance / CSS snippets` settings section. The following example is from the issue [#4](https://github.com/doitian/obsidian-min-width/issues/4):

```css
.workspace
  .mod-root
  .workspace-tabs.mod-stacked.min-width-plugin-active
  .workspace-tab-container
  .workspace-leaf.mod-active {
    width: min(88%, 40rem);
}
```


%% README_END %%