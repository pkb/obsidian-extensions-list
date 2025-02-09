---
aliases:
- BookFusion
author:
- '[[authors/BookFusion|BookFusion]]'
categories:
- '[[categories/Import|Import]]'
- '[[categories/Annotations and highlights|Annotations and highlights]]'
description: Import your BookFusion highlights & annotations into your vault.
downloads: 2034
mobile: true
number: 1489
stars: 19
title: BookFusion
type: plugin
updated: '2024-03-18T18:28:59'
url: https://github.com/BookFusion/obsidian-plugin
version: 1.0.4
---

%% README_START %%

# BookFusion Obsidian Plugin

## Overview

Elevate your Obsidian workflow with the [BookFusion](https://www.bookfusion.com/) plugin, the premier solution for seamlessly importing highlights (including area/image and text), notes, reviews, and annotations into your Obsidian vault. BookFusion is the best way to organize, read, share and derive value from your eBooks (PDFs, EPUBS, CBZ/CBR, MOBI/AZW & other formats) & articles whether you are using it to learn, for work or for pleasure. BookFusion is a seperate and external service from Obsidian.

Discover deeper understanding and insights from your consumed content with the most versatile and powerful plugin available for Obsidian. Start transforming your reading into actionable knowledge today.

https://github.com/BookFusion/obsidian-plugin/assets/36079/3390cbf2-aaf5-4003-b8fc-cd39131119a8

## Benefits & Features

- **Support for multiple formats**: Easily sync your highlights, notes and annotations from PDFs, EPUBs, MOBIs, CBZ/CBR & other formats directly into your Obsidian vault, with upcoming support for articles in 2024.
- **Atomic highlights/annotations support**: Leverage the full power of Obsidian by using atomic highlights and annotations in your vault. Distill complex ideas into focused insights for better retention. Organize and connect concepts effortlessly, crafting a personalized learning experience that sparks creativity and understanding.
- **Multiple vault support**: Most readers are multifaceted and so BookFusion provides an easy way to sync different content & templates to different vaults. This provides a structured and clutter-free reading environment, ensuring that work-related documents, leisure reads, and research materials are neatly organized and easily retrievable, enhancing your productivity.
- **Extremely customizable**: With the power of the Liquid Templating Language at your fingertips, you have ultimate control to customize everything - from your highlights and notes to filenames and frontmatter. Tailor every aspect of your exported content to perfectly match your personal or professional needs.
- **Powerful update policies**: Say goodbye to Append only workflows and have your highlights, notes and annotations synced seamlessly into their right position without overwriting notes you make in the same markdown file using any one of our update policies below:
    - **Magic**: New notes/highlights are inserted based on their natural order and modified highlights updated. Useful for those that want to make edits to the synced markdown that want those retained and might also at a later date add/update notes that were made inside BookFusion.
    - **Smart Insert**: New notes/highlights are inserted based on their natural order without replacing any existing content. This is useful for those that tend to make changes to previously synced highlights in the markdown and do not want them overwritten but would like for new highlights to be inserted in the correct place.
    - **Append**: Updates get added to the end of the file.
    - **Replace**: Overwrites file with new content.
- **Automatic syncing**: Sync your highlights manually or configure it to sync at 30 mins, 1 hr, 4 hr, 12 hr or 24 hr intervals. This ensures your vault is consistently up-to-date with minimal effort.

## Installation

BookFusion is available on the official [Obsidian Community Plugins repository](https://obsidian.md/plugins?search=BookFusion). Please see [Installing the BookFusion Obsidian plugin](https://support.bookfusion.com/hc/en-us/articles/22094164106637-Installing-the-BookFusion-Obsidian-plugin) tutorial for detailed installation instructions.

Beta releases can be installed through [BRAT](https://github.com/TfTHacker/obsidian42-brat).

## Tutorials 

We created a few user friendly guides to help you get started

- [Installing the BookFusion Obsidian plugin](https://support.bookfusion.com/hc/en-us/articles/22094164106637-Installing-the-BookFusion-Obsidian-plugin)
- [Customize your exports to Obsidian](https://support.bookfusion.com/hc/en-us/articles/22094640028301-Customize-your-exports-to-Obsidian)
- [Setting your desired update policy. Update, Append, Magic or Smart Insert!](https://support.bookfusion.com/hc/en-us/articles/24017231501965-Setting-your-desired-update-policy-Update-Append-Magic-or-Smart-Insert)
- [Selecting content to sync to Obsidian](https://support.bookfusion.com/hc/en-us/articles/22095066373901-Selecting-content-to-sync-to-Obsidian)
- [Syncing your highlights & notes to Obsidian](https://support.bookfusion.com/hc/en-us/articles/22095974337677-Syncing-your-highlights-notes-to-Obsidian)
- [Enabling and using atomic highlights & annotations](https://support.bookfusion.com/hc/en-us/articles/24380598379533-Enabling-and-using-atomic-highlights-annotations)
- [Customizing, connecting & syncing to multiple vaults in Obsidian](https://support.bookfusion.com/hc/en-us/articles/22096781295373-Customizing-connecting-syncing-to-multiple-vaults-in-Obsidian)
- [Syncing content that contain highlights only](https://support.bookfusion.com/hc/en-us/articles/24017068250253-Syncing-content-that-contain-highlights-only)
- [Clear cache & freshly sync your highlights & annotations](https://support.bookfusion.com/hc/en-us/articles/24380864369549-Clear-cache-freshly-sync-your-highlights-annotations)

You can find all our Obsidian tutorials [here](https://support.bookfusion.com/hc/en-us/sections/22092423782925-Obsidian).

## Tips

1. Check the documentation for the [Liquid templace language documentation](https://shopify.github.io/liquid/).

2. If you are customizing your filename and paths ensure that you use `| sanitize_filename` with each variable that you include in the path.

3. Ensure you always click Apply on the right after making any changes under the Templates & Customization section. You must click Apply for the changes to take effect.

4. Ensure you have sync enabled for your entire library or have selected a few books, tags, bookshelves or series if you see no highlights being synced.

5. You have full control to create a rich Frontmatter. See below for a subset of the data that can be included:

```
bookfusion.book_id: "{{ id }}"
bookfusion.synced_at: "{{ 'now' | date: '%FT%T%:z' }}"

{% if categories -%}
categories: {% for category in categories %}
{{ category| prepend: '  - ' }}
{%- endfor %}
{% endif -%}

{% if series -%}
series: {% for serie in series %}
{{ serie | prepend: '  - ' }}
{%- endfor %}
{% endif -%}

{% if authors -%}
authors: {% for author in authors %}
{{ author | append:']]"'| prepend:   '- "[[ ' }}
{%- endfor %}
{% endif -%}

{% if tags -%}
tags: {% for tag in tags %}
{{ tag | replace: ' ', '_' | prepend: ' - ' }}
{%- endfor %}
{% endif -%}

asset: {{ book_url }}
uploaded_date: {{ uploaded_date }}
progress: {{progress}}
```

## Support 

Please feel free to reach out to us at support@bookfusion.com if you encounted a bug or would like to provide us with feedback.

## Disclosures

- BookFusion is a paid service that provides a free tier. The Obsidian plugin can be used with our free account which is limited to 10 books. A paid account is required to better utilize the plugin.
- Network use is required to sync readers highlights from BookFusion to their vault locally. It is only triggered manually by the reader or based on the interval that they set. No data is transferred from the vault to BookFusion. The sync is purely one way BookFusion -> Obsidian.

## License 

[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)


%% README_END %%