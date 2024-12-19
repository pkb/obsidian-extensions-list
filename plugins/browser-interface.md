---
aliases:
- Browser Interface
author:
- '[[authors/jason-lieb|Jason Lieb]]'
categories: []
description: Save and reopen browser tabs using your vault and a browser extension.
downloads: 269
mobile: false
number: 1786
stars: 4
title: Browser Interface
type: plugin
updated: '2024-07-16T11:29:32'
url: https://github.com/jason-lieb/obsidian-browser-interface-plugin
version: 1.0.6
---

%% README_START %%

# Obsidian Browser Interface Plugin

An obsidian plugin that pairs with a [chrome extension](https://github.com/jason-lieb/obsidian-browser-interface-extension) to manage your tabs in obsidian.

This plugin displays the tabs saved from the chrome extension and creates buttons to reopen and delete tabs.

The Obsidian Browser Interface Plugin is dependent on the [Meta Bind plugin](https://github.com/mProjectsCode/obsidian-meta-bind-plugin). Also it is highly recommended to pair this plugin with the Advanced Tables plugin.

If there is interest in a firefox-supported extension, one might be created in the future.

### Installation

1. Install from community plugins in Obsidian settings.

2. Install the chrome extension from the [chrome web store](https://chromewebstore.google.com/detail/obsidian-browser-interfac/eciohhdfhkkihkiiefldkejohdoghogo?pli=1).

3. If you are using chromium or brave, enable these 3 flags at chrome://flags or brave://flags, respectively.

  - #file-system-access-api

  - #file-system-access-persistant-permission

  - #file-system-observer

4. Set the directory in obsidian plugin settings and in the extension.

### Limitations

This plugin currently only has the essential functions. The `Open Tab` and `Delete Tab` work by clicking on the row of the desired tab and then clicking the associated button. Also, the buttons don't work in reading mode from a limitation from obsidian.

### Screenshot
![obsidian browser interface plugin screenshot](https://raw.githubusercontent.com/jason-lieb/obsidian-browser-interface-plugin/HEAD/screenshot.png)


%% README_END %%