---
aliases:
- Qiniu Image Uploader
author:
- '[[authors/jianzs|Jade Zheng]]'
categories:
- '[[categories/Image handling|Image handling]]'
description: Uploads images from your clipboard to qiniu.com and embeds uploaded image
  to your note.
downloads: 3086
mobile: true
number: 1178
stars: 4
title: Qiniu Image Uploader
type: plugin
updated: '2024-07-27T19:00:15'
url: https://github.com/jianzs/obsidian-qiniu-image-uploader
version: 1.1.5
---

%% README_START %%

# Obisidian Qiniu Image Uploader

![GitHub release (latest by SemVer including pre-releases)](https://img.shields.io/github/downloads-pre/jianzs/obsidian-qiniu-image-uploader/latest/total?style=flat-square)

This is a plugin for [Obsidian](https://obsidian.md). It was generated based on the [standard plugin template](https://github.com/obsidianmd/obsidian-sample-plugin).

This project implements an image uploader, that uploads the images to [Qiniu Cloud](https://www.qiniu.com/) instead of storing them locally in your vault.

## Installation

Install the plugin via the [Community Plugins](https://help.obsidian.md/Advanced+topics/Third-party+plugins#Discover+and+install+community+plugins) tab within Obsidian

## Getting started

### Qiniu Cloud configuration

You should create a bucket on the Qiniu Cloud, and configure an external link domain name for it. 

To obtain the `AccessKey` and `AccessSecretKey`, you can fetch them from the key management section in your Qiniu personal center.

### Plugin configuration in Obsidian

All setting items are required, except for the the `Name Prefix` and `Time Format` which are optional.

## Thanks

- [Obsidian Image Auto Upload Plugin](https://github.com/renmu123/obsidian-image-auto-upload-plugin)
- [Obsidian Imgur Plugin](https://github.com/gavvvr/obsidian-imgur-plugin)


%% README_END %%