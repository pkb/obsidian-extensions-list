---
aliases:
- Peekaboo
author:
- '[[authors/Lio5n|Wang Guoshi]]'
categories:
- '[[categories/Security and privacy|Security and privacy]]'
description: Protect your privacy by setting a password to hide files.
downloads: 250
mobile: true
number: 1984
stars: 2
title: Peekaboo
type: plugin
updated: '2024-11-20T17:20:31'
url: https://github.com/Lio5n/peekaboo
version: 1.3.0
---

%% README_START %%

# Peekaboo: Enhanced Privacy for Your Obsidian Vault

Peekaboo is an Obsidian plugin designed to selectively hide and reveal files and folders, adding an extra layer of privacy to your vault. Configure hidden items, secure the configuration with a password, and easily toggle visibility with a ribbon icon or command palette commands.

**Important Note:** Peekaboo provides a convenient way to visually conceal notes within your Obsidian workflow. However, it's essential to understand that it does not encrypt your files. For enhanced security, consider combining Peekaboo with Obsidian's built-in "Excluded Files" feature (`Options > Files and Links > Excluded files`) to prevent hidden items from appearing in search results, graph view, and other areas.

## Features

- **Password-Protected Configuration:** Secure your hidden file settings with a password.
- **Granular Visibility Control:**  Hide individual files, entire folders, or use wildcards for pattern-based hiding.
- **Configured Exception Files:**  Maintain visibility of specific files within hidden directories. (Note: Folder exceptions are not currently supported).
- **Intuitive Command Palette Integration:**  Manage visibility with dedicated commands: Toggle Configured Files Visibility, Show Specified File, Show All Configured Files, Hide All Configured Files.
- **Streamlined Workflow:** The ribbon icon now presents a menu with the above commands, providing quick access to all Peekaboo actions.

## Installation

1. In Obsidian, go to `Settings` -> `Community plugins`.
2. Click `Browse` and search for "Peekaboo."
3. Click `Install` and then `Enable` to activate the plugin.

## Usage

1. **Set Your Password:** Upon activation, you'll be prompted to set a password to protect your configuration. 
2. **Configure Hidden Items:**
   - Access Peekaboo's settings to specify the files and folders you want to hide.
   - List each item on a new line, including the full directory path (e.g., `My Folder/Secret Note.md`).
   - You can omit file extensions (e.g., `.md`).
   - Use the wildcard character `*` to hide multiple files matching a pattern (e.g., `My Folder/Meeting Notes*` to hide all files starting with "Meeting Notes"). Note: The wildcard can only be used at the end of a file name.
   - Example configuration:
     ```
     Folder1
     Folder2/
     Folder3/Note1
     Folder4/Note2.md
     Folder5/Not*
     ```
3. **Configure Exception Files:**
   - List files to remain visible even if their parent directory is hidden.
   - Use the same path format as in the hidden items configuration.
4. **Manage Visibility:** 
   - **Ribbon Icon:** Click the Peekaboo icon to access the command menu.
   - **Command Palette:** Use the "Show Specified File", "Show All Configured Files", or "Hide All Configured Files" commands.

## Command Line Usage

- **`Toggle configured files visibility`:** Instantly toggle the visibility of all configured files and folders.
- **`Show specified file`:**  Reveals a specific file, even if it's within a hidden directory. Only supports individual files, not folders.
- **`Show all configured files`:**  Makes all configured files and folders visible.
- **`Hide all configured files`:**  Hides all configured files and folders.

## Security Tip

For enhanced security, combine Peekaboo with Obsidian's "Excluded Files" feature (`Options > Files and Links > Excluded files`) to prevent hidden items from appearing in search results, graph view, and other areas within Obsidian.

## Support and Feedback

Encountered an issue or have a suggestion? Please open an issue on the [GitHub repository](https://github.com/Lio5n/peekaboo). 


%% README_END %%