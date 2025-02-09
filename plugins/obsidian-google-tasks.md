---
aliases:
- Google Tasks
author:
- '[[authors/YukiGasai|YukiGasai]]'
categories:
- '[[categories/Integration|Integration]]'
- '[[categories/Task management|Task management]]'
description: Interact with your Google Tasks from Inside Obsidian
downloads: 14303
mobile: true
number: 487
stars: 145
title: Google Tasks
type: plugin
updated: '2023-03-26T06:50:57'
url: https://github.com/YukiGasai/obsidian-google-tasks
version: 1.5.2
---

%% README_START %%

# Obsidian Google Tasks

Manage your Google Tasks from inside Obsidian


# Please make sure to install the latest version of this plugin (at least 1.5.0) to prevent a potential corruption of your attachments (Sorry 🙇‍♂️) Thank you to @carlosrusso. 


## Features

-   List tasks
-   Create tasks
-   Edit tasks (Will create a new task and delete the old one)
-   Mark as done / todo
-   Delete done tasks

> Working with specific time is not supported by the Google API :(

## Installation

-   Download google-tasks from the latest [release](https://github.com/YukiGasai/obsidian-google-tasks/releases/)
-   Extract zip into `.obsidian/plugins` folder
-   Restart Obsidian
-   Activate inside the obsidian settings page
-   [Create Google Cloud Project](https://console.cloud.google.com/projectcreate?)
-   [Activate Google Tasks API](https://console.cloud.google.com/marketplace/product/google/tasks.googleapis.com?q=search&referrer=search&project=iron-core-327018)
-   [Configure OAUTH screen](https://console.cloud.google.com/apis/credentials/consent?)
    -   Select Extern
    -   Fill necessary inputs
    -   Add your email as tester if using "@gmail" add gmail and googlemail
-   [Add API Token](https://console.cloud.google.com/apis/credentials)
-   [Add OAUTH client](https://console.cloud.google.com/apis/credentials/oauthclient)
    -   select Webclient
    -   add `http://127.0.0.1:42813` as Javascript origin
    -   add `http://127.0.0.1:42813/callback` as redirect URI
-   add the keys into the fields under the plugin settings
-   Press Login

### Using the plugin on Mobile (work around)

-   Login on a desktop device
-   Use the `Copy Google Refresh Token to Clipboard` command on that device
-   Install the plugin on the phone
-   Instead of `Login` paste the token from the desktop device into the Refresh token field on the phone

## Usage

### Google Task View

-   Open view by pressing the checkmark icon in the left sidebar
-   View will open and list your tasks
    -   Complete them by clicking the checkbox
    -   Edit them by long clicking the task
    -   Show and hide the todo and done list by pressing the title texts
    -   Force update the list by pressing on Google Tasks
    -   The list will check for changes in a set interval (changeable in settings)
    -   Press the plus button to create a new task
    -   Use the dropdown to switch between lists

### Commands

#### List Google Tasks

Shows a list of all undone tasks selecting one will complete the task

#### Create Google Tasks

Will open a popup to create a new task

#### Insert Google Tasks

Will insert a lost of all undone tasks into the current file. Checking the task inside the File will complete / incomplete it.


%% README_END %%