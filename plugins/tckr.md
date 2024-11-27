---
aliases:
- tckr
author:
- '[[Git-Sum|Git-Sum]]'
categories: []
description: Get your TickTicks!
downloads: 2111
mobile: false
number: 1290
title: tckr
type: plugin
updated: '2023-10-25T01:59:03'
url: https://github.com/Git-Sum/obsidian-tckr
version: 1.0.0
---

%% README_START %%

# tckr

Get your TickTicks!

**Note:** This plugin uses the v1 API

## How to use
1. Click on the checkmark icon
2. Select your project
3. Click on a task to expand any available properties
4. Click the checkbox to mark complete

## Setup

- Create a Tick Tick App
	1. Go to [Tick Tick Developer Center](https://developer.ticktick.com/manage)
	2. Create a new app with the following settings
		- name: `tckr`
	3. Edit the app to add redirect URL
		- OAuth redirect URL: http://localhost/
	4. Make note of your `clientId` and `clientSecret`
- Install `tckr` plugin in Obsidian
- Add your `clientId` and `clientSecret`
- Click "Refresh Token"
- Done

## Known limitations
- Tasks must be under a project
- Completed tasks are not shown
- Checklist items are read only
- ...

## Known bugs
- ...

## Upcoming features
- ...


%% README_END %%