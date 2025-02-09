---
aliases:
- Air Quotes
author:
- '[[authors/alangrainger|Alan Grainger]]'
categories: []
description: Search and insert quotes from a source text as you type. This is great
  for reading a physical book or eReader while taking notes on a separate laptop or
  phone. The plugin can also convert ePub files to Markdown notes.
downloads: 4832
mobile: true
number: 1007
stars: 48
title: Air Quotes
type: plugin
updated: '2023-10-29T22:15:57'
url: https://github.com/alangrainger/obsidian-air-quotes
version: 1.0.7
---

%% README_START %%

# Air Quotes plugin

<a href="https://ko-fi.com/alan_" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy me a coffee" style="width:190px"></a>

[📝💬 Obsidian forum link for this plugin](https://forum.obsidian.md/t/68421)

I love reading paper books or on eReader devices while taking notes on my laptop or phone, but it massively interrupts my flow to capture quotes from the book.

The existing solutions are essentially either:

- Re-type the entire quote yourself, or 
- Highlight/capture, and sync with a tool like Readwise.

**Air Quotes** for Obsidian is a method for near-instant inserting of direct quotes from a source text.

Here's a demo:

[![](https://raw.githubusercontent.com/alangrainger/obsidian-air-quotes/HEAD/img/video-demo.jpg)](https://www.youtube.com/watch?v=PhP02zbiVS4)

https://www.youtube.com/watch?v=PhP02zbiVS4

## How it works

#### Step 1

You first need a Markdown format version of the book in your vault. The plugin can handle creating this for you. This text is the source for the quotes.

- If the source text is already in a note (for example, people who have the Bible or the Quran as a note) then you're good to go.
- If you have an ePub copy of the book, the plugin can convert this straight into an Obsidian note for you. Use the command `Import ePub file`.
- If you have an ebook in another format, you can usually get [Calibre](https://calibre-ebook.com/) to convert it for you. 
- If you're reading a print book, then you'll need to source an ebook copy. Your public library might have Libby or Overdrive available, which are good ebook sources.

#### Step 2

Link the source text note to your current note by adding a `source_text` property, and adding the link to your source text. You can customise the name of this property in the Settings if you like.  You can also use a Dataview property instead if you prefer.

#### Step 3

That's it! Now you can run the "Insert quote" command.

## FAQs

### Does this work on mobile?

Absolutely, it works great!

### Why not use the built-in block link `#^` which already has its own search feature?

1. I don't like the fuzzy search. If the words you're typing are very common in the book,
you'll receive a lot of incorrect results, and you might not even find the correct result.
2. I like the function of increasing/decreasing the size of the quote with the arrow keys.

### Will you add images or other features to ePub import

EPub import is considered feature-complete for the purpose of importing an ePub file to use as the source text for quotes.

If you require additional features for your ePub import, you can use one of the many existing fully-featured ePub to Markdown tools such as [Pandoc](https://pandoc.org/) or [Calibre](https://calibre-ebook.com/).

If someone wants to code a feature up and submit a Pull Request I'll have a look at it, but I have no current plans to add anything additional myself to the ePub import.


%% README_END %%