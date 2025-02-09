---
aliases:
- Etherpad
author:
- '[[authors/egradman|egradman]]'
categories: []
description: Etherpad Integration
downloads: 4256
mobile: true
number: 470
stars: 62
title: Etherpad
type: plugin
updated: '2022-03-22T03:34:12'
url: https://github.com/egradman/obsidian-etherpad-lite
version: 1.0.6
---

%% README_START %%

# Etherpad-lite Obsidian Plugin

My first draft of everything happens in Obsidian.  The second draft usually happens in collaboration with others.  I find myself cutting and pasting my work into a Google Doc, sharing the URL with coworkers, and replacing the original with a link to the Google Doc.  This makes my work unsearchable, untaggable, and unlinkable.

This plugin uses an Etherpad-Lite server as a lightweight collaboration tool.  Etherpad-Lite is a web-based editor with no frills.  I've always thought of it as the "pastebin of editors."  With this plugin, you can upload any note to an Etherpad-Lite server, share the URL, and allow others to collaboratively edit.  The document remains in your vault.  Each time it's opened, its contents will be replaced with the latest version from the Etherpad-Lite server.

When you're happy with the results and don't want to sync anymore, simply remove the `etherpad_id` key from the frontmatter.

There are three commands:

### Convert current note to Etherpad

This command uploads the text of the current note to your Etherpad-Lite server.  The id of the note on the server will be the same as the basename of the note in your vault.  This command adds a metadata key (`etherpad_id`) to the frontmatter of your document which signals to the plugin that this note canonically lives in the cloud.

### Replace note content from Etherpad

This command explicitly replaces the contents of the current note with its version on the server. It uses the `etherpad_id` frontmatter key to determine where to fetch from.  If no such key exists, this command is a no-op.

This is exactly the behavior as when a note with an `etherpad-id` key is opened.

### Visit note in Etherpad in system browser

This command opens the Etherpad-Lite server in your system browser.  Copy the URL and share it with others!

## Configuration

Set the server's `host`, `port`, and `apikey`.

The API key can be found in `APIKEY.txt` in the root of your server installation.

## Set up an Etherpad-Lite server

_"Wait... I have to set up my own server?"_

Easier than it sounds.  It can be done in AWS with a free-tier EC2 machine, or even in Heroku.  It takes about 2 minutes, but it's out of the scope of this document.  You can literally leave all the defaults as-is for a functional (but insecure) system.  Follow the [Etherpad-Lite instructions](https://github.com/ether/etherpad-lite).

And don't forget to grab your API key from `APIKEY.txt`!

I know.  This part feels like a bait-and-switch.

## TODO

- Command to disconnect document from Etherpad and delete remote version
- Auto-update of document when its open?
- option to prefer random pad_ids


## Caveats

- GAH!  It's currently broken on mobile due to some bad dependencies in a library I'm using.  I'll fix it very soon!

https://user-images.githubusercontent.com/103129/158699049-6d7801d9-82d0-416a-bcdb-dcdb6fd14987.mp4


%% README_END %%