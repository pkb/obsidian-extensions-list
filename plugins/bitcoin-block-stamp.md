---
aliases:
- Bitcoin Block Stamp
author:
- sefiro
author_page: https://github.com/sfr0xyz
categories: []
description: Stamp your notes with the current Bitcoin block.
downloads: 393
funding_page:
  Alby (Bitcoin/Lightning): https://getalby.com/p/sefiro
mobile: true
number: 1603
title: Bitcoin Block Stamp
type: plugin
updated: '2024-05-02T12:45:39'
url: https://github.com/sfr0xyz/obsidian-bitcoin-block-stamp
version: 1.2.0
---

%% README_START %%

# Bitcoin Block Stamp for Obsidian

[![Version][badge-version]][gh-latest] [![License][badge-license]][gh-license] [![Obsidian downloads][badge-downloads]][obsidian-plugin]

Stamp your notes with the Bitcoin block height and Moscow time. Add the latest stamp or the stamp for any time in the past up to the Genesis block.

<div align="center">
  <img src="https://raw.githubusercontent.com/sfr0xyz/obsidian-bitcoin-block-stamp/HEAD/docs/bbs-demo.png" alt="BBS Demo Image">
</div>

## Features

- Insert the latest or custom block height.
- Insert the latest or custom [Moscow time][moscowtime].
- Insert the latest or custom "Moscow time @ block height", the [Moscow Time Bot][moscowtime-bot-njump] format.
- Add a link to your preferred block explorer for the block height.
- Display the block height and Moscow time in your preferred formats.
- Use stamp placeholders to replace with the current stamps on note creation or per command.

## Usage

After you successfully [installed and enabled](#installation) the plugin, you should see a Bitcoin icon in the sidebar.

- The Bitcoin icon opens a window that lets you add a custom block stamp. Make sure you are in the editor or live mode in your active note to be able to insert the stamp.
  1. Enter the date and time of your stamp. The block closest to the entered timestamp will get stamped.
  2. Choose the stamp kind, format, and block explorer.
  3. Select **Stamp** to insert the stamp at your current curser position.
- Alternatively you can also open this window via the command palette (`Ctrl/Cmd + P`). Search for "_Bitcoin Block Stamp: Insert custom block stamp_".
- If you search for "_Bitcoin Block Stamp_" in the command palette (`Ctrl/Cmd + P`) you will see a list of all available commands.\
  There you will find commands that let you quickly insert the latest block height / Moscow time / "Moscow time @ block height".
- If you create a new note with a pre-set template, e.g. daily notes, this plugin will replace all stamp placeholders with the corresponding current block stamps. The default stamp placeholders are `{{blockheight}}`, `{{moscowtime}}`, and `{{moscowtime@blockheight}}`, but you can change this in the settings.\
  At any time you can also manually replace all placeholders in your active note with the "_Bitcoin Block Stamp: Replace stamp placeholders_" command.

## Settings

- **Block explorer**: Select your preferred block explorer (or none).\
The block height stamp gets inserted as a Markdown link to corresponding block in your selected block explorer. At this time, the [Mempool.space][mempool-space], [Blockstream.info][blockstream-info], and [TimechainCalendar.com][timechaincalendar-com] are supported.
- **Formats**
  - **Block height format**: Select your preferred block height format.\
  You can choose between plain (840000), comma (840,000), period (840.000), space (840 000), apostrophe (840'000), and underscore (840\_000).
  - **Moscow time format**: Select your preferred Moscow time format.\
  You can choose between plain (1566), colon (15:66), and period (15.66).
- **Stamp placeholders**: Placeholders are replaced with the current stamp when you create a new note or when you use the "Replace stamp placeholder" command.
  - **Block height placeholder**: Set the text which will be replaced with the block height.
  - **Moscow time placeholder**: Set the text which will be replaced with the Moscow time.
  - **Moscow time @ block height placeholder**: Set the text which will be replaced with the "Moscow time @ block height".

## Third-party sources

This plugin uses the [mempool.space REST API][mempool-space-api] to get the Bitcoin blockchain and price data.

## Installation

### In Obsidian

1. Go to `Settings > Community plugins > "Browse" community plugins`, and search for "_Bitcoin Block Stamp_".

2. Select **Install** and after successful installation select **Enable**.

3. You should now see _Bitcoin Block Stamp_ under _Community plugins_ in your settings.

### Manually

1. Download the release files from the [latest release][gh-latest].

2. Go to the plugins subdirectory `<VAULT_DIRECTORY>/.obsidian/plugins/` in your vault directory.

3. Create a new directory called "bitcoin-block-stamp" and copy and paste the downloaded files `main.js`, `styles.css`, and `manifest.json` into it.

You should now have `main.js`, `styles.css`, and `manifest.json` in `<VAULT_DIRECTORY>/.obsidian/plugins/bitcoin-block-stamp/`.

4. Go to your Obsidian vault and enable the plugin by toggling _Bitcoin Block Stamp_ under `Settings > Community plugins > Installed plugins`.

## Thank you 🙏

Thank you for using this plugin!

Your feedback is very much appreciated. If you have a feature idea/request or found a bug, tag me over [nostr][me-njump] or open an [issue on GitHub][gh-issues].

If you like this plugin and want to support me, you can send me sats via the Bitcoin Lightning Network. Check out my [Alby page][me-alby].

⚡ Lightning address:

```plaintext
sefiro@getalby.com
```

---

<div align="center">
Nostr: <a href="https://njump.me/npub19a6x8frkkn2660fw0flz74a7qg8c2jxk5v9p2rsh7tv5e6ftsq3sav63vp" target="_blank">sefiro@sfr0.xyz</a>
<p><code>npub19a6x8frkkn2660fw0flz74a7qg8c2jxk5v9p2rsh7tv5e6ftsq3sav63vp</code></p>
</div>

[badge-version]:          https://img.shields.io/github/manifest-json/v/sfr0xyz/obsidian-bitcoin-block-stamp?style=flat-square&color=007ec6
[badge-license]:          https://img.shields.io/github/license/sfr0xyz/obsidian-bitcoin-block-stamp?style=flat-square&color=5D8211
[badge-downloads]:        https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json&query=%24%5B%22bitcoin-block-stamp%22%5D.downloads&style=flat-square&logo=obsidian&label=downloads&color=7c3aed
[obsidian-plugin]:        https://obsidian.md/plugins?id=bitcoin-block-stamp
[gh-latest]:              https://github.com/sfr0xyz/obsidian-bitcoin-block-stamp/releases/latest
[gh-license]:             https://github.com/sfr0xyz/obsidian-bitcoin-block-stamp/blob/master/LICENSE
[gh-issues]:              https://github.com/sfr0xyz/obsidian-bitcoin-block-stamp/issues
[moscowtime]:             https://archive.is/I8oGK
[moscowtime-bot-njump]:   https://njump.me/npub1030jfcwftah37a242jv0qqvmuyje5ew8tt59rs3477c4e8ugurhqzdwcta
[mempool-space]:          https://mempool.space
[mempool-space-api]:      https://mempool.space/docs/api/rest
[blockstream-info]:       https://blockstream.info
[timechaincalendar-com]:  https://timechaincalendar.com
[me-njump]:               https://njump.me/npub19a6x8frkkn2660fw0flz74a7qg8c2jxk5v9p2rsh7tv5e6ftsq3sav63vp
[me-alby]:                https://getalby.com/p/sefiro


%% README_END %%