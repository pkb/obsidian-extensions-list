---
aliases:
- Callout Integrator
author:
- '[[authors/Cleoche|Cleoche]]'
categories: []
description: Integrate long blocks of text into callouts and easier nested callouts
downloads: 8512
mobile: true
number: 818
stars: 26
title: Callout Integrator
type: plugin
updated: '2023-11-22T22:14:30'
url: https://github.com/Cleoche/obsidian-callout-integrator
version: 1.1.4
---

%% README_START %%

# Callout Integrator

This is a simple plugin to allow for easier integration of long blocks of text into callouts by inserting ">" at each line break within a highlighted block of text. 

![ezgif-1-16d6f997a2](https://github.com/Cleoche/obsidian-callout-integrator/assets/96603897/e249c0da-d87a-49db-84f1-c2b1732871dd)

## Installation
**Obsidian Plugin Store**
Navigate to settings -> community plugins. Select *browse*, then enter "Callout Integrator". Click on the option that pops up, then click *install*. After installing, click the *enable* option that appears.

![ezgif-3-5d09fce6cb](https://github.com/Cleoche/obsidian-callout-integrator/assets/96603897/f1f5b685-6644-4545-b646-5ec10daf230f)

**GitHub** *NOT recommended; desktop only*
Download the latest release and navigate to the .obsidian file. Choose the vault in which you would like to install the plugin, and copy the files from the latest release to a subfolder within the **plugins** folder. Then, navigate to **Community Plugins** tab in settings and turn the switch next to **Callout Integrator** to *on*.

## Setup
**Desktop**
If already on the Callout Integrator page within the plugin store, click *Hotkeys*. Alternatively, navigate to settings -> community plugins, scroll down to *Callout Integrator*, and click the plus button to the right. Here, set hotkeys for *Integrate* (*adding* "> " to the beginning) and *Un-Integrate* (*removing* any "> " at the beginning). Alternatively, activate these through the command palette by selecting the icon in the left sidebar or pressing cmd+shift+P // ctrl+shift+P.

**Mobile**
Navigate to settings -> mobile. Scroll down until you find *Callout Integrator: integrate* and *Callout Integrator: un-integrate*. Click the plus icon next to both of these. They will show up in your mobile editor bar. 
	*Note*: The icons for mobile are currently not configured; both will show up as question marks. This is on my to-do list.

 ## Use
If no text is highlighted, the integrate/un-integrate functions will target the line of text containing the cursor.

If text *is* highlighted, the integrate/un-integrate functions will target everything selected.


%% README_END %%