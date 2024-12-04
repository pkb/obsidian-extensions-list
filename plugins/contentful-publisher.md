---
aliases:
- Contentful Publisher
author:
- '[[ziyafenn|Ziya Fenn]]'
categories:
- '[[categories/Sharing and publishing|Sharing and publishing]]'
description: Manage your Contentful content from Obsidian.
downloads: 2634
mobile: true
number: 1160
stars: 0
title: Contentful Publisher
type: plugin
updated: '2023-09-03T17:03:22'
url: https://github.com/ziyafenn/obsidian-contentful-publisher
version: 1.0.0
---

%% README_START %%

# Contentful Publisher

Contentful is a headless CMS that lets you create and deliver content to any platform.

The plugin can pull the content types from Contentful and create Obsidian templates based on them. It can also pull all your content entries from Contentful and create notes based on them, organizing them into folders based on the content type.

You can also update the content from Obsidian and push it back to Contentful. If the plugin detects that the content is out of sync (it will check if the content was updated on Contentful), it will warn you and create a copy of the content.

All the fields of the content will be added as frontmatter parameters, except for the title and body. Currently, the plugin will ignore these fields: _RichText_, _ResourceLink_, _Link_, _Object_ and _Location_.

## How to Use

1. Setup plugin from **Settings -> Contentful Publisher**
2. Use "Sync with Contentful" action from the Sidebar to pull your content
3. Once you are done editing a Note, select "Update Contentful Entry" from Command palette(ctrl+p) to update the Contentful Entry from Obsidian

## Requirements

-   Obsidian core Template plugin must be enabled and configured
-   _Wikilinks_ should be disabled from the **Settings -> Files & Links** so Markdown links are used by default instead
-   Content model in Contentful are created
-   Every content model must have a field that represents Entry title of the content
-   Content type model should have at least one Text field representing the body of the entry

## Planned Features

-   [ ] Create content from Obsidian
-   [ ] Upload images from Obsidian
-   [ ] Support for multiple locales


%% README_END %%