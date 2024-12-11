---
aliases:
- Wardley Maps
author:
- '[[authors/damonsk|Damon Skelhorn]]'
categories: []
description: View and edit Wardley Maps using the Online Wardley Maps format.
downloads: 45
mobile: true
number: 2060
stars: 4
title: Wardley Maps
type: plugin
updated: '2024-11-29T18:40:47'
url: https://github.com/damonsk/obsidian-wardley-maps
version: 1.0.10
---

%% README_START %%

# Wardley Maps Plugin

This is plugin enables displaying and editing of Wardley Maps in the [OnlineWardleyMaps](https://onlinewardleymaps.com) format.

## Usage

Add a code block to your markdown file using Source mode ` ```wardleymap ` include with a closing ` ``` `.  View the raw source of this file to see an example below.

### Example

```wardleymap
title Tea Shop
anchor Business [0.95, 0.63]
anchor Public [0.95, 0.78]
component Cup of Tea [0.79, 0.61] label [-67.61, 4.90]
component Cup [0.73, 0.78] label [15.05, -10.00]
component Tea [0.63, 0.81]
component Hot Water [0.52, 0.80]
component Water [0.38, 0.82]
component Kettle [0.43, 0.35] label [-57, 4]
evolve Kettle->Electric Kettle 0.62 label [16, 5]
component Power [0.1, 0.7] label [-27, 20]
evolve Power 0.89 label [-12, 21]
Business->Cup of Tea
Public->Cup of Tea
Cup of Tea->Cup
Cup of Tea->Tea
Cup of Tea->Hot Water
Hot Water->Water
Hot Water->Kettle; limited by 
Kettle->Power

annotation 1 [[0.43,0.49],[0.08,0.79]] Standardising power allows Kettles to evolve faster
annotation 2 [0.48, 0.85] Hot water is obvious and well known
annotations [0.72, 0.03]

note +a generic note appeared [0.23, 0.33]

style wardley
size [800,400]
```

## Getting Started

> **⚠️ Important: Installer Version Requirement**  
> Wardley Maps requires a recent version of the Obsidian installer. If you experience issues with the plugin not loading properly:
> 
> 1. First, try updating Obsidian normally at `Settings > General > Check for updates`.
> 
> 2. If issues persist, manually update your Obsidian installer:
>    - Download the latest installer from [Obsidian's download page](https://obsidian.md/download)
>    - Close Obsidian completely
>    - Run the new installer

1. Open Obsidian Settings
2. Navigate to "Community plugins" and click "Browse"
3. Search for "Wardley Maps" and click Install
4. Enable the plugin in Community plugins

## License

This project is licensed under the [AGPL-3.0 license](LICENSE).

## Support the Project

If you find [obsidian-wardley-maps](https://github.com/damonsk/obsidian-wardley-maps), [OnlineWardleyMaps](https://github.com/damonsk/onlinewardleymaps) or [vscode-wardley-maps](https://github.com/damonsk/vscode-wardley-maps) valuable, consider supporting its development:

[![Patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/mapsascode/overview)

Follow on X (Twitter) [@MapsAsCode](https://x.com/mapsascode) for updates and announcements!

Your support helps maintain and improve this plugin as well as OnlineWardleyMaps and vscode-wardley-maps. Every contribution is appreciated. Thank you for your support!

%% README_END %%