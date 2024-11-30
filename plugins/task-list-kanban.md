---
aliases:
  - Task List Kanban
author:
  - "[[chrskerr|Chris Kerr]]"
categories:
  - "[[categories/Task management|Task management]]"
description: Organizes all of the tasks within your files into a kanban view. Reduce duplication of effort when managing and prioritising tasks by simply using the task format in your files to automatically appear in your Task List Kanban.
downloads: 5737
mobile: true
number: 1724
title: Task List Kanban
type: plugin
updated: 2024-09-01T16:09:35
url: https://github.com/chrskerr/task-list-kanban
version: 1.2.8
---

%% README_START %%

# Task List Kanban

The Task List Kanban is a free and open source Obsidian plugin that automatically imports all your 'tasks' within obsidian files into a kanban view. This plugin was created to reduce duplication of effort when managing and prioritising tasks. Any time you have a task that needs to be done, simply note it down using the 'task' format in an obsidian file, and it will automatically appear in your Task List Kanban.

By adding tags to your tasks using '#', you can allocate tasks to specific columns in your kanban, as well as add additional tags that you can use to filter. From the kanban view, you can easily move your tasks between columns, archive tasks, apply or change filters, and even jump straight to the file where the task sits. Any change made to a task from the kanban view will also update the task in its file, and visa versa.

![Image 3-6-2024 at 7 19 PM](https://github.com/chrskerr/task-list-kanban/assets/80379257/ddde01aa-3098-4cfc-8860-6af34f0ece57)


## How to use the Task List Kanban

### How to add a Task List Kanban within Obsidian

Right click on the folder in which you want your Task List Kanban to appear. Choose 'New kanban'. Your new Task List Kanban file has been created!

![Image 3-6-2024 at 7 21 PM](https://github.com/chrskerr/task-list-kanban/assets/80379257/fbe25c3f-824f-4feb-b1b3-5acbdf1c8901)


### Managing columns

Default kanban columns will be provided for you. You can either keep using these or set up your own, including change the number of columns in the kanban.

Select the settings icon in the top right corner of your kanban file. You will see the section 'Columns', here you can add/edit/remove columns as you like. Separate the column names with a ','.

You will be able to rename/add/remove these columns at anytime. However! Please think carefully when naming your columns, as any tasks you add to that column will be associated with the exact column name. This means that if you change a column name in the future, all the tasks associated with the old version of that column will end up in 'uncategorised'. These tasks are NOT automatically applied to the new naming of the column.


### Defining the folder scope of the kanban

I.e. Where should we try to find tasks for this Kanban?

Place the kanban in the folder in which you are listing the tasks that you want to appear in the kanban. These tasks can be spread over multiple files within that folder.

Alternatively, if you would prefer for every task within your entire Obsidian to appear in the kanban, choose 'Every folder' in the Folder scope kanban settings. This is found in the settings menu in the top right of the kanban.


### Adding a task to your kanban

Create a 'task' in any Obsidian file. You can do this by highlighting any text, right clicking, and then selling Paragraph > Task list.

This task will now automatically appear in your kanban, under the 'Uncategorised' column. (Note this Uncategorised column will only display if you have uncategorised tasks.)

To place the task in a specific kanban column you have two choices to do this:

1. From within the Obsidian file, add text to the task that reads '#[name of column]'
2. From within the Kanban view, drag the task from uncategorised to whichever column you desire. This will automatically add to the task file the text, '#[name of column]'

The text '#[name of column]' will not be visible in the kanban view, so it won't clog up your tasks! You can only assign each task to one column within your kanban.


### Managing tasks within your kanban

From within the kanban view, you have a range of options when managing your tasks.

**Editing tasks**
You can edit the text of your tasks, as well as add or edit any tags, from within the kanban view. Click the task text and start editing! This will update the task within its file also.

**Moving tasks between columns**
To move tasks between kanban columns, either drag and drop the task, or click the task's settings icon and select the desired column.

**Archive tasks**
You can archive any tasks by clicking the task's settings icon, and choosing archive. This will xxxxxxx

**Done column**
The final column in the kanban has an additional settings menu. This allows you to quickly and easily delete/archive all tasks within this column. The idea is that if tasks have made it to this column, they have been completed, and you will likely want to delete or archive these completed tasks at some stage!


### Tagging tasks & filtering tasks within your kanban

You may wish to add tags to tasks in order to enable filtering within your kanban. For example, you could add a tag with the name of the project it relates to, which would allow you to then filter your kanban by project name.

**Tagging a task**
To add a tag to a task, add the text, '#[tag name]' to anywhere within your task. If you have created this tag previously, you will be prompted to autocomplete the tag with that text. This '#[tag name]' will be visible within the kanban view as well as the text file.

**Filtering tasks within the kanban view**
To filter tasks when in the kanban view, type the tag name into the filter bar at the top of the kanban. You can select as many tags as you like.Your kanban will now only display tasks that include that tag.


%% README_END %%