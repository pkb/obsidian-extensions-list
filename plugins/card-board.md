---
aliases:
- CardBoard
author:
- '[[roovo|roovo]]'
categories: []
description: Display markdown tasks on kanban style boards.
downloads: 104639
mobile: true
number: 348
stars: 516
title: CardBoard
type: plugin
updated: '2024-02-25T17:26:33'
url: https://github.com/roovo/obsidian-card-board
version: 0.7.9
---

%% README_START %%

# Obsidian CardBoard Plugin

![License](https://img.shields.io/github/license/roovo/obsidian-card-board)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/roovo/obsidian-card-board?style=flat-square)
![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22card-board%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)


An [Obsidian](https://obsidian.md/) plugin to make working with tasks a pleasure
(hopefully anyway).

- Uses regular tasks/subtasks wherever they are in your vault.
- Shows them on kanban style boards.
- Two column types supported (any combination can be on a single board):
  - Date based (with daily/periodic notes support).
  - Tag based (use `#tags` to define columns).

## New
- No new features: I have split out some of the internal workings in preparation
  for drag and drop - hopefully managed this without introducing any bugs or
  performance issues.

## Installation
Please install via the regular Community Plugins setting tab within Obsidian.

![date based board screenshot](https://raw.githubusercontent.com/roovo/obsidian-card-board/HEAD//images/dateBoard.png) plugin as this
will allow you to style tags on your markdown pages as well as in CardBoard.

If you would like to "roll your own", you can using a CSS snippet containing something
along the lines of:

```css
.card-board-view a.tag[href="#foo/bar"] {
  background-color: HotPink;
  color: DimGrey;
}
```

This will style the tag `#foo/bar` wherever it appears in the CardBoard view with your favorite
color for foo/bars, which just has to be HotPink :)

### Customising Card Highlight Color
By default cards with due dates will have a colored bar on their left hand side
to give a visual indication of when they are due.  These colours are dependent on
the theme you are using.  There are two way to over-ride this, both of which require
the use of [css snippets](https://help.obsidian.md/Extending+Obsidian/CSS+snippets).

If you wish to stick with the due date based behaviour, but would like to choose the
colors, you can use a snippet along these lines:

```css
/* overdue */
.card-board-view .card-board-card-highlight-area.critical {
  background-color: red;
}

/* due today */
.card-board-view .card-board-card-highlight-area.important {
  background-color: orange;
}

/* due after today */
.card-board-view .card-board-card-highlight-area.good {
  background-color: green;
}
```

If you wish to set the color based on tags, then you can use a snippet such as:

```css
.card-board-card[data-tags~=status-doing] .card-board-card-highlight-area {
  background-color: yellow;
}
```

Which will set the color to yellow for all cards with a tag `#status/doing`. This will
override any date based highlighting.  If you use nested tags, you will need to replace
the `/` character with a `-` (as in the example above).  If the card has multiple tags
which you have set different colors for, the last one read from your snippets will take
priority.  Tag based colors will be applied for tags even if the tags are [hidden](#hiding-tags).

## Boards
Boards are simply a collection of columns, which are defined either by:
  - Dates (with daily/periodic notes support).
  - Tags (uses `#tags` to define the column).

### Adding boards

![add new board](https://raw.githubusercontent.com/roovo/obsidian-card-board/HEAD//images/addNewBoard.png) the top of any completed column you have on your board when you mark
it as complete.  CardBoard uses this time or date so it knows which are the most
recently completed tasks so they can be shown at the top of the column.

### Dataview Plugin

```
- [ ] todo in Dataview format [due:: 2021-10-30] [completion:: 2021-10-29]
```

Will be read as a task with a due date of 30th Oct 2021 which was completed a day early.

Cardboard will honour the task related settings in Dataview, so if you set Dataview
to use emoji completion or a different "completion" string (such as "done") then
CardBoard will mirror this.

### Tasks Plugin

```
- [ ] todo in Tasks format 📅 2021-10-30 ✅ 2021-10-29
```

Will be read as a task with a due date of 30th Oct 2021 which was completed a day early.

#### Recurring Tasks
**CardBoard does not understand recurring tasks**, even if you have set it up to use Tasks
format for marking tasks as complete.   Checking off a recurring task from
the CardBoard board view will add the completion date in Tasks format but **will
not generate a new instance of the recurring task**.

To get the correct behavior for recurring tasks, click the edit icon on the card
to go to the file where the task is written, and then use the
*"Tasks: Toggle Done"* command or click the checkbox from there.

## Scaling Board Text and Column Sizes
Use the following css snippet to customize these:

```css
.card-board-view {
  font-size: 1em;
}

.card-board-view .card-board-column {
  width: 20em;
}
```

You can alter the general size of the contents of the cards by changng the font-size,
and/or set the width of the columns by changing the width setting.


## Limitations
- Might not work that great on large vaults (as it parses all markdown files at startup).
  If you use folders in your vault and there are folders which you know will never contain
  any tasks you wish to use with CardBoard you can configure CardBoard to ignore these.
- Might not work that great on large markdown files (as it parses all markdown files, and doesn't use
  any form of cache).  If you know any large markdown files will never contain tasks you
  wish to use with Cardboard, you can add them to the ignore list in settings.
- Might not be great on mobile (see previous, plus I haven't put any particular effort into
  making the interface mobile friendly - yet).

## Alternatives
If the way that this works isn't for for you, there are plenty of other fabulous
plugins you can use for task management in Obsidian, e.g.
[Checklist](https://github.com/delashum/obsidian-checklist-plugin),
[Kanban](https://github.com/mgmeyers/obsidian-kanban),
[Reminder](https://github.com/uphy/obsidian-reminder),
[Tasks](https://github.com/schemar/obsidian-tasks),
[Projects](https://github.com/marcusolsson/obsidian-projects), as well as the
[Tasks Calendar snippet](https://github.com/702573N/Obsidian-Tasks-Calendar).
There are others too, see the wonderful
[Obsidian Plugin Stats site](https://obsidian-plugin-stats.vercel.app).


## Contributing
I am working on this myself for now; it's my do-some-coding-when-I-have-some-time
project so I am not accepting pull requests.  However, if you want to mess around
with the code then see [contributing doc](CONTRIBUTING.md) for more info on getting
a dev environment set up and running.

If you have any thoughts, ideas, bugs n stuff:

- **Bugs/suggestions/feature requests** - [github issues](https://github.com/roovo/obsidian-card-board/issues).
- **What's being worked on and up next?** - [CardBoard Dev](https://github.com/users/roovo/projects/4)
- **Questions/discussions** - [github discussions](https://github.com/roovo/obsidian-card-board/discussions)



%% README_END %%