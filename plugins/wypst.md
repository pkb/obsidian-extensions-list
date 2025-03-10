---
aliases:
- Wypst
author:
- '[[authors/0xpapercut|0xpapercut]]'
categories: []
description: Typst math typesetting for Obsidian.
downloads: 2160
mobile: true
number: 1423
stars: 39
title: Wypst
type: plugin
updated: '2024-05-13T14:32:00'
url: https://github.com/0xpapercut/obsidian-wypst
version: 0.0.3
---

%% README_START %%

# Wypst
High quality rendering of [Typst](https://github.com/typst/typst) in Obsidian, powered by [wypst](https://github.com/0xpapercut/wypst).

## Usage
This plugin overrides regular math blocks (`$<...>$` and `$$<...>$$`), so that they're rendered as Typst math.

![Example](https://raw.githubusercontent.com/0xpapercut/obsidian-wypst/HEAD/media/example.png)

If this plugin doesn't render the LaTeX code in your vault correctly, you can try out the `fallbackToLatexOnError` experimental setting.

## Compatibility
To maximize compatibility with LaTeX math blocks, the rendering backend switches to MathJax when certain structures like `\begin{environment}<...>\end{environment}` or `\<some-symbol>` are encoutered.

For example, `$pi$` will be rendered using Typst, whereas `$\pi$` will be rendered as regular LaTeX.

In general, expressions in Typst and LaTeX, if equivalent, should render to _exactly_ the same output. If this is not the case, you can report it as an issue.

## Issues
I welcome everyone who encounters a problem to open an issue on [0xpapercut/obsidian-wypst](https://github.com/0xpapercut/obsidian-wypst/issues/new).


%% README_END %%