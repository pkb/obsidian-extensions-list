---
aliases:
- Scripture Indexer
author:
- '[[authors/jdrbrn|jdrbrn]]'
categories: []
description: Indexes references to scriptures in notes.
downloads: 201
mobile: true
number: 1926
stars: 0
title: Scripture Indexer
type: plugin
updated: '2024-12-21T22:57:27'
url: https://github.com/jdrbrn/obsidian-scripture-indexer
version: 1.3.0
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
Reset index - Resets the index

Index all files - Indexes all markdown files in the vault

Index this file - Indexes the currently active note

## Settings
Index file path - What file to write the index to  (Index.md by default)<br>
Index file path is excluded from automatic indexing if enabled.

Chapter and verse delimiter - What character you use to seperate chapters and verse in your notes (Defaults to ':')

Enable automatic indexing - Toggles if index should be automatically updated when files changes are detected (Enabled by default)

Automatic indexing delay - How long to wait after to make sure a file is done being edited before indexing it (3 Seconds by default)

Paths to exclude from indexing - Files and/or folders that should not be automatically indexed

%% README_END %%