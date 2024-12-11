---
aliases:
- Fill in the Blank (FITB)
author:
- '[[mister-mcgee|Shawn McGee]]'
categories: []
description: Use --magic-- to render inline text as blank line(s) instead.
downloads: 3480
mobile: true
number: 1047
stars: 2
title: Fill in the Blank (FITB)
type: plugin
updated: '2023-12-08T21:41:42'
url: https://github.com/mister-mcgee/obsidian-fill-in-the-blank
version: 1.0.4
---

%% README_START %%

# Fill in the Blank (FITB) Plugin for Obsidian

Great for educators and students alike who use [Obsidian.md](https://obsidian.md) to write and print notes. Use `--magic--` to render inline text as blank line(s) instead.

### Usage
Simply wrap text in double dashes (e.g. `Fill in the --Blank--?`). When the text is rendered it will now appear as blank line(s) (e.g. `Fill in the __________?`). The FITB markdown post-processor will transform headings, paragraphs, and even code blocks inline. The FITB plugin provides a quick and easy way to toggle text inline. Simply highlight the desired text and select the FITB icon in the ribbon, or bind the `fill-in-the-blank:toggle` command to a hotkey.

![ezgif-5-c2a260345a](https://github.com/mister-mcgee/obsidian-fill-in-the-blank/assets/141380054/50d06440-45b9-4c48-a123-65eef0ddbbfd)

To enable or disable FITB while still allowing the post-processor to consume the syntax, add the following snippet to your document's frontmatter.
```yml
---
fitb: false
---
```
⚠️ You may need to reopen/reload the preview window to see frontmatter changes take effect.


%% README_END %%