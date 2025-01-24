---
aliases:
- Better Canvas Lock
author:
- '[[authors/Mara-Li|Mara-Li]]'
categories: []
description: Enhance the read-only mode in canvas with fully lock the scroll, zoom,
  drag-and-drop in read-only!
downloads: 3455
mobile: true
number: 1279
stars: 15
title: Better Canvas Lock
type: plugin
updated: '2024-05-26T15:13:41'
url: https://github.com/Mara-Li/obsidian-better-canvas-lock
version: 0.0.15
---

%% README_START %%

# Better canvas lock

Experimental plugin for Obsidian, that lock the "view" of canvas. You can disable:
- Zoom
- Selection of canvas 
- Drag and drop of canvas
- Scroll

It will monkey-patch the lock function using `monkey-around`, so you just need to enable the plugin to make it work. Also, canvas are detected on the `active-leaf-change`. 

You can also enable/disable the logs in the console. Beware, because the logs spam the console, and you will see redondant error.

> [!NOTE]
> For some "usefulness", the dragging / scrolling is enabled when a canvas card is focused, so you can move freely the canvas and adjust the view (SHIFT+2) on a specific card if you need. 
> To disable again the dragging, just click away (or escape) from the canvas card.


https://github.com/mara-li/obsidian-better-canvas-lock/assets/30244939/c5359f72-2234-4959-a094-87c7c51a3372



## 📥 Installation

- [x] From Obsidian's community plugins
- [x] Using BRAT with `https://github.com/mara-li/obsidian-better-canvas-lock`
- [x] From the release page:
 - Download the latest release
 - Unzip `better-canvas-lock.zip` in `.obsidian/plugins/` path
 - In Obsidian settings, reload the plugin
 - Enable the plugin

## 🤖 Developing

To make changes to this plugin, first ensure you have the dependencies installed.

```
pnpm install
```

To start building the plugin with what mode enabled run the following command:

```
pnpm run dev
```

> **Note**
> If you haven't already installed the hot-reload-plugin you'll be prompted to. You need to enable that plugin in your obsidian vault before hot-reloading will start. You might need to refresh your plugin list for it to show up.
> To start a release build run the following command:

```
pnpm run build
```

> **Note**
> You can use the `.env` file with adding the key `VAULT_DEV` to specify the path to your Obsidian (development) vault. This will allow you to test your plugin without specify each times the path to the vault.

### 📤 Export

You can use the `pnpm run export` command to export your plugin to your Obsidian Main Vault. To do that, you need the `.env` file with the following content:

```json
VAULT="path/to/your/obsidian/vault"
VAULT_DEV="path/to/your/dev/vault"
```

### 🎼 Languages

- [x] English
- [x] French

To add a translation:
- Fork the repository
- Add the translation in the `src/i18n/locales` folder with the name of the language (ex: `fr.json`)
- Copy the content of the [`en.json`](./src/i18n/locales/en.json) file in the new file
- Translate the content
- Create a pull request


%% README_END %%