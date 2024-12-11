---
aliases:
- QB Reader Parser
author:
- '[[J-Barta|Jedi_4]]'
categories: []
description: Parse tossups from QB Reader into individual clues to send to Anki.
downloads: 2934
mobile: false
number: 1166
stars: 3
title: QB Reader Parser
type: plugin
updated: '2024-05-06T19:56:07'
url: https://github.com/J-Barta/qb-reader-parser
version: 1.9.5
---

%% README_START %%

# Obsidian QB Reader Plugin

Automatically parse tossups from QB Reader into a format readable by the [Obsidian_to_Anki](https://github.com/Pseudonium/Obsidian_to_Anki) plugin.

## Installation
- Download and install [Obsidian](https://obsidian.md)
- Download the [AnkiConnect](https://ankiweb.net/shared/info/2055492159) Add-on in Anki (id `2055492159`)
- Enable Community Plugins in Obsidian and install the Obsidian_to_Anki plugin
  - Enable the plugin and go to its settings
  - Set the deck for your obsidian cards to go to
    - Located under the "Defaults" section in options for the plugin
    - Copy the deck name and path (click the settings icon next to your deck --> rename, copy your)
  - Enable Cloze Paragraph styling - See To Use section 
- `obsidian-qb-reader.zip` from the latest [Release](https://github.com/J-Barta/obsidian-qb-reader/releases/latest).
  - Extract the folder and locate its inner folder (also called `obsidian-qb-reader.zip`)
  - Move this folder into `{Your Obsidian Vault}/.obsidian/plugins/`
  - Restart Obsidian (probably).
  - Go to your community plugins tab and enable Obsidian QB Reader
  - Set your categories in the settings menu for the plugin. These are the categories that will be selected by default when you open the Obsidian QB Reader Window

## To Use
Run the "QB Reader" command (Ctrl + P) to open a dialog that will allow you to query the QB Reader API. Sentences will automatically be separated by highlights. Clicking on sentences will automatically parse them into a format ready for Anki-ification!

The default parsing method for converting clues to cards is using highlighting, because it is easiest to read in Obsidian. This necessitates that you use the [Cloze Paragraph Styles](https://github.com/Pseudonium/Obsidian_to_Anki/wiki/Cloze-Paragraph-style) feature of the Obsidian_to_Anki plugin with this regex: 

```
((?:\n)*(?:.*(?:{|={2}).*)(?:(\^.{1,3}$|^.{4}(?<!<!--).*))*)
```

## Caveats
- QB Reader's subcategory behavior is strange when retrieving tossups. I'm not entirely sure why it is the way it is, but having any major category (Lit, Hist, Sci, FA) enabled will currently stop all minor categories from returning tossups. Only select minor categories to get minor category results.
- At this time, the plugin does not support bonuses. This may be added in the future.

## Manually installing the plugin

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.




%% README_END %%