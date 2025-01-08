---
aliases:
- Base Tag Renderer
author:
- '[[authors/darrenkuro|Darren Kuro]]'
categories: []
description: This plugin renders the basename of tags.
downloads: 5720
mobile: true
number: 726
stars: 28
title: Base Tag Renderer
type: plugin
updated: '2023-10-05T00:10:35'
url: https://github.com/darrenkuro/obsidian-basetag
version: 1.2.1
---

%% README_START %%

# Obsidian Base Tag Renderer

This plugin renders only the basename for tags while maintaining the nested strucutres elsewhere.

It also appends a new class name (`basename-tag`) so it's possible to add custom style to it.

**This is not actively maintained. As I haven't used Obsidian much, and they kept rolling out new features so it's a bit hard to keep up. I am currently busy with other projects also. Feel free to do a PR if you want to add something. The code structure is very simple. Issues aren't guaranteed to be resolved promptly but I'll try my best.**

![](https://raw.githubusercontent.com/darrenkuro/obsidian-basetag/HEAD/pic/basetag.gif)

The custom css applied for the above example -

```css
a.basename-tag[href*="animal"]::before,
span.basename-tag[data-tag*="animal"]::before {
    content: "😍 ";
}
a.basename-tag[href*="cat"]::before,
span.basename-tag[data-tag*="cat"]::before {
    content: "🐱 ";
}
a.basename-tag[href*="dog"]::before,
span.basename-tag[data-tag*="dog"]::before {
    content: "🐶 ";
}
```

# Version 1.2 (July 30th, 2023)

- Add text change for tags in property as well.

# Version 1.1 (Feb 23rd, 2023)

- Add support for editor mode including tags in the frontmatter.



%% README_END %%