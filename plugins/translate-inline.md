---
aliases:
- Translate Inline
author:
- '[[kon-foo|Lucas Langholf]]'
categories: []
description: Translations at your fingertips. Get inline Translations when writing
  Notes.
downloads: 92
mobile: false
number: 1960
title: Translate Inline
type: plugin
updated: '2024-03-06T02:59:17'
url: https://github.com/kon-foo/Obsidian-Translate-Inline
version: 0.1.18
---

%% README_START %%

## Obsidian Translate Inline
> Created with the help of the [Obsidian Plugin Template](https://github.com/kon-foo/ObsidianPluginTemplate).

With this plugin you get translations at your fingertips. Translate words or entire sentences with a minimal interruption of your thought process! For example, to translate from an auto-detected language to your default target language, you can simply type:
```markdown
[>Buenos días] # Translate using your default settings
```
As soon as the cursor leaves the square brackets, the translation provider of your choice will be queried and the text will be replaced with the translation.

You may also specify the target language inline to use a different language than the default:
```markdown
[>de>Buenos días] # Translate from the default source language to German
```

Or specify the source language, if it is not auto-detected:
```markdown
[es>de>Buenos días] # Translate from Spanish to German
[es>Buenos días] # Translate from Spanish to your default language
```

### Translation Providers.
To use this plugin, you need to have an API key from a supported translation provider. Currently, the plugin supports:
- [DeepL](https://www.deepl.com/)
- [Google Cloud Translation](https://cloud.google.com/translate)
Both of these providers offer a free tier. While Google supports much more languages, DeepL is much easier to set up if you are not already familiar with Google Cloud.

### Privacy
It should be self evident that the text you translate is sent to the translation provider of your choice, so their privacy policy applies:
- [DeepL Privacy Policy](https://www.deepl.com/privacy.html)
- [Google Translate Data Usage](https://cloud.google.com/translate/data-usage)
The plugin itself does not collect any data. The API key is stored in the Obsidian vault in plain text (for now), so you should keep your vault secure.

### Further Development
This plugin is in an early "works-for-me" stage of development. For now, "works-for-me" is exactly what I need and I will only fix bugs and maybe add mobile support. If you encounter any bugs, feel free to open an issue or a pull request.
If this plugin proves to be useful to others, I do have some ideas for future features and enhancements:
- Fancy Syntax Highlighting
- Passing options to the translation provider (e.g. a formality setting for DeepL by using something like `[>some text|formality:less]`)
- Inline Dropdowns for language selection
- Encrypted API key storage (though this would require a good solution for mobile support)
- Option to customize the syntax aka. the divider and enclose characters.
- Possibility to trigger translation by hitting `enter` or `tab` within the square bracket.
- More Translation Providers

Addings more Translation Providers should be relatively easy, as the plugin is designed to be modular. If you are interested in adding a translation provider, have a look at an exisiting provider like [Google](src/providers/Google/provider.ts), implement the same interface and add it to the [provider factory](src/providers/factory.ts). Furthermore, update the README including the privacy policy of the new provider.


## Support Me!
If you find this plugin to be of any use to you, I would be grateful if you would buy me some time to do more like this:
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/kon.foo)

## Developmen References:

This is a list of resources and inspirations I used to create this plugin:

### Other Translation Plugins:
- [Obsidian Deepl Plugin](https://github.com/friebetill/obsidian-deepl)
- [Obsidian Translate Plugin](https://github.com/Fevol/obsidian-translate)

### Plugins that use Editor Extensions:
- [Editor Extensions in Dataview](https://github.com/blacksmithgu/obsidian-dataview/blob/e4a6cab97b628deb22d36b73ce912abca541ad42/src/ui/lp-render.ts#L133)
- [Smart Typography](https://github.com/mgmeyers/obsidian-smart-typography/)
- [Cursor Location](https://github.com/spslater/obsidian-cursor-location-plugin)

### Plugins that use SafeStorage:
- [Obsidian AI Research Assistant](https://github.com/InterwebAlchemy/obsidian-ai-research-assistant/blob/main/src/views/SettingsTab.ts)



%% README_END %%