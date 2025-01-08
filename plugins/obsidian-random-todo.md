---
aliases:
- Random To-Do
author:
- '[[authors/NatiAris|NatiAris]]'
categories: []
description: Open a random file containing your custom to-do marker, or a random marker
  at its position
downloads: 4578
mobile: true
number: 233
stars: 3
title: Random To-Do
type: plugin
updated: '2021-11-20T21:01:43'
url: https://github.com/NatiAris/obsidian-random-todo
version: 0.1.3
---

%% README_START %%

## Random To-Do Plugin for Obsidian

This is a plugin for Obsidian (https://obsidian.md).

### Terms and definitions

Let's say you leave a mark near actionable items in your notes, like `todo`, `...`, `???`, etc.  
We'll call a single instance of such mark a **todo item**

### What does this plugin do?

Adds merely three things:
1. A command that opens a random file with at least one *todo item*
2. A command that opens a random *todo item* at its position in its file
3. (optionally) A status bar counter

When you use command (1) all *files* have equal weight  
When you use command (2) all *items* have equal weight  

### How to use

1. **Go to plugin settings** and set your "todo" pattern (uses javascript regular expression format)  
2. **Set hotkeys** for "Random Todo: File" and "Random Todo: Item"  

The default pattern, an ellipsis, is what I use

---

### What this plugin is for?

Same as Open Random note core plugin, but with this one you will only land in files that have some unfinished business to them  
With the core one I had to re-roll the dice way too many times to skip finished/actualized notes, hence this

### See also

You may also be interested in [Smart Random Note Plugin](https://github.com/erichalldev/obsidian-smart-random-note)  
It has similar functional but focuses on different use cases  
If you're going to change the pattern often, it might be a better fit

I wanted something to minimize the number of clicks in my use case, so it didn't quite fit my needs  
Having both is also an option


%% README_END %%