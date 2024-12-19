---
aliases:
- Azure DevOps Linker
author:
- '[[authors/srz2|Steven Zilberberg]]'
categories: []
description: Quickly format a Azure issue tag as a link to you Azure instance.
downloads: 283
mobile: true
number: 1629
stars: 1
title: Azure DevOps Linker
type: plugin
updated: '2024-04-26T19:28:22'
url: https://github.com/srz2/obsidian-azure-devops-linker
version: 1.0.2
---

%% README_START %%

# Azure DevOps Linker

This is an [Obsidian](https://obsidian.md) plugin enables the ability to quickly add:
 - A web based url for a Azure DevOps issue
 - A local based uri for a local folder for an issue

## Commands Available
1. **Link Azure issue**

This will link to a Azure instance a given Azure Issue

2. **Link Azure DevOps issue (default instance)**

This will link to the default Azure DevOps instance of a given Azure DevOps Issue

3. **Link Azure issue to info**

This will link to a local file for a given Azure Issue. If the path does not exist, it will be created

Note: The *Local issue path* must be set
Note: You can optionally change the "main" file. It defaults to "_Info"

## Demo

![demo gif](https://raw.githubusercontent.com/srz2/obsidian-azure-devops-linker/HEAD/documentation/assets/demo.gif)

## How to use

- Configure needed settings:
  - Your Azure DevOps Instance URL 
    - This should include the instance name and the organization name (i.e. - dev.azure.com/orgName)
  - List of projects and desired abbrivation
  - Your local directory which is the root of issues
  - Optionally configure the default "main" file
- Highlight your Azure Issue in the editor and invoke the **Link Azure DevOps issue** or **Link Azure DevOps issue to info** command
  - Additionally, you can have nothing selected and have a modal ask you for the Azure Issue
- The text will be replaced with the appropriately linked Azure issue

## Additional Notes

1. You are able to have as many Azure instances as you'd like
2. There is only 1 location for the 'in obsidian' local folder
3. Unless a specific instance is selected in settings, the default Azure instance used will be the first listed item

## Donate

If you like this plugin and find it useful, please consider donating!

<a href="https://www.buymeacoffee.com/kvnFNpYcl" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>


%% README_END %%