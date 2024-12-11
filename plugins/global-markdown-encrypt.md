---
aliases:
- Global Markdown Encryption
author:
- '[[shlemiel|shlemiel]]'
categories:
- '[[categories/Security and privacy|Security and privacy]]'
description: In-memory AES256-GCM Markdown Encryption
downloads: 3168
mobile: true
number: 1247
stars: 8
title: Global Markdown Encryption
type: plugin
updated: '2023-12-09T10:23:30'
url: https://github.com/shlemiel/globaloe
version: 0.0.7
---

%% README_START %%

# global-markdown-encrypt

a plugin for encrypting obsidian markdowns in-memory, single password based.

## how to use

please follow these steps.

- set editing view as default (Settings / Editor / Default view for new tabs -> Editing view)
- turn on the plugin
- input your password (the longer, the stronger)
- click 'note with lock' icon
- the markdown with 'aes256' extensions are seamlessly encrypted

## spec

cryptographic algorithms were chosen conservately.

- key derivation: pbkdf2-sha512 with 1000000 iters
- mode of operation: aes256-gcm aead (auth + encryption)
- file extension: aes256

## supported modes

due to technical reasons, only markdown with editing view is supported.

- please use editing view as default
- only markdown files with aes256 extensions are encrypted (excluding: images, etc.)

## disclaimer

risk of data loss, when there is an unexpected error. please backup your important data periodically.


%% README_END %%