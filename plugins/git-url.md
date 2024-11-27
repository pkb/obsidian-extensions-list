---
aliases:
- Git Url
author:
- khuongduy354
author_page: https://github.com/khuongduy354/
categories: []
description: Create a url to your file on your git remote repo
downloads: 3646
funding_page:
  Buy Me A Coffee: https://www.buymeacoffee.com/khuongduy3E
  Plugin Repo: https://github.com/khuongduy354/obsidian-git-url
mobile: false
number: 996
title: Git Url
type: plugin
updated: '2024-04-08T10:24:16'
url: https://github.com/khuongduy354/obsidian-git-url
version: 1.1.0
---

%% README_START %%

# Obsidian Git Url Plugin
- Copy file with remote storage's link, so it's accessible, shareable online.

- Copy file content with resources accessible on the internet, so you don't have to upload assets manually online.   

# Tips 
> Use this extension with VSCode Obsidian Visualizer extension, and Github Codespace to have a browser-based Obsidian experience 
- VSCode Obsidian Visualizer: is a VSCode extension developed by me. It supported showing Global Graphs, Local Graphs, and backlinks (near future),... It also supports Desktop VSCode. 

# Features

## File's remote repo url   

### Usage   
- In settings, type repo name, username. Or, provide full custom URL (e.g above: https://gitlab.com/username/obsidian-repo/-/blob/master/)
- Open file explorer tab in obsdian -> right click on file -> Copy git path
- Paste the link to browser and access the file

### Why
- I find it inconvinient to access obsidian files from other devices, especially the ones without Obsidian installed. 

- So I leverage [Obsidian Git](https://github.com/denolehov/obsidian-git), and use gitlab as the remote storage.
- So accessing https://gitlab.com/username/obsidian-repo/-/blob/master/filename.md, open the file directly on browser. 

## Live Content 
### Usage   
- Configure as File's remote url above, and resources location (See Settings > Files & Link > Attachment folder path)
- Open file explorer tab in obsdian -> right click on file -> Copy live content 
- Paste content in any markdown renderer (for e.g Stackedit), and images should load. 

### Why
- When copy file content (markdown) from obsidian to other platforms, we have to upload resources (images,...) manually.
- With this plugin, we can copy whole content, and with replaced images local link to internet link (for e.g https://domain/my_image.png), which is accesible in any markdown renderer. 

**Note**: Currently, Github is not working, only Gitlab, or provide your custom cloud storage. 



%% README_END %%