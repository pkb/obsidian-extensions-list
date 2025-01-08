---
aliases:
- DocBase (Unofficial)
author:
- '[[authors/kuvanov-2|yurikuvanov]]'
categories: []
description: Pull and push notes to DocBase
downloads: 76
mobile: true
number: 1774
stars: 0
title: DocBase (Unofficial)
type: plugin
updated: '2024-07-06T05:32:17'
url: https://github.com/kuvanov-2/obsidian-docbase
version: 1.0.0
---

%% README_START %%

# DocBase unoffical plugin for Obsidian

This is a plugin for [Obsidian](https://obsidian.md) that allows you to pull and push notes from [DocBase](https://docbase.io/).

## Usage

### Configuration

1. Get your API token from [DocBase](https://help.docbase.io/posts/45703).
2. Open the plugin settings and paste your API token.
3. Paste your team domain (e.g. `your-team` in `https://your-team.docbase.io`).

### Pulling notes

1. Create new note in Obsidian.
2. Add the following property to the note:
   ```yaml
   docbase_note_id: 12345678
   ```
3. Open the command palette and run the "Pull this note from DocBase" command.
4. Title, tags, draft status, and content of the note will be inserted or updated with the content of the note in DocBase.

### Pushing notes

Caution: Pushing notes fuction is only available for the notes that are already posted to DocBase. In other words, you can update the content of the DocBase note with the content of the Obsidian note.

1. Before pushing a note, pulling the note from DocBase is highly recommended. Because pushing notes will overwrite the content of the DocBase note including the title, tags, and draft status.
2. Open the command palette and run the "Push to DocBase" command.

## Not yet implemented

- Handling multiple DocBase teams.

<!--
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

## How to use

- Clone this repo.
- Make sure your NodeJS is at least v16 (`node --version`).
- `npm i` or `yarn` to install dependencies.
- `npm run dev` to start compilation in watch mode.

## Manually installing the plugin

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.

## Improve code quality with eslint (optional)
- [ESLint](https://eslint.org/) is a tool that analyzes your code to quickly find problems. You can run ESLint against your plugin to find common bugs and ways to improve your code.
- To use eslint with this project, make sure to install eslint from terminal:
  - `npm install -g eslint`
- To use eslint to analyze this project use this command:
  - `eslint main.ts`
  - eslint will then create a report with suggestions for code improvement by file and line number.
- If your source code is in a folder, such as `src`, you can use eslint with this command to analyze all files in that folder:
  - `eslint .\src\`

## Funding URL

You can include funding URLs where people who use your plugin can financially support it.

The simple way is to set the `fundingUrl` field to your link in your `manifest.json` file:

```json
{
    "fundingUrl": "https://buymeacoffee.com"
}
```

If you have multiple URLs, you can also do:

```json
{
    "fundingUrl": {
        "Buy Me a Coffee": "https://buymeacoffee.com",
        "GitHub Sponsor": "https://github.com/sponsors",
        "Patreon": "https://www.patreon.com/"
    }
}
```

## API Documentation

See https://github.com/obsidianmd/obsidian-api
-->


%% README_END %%