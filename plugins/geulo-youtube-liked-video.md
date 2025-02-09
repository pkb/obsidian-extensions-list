---
aliases:
- Geulo
author:
- '[[authors/zzunebye|Junyoung Bang]]'
categories: []
description: Effortlessly fetch and manage all the YouTube videos you've liked, search
  and sort them, and add them to your daily note.
downloads: 482
mobile: false
number: 1838
stars: 9
title: Geulo
type: plugin
updated: '2024-08-18T22:24:26'
url: https://github.com/zzunebye/obsidian-google-liked-video
version: 0.1.12
---

%% README_START %%

# Geulo - Youtube Liked Video Plugin


This plugin Fetch all the YouTube videos you have liked, search and sort them with multiple sort options, and add them to your daily note in Obsidian.

Reviewing is as important as consuming content. I often find it not really helpful to search for new things, while there are always more things to learn by re-watching good YouTube videos. I hope this plugin, with Obsidian's power to build a knowledge base, can help us achieve that.

Features are still at its early stages. If you have any feedback or suggestions, please feel free to open an issue or contact me at [zzunebye@gmail.com](mailto:zzunebye@gmail.com).


Features
- **Fetch liked videos**: Retrieve all the YouTube videos you've liked and add them to your daily notes.
- **Sidebar list** : View, search and sort your liked videos in the right sidebar.
- **Add to daily note** : Add a liked video to your daily note by clicking on the video in the sidebar.
- **Batch update** (coming soon): Fetch all your liked videos and update the corresponding daily notes in one go.
- **Popular videos** (coming soon) : Retrieve and display the most popular videos.

It is inspired by the [obsidian-google-calendar](https://github.com/YukiGasai/obsidian-google-calendar) plugin.

## Requirements

To use this plugin, you need to set up a project in Google Cloud Console and enable the YouTube Data API v3. Follow the steps below to set it up:

1. **Download the Plugin**: Go to the Obsidian community plugins page and search for "Geulo".
2. **Enable the Plugin**: In Obsidian, navigate to Settings > Community plugins and toggle the Geulo plugin on.
3. **Set Up API Credentials**: Follow the steps in the "Setting up Google Cloud Console and YouTube Data API v3" section to obtain your credentials.

### Setting up Google Cloud Console and YouTube Data API v3

To use this plugin, you need to set up a project in Google Cloud Console and enable the YouTube Data API v3. Follow the steps below to set it up:

#### 1. Create a Project

* Go to Google Cloud Console.
* Click on the project dropdown and select "New Project".
* Enter a project name and click "Create".

#### 2. Enable YouTube Data API v3

* Navigate to API & Services > Library.
* Search for YouTube Data API v3 and click on it.
* Click "Enable".

#### 3. Create Credentials

* Go to API & Services > Credentials.
* Click on Create Credentials and select OAuth client ID.
* Configure the consent screen if prompted.
* Choose Web application and enter a name.
* In Authorized JavaScript origins, add `http://127.0.0.1:42813`.
* In Authorized redirect URIs, add `http://127.0.0.1:42813/callback`.
* Click "Create" and copy the Client ID and Client secret.

#### 4. Enter Credentials in Plugin

* Open Obsidian and go to the settings of the YouTube Liked Videos plugin.
* Enter your Client ID and Client secret in the respective fields.
* Click "Login" to login to your Google account.

### Troubleshooting

If you encounter any issues, consider the following steps:
1. **Credentials**: Double-check that your Client ID and Client secret are correctly entered in the plugin settings.
2. **Authorized URIs**: Verify that http://127.0.0.1:42813 is listed in the Authorized JavaScript origins and http://127.0.0.1:42813/callback in the Authorized redirect URIs.
3. If granting permission to your google project fails, check if there are multiple window/tabs for login process opened. If so, close all of them and try again.



%% README_END %%