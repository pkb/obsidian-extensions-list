---
aliases:
- Copy Section
author:
- '[[authors/skztr|skztr]]'
categories: []
description: adds a Copy button to the top of Headed sections
downloads: 288
mobile: true
number: 1947
stars: 2
title: Copy Section
type: plugin
updated: '2024-11-22T19:54:22'
url: https://github.com/skztr/obsidian-plugin-section-copy
version: 1.2.1
---

%% README_START %%

# Copy Section

This plugin adds a "copy" button to `# Header` lines within the document. Clicking the button will copy everything
within that section (eg: up to the next `# Header` line of the same level). Data is copied as raw markdown.

## Features

- Allows you to easily copy entire sections
- Optionally omit `%%comments%%` or lines containing only `#tags`
- Copy all sub-sections, or only up to the next `# Header` line of any level
- Choose which levels you want the copy button to appear on

## Note on edge-cases

There are some ways in which `%%comments%%` and ```inline code``` interact which Obsidian itself is inconsistent about.
Take for example the code:

```
%%comment `code A%%A`B%%B end
```

Editor View considers the comment to end at `B%%B`, while Reader View considers the comment to end at `A%%A`.
This plugin does not attempt to make any decision on such cases. Because Obsidian is inconsistent, the plugin also
considers such mixtures to result in undefined behavior.


%% README_END %%