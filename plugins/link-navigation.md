---
aliases:
- Link Navigation
author:
- '[[authors/xRyul|xRyul]]'
categories: []
description: Navigate between incoming links (inlinks), outgoing links (outlinks)
  N levels deep. Links from Canvas are also supported.
downloads: 502
mobile: true
number: 1933
stars: 5
title: Link Navigation
type: plugin
updated: '2024-10-20T02:15:13'
url: https://github.com/xRyul/link-navigation
version: 0.0.10
---

%% README_START %%

# Internal Link Navigation Plugin for Obsidian

![image](https://github.com/user-attachments/assets/25f57e8f-e3ae-4925-b41c-6206845504ae)


https://github.com/user-attachments/assets/54048449-3e42-4a07-8a86-0772b81a51e4


"Top-down" Link navigation.

This plugin lets you navigate your notes N levels deep. It shows both incoming links (inlinks) and outgoing links (outlinks), including links from Canvas files.


## Background

0. Speed. In the past I used custom DatviewJS queries, to navigate notes. However, it usually took around 120-170ms for each query to process + a few extra seconds for rendering to finish. This plugin loads in 2-15ms, and all your links are near instantly always available.

1. I don't use folders. I embedd all of my notes inside one another and navigate via connections: either via graph, back/forward buttons, search, or simply via contextual navigation. However sometimes, certain internal links are deeply within the note structure, or sometimes I open certain note from within the search e.g. "Note C", and then wanna quickly navigate to a 'MOC" note where it was embedded 2 notes back e.g.: "Note A" (back buttons are not available, because I opened it directly from the search; which meeans I would need to either search for that note, that's including if I even remember its name, navigate to it via the graph, or navigate via "Backlinks" core plugin 1 page a time).  

2. By default Obsidian doesn't show Links coming from Canvas. So if you have embedded certain note somewhere in the Canvas, or have mentioned it, or have written topic related to that one particular note - it can be very difficult to know where exactly (it is possible, in particular with smaller vault sizes, however it gets cumbersome when topics gets interconnected spanning multiple domains and it makes it really hard to track down in which Canvas file certain file was embedded).  

Thus it helps by allowing you to:  

- Navigate up and down your note connections, as deep as you want
- See links from Canvas files, so you don't miss those connections
- Quickly jump between related notes, even if they're not directly linked
- Find your way back to important notes (like MOCs) without remembering exact titles or clicking endlessly


## Features

- Hierarchical view of links*
- Show links from Canvas files
- Depth Control for Link Hierarchies: Allows users to define how deep the plugin should traverse the link hierarchy (e.g., links of links).
- Caching Mechanism

# Todo:

- [x] Mobile support!!!
- [x] Improve indentation of current-note
- [ ] Add support for changing inlinks, outlinks, to e.g. button, incoming links, outgoing links
- [ ] Fix detailed view not closing in external / 2nd window 
- [ ] Investigate and optimise. Currently, pLugin load time fluctates between 1ms and 15ms??
- [ ] Better support with 'daily-nav-bar' plugin
- [ ] If 2 same notes open, then NavigationalLinks gonna show up only on 1 
- [ ] notes deep inside the folder. improve layout
- [ ] add note previews on link hover
- [ ] add support for tags

## Settings

- **Search Canvas Links**: Enable or disable including Canvas files in link searches.
- **Cache Timeout**: Set how long to keep link data in cache before refreshing.
- **Cache Cleanup Interval**: Define how often to clean up the cache.
- **Show Cache Cleanup Notice**: Choose whether to display notifications about cache cleanup.


*Links - it mainly deals with internal link:
- Resolved links: Links to notes that actually exist in your vault.
- Incoming links (or inlinks): links to the active note
- Outgoing links (or outlinks): links from the active note
- Frontmatter links: Any links found in the frontmatter section of your notes.
- Canvas links - if current note is embbed anywhere in any of the Canvas files it will locate them



%% README_END %%