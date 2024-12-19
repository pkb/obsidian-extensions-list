---
aliases:
- File Index
author:
- '[[authors/Steffo99|Steffo]]'
categories: []
description: Create a metadata file about the files present in the Vault
downloads: 2682
mobile: true
number: 1264
stars: 6
title: File Index
type: plugin
updated: '2023-11-17T20:19:49'
url: https://github.com/Steffo99/obsidian-file-index
version: 3.0.3
---

%% README_START %%

<div align="center">

# Obsidian File Index

Obsidian plugin to create a metadata file about the files present in the Vault

</div>

## About

This [Obsidian] plugin creates and keeps updated a `file-index.json` file at the root of your Vault, containing a list of all file paths and a map of all basenames to file paths.

Useful to externally render Wikilinks with no knowledge of the file structure of the vault, for example in [Glassflame].

```json
{
	"paths": [
		"README.md",
		"Garas/moto.md",
		"Garas/auto.md"
	],
	"basenames": {
		"moto": "Garas/moto.md",
		"auto": "Garas/auto.md"
	}
}
```

[Obsidian]: https://obsidian.md/
[Glassflame]: https://glassflame.github.io/

## Ignore

Files can be excluded by the index by adding a `file-index-ignore.json` file at the root of your Vault, containing a JSON array of regular expressions that will prevent matching files from being added to the list:

```json
[
	"^Garas",
	".*HelloWorld.*"
]
```

## Known issues

> [!WARNING]
> 
> May have some trouble distinguishing between files with the same basename, but in different folders.


%% README_END %%