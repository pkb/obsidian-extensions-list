---
aliases:
- Object Writer
author:
- Iago Grah
author_page: https://github.com/IagoGrah
categories: []
description: Quickly create a note with a prompt for object writing.
downloads: 1866
mobile: true
number: 1348
title: Object Writer
type: plugin
updated: '2024-10-31T20:15:17'
url: https://github.com/IagoGrah/obsidian-object-writer
version: 1.1.1
---

%% README_START %%

# **Object Writer**

Plugin for Obsidian.md that adds a ribbon button to create a quick note for object writing, providing a random word.

>_Object writing is a writing exercise that focuses on describing an object and any related experiences, using all of your senses. I originally learned about object writing from brilliant lyric guru Pat Pattison._

I just started using Obsidian and thought I'd take the opportunity to come back to object writing, so with a little googling I figured out how to make a plugin.

I had made a console app that used notepad for this purpose originally. [Here's the repo](https://github.com/IagoGrah/ObjectWriter).

---

### How it works

+ When you press the new pen ribbon icon, a new note will be created and opened (like the daily note), this new note will have a random word and a timer counting down. Just write away, that easy.
+ When the timer reaches zero, you will automatically enter read mode (this behavior can be disabled).
+ The new file name will be formatted according to the 'Note name' setting, you can use the following keywords:
  + {{date}}: Current date, formatted according to 'Date format'.
  + {{time}}: Current time, formatted according to 'Time format'.
  + {{object}}: Random word, make sure to include this, otherwise you won't know your word.
  + _Example_: '{{date}} ({{object}})' -> '2023-12-09 (Word)'
+ The path for the new file can also be changed via settings.
+ By default, the new note will have a '#ObjectWriter' tag, you can disable this via settings.
+ The timer can also be disabled or configured to your liking via settings.

---

#### Some things I'd like to add:
+ Option to use a template for the notes.
+ Custom word list (for different languages, for example).
+ **Option to integrate into the daily note instead of creating new notes.**

---

I made this for myself but I guess there's no reason not to share. The file with all the words to pick from (**words.js**) is not the best, but it gets the job done.


%% README_END %%