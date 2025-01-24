---
aliases:
- Literate Haskell
author:
- '[[authors/jajaperson|James Jensen]]'
categories: []
description: An obsidian plugin for integrating `.lhs` files into your PKM.
downloads: 3387
mobile: true
number: 590
stars: 3
title: Literate Haskell
type: plugin
updated: '2022-08-20T15:20:30'
url: https://github.com/jajaperson/obsidian-literate-haskell
version: 1.0.1
---

%% README_START %%

# Obsidian Literate Haskell Plugin

[Haskell provides native literate programming support](https://wiki.haskell.org/Literate_programming),
allowing haskell code within `.lhs` text files to act like ordinary `.hs` files.
This seems like a good way to include runnable haskell code in [Obsidian](https://osidian.md),
but in order to mark a block of text as haskell code,
you need to surround it with

```
\begin{code}
...
\end{code}
```

which you probably don't want literring your code blocks.
This plugin provides literate haskell support by doing the following

- Treating `.lhs` files like markdown
- Hiding the `\begin{code}` and `\end{code}` in `.haskell` blocks in `.lhs` files



%% README_END %%