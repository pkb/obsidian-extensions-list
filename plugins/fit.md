---
aliases:
- Fit
author:
- joshuakto
author_page: https://github.com/joshuakto
categories: []
description: Minimalist File gIT (FIT) to sync your files across mobile and desktop
  devices using GitHub.
downloads: 11516
funding_page: https://www.buymeacoffee.com/joshuakto
mobile: true
number: 1518
title: Fit
type: plugin
updated: '2024-06-22T12:22:42'
url: https://github.com/joshuakto/fit
version: 1.1.1
---

%% README_START %%

# FIT			
![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22fit%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

Sync your files across mobile and desktop devices with one click.

## Features
- **Universally supported**: sync your vault across multiple devices, support both mobile and desktop
- Auto sync is now available 🎉 
- One-click to sync your vault.
- Conflict resolution: Stores conflicting changes from remote in the local _fit folder so you can resolve conflicts after sync
- Guided setup: **Intuitive** settings, easy to configure even if you are new to GitHub
- Works with existing vaults or repos

**Note:** This plugin is still in alpha, please backup your vault before using this plugin.


# Quick demo


![Kapture 2024-03-15 at 17 37 07](https://github.com/joshuakto/fit/assets/34743132/27ea39b7-f54d-4c95-bf40-41972a29c26d)



## Setup
1. Create a personal access token (refers to [Github: creating a personal access token](https://docs.github.com/en/enterprise-server@3.9/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token))
2. Once the personal access token is filled in, you can authenticate the user. The GitHub username, list of repositories, and branches will auto-populate.
3. Select a repo and branch and you are ready to sync.
<img width="1100" alt="Screenshot 2024-03-13 at 9 49 33 AM" src="https://github.com/joshuakto/fit/assets/34743132/3ab3665a-5a78-468c-a936-fcf5fd2a8774">

## Notes about the first sync
- Repo cannot be empty (Select 'Add a README file' if you are creating a new repo)
- It is advised to use a new repo for syncing an existing vault, to minimize the chance of file name conflict on the first sync
- If your existing vault or repo is large, the initial sync would take longer and require a good internet connection

## Roadmap
1. Improve user notification
   - allow user to opt in to get list of file changes in Notice
2. Enable integration of other git tools (e.g. gitlab, gitea)

## Relevant plugins
There are other community plugins with more advanced git features, if you need features such as branching of your repo, [Git](https://github.com/denolehov/obsidian-git) is a nice plugin to check out.

There are also other plugins for synchronizing changes such as [Git integration](https://github.com/noradroid/obsidian-git-integration), [GitHub sync](https://github.com/kevinmkchin/Obsidian-GitHub-Sync), and [YAOS](https://github.com/mahyarmirrashed/yaos). However, they do not support mobile yet as of writing this plugin.

[!["Buy Me A Coffee"](https://cdn.buymeacoffee.com/buttons/v2/default-blue.png)](https://www.buymeacoffee.com/joshuakto)

## Acknowledgements
 - This plugin used [Obsidian Sample Plugin](https://github.com/obsidianmd/obsidian-sample-plugin) as a template.
 - This plugin uses [Octokit](https://github.com/octokit/core.js/) to interface with GitHub rest api across devices.

<!--- 
## Releasing new releases

- Update your `manifest.json` with your new version number, such as `1.0.1`, and the minimum Obsidian version required for your latest release.
- Update your `versions.json` file with `"new-plugin-version": "minimum-obsidian-version"` so older versions of Obsidian can download an older version of your plugin that's compatible.
- Create new GitHub release using your new version number as the "Tag version". Use the exact version number, don't include a prefix `v`. See here for an example: https://github.com/obsidianmd/obsidian-sample-plugin/releases
- Upload the files `manifest.json`, `main.js`, `styles.css` as binary attachments. Note: The manifest.json file must be in two places, first the root path of your repository and also in the release.
- Publish the release.

> You can simplify the version bump process by running `npm version patch`, `npm version minor` or `npm version major` after updating `minAppVersion` manually in `manifest.json`.
> The command will bump version in `manifest.json` and `package.json`, and add the entry for the new version to `versions.json`

## Adding your plugin to the community plugin list

- Check https://github.com/obsidianmd/obsidian-releases/blob/master/plugin-review.md
- Publish an initial version.
- Make sure you have a `README.md` file in the root of your repo.
- Make a pull request at https://github.com/obsidianmd/obsidian-releases to add your plugin.
  
## Manually installing the plugin

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.
--->


%% README_END %%