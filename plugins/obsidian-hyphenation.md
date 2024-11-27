---
aliases:
- Hyphenation
author:
- '[[7596ff|Cassandra McCarthy]]'
categories: []
description: Enables justified text and hyphenation
downloads: 6568
mobile: true
number: 756
title: Hyphenation
type: plugin
updated: '2024-07-25T21:01:31'
url: https://github.com/7596ff/obsidian-hyphenation
version: 0.1.0
---

%% README_START %%

# Hyphenation

Enables justified text and hyphenation in Obsidian.

Uses `navigator.language` to determine the primary langauge for hyphenation.
This can be altered per-file by adding a `lang` key to a file's frontmatter:

```md
---
lang: de
---
```

The plugin's CSS applies rules to `p`, `ol`, and `ul` elements in preview mode,
except for external links, which in my opinion look ugly when hyphenated.


%% README_END %%