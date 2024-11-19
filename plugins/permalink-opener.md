---
aliases:
- Permalink Opener
author:
- '@kepano'
author_page: https://www.twitter.com/kepano
categories: []
description: Opens URLs based on a permalink or slug in the file properties
downloads: 2870
funding_page: https://www.buymeacoffee.com/kepano
mobile: true
number: 1195
title: Permalink Opener
type: plugin
updated: '2023-10-26T00:22:46'
url: https://github.com/kepano/obsidian-permalink-opener
version: 1.0.2
---

%% README_START %%

Simple Obsidian plugin that opens URLs based on a permalink or slug in the note properties. This is useful if you use a static site generator or publishing platform such as Jekyll, Hugo, Eleventy, Astro, Obsidian Publish, etc.

Very simple plugin with three settings:

- Permalink property name, defines the frontmatter property that you use. Defaults to `permalink` but you can set it to `slug` or something else.
- Live site base URL, e.g. `https://yourdomain.com`
- Development site base URL, for Jekyll you might use `http://127.0.0.1:4000`

Use the command palette or hotkeys to open the current page. If no permalink is set the title is slugified using kebab case.

![Permalink Opener](https://raw.githubusercontent.com/kepano/obsidian-permalink-opener/HEAD/images/screenshot.png)


%% README_END %%