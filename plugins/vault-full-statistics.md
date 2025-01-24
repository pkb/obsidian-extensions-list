---
aliases:
- Vault Full Statistics
author:
- '[[authors/jtprogru|Mikhail Savin]]'
categories:
- '[[categories/Statistics|Statistics]]'
description: Status bar item with vault full statistics such as number of notes, files,
  attachments, links, tags and quality of vault.
downloads: 680
mobile: true
number: 1967
stars: 11
title: Vault Full Statistics
type: plugin
updated: '2025-01-19T21:17:53'
url: https://github.com/jtprogru/obsidian-vault-full-statistics-plugin
version: 1.2.3
---

%% README_START %%

# Vault Full Statistics Plugin

![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/jtprogru/obsidian-vault-full-statistics-plugin/total)
![GitHub License](https://img.shields.io/github/license/jtprogru/obsidian-vault-full-statistics-plugin)

**NOTE**: This plugin is modified fork of the [Obsidian Vault Statistics Plugin](https://github.com/bkyle/obsidian-vault-statistics-plugin) plugin.

Status bar item with vault full statistics including:

- number of notes – count of all notes in the vault
- number of attachments – count of all attachments in the vault
- number of files – count of all files in the vault (attachments + notes)
- number of links – count of all links in the vault
- number of words – count of all words in the vault
- size of vault – total size of all files in the vault
- (new feature) vault quality – number of links divided by number of notes
- (new feature) number of tags – count of all tags in the vault
- (new feature) excluded dirs – comma-separated list of directories excluded from statistics

## Installation

For installation this plugin please use [BRAT](https://github.com/TfTHacker/obsidian42-brat) plugin. Alternative installation way is download latest version of artifacts from [release section](https://github.com/jtprogru/obsidian-vault-full-statistics-plugin/releases) and move this in `<vault>/.obsidian/plugins/vault-full-statistics`.

## Usage

After the plugin is installed and enabled you will see a new item appear in the status bar showing you the number of notes in your vault.

- Click on the status bar item to cycle through the available statistics.
- Hover over the status bar item to see all of the available statistics.

## Advanced Usage

### Showing All Statistics

All statistics can be shown by creating and enabling a CSS snippet with the following content.

```css
/* Show all vault statistics. */
.obsidian-vault-full-statistics--item {
    display: initial !important;
}
```

### Showing Selected Statistics

Similarly to the above, one can show certain statistics using a similar method to the above.  Below is a snippet that hides all by the notes and attachments statistics.  The snippet can be modified to include more or different statistics.

``` css
/* Hide all statistics. */
.obsidian-vault-full-statistics--item {
    display: none !important;
}

/* Always show the notes and attachments statistics. */
.obsidian-vault-full-statistics--item-notes,
.obsidian-vault-full-statistics--item-attachments {
    display: initial !important;
}
```

## License

[WTFPL](LICENSE)


%% README_END %%