---
aliases:
- Linked Data Helper
author:
- '[[authors/kometenstaub|kometenstaub]]'
categories: []
description: Parse Linked data for Linked Data Vocabularies.
downloads: 3986
mobile: false
number: 917
stars: 20
title: Linked Data Helper
type: plugin
updated: '2023-04-23T17:17:22'
url: https://github.com/kometenstaub/linked-data-helper
version: 1.0.0
---

%% README_START %%

# Linked Data Helper

> [!important]
> 
> This plugin has been updated to work with the new bulk exports from the Library of Congress. 
> 
> This update also includes some fixes.

[![Test Linked Data Helper](https://github.com/kometenstaub/linked-data-helper/actions/workflows/test.yml/badge.svg)](https://github.com/kometenstaub/linked-data-helper/actions/workflows/test.yml)
[![Build obsidian plugin](https://github.com/kometenstaub/linked-data-helper/actions/workflows/releases.yml/badge.svg)](https://github.com/kometenstaub/linked-data-helper/actions/workflows/releases.yml)

This plugin is needed for generating the data that the [Linked Data Vocabularies](https://github.com/kometenstaub/obsidian-linked-data-vocabularies) Obsidian plugin relies on.

The settings have a step-by-step guide for each implemented dataset. (Currently, LCSH is supported, but there are plans to extend support to other linked data.)

By default, if possible, the generated files will be stored in the attachments folder, in the `linked-data-vocabularies` subfolder. If this is not possible, the settings will tell you.

In that case, you will have to input another path. You can also input an alternative output path, if you so wish.

After the conversion is done, this plugin can be disabled until you want to update the data or add another dataset.

## Credits

This plugin uses the 'split2' npm package (https://www.npmjs.com/package/split2). It is licensed under the 'ISC License'. The license can be found [here](https://github.com/kometenstaub/linked-data-helper/blob/main/esbuild.js).


%% README_END %%