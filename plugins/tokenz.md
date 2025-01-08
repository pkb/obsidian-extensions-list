---
aliases:
- Tokenz
author:
- '[[authors/ferenk|Ferenc Moricz]]'
categories: []
description: 'Insert shortcodes into your document, e.g smileys :) or emojis :wink:
  . User-defined short code maps are also supported.'
downloads: 249
mobile: true
number: 1884
stars: 4
title: Tokenz
type: plugin
updated: '2024-08-26T20:26:50'
url: https://github.com/ferenk/obsidian-tokenz
version: '0.74'
---

%% README_START %%

﻿<div align="center" class="not_on_gh-pages">
  <br>
  <a href="https://github.com/ferenk/obsidian-tokenz">
    <img alt="tokenz poster" src="https://ferenk.github.io/obsidian-tokenz/docs/img/tokenz_poster.jpg" width="830">
  </a>
  <h1>Obsidian / Tokenz</h1>
</div>

Use your favourite symbols, special characters and frequently used snippets with ease!  
You can insert them to your document using short code mappings:

- **Built-in** short code maps:  
	- **emojis**, like ``:smile:`` 🙂 or ``:wink:`` 😉 (1800+ installed by default),  
		and the classic, good old  
	- **smileys**, like **``:-)``** 🙂, **``8-D``** 😎 (installed by default)
- **User defined** short code maps. You can use any format you'd like:
	``/prog-50``  ▋, ``.success`` 🏆,  ``!movie`` 🎥
	For further explanation and a short configuration guide see [2. User defined code maps](#2-user-defined-code-maps) .  

Demo video showing the features:<br>
<img align="center" src="https://github.com/user-attachments/assets/6e20d9ea-bb23-4082-ba0b-686987a4d989">
<br><br><br>
## Configuration

### 1. Installation
#### 1.1 From Obsidian's Community plugin collection
**Suggested method**, the easiest way to install:
1. Open settings (Gear icon)
2. Click **Options / Community plugins / Community plugins, Browse...** button
3. Search for "Tokenz"
4. Install and Enable
5. Start typing some pre-installed token, e.g. ``:)``
#### 1.2 From sources
It's also possible to install it manually:  
1. Get the sources: ``git clone https://github.com/ferenk/obsidian-tokenz``  
2. Init the sources folder: ``cd obsidian-tokenz; npm install``  
3. Build the plugin: ``npm run build``  
4. Create a folder in your Obsidian wallet: ``mkdir <your wallet's path>/.obsidian/plugins/tokenz``  
5. Copy the plugin's files **main.js**, **manifest.json**, **styles.css** into the folder just created  
6. Restart Obsidian and enable the "Tokenz" plugin  
7. Start typing ``:)``

### 2. User defined code maps
It's easy to define your own code maps. You can choose any format for your short codes (tokens). But you can also mix different formats (see 4.).  
1. Choose a name for your code map, e.g **my code map**  
2. Create a folder named **data** in <Your wallet's path>/.obsidian/plugins/tokenz
3. Create an index file of the code maps in the data folder just created. It's name must be **maps.lst**.  
   Example ***data/maps.lst:***
   ```
   my_code_map.json
   ```
4. Create your own code map file. Its structure is very simple, for example here are are the codes for our sample paragraph<br>(it also demonstrates the mixed usage of different token formats)  
   Example ***my_code_map.json*** to enter the sample lines
   ```
   {
       "/prog-20":         "▎",
       "/prog-50":         "▋",
       "/prog-80":         "▉",
       ".success":        "🏆",
       ".idea":           "💡",
       "|tv_episode|":    "📺",
       "!movie":          "🎥"
   }
   ```

And now you can insert these symbols to your document this way:

| Format          | Short code example                           |   Result               |
| --------------- | -------------------------------------------- | ---------------------- |
| IRC style       | ``/prog-20 20%, /prog-50 /prog-90 90%``      | => ▎ 20%, ▋ 50%, █ 90% |
| CSS class       | ``.idea, .success``                          | => 💡, 🏆              |
| Any crazy style | ``\|tv_episode\|``                           | => 📺                  |


%% README_END %%