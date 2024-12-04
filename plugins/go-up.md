---
aliases:
- Go Up
author:
- '[[JinMuGo|JinMu Go]]'
categories: []
description: Go to the pages that says 'up' property
downloads: 1147
mobile: false
number: 1438
stars: 4
title: Go Up
type: plugin
updated: '2024-06-10T13:42:46'
url: https://github.com/JinMuGo/obsidian-go-up
version: 1.1.2
---

%% README_START %%

# obsidian-go-up

> Go Upper Page

This plugin allows users to quickly navigate to a specified "parent" page by utilizing a custom property in the page's front matter.

# How to Use

1. Install the Plugin: Download and install the **Go Up plugin** in your Obsidian vault through the community plugins section.
2. Add "up" Property: In your note, include an up property in the front matter. <br/>

    For example:

    ```yaml
    ---
    up: "[[ParentNote]]"
    ---
    ```

    Replace ParentNote with the link to the page you wish to navigate to. <br/>

    or you can use Multiple Pages in "up" Property like this <br />

    ```yaml
    ---
    up:
     - "[[ParentNote1]]"
     - "[[ParentNote2]]"
    ---
    ```

3. Use the Keyboard Shortcut: With the up property set, you can set the Keyboard Shortcut. <br />
   i recommend `Cmd + Shift + U` to navigate to the specified parent page.


# Customize your own parent property

go to setting tab "Go Up" and fill out Parent property to use "parent" notes.

![setting tab](https://raw.githubusercontent.com/JinMuGo/obsidian-go-up/HEAD/public/setting.png)


%% README_END %%