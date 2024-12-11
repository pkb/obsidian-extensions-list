---
aliases:
- Listen Up!
author:
- '[[tejas-hosamani|Tejas H]]'
categories: []
description: Covert text to natural voice audio, locally - Listen Up!
downloads: 556
mobile: false
number: 1854
stars: 9
title: Listen Up!
type: plugin
updated: '2024-08-30T18:05:48'
url: https://github.com/tejas-hosamani/obsidian-plugin-text-to-speech
version: 1.0.7
---

%% README_START %%

# Listen Up!
An open source plugin to convert your [notes into natural language audio files](https://github.com/tejas-hosamani/obsidian-plugin-text-to-speech)

Join [Listen Up discord server](https://discord.gg/DaGymVk3jx) if you get stuck somewhere or you have suggestions for features.

---

Sample: <br > 

<audio controls>
  <source src="./sample/sample.wav" type="audio/wav">
  Your browser does not support the audio tag. Try <a href="/sample/sample.wav">Sample audio</a>
</audio>

## Get Started - Quick

Follow along video - *coming soon*

Step 1:
Download and enable the plugin

Step 2:
1. Download, and extract [Piper](https://github.com/rhasspy/piper/releases) for your OS 
2. Select executable file from Obsidian plugin setting

Step 3:
Download and setup language audio models - 
1. Check the samples - https://rhasspy.github.io/piper-samples
2. Download whichever lang model you like from the samples from - https://github.com/rhasspy/piper/blob/master/VOICES.md
   1. [Recommended model](https://github.com/rhasspy/piper/blob/master/VOICES.md#:~:text=%5D%20%5Bconfig%5D-,danny,-low%20%2D%20%5Bmodel)
3. Select these files from the Obsidian plugin settings

Step 3:
Run the `Convert text to speech` command to convert
![alt text](https://raw.githubusercontent.com/tejas-hosamani/obsidian-plugin-text-to-speech/HEAD/sample/image.png)
That's it! Start using the plugin!


## Advanced

### Different ways to convert text to audio
1. Selection
2. Using special text blocks - `{{listen}}Converts to voice{{/listen}}`
3. Without any selection or text blocks, covers entire file to audio




### Change language models
*Coming soon*


%% README_END %%