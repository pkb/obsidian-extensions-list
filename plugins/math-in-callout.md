---
aliases:
- Better Math in Callouts & Blockquotes
author:
- '[[authors/RyotaUshio|Ryota Ushio]]'
categories: []
description: Add better Live Preview support for math rendering inside callouts &
  blockquotes.
downloads: 4334
mobile: true
number: 1327
stars: 31
title: Better Math in Callouts & Blockquotes
type: plugin
updated: '2023-12-21T23:43:37'
url: https://github.com/RyotaUshio/obsidian-math-in-callout
version: 0.3.7
---

%% README_START %%

# Better Math in Callouts & Blockquotes

This is an [Obsidian.md](https://obsidian.md) plugin to add better Live Preview support for math rendering inside callouts & blockquotes.

> Note: The feature of this plugin was originally a part of [LaTeX-like Theorem & Equation Referencer](https://ryotaushio.github.io/obsidian-latex-theorem-equation-referencer/), another community plugin of mine. I completely rewrote it with a bunch of improvements and decided to release it as a separate plugin for better modularity.

## Features

### Math in Callouts

In Live Preview, the vanilla Obsidian does not render MathJax in callouts while editing them. 
This plugin solves this problem.

Moreover, it also enables proper handling of multi-line math blocks; see [the next section](math-in-lockquotes) below.

#### Example

 Without this plugin                 | With this plugin
:-----------------------------------:|:----------------------------------:
![Before](https://raw.githubusercontent.com/RyotaUshio/obsidian-math-in-callout/HEAD/fig/callout-before.png) | ![After](https://raw.githubusercontent.com/RyotaUshio/obsidian-math-in-callout/HEAD/fig/callout-after.png)

### Math in Blockquotes

In Live Preview, the vanilla Obsidian misunderstands a ">" symbol at the beginning of a line in a blockquote or a callout as an inequality sign ("greater than") in multi-line math blocks, while Reading View properly recognizes them. This plugin makes them consistent with Reading View. 

#### Example

```
> $$
> \begin{align}
> a &= b \\
>   &= c
> \end{align}
> $$
```

 Without this plugin                 | With this plugin
:-----------------------------------:|:----------------------------------:
![Before](https://raw.githubusercontent.com/RyotaUshio/obsidian-math-in-callout/HEAD/fig/blockquote-before.png) | ![After](https://raw.githubusercontent.com/RyotaUshio/obsidian-math-in-callout/HEAD/fig/blockquote-after.png)

## Installation

You can find this plugin in the community plugin browser within Obsidian.

You can also install the latest beta release using [BRAT](https://github.com/TfTHacker/obsidian42-brat).

1. Install the latest version of BRAT and enable it.
2. Open the following URL in browser: `obsidian://brat?plugin=RyotaUshio/obsidian-math-in-callout`.
3. Click the "Add Plugin" button.
4. _(Optional but highly recommended)_ In the BRAT settings, turn on `Auto-update plugins at startup` at the top of the page.

## Companion plugins

Here's a list of other math-related plugins I've developed:

- [LaTeX-like Theorem & Equation Referencer](https://github.com/RyotaUshio/obsidian-latex-theorem-equation-referencer)
- [No More Flickering Inline Math](https://github.com/RyotaUshio/obsidian-inline-math)
- [MathJax Preamble Manager](https://github.com/RyotaUshio/obsidian-mathjax-preamble-manager)
- [Auto-\\displaystyle Inline Math](https://github.com/RyotaUshio/obsidian-auto-displaystyle-inline-math)

## Support development

If you find this plugin useful, please support my work by buying me a coffee!

<a href="https://www.buymeacoffee.com/ryotaushio" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>


%% README_END %%