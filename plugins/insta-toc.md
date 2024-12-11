---
aliases:
- Insta TOC
author:
- '[[iLiftALot|Nick C.]]'
categories: []
description: Simultaneously generate, update, and maintain a table of contents for
  your notes.
downloads: 774
mobile: true
number: 2032
stars: 18
title: Insta TOC
type: plugin
updated: '2024-12-09T01:23:15'
url: https://github.com/iLiftALot/insta-toc
version: 6.3.1
---

%% README_START %%

# Insta TOC Plugin <!-- omit in toc -->

[![Version](https://img.shields.io/github/v/release/iLiftALot/insta-toc?include_prereleases&label=latest&logo=github&labelColor=blue)](https://github.com/iLiftALot/insta-toc/releases) [![Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22insta-toc%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)](https://obsidian.md/plugins?search=insta%20toc) [![NPM Version](https://img.shields.io/npm/v/insta-toc)](https://www.npmjs.com/package/insta-toc)

> A plugin to ***dyamically*** generate and maintain a table of contents for you in ***real time***.

## Table of Contents <!-- omit in toc -->
- [Demonstration](#demonstration)
- [Features: Insta TOC vs Other ToC Plugins](#features-insta-toc-vs-other-toc-plugins)
- [Usage](#usage)
- [Installation](#installation)
  - [Obsidian](#obsidian)
  - [BRAT](#brat)
  - [npm](#npm)
  - [Manual](#manual)
- [Contributing](#contributing)
- [Road Map](#road-map)


## Demonstration
![./assets/media/assets/media/demonstration.gif](https://raw.githubusercontent.com/iLiftALot/insta-toc/master/assets/media/demonstration.gif)


## Features: Insta TOC vs Other ToC Plugins
There are various other ToC plugins for Obsidian, however, they come with certain limitations which this plugin aims to mitigate and improve upon which includes:

**Seamless Integration & Dynamic Generation**
- Just insert the code block and start typing. There's nothing more to it.
- Other ToC plugins generate the ToC via command activation.
- This plugin is designed for performance and simplicity for maximum convenience and organization.

**Omit Specific Headings**
- Exclude any heading you want from the ToC by simply adding `<!-- omit -->` to the end of the heading.
- Alternatively, utilize the local settings to omit specific headings.

**HTML & Special Symbols**
- Feel free to include HTML or any kind of special symbols within headings. This plugin will handle these cases elegantly.
- You can additionally specify which characters should be escaped within the local settings.

**Heading Hierarchy Handling**
- Include any type of heading hierarchy you want. Your heading structure doesn't have to be any certain way.
- Other plugins will prohibit the ToC insertion if the heading hierachy is not in a particular optimal format.

**Markdown Links & Wiki-Links**
- This plugin will handle multiple of both markdown links (`[Title]\(https://link)`) and wiki-links (`[[file-name.md]]`) within headings.

**Settings**<br>
<ul>
  <li><u style="color: orange;">Bullet Style</u> - Select your preferred list-bullet style within the settings tab.</li>

  <li><u style="color: orange;">Update Delay</u> - Configure the delay between ToC updates.</li>

  <li><u style="color: orange;">Exclusions</u> - You will have multiple custimization choices pertaining to exlcuding specific heading text, individual characters, and heading levels.</li>

  <li><u style="color: orange;">Indentation Width</u> - Determine your preferred amount of indentation spacing.</li>

  <li><u><a href="https://github.com/iLiftALot/insta-toc?tab=readme-ov-file#usage">Local File Settings</a></u></li>
</ul>


## Usage
**General Usage**
- Insert the `insta-toc` code block:

  ~~~markdown
  ```insta-toc
  ```
  ~~~

**Omit Specific Headings**
- If you want to omit a specific heading from the ToC, simply add `<!-- omit -->` to the end of the heading.

  ```
  # Heading 1 <!-- omit -->
  ```

- Alternatively, utilize the local settings:
    ```yml
    ---
    omit: [
      "Heading 1",
      "Heading 2"
    ]
    ---
    ```

  <center>↕️&nbsp;&nbsp;&nbsp;&nbsp;↕️&nbsp;&nbsp;&nbsp;&nbsp;↕️&nbsp;&nbsp;&nbsp;&nbsp;↕️</center>

    ```yml
    ---
    omit:
      - Heading 1
      - Heading 2
    ---
    ```
---

**Local ToC Settings Guide**
> <center style="font-size: large; color: red;"><b>⚠️ <u>FORMAT CAUTION</u> ⚠️</b></center>
> 
> The local settings use <b style="color: yellow;"><u>YAML formatting</u></b>, which is a format that is very particular about perfect spacing.
> I'll be implementing auto-correction logic soon to account for this, but for the time being ensure that you are <b style="color: yellow;"><u>only indenting with 2 spaces</u></b>, otherwise you will get errors.

- Type Guide:
  ```yml
  ---
  title:
    name: [string: any]
      - The title of the ToC.
    level: [number: 1 | 2 | 3 | 4 | 5 | 6]
      - The heading level of the title.
    center: [boolean: true | false]
      - Optionally center position of the title.
  exclude: [string: any | RegExp: /.../]
    - Exclude specific headings based on a string of characters (e.g., ",._-+=") or a regular expression (e.g., /[^a-zA-Z0-9]/).
    - NOTE: Currently, this will include global excluded characters as well.
  style:
    listType: [string: "number" | "dash"]
      - The type of list-bullet style.
  omit: [string[]: any[]]
    - Omit specific headings from the ToC.
  levels:
    min: [number: 1 | 2 | 3 | 4 | 5 | 6]
      - The minimum heading level to include in the ToC.
    max: [number: 1 | 2 | 3 | 4 | 5 | 6]
      - The maximum heading level to include in the ToC.
  ---
  ```

- Example 1:
  ```yml
  ---
  title:
    name: "Table of Contents"
    level: 2
    center: false
  exclude: ",._-+"
  style:
    listType: "dash"
  omit: [
    "Heading 1",
    "Heading 2"
  ]
  levels:
    min: 1
    max: 3
  ---
  ```

- Example 2:
  ```yml
  ---
  title:
    name: "Table of Contents"
    level: 1
    center: true
  exclude: /[^a-zA-Z0-9]/
  style:
    listType: number
  omit:
    - Heading 3
    - Heading 4
  levels:
    min: 2
    max: 6
  ---
  ```


## Installation

### Obsidian
1. Open Obsidian and press `CMD+,`.
2. Navigate to the Community plugins tab and click the `Browse` button.
3. Navigate to the search bar and type `Insta TOC`
4. Click the install button.

### BRAT
1. Install [BRAT](https://github.com/TfTHacker/obsidian42-brat) community plugin.
2. Open Obsidian and press `CMD+SHIFT+P`.
3. Type `>BRAT: Plugins: Add a beta plugin for testing` and select the option.
4. Insert `https://github.com/iLiftALot/insta-toc` and submit.

### npm
```shell
npm install insta-toc
```

### Manual
1. Download the [latest release](https://github.com/iLiftALot/insta-toc/releases).
2. Extract the `insta-toc` folder from the zip to your vault's plugins folder: `/path/to/<vault>/.obsidian/plugins/`.
*Note*: On some machines the .obsidian folder may be hidden. On MacOS you should be able to press `CMD+SHIFT+.` to show the folder in Finder.
3. Reload Obsidian.

## Contributing
- [Report a Bug](https://github.com/iLiftALot/insta-toc/issues/new?assignees=iLiftALot&labels=bug&template=&title=Bug%3A+)
- [Suggest a Feature](https://github.com/iLiftALot/insta-toc/issues/new?assignees=iLiftALot&labels=feature-request&template=&title=FR%3A+)
- [Suggest Documentation](https://github.com/iLiftALot/insta-toc/issues/new?assignees=iLiftALot&labels=documentation&template=&title=Doc%3A+)
- [Submit a Pull Request](https://github.com/iLiftALot/insta-toc/pulls)


---


## Road Map
<ul>
  <li>Handle various heading formats</li>
  <ul>
    <li><input type="checkbox" checked><s>Markdown Links</s></input></li>
    <li><input type="checkbox" checked><s>Wiki-Links</s></input></li>
    <li><input type="checkbox" checked><s>HTML</s></input></li>
    <li><input type="checkbox" checked><s>Tags</s></input></li>
    <li><input type="checkbox" checked><s>Special Characters</s></input></li>
    <li><input type="checkbox">...</input></li>
  </ul>
  <li>Configure Settings Tab</li>
  <ul>
    <li><input type="checkbox" checked><s>Indentation</s></input></li>
    <li><input type="checkbox" checked><s>Bullet types</s></input></li>
    <ul>
        <li><input type="checkbox" checked><s>Number</s></input></li>
        <li><input type="checkbox" checked><s>Dash</s></input></li>
        <li><input type="checkbox">...</input></li>
    </ul>
    <li><input type="checkbox" checked><s>ToC Update Delay</s></input></li>
    <li><input type="checkbox" checked><s>Special Character Specificatio</s></input></li>
    <li><input type="checkbox">Preferences for customized TOC appearance</input></li>
    <li><input type="checkbox">...</input></li>
  </ul>
  <li>Improve ToC Interaction/Interface</li>
  <ul>
    <li><input type="checkbox" checked><s>Add folding capabilities</s></input></li>
    <li><input type="checkbox" checked><s>Add ability to exclude specific headings</s></input></li>
    <li><input type="checkbox" checked><s>Add local setting capabilities</s></input></li>
    <li><input type="checkbox">...</input></li>
  </ul>
  <li><a href="https://github.com/iLiftALot/insta-toc/issues/1">Configure specific formatting for various exporting circumstances</a></li>
  <ul>
      <li><input type="checkbox">PDF</input></li>
      <li><input type="checkbox">HTML</input></li>
      <li><input type="checkbox">Markdown</input></li>
      <li><input type="checkbox">...</input></li>
  </ul>
</ul>


%% README_END %%