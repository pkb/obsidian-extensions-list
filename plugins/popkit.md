---
aliases:
- PopKit
author:
- '[[authors/zhouhua|Zhou Hua]]'
categories:
- '[[categories/Note editing and formatting|Note editing and formatting]]'
description: Select text to instantly access quick tools
downloads: 2083
mobile: true
number: 1782
stars: 32
title: PopKit
type: plugin
updated: '2025-01-23T21:30:32'
url: https://github.com/zhouhua/obsidian-popkit
version: 1.1.3
---

%% README_START %%

# Obsidian PopKit

![GitHub Release](https://img.shields.io/github/v/release/zhouhua/obsidian-popkit?include_prereleases&style=flat) ![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/zhouhua/obsidian-popkit/total?style=flat)

Obsidian PopKit is a powerful plugin for [Obsidian](https://obsidian.md/), providing a suite of built-in tools to enhance your note-taking and productivity workflows. Inspired by the Mac software [PopClip](https://pilotmoon.com/popclip/), PopKit offers quick access to a variety of useful utilities.

## Installation

1. Open Obsidian and go to **Settings** > **Community plugins**.
2. Click on **Browse** and search for "Obsidian PopKit".
3. Click **Install**.
4. Once installed, enable the Obsidian PopKit plugin from the **Installed plugins** list.

## Usage

After installing and enabling the plugin, you can access the various tools via the PopKit toolbar. The toolbar can be customized from the plugin settings to include only the tools you frequently use.

### How to Use

- Select a piece of text in the Obsidian editor, and the PopKit toolset will instantly appear. Click on a tool to use it.

![Usage](https://raw.githubusercontent.com/zhouhua/obsidian-popkit/HEAD/screenshots/usage.gif)

- You can manually invoke the PopKit toolbar using the command "show PopKit" (of course, assigning a shortcut key to this command would be more convenient). Since there might be no selected content at this point, some built-in actions may not be relevant, and the tooltip will exclude those tools.

![Command](https://raw.githubusercontent.com/zhouhua/obsidian-popkit/HEAD/screenshots/command.gif)

- In fact, the PopKit toolbar can display quite dynamic content. As mentioned earlier, it can decide whether to show specific buttons based on whether there is selected text. Additionally, it can perform mathematical calculations, display date and time, count words, and more. Below is an example of mathematical calculations.

![Calculation](https://raw.githubusercontent.com/zhouhua/obsidian-popkit/HEAD/screenshots/conditions.gif)

## Customization

You can customize the tools available in the PopKit toolbar by going to **Settings** > **PopKit** and selecting the tools you want to enable or disable.

- This plugin comes with dozens of tools. To enable the ones you want, simply drag them into the preview toolbar in the settings interface.

- The tools in the preview toolbar can be freely dragged to adjust their order. If you want to remove a tool, simply drag it from the preview toolbar to the delete box.

- In addition to the built-in tools, you can easily add any Obsidian built-in commands or commands registered by enabled plugins as custom tools. To enable a custom tool, simply drag it into the preview toolbar.

## Future Features

- [ ] Allow users to add custom tools.

---

Thank you for using Obsidian PopKit! I hope it enhances your productivity and note-taking experience.

## My Other Obsidian Plugins

- [Export Image](https://github.com/zhouhua/obsidian-export-image)
- [Markdown Media Card](https://github.com/zhouhua/obsidian-markdown-media-card)
- [vConsole](https://github.com/zhouhua/obsidian-vconsole)
- [POWER MODE](https://github.com/zhouhua/obsidian-power-mode)
- [Another Sticky Headings](https://github.com/zhouhua/obsidian-sticky-headings)


%% README_END %%