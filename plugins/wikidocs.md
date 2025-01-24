---
aliases:
- WikiDocs
author:
- '[[authors/pahkey|pahkey]]'
categories: []
description: Fetch, edit, and upload WikiDocs books.
downloads: 120
mobile: false
number: 2073
stars: 1
title: WikiDocs
type: plugin
updated: '2024-12-10T07:54:57'
url: https://github.com/pahkey/obsidian-wikidocs-plugin
version: 1.0.16
---

%% README_START %%

# WikiDocs Obsidian Plugin

With the WikiDocs Obsidian Plugin, you can edit WikiDocs books directly within Obsidian.  

* Shortcut to Obsidian: [https://obsidian.md/](https://obsidian.md/)  


## Installing the Plugin  

The plugin is currently under preparation.  
Please wait a little longer.  


## Preparing to Use the Plugin  

Once the WikiDocs plugin is installed in Obsidian, follow these steps:  

### Obtaining a WikiDocs API Token  

An API token is required to use the plugin. This token is necessary for user authentication. You can generate an API token from the following menu:  

[Login > Account Settings > Generate API Token]  
![](https://wikidocs.net/images/page/267526/iShot_2024-11-28_15.42.32.png)  

Copy the displayed token value.  

### Configuring the Obsidian Plugin  

After installing the plugin, you will see an option called [Community Plugins > WikiDocs Plugin] in the lower-left settings pane of Obsidian.  

![](https://wikidocs.net/images/page/267526/iShot_2024-11-28_15.49.11.png)  

Click on this item and configure the settings as follows:  

- API Base URL: `https://wikidocs.net/napi`  
- API Token: Paste the token value you copied earlier.  


## Viewing WikiDocs Books  

After installing the plugin, a "book icon" will appear at the bottom of the icons on the left side of the Obsidian screen.  

![](https://wikidocs.net/images/page/267526/Pasted%20image%2020241128155407.png)  

Click this icon to open a popup window as shown below:  

![](https://wikidocs.net/images/page/267526/Pasted%20image%2020241128155553.png)  

The books you are currently working on in WikiDocs will be displayed. Select the book you wish to edit. The book will then be downloaded and opened in Obsidian.  

## Sending to WikiDocs  

After editing the book, use the "Send to WikiDocs" feature to update the changes to WikiDocs. Right-click on the "book title" in the Obsidian table of contents to see the "Send to WikiDocs" menu. Note that this menu does not appear when right-clicking on regular page titles.  

![](https://wikidocs.net/images/page/267526/Pasted%20image%2020241128160546.png)  

Selecting "Send to WikiDocs" will apply the changes to WikiDocs.  

## Downloading from WikiDocs  

"Download from WikiDocs" synchronizes Obsidian to match the WikiDocs book exactly. If you haven't sent your edits to WikiDocs using the "Send to WikiDocs" feature, the edited content may be lost, so proceed with caution. (This command ensures that the content in both WikiDocs and Obsidian is fully synchronized based on WikiDocs.)  

![](https://wikidocs.net/images/page/267526/Pasted%20image%2020241128160749.png)  


## Limitations  

Here are some features that are available in WikiDocs but not in Obsidian:  

### Page Deletion Is Not Supported  

Deleting a page can inadvertently remove its subpages as well. To prevent accidental deletions and irreversible data loss, page deletions made in Obsidian will not be reflected in WikiDocs. Pages can only be deleted directly in WikiDocs.  

### Parent Page Assignment Is Limited  

WikiDocs organizes the table of contents by assigning parent pages. In Obsidian, pages with existing subpages can be moved, but pages without subpages cannot be moved under another page as a subpage.  

* Advanced features will enable this functionality in the future (details will be announced later).  

### Book Settings Cannot Be Modified  

WikiDocs allows various book settings (e.g., book image, copyright, public/private status, advertisements), but in Obsidian, only the book's content can be edited.  



%% README_END %%