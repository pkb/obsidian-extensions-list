---
aliases:
- Financial Doc
author:
- '[[authors/studiowebux|Studio Webux]]'
categories: []
description: Financial Documentation and Tracking using CSV format and Chart.js directly
  in Obsidian
downloads: 5418
mobile: true
number: 968
stars: 34
title: Financial Doc
type: plugin
updated: '2024-02-26T01:07:10'
url: https://github.com/studiowebux/obsidian-findoc
version: 0.7.2
---

%% README_START %%

<div align="center">

<img src="https://raw.githubusercontent.com/studiowebux/obsidian-findoc/HEAD/docs/findoc-256.png" alt="Findoc Logo" width="256">

<h2>Yet Another Tool - Fin Doc</h2>

<p>Obsidian.md plugin to read and edit a CSV file, then use it as a data source to generate charts.</p>
<p>I invite you to create PR and Issues with ideas, improvements and etc.</p>

<p align="center">
  <a href="https://github.com/yet-another-tool/obsidian-findoc/issues">Report Bug</a>
  ·
  <a href="https://github.com/yet-another-tool/obsidian-findoc/issues">Request Feature</a>
</p>
</div>

---

## About

-   Open and Edit CSV Files in Obsidian
-   Generate Charts using the CSV File directly in Obsidian and a Custom Code Block
-   Generate Report using the CSV data.
-   Configurable using Few Settings
-   Support Desktop and Mobile (tested on Windows, MacOS and Iphone)
-   Using [Chart.js](https://www.chartjs.org)
-   Line chart, Pie chart and Radar chart
-   Plugin for [Obsidian.md](https://obsidian.md)
-   Evaluate mathematic expressions directly in the _value_ column, powered by [mathjs](https://mathjs.org)

---

## Installation and Usage

[Full Documentation is available here](https://studiowebux.github.io/obsidian-plugins-docs/docs/category/plugin-financial-doc)

---

## Screenshots

[See Screenshots here](https://studiowebux.github.io/obsidian-plugins-docs/docs/findoc/screenshots/Demo)

---

## Changelog

### TODO

-   [-] Copy paste is broken while editing a CSV File (not able to reproduce)
-   [] Improve the setting tab (edit, add and remove models)
-   [] Add more functions to process and analyze the data
-   [POC] Add reports in table view

### V0.7.2 - Beta - 2024-02-25

- Fixed chart size, configurable in the `style.css`

See [CHANGELOG](./CHANGELOG)

---

### Releases and Github Actions

```bash
git tag -a X.Y.Z -m "Version X.Y.Z"
git push origin tags/X.Y.Z
```

---

## Contributing

1. Create a Feature Branch
2. Commit your changes
3. Push your changes
4. Create a PR

<details>
<summary>Working with your local branch</summary>

**Branch Checkout:**

```bash
git checkout -b <feature|fix|release|chore|hotfix>/prefix-name
```

> Your branch name must starts with [feature|fix|release|chore|hotfix] and use a / before the name;
> Use hyphens as separator;
> The prefix correspond to your Kanban tool id (e.g. abc-123)

**Keep your branch synced:**

```bash
git fetch origin
git rebase origin/master
```

**Commit your changes:**

```bash
git add .
git commit -m "<feat|ci|test|docs|build|chore|style|refactor|perf|BREAKING CHANGE>: commit message"
```

> Follow this convention commitlint for your commit message structure

**Push your changes:**

```bash
git push origin <feature|fix|release|chore|hotfix>/prefix-name
```

**Examples:**

```bash
git checkout -b release/v1.15.5
git checkout -b feature/abc-123-something-awesome
git checkout -b hotfix/abc-432-something-bad-to-fix
```

```bash
git commit -m "docs: added awesome documentation"
git commit -m "feat: added new feature"
git commit -m "test: added tests"
```

</details>

### Local Development

```bash
npm install
npm run build
```

## License

Distributed under the MIT License. See LICENSE for more information.

## Contact

-   Tommy Gingras @ tommy@studiowebux.com | Studio Webux

<div>
<b> | </b>
<a href="https://www.buymeacoffee.com/studiowebux" target="_blank"
      ><img
        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
        alt="Buy Me A Coffee"
        style="height: 30px !important; width: 105px !important"
/></a>
<b> | </b>
<a href="https://webuxlab.com" target="_blank"
      ><img
        src="https://webuxlab-static.s3.ca-central-1.amazonaws.com/logoAmpoule.svg"
        alt="Webux Logo"
        style="height: 30px !important"
/> Webux Lab</a>
<b> | </b>
</div>


%% README_END %%