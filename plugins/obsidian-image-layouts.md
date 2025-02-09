---
aliases:
- Image Layouts
author:
- '[[authors/vertis|Luke Chadwick]]'
categories: []
description: Add beautiful image layouts to your notes
downloads: 18281
mobile: true
number: 689
stars: 151
title: Image Layouts
type: plugin
updated: '2024-07-12T23:47:35'
url: https://github.com/vertis/obsidian-image-layouts
version: 0.15.5
---

%% README_START %%

# Obsidian Image Layouts

![GitHub Downloads"](https://img.shields.io/github/downloads/vertis/obsidian-image-layouts/total?color=573E7A&logo=github)
[![GitHub release](https://img.shields.io/github/release/vertis/obsidian-image-layouts.svg)](https://GitHub.com/vertis/obsidian-image-layouts/releases/)
[![GitHub license](https://img.shields.io/github/license/vertis/obsidian-image-layouts.svg)](https://github.com/vertis/obsidian-image-layouts/blob/main/LICENSE)
[![Known Vulnerabilities](https://snyk.io/test/github/vertis/obsidian-image-layouts/badge.svg?targetFile=package.json&style=flat-square)](https://snyk.io/test/github/vertis/obsidian-image-layouts?targetFile=package.json)
[![GitHub Issues](https://img.shields.io/github/issues/vertis/obsidian-image-layouts.svg)](https://github.com/vertis/obsidian-image-layouts/issues)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)

I wanted a way to lay images out inside obsidian notes in a `beautiful` way. This is my first attempt at that. It's a bit rough around the edges, because it's still quite new, but I hope that it's useful in displaying image heavy notes. I wanted the ability to visually tell stories, and this is a good first step.

![](https://raw.githubusercontent.com/vertis/obsidian-image-layouts/HEAD/docs/layout-icons.png)

Note: Further examples can be found on the documentation. Masonry 5 and 6 are not shown above.

## Usage

In order to get the image layout use \`\`\` followed by the layout you want e.g. \`\`\`image-layout-a

Images can either be in wikilink format `![[imagename]]` in which case it will load from the local vault, or in `![](https://raw.githubusercontent.com/vertis/obsidian-image-layouts/HEAD/url)` format, which will load either the local or remote image as applicable.

The number of images varies depending on the layout. If you don't have enough it will display a placeholder. If you have too many they'll simply be hidden.

## Roadmap

When I find time I'm hoping to add the following:

- Overlay text on images [DONE]
- Image captions [DONE]
- Permanent overlays [DONE]
- Overlays from markdown links [DONE]
- General gallery to support scrolling through photos [DONE - NEW!]
- Drag and drop support
- Visually pick empty layouts [PARTIAL]

## Documentation

- [Carousel](https://github.com/vertis/obsidian-image-layouts/blob/main/docs/carousel.md) - A simple carousel that can be used to scroll through images.
- [Legacy Layouts](https://github.com/vertis/obsidian-image-layouts/blob/main/docs/legacy-layouts.md) - We're moving to a much more capable system, but these are still available. If you used version 0.10.0 or earlier these are the layouts you're probably using. They're still supported and will be for the foreseeable future.
- [Legacy Masonry Layouts](https://github.com/vertis/obsidian-image-layouts/blob/main/docs/legacy-masonry-layouts.md) - As above, these are the original masonry layouts supported.
- [Overlaying Text and Captions](https://github.com/vertis/obsidian-image-layouts/blob/main/docs/text.md)


%% README_END %%