---
aliases:
- Update Time Updater
author:
- '[[authors/muratagawa|MURATAGAWA Kei]]'
categories: []
description: Update the 'update time' element when saving or manually.
downloads: 580
mobile: true
number: 1584
stars: 4
title: Update Time Updater
type: plugin
updated: '2024-04-10T06:31:02'
url: https://github.com/muratagawa/update-time-updater
version: 0.1.4
---

%% README_START %%

# Update Time Updater

Manually update the modified date field in frontmatter.

## How to use

- From the button on the left ribbon
- Commands palette of `Update modified datetime manually`

## Settings

- `Target key`: which key to update
- `Datetime format`: [Moments.js](https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/) format

## Development

```sh
cd <temporary_vault_path>/.obsidian/plugins
git clone git@github.com:muratagawa/update-time-updater.git
cd update-time-updater

npm i
nom run dev
```

## License

This plugin is licensed under the MIT License.

%% README_END %%