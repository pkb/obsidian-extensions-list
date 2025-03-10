---
aliases:
- Hill Charts
author:
- '[[authors/stufro|stufro]]'
categories: []
description: Add Hill Charts to your notes.
downloads: 2027
mobile: true
number: 1344
stars: 10
title: Hill Charts
type: plugin
updated: '2024-03-05T00:53:46'
url: https://github.com/stufro/obsidian-hill-charts
version: 0.2.0
---

%% README_START %%

# Obsidian Hill Charts
<a href="https://www.buymeacoffee.com/stuartfrosg" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="20" width="85"></a>
[![GitHub license](https://img.shields.io/github/license/stufro/obsidian-hill-charts)](https://github.com/stufro/obsidian-hill-charts/blob/main/LICENSE.txt)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/stufro/obsidian-hill-charts)
![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22hill-charts%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

An Obsidian plugin for adding hill charts to your notes.

- Create hill charts inline by writing a tiny bit of YAML.
- Customizable styles and sizes
- [What is a hill chart?](https://www.hillchart.co/blog/hill-chart-guide/)

![](https://raw.githubusercontent.com/stufro/obsidian-hill-charts/HEAD/obsidian-hill-charts.png)

## Installation
Please install via the regular Community Plugins setting tab within Obsidian.

## Usage
Once installed, you can define a hillchart in a code block like this:

```
```hillchart
points:
  - position: 30
    text: Admin Dashboard
  - position: 85
    text: User Auth
  - position: 65
    text: Subscriptions
 ```
```

There are 5 available options you can pass to each point:
```
- position: 30
  text: Admin Dashboard
  color: "#fb3590"
  size: 15
  opacity: 0.5
```

And you can optionally set the width and height of a hillchart like this:
```
points:
  - position: 10
width: 600
height: 150
```

The default width & height, plus the size and opacity of each point can be configured in the plugin settings.

## Contributing
You can follow the [Obsidian instructions](https://docs.obsidian.md/Plugins/Getting+started/Build+a+plugin) for setting up a plugin in a development vault, swapping the git clone command for this repo instead of the sample plugin.

If you want to fix a bug or add a new feature, please:

1. [Fork the project](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks).
2. Create a feature branch (`git checkout -b my-new-feature`).
3. Make your changes. Include tests for your changes, otherwise I may accidentally break them in the future.
4. Run the tests with the `npm exec jest` command. Make sure that they are still passing.
5. Write [descriptive commit messages](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).
6. Push the branch to GitHub (`git push origin my-new-feature`).
7. [Create a Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) and submit it to be merged with the main branch.

### Building locally
```
npm run dev # this will watch for code changes and recompile
```

### Testing
```
npm exec jest
```

### Releasing
```
npm version [patch|minor|major]
git push origin master --tags
```

## Credits
- https://github.com/nagi1/hill-chart


%% README_END %%