---
aliases:
- Lineup Builder
author:
- '[[authors/James-Fallon|James Fallon]]'
categories: []
description: Build football lineups in Obsidian.
downloads: 3461
mobile: true
number: 357
stars: 7
title: Lineup Builder
type: plugin
updated: '2021-11-21T09:00:52'
url: https://github.com/James-Fallon/obsidian-lineup-builder
version: 1.0.1
---

%% README_START %%

# Obsidian Lineup Builder Plugin


This plugin allows you to build football lineups in Obsidian by specifying a formation and a list of players.

The lineup is defined in a codeblock and is visible in Preview mode.
  

## Using the Plugin

To create a lineup you need to define a `lineup` codeblock with the following options:
  
### Formation

The `formation` option is one of the currently available formations:

- 433
- 4231
- 442
- 442-diamond
- 523
- 532
- 541
- 352
- 343

### Players

The `players` option defines the starting 11, ordered from bottom to top and left to right.

i.e. for a 433: Mendy,Chilwell,Silva,Rudiger,James,Mount,Jorginho,Kante,Werner,Lukaku,Havertz
  

### Example

````
```lineup
formation: 4231
players: Kepa,Chilwell,Silva,Rudi,Azpi,Kante,Kovacic,CHO,Mount,Havertz,Lukaku
```
````

![Example](https://raw.githubusercontent.com/James-Fallon/obsidian-lineup-builder/HEAD/media/example_screenshot.png)


### SVG Images

The images used are generated from SVGs from the [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page) with positions moved around to create new formations, and position names replaced by custom player names.

© [433](https://en.wikipedia.org/wiki/File:Association_football_4-3-3_formation.svg) / Wikimedia Commons User:Threner / [CC-BY-SA-3.0](https://creativecommons.org/licenses/by-sa/3.0/)

© [4231](https://en.wikipedia.org/wiki/File:Association_football_4-2-3-1_formation.svg) / Wikimedia Commons User:Threner / [CC-BY-SA-3.0](https://creativecommons.org/licenses/by-sa/3.0/)

© [442](https://en.wikipedia.org/wiki/File:Association_football_4-4-2_formation.svg) / Wikimedia Commons User:MaxDZ8 / [CC-BY-SA-3.0](https://creativecommons.org/licenses/by-sa/3.0/)

© [442-diamond](https://en.wikipedia.org/wiki/File:Association_football_4-4-2_diamond_formation.svg) / Wikimedia Commons User:Threner / [CC-BY-SA-3.0](https://creativecommons.org/licenses/by-sa/3.0/)


### Special Thanks

This wouldn't have been possible without using [THeK3nger's Chess Plugin](https://github.com/THeK3nger/obsidian-chessboard) as a reference.


## TODO

- [x] Add 5ATB Formations
- [x] Cleanup SVG code to reuse duplicated elements
- [x] Add wikimedia credit lines
- [x] Submit PR to get it added to the Community Plugins list
- [ ] Investigate different input methods for list of players
- [ ] Custom team colours
- [ ] Custom pitches


%% README_END %%