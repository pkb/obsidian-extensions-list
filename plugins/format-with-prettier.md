---
aliases:
- Format with Prettier
author:
- Alex Gavrusev
author_page: https://gavrusev.dev
categories: []
description: Format files in your vault using Prettier.
downloads: 1768
funding_page: https://ko-fi.com/gavrusev
mobile: true
number: 1439
title: Format with Prettier
type: plugin
updated: '2024-08-18T01:30:24'
url: https://github.com/alexgavrusev/obsidian-format-with-prettier
version: 0.6.0
---

%% README_START %%

# obsidian-format-with-prettier

Format files in your Obsidian vault using [Prettier](https://prettier.io)

## Installation

Unzip the `format-with-prettier.zip` from the [latest release](https://github.com/alexgavrusev/obsidian-format-with-prettier/releases/latest) into the `.obsidian/plugins` folder of your vault.

Note that you might have to reopen your vault for the plugin to show up under "Installed plugins"

## Usage

Format on save is enabled by default, and can be changed under plugin settings

Additionally, a "Format current file" [command](https://help.obsidian.md/Plugins/Command+palette) is available

## Customization

The plugin fill look for a `prettierrc.json` (note the lack of `.` at the start of the file) in the root folder of your vault. In it, you can [configure Prettier](https://prettier.io/docs/en/configuration) as you normally would

## Formatting the entire vault at once

Use the Prettier [CLI](https://prettier.io/docs/en/cli):

```console
$ cd YOUR_VAULT_FOLDER
$ echo '**/.obsidian' > .prettierignore
$ npx prettier . --write --config prettierrc.json
```

## License

MIT © Aliaksandr Haurusiou.


%% README_END %%