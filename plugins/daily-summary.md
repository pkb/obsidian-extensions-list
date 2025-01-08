---
aliases:
- Daily Summary
author:
- '[[authors/CSLukkun|Luke]]'
categories: []
description: Auto generate daily summary
downloads: 302
mobile: true
number: 2008
stars: 8
title: Daily Summary
type: plugin
updated: '2024-12-04T20:51:33'
url: https://github.com/CSLukkun/ob_daily_summary
version: 0.0.22
---

%% README_START %%

# Daily Summary Plugin for Obsidian

An Obsidian plugin that automatically generates daily summaries. It collects notes from the current day and uses LLM to generate a concise daily report.

## Features

- Automatically identifies notes from the current day
- Uses LLM to generate intelligent summaries
- Customizable API settings
- Configurable report save location
- Quick access through command palette

## Installation

1. Open Obsidian Settings
2. Navigate to Third-party plugins
3. Disable Safe mode
4. Click Browse community plugins
5. Search for "Daily Summary"
6. Click Install

## Usage

1. After installation, configure the plugin settings:
   - Set your API Key
   - Configure API Endpoint
   - Set report save location

1.1. To use local Ollama models

- Set Ollama model you want to use
  - To find installed models, type `ollama list` into a terminal
  - Or find interesting local models on https://ollama.com/library
- Configure API Endpoint
  - If you use a different port or run a remote ollama session

2. Generate a report:
   - Use the command palette and search for `Generate Daily Report`
   - The plugin will automatically collect today's notes and generate a summary

## Configuration

- `API Key`: Your LLM API key
- `API Endpoint`: API endpoint URL
- `Ollama Model`: Exact name of the Ollama model
- `Report Location`: Where to save daily reports (e.g., /Daily Reports)

## Supported Platforms

- [x] Windows
- [x] macOS
- [x] Linux

## Error Handling

The plugin includes comprehensive error logging:

- API call failures
- File operation errors
- Configuration issues
- All errors are logged to `debug-errors.md` in your specified report location

## License

[MIT License](LICENSE) - see the LICENSE file for details

## Author

Luke

## Changelog

### 0.0.22

- Customized Prompt

### 0.0.21

- OpenAI API support
- Add Excluded dirs setting
- Fix timestamp

### 0.0.7

- Ollama support addition

### 0.0.6

- Initial release
- Basic daily report generation
- Settings interface implementation
- Error logging system
- Automatic date detection in filenames

## Buy me a coffee

<img src="imgs/aipay.JPG" alt="" width="200" height="" style="margin-right: 50px">

<img src="https://raw.githubusercontent.com/CSLukkun/ob_daily_summary/HEAD/imgs/bmc_qr.png" alt="" width="200" height="">


%% README_END %%