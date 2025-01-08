---
aliases:
- Fetch Prayer Times
author:
- '[[authors/Eccys|Ecys]]'
categories: []
description: Fetches local prayer times and saves them to a file.
downloads: 43
mobile: true
number: 2071
stars: 1
title: Fetch Prayer Times
type: plugin
updated: '2024-12-08T07:50:54'
url: https://github.com/Eccys/obsidian-prayer-times
version: 1.1.0
---

%% README_START %%

# Prayer Times Plugin for Obsidian

The Prayer Times Plugin fetches and displays daily prayer times in Obsidian. It uses the Aladhan API to ensure accurate schedules based on your chosen location. Customize the settings to match your preferences, and keep your workspace aligned with your daily schedule.

## Features

- **Set Location**: Choose your city manually or allow automatic detection.
- **Prayer Selection**: Pick which prayer times (e.g., Fajr, Dhuhr) to display.
- **Update Options**: Set updates to occur on vault startup, note opening, or both.
- **Custom Date Formats**: Format dates to fit your style (e.g., MM/DD/YYYY).
- **Time Formats**: Switch between 12-hour and 24-hour formats.
- **Clean Interface**: Simple and easy-to-use settings.

## Installation

1. Download the plugin files or clone the repository.
2. Copy the files to your Obsidian `plugins` folder, usually located in `.obsidian/plugins` inside your vault.
3. Open Obsidian, then go to `Settings > Community Plugins`.
4. Enable the **Prayer Times Plugin**.

## Configuration

After enabling the plugin, configure the settings via `Settings > Prayer Times`:

- **City**: Select your city to fetch accurate prayer times.
- **Prayers to Include**: Choose specific prayers to display (e.g., Fajr, Maghrib).
- **Update Frequency**: Specify if updates should happen on startup, note opening, or both.
- **Time Format**: Switch between 12-hour or 24-hour formats.
- **Date Format**: Customize how dates are displayed.

## Usage

1. Open the settings and configure your preferences.
2. Save the settings. The plugin will automatically fetch and display prayer times.
3. Use the `Prayer Times` section in your workspace to view the schedule.

### Example Output

**Date**: 12/08/2024  **Location**: New York

| Prayer   | Local Time | Time (UTC) |
|----------|------------|------------|
| Fajr     | 05:00 AM   | 10:00 AM   |
| Dhuhr    | 12:15 PM   | 05:15 PM   |
| Asr      | 03:45 PM   | 08:45 PM   |
| Maghrib  | 06:10 PM   | 11:10 PM   |
| Isha     | 07:30 PM   | 12:30 AM   |

## Development

### File Overview

- **`apiHandler.ts`**: Handles requests to the Aladhan API.
- **`settingsTab.ts`**: Implements the settings UI.
- **`settings.ts`**: Manages and stores plugin settings.
- **`main.ts`**: Initializes and integrates the plugin into Obsidian.
- **`prayerTimesPlugin.ts`**: Contains the core logic for fetching and displaying prayer times.

### Build and Test

1. Install [Node.js](https://nodejs.org/) and [TypeScript](https://www.typescriptlang.org/).
2. Clone or extract the plugin files to a folder.
3. Run `npm install` to set up dependencies.
4. Build the plugin with `npm run build`.
5. Copy the built files to the Obsidian plugins folder.
6. Test the plugin in Obsidian to ensure proper functionality.

## Contributing

Contributions are welcome. Fork the repository, make your changes, and submit a pull request.

## License

This plugin is released under the [MIT License](LICENSE).

## Acknowledgments

This plugin connects to the Aladhan API to retrieve prayer times. Thank you to the Aladhan team for providing this valuable service.

---

If you encounter any issues or have suggestions, please contact the developer.



%% README_END %%