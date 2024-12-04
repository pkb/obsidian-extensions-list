---
aliases:
- Account Linker
author:
- '[[qwegat|qwegat]]'
categories: []
description: Plugin for describing external service accounts in the front matter
downloads: 4154
mobile: true
number: 642
stars: 25
title: Account Linker
type: plugin
updated: '2022-08-11T17:51:39'
url: https://github.com/qwegat/Obsidian-Account-Linker
version: 1.0.1
---

%% README_START %%

# Obsidian Account Linker
This is an Obsidian plugin for systematically listing accounts to external sites in the front matter
## Example
- Input:

![](https://raw.githubusercontent.com/qwegat/Obsidian-Account-Linker/HEAD/media/image001.png)

- Preview:

![](https://raw.githubusercontent.com/qwegat/Obsidian-Account-Linker/HEAD/media/image002.png)

- Settings:

![](https://raw.githubusercontent.com/qwegat/Obsidian-Account-Linker/HEAD/media/image003.png)

## Features
- Generate a link button for the configured service based on the description of the frontmatter
- The following settings are available
  - Name of the service
  - Base color of the service
  - URI substitution rules (currently only supports `{{NAME}}`)
  - Account name substitution rules (currently only `{{NAME}}` is supported)
-  More advanced configuration by using URI schemes such as `mailto:` or `obsidian://`

## TODO
- Reverse generation of account names from URIs
- Set favicons on links
## LICENSE
MIT


%% README_END %%