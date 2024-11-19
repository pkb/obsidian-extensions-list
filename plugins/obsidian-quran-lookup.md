---
aliases:
- QuranLookup
author:
- AbuIbrahim2
author_page: https://github.com/abuibrahim2/quranlookup
categories: []
description: This is a Quran Lookup plugin for Obsidian. This replaces chapter:verse
  shorthand with verse text in arabic and translation.
downloads: 4163
mobile: true
number: 678
title: QuranLookup
type: plugin
updated: '2022-11-03T04:02:32'
url: https://github.com/abuibrahim2/quranlookup
version: 0.1.0
---

%% README_START %%

## بِسْمِ ٱللّٰهِ ٱلرَّحْمٰنِ ٱلرَّحِيْم
# Obsidian Quran Lookup Plugin
[![CodeQL](https://github.com/abuibrahim2/quranlookup/actions/workflows/codeql.yml/badge.svg)](https://github.com/abuibrahim2/quranlookup/actions/workflows/codeql.yml)


This is a simple utility/text replacement plugin for Obsidian that fills in the quran ayaat (verses) based on a surah:verse(s) shorthand. This uses the 'current editor selection command' capability to replace the selected text with the lookup result.

It looks up based on `Surah-Number:Ayah-Number` or `Surah-Name:Ayah-Number` syntax. For the Surah-Name lookup it uses Fuse.js to do a "fuzzy search" since it's an english transliteration. It replaces that syntax with an Obsidian call-out showing verse+ayah name, arabic, and english.

## How to Use:
1. Open a Note in Obsidian.md
2. In the note, type the `surah:verse` as shown in the examples below
3. Select the recently typed text 
4. In the command panel (cmd+P or ctrl+P) select 'Retrieve Ayat' command
5. Alternatively, you can assign a hotkey to the command (like cmd+shift+k)

## Examples
- Single Ayah lookup
  - `112:1`

![obsidian quran lookup single](https://raw.githubusercontent.com/abuibrahim2/quranlookup/HEAD//docs/quran-lookup-single.gif)
- [ ] Add option to toggle to use 'Admonition' style syntax instead of obsidian call-out style
- [ ] Provide external links to ayah in websites like quran.com
- [ ] Add "Offline Mode" option which downlaods and retrieves verses and translations from the locally saved vault rather than calling API
- [ ] Add command to search for an ayah using search API (displaying results in a dialog)
- [ ] Add audio playback capabilities to playback the verse
- Other ideas?... feel free [to suggest](https://github.com/abuibrahim2/quranlookup/issues)!
## Manually installing the plugin

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/quranlookup/`.
- Reload Obsidian to load the new version of your plugin.
- Enable plugin in settings window.

## How to Contribute
I'm one person who just quickly put this together because I wanted this capability in my notes. This is still in need of much refactoring and improvement.
- [For Issues or Feature Requests](https://github.com/abuibrahim2/quranlookup/issues)
- [For making Contributions](./CONTRIBUTING.md)

## Similar Projects
- [Obsidian Quran Vault](https://github.com/AmmarCodes/obsidian-quran-vault)
- [Obsidian Bible Reference](https://github.com/tim-hub/obsidian-bible-reference) - Notable mention, I styled this readme doc after theirs.


%% README_END %%