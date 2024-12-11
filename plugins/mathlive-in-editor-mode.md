---
aliases:
- MathLive in Editor Mode
author:
- '[[MizarZh|MizarZh]]'
categories: []
description: MathLive input in editor mode
downloads: 1037
mobile: true
number: 1670
stars: 7
title: MathLive in Editor Mode
type: plugin
updated: '2024-10-08T17:49:47'
url: https://github.com/MizarZh/obsidian-mathlive-codemirror
version: 0.2.0
---

%% README_START %%

# MathLive in Editor Mode

[MathLive](https://github.com/arnog/mathlive) input in obsidian editor mode.

## Feature
- [x] Basic input function
- [x] Toggle mathlive display (global, block or inline)
- [x] Macro (sort of), shortcuts and keybindings support
- [ ] Switch between mathlive and builtin mathjax
- [ ] Different display modes

## Usage
![example.gif](https://raw.githubusercontent.com/MizarZh/obsidian-mathlive-codemirror/HEAD/assets/example.gif)

Edit the equation in mathlive block below the latex display block.

It is also possible to assign a hotkey to toggle the display of mathlive block.

## Macro settings
When the `MathLive macros` setting is set, the new command is available in MathLive widgets but not in builtin mathjax block due to some designs of mathjax.

If you want the new command to also show up in builtin mathjax block, you can use the copy button in `MathLive macros` to copy latex `\newcommand` command, then paste it in mathjax block in every page or use a plugin to preload those new commands.


%% README_END %%