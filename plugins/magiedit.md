---
aliases:
- Magiedit
author:
- '[[authors/magitools|Matteo Gassend]]'
categories: []
description: Official integration for Magiedit's API
downloads: 26
mobile: true
number: 2056
stars: 0
title: Magiedit
type: plugin
updated: '2024-12-01T14:14:29'
url: https://github.com/magitools/magiedit-obsidian
version: 1.0.2
---

%% README_START %%

# Magiedit Obsidian

> Official plugin to interact with [magiedit](https://magiedit.magitools.app)

## Usage

- Install It

## Configuration

There are two settings you should be aware of when using this plugin:

- url: the url of the instance of magiedit you're trying to connect to (defaults to the origin instance at magiedit.magitools.app)
- api_key: the api key you will use to interact with the magiedit api (you can create one from the magiedit web application)

## Commands

This plugins introduces one command: **Publish Current File**.

### Publish Current File

This command will retrieve all your configured publishers, allow you to choose which publisher you'd like to use, and then send a POST request to magiedit's API with the selected publishers and the content of the currently opened file to be published.


%% README_END %%