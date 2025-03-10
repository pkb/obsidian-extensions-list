---
aliases:
- Better Recall
author:
- '[[authors/FlorianWoelki|Florian Woelki]]'
categories:
- '[[categories/Spaced repetition|Spaced repetition]]'
description: Add anki-like spaced repetition and recall to your vault.
downloads: 927
mobile: true
number: 1809
stars: 18
title: Better Recall
type: plugin
updated: '2024-07-23T12:50:57'
url: https://github.com/FlorianWoelki/obsidian-better-recall
version: 0.0.1
---

%% README_START %%

# Obsidian Better Recall

![Preview Image](https://raw.githubusercontent.com/FlorianWoelki/obsidian-better-recall/HEAD/docs/preview-image.png)


## What is it?

This plugin allows you to have an Anki-like feeling in Obsidian.
It allows you to create decks and add cards, giving you the ultimate spaced repetition experience.

The plugin integrates the following spaced-repetition algorithms:

- [Anki algorithm](https://faqs.ankiweb.net/what-spaced-repetition-algorithm.html)


## How to use it

Although everything with the plugin should be self-explanatory, here's a quick rundown of how to get started.

You can view your decks by clicking this sidebar icon:

![Preview Image](https://raw.githubusercontent.com/FlorianWoelki/obsidian-better-recall/HEAD/docs/decks.png)

You can also access your created decks by executing the command `Better Recall: Recall`.

With that, you can create decks and cards and start your spaced-repetition journey.

## Reviewing cards

By clicking on any deck you have created, you can start your spaced-repetition session (obviously you need cards in the deck).
Based on the specific parameters, the different timings and multiplier will be adjusted accordingly.

![Preview Image](https://raw.githubusercontent.com/FlorianWoelki/obsidian-better-recall/HEAD/docs/recall.png)


## Use the plugin before the release?

I am still actively developing this plugin, but I have not yet submitted it to Obsidian.
However, you can still use the plugin using **BRAT**:

1. Open Obsidian and go to the community plugins tab.
2. Search for **BRAT** and install it.
3. Click on the **Add Beta Plugin** button.
4. Paste the plugin link: https://github.com/FlorianWoelki/obsidian-better-recall
5. Click **Add Plugin**.

*Disclaimer: Things can break while in active development. Feel free to report any issues or bugs.*


## Development

To customize this project for your needs, you can clone it and then install all dependencies:
```sh
$ git clone https://github.com/FlorianWoelki/obsidian-better-recall
$ cd obsidian-better-recall
$ yarn
```

After the installation, you need to create a `env.mjs` file in the root directory. Fill the file with the following content:

```js
export const obsidianExportPath =
  '<path-to-obsidian-vault>/.obsidian/plugins/obsidian-better-recall';
```

Afterward, you can start the rollup dev server by using:

```sh
$ pnpm dev
```

This command will automatically build the necessary files for testing and developing every change. Furthermore, it copies all the essential files to the specified plugin directory.

Finally, you can customize the plugin and add it to your plugins.


%% README_END %%