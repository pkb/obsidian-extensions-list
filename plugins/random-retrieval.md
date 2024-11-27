---
aliases:
- random-retrieval
author:
- '[[JeanJean-rxl|Rachninomav]]'
categories: []
description: Random Note Retrieval based on LLMs.
downloads: 32
mobile: false
number: 1962
title: random-retrieval
type: plugin
updated: '2024-10-25T19:27:53'
url: https://github.com/JeanJean-rxl/random-retrieval-plugin
version: 1.0.7
---

%% README_START %%

# Obsidian Random Retrieval Plugin

**Note**: This feature is only supported on macOS so far.

This plugin was developped to open a random note based on local LLMs with Obsidian.
- Random for Random Note in Obsidian
- Retrieval for Retrieval Component in Haystack

I developped this plugin because .. I have a bad memory... and I enjoy the pleasure of treasure Hunt. While
- Search provides multiple way to reveal those sporadic ideas hidden in the vault,
- Random Note, as a core plugin, provides a complete random way to dig it out...

I choose LLM to be a retriver + ranker, so that this plugin can function like a fuzzy-search / half-random-note.


## Installation

- at the first time 

conda create --name rr-env

pip install -r requirements.txt

- and then (for the most users)

open plugin in obsidian (a terminal will be activated automatically) 

click ribbon button, and enjoy the nightwalk💡

(please keep the terminal open while you run the plugin)

- and then (for the developpers)

feel free to replace rr_app.py with your models 



## Future Plan
- support more platform, such as: Windows, mobile device
- multi-language support
- speed up


## Version History

#### 1.0.7
- complete the changes and minor changes requested


#### 1.0.6
- support language added: Chinese


#### 1.0.4
- update styles.css
- allow user to configure the configuration directory


#### 1.0.3
- once conda env is set, open terminal automatically while activate the plugin
- manually set the num of new pages (default open 3 new pages, ranking by retriever)


#### 1.0.0
- basic version: only support English for now.


%% README_END %%