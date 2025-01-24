---
aliases:
- Ollama
author:
- '[[authors/hinterdupfinger|hinterdupfinger]]'
categories:
- '[[categories/AI assistance|AI assistance]]'
description: This is a plugin for Obsidian that enables the usage of Ollama within
  your notes.
downloads: 15648
mobile: false
number: 1203
stars: 876
title: Ollama
type: plugin
updated: '2023-09-19T07:21:01'
url: https://github.com/hinterdupfinger/obsidian-ollama
version: 0.0.1
---

%% README_START %%

# 🦙 Obsidian Ollama

This is a plugin for [Obsidian](https://obsidian.md) that allows you to use [Ollama](https://ollama.ai) within your notes.
There are different pre configured promts:

    - Summarize selection
    - Explain selection
    - Expand selection
    - Rewrite selection (formal)
    - Rewrite selection (casual)
    - Rewrite selection (active voice)
    - Rewrite selection (bullet points)
    - Caption selection

But you can also configure your own prompts, specify their model and temperature. The plugin always passes the prompt and either selected text or full note to Ollama and inserts the result into your note at the cursor position.

This requires a local installation of [Ollama](https://ollama.ai) which can currently be installed as a [MacOS app](https://github.com/jmorganca/ollama#download). By default the plugin will connect to `http://localhost:11434` - the port of the MacOS app.


%% README_END %%