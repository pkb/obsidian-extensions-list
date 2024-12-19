---
aliases:
- Obsidian TODO | Text-based GTD
author:
- '[[authors/larslockefeer|Lars Lockefeer]]'
categories:
- '[[categories/Task management|Task management]]'
description: Text-based GTD in Obsidian. Collects all outstanding TODOs from your
  vault and presents them in lists Today, Scheduled, Inbox and Someday/Maybe.
downloads: 62355
mobile: true
number: 105
stars: 275
title: Obsidian TODO | Text-based GTD
type: plugin
updated: '2022-01-20T02:32:07'
url: https://github.com/larslockefeer/obsidian-plugin-todo
version: 0.2.7
---

%% README_START %%

## Obsidian TODO Plugin

Text-based GTD in Obsidian.

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/larslockefeer)

### Features
- Aggregates all outstanding TODOs in your vault and lists them in a single view
- Split out TODOs by type ("Today", "Scheduled", "Inbox" and "Someday/Maybe")
- Schedule a TODO for a specific date by adding a tag
- Mark a TODO as Someday/Maybe by adding a tag #someday
- Complete TODOs from the list view
- Quickly jump to the file in which a TODO is found from the list view
- Integrates with the Daily Notes plugin: TODOs without a due date will inherit the date of the daily note as due date

### Settings
**Date tag format**: Customise the format you use to add due dates to your tasks. Defaults to `#%date%`.

**Date format**: Customise the date format. Uses luxon under the hood. See [their documentation](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for supported tokens. Defaults to `yyyy-MM-dd`.

**Open files in a new leaf**: When enabled, files opened from within the plugin will open in a new leaf rather than replacing the currently opened file.

### Screenshots
![](https://raw.githubusercontent.com/larslockefeer/obsidian-plugin-todo/HEAD/assets/today.png)
![](https://raw.githubusercontent.com/larslockefeer/obsidian-plugin-todo/HEAD/assets/scheduled.png)
![](https://raw.githubusercontent.com/larslockefeer/obsidian-plugin-todo/HEAD/assets/inbox.png)
![](https://raw.githubusercontent.com/larslockefeer/obsidian-plugin-todo/HEAD/assets/someday.png)

### Roadmap
- [ ] Scroll to correct line in file when jumping from list view
- [ ] (Re)schedule TODOs from the list view
- [ ] Persist cache, on reopening only reindex files changed since Obsidian was closed
- [ ] Filter items list view by tags / freeform search
- [ ] Improve UI and themeability


%% README_END %%