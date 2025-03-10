---
aliases:
- Contextual Typography
author:
- '[[authors/mgmeyers|mgmeyers]]'
categories: []
description: This plugin adds a data-tag-name attribute to all top-level divs in preview
  mode containing the child's tag name, allowing contextual typography styling.
downloads: 93276
mobile: true
number: 60
stars: 172
title: Contextual Typography
type: plugin
updated: '2023-05-07T08:14:24'
url: https://github.com/mgmeyers/obsidian-contextual-typography
version: 2.2.5
---

%% README_START %%

# obsidian-contextual-typography

This plugin adds a `data-tag-name` attribute to all top-level preview `div`s, allowing contextual typography. Note: this plugin does not add any styles, but enables contextual styling.

This is specifically inspired by http://matejlatin.github.io/Gutenberg/

## Sample

```
.markdown-preview-view div[data-tag-name="h1"] + div > h2 {
  margin-top: 1.8888888889rem;
}
```

**Before:**

<img src="https://github.com/mgmeyers/obsidian-contextual-typography/raw/main/images/before.png" alt="Before" width="350" />

**After:**

<img src="https://github.com/mgmeyers/obsidian-contextual-typography/raw/main/images/after.png" alt="After" width="350" />

%% README_END %%