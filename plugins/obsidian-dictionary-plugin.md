---
aliases:
- Dictionary
author:
- '[[authors/phibr0|phibr0]]'
categories: []
description: This is a simple dictionary for the Obsidian Note-Taking Tool.
downloads: 174523
mobile: true
number: 189
stars: 380
title: Dictionary
type: plugin
updated: '2022-11-16T01:32:54'
url: https://github.com/phibr0/obsidian-dictionary
version: 2.22.0
---

%% README_START %%

<img align="right" style="width: 27vw" src="https://media.discordapp.net/attachments/796853434397360128/847198380878069771/Screen_Shot_2021-05-26_at_12.43.43_PM.png?width=736&height=676">

# Obsidian Dictionary Plugin [![GitHub tag (Latest by date)](https://img.shields.io/github/v/tag/phibr0/obsidian-dictionary)](https://github.com/phibr0/obsidian-dictionary/releases) ![GitHub all releases](https://img.shields.io/github/downloads/phibr0/obsidian-dictionary/total)

This Plugin adds a Dictionary to the [Obsidian](https://obsidian.md) Note-Taking tool.

## Usage

Open the *Command Palette* (default: `ctrl` + `p`), search for *Open Dictionary View* and run the command. You will see that a new View appears in the right Sidebar of Obsidian. You can set your default Language in Obsidian's Settings under *Plugin Options* > *Obsidian Dictionary* > *Default Language*.

## Supported Languages

The following Languages are currently supported:

| Language             | Synonym Popover | Sidebar Lookup (Offline Support) | UI Translated? |
|:-------------------- |:---------------:|:--------------:|:-----------:|
| English (US)         |        🗸        |       🗸  (🗸)       |🗸|
| English (UK)         |                 |       🗸 (🗸)       ||
| Hindi                |                 |       🗸        ||
| Spanish              |        🗸        |       🗸        ||
| French               |        🗸        |       🗸        ||
| Japanese             |                 |       🗸        |🗸|
| Russian              |                 |       🗸        ||
| German               |        🗸        |       🗸        |🗸|
| Italian              |        🗸        |       🗸        |🗸|
| Korean               |                 |       🗸        ||
| Brazilian Portuguese |                 |       🗸        ||
| Arabic               |                 |       🗸        ||
| Turkish              |                 |       🗸        | |
| Chinese | | 🗸 (🗸) | 🗸 |

### How to use this for multiple Languages

To use a different language than your default language for the Dictionary and Synonym Popover you can add a `lang` or `language` key into your YAML Frontmatter. Use the following Values for the Language:

| Language | Key |
|---|:---:|
English (US)|`en-US`
हिन्दी (Hindi)|`hi`
Español (Spanish)|`es`
Français (French)|`fr`
日本語 (Japanese)|`ja`
Русский (Russian)|`ru`
English (UK)|`en_GB`
Deutsch (German)|`de`
Italiano (Italian)|`it`
한국어 (Korean)|`ko`
Português do Brasil (Brazilian Portuguese)|`pt-BR`
اَلْعَرَبِيَّةُ‎ (Arabic)|`ar`
Türkçe (Turkish)|`tr`
中文 (Chinese)|`zh`

## Offline Dictionary

As of Release 2.13.0 this Plugin has experimental offline Support for English and Chinese. The offline Dictionary is pretty big (about 35 megabytes), which is why it's not bundled with this Plugin by default. It will download the neccessary files **when you are using it for the first time**. That means your first look-up still requires an internet connection.

## Privacy

This Plugin relies on third-party [API's](https://en.wikipedia.org/wiki/API) to find Definitions, Synonyms, etc. You can select from a Range of API’s and choose which one to trust, the Plugin will not make requests to API’s you didn’t allow it to. To find more Information about the different API’s click the “More Info“ Button in the Settings.

If you explicitly activate the **Advanced Synonym Search**, there will be one additional API Call to analyze the *whole* Sentence the selected Word appears in. This will make the suggested Synonyms more accurate based on the context.

Even though this Plugin is fully Open-Source and thus can be looked over by anyone, the third-party API’s might not be.

## How to make this Plugin better

### Translations

If you want to help and translate this Plugin to new languages, see [locales](https://github.com/phibr0/obsidian-dictionary/tree/master/src/l10n/locale).

### New API's

This Plugin is meant to be easily extensible! If you want to add a new API for a new (or already supported) Language see: [API Manager](src/apiManager.ts).

You will need to create a new class for the new API, which implements [DefinitionProvider](src/api/types.ts) or [SynonymProvider](src/api/types.ts) (or both).

If the Language you are working with doesn't exist yet, add it to the `LANGUAGES` in [_constants.ts](src/_constants.ts).

After that, add the API to the respective List in the [API Manager](src/apiManager.ts) and finally open a Pull Request here on GitHub.
This will automatically make it selectable in the Settings.

> Special Thanks to [@mgmeyers](https://github.com/mgmeyers) for already making this Plugin a lot better!

## Variables

You can edit the Note Template for your local Dictionary in the Settings. Here is a List of Variables you can use:

- `{{notice}}` → "Autogenerated by Obsidian Dictionary" (Localized)
- `{{word}}` → The Word the File is created for
- `{{pronunciationHeader}}` → "Pronunciations" (Localized)
- `{{meaningHeader}}` → Same as above, but for "Meanings" (Localized)
- `{{originHeader}}` → Same as above, but for "Origin" (Localized)
- `{{phoneticList}}` → A List of all phonetics the Plugin found.
- `{{meanings}}` → Same as above, but for meanings the Plugin found.
- `{{origin}}` → Same as above, but for the word origin the Plugin found.

Localized means, that the Text changes based on Obsidians internal Language.

## How to install

1. Go to **Community Plugins** in your [Obsidian](https://www.obsidian.md) Settings and **disable** Safe Mode
2. Click on **Browse** and search for “Obsidian Dictionary”
3. Click install
4. Toggle the Plugin on in the **Community Plugins** Tab

## Support me

If you find this Plugin helpful, consider supporting me:

<a href="https://www.buymeacoffee.com/phibr0"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=phibr0&button_colour=5F7FFF&font_colour=ffffff&font_family=Inter&outline_colour=000000&coffee_colour=FFDD00"></a>

> This Plugin relies on the [Free Dictionary API](https://dictionaryapi.dev/) by [meetDeveloper](https://github.com/meetDeveloper). He is providing this API to the public for free and needs help from the community. [**More Information**](https://github.com/meetDeveloper/freeDictionaryAPI#important-note)


%% README_END %%