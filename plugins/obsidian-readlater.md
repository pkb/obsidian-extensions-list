---
aliases:
- Read Later
author:
- '[[authors/Canna71|Gabriele Cannata]]'
categories: []
description: Synch web pages to markdown and integrate with read-it-later apps (Pocket,
  Instapaper)
downloads: 6053
mobile: false
number: 719
stars: 51
title: Read Later
type: plugin
updated: '2022-12-11T23:02:52'
url: https://github.com/Canna71/obsidian-readlater
version: 0.8.2
---

%% README_START %%

# Obsidian Read Later

Plugin for keeping and tracking offsite version of web pages

- Download a page to markdown
- integrate with read-it-later services like [Pocket](https://getpocket.com) and [Instapaper](https://www.instapaper.com)
- Map a note to a web page and keep it in synch

## Download or update a page to markdown 

Use a [bookmarklet](https://canna71.github.io/obsidian-readlater/)

Use the command `Save URL from Clipboard`

Set the `url` attribute in the frontmatter and use the command `Synch current page`

## Integrate with read-it-later Services
Go to the settings and authorize the plugin to access either your Pocket or Instapaper Library. Optionally set a periodic synching and a custom folder for each service.

You can force the Synch with the commands
`Synch Pocket Unread List`
or
`Synch Instapaper Unread List`

The plugin will fetch the bookmarks from the services and store them as markdown notes.
It will optionally keep it in synch by periodically fetching new bookmarks.

You can also "archive" the bookmarks from the corresponding notes.

## Automatic synch
If you want your note to be kept in synch with the online version, simply set the `synch` attribute:
```
---
url: https://time.is/
readlater:
  synch: Hourly
  synchtime: 1670768616110
---
```

`synch` attribute can take the following values: `Manual` (default), `Hourly`, `Daily`, `Weekly`, `Monthly`, `Yearly`

## Hints
This plugin works quite well to synch with shared whiteboards like [Arc browser](https://arc.net/)'s *easel*. 

It is also quite good for reading offline from sites like [Medium](https://medium.com/)



%% README_END %%