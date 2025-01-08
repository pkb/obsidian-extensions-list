---
aliases:
- Nextcloud Link Fixer
author:
- '[[authors/KFreon|KaelLarkin]]'
categories: []
description: Nextcloud breaks Wiki-links (e.g. [[Some document]]). This fixes them.
downloads: 254
mobile: true
number: 1787
stars: 1
title: Nextcloud Link Fixer
type: plugin
updated: '2024-04-02T17:21:21'
url: https://github.com/KFreon/nextcloud-link-fixer
version: 1.0.0
---

%% README_START %%

# Nextcloud Link Fixer  
Opening Markdown files in Nextcloud Text breaks the Wiki-links that Obsidian uses.  
i.e. `[[my link]]` becomes `\[\[my link\]\]` even though it's kinda rendered ok.  

This plugin can automatically fix them on file open (off by default, can be enabled in Settings).  
There is also a command `fix-wiki-links`.  

%% README_END %%