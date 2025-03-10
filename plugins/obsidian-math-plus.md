---
aliases:
- Math+
author:
- '[[authors/ocapraro|Oscar Capraro]]'
categories: []
description: This is an Obsidian plugin for taking math notes using Excalidraw.
downloads: 34619
mobile: true
number: 500
stars: 93
title: Math+
type: plugin
updated: '2024-01-27T22:23:22'
url: https://github.com/ocapraro/obsidian-math-plus
version: 0.7.0
---

%% README_START %%

# Obsidian Math+
Obsidian Math+ is a plugin for taking math notes quickly and efficiently.

[<img style="float:left" src="https://user-images.githubusercontent.com/14358394/115450238-f39e8100-a21b-11eb-89d0-fa4b82cdbce8.png" width="200">](https://ko-fi.com/ocapraro)
<br><br>
## Usage
Run the `Insert math block` command, either using the command pallet or `cmd + M`. This will create a math block for you to start taking notes in, you can write these notes using LaTeX, or just write the equations out intuitively, and they will be parsed to the best of this plugin's ability.

![rendered equation](https://raw.githubusercontent.com/ocapraro/obsidian-math-plus/0.2.4/assets/editor-to-rendered.png)

Now that your notes have been rendered, you can go into draw mode by clicking the pen icon in the top right of the block.
This opens up an [Excalidraw](https://github.com/excalidraw/excalidraw) instance over the math block so you can easily add freeform annotations.

> **Note:** This only works in Live Preview Mode

![excalidraw](https://raw.githubusercontent.com/ocapraro/obsidian-math-plus/0.2.4/assets/math-annotated.png)

To save your drawing, press the checkmark in the upper right corner, and your drawing will be rendered as an SVG.

![excalidraw svg](https://raw.githubusercontent.com/ocapraro/obsidian-math-plus/0.2.4/assets/math-annotated-svg.png)

## Settings
**Save Data Path**

This setting allows you to change the location of where your drawings and drawing data should be saved.

![path settings](https://raw.githubusercontent.com/ocapraro/obsidian-math-plus/master/assets/path-settings.png)

**Shortcuts**

The Shortcuts setting lets you input custom commands to be translated into LaTeX when input into the math blocks.

```
{
  "op":"COMMAND",
  "format":"LATEX"
}
```

You can also pass parameters to the shortcuts, using `%s1%` or `%s2%` to denote the character or group directly before or after the shortcut.

```
{
  "op":"/",
  "format":"\frac{%s1%}{%s2%}"
}
```

This shortcut makes it so whenever you type `/` it will get the character or group directly before it, and put it into fraction format. ie. `3/17` would turn into `\frac{3}{17}` and `{x-5a}/2` would turn into `\frac{x-5a}{2}`. All shortcuts must remain in proper JSON format.

![math block size settings](https://raw.githubusercontent.com/ocapraro/obsidian-math-plus/master/assets/shortcuts-settings.png)

Use the update button to apply your shortcut changes.

**Colors**

Here you can change the three default colors you can pick from while taking notes, or turn on the color picker for customization on the fly.

![colors settings](https://raw.githubusercontent.com/ocapraro/obsidian-math-plus/0.2.4/assets/colors-settings.png)

**Math Block Size**

This allows you to change the size of the math blocks.

![math block size settings](https://raw.githubusercontent.com/ocapraro/obsidian-math-plus/master/assets/math-block-size-settings.png)

**Live Preview Settings**

This allows you to toggle live preview on and off.

![live preview settings](https://raw.githubusercontent.com/ocapraro/obsidian-math-plus/master/assets/live-preview-settings.png)

**Metadata Settings**

This allows you to toggle on and off some of the metadata stored in the code blocks.

![metadata settings](https://raw.githubusercontent.com/ocapraro/obsidian-math-plus/master/assets/metadata-settings.png)

**Excalidraw UI**

Excalidraw has a lot of drawing tools which you can toggle on or off here based on your needs.

![excalidraw ui settings](https://raw.githubusercontent.com/ocapraro/obsidian-math-plus/0.2.4/assets/excalidraw-ui-settings.png)

**Excalidraw Settings**

You can toggle grid mode on or off here.

![excalidraw settings](https://raw.githubusercontent.com/ocapraro/obsidian-math-plus/0.2.4/assets/excalidraw-settings-settings.png)


%% README_END %%