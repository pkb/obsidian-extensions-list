---
aliases:
- Pivotal Tracker Integration
author:
- '[[authors/jonnydeates|Jon Deates]]'
categories:
- '[[categories/Integration|Integration]]'
description: This is an unofficial pivotal tracker integration plugin for Obsidian.
  This plugin allows the user to pull stories, chores, bugs from their pivotal counterpart.
downloads: 3233
mobile: true
number: 897
stars: 5
title: Pivotal Tracker Integration
type: plugin
updated: '2023-06-07T03:21:23'
url: https://github.com/jonnydeates/obsidian-pivotal-tracker-integration-plugin
version: 1.0.6
---

%% README_START %%

# Obsidian Pivotal Tracker Integration Plugin

This is a plugin for Obsidian (https://obsidian.md), for the intergration between Pivotal Tracker (https://www.pivotaltracker.com/)
This project uses Typescript to provide type checking and documentation.

## Setup the Plugin
Once the plugin is installed, you will need to configure a few things.
- First you need to get your Tracker API Key
  - This is inside your account settings
- Then You need your Tracker Project ID
  - This can be found at the url of your tracker project.
- Finally you need to specify a folder location for the stories to be pulled to.

## How to use
- Enter settings within the plugin.
- Click the Pull Tracker Stories Ribbon OR click on the command for pulling the stories.
- Enjoy!

## Cloning this Project
- Clone this repo.
- `npm i` or `yarn` to install dependencies
- `npm run dev` to start compilation in watch mode.
- `npm run build` to compile for the plugin. It'll generate the main.js

## Manually installing the plugin

- Copy over `main.js`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.


%% README_END %%