---
aliases:
- Gnome Terminal Loader
author:
- '[[authors/CheeseCake87|David Carmichael]]'
categories: []
description: Adds sidebar action icons to quickly open the Gnome Terminal or to have
  the Gnome Terminal run a Python module
downloads: 3863
mobile: false
number: 1099
stars: 4
title: Gnome Terminal Loader
type: plugin
updated: '2023-08-30T02:34:28'
url: https://github.com/CheeseCake87/gnome-terminal-loader
version: 1.0.0
---

%% README_START %%

# Gnome Terminal Loader

#### An Obsidian plugin

An Obsidian plugin that loads Gnome Terminal. It also has a Python script entry point loader, by placing a file called
main.py in the root of the vault. (Only compatible with Linux, with gnome-terminal and python3 installed)

![gnome_terminal.png](https://raw.githubusercontent.com/CheeseCake87/gnome-terminal-loader/HEAD/assets%2Fgnome_terminal.png)

![main_py_gnome_terminal.png](https://raw.githubusercontent.com/CheeseCake87/gnome-terminal-loader/HEAD/assets%2Fmain_py_gnome_terminal.png)

It's best to use a CLI menu with `main.py` here's an example:

```python
def menu():
	menu = -1
    while menu != 0:
        menu = int(input('1. Print Hello \n 2. Print World \n 0. exit \n'))
        if menu == 1:
            Print("Hello")
        elif menu == 2:
            Print("World")
        elif menu == 0:
            break
        else:
            print('null')
            

if __name__ == '__main__':
    menu()
    
```


%% README_END %%