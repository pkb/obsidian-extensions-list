---
aliases:
- BetaX NAS Sync
author:
- '[[authors/skye-z|Skye]]'
categories: []
description: Keep Vault synchronized with the NAS on your home intranet.
downloads: 10
mobile: true
number: 2102
stars: 0
title: BetaX NAS Sync
type: plugin
updated: '2025-01-07T08:17:42'
url: https://github.com/skye-z/ons
version: 1.0.1
---

%% README_START %%

# BetaX Obsidian NAS Sync

[![License](https://img.shields.io/badge/License-AGPLv3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0.html)

[中文](README_zh.md) | [Docs](https://skye-z.github.io/ons/)

This is an `Obsidian Vault` synchronization service that allows you to synchronize your `Obsidian Vault` with your home intranet NAS.

For users who have a NAS at home and use it as a storage hub.

> If you simply want to synchronize multiple `Vaults` between multiple `Obsidians`, use the official [synchronization](https://obsidian.md/sync) service.

## Prerequisites

1. a NAS with [Nas Server](nas-server) installed
2. a recent version of the `Obsidian` client
3. a Github account

## Instructions for use

1. You need to register your NAS with the central server to get the `NAT.ID`.
2. Enable the connection password on the `NAS Server` (it is better to enable it for security reasons)
3. Install and enable the plugin
4. Fill in the `唯一标识` and `连接密码` in the Settings.
5. Click `Start Test` to test if the connection works.

## Vault Configuration (Important)

Please follow the appropriate section based on your situation:

- If you have never used this service:
  - I store my `Obsidian Vault` on the `NAS`.
    - Follow the G4 Plan.
  - I only have an `Obsidian Vault` locally.
    - Follow the G1 Plan.
- If you have used any component of this service:
  - I already have a `Vault` on the `NAS Server`.
    - Follow the G2 Plan.
  - I already have a synchronized `Vault` in my local `Obsidian`.
    - Follow the G3 Plan.

### G1 Plan

No additional actions are required. Complete the connection as described earlier and use it normally.

### G2 Plan

Since you already have a `NAS Vault`, you need to confirm:

- Your local `Obsidian` is a brand new `Vault`.
- Files and data in your local `Obsidian Vault` can be overwritten.

> Q: What if I have a local `Obsidian Vault` with important data that cannot be overwritten? <br/>
> A: Create a new `Obsidian Vault`.

After confirming, complete the connection as described earlier. Upon successful connection, open the command palette in `Obsidian` and select `BetaX NAS Sync: Manual Update`.

### G3 Plan

If you already have a local `Obsidian Vault` and do not have a `NAS Vault`, you can proceed to the [G1 Plan](#G1 Plan) to push data to the new `NAS Server`.

If you have a `NAS Server` with `Vault` data, determine if the local `Vault` and `NAS Vault` are consistent. If they are consistent, you can proceed to the [G1 Plan](#G1 Plan). Both will synchronize differences based on timestamp.

If they are inconsistent, you need to clear the end that is not needed, preferably by deleting the entire folder and recreating it.

After clearing, complete the connection as described earlier. Upon successful connection, open the command palette in `Obsidian` and select `BetaX NAS Sync: Manual Update`.

### G4 Plan

It seems you previously used `NAS` for simple file sharing to store your `Obsidian Vault`.

First, deploy the `NAS Server` and map your `Obsidian Vault` on the `NAS` to the container's `/app/vault` directory.

Next, create a `.synclog` file in the `Obsidian Vault` directory; this file has no extension.

After creating the file, open it with a notepad or another editor and enter a 10-digit timestamp in seconds, then save the changes.

After completing these steps, follow the initial connection instructions. Upon successful connection, open the command palette in `Obsidian` and select `BetaX NAS Sync: Manual Update` to automatically pull the `Obsidian Vault` from the `NAS` to the local machine.

## Unable to connect

If you can't connect after configuring `NAS Server` and this plugin, please change your network environment and try again.

This service uses modern P2P hole-punching technology, but there are still some special networks that can't be penetrated, if you change networks several times and still can't connect, it may mean that your network environment can't use this service.


%% README_END %%