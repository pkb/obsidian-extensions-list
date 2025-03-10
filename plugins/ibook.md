---
aliases:
- ibook
author:
- '[[authors/bingryan|bingryan]]'
categories: []
description: plugin for apple ibook.
downloads: 12148
mobile: false
number: 826
stars: 72
title: ibook
type: plugin
updated: '2023-07-31T08:50:16'
url: https://github.com/bingryan/obsidian-ibook-plugin
version: 2.0.12
---

%% README_START %%

# Obsidian ibook Plugin

It allows you to export your mac ibook hightlights and annotations into your obsidian vault.

# Demo Screenshot

![](https://raw.githubusercontent.com/bingryan/obsidian-ibook-plugin/HEAD/docs/images/screenshot-5.png)

# Attention

- If you want to use highlighted text's color from ibook, use  [this template](https://github.com/bingryan/obsidian-ibook-plugin/blob/master/docs/example.md#ibook-selected-colors)

- plugin not work? -> `allow obsidian access your mac data`, more info visit [#63](https://github.com/bingryan/obsidian-ibook-plugin/issues/63)

# Requirements(exists default)

The data of mac ibook exists in local sqlite3. and this plugin select database use the local SQLite3

```shell
brew install sqlite3
```

# How to Use

### export all

`cmd + p` and input `ibook export`

### export single book by search

`cmd + shift + b` and search by `book name/author`

![](https://raw.githubusercontent.com/bingryan/obsidian-ibook-plugin/HEAD/docs/images/screenshot-3.png)

### export book info by search [goodreads](https://www.goodreads.com/)

`cmd + shift + i` use file name to search book info, and insert current cursor position

![](https://raw.githubusercontent.com/bingryan/obsidian-ibook-plugin/HEAD/docs/images/screenshot-4.png)

# Features

[✓] support export by search book name/author

[✓] export ibook hightlights and annotations into your obsidian vault.

[✓] user-defined template

[✓] search book info by [goodreads](https://www.goodreads.com/)

[✗] More...

# For User-Defined Templates

1. templating language: [https://handlebarsjs.com/](https://handlebarsjs.com/)
   1. built-in loaded [handlebars-helpers](https://github.com/helpers/handlebars-helpers), [handlebars-group-by](https://github.com/shannonmoeller/handlebars-group-by)
2. available parameters: [docs/parameters.md](docs/parameters.md)

If you don't know how to use these, you can visit [example](docs/example.md), and anyone is welcome to provide templates by PR

# How to Install
## From within Obsidian

you can activate this plugin within Obsidian by doing the following:

- Open Settings > Third-party plugin
- Make sure Safe mode is **off**
- Click Browse community plugins
- Search for "Obsidian ibook"
- Click Install
- Once installed, close the community plugins window and activate the newly installed plugin


%% README_END %%