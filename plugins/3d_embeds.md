---
aliases:
- Embed 3D
author:
- '[[authors/ElmoNeedsArson|Jesse Strijker]]'
categories: []
description: Embed 3DModels in markdown notes.
downloads: 40
mobile: true
number: 2059
stars: 1
title: Embed 3D
type: plugin
updated: '2024-11-15T05:24:41'
url: https://github.com/ElmoNeedsArson/Obsidian-3D-embed
version: 1.0.3
---

%% README_START %%

# 3D Embed Plugin - How to use

## 1. Showing all filetypes in obsidian:
Go to the settings tab of obsidian -> 'Files and Links' -> toggle the 'Detect all file extensions'
![image](https://github.com/user-attachments/assets/d5e27828-1a29-4870-8294-52e9011e2083)
This allows you to see every type of file in your obsidian vault, including 3D model files such as stl. 

## 2. Watch this video that showcases how to use the plugin:


https://github.com/user-attachments/assets/9b10c36c-36c3-4bc1-a4a7-f5d00f735ec7



## 3. Or read these images and text:
3.1) Drag Model from file overview/manager into note as an embed
![Screenshot 2024-11-03 184117](https://github.com/user-attachments/assets/245386b4-5f41-4bf3-8afa-55287cd46207)

3.2) position cursor on line with 3D model embed
![Screenshot 2024-11-03 184225](https://github.com/user-attachments/assets/cad3f9f5-d1bd-4b61-a816-79ce3fc0a00e)

3.3) On line with embed execute the embed 3D command (ctrl+p) -> embed 3D: 3DModel
![image](https://github.com/user-attachments/assets/c75579e8-a051-433c-ab64-486aa30fd9da)

3.4) Voila a 3D model
![image](https://github.com/user-attachments/assets/6e142009-9cfb-44e4-b1a9-1457f288f55f)

# Additional Information
## Example Codeblock
Look at the codeblock to alter minor things in the scene
```js
```3D
{
"name": "Castle.glb",
"rotationX": 0, "rotationY": 0, "rotationZ": 0,
"AutorotateX": 0, "AutorotateY": 0.001, "AutorotateZ": 0,
"positionX": 0, "positionY": 0, "positionZ": 0,
"scale": "0.5",
"colorHexString": "7abbd6"
}
```

## Standard Settings
Use the settings tab, to alter standard settings such as background color, size of 3D embed, or scale of the model. 
![image](https://github.com/user-attachments/assets/b7df88bf-75e2-4066-a685-8dfa11478816)

## Precautions:
1) Currently only two 3D embeds in one note are supported at the same time
2) Big models will be laggy, since obsidian has a limited amount of RAM that cannot be altered.

## Future plans:
1) Use one renderer instead of a new renderer with introduction of a new model. (Uncertain of achievability)



%% README_END %%