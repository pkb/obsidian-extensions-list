---
aliases:
- Scripture Indexer
author:
- jdrbrn
author_page: https://github.com/jdrbrn
categories: []
description: Indexes references to scriptures in notes.
downloads: 128
mobile: true
number: 1926
title: Scripture Indexer
type: plugin
updated: '2024-10-28T03:11:35'
url: https://github.com/jdrbrn/obsidian-scripture-indexer
version: 1.2.0
---

%% README_START %%

# Obsidian Scripture Indexer

Scrapes your notes to find references to Scriptures and then indexes them.

When indexing files it will automatically get rid of old/dead indexes. If enabled it will index automatically on save, and automatically clean the index on deletion and renaming.

References should be cited in the form Book Chapter:Verse or Chapter.Verse
An interval of verses can be cited with a hyphen.<br>
Multiple verses or intervals in the same chapter can be seperated by a comma.<br>
Different chapters or books need to be seperated with a semicolon.<br>
Example: Gen 1:1,2,3-5; 2:1; Ex 1:1<br>

## Commands
Reset Index - Resets the index

Index All Files - Indexes all markdown files in the vault

Index This File - Indexes the currently active note

## Settings
Index File Path - What file to write the index to (Index.md by default)

Enable automatic indexing - Toggles if index should be automatically updated when files changes are detected (Enabled by default)

Automatic indexing delay - How long to wait after to make sure a file is done being edited before indexing it. (3 Seconds by default)

%% README_END %%