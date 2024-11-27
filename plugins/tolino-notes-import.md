---
aliases:
- Tolino notes Importer
author:
- '[[juergenbr|Jürgen Breitenbaumer]]'
categories:
- '[[categories/Import|Import]]'
description: This is a plugin for Obsidian to import notes from a Tolino E-Reader.
downloads: 3324
mobile: false
number: 881
title: Tolino notes Importer
type: plugin
updated: '2024-01-03T22:42:45'
url: https://github.com/juergenbr/obsidian-tolino-notes-import
version: 1.1.1
---

%% README_START %%

# Obsidian Plugin to import notes from a Tolino E-Reader

## Requirements
* Tolino E-Reader
* USB Cable

## Features
* Imports all notes stored on the Tolino. All notes for the same book are stored in a single Obsidian note
* Summorts bookmarks, notes and text markings
* Import notes into a specific folder
* Add tags to every imported note
* Version 1.1.0: support for english notes and german/english mixed-language note files

## Usage
* Connect your Tolino to your Mac/PC via USB cable
* Copy the path to the root of your mounted Tolino (this is the place where you shoud see a notes.txt file).
Mac example: /Volumes/tolino, Windows example: W:\
* Open settings and set
	* local drive where Tolino is mounted
	* the Obsidian vault location where new notes should get imported
	* list of tags you want to apply to imported notes
* Open the command palette and execute **Tolino notes import Plugin: Load Tolino Notes** 

## Known issues
* (MacOS) Some people reported that their Tolino can not be mounted automatically. 
Currently there is not support for accessing the notes file via the Android File Transfare tool due to a lack of test hardware.
The issue is also mentioned here:
https://mytolino.de/faq/ich-habe-probleme-beim-verbinden-des-tolino-ereaders-mit-computer-was-kann-ich-tun/

## Current restrictions
* ~~Only supports Tolinos with language set to German~~

## Additional info
* Tested on Mac OS and Windows


%% README_END %%