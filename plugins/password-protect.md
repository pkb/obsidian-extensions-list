---
aliases:
- Password Protect
author:
- '[[Aspharmyx|Aspharmyx]]'
categories:
- '[[categories/Security and privacy|Security and privacy]]'
description: Password protect your notes.
downloads: 1743
mobile: true
number: 1534
stars: 0
title: Password Protect
type: plugin
updated: '2024-10-31T05:16:21'
url: https://github.com/Aspharmyx/obsidian-password-protect
version: 1.1.6
---

%% README_START %%

# Obsidian Password Protect Plugin

With this plugin you can set password to different notes and folders so your journals will be safe.

The hidden notes will be visible only after you enter the password on each session.

This plugin changes the extension of files to hide them from even searches and graph view. The files aren't encrypted, they can be read with note editors in system explorer so it's not %100 safe but it can be protective against casual viewers.

I'll try to encrypt the files and see if it works consistently.

### Problem Solving

If you encounter a problem and want to change back file extensions to .md you can use the command "Password Protect: Turn all hidden files to Markdown". This command of course needs password.

### Syncing Files
A workaround I use is I ignore the .md files in my hidden folders. I use syncthing to sync my desktop and mobile and it works as long as you don't try to edit hidden files at the same time.

This is how the ignore pattern looks like for my Journal folder: 

**/Journal/*.md**

I'm not sure how it works with Obsidian sync. I can release a version where it hides files without changing extensions but that way the files are visible with search and in graph view.

### Thanks To
Oliver for [File Hider](https://github.com/Oliver-Akins/file-hider) plugin. This plugin uses some code from it like for hiding folders and context menu.


%% README_END %%