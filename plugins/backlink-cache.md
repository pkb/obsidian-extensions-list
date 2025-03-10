---
aliases:
- Backlink Cache
author:
- '[[authors/mnaoumov|mnaoumov]]'
categories: []
description: Stores backlink cache to speed up `app.metadataCache.getBacklinksForFile`
downloads: 7111
mobile: true
number: 1244
stars: 25
title: Backlink Cache
type: plugin
updated: '2025-01-21T23:38:35'
url: https://github.com/mnaoumov/obsidian-backlink-cache
version: 2.2.11
---

%% README_START %%

# Backlink Cache

This is a plugin for [Obsidian](https://obsidian.md/) that maintains backlink cache to speed up undocumented `app.metadataCache.getBacklinksForFile` function.

It's mostly useful for users with the large vaults. On smaller vaults the difference might be unnoticeable.

It speeds up `Backlinks Pane` performance and plugins that deal with the backlinks.

This plugin the most likely will be useful for other plugin developers that deal with the backlinks.

Its idea came from the [forum](https://forum.obsidian.md/t/store-backlinks-in-metadatacache/67000).

Also the plugin includes canvas into the backlinks for the referenced files. This includes the `app.metadataCache.getBacklinksForFile` function and the `Backlinks Pane`.

## Usage

### Fast version

The provided version is faster than the built-in version. Also the overload to accept `path` was added.

```js
const backlinks1 = app.metadataCache.getBacklinksForFile(file);
const backlinks2 = app.metadataCache.getBacklinksForFile(path);
```

### Safe version

If you want to ensure the all recent file changes are processed and the backlinks are 100% accurate.

```js
const backlinks1 = await app.metadataCache.getBacklinksForFile.safe(file);
const backlinks2 = await app.metadataCache.getBacklinksForFile.safe(path);
```

### Original version

You can access the original built-in version:

```js
const backlinks = app.metadataCache.getBacklinksForFile.originalFn(file);
```

### TypeScript typings

If you want to use the updated functions from your plugin, you can copy [types.d.ts](./types.d.ts) into your code.

## Installation

- `Backlink Cache` is available in [the official Community Plugins repository](https://obsidian.md/plugins?id=backlink-cache).
- Beta releases can be installed through [BRAT](https://obsidian.md/plugins?id=obsidian42-brat).

## Debugging

By default, debug messages for this plugin are hidden.

To show them, run the following command:

```js
window.DEBUG.enable('backlink-cache');
```

For more details, refer to the [documentation](https://github.com/mnaoumov/obsidian-dev-utils?tab=readme-ov-file#debugging).

## Support

<a href="https://www.buymeacoffee.com/mnaoumov" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;"></a>

## License

© [Michael Naumov](https://github.com/mnaoumov/)


%% README_END %%