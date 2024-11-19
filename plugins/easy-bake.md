---
aliases:
- Easy Bake
author:
- mgmeyers
author_page: https://github.com/mgmeyers
categories: []
description: Easily compile many Obsidian notes down to a single file.
downloads: 5738
funding_page: https://www.buymeacoffee.com/mgme
mobile: true
number: 1060
title: Easy Bake
type: plugin
updated: '2024-02-21T00:47:59'
url: https://github.com/mgmeyers/obsidian-easy-bake
version: 1.1.0
---

%% README_START %%

<p align="center">
  <img align="center" width="175" src="https://github.com/mgmeyers/obsidian-easy-bake/blob/master/assets/logo.png?raw=true">
</p>

<h1 align="center">Easy Bake</h1>

<p align="center">
Compile your Obsidian notes into larger documents. This plugin is focused on simplicity. For more complex compilation scenarios, try <a href="https://github.com/kevboh/longform">kevboh's longform plugin</a>.
</p>

<br>

---

Activate the plugin using the `Bake current file` command in [Obsidian's command palette](https://help.obsidian.md/Plugins/Command+palette).

<img width="500" src="https://github.com/mgmeyers/obsidian-easy-bake/blob/master/assets/screenshot.png?raw=true">

Links and embeds that exist on their own line will be copied into the compiled document. Inline links will be replaced with the link's text. This process is recursive, meaning links in linked files will also be copied into the final document.

For example,

```markdown
## Section One

[[File one]]
[[File two]]

## Section Three

This is an [[File three|inline link]].

[[File four]]
```

will be compiled to:

```markdown
## Section One

Content of file one
Content of file two

## Section Three

This is an inline link.

Content of file four
```


%% README_END %%