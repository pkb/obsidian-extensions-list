---
aliases:
- Key Sequence Shortcut
author:
- '[[authors/anselmwang|Yu Wang]]'
categories: []
description: ' Execute obsidian commands with short key sequences. For example, ''tp''
  for ''Toggle Preview'' and ''tb'' for ''Toggle Sidebar''. Easier to remember.'
downloads: 4667
mobile: true
number: 439
stars: 43
title: Key Sequence Shortcut
type: plugin
updated: '2022-03-15T08:37:14'
url: https://github.com/anselmwang/obsidian-key-sequence-shortcut
version: 2.0.2
---

%% README_START %%

# Key Sequence Shortcut

Key Sequence Shortcut is an obsidian plugin, allow binding key sequences to an obsidian command. For example
- If we assume "t" stands for "toggle", we can bind "tl" to "Toggle Preview", "tb" to "Toggle Sidebar".  
- If we assume "x" stands for "text", we can bind "xl" to "Toggle Bulllet List", "xc" to "Toggle Check list status"

A key sequence is easier to memorize than typical key shortcut like "Ctrl-j".

# Install

Install by search "Key Sequence Shortcut" in Obsidian "Commnuity plugins" option.

# Usage

- Command "Open Key Sequence Menu" (bind to `Ctrl-m`). Type "xl" will execute `editor:toggle-bullet-list`, no need to type "Enter".
![](https://raw.githubusercontent.com/anselmwang/obsidian-key-sequence-shortcut/HEAD/attachments/2022-02-26-07-33-19.png)
- Configuration
  - The default configuration file is "kssrc.md" at workspace root folder. Can be customized.
    - Comment line: use double quote to start a comment line
    - Normal line: key-sequence&lt;TAB&gt;command-id&lt;TAB&gt;description. The last part "&lt;TAB&gt;description" is optional.
  - We can easily find command id by running command "Insert Command Id and Name" (bind to `Ctrl-*`)
  - `Key Sequence Shortcut` will run corresponding command as long at user input matches any configuration item, so "xh" will hide key sequences like "xha", "xhb". Please avoid to have one key sequence to be the prefix of other key sequences.
- Run command "Reload Key Sequence Shortcut Config File" to reload after configuration file change

Choosing TAB as the separator is a trade-off. I understand we can't easily enter a TAB in Obsidian, it will indent the line. However, the last column in config file is "description" which can easily contain characters like ";" or "|" or space. Considering this, I still choose TAB. To enter it, I simply type TAB in any other editors (e.g. Notepad on Windows platform) ans paste it into Obsidian.


# Configuration example

```
" p for project
pf	darlal-switcher-plus:switcher-plus:open	"Quick Switcher++: Open"

" x for text
xh	editor:set-heading
xl	editor:toggle-bullet-list
xc	editor:toggle-checklist-status
xq	editor:toggle-blockquote
xw	editor:insert-wikilink
xe	editor:insert-embed
xi	editor:indent-list
xu	editor:unindent-list

" xx for refactor
xxh	editor:rename-heading

" e for editor
em	obsidian-mark-and-select:set-mark
es	obsidian-mark-and-select:select-from-mark
"	following two commands only available on mobile
er	editor:redo
eu	editor:undo
```

# Compare with similar plugins

**Key sequence shortcut** 
- Type Ctrl-M to trigger, then support character sequence like "phw" as hotkey.
- Auto command suggestion to help memorize
- text based configuration

**Sequence hotkeys** , **Hotkeys chords**
- support arbitrary hotkey sequences, so you can use key sequence like "Alt-b Ctrl-a p h w" 
- No command suggestion
- UI based configuration

**Chorded hotkeys**
- Support character sequence as hotkey.
- Type faster than average to trigger. This triggering method sounds strange to me, I haven't use the plugin in my daily life, not sure how well it works.



# Acknowledgement

This plugin is inspired by Vim multi-key shortcut and VSpaceCode. Text editing will never been so much fun without such key sequence shortcut.

In the Obsidian world, I love vimrc-support plugin so much and I am using it literally everyday. It already support key sequence shortcut in editor VIM mode. Then why do I create `Key Sequence Shortcut` plugin? Because many situations there are no VIM mode, below are some pain points:
- Users who don't like VIM mode
- On Obsidian Mobile (I have too many buttons in Mobile toolbar!)
- On desktop
  - When I switch to Markdown preview mode, I lose the VIM editor mode and can't switch back with key sequence.



%% README_END %%