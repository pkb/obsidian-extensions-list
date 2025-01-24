---
aliases:
- Inbox Organiser
author:
- '[[authors/jamiefdhurst|Jamie Hurst]]'
categories: []
description: Capture any new notes into an inbox and periodically prompt to organise
  these into other folders within the vault.
downloads: 221
mobile: true
number: 2104
stars: 3
title: Inbox Organiser
type: plugin
updated: '2025-01-08T02:32:46'
url: https://github.com/jamiefdhurst/obsidian-inbox-organiser
version: 0.0.3
---

%% README_START %%

# Inbox Organiser for Obsidian

Capture any new notes into an inbox and periodically prompt to organise these into other folders within the vault.

Designed to work with [Obsidian](https://obsidian.md).

## Features

- Collects all new and unorganised notes saved into the root of your vault into an inbox folder
- Provides an interface to organise your inbox and move your unorganised files into other folders within your vault easily
- Periodically reminds you to clear your inbox

![Organise inbox modal showing files and folder dropdowns](https://raw.githubusercontent.com/jamiefdhurst/obsidian-inbox-organiser/HEAD//docs/modal.png)

## Settings

![Settings screen showing inbox and period options](https://raw.githubusercontent.com/jamiefdhurst/obsidian-inbox-organiser/HEAD//docs/settings.png)

You can configure whether to automatically move any newly created files in the root folder into the inbox, and whether to remind you through a notice periodically to organise your inbox.

## Development

This plugin has been developed using Typescript with the Obsidian API and Jest for testing.

Once you've cloned the repository, to speed up plugin development it is recommended to symlink the location of the plugin directly into your local Obsidian:

```bash
ln -s obsidian-inbox-organiser ~/.obsidian/plugins/
```

You can then run the plugin build automatically to pick up any changes:

```bash
npm run dev
```

To test the plugin using Jest, you can run it with or without coverage:

```bash
npm run test
npm run coverage
```

When submitting a PR, the plugin will be automatically tested, and when merged into main this will be built and released using GitHub Actions.


%% README_END %%