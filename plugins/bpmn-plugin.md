---
aliases:
- BPMN
author:
- '[[authors/joleaf|JoLeaf]]'
categories:
- '[[categories/Diagrams and drawing|Diagrams and drawing]]'
- '[[categories/Custom code blocks|Custom code blocks]]'
description: This plugin enables viewing/editing/simulating BPMNs using bpmn-js.
downloads: 7939
mobile: true
number: 688
stars: 28
title: BPMN
type: plugin
updated: '2024-12-24T17:28:43'
url: https://github.com/joleaf/obsidian-bpmn-plugin
version: 7.3.1
---

%% README_START %%

# BPMN-Plugin for Obsidian [![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/joleaf/obsidian-bpmn-plugin)](https://github.com/joleaf/obsidian-bpmn-plugin/releases) [![Release Obsidian Plugin](https://github.com/joleaf/obsidian-bpmn-plugin/actions/workflows/release.yml/badge.svg)](https://github.com/joleaf/obsidian-bpmn-plugin/actions/workflows/release.yml) [![Obsidian downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%238b6cef&label=downloads&query=%24%5B%22bpmn-plugin%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)](https://obsidian.md/plugins?id=bpmn-plugin)

This plugin lets you view BPMN diagrams interactively in your [Obsidian](https://www.obsidian.md) notes with an `bpmn`
code-block.
Furthermore, a BPMN modeler lets you edit your BPMNs directly in Obsidian.
The plugin is based on the [bpmn-js](https://github.com/bpmn-io/bpmn-js) library.

**NEW Feature:** Token Simulation!

## How to use (CodeBlock)

1. Add a valid `*.bpmn` file to your vault
2. Add the BPMN diagram to your note:

````
```bpmn
url: [[my-diagram.bpmn]]
```
````

### Parameter

You can customize the view with the following parameters:

| Parameter            | Description                                    | Values                                                    |
|----------------------|------------------------------------------------|-----------------------------------------------------------|
| url                  | The url of the *.bpmn file (required).         | Relative/Absolute path, or as "[[*.bpmn]]" markdown link. |
| height               | The height of the rendered canvas.             | [200..1000]                                               |
| opendiagram          | Show a link to the *.bpmn file.                | True/False                                                |
| showzoom             | Show the zoom buttons below the canvas.        | True/False                                                |
| enablepanzoom        | Enable pan and zoom.                           | True/False                                                |
| zoom                 | Set the zoom level. Default is 'fit-viewport'. | 0.0 - 10.0                                                |
| x                    | Set the x coordinate, if a zoom value is set.  | 0 - ... (default: 0)                                      |
| y                    | Set the y coordinate, if a zoom value is set.  | 0 - ... (default: 0)                                      |
| forcewhitebackground | Force a white background.                      | True/False                                                |

### Example

![Example](https://raw.githubusercontent.com/joleaf/obsidian-bpmn-plugin/HEAD/example/bpmn-plugin.gif)

## How to edit the BPMN

Just open the BPMN file in your obsidian vault and the BPMN will be editable in fullscreen mode.

### Features

- Token simulation
- Update properties
- Export SVG

## Install ..

### .. automatically in Obsidian

1. Go to **Community Plugins** in your Obsidian Settings and **disable** Safe Mode
2. Click on **Browse** and search for "[BPMN](obsidian://show-plugin?id=bpmn-plugin)"
3. Click install
4. Toggle the plugin on in the **Community Plugins** tab

### .. manually from this repo

1. Download the latest [release](https://github.com/joleaf/obsidian-bpmn-plugin/releases) `*.zip` file.
2. Unpack the zip in the `.obsidan/plugins` folder of your obsidian vault

## How to dev

1. Clone this repo into the plugin folder of a (non-productive) vault (`.obsidian/plugins/`)
2. `npm i`
3. `npm run dev`
4. Toggle the plugin on in the **Community Plugins** tab

## Donate

<a href='https://ko-fi.com/joleaf' target='_blank'><img height='35' style='border:0px;height:46px;' src='https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' />


%% README_END %%