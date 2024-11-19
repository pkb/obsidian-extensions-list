---
aliases:
- Eleven Labs
author:
- Mark Charles
author_page: https://github.com/veritas1
categories: []
description: Turn your Obsidian notes into text-to-speech audio files with Eleven
  Labs.
downloads: 3973
funding_page: https://www.buymeacoffee.com/veritas0x1
mobile: true
number: 1175
title: Eleven Labs
type: plugin
updated: '2023-12-07T22:55:35'
url: https://github.com/veritas1/eleven-labs-obsidian-plugin
version: 1.1.0
---

%% README_START %%

# Eleven Labs text-to-speech Obsidian Plugin

This is a plugin for Obsidian (https://obsidian.md).

This project allows you to create text-to-speech audio files using the Eleven Labs api, straight from your Obsidian notes.

This requires an Eleven Labs (https://elevenlabs.io) account, and api key. You can retrieve your api key from "Profile Settings", when signed into the Eleven Labs web dashboard.

## How to use

Once the plugin is installed, head to the plugin settings page in Obsidian and paste in your api key.

![Settings Api Key](https://raw.githubusercontent.com/veritas1/eleven-labs-obsidian-plugin/HEAD//images/image9.png)

In your notes, when in **edit mode**, simply highlight the text you want to use, right click and select "Eleven Labs" from the context menu.

![Highlight text](https://raw.githubusercontent.com/veritas1/eleven-labs-obsidian-plugin/HEAD//images/image2.png)

If you prefer, you can trigger the modal using the Command Palette (`CTRL` + `p`).

![Commmand Palette](https://raw.githubusercontent.com/veritas1/eleven-labs-obsidian-plugin/HEAD//images/command-palette.png)

You'll then be presented with a modal, where you can select a voice to use from your Eleven Labs account:

![Modal](https://raw.githubusercontent.com/veritas1/eleven-labs-obsidian-plugin/HEAD//images/image3.png)

Override the voice settings:

![Voice settings](https://raw.githubusercontent.com/veritas1/eleven-labs-obsidian-plugin/HEAD//images/image4.png)

Select which model to use, allowing multilingual output:

![Model Select](https://raw.githubusercontent.com/veritas1/eleven-labs-obsidian-plugin/HEAD//images/model-select.png)

Now you can generate your audio, by pressing the "Generate audio" button. This will happen in the background and can take a few minutes depending on the number of characters being processed. You will get a notification once the audio has been generated and downloaded to your vault.

![Generating notice](https://raw.githubusercontent.com/veritas1/eleven-labs-obsidian-plugin/HEAD//images/image5.png)
![Audio file complete notice](https://raw.githubusercontent.com/veritas1/eleven-labs-obsidian-plugin/HEAD//images/image6.png)
![File tree](https://raw.githubusercontent.com/veritas1/eleven-labs-obsidian-plugin/HEAD//images/image7.png)
![Generated note](https://raw.githubusercontent.com/veritas1/eleven-labs-obsidian-plugin/HEAD//images/image8.png)


%% README_END %%