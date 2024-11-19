---
aliases:
- Textgrams
author:
- Akop Kesheshyan
author_page: https://github.com/akopdev
categories: []
description: Store and visualise ASCII graphics and charts
downloads: 85
mobile: true
number: 1999
title: Textgrams
type: plugin
updated: '2024-09-28T23:59:57'
url: https://github.com/akopdev/obsidian-textgrams
version: 0.5.1
---

%% README_START %%

Textgram Plugin for Obsidian
============================

Obsidian plug-in that allows you to create and store ASCII graphics in your notes.
It can be used to to define diagrams, flowcharts, complex tables, Gantt charts and more 
in technical documentation, that will be rendered as a nice SVG graphics in the preview mode.

This plug-in is based on [typograms](https://github.com/google/typograms) library, originally
developed by [Sam Goto](https://code.sgo.to/2022/06/20/typographic-diagrams.html).

![Obsidian Textgrams plugin example](https://raw.githubusercontent.com/akopdev/obsidian-textgrams/HEAD/docs/cover.gif)

## Motivation

I'm a software engineer and I use Obsidian to document my projects, as long as support my 
continuous learning process. I often need to create diagrams, flowcharts, tables and other graphics,
that are not locked in a specific tool, but can be easily shared and versioned in my notes.

Using ASCII graphics allows to create a very flexible and portable content, that can be easily
edited and versioned in a text file, without loosing benefits of a visual representation.

## Features

- [X] Store ASCII graphics in notes and render them as SVG graphics in the preview mode.
- [ ] Use build-in editor to create and modify ASCII graphics without leaving Obsidian.

## Installation

Install the plugin via the Obsidian third-party plugin browser.

1. Open the Obsidian settings.
2. In the sidebar, select `Community plugins`.
3. Search for `Textgrams` in available plugins.
4. Click `Install`.
5. Enable the plugin in the Obsidian settings.

## Usage

Just create a code block with `textgram` language and write your ASCII graphics inside it.

Example:

<pre>
```textgram
+-----+            +-----+
|  A  |            |  B  |
+--+--+            +--+--+
   | foo              |
   |----------------->|
   | hello            |
   |----------------->|--+
   |           world  |  | prompts the user
   |<-----------------|--+
   |                  |
 --+--              --+--
```
</pre>

You can find more examples [here](docs/examples.md).

## Development

If you have any suggestions, issues or feature requests, please open an issue in the GitHub repository.

## Support this project

You can support this project by starring the repository, sharing it with your friends or contributing to
the code.

You can also support the author by buying him a coffee. Click sponsor button on the top of the page.


%% README_END %%