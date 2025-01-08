---
aliases:
- Perplexity Converter
author:
- '[[authors/heseber|Henrik Seidel]]'
categories: []
description: Fix references in text pasted from Perplexity.
downloads: 426
mobile: true
number: 2004
stars: 3
title: Perplexity Converter
type: plugin
updated: '2024-11-08T02:30:59'
url: https://github.com/heseber/perplexity-converter
version: 1.0.5
---

%% README_START %%

# Perplexity Converter Plugin

This plugin can be used to fix the references (sources) in Perplexity output that is pasted into Obsidian notes.

## Usage:

1. Select the pasted text in the Obsidian note
2. Call the plugin (Cmd-P Perplexity)

This will replace the selection with the fixed text. See below for details.

It is intentional that the plugin does not process the entire Obsidian file but only the selection because you may have a note that already has a previously fixed response from Perplexity or some other text, and later add another response from Perplexity to the same note. Fixing the entire note would then break things because it would try to re-process the original first response that was already fixed.

## The issue

References in answers from Perplexity (web page or MacOS app) are specified as numbers surrounded by rectangular brackets in the text, such as \[1\]. Obsidian interpretes this construct as an external link, but since there is no URL attached, clicking on the link has no effect. Even worse, if there are multiple consecutive references in the text, such as \[1\]\[2\], then Obsidian displays only the first number.

The full references are listed at the end of the response. This section is initiated with a line called "Citations:" (in the Web version) or "Sources" or "Quellen" (in the German desktop version). The subsequent lines again have numbers surrounded by brackets at the beginning of each line, followed by the actual reference. Also here, the numbers are interpreted as external links that lead nowhere.

## The solution

This plugin:
- in the text section
  - transforms reference numbers in the text to clickable links that lead to the external references
- in the reference section
  - modifies the reference numbers in the references section so that the numbers are no longer hyperlinks leading nowhere but instead just normal text
  - adds hyperlinks right of the reference numbers that lead to the external references.

## Settings

The plugin settings can be used to add additional tag lines that define the beginning of the reference section for your own language.



%% README_END %%