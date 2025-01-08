---
aliases:
- Random names
author:
- '[[authors/palfrey|Tom Parker-Shemilt]]'
categories: []
description: Generates random names
downloads: 608
mobile: true
number: 1612
stars: 0
title: Random names
type: plugin
updated: '2024-04-22T03:54:10'
url: https://github.com/palfrey/obsidian-random-names
version: 0.1.0
---

%% README_START %%

# Obsidian Random names

This is a plugin for [Obsidian](https://obsidian.md) that will insert random names into a document. There's a lot of categories of names (both people and items). We use https://github.com/xaroth8088/random-names internally to get the names, and their [full list](https://github.com/xaroth8088/random-names?tab=readme-ov-file#full-list) has the complete set.

## How to use

1. Clone this repo.
2. Make sure your NodeJS is at least v16 (`node --version`).
3. `./pnpm i` to install dependencies.
4. `./pnpm dev` to start compilation in watch mode.

## Manually installing the plugin

1. Run `./pnpm build`
2. Copy over `main.js` and `manifest.json` to your vault `VaultFolder/.obsidian/plugins/obsidian-random-names/`.

# Releasing

1. Update the version in `package.json`
2. `./pnpm run version` and commit the changes
3. Create an annotated tag (e.g. `git tag -a 1.0.1 -m "1.0.1"`)
4. Goto github, [wait for the new release](https://github.com/palfrey/obsidian-random-names/releases), and then mark it as published.


%% README_END %%