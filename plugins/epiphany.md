---
aliases:
- Epiphany
author:
- '[[Epiphany-Notes|Epiphany]]'
categories: []
description: Synchronize voice notes from the Epiphany app directly into your vault
downloads: 102
mobile: true
number: 1901
title: Epiphany
type: plugin
updated: '2024-11-25T17:50:08'
url: https://github.com/Epiphany-Notes/epiphany-obsidian-plugin
version: 1.1.5
---

%% README_START %%

# Epiphany Voice Plugin

**Send transcribed voice notes to Obsidian from your iPhone and Apple Watch in seconds.** 

This plugin makes it ridiculously easy to dictate notes to Obsidian without ever need to open the Obsidian mobile app.

The Epiphany Voice mobile app will need to be installed to function.  
While in beta, access can be requested at [Epiphany](https://epiphanyvoice.io/)   (ios only currently)

## Installation Instructions

1. Install and create an account in the Epiphany Voice mobile app

2. In Obsidian, install and enable the Epiphany community plugin.

3. Enabling will open a new One Time Password tab. (Use the same email your Epiphany account is associated with). Enter the One Time Password you receive via email to complete the authentication process.

4. Once OTP process is complete, you'll be able to connect Obsidian as a destination in the Epiphany app.
By default, notes will go to an "Epiphany Notes" note.  If you toggle "Create a separate note for each record", a new note will be created for every new Epiphany you send.

(Daily note appending coming soon)

## Usage

### Voice Note Synchronization

#### Periodic Fetching
The plugin will periodically check for new voice notes on the Epiphany service and update your vault. You can also manually trigger a sync via the command palette.


%% README_END %%