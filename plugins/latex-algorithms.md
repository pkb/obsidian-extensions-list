---
aliases:
- LaTeX Algorithms
author:
- SamZhang02
author_page: https://github.com/SamZhang02
categories: []
description: Plugin to facilitate writing algorithm blocks in LaTeX
downloads: 4683
funding_page: https://buymeacoffee.com/samzhang
mobile: true
number: 803
title: LaTeX Algorithms
type: plugin
updated: '2023-03-05T06:51:14'
url: https://github.com/SamZhang02/obsidian-latex-algorithms
version: 1.0.2
---

%% README_START %%

# LaTeX Algorithms for Obsidian 

A simple plugin for writing Algorithms and pseudocodes in Obsidian.

<p align="center">
  <img src="https://raw.githubusercontent.com/SamZhang02/obsidian-latex-algorithms/HEAD/media/short_demo.gif">
</p>

## About

Obsidian is a great notetaking tool, I often find myself opening Obsidian instead of compiling a new `.tex` document for documents that I do not need to submit, simply due to how easy it is to use. However, Obsidian uses MathJax for its LaTeX functionality, which does not allow for package imports, such as `algpseudocode`.

I wrote this plugin so that I can easily take notes for my Algorithm and proof-based classes in Obsidian as well.

## Usage 

This plugin reads previous user inputs and converts them into standard LaTeX algorithm format upon detecting keywords, such as `\If`, `\For`, etc.

<p align="center">
  <img src="https://raw.githubusercontent.com/SamZhang02/obsidian-latex-algorithms/HEAD/media/long_demo.gif">
</p>

A great addition to this plugin could be [Quick LaTeX for Obsidian](https://github.com/joeyuping/quick_latex_obsidian) and/or VIM keybindings. With these tools, you can achieve quite a fast workflow.

The functionalities of this plugin currently include:
- Fast indentation with `Shift+Tab`.
- Algorithm titles and subtitles.
- Conditionals (If/ElseIf/Else, Switch cases).
- For/While loops.
- Proof keywords.

### Currently supported keywords
| Titles and Subtitles | Conditionals | Loops      | Proofs       |
| -------------------- | ------------ | ---------- | ------------ |
| \\Algorithm          | \\If         | \\For      | \\Theorem    | 
| \\Input              | \\Elseif     | \\EndFor   | \\Lemma      |
| \\Output             | \\Else       | \\While    | \\Corollary  |
| \\Ensure             | \\Endif      | \\EndWhile | \\Definition |
| \\Return             | \\Switch     | \\Break    | \\Remark     |
| \\State              | \\Case       | \\Continue | \\Proof      |
|                      | \\Default    |            | \\QED        |

## Credits

The development of this plugin used the API wrapper from [Obsidian](https://github.com/obsidianmd/obsidian-api).

The idea of this plugin was heavily inspired by [Quick LaTeX for Obsidian](https://github.com/joeyuping/quick_latex_obsidian). (In fact, one of the functions in my code is taken straight from them, simply due to how great it is)


%% README_END %%