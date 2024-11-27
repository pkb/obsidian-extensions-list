---
aliases:
- Share via Notepad Tab
author:
- Iulian Onofrei
author_page: https://iulianonofrei.com
categories:
- '[[categories/Sharing and publishing|Sharing and publishing]]'
description: Share notes via Notepad Tab (https://notepadtab.com).
downloads: 107
funding_page: https://paypal.me/IulianOnofrei
mobile: true
number: 1822
title: Share via Notepad Tab
type: plugin
updated: '2024-07-27T00:09:20'
url: https://github.com/revolter/obsidian-share-via-notepad-tab-plugin
version: 1.0.2
---

%% README_START %%

# Obsidian Share via Notepad Tab Plugin

![Obsidian plugin downloads badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fscambier.xyz%2Fobsidian-endpoints%2Fshare-via-notepad-tab.json)

This is a plugin to share Obsidian (https://obsidian.md) notes via Notepad Tab (https://notepadtab.com).

## Usage

1. Create or select a note.
2. Open the `Command palette` (https://help.obsidian.md/Plugins/Command+palette).
3. Search for the `Share via Notepad Tab: Current note` command.
4. Press <kbd>Enter</kbd>.

## Contributing

### Setup

1. Go to [settings/actions](../../settings/actions).
2. Enable `Read and write permissions` under `Workflow permissions`.
3. Click `Save`.

### Installation

1. Install `Node.js` by following the instructions from
   https://docs.npmjs.com/downloading-and-installing-node-js-and-npm.
2. Install the `Node.js` dependencies by running
   ```sh
   npm install
   ```

### Usage

```sh
npm run dev
```

### Releasing

1. Run `npm version <major/minor/patch>`.
2. Optionally add release notes to the created GitHub draft release.
3. Publish the GitHub draft release.

### Submitting

1. Follow the [official instructions](https://docs.obsidian.md/Plugins/Releasing/Submit+your+plugin#Step+3+Submit+your+plugin+for+review).

## License

[MIT](LICENSE)


%% README_END %%