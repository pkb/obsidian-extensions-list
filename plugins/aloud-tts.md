---
aliases:
- Aloud
author:
- '[[authors/adrianlyjak|Adrian Lyjak]]'
categories: []
description: Highlight and speak text from your notes. Converts text to speech in
  real-time using lifelike voices from OpenAI.
downloads: 5430
mobile: true
number: 1407
stars: 28
title: Aloud
type: plugin
updated: '2024-10-27T08:06:56'
url: https://github.com/adrianlyjak/obsidian-aloud-tts
version: 0.6.0
---

%% README_START %%

# Aloud Text To Speech Obsidian Plugin

Highlight and speak text from your Obsidian notes. Converts text to audio using lifelike voices from OpenAI.

<video src="https://github.com/adrianlyjak/obsidian-aloud-tts/assets/2024018/6e673350-0cf2-4820-bca1-3f36cd3a24f6" ></video>

Just add your OpenAI API key. Choose from 6 voices. OpenAI charges Audio at [$0.015 per 1,000 characters](https://openai.com/pricing). That's around $12 for the ~800,000 character text of A Tale of Two Cities.

<img alt="Settings View" src="./docs/settings-example.png" width="400p" ></img>

### Features:

**Visual Feedback:** Active sentence is highlighted and updated as playback progresses.

**Listen immediately:** Audio is streamed sentence-by-sentence. Jump back and forth by skipping by sentence.

**Variable Speeds:** On device playback rate adjustor for improved audio quality.

<img src="https://raw.githubusercontent.com/adrianlyjak/obsidian-aloud-tts/HEAD/docs/variable-speeds.png" width="200" ></img>

**Caching:** Audio is cached in your vault to reduce costs, and automatically removed. Cache duration is configurable. Audio may be cached device local or in a vault directory.

<img src="https://raw.githubusercontent.com/adrianlyjak/obsidian-aloud-tts/HEAD/docs/cache-settings.png" width"400" ></img>

**Export and Embed Audio:** Quickly export to audio files: export audio files from selection, or embed audio by pasting text from your clipboard.

<img src="https://raw.githubusercontent.com/adrianlyjak/obsidian-aloud-tts/HEAD/docs/right-click-menu.png" max="300" ></img>

**Play text from anywhere:** Lots of commands. Play text to speech directly from your clipboard.

<img src="https://raw.githubusercontent.com/adrianlyjak/obsidian-aloud-tts/HEAD/docs/commands.png" width="300" ></img>

**OS Integration:** Integrates with your mobile phone to play while locked. Pause/Play with OS controls on desktop.

### Alternate TTS Models

You can also run alternate models if you have OpenAI compatible API server that has an `/v1/audio/speech` endpoint. For example [openedai-speech](https://github.com/matatonic/openedai-speech). Just configure the url in the plugin settings


%% README_END %%