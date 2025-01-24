---
aliases:
- Another Simple Todoist Sync
author:
- '[[authors/eudennis|eudennis]]'
categories:
- '[[categories/Integration|Integration]]'
description: Sync tasks with Todoist from within your notes.
downloads: 485
mobile: true
number: 1959
stars: 21
title: Another Simple Todoist Sync
type: plugin
updated: '2025-01-11T22:50:20'
url: https://github.com/eudennis/ultimate-todoist-sync-for-obsidian-experiment
version: 0.4.11
---

%% README_START %%

# Another Simple Todoist Sync for Obsidian (BETA)

Create, edit and delete tasks from within Obsidian.md to your Todoist.

> [!WARNING]
> This is a fork from the [Ultimate Todoist Sync plugin for Obsidian](https://github.com/HeroBlackInk/ultimate-todoist-sync-for-obsidian). I'm still working on fixing some things, but the main feature should be working. I'm considering this feature a beta. Feel free to contribute.
>
> _Some features works only Todoist -> Obsidian, others by-directional. Find more details on the feature table below._

![Alt Text](https://raw.githubusercontent.com/eudennis/ultimate-todoist-sync-for-obsidian-experiment/HEAD//attachment/new_demo.gif)

<details>

<summary>Table of detailed features supported</summary>

| Feature                  | from Obsidian to Todoist | from Todoist to Obsidian |
| ------------------------ | ------------------------ | ------------------------ |
| Add task                 | ✅                       | 🔜                       |
| Delete task              | ✅                       | 🔜                       |
| Modify task content      | ✅                       | ✅                       |
| Modify task due date     | ✅                       | ✅                       |
| Modify task due time     | ✅                       | 🔜                       |
| Modify task description  | 🔜                       | 🔜                       |
| Modify task labels/tags  | ✅                       | 🔜                       |
| Mark task as completed   | ✅                       | ✅                       |
| Mark task as uncompleted | ✅                       | ✅                       |
| Modify project           | 🔜                       | 🔜                       |
| Modify section           | 🔜                       | 🔜                       |
| Modify priority [1]      | ✅                       | 🔜                       |
| Add reminder             | ✅                       | ✅                       |
| Add duration             | ✅                       | 🔜                       |
| Move tasks between files | 🔜                       | 🔜                       |
| Added-at date            | 🔜                       | 🔜                       |
| Completed-at date        | 🔜                       | 🔜                       |
| Task notes [2]           | 🔜                       | ✅                       |
| Optional app link        |                          |                          |

-   [1] Task priority only support one-way synchronization
-   [2] Task notes/comments only support one-way synchronization from Todoist to Obsidian.

</details>

## Installation

> [!WARNING]
> The plugin will require the _Todoist API token_, which can be found on your `Settings > Integrations > Developer` ([direct link here](https://app.todoist.com/app/settings/integrations/developer))

### From within Obsidian

1. Open Obsidian's `Community plugins` tab, within the `Settings` window
2. Click `Browse` and search for `Another Todoist Sync Plugin`
3. Back to `Community plugins`, find the `Installed Plugins` section and activate the `Another Todoist Sync Plugin`

> [!NOTE]
> You can update the plugin following the same procedure, clicking Update instead of Install

### Manually

1. Download the latest release of the plugin from the [Releases](https://github.com/eudennis/ultimate-todoist-sync-for-obsidian-experiment/releases) page.
2. Extract the downloaded zip file and copy the entire folder to your Obsidian plugins directory.
3. Enable the plugin in the Obsidian settings.

## Configuration

1. Open Obsidian's `Settings` window
2. Select the `Community plugins` tab on the left
3. Under `Installed plugins`, click the gear icon next to the `Another Simple Todoist Sync` plugin
4. Enter your Todoist API token

## Settings

1. Automatic synchronization interval time
   The time interval for automatic synchronization is set to 300 seconds by default, which means it runs every 5 minutes. You can modify it yourself.
2. Default project
   New tasks will be added to the default project, and you can change the default project in the settings.
3. Sync Comments
   By default, comments on tasks are added below your task on Obsidian. With this enabled, it won't sync comments.
4. Custom Sync Tag
   By default, sync new task with `#tdsync`, but you can change to `#todoist`
5. Alternative Keywords
   When enabled, accept new keywords for date, due time and duration (_@,$ and &_).

## Usage

### Task format

| Syntax            | Description                                                                                                                                                                                                       | Example                                        |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| #tdsync           | Tasks marked with `#tdsync`[4] will be added to Todoist, while tasks without the `#tdsync` tag will not be processed. If you have enabled Full vault sync in the settings, `#tdsync` will be added automatically. | `- [ ] task #tdsync`                           |
| 📅YYYY-MM-DD      | The date format is 📅YYYY-MM-DD, indicating the due date of a task.                                                                                                                                               | `- [ ] task content 📅2025-02-05 #todoist` [1] |
| #tag              | Note that all tags without a project of the same name are treated as normal tags                                                                                                                                  | `- [ ] task #tagA #tagB #tagC #todoist`        |
| `!!<number>`      | The priority of the task between 1 and 4. [2]                                                                                                                                                                     | `- [ ] task !!1 #todoist`                      |
| ⏰HH:MM           | This sets the time of the task. If none is given, the default is 08:00                                                                                                                                            | `- [ ] task ⏰23:59`[3]                        |
| ⏳MMmin           | This sets the duration of the task                                                                                                                                                                                | `- [ ] task ⏳30min`[[5]]                      |
| ///<section_name> | This adds the task to a section with <section_name>                                                                                                                                                               | `- [ ] task ///section_name`[7]                |

<!-- | #projectTag       | New tasks will be added to the default project (e.g: inbox), and you can change the default project in the settings or use a tag with the same name to specify a particular project. | `- [ ] taskA #todoist` will be added to inbox.<br>`- [ ] taskB #tag #testProject #todoist` will be added to testProject.| -->

<details>
<summary>Usage footnotes</summary>

-   [1] Supports the following characters/emojis: 📅, 📆, 🗓, 🗓️, @ [6]
-   [2] It's follow the same pattern of p1, p2, p3 and p4, p1 being the highest priority.
-   [3] Supports the following characters/emojis: ⏰, ⏲, $ [6]
-   [4] On the original plugin, this tag was `#todoist`, but on this fork was changed to avoid conflicts.
-   [5] Supports the following characters/emojis: ⏳, & [6]
-   [6] Alternative characters are enabled via "Alternative Keywords" on plugin settings page
-   [7] If the section if removed from the task content, it won't update in Todoist (yet)

</details>

### Set a default project for each file separately

The default project in the setting applies to all files. You can set a separate default project for each file using the comand `Set default project for Todoist task in the current file` from the command menu.

<img src="https://raw.githubusercontent.com/eudennis/ultimate-todoist-sync-for-obsidian-experiment/HEAD//attachment/command-set-default-project-for-file.png" width="500">
<img src="https://raw.githubusercontent.com/eudennis/ultimate-todoist-sync-for-obsidian-experiment/HEAD//attachment/default-project-for-file-modal.png" width="500">

## Disclaimer

This plugin is for learning purposes only. The author and contributors makes no representations or warranties of any kind, express or implied, about the accuracy, completeness, or usefulness of this plugin and shall not be liable for any losses or damages resulting from the use of this plugin.

The author shall not be responsible for any loss or damage, including but not limited to data loss, system crashes, computer damage, or any other form of loss arising from software problems or errors. Users assume all risks and are solely responsible for any consequences resulting from the use of this product.

By using this plugin, you agree to be bound by all the terms of this disclaimer. If you have any questions, please contact the author.

## Contributing

Contributions are welcome! If you'd like to contribute to the plugin, please feel free to submit a pull request.

## License

This plugin is released under the [GNU GPLv3 License](/LICENSE.md).


%% README_END %%