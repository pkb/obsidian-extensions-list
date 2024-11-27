---
aliases:
- Media Sync
author:
- '[[fnya|fnya]]'
categories: []
description: Downloads media files(eg. images, PDFs) from the URLs in documents and
  displays the content.
downloads: 5265
mobile: false
number: 1100
title: Media Sync
type: plugin
updated: '2024-07-14T14:02:33'
url: https://github.com/fnya/media-sync
version: 0.0.15
---

%% README_START %%

# Media Sync

`Media Sync` is a plugin for [Obsidian](https://obsidian.md) that allows you to downloads media files(eg. images, PDFs) from the URLs in Obsidian documents and displays the content.

## How to use

**Caution!**

**When processing large numbers of files, please make backups before executing.**

Click the `Media sync` icon in the left sidebar.

<img src="https://raw.githubusercontent.com/fnya/media-sync/HEAD/resources/image01.png" width="200">

Then, the plugin will start downloading media files from the URLs in the documents.

Once an media file has been downloaded, the Markdown file will not be processed the next time.

The following media files with URLs starting with https.

<img src="https://raw.githubusercontent.com/fnya/media-sync/HEAD/resources/image02.png" width="480">

The media file is downloaded locally and the Markdown link is updated.

<img src="https://raw.githubusercontent.com/fnya/media-sync/HEAD/resources/image03.png" width="480">

A directory named `_media-sync_resouces` is created and the media files are downloaded into that directory paths can be changed in the configuration.

<img src="https://raw.githubusercontent.com/fnya/media-sync/HEAD/resources/image04.png" width="320">

Right-click on the file and click Media sync to download the media files for the target note only.

When executed from the leaf icon, notes are cached and the media download process is skipped once the notes are executed, but right-click execution always downloads the media files.

<img src="https://raw.githubusercontent.com/fnya/media-sync/HEAD/resources/image05.png" width="320">


%% README_END %%