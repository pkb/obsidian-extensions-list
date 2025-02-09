---
aliases:
- Inline Admonitions
author:
- '[[authors/scottTomaszewski|Scott Tomaszewski (Xentis)]]'
categories: []
description: Inline callouts to make text pop.
downloads: 3945
mobile: false
number: 1460
stars: 21
title: Inline Admonitions
type: plugin
updated: '2024-10-03T04:15:00'
url: https://github.com/scottTomaszewski/obsidian-inline-admonitions
version: 1.4.6
---

%% README_START %%

# Inline Admonitions for Obsidian

This plugin will allow you to format inline codeblocks to better stand out on the page.  For example, you may want to 
have all inline codeblocks that start with "IMPORTANT" to have a red background like this. 

![img.png](https://raw.githubusercontent.com/scottTomaszewski/obsidian-inline-admonitions/HEAD/admonition.png)

[inlineAdmonition_1.2.0.webm](https://github.com/scottTomaszewski/obsidian-inline-admonitions/assets/5295276/2a781588-cba0-4665-98c2-16d896cd2abe)

## Usage

To add an Inline Admonition to your note, first [create a new Inline Admonition](#Creating a new Inline Admonition) of 
the desired [type](#types).

Then add an 
[inline codeblock](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Inline+code)
with the appropriate trigger text.  For example, a [Prefix Inline Admonition](#Prefix Type) with a prefix of `IMPORTANT` will 
trigger when an inline codeblock starts with "IMPORTANT", like this:

```
Normal text `IMPORTANT - dont forget the milk!` and some more normal text
```

## Creating a new Inline Admonition

Open the "Inline Admonition" settings and click "Create New Inline Admonition" at the top to bring up a Modal to 
configure a new Inline Admonition.

![admonition-modal.png](https://raw.githubusercontent.com/scottTomaszewski/obsidian-inline-admonitions/HEAD/admonition-modal.png)

- **Background Color** is the color of the Inline Admonition "bubble"
- **Color** is the text color
- **Type** defines how an Inline Admonition is triggered.  See the [types](#types) documentation for more details.

## Types

The Inline Admonition "Type" defines what triggers the codeblock to convert into an Inline Admonition.  Current supported
Types are:

- [Prefix Type](#prefix-type)
- [Suffix Type](#suffix-type)
- [Contains Type](#contains-type)

### Prefix Type

Prefix Inline Admonitions trigger when a codeblock starts with specific text.

**Settings**

- `Prefix` defines the text at the start of the codeblock to trigger the Inline Admonition.
- `Hide prefix text` - if enabled, the triggering prefix text will not show in the Inline Admonition.

### Suffix Type

Suffix Inline Admonitions trigger when a codeblock ends with specific text.

**Settings**

- `Suffix` defines the text at the end of the codeblock to trigger the Inline Admonition.
- `Hide suffix text` - if enabled, the triggering suffix text will not show in the Inline Admonition.

### Contains Type

Contains Inline Admonitions trigger when a codeblock contains specific text anywhere within it.

**Settings**

- `contains` defines the text within the codeblock to trigger the Inline Admonition.

## Notes

- The CSS of the Inline Admonitions rides on Obsidian's Tag css.  I'll clean this up in a future release.
- Saving settings will trigger a re-render of the markdown views. Its possible to avoid this and is planned for a future release
- Similar to Contexual Typography this plugin will give you some css classes that you can manually manipulate

## Future work

- Regex to trigger Inline Admonitions
- Additional admonitions styles (rounded corners, etc)
- More comprehensive CSS editing in the settings UI

### Known Issues

- Newly created inline admonitions might not render in Live Preview.  Reload the app as a workaround

## Development

See the [changelog](CHANGELOG.md) for changes 

### Build

- `npm i` to install deps
- `npm run dev` to build and watch

### Release

Upload the files `manifest.json`, `main.js`, `styles.css` as binary attachments


%% README_END %%