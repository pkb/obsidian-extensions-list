---
aliases:
- Local REST API
author:
- '[[coddingtonbear|Adam Coddington]]'
categories: []
description: Get, change or otherwise interact with your notes in Obsidian via a REST
  API.
downloads: 90491
mobile: false
number: 413
stars: 678
title: Local REST API
type: plugin
updated: '2024-11-19T22:39:53'
url: https://github.com/coddingtonbear/obsidian-local-rest-api
version: 3.0.4
---

%% README_START %%

# Local REST API for Obsidian

See our interactive docs: https://coddingtonbear.github.io/obsidian-local-rest-api/

Have you ever needed to automate interacting with your notes?  This plugin gives Obsidian a REST API you can interact with your notes from other tools so you can automate what you need to automate.

This plugin provides a secure HTTPS interface gated behind api key authentication that allows you to:

- Read, create, update or delete existing notes.  There's even a `PATCH` HTTP method for inserting content into a particular section of a note.
- List notes stored in your vault.
- Create and fetch periodic notes.
- Execute commands and list what commands are available.

This is particularly useful if you need to interact with Obsidian from a browser extension like [Obsidian Web](https://chrome.google.com/webstore/detail/obsidian-web/edoacekkjanmingkbkgjndndibhkegad).

## Credits

This was inspired by [Vinzent03](https://github.com/Vinzent03)'s [advanced-uri plugin](https://github.com/Vinzent03/obsidian-advanced-uri) with hopes of expanding the automation options beyond the limitations of custom URL schemes.


%% README_END %%