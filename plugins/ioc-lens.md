---
aliases:
- IOC Lens
author:
- '[[acgabbert|Aaron Gabbert]]'
categories: []
description: Extracts and displays security-relevant indicators such as IP addresses,
  domains, and file hashes to enhance your cyber security note-taking process.
downloads: 136
mobile: false
number: 2007
stars: 8
title: IOC Lens
type: plugin
updated: '2024-11-19T18:01:41'
url: https://github.com/acgabbert/ioc-lens
version: 1.0.2
---

%% README_START %%

# IOC Lens

[**IOC Lens**](https://gabbert.me/Projects/IOC+Lens) is a note-taking helper for Obsidian focused on cyber security and incident response.

As security professionals, we encounter indicators of compromise (IOCs) constantly in our work. Whether you’re an incident responder, threat researcher, or SOC analyst, keeping track of these indicators within lengthy notes can be challenging. IOC Lens solves this by providing a dedicated Obsidian view that automatically extracts and organizes:
- IP addresses (both public and private)
- Domain names
- SHA256 hashes
- MD5 hashes

![demo](https://raw.githubusercontent.com/acgabbert/ioc-lens/refs/heads/main/resources/usage-example.png)

To activate IOC Lens, click the ribbon icon or use the command palette.

![ribbon icon](https://raw.githubusercontent.com/acgabbert/ioc-lens/refs/heads/main/resources/ribbon-icon.png)

![command palette](https://raw.githubusercontent.com/acgabbert/ioc-lens/refs/heads/main/resources/command-palette.png)

Key features:
- Automatic IOC extraction from your notes
- Smart recognition of both standard and defanged IOCs (e.g. "evil[.]com")
- One-click pivot buttons to search indicators across various security engines
- Clean, organized view of all IOCs in your current note

Security considerations:
- It's recommended to defang IOCs in your notes (e.g., using "evil[.]com" instead of "evil.com") to prevent accidental clicks or automated scanning
- For compatibility with search engines, IOCs are automatically "refanged" in the sidebar view and when using the search pivot buttons
- IOCs are displayed as plaintext in the sidebar - they are never clickable links
- All interaction with IOCs is intentional and requires explicit user action

IOC Lens currently supports pivots to the following resources/search engines. Pivots are configurable via toggle switches in the plugin settings.
- [AbuseIPDB](https://www.abuseipdb.com)
- [Censys](https://search.censys.io)
- [DuckDuckGo](https://duckduckgo.com)
- [Google](https://google.com)
- [Shodan](https://shodan.io)
- [Spur Context API](https://spur.us/context-api/)
- [URLScan](https://urlscan.io/search/)
- [VirusTotal](https://virustotal.com)
- [GreyNoise](https://viz.greynoise.io)

%% README_END %%