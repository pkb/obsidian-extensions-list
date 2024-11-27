---
aliases:
- NSFW filter
author:
- catvatar
author_page: https://github.com/catvatar
categories: []
description: Adds customizable and easly togglable NSFW filter
downloads: 203
mobile: true
number: 1755
title: NSFW filter
type: plugin
updated: '2024-06-26T00:02:45'
url: https://github.com/catvatar/Obsidian-NSFW-Plugin
version: 1.0.11
---

%% README_START %%

# Obsidian NSFW Plugin
Obsidian plugin adding a sidebar button that toggles the visibility of NSFW marked files. 
## Working principle
Any note that is inside **NSFW folder** is hidden from view inside obsidian. Pressing the **Toggle Visibility Button** moves marked files from their current location to selected **NSFW folder**. Plugin automatically creates cash file to save each files old location.
>**NSFW folder** defaults to `.NSFW/`
## Motivation
This project was motivated by the need to hide personal notes from view when showing notes in public.
# Guide
By either clicking the sidebar eye icon, or the `Toggle NSFW filter` command your files will be moved to a designated **NSFW folder** and excluded from your vault. Doing the same again will move files back.
# Known Issues
- When files are moved to the **NSFW folder** their original location is saved to `data.json` in **Plugin Directory**, this may be a concert when using outside tools for vault synchronization
- Before changing **NSFW folder** make sure to have your vault set to **NSFW**


%% README_END %%