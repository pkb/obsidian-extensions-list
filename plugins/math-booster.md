---
aliases:
- LaTeX-like Theorem & Equation Referencer
author:
- '[[authors/RyotaUshio|Ryota Ushio]]'
categories: []
description: A powerful indexing & referencing system for theorems & equations in
  your vault. Bring LaTeX-like workflow into Obsidian with theorem environments, automatic
  equation numbering, and more.
downloads: 17247
mobile: true
number: 1122
stars: 183
title: LaTeX-like Theorem & Equation Referencer
type: plugin
updated: '2023-12-09T23:30:14'
url: https://github.com/RyotaUshio/obsidian-latex-theorem-equation-referencer
version: 2.2.0
---

%% README_START %%

# LaTeX-like Theorem & Equation Referencer for Obsidian

> [!important]
> This plugin had been called **Math Booster** until version 2.1.4, but has been renamed for better clarity and discoverability. A big thank you to those who shared their thoughts [here](https://github.com/RyotaUshio/obsidian-math-booster/issues/210).

**LaTeX-like Theorem & Equation Referencer** is an [Obsidian.md](https://obsidian.md/) plugin that provides a powerful indexing & referencing system for theorems & equations in your vault, bringing $\LaTeX$-like workflow into Obsidian.

![Screenshot](https://raw.githubusercontent.com/RyotaUshio/obsidian-math-booster/1c7b106fcfbddccdcda8451de1c21a094994b686/docs/fig/screenshot.png)

(The theorem in the screenshot is cited from [Tao, Terence, ed. An introduction to measure theory. Vol. 126. American Mathematical Soc., 2011.](https://terrytao.files.wordpress.com/2012/12/gsm-126-tao5-measure-book.pdf))

## Docs

https://ryotaushio.github.io/obsidian-latex-theorem-equation-referencer/

## Features

- [Theorem environments](https://ryotaushio.github.io/obsidian-latex-theorem-equation-referencer/theorem-callouts/theorem-callouts.html)
- [Automatic equation numbering](https://ryotaushio.github.io/obsidian-latex-theorem-equation-referencer/equations.html)
- [Clever referencing](https://ryotaushio.github.io/obsidian-latex-theorem-equation-referencer/clever-referencing.html)
- [Search & link autocomplete](https://ryotaushio.github.io/obsidian-latex-theorem-equation-referencer/search-&-link-autocomplete/search-&-link-autocomplete.html)
  - [Custom link autocomplete](https://ryotaushio.github.io/obsidian-latex-theorem-equation-referencer/search-&-link-autocomplete/custom-link-autocomplete.html)
    - Easily find & insert link to theorems & equations.
    - Filter theorems & equations based on their locations (*entire vault/recent notes/active note*)
  - [Search modal](https://ryotaushio.github.io/obsidian-latex-theorem-equation-referencer/search-&-link-autocomplete/search-modal.html): more control & flexibility than editor autocomplete, including *Dataview queries*
- [Proof environment (experimental)](https://ryotaushio.github.io/obsidian-latex-theorem-equation-referencer/proof-environment.html)

> [!note]
> For more modular and focused enhancements, some features are planned to be transitioned from this plugin to dedicated, specialized plugins in the near future. Below are the upcoming changes:
> 
> #### Transitioning to [**Better Math in Callouts & Blockquotes**](https://github.com/RyotaUshio/obsidian-math-in-callout)
> 
> - Rendering equations inside callouts
> - Multi-line equation support inside blockquotes
> 
> #### Transitioning to [**Rendered Block Link Suggestions**](https://github.com/RyotaUshio/obsidian-rendered-block-link-suggestions)
> 
> - [Render equations in Obsidian's built-in link suggestions](https://ryotaushio.github.io/obsidian-latex-theorem-equation-referencer/search-&-link-autocomplete/enhancing-obsidian's-built-in-link-autocomplete.html)

Theorems & equations can be **dynamically/automatically numbered**, while you can statically/manually number them if you want.
The number prefix can be either explicitly specified or automatically inferred from the note title.

Thanks to the integration with [MathLinks](https://github.com/zhaoshenzhai/obsidian-mathlinks), links to theorems/equations are displayed with their title or number, similarly to the `cleveref` package in LaTeX. (No need for manually typing aliases!)

You can also customize the appearance of theorem callouts using CSS snippets; see [here](https://ryotaushio.github.io/obsidian-latex-theorem-equation-referencer/theorem-callouts/styling.html).

## Companion plugins

Here's a list of other math-related plugins I've developed:

- [No More Flickering Inline Math](https://github.com/RyotaUshio/obsidian-inline-math)
- [Better Math in Callouts & Blockquotes](https://github.com/RyotaUshio/obsidian-math-in-callout)
- [MathJax Preamble Manager](https://github.com/RyotaUshio/obsidian-mathjax-preamble-manager)
- [Auto-\\displaystyle Inline Math](https://github.com/RyotaUshio/obsidian-auto-displaystyle-inline-math)

## Installation

You can install this plugin via Obsidian's community plugin browser (see [here](https://help.obsidian.md/Extending+Obsidian/Community+plugins#Install+a+community+plugin) for instructions).

Also, you can test the latest beta release using [BRAT](https://github.com/TfTHacker/obsidian42-brat):

1.  Install BRAT and enable it.
2.  Go to **Options**. In the **Beta Plugin List** section, click on the **Add Beta plugin** button.
3.  Copy and paste `RyotaUshio/obsidian-latex-theorem-equation-referencer` in the pop-up prompt and click on **Add Plugin**.
4.  _(Optional)_ Turn on **Auto-update plugins at startup** at the top of the page.
5.  Go to **Community plugins > Installed plugins**. You will find "LaTeX-like Theorem & Equation Referencer" in the list. Click on the toggle button to enable it.
Since version 2 is still beta, it's not on the community plugin browser yet.

## Dependencies

### Obsidian plugins

This plugin requires [MathLinks](https://github.com/zhaoshenzhai/obsidian-mathlinks) version 0.5.3 or higher installed to work properly ([Clever referencing](https://ryotaushio.github.io/obsidian-latex-theorem-equation-referencer/clever-referencing.html)).

In version 2, [Dataview](https://github.com/blacksmithgu/obsidian-dataview) is no longer required. But I strongly recommend installing it because it enhances this plugin's [search](https://ryotaushio.github.io/obsidian-latex-theorem-equation-referencer/search-&-link-auto-completion/search-modal.html) functionality significantly.

### Fonts

You have to install [CMU Serif](https://www.cufonfonts.com/font/cmu-serif) to get some of the [preset styles for theorem callouts](https://ryotaushio.github.io/obsidian-latex-theorem-equation-referencer/theorem-callouts/styling.html) displayed properly.

Additionally, [Noto Sans JP](https://fonts.google.com/noto/specimen/Noto+Sans+JP) is required for render the preset styles properly in Japanese.

## Contributing

- Feel free to create a new issue if something is not working well. Questions are also welcomed.
- Please send a pull request if you have any ideas to improve this plugin and our experience!
- Contribution to the docs is also highly appreciated: see [here](https://github.com/RyotaUshio/obsidian-latex-theorem-equation-referencer-docs).

## Roadmaps

- Import from LaTeX: ArXiv papers, research/literature notes written in LaTeX, ...
- Export to LaTeX: Write research notes in Obsidian, and then export them into LaTeX.

## Support development

If you find this plugin useful, please support my work by buying me a coffee!

<a href="https://www.buymeacoffee.com/ryotaushio" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>


%% README_END %%