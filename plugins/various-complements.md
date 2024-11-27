---
aliases:
- Various Complements
author:
- '[[tadashi-aikawa|tadashi-aikawa]]'
categories:
- '[[categories/Automation|Automation]]'
description: This plugin enables you to complete words like the auto-completion of
  IDE
downloads: 259770
mobile: true
number: 97
title: Various Complements
type: plugin
updated: '2024-08-25T19:52:17'
url: https://github.com/tadashi-aikawa/obsidian-various-complements-plugin
version: 10.0.3
---

%% README_START %%

# obsidian-various-complements-plugin

[![release](https://img.shields.io/github/release/tadashi-aikawa/obsidian-various-complements-plugin.svg)](https://github.com/tadashi-aikawa/obsidian-various-complements-plugin/releases/latest)
[![Tests](https://github.com/tadashi-aikawa/obsidian-various-complements-plugin/workflows/Tests/badge.svg)](https://github.com/tadashi-aikawa/obsidian-various-complements-plugin/actions)
![downloads](https://img.shields.io/github/downloads/tadashi-aikawa/obsidian-various-complements-plugin/total)

This plugin for [Obsidian] enables you complete words like the auto-completion of IDE.

![](https://tadashi-aikawa.github.io/docs-obsidian-various-complements-plugin/resources/various-complements.gif)

## 📚 Documentation

https://tadashi-aikawa.github.io/docs-obsidian-various-complements-plugin/

## 👥 For users

### Feature requests / Bugs

Please create a new [issue].

### Questions / Others

Please create a new [discussion].

### Pull requests

Before creating a pull request, please make an [issue] or a [discussion]😉

[issue]: https://github.com/tadashi-aikawa/obsidian-various-complements-plugin/issues
[discussion]: https://github.com/tadashi-aikawa/obsidian-various-complements-plugin/discussions

## 🖥️ For developers

- Requirements
    - Node.js v22

### Development

#### Install dependencies

```bash
corepack enable
pnpm install
```

#### Build for development

```bash
pnpm dev
```

#### Test

```bash
pnpm test
# or
pnpm test --watch
```

#### CI

```bash
pnpm run ci
```

#### Release

```bash
# Stable
VERSION=1.2.3 pnpm release

# Beta
VERSION=1.2.3-beta1 pnpm release
```

[Obsidian]: https://obsidian.md/



%% README_END %%