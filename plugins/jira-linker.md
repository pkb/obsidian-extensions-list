---
aliases:
- Jira Linker
author:
- '[[authors/srz2|Steven Zilberberg]]'
categories: []
description: Quickly format a Jira issue tag as a link to you Jira instance.
downloads: 3323
mobile: true
number: 1229
stars: 4
title: Jira Linker
type: plugin
updated: '2024-06-23T07:37:18'
url: https://github.com/srz2/obsidian-jira-linker
version: 1.1.3
---

%% README_START %%

# Jira Linker

This is an [Obsidian](https://obsidian.md) plugin enables the ability to quickly add:
 - A web based url for a Jira issue
 - A local based uri for a local folder for an issue

 Now supports multiple Jira Instances

## Commands Available
1. **Link Jira issue**

This will link to a Jira instance a given Jira Issue

2. **Link Jira issue (default instance)**

This will link to the default Jira instance of a given Jira Issue

3. **Link Jira issue to info**

This will link to a local file for a given Jira Issue. If the path does not exist, it will be created

Note: The *Local Issue Path* must be set
Note: You can optionally change the "main" file. It defaults to "_Info"

## Demo

![demo gif](https://raw.githubusercontent.com/srz2/obsidian-jira-linker/HEAD/documentation/assets/demo.gif)

## How to use

- Configure needed settings:
  -  Your Jira Instance URL
  -  Your local directory which is the root of issues
  -  Optionally configure the default "main" file
- Highlight your Jira Issue in the editor and invoke the **Link Jira issue** or **Link Jira issue to info** command
  - Additionally, you can have nothing selected and have a modal ask you for the Jira Issue
- The text will be replaced with the appropriately linked Jira issue

## Additional Notes

1. You are able to have as many Jira instances as you'd like
2. There is only 1 location for the 'in obsidian" local folder
3. Unless a specific instance is selected in settings, the default Jira instance used will be the first listed item

## Donate

If you like this plugin and find it useful, please consider donating!

<a href="https://www.buymeacoffee.com/kvnFNpYcl" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>


%% README_END %%