---
aliases:
- Todoist Project sync
author:
- Jonas Dam
author_page: http://jonasdam.com
categories: []
description: synchronizes projects from Todoist, creating a note for each.
downloads: 1327
mobile: false
number: 1849
title: Todoist Project sync
type: plugin
updated: '2024-08-24T03:56:24'
url: https://github.com/stuporfly/ObsidianTodoistProjects
version: 0.1.13
---

%% README_START %%

# Obsidian Todoist project sync

This plugin pulls project inforation from Todoist, and creates a note for each project, in a tree structure.

- when a project is delete in Todoist, the corresponding note is archived.
- if a project is restored, the corresponding note is restored from the archive.
- if a project is moved or renamed, the corresponding note and sub-notes are moved and renamed. 


You have the following settings to work with: 
 - TodoistToken: The API-token from todoist that is required to access their api for your account.
 - PrimarySyncDevice: if this field is set, projects will only sync on the device with this name. This is to prevent sync-problems if projects are updated on multiple devices.
 - TodoistSyncFrequency: The interval, in seconds, between each sync.
 - TodoistProjectFolder: Defines which folder the todoist notes should be created in. 
    
    
By default, the newly created notes contains a link to the project in Todoist, and the code to show todos for the current project, assuming you have the [Todoist Plugin](https://obsidian.md/plugins?id=todoist-sync-plugin) installed.


It is recommended that you also install the [Obsidian Folder Notes plugin](https://obsidian.md/plugins?id=folder-notes) - if you don't you will have both folders and notes for any project that has sub-projects. The note for these projects will be inside the folders.


%% README_END %%