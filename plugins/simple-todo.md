---
aliases:
- Simple Todo
author:
- '[[authors/elliotxx|elliotxx]]'
categories: []
description: A minimalist text-based todo manager (Text-Based GTD) for efficient task
  management.
downloads: 78
mobile: true
number: 2035
stars: 2
title: Simple Todo
type: plugin
updated: '2024-11-21T19:35:11'
url: https://github.com/elliotxx/obsidian-simple-todo
version: 0.2.7
---

%% README_START %%

# Simple Todo

A minimalist text-based todo manager (Text-Based GTD) plugin for efficient task management in Obsidian.

English | [简体中文](./README.zh-CN.md)

![demo](https://raw.githubusercontent.com/elliotxx/obsidian-simple-todo/HEAD/assets/demo.gif)

## Features

- 📝 Pure text-based, fully compatible with Markdown syntax
- 🎯 Quick task creation, editing, and completion
- 🗂 Simple task categorization
- 📅 Date-based task organization
- 🔄 Task status toggle (Todo/In Progress/Done)
- 📦 Completed task archiving
- 🌐 Multi-language support (English, 简体中文)

## Installation

1. Open Settings in Obsidian
2. Go to "Community Plugins"
3. Disable "Safe Mode"
4. Click "Browse" and search for "Simple Todo"
5. Click Install
6. Enable the plugin

## Settings

### Language
- Open plugin settings
- Select your preferred language from the dropdown menu
- Changes take effect immediately

### Keyboard Shortcuts
Default shortcuts:
- `Ctrl/Cmd + Enter` - Toggle todo status
- Other commands can be configured in plugin settings

## Usage

### Basic Syntax

```
2024-10-30 Wed  
- [ ] Create a todo task  
- [x] Mark task as completed  
- [/] Mark task as in progress  
```

Note:
- Date format must be `2024-10-30 Wed` to be recognized
- Tasks must start with `- [ ]` or `- [x]` or `- [/]` to be recognized as tasks

### Supported Commands
- `Toggle Todo Status` - Toggle task status (Todo -> In Progress -> Done -> Todo)
- `Reschedule Previous Todos` - Move unfinished tasks from the most recent day to today
- `Archive Completed Todos` - Archive completed tasks (by month to simple-todo directory)

### Task Status
- `- [ ]` - Todo task
- `- [/]` - Task in progress
- `- [x]` - Completed task

### Task Rescheduling
- Plugin searches for unfinished tasks from the most recent day, starting from cursor position
- If unfinished tasks are found, they will be moved under today's date
- If today's date doesn't exist, it will be created automatically
- After rescheduling, cursor will be positioned at the last task of today's block

### Archiving
- Archive files are stored in the `simple-todo/` directory
- Files are named by month (e.g., `simple-todo/archive-2024-03.md`)
- Archiving rules:
  - Tasks are grouped by month
  - A month can only be archived when all its tasks are completed
  - Months with unfinished or in-progress tasks will be skipped with a notification
- Archive file format:
  - Each file includes a month title
  - Completed tasks are recorded chronologically
  - Archived tasks are automatically removed from the original file

### Date Format
- Format: `YYYY-MM-DD Weekday`
- Example: `2024-03-21 Thu`
- Date line must be on its own line
- Tasks must follow the date line
- Recommended to keep one empty line between date blocks, plugin will handle spacing automatically

## Development Guide

### Prerequisites

1. Install Node.js (LTS version recommended)
2. Install npm
3. Clone the repository:
```bash
git clone https://github.com/elliotxx/obsidian-simple-todo.git
```

### Development Workflow

1. Install dependencies:
```bash
cd obsidian-simple-todo
npm install
```

2. Create symlink to test vault:
```bash
# Windows (Administrator)
mklink /D "path/to/vault/.obsidian/plugins/obsidian-simple-todo" "path/to/your/project"

# macOS/Linux
ln -s "path/to/your/project" "path/to/vault/.obsidian/plugins/obsidian-simple-todo"
```

3. Start development server:
```bash
npm run dev
```

4. In Obsidian:
   - Open Settings > Community Plugins
   - Turn off Safe Mode
   - Refresh plugin list
   - Enable "Simple Todo" plugin

5. After code changes:
   - Files will auto-rebuild on save
   - Press `Ctrl/Cmd + R` in Obsidian to reload

### Building for Release

1. Build production version:
```bash
npm run build
```

2. Pre-release checklist:
   - Update version in `manifest.json`
   - Update version in `package.json`
   - Update `versions.json`
   - Commit all changes
   - Create new release tag

## Contributing

Issues and Pull Requests are welcome!

## License

MIT License


%% README_END %%