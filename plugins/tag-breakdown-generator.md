---
aliases:
- Tag Breakdown Generator
author:
- '[[authors/HananoshikaYomaru|Hananoshika Yomaru]]'
categories:
- '[[categories/Tag Management|Tag Management]]'
description: Breakdown nested tags into multiple parent tags
downloads: 2553
mobile: false
number: 1201
stars: 9
title: Tag Breakdown Generator
type: plugin
updated: '2023-11-21T09:57:41'
url: https://github.com/HananoshikaYomaru/obsidian-tag-generator
version: 1.0.10
---

%% README_START %%

# Obsidian tag generator

Or it should be called obsidian tag break down. It breakdowns the nested tags into parent tags and added to the top of the file when you click save. For example,

```md
#ai/image #a/b/c/d #a/b/c/c

will generate this

#a #a/b #a/b/c #ai
```

demo: <https://www.youtube.com/watch?v=8M2VLRibpnQ>

✅ dead simple

## Usage

1. you need to install custom save plugin first
2. then bind the `tag generator: run on current file` command to the custom save action
3. there you go 🎉

## Install on obsidian plugin marketplace

you can download it on obsidian community plugin store.

## Manual Install

1. cd to `.obsidian/plugins`
2. git clone this repo
3. `cd obsidian-tag-generator && bun install && bun run build`
4. there you go 🎉

### Update

1. cd to `.obsidian/plugins/obsidian-tag-generator`
2. `git pull`
3. `bun install && bun run build`
4. there you go 🎉

## Notes

1. This plugins only work for tags in the body. Tags in the frontmatter will be ignored.
2. The generator will recognise the comment block. If the comment block doesn't exist, it will create the block at the top of the file. If it exists, it will replace the block.
3. to skip generation of this, you can put `tag-gen-ignore: true` to the frontmatter.
4. to contribute, please file open a github issue first.

<!--
## How to release

```
# update the version number in package.json
bun version
git add .
git commit -m <message>
git tag -a <version> -m <version>
git push origin <version>
git push
# after the release workflow done, update the release doc on github
```

 -->


%% README_END %%