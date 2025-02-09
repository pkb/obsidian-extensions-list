---
aliases:
- Search on Internet
author:
- '[[authors/HEmile|Emile]]'
categories: []
description: Add context menu items to search the internet within Obsidian.
downloads: 26613
mobile: false
number: 74
stars: 111
title: Search on Internet
type: plugin
updated: '2021-06-23T22:35:28'
url: https://github.com/HEmile/obsidian-search-on-internet
version: 0.5.0
---

%% README_START %%


<p align="left">
    <a href="https://github.com/HEmile/obsidian-search-on-internet/releases">
        <img src="https://img.shields.io/github/downloads/HEmile/obsidian-search-on-internet/total.svg"
            alt="Downloads" width="110"></a> 
    <a href="https://github.com/HEmile/obsidian-search-on-internet/releases">
        <img src="https://img.shields.io/github/v/release/HEmile/obsidian-search-on-internet"
            alt="Github latest release" width="100"></a>
   <a href="https://publish.obsidian.md/semantic-obsidian/Search+on+Internet+Plugin">
        <img src="https://img.shields.io/badge/docs-Obsidian-blue"
            alt="Documentation" width="100"></a>
    <a href="https://discord.gg/sAmSGpaPgM">
        <img src="https://img.shields.io/discord/794500624163143720?logo=discord"
            alt="chat on Discord" width="120"></a>
</p>

Warning: The right-click menu is currently broken in the latest Obsidian release, so this plugin will not work as expected!

## Search on Internet
Adds the option to search selected text on external websites, like Google and Wikipedia. 
The search opens in an iframe in Obsidian. You can add your own websites! 

![](https://raw.githubusercontent.com/HEmile/obsidian-search-on-internet/master/resources/context_iframe.gif)

It also adds the search options to the file context menu to search based on the title of a note. 
And you can choose to open searches in your default browser instead of Obsidian.

![](https://raw.githubusercontent.com/HEmile/obsidian-search-on-internet/master/resources/demo.gif)

You can also right-click on an internal link to perform a search on that link:

![](https://raw.githubusercontent.com/HEmile/obsidian-search-on-internet/master/resources/internal_link.png)

And similar for external links:

![](https://raw.githubusercontent.com/HEmile/obsidian-search-on-internet/master/resources/external_link.png)

### Settings
Note: You need to have the latest Obsidian v0.10.11 installed for this plugin to work!

By default, the plugin comes with searches on Google and Wikipedia. 
You can add your own websites to search on in the settings. 

![](https://raw.githubusercontent.com/HEmile/obsidian-search-on-internet/master/resources/img.png)

For each website, fill in the following three fields:
- Name: The name of the search. This will be displayed in the search bar and the context menu.
- URL: The URL to open. `{{title}}` will be replaced by the current notes title. This is used as the 'query'.
- Tags (optional): A list of tags for notes to display the search option on. 
  In the example screenshot, this is used to only add the IMDB search on notes tagged with `#actor`, `#movie` or `#director` (in Dutch!)
  
You can also disable the iframe search and open the search in your browser. 
  
### Contributors
- [nhaouari](https://github.com/nhaouari) added the setting not to encode, and started work on opening external links in iframes.

### Credits
Settings code is mainly taken from the [Templater plugin](https://github.com/SilentVoid13/Templater) by [SilentVoid13](https://github.com/SilentVoid13)

Modal code is inspired by the [Citation plugin](https://github.com/hans/obsidian-citation-plugin/blob/master/src/modals.ts)


%% README_END %%