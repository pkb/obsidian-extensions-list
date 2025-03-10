---
aliases:
- PARA Shortcuts
author:
- '[[authors/gOATiful|gOAT]]'
categories: []
description: This plugin serves usefull commands to setup and manage your knowledge
  using the PARA method.
downloads: 5737
mobile: true
number: 398
stars: 23
title: PARA Shortcuts
type: plugin
updated: '2024-02-24T16:19:23'
url: https://github.com/gOATiful/para-shortcuts
version: 1.0.6
---

%% README_START %%

# para-shortcuts

This plugin serves useful commands to set up and manage your knowledge using the PARA method.

## The PARA Method
A full article on the PARA method and its benefits can be found on this [blog post](https://fortelabs.co/blog/para/) by Tiago Forte.

Brief summery of the PARA folder structure:
- **Projects**: A project is "a series of tasks linked to a goal, with a deadline".
- **Area**: An area of responsibility is "a sphere of activity with a standard to be maintained over time".
- **Resource**: A resource is "a topic or theme of ongoing interest". 
- **Archive**: Archives include "inactive items from the other three categories".

Additional: Put personally relevant information in Areas, and generally useful information in Resources. 
## Commands

All commands can be accessed in the command palette.  
Default: `CTRL+p`

Overview:
- [Init Vault](init-vault)
- [Create new entry](create-new-entry)
- [Move to archive](move-to-archive)
- [Restore entry from archive](restore-entry-from-archive)
- [Postpone an entry](postpone-an-entry)

### Init Vault
Para follows a simple folder structure to organize your knowledge.  
This command creates the folders accordingly in the root of the vault.

### Create new entry
Create a new entry in the markdown file with a basic template in the selected folder.

### Move to archive
Moves the currently opened file in its respective folder in the archive.  
This command creates the matching para folder and subfolders if not present.  
Note that this command is only present in not 'archive'-folders.

### Restore entry from archive
This command is only present for files in the 'archive'-folder.  
It restores the selected file back to its original PARA-folder with its subfolders.

### Postpone an entry
You can postpone an entry with the 'postpone this entry'-command.
The currently opened file will be move into a 'postponed' folder in the same para-folder.

### Reschedule a postponed entry
An entry in a 'postponed'-folder can be restored by the 'Reschedule this entry'-command.
If the remaining parent folder is empty it will be deleted.

## Further Improvements
If you would like to see additional features in this plug-in, feel free to hand in a feature request in the issue section.

## Support
<a href="https://www.buymeacoffee.com/gOATifulCode" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>  


%% README_END %%