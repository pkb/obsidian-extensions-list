---
aliases:
- Copy Search URL
author:
- '[[authors/czottmann|Carlo Zottmann]]'
categories: []
description: Adds a button to the search view for copying the Obsidian search URL.
downloads: 4978
mobile: false
number: 606
stars: 26
title: Copy Search URL
type: plugin
updated: '2023-05-03T00:11:55'
url: https://github.com/czottmann/obsidian-copy-search-url
version: 1.2.1
---

%% README_START %%

<img src="https://raw.githubusercontent.com/czottmann/obsidian-copy-search-url/main/readme-assets/copy-search-url-256.png" height="128" alt="Plugin logo thingie: a list icon, a plus, a link icon">

# Copy Search URL

This plugin adds a menu entry to the "X results" context menu in [Obsidian](https://obsidian.md)'s search view. Clicking it will copy the [Obsidian URL](https://help.obsidian.md/Advanced+topics/Using+obsidian+URI#Action+search) for the current search to the clipboard. This allows for easier bookmarking of pre-defined searches.


## Showcase

![Showcase GIF: both editor and search view are open, a search for "hello" is done, then a mouse click on the new "Copy Obsidian search URL" context menu entry is done, the result is manually pasted in the editor, then another search is done for "dazuma", the menu entry is clicked, the result is pasted into the editor as well, then a third search is done for "plugins", the menu entry is clicked, that result is also pasted into the editor. Obsidian is then switched into reading mode, the three links are clicked in succession, bringing up their related searches](https://raw.githubusercontent.com/czottmann/obsidian-copy-search-url/main/readme-assets/showcase.gif)


## Bug Reports & Discussions

For bug reports please use this repo's Issues section — thank you!

I've moved all plugin **discussions** to the ActionsDotWork Forum which is a hub for both my Obsidian plugins and the macOS/iOS productivity apps I'm building: [Carlo's Obsidian Plugins - ActionsDotWork Forum](https://forum.actions.work/c/obsidian-plugins/8).

The forum supports single-sign-on via GitHub, Apple and Google, meaning you can log in with your GitHub account.


## Installation

1. Search for "Copy Search URL" in Obsidian's community plugins browser. ([This link should bring it up.](https://obsidian.md/plugins?id=zottmann))
2. Install it.
3. Enable the plugin in your Obsidian settings under "Community plugins".

That's it.


## Installation via BRAT (for pre-releases or betas)

1. Install [BRAT](https://github.com/TfTHacker/obsidian42-brat).
2. Add "Copy Search URL" to BRAT:
    1. Open "Obsidian42 - BRAT" via Settings → Community Plugins
    2. Click "Add Beta plugin"
    3. Use the repository address `czottmann/obsidian-copy-search-url`
3. Enable "Copy Search URL" under Settings → Options → Community Plugins


## Please note

This plugin adds functionality (a button) to a core plugin. The jury's out on whether that idea is a wise one, tho — either way, here we are. ;)

I wanted this functionality for a while so I've built it myself.  It was a good learning experience for me.


## Development

Clone the repository, run `pnpm install` OR `npm install` to install the dependencies.  Afterwards, run `pnpm dev` OR `npm run dev` to compile and have it watch for file changes.


## Thanks to …

- the [obsidian-tasks](https://github.com/obsidian-tasks-group/obsidian-tasks) crew for the "starter templates" for the GitHub Action workflow and the handy `release.sh` script
- the humans of [Discord channel `#plugin-dev`](https://discord.com/channels/686053708261228577/840286264964022302) for pointing me in the right direction


## Author

Carlo Zottmann, <carlo@zottmann.org>, https://zottmann.org/


## License

MIT, see [LICENSE.md](https://github.com/czottmann/obsidian-copy-search-url/blob/main/LICENSE.md).


%% README_END %%