---
aliases:
- Inline Encrypter
author:
- '[[authors/solargate|Alexander Cheryomukhin]]'
categories:
- '[[categories/Security and privacy|Security and privacy]]'
description: Encrypt secrets in your notes.
downloads: 3764
mobile: true
number: 1238
stars: 25
title: Inline Encrypter
type: plugin
updated: '2023-11-19T08:30:22'
url: https://github.com/solargate/obsidian-inline-encrypter
version: 1.1.0
---

%% README_START %%

# Obsidian Inline Encrypter Plugin

## Overview

Encrypt your secrets in the [Obsidian.md](https://obsidian.md/) notes.

This is a simple plugin for encrypting the text in Obsidian notes just inline. It was inspired by [Obsidian Encrypt Plugin](https://github.com/meld-cp/obsidian-encrypt).

> ⚠️ WARNING: Use at your own risk. Your passwords are never stored anywhere. If you forget your passwords you can't decrypt your notes. Do not give access to your files to a third party to avoid possible decryption of data.

You can encrypt all the text in a note, as well as parts of it, such as the contents of lists, tables, etc. The encrypted value is saved directly in the note as a block of code and appears as a button in reading mode.

Edit mode:

![Editing mode](https://raw.githubusercontent.com/solargate/obsidian-inline-encrypter/HEAD/docs/images/screen_01_edit.png)

Reading mode:

![Reading mode](https://raw.githubusercontent.com/solargate/obsidian-inline-encrypter/HEAD/docs/images/screen_02_read.png)

Live Preview mode is also supported.

## Usage

### Encryption

1. In edit mode select text you want to encrypt.

2. Run **Encrypt selected text** from command palette.

![Commands](https://raw.githubusercontent.com/solargate/obsidian-inline-encrypter/HEAD/docs/images/screen_03_command.png)

3. Enter the password for encryption.

4. You can also run **Encrypt selected text as code block** command for encrypting into common code block.

### Decryption

1. To see the decrypted value without decrypting it in the text of the note, simply click on the button in reading mode.

![Button](https://raw.githubusercontent.com/solargate/obsidian-inline-encrypter/HEAD/docs/images/screen_04_button.png)

2. Enter the password for decryption.

3. To decrypt a secret in the text of a note, select the entire code block in edit mode.

![Selecting secret in inline code block](https://raw.githubusercontent.com/solargate/obsidian-inline-encrypter/HEAD/docs/images/screen_05_secret_select.png)

![Selecting secret in common code block](https://raw.githubusercontent.com/solargate/obsidian-inline-encrypter/HEAD/docs/images/screen_06_secret_select_block.png)

4. Run **Decrypt selected text** from command palette.

5. Enter the password for decryption.

## Technical Notes

Encryption algorhytm is `aes-256-gcm`. Salt and IV are unique and random.


%% README_END %%