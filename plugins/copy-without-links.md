---
aliases:
- Strip Internal Links
author:
- '[[authors/adiron|Adi Ron]]'
categories: []
description: Strips the selection or current file of internal links and either copies
  to the clipboard, or in-place
downloads: 1936
mobile: true
number: 1350
stars: 3
title: Strip Internal Links
type: plugin
updated: '2024-02-05T16:02:10'
url: https://github.com/adiron/obsidian-strip-internal-links
version: 1.1.0
---

%% README_START %%

# Obsidian Strip Internal Links Plugin

This is a simple plugin to strip internal links from files and copies the result to the clipboard. That's it.

## Why though?

I often find myself wanting to send the contents of a file to someone. Maybe
some notes that I've made during a meeting, or just something I quickly jotted
down. I can't just send them my markdown with all my internal links, as those
don't make sense to them. So, I have to manually strip them out. This simple
plugin takes care of that.

## How do I use this?

In an editor, open the command palette and find the `Strip Internal Links:
Entire file`, or `Strip Internal Links: Selection`. Each of these has two
versions, *in-place* which will swap the content selected (or the entire file),
or *to clipboard* which will copy the result into the clipboard.

External links are preserved.


%% README_END %%