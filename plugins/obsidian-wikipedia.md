---
aliases:
- Wikipedia
author:
- Jonathan Miller
author_page: https://jmill.dev
categories: []
description: Grabs information from Wikipedia for a topic and brings it into Obsidian
  notes
downloads: 20104
mobile: true
number: 318
title: Wikipedia
type: plugin
updated: '2021-10-16T19:37:46'
url: https://github.com/jmilldotdev/obsidian-wikipedia
version: 1.0.3
---

%% README_START %%

# Obsidian Wikipedia

This is a plugin for Obsidian (https://obsidian.md).

This plugin gets the first section of Wikipedia and pastes it into your active note.

## Usage

This plugin has two commands:

- `Get Wikipedia for Active Note`, which gets the first section of Wikipedia using the active note's title as search term.
- `Get Wikipedia for Search Term`, which gets the first section of Wikipedia for a search term.

## Settings

Settings for this plugin include:

- **Language Prefix**: The prefix before `wikipedia.org` used to access the language of Wikipedia you want. (Default: 'en')
- **Extract Template**: The template to use to paste your extract. Available variables are {{text}}, {{searchTerm}}, and {{url}}
- **Bold Search Term?**: If set to True, bolds the first instance of the search term in the extract
- **Use Paragraph Template?**: If set to true, the paragraph template will be inserted for each paragraph of text for {{text}} in main template.
- **Paragraph Template**: If *Use Paragraph Template* is set to true, this template will be inserted for each paragraph in the text extract. Available variable: {{paragraphText}}.

%% README_END %%