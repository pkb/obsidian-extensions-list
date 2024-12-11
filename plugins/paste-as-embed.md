---
aliases:
- Paste as Embed
author:
- '[[mlprt|Matt Laporte]]'
categories: []
description: Paste text into a separate note, and embed the note.
downloads: 143
mobile: false
number: 1808
stars: 3
title: Paste as Embed
type: plugin
updated: '2024-07-23T00:56:21'
url: https://github.com/mlprt/obsidian-paste-as-embed
version: 0.1.4
---

%% README_START %%

# Paste as Embed

When pasting text into a note, check the text against regexp patterns. When it matches, create a new note containing the text, and embed that note into the active note.

## How to use

Define rules in the plugin settings pane, that determine when and how to create and embed a note, depending on the text being pasted. 

### Example usage

Here are the settings I use for [embedding Plotly figures](#motivation) made in Python, using the output from `fig.to_json()`:

![](https://raw.githubusercontent.com/mlprt/obsidian-paste-as-embed/HEAD/images/plotly-example.png)

And here's an example of it in action. 

![](https://raw.githubusercontent.com/mlprt/obsidian-paste-as-embed/HEAD/images/plotly-example.gif)

Note: 

- I'm using [this version](https://forum.obsidian.md/t/meta-post-common-css-hacks/1978/668) of the `clean-embeds` [CSS snippet](https://forum.obsidian.md/t/meta-post-common-css-hacks/1978/394), so the embed is seamless with the rest of the note.
- Usually you wouldn't need the JSON to already be in a code block, but I put it there so you could see it before cutting it to the clipboard.

## How it works

When text is pasted from the clipboard, it is checked against a list of user-defined rules:

- Each rule is associated with a regular expression string. 
- The plugin engages the first rule whose regexp tests `true` against the pasted text. 

When a rule is engaged:

- the pasted text is inserted into a template, if one is supplied for the rule;
- a new note is created, with its name and folder determined according to the settings defined for the rule;
- the contents of the new note are the (potentially templated) pasted text;
- the new note is embedded at the current position in the active note.

If no rule is engaged, pasting proceeds as it normally would.

Note the following limitations of this early version of the plugin:

- The first matching rule in the list is the only one executed.
- An empty regexp string always matches; so a rule with an empty regexp string will always be executed, if no preceding rules matched the pasted text. 
- No rules that follow a rule with an empty regexp string will ever be executed.
- If a rule is renamed, it is moved to the end of the list and becomes last in precedence.

## Motivation

I like using the [obsidian-plotly](https://github.com/Dmytro-Shulha/obsidian-plotly) plugin to render interactive figures in my notes. The Plotly figure is represented as JSON and placed in a code block, which is replaced with the rendered figure in the editor.

However, when editing the note or interacting with the plot, the code block sometimes collapses back into its unrendered, editable form. This sometimes causes the editor to lag to the point of unusability. 

Thankfully:

- If the code block is placed in a standalone note which is then embedded, it renders well as an embed and does not collapse back into editable JSON.
- We usually do not need to edit the JSON directly, and if we do, it is probably easier to do so when it's in a separate note and isn't expanding/collapsing thousands of characters inside an existing view.
- Keeping JSON for a figure in its own note allows us to treat text-based figures like other (e.g. image) attachments.

However, it's effortful to manually create and embed such notes. Acknowledging that similar use cases may benefit from automation, and wanting to try writing an Obsidian plugin for the first time, I therefore wrote this one.

## Acknowledgments 

Parts of this plugin are directly derived (see source comments) from parts of the following plugins:

- [obsidian-admonition](https://github.com/javalent/admonitions) 
- [advanced-paste](https://github.com/kxxt/obsidian-advanced-paste) 

Additionally, I took inspiration from [obsidian-custom-attachment-location](https://github.com/RainCat1998/obsidian-custom-attachment-location) concerning the customization of note and folder naming.

## TODO

- [ ] Allow individual rules to be toggled on and off
- [ ] Control precedence/order of rules
- [ ] Allow rules to be either 1) regexp-based, or 2) associated with keyboard shortcuts
- [ ] Toggle CSS styling (e.g. clean-embeds)

### Mobile support

- [ ] Replace Node.js `path` 

%% README_END %%