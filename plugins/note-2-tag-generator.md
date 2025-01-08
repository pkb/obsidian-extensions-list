---
aliases:
- Note 2 Tag Generator
author:
- '[[authors/augustin7698|Augustin]]'
categories: []
description: Generate tags from notes without openai key in multiple languages
downloads: 543
mobile: true
number: 1815
stars: 1
title: Note 2 Tag Generator
type: plugin
updated: '2024-07-17T14:23:15'
url: https://github.com/augustin7698/note-2-tag-generator
version: 1.0.0
---

%% README_START %%

# note to tag generator

## Description
This plugin generates tags from notes. It is based on all the content of the note.
It provides a command to generate tags for the current note.
It is completely free and **does not require any configuration**.

## Usage
1. Open a note
2. Run the command `Generate tags for current note`
3. Tags will be generated and added to the note's automatically
4. ENJOY!

## Settings
- **Language**: The language used to generate tags. Default is English, but you can change it to any language you want.

## How it works
The plugin uses the https://languages.cortical.io/rest/text/keywords endpoint to generate tags from the content of the note. It sends a request to the API with the content of the note and the language selected in the settings. The API returns a list of tags that are added to the note. The plugin does not store any data or information about the notes. The plugin also detects if some tags are similar and removes them.

## Contact
If you have any questions or suggestions, or if you want to report a bug, please contact me at discord: `@0gustin`


%% README_END %%