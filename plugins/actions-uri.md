---
aliases:
- Actions URI
author:
- '[[authors/czottmann|Carlo Zottmann]]'
categories: []
description: Adds additional `x-callback-url` endpoints to the app for common actions
  — it's a clean, super-charged addition to Obsidian URI.
downloads: 51740
mobile: true
number: 634
stars: 140
title: Actions URI
type: plugin
updated: '2024-10-09T17:19:14'
url: https://github.com/czottmann/obsidian-actions-uri
version: 1.6.5
---

%% README_START %%

<img src="https://raw.githubusercontent.com/czottmann/obsidian-actions-uri/main/readme-assets/actions-uri-128.png" align="left" alt="Plugin logo thingie: an app icon, a two-way communications icon, a note icon">

# Actions URI

This plugin adds additional `x-callback-url` endpoints to [Obsidian](https://obsidian.md) for common actions — it's a clean, super-charged addition to the built-in [Obsidian URIs](https://help.obsidian.md/Advanced+topics/Using+obsidian+URI#Using+Obsidian+URIs), for working with [daily notes, notes, getting search results](https://czottmann.github.io/obsidian-actions-uri/routes/) etc.

## Documentation

For information about available features and routes please see the [documentation](https://czottmann.github.io/obsidian-actions-uri/).

Bug reports and feature requests are welcome, feel free to [open an issue](https://github.com/czottmann/obsidian-actions-uri/issues) here on GitHub. For discussions, please visit the [Plugin Forum](https://forum.actions.work/c/obsidian-actions-uri/6) ("Log in with GitHub" is enabled).


## Plugin Project Status

![GitHub release (latest by date)](https://img.shields.io/github/v/release/czottmann/obsidian-actions-uri?label=current+release&color=09f)
![Maturity: Stable](https://img.shields.io/badge/maturity-stable-09f)
![Development: Active](https://img.shields.io/badge/development-active-09f)
![Support: Active](https://img.shields.io/badge/support-active-09f)

(Please see Don McCurdy's post ["Healthy expectations in open source"](https://www.donmccurdy.com/2023/07/03/expectations-in-open-source/) for information about the different statuses.)


## Installation

1. Search for "Actions URI" in Obsidian's community plugins browser. ([This link should bring it up.](https://obsidian.md/plugins?id=zottmann))
2. Install it.
3. Enable the plugin in your Obsidian settings under "Community plugins".

That's it.


## Installation via <abbr title="Beta Reviewers Auto-update Tester">BRAT</abbr> (for pre-releases or betas)

1. Install [BRAT](https://github.com/TfTHacker/obsidian42-brat).
2. Add "Actions URI" to BRAT:
    1. Open "Obsidian42 - BRAT" via Settings → Community Plugins
    2. Click "Add Beta plugin"
    3. Use the repository address `czottmann/obsidian-actions-uri`
3. Enable "Actions URI" under Settings → Options → Community Plugins


## Development

Clone the repository, run `pnpm install` OR `npm install` to install the dependencies.  Afterwards, run `pnpm dev` OR `npm run dev` to compile and have it watch for file changes.


## Author

Carlo Zottmann, <carlo@zottmann.dev>, https://c.zottmann.dev, https://github.com/czottmann


## Projects using Actions URI

- [Actions for Obsidian](https://obsidian.actions.work/): Useful new Obsidian actions for the Shortcuts app on macOS and iOS, bridging the gap between your notes and your workflows.

Want to see your project here? Drop me a line! (See "Author" section.)


## Thanks to …

- the [obsidian-tasks](https://github.com/obsidian-tasks-group/obsidian-tasks) crew for the "starter templates" for the GitHub Action workflow and the handy `release.sh` script


## License

MIT, see [LICENSE.md](LICENSE.md).


%% README_END %%