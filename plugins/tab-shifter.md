---
aliases:
- Tab Shifter
author:
- Joshua Rozner
author_page: github.com/jsrozner
categories: []
description: Enables shifting tabs between different tab splits and some other basic
  IDE tab functionalities
downloads: 1190
mobile: false
number: 1482
title: Tab Shifter
type: plugin
updated: '2024-03-21T05:51:36'
url: https://github.com/jsrozner/obsidian-tab-shifter
version: 2.0.2
---

%% README_START %%

# Tab shifter
This is a tab navigating plugin that behaves similarly to those in code editors.

As of V2 it has two functionalities
1. tab shifting  (v1 behavior unchanged)
	- It has the same behavior as, e.g., the tab-shifter plugin for WebStorm.
	- Tabs can be either moved to the previous or to the next "tab group".
2. tab navigation: (v2 behavior, new)
   - Enables, e.g., cmd+alt+arrow to be used to navigate pref/next among open tabs
   - Turns out it's different from existing Next Tab command in that it will go across tab group boundaries

## Caveats
### Unofficial API
This plugin does not use an official API. Instead, it reads properties from
the leaf (tab) and tabs (tab "groups") objects that seem always to be present.
It does work currently, but it will break if those properties go away. 

You can see what properties we assume are present in `typesUnofficial.ts`.

### Logic
To decide which tab group to move a tab to: 
We trust that the order of existing leaves (tabs) matches the
order of the tab groups. In my experience this is usually true, but
it might behave weirdly if you have a ton of splits. (The other way to do this 
would have been to recalculate the view tree, but that's more complex and has
thus far seemed unnecessary!)

### Support
- I set this to DesktopOnly because I do not know whether the logic will work 
on mobile. If you'd like it to be available on mobile, please test that it works
and then file a feature req.

- Currently this processes tab groups only if they contain open markdown files.
We could support other types.


%% README_END %%