---
aliases:
- Folder Links
author:
- '[[authors/SteveOverSea|Stefan Rausch]]'
categories: []
description: Clicking a link to a folder makes it revealed in the navigation.
downloads: 254
mobile: true
number: 2042
stars: 2
title: Folder Links
type: plugin
updated: '2024-11-18T02:20:15'
url: https://github.com/SteveOverSea/obsidian-folder-links
version: 0.0.1
---

%% README_START %%

# Folder Link Plugin for Obsidian

Have you ever wanted to link to a folder? This plugin adds a frequently requested feature to Obsidian.

**Features:**

-   Click on Folder Link reveals folder in navigation
-   Folder Links styling behaves like regular internal links in Reading Mode (resolved/unresolved)

## How to use

Add a `/` add the end of a regular internal link. If the folder exists it will be revealeled.

**Warning:** Renaming or moving a folder you already linked won't update those folder links (for now).

```markdown
[[MyFolder/]]
```

## Roadmap

(ordering is random)

-   Live Preview / Source Mode support
    -   resolved/unresolved styling
    -   folder suggestion box
-   Updating existing folder links on rename/move
    -   and warning on delete (similar to regular internal links)
-   _maybe:_
    -   provide option to instead of revealing folder in navigation open a index view in a tab/view that shows context of that folder


%% README_END %%