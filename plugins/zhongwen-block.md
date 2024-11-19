---
aliases:
- Zhongwen Block
author:
- Kodai Matsumoto
author_page: https://github.com/0918nobita
categories: []
description: Provides code blocks with features for Chinese learners
downloads: 3043
funding_page: https://github.com/sponsors/0918nobita
mobile: true
number: 1254
title: Zhongwen Block
type: plugin
updated: '2024-10-05T14:40:05'
url: https://github.com/0918nobita/obsidian-zhongwen-block
version: 0.7.1
---

%% README_START %%

# Obsidian Zhongwen Block

[![README-ja](https://img.shields.io/badge/lang-ja-blue)](https://github.com/0918nobita/obsidian-zhongwen-block/blob/main/README.ja.md)

An Obsidian plugin which provides code blocks with features for Chinese learners

Each Chinese sentence in `zh-cn` code block will be annotated with corresponding pinyin as ruby.

In order to help you remember the pronunciation, each pinyin is displayed only while the Chinese sentence is hovered.

![Screen recording](https://raw.githubusercontent.com/0918nobita/obsidian-zhongwen-block/HEAD/images/screen-recording.gif)

Editing view:

````markdown
```zh-cn
他先去医院，再去学校。
```

彼女はまず病院に行って、次に学校に行きます。
````

Reading view:

(Default)

![Reading view (default)](https://raw.githubusercontent.com/0918nobita/obsidian-zhongwen-block/HEAD/images/reading-view-default.png)

(On hover)

![Reading view (on hover)](https://raw.githubusercontent.com/0918nobita/obsidian-zhongwen-block/HEAD/images/reading-view-on-hover.png)

## Settings

### Language

Default: English

This plugin supports English and Japanese.

### Always show pinyin

Default: `false`

When `true`, each pinyin will be displayed from the beginning.

## Attribution

-   Zhongwen Block depends on [pinyin-pro](https://github.com/zh-lx/pinyin-pro) in order to convert Chinese into pinyin.

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2F0918nobita%2Fobsidian-zhongwen-block.svg?type=large&issueType=license)](https://app.fossa.com/projects/git%2Bgithub.com%2F0918nobita%2Fobsidian-zhongwen-block?ref=badge_large&issueType=license)

## Development

### Build

```bash
$ npm run build
```

### Lint

```bash
$ npm run lint
```

### Format

```bash
$ npm run format
```


%% README_END %%