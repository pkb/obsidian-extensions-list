---
aliases:
- Ruled template
author:
- '[[YPetremann|YPetremann]]'
categories:
- '[[categories/Templates|Templates]]'
description: Select templates automaticaly based on rules at file creation.
downloads: 3586
mobile: true
number: 1025
stars: 11
title: Ruled template
type: plugin
updated: '2023-07-26T01:43:10'
url: https://github.com/YPetremann/obsidian-ruled-template
version: 1.1.0
---

%% README_START %%

# Obsidian Ruled Template

This is a plugin for Obsidian (https://obsidian.md).  
This is made to be used with plugins like templater.

## Description

It permit to automaticaly select a template on file creation based on rules.  
In the settings, you can define as many rules as you need.  
You define for each rule a pattern (a regex or a glob) and a template to use.  
Rules are checked from top to bottom and the first to match is used.  
You can reorganise them as you like with convenient sorting arrows and quick deletion.  
You can also test rules by typing a path and it will tells you which one matched.  
When testing rules, it will tells you if a pattern or a template is invalid.

## example

Periodic Notes, Natural Language Dates and templater are awesome plugins but in a complete workflow with automated links, but they don't listen for all journal file to be created, it can get messy to have files formatted one way or another, so a solution is to not define template for them and use Ruled template instead.
With these it's possible to check the file name.

| pattern                             | template                |
|-------------------------------------|-------------------------|
| `/\/[0-9]{4}-[0-9]{2}-[0-9]{2}.md/` | `Templates/Day.md`      |
| `/\/[0-9]{4}-W[0-9]{2}.md/`         | `Templates/Week.md`     |
| `/\/[0-9]{4}-[0-9]{2}.md/`          | `Templates/Month.md`    |
| `/\/[0-9]{4}-Q[0-9].md/`            | `Templates/Quaterly.md` |
| `/\/[0-9]{4}.md/`                   | `Templates/Year.md`     |


%% README_END %%