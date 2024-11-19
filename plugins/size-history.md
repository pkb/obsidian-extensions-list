---
aliases:
- Size History
author:
- Piotr Borowski
author_page: https://github.com/pbrw
categories: []
description: Admire the growth of your Obsidian vault with a "hand-drawn" chart.
downloads: 3682
mobile: true
number: 1154
title: Size History
type: plugin
updated: '2023-08-31T03:24:25'
url: https://github.com/pbrw/obsidian-size-history
version: 1.0.0
---

%% README_START %%

# Obsidian Size History Plugin

![preview](https://raw.githubusercontent.com/pbrw/obsidian-size-history/HEAD/imgs/preview.png)

**Admire the growth of your Obsidian vault with a "hand-drawn" chart**

### How to use?

Install that plugin. A "line chart" icon :chart_with_upwards_trend: should appear in the panel on the left. Click it and modal with a chart will pop up.

### Details

Currently the only metric available is number of files in the vault. The changes are tracked down to days. Everything before the plugin installation is recreated by looking at the files creation time. Unfortunately, if you deleted some files, there is no information about that and it won't be visible on the chart. But it will be tracked from now on.

Plugin uses [chart.xkcd](https://github.com/timqian/chart.xkcd) to draw a chart. Plugin does not send anything over the internet.



%% README_END %%