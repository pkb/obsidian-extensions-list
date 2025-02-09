---
aliases:
- Markdown Sync Scroll
author:
- '[[authors/XeroAlpha|ProjectXero]]'
categories: []
description: Allow two linked markdown views to scroll synchronously.
downloads: 3628
mobile: false
number: 1024
stars: 4
title: Markdown Sync Scroll
type: plugin
updated: '2023-07-13T14:32:37'
url: https://github.com/XeroAlpha/markdown-sync-scroll
version: 0.1.0
---

%% README_START %%

# Overview

> [!warning]
> This plugin provides a patch to modify some private method of MarkdownView.
> It may not worked when you update your Obsidian version.

A simple plugin makes sync scrolling editing easier. Inspired by [Synchronise the scroll position of two different files](https://forum.obsidian.md/t/synchronise-the-scroll-position-of-two-different-files/6569).

# Usage

Just use "Link with tab..." to link two Markdown views together, they will scroll synchronously.

https://github.com/XeroAlpha/markdown-sync-scroll/assets/22394706/30f92c73-6b19-41d8-b76c-646d6239117f

**Without Plugin**:

https://github.com/XeroAlpha/markdown-sync-scroll/assets/22394706/60323b1a-5004-454f-8502-3e7854d0100f

# Known issues

- Scroll offset will not be recalculated after a tab unlink and then link to a tab which is already linked with another tab.


%% README_END %%