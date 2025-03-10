---
aliases:
- Sticky Headings
author:
- '[[authors/imshenshen|Shen Shen]]'
categories: []
description: Sticky Headings and Shows the heading level
downloads: 2695
mobile: true
number: 1543
stars: 36
title: Sticky Headings
type: plugin
updated: '2024-04-23T17:01:03'
url: https://github.com/imshenshen/obsidian-sticky-heading
version: 1.2.0
---

%% README_START %%

# Obsidian Sticky Heading Plugin
![CleanShot 2024-01-22 at 21 45 12@2x](https://github.com/imshenshen/obsidian-sticky-heading/assets/19701958/57d806c1-8452-4f88-9688-f362482e822d)


https://github.com/imshenshen/obsidian-sticky-heading/assets/19701958/12f8e9c6-f0f7-4066-b0f2-fd89e3775f15


## config
when use different theme, the space of sticky heading is different, so
you need install [Style Settings plugin](https://github.com/mgmeyers/obsidian-style-settings) which allows you to config top space when sticky.

![](https://github.com/imshenshen/obsidian-sticky-heading/assets/19701958/7ffbe469-053c-487a-af50-0b11b3a47e71)

## known issues
### flicker when setting stickyType to 'prevToH1'
when setting stickyType to 'prevToH1', When you scroll the screen and the number of sticky headings changes, the sticky heading container will flicker. This is because the plugin needs to calculate the position according to the current number of sticky headings.

### not work for reading mode
This plugin mainly aims to solve the problem of: when writing in fragmented time, I often forget which heading level I am currently at, or which level I should use for the next heading.

If there is significant demand for this feature in reading mode, we will consider implementing it. Pull requests are welcome.

## Releasing new releases

- Update your `manifest.json` with your new version number, such as `1.0.1`, and the minimum Obsidian version required for your latest release.
- Update your `versions.json` file with `"new-plugin-version": "minimum-obsidian-version"` so older versions of Obsidian can download an older version of your plugin that's compatible.
- Create new GitHub release using your new version number as the "Tag version". Use the exact version number, don't include a prefix `v`. See here for an example: https://github.com/obsidianmd/obsidian-sample-plugin/releases
- Upload the files `manifest.json`, `main.js`, `styles.css` as binary attachments. Note: The manifest.json file must be in two places, first the root path of your repository and also in the release.
- Publish the release.

> You can simplify the version bump process by running `npm version patch`, `npm version minor` or `npm version major` after updating `minAppVersion` manually in `manifest.json`.
> The command will bump version in `manifest.json` and `package.json`, and add the entry for the new version to `versions.json`


%% README_END %%