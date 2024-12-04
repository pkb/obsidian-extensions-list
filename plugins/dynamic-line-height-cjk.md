---
aliases:
- Dynamic Line Height for CJK
author:
- '[[RyotaUshio|Ryota Ushio]]'
categories: []
description: Dynamically adjust line height for lines & paragraphs containing CJK
  characters.
downloads: 2090
mobile: true
number: 1328
stars: 3
title: Dynamic Line Height for CJK
type: plugin
updated: '2023-12-12T14:49:50'
url: https://github.com/RyotaUshio/obsidian-dynamic-line-height-cjk
version: 0.2.8
---

%% README_START %%

# Obsidian Dynamic Line Height for CJK

This [Obsidian.md](https://obsidian.md) plugin dynamically adjusts the height of each line (in Editing View) or paragraph (in Reading View) based on it contains CJK (Chinese, Japanese, and Korean) characters. This is useful because CJK characters typically require more line height than European alphabets.

Line height for lines and paragraphs containing CJK characters can be set via [Style Settings](https://github.com/mgmeyers/obsidian-style-settings).

Moreover, this plugin adds the `.cjk` CSS class to lines and paragraphs containing CJK characters. This allows more advanced styling via CSS snippets.

## Usage

1. [Install this plugin](#installation) and enable it.
2. Install Style Settings and enable it. If it's already enabled, you might need to reload it.
3. Customize the line height for CJK via Style Settings if necessary. This can be done by either of the followings:
    1. Settings > Style Settings > Dynamic Line Height for CJK > Line height for CJK lines and paragraphs
    2. Command Palette > Run the command "Style Settings: Show style settings view" > Dynamic Line Height for CJK > Line height for CJK lines and paragraphs

## Installation

You can find this plugin in the community plugin browser within Obsidian.

You can also install the latest beta release using [BRAT](https://github.com/TfTHacker/obsidian42-brat).

1. Install the latest version of BRAT and enable it.
2. Open the following URL in browser: `obsidian://brat?plugin=RyotaUshio/obsidian-dynamic-line-height-cjk`.
3. Click the "Add Plugin" button.
4. _(Optional but highly recommended)_ In the BRAT settings, turn on `Auto-update plugins at startup` at the top of the page.

## Support development

If you find this plugin useful, please support my work by buying me a coffee!

<a href="https://www.buymeacoffee.com/ryotaushio" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>


%% README_END %%