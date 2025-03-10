---
aliases:
- Emacs text editor
author:
- '[[authors/Klojer|Klojer]]'
categories: []
description: Partial emulation of Emacs text editor for Obisidian
downloads: 4845
mobile: true
number: 1069
stars: 21
title: Emacs text editor
type: plugin
updated: '2024-07-13T19:15:11'
url: https://github.com/Klojer/obsidian-emacs-text-editor
version: 0.5.0
---

%% README_START %%

# Emacs Text Editor for Obsidian

This plugin adds a few commands to use Obsidian with Emacs-like keybindings.

## Purpose of the project

What is this plugin:
1. Basic imitation of Emacs commands to make text editing for Emacs users more smooth

What **isn't** this plugin:
1. Implementation of complete GNU Emacs functionality and integration elisp into Obsidian
2. Exact reproducing behavior of GNU Emacs commands

## How to install

Run:

```
export OBSIDIAN_PLUGINS_DIR=/path/to/obsidian/vault/.obsidian/plugins
make install
```

## How to uninstall

```
export OBSIDIAN_PLUGINS_DIR=/path/to/obsidian/vault/.obsidian/plugins
make uninstall
```


## Example of keybindings configuration

| Hotkey                  | Obisdian command           | Description               |
| ----------------------- | -------------------------- | ------------------------- |
| Ctrl + b                | Backward char              | Move cursor one character backward |
| Alt + Backspace         | Backward kill word         | Delete one word backward |
| Alt + Shift + ]         | Backward paragraph         | Move cursor one paragraph backward |
| Alt + b                 | Backward word              | Move cursor one word backward |
| Alt + Shift + ,         | Beginning of buffer        | Move to the beginning of a buffer |
| Ctrl + d                | Delete char                | Delete the following char |
| Alt + Shift + .         | End of buffer              | Move to the end of a buffer |
| Ctrl + f                | Forward char               | Move cursor one character forward |
| Alt + Shift + [         | Forward paragraph          | Move cursor one paragraph forward |
| Alt + f                 | Forward word               | Move cursor one word forward |
| Ctrl + g                | Keyboard quit              | Signal a ‘quit’ condition (works only for selection) |
| Ctrl + k                | Kill line                  | Kill the rest of the current line |
| Ctrl + w                | Kill region                | Cut a selected region  |
| Alt + w                 | Kill ring save             | Copy a selected region    |
| Alt + d                 | Kill word                  | Delete chars until end of a word |
| Ctrl + a                | Move beginning of line     | Move cursor to beginning of line |
| Ctrl + e                | Move end of line           | Move cursor to end of line |
| Ctrl + n                | Next line                  | Move cursor to next line |
| Ctrl + p                | Previous line              | Move cursor to previous line |
| Ctrl + l                | Recenter                   | Scroll window to center current line |
| Ctrl + Shift + -        | Redo                       | Redo |
| Ctrl + Space            | Set mark command           | Mark the beginning of a selection |
| Ctrl + /                | Undo                       | Undo |
| Ctrl + y                | Yank                       | Paste (Yank) a cut or copied a region |
| Alt + x                 | Open command palette       | Open command palette |

## Known issues

1. Move to beginning of line command (Ctrl + a) conflicts with select all action. Solution: Use Home/End + Shift.
2. Conflicts with existing hotkeys. Solution: use additional plugin for custom bindings, for example https://github.com/tgrosinger/leader-hotkeys-obsidian
3. Absent support of "kill-ring". Solution: use plugin https://github.com/Karakaz/obsidian-paste-from-history with `Alt + y` keybinding
4. Absent support of scroll-up/scroll-down commands. [Solution is not found](https://github.com/Klojer/obsidian-emacs-text-editor/issues/1)
5. Absent support of holding shortcuts. [Solution is not found](https://github.com/Klojer/obsidian-emacs-text-editor/issues/2)



%% README_END %%