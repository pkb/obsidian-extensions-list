---
aliases:
- Meeting notes
author:
- '[[authors/TimHi|Tim Hiller]]'
categories: []
description: Plugin to automatically create a note if a new file is created in a meeting
  folder.
downloads: 6750
mobile: true
number: 577
stars: 25
title: Meeting notes
type: plugin
updated: '2024-09-13T06:46:02'
url: https://github.com/TimHi/obsidian-meeting-notes
version: 1.0.6
---

%% README_START %%

# Obsidian Meeting Note Plugin

After being frustrated of creating the same structure for every meeting, copy pasting content I decided to create this plugin.

## Setup  

By default the plugin uses the name `"MeetingNotes"` as the `Meeting Folder location`. You can change it in the settings to any name you like. The content of the created note can be changed through the settings. A default template is located in `src/util/constants.ts`.
`{{Date}}` can be used to get the current date.

## Demo  

When creating a file in the specified `Meeting Folder location`the plugin automatically fills it with a template for consistent meeting notes.

![example image](https://github.com/TimHi/obsidian-meeting-notes/blob/master/img/demo.png)

## Development

See [obsidian sample plugin](https://github.com/obsidianmd/obsidian-sample-plugin#first-time-developing-plugins) for detailed instructions on setting up the plugin and making changes.

## Outlook

Some things I want to add:  

- Multiple names for the meeting folder
- ...?

## Contributing

Bug reports and pull requests are welcome on [GitHub](https://github.com/TimHi/obsidian-meeting-notes). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/TimHi/obsidian-meeting-notes/blob/master/CODE_OF_CONDUCT.md).

## Code of Conduct

Everyone interacting in the Meeting notes plugin project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/TimHi/obsidian-meeting-notes/blob/master/CODE_OF_CONDUCT.md).


%% README_END %%