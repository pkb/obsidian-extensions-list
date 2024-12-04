---
aliases:
- Custom window title
author:
- '[[jplattel|Joost Plattel]]'
categories: []
description: Allows template-based customization of the app window title
downloads: 13890
mobile: true
number: 102
stars: 69
title: Custom window title
type: plugin
updated: '2022-05-23T23:54:34'
url: https://github.com/jplattel/open-note-to-window-title
version: 0.3.5
---

%% README_START %%

# Active note to window title

This might be the smallest Obsidian plugin, but it adds the current open note to the window title, like so:

`Obsidian v0.11.0 - obsidian - testing/currently-open-note-for-project-xyz.md`

This is useful when you are tracking your application usage with [Timing](https://timingapp.com/?lang=en) (or any other app that uses window title). Otherwise it might prove useful for context what you're doing when switching with alt-tab if your application switcher allows for filtering like [contexts.app](https://contexts.co/).

## Templating

Through settings of this plugin it is possible to template the window title of the Obsidian app. You can specify the `{{filename}}`, `{{filepath}}`, `{{vault}}` or `{{workspace}}`. Frontmatter is also supported. For example if you have a file with the following frontmatter:

```yaml
category: "Testing"
```

You can use the following template: `Obsidian - {{frontmatter.category}}`. This would result in a window title of `Obsidian - Testing` once you open the file. If a file doesn't have the corresponding frontmatter key, it is removed, resulting in just: `Obsidian -`. 

%% README_END %%