---
aliases:
- Buttondown
author:
- '[[authors/caro401|caro401]]'
categories: []
description: Send your notes to your buttondown.email account as email drafts.
downloads: 3833
mobile: true
number: 466
stars: 17
title: Buttondown
type: plugin
updated: '2023-03-29T16:38:18'
url: https://github.com/caro401/obsidian-buttondown
version: 1.0.0
---

%% README_START %%

# Obsidian Buttondown Plugin

[Buttondown](https://buttondown.email) is a tool for producing email newsletters. It likes emails written in Markdown, and has an API.

This plugin allows you to write drafts for your emails in [Obsidian](https://obsidian.md), then send them to Buttondown with a single command, ready for you to preview and send.

## How to use

1. Install the plugin through the Obsidian's community plugins browser.
2. Enable the plugin in Obsidian.
3. Fill in your API token in the settings. You can find your token [here](https://buttondown.email/settings/programming) in your Buttondown settings
4. Write an email in an Obsidian note
5. Call the command "Create a new Buttondown draft from this note" from the Command Palette (Ctrl-P) to create a new draft in Buttondown, where the email subject is the filename of your note, and the email body is the content of your note
6. See your drafts in Buttondown [here](https://buttondown.email/emails/drafts), where you can edit and preview the draft, then schedule or send the email to your list.

## Support me

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/U6U7BUEZ6)


## How to make a release

- Update `minAppVersion` manually in `manifest.json` if required, then `npm version patch`, `npm version minor` or `npm version major` .
- Create a tag that matches that version `git tag -a 1.0.1 -m "1.0.1" && git push origin 1.0.1`


%% README_END %%