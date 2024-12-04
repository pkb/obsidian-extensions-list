---
aliases:
- Paste image Png to Jpeg
author:
- '[[musug|musug]]'
categories:
- '[[categories/Image handling|Image handling]]'
description: Screenshot png to jpeg and compress and rename
downloads: 9534
mobile: true
number: 509
stars: 41
title: Paste image Png to Jpeg
type: plugin
updated: '2023-02-28T19:12:08'
url: https://github.com/musug/obsidian-paste-png-to-jpeg
version: 1.0.4
---

%% README_START %%

# obsidian-paste-png-to-jpeg

This plugin is inspired by [obsidian-paste-image-rename](https://github.com/reorx/obsidian-paste-image-rename), obsidian-paste-image-rename can be used when inserting images rename, I thought I could also compress and modify it when inserting, so I created this plugin

The plugin automatically handles the following when the image (png jpg jpeg) is pasted into the notes
1,Convert the image to jpeg format and compress it
2,store the image in the current notes directory in the images folder
3,Change the name of the image to the name of the current note plus a number

For example, a screenshot of hello.md will be named hello-1.jpeg...
Also you can set whether to enable image compression or not and set the quality of the image, the smaller the quality, the higher the compression rate.

![](https://raw.githubusercontent.com/musug/obsidian-paste-png-to-jpeg/HEAD/images/settings.png)


%% README_END %%