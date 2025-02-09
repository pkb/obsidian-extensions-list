---
aliases:
- sync-db-os
author:
- '[[authors/ketd|ketd]]'
categories:
- '[[categories/Syncing and collaboration|Syncing and collaboration]]'
description: For synchronization between multiple platforms
downloads: 111
mobile: true
number: 1839
stars: 2
title: sync-db-os
type: plugin
updated: '2024-07-05T07:36:20'
url: https://github.com/ketd/obsidian-sync-DB-OS
version: 1.0.2
---

%% README_START %%

# obsidian-sync-DB-OS

根据自己的一些需求，写了几个常用的同步功能：

- 在 Obsidian 中粘贴图片时，插件会自动将图片上传到指定的对象存储，并更新图片链接
- 支持将以插入的本地图片链接转换为图床地址
  效果大致为：
  `![[xxx.png]] --> ![[xxx.png]](https://xxxx.xxx.os/xxx.png)`
- 手动对比冲突选择正确版本
- 上传 PDF 等大文件到对象存储

原则上数据库中只保存文本文件，便于灵活修改；大文件在数据库中只存储 hash 值，通过对比 hash 来确定同名文件是否发生变动。

## 功能特性

- **本地图片自动上传图床**：在编辑笔记时，自动将本地图片上传到图床，并更新图片链接。
- **冲突解决**：当笔记在多个设备上编辑时，支持手动对比冲突，选择正确的版本。
- **大文件上传**：支持将 PDF 等大文件上传到对象存储，避免占用数据库空间。

## 数据库支持

|         | MongoDB | CouchDB |
| ------- | :-----: | :-----: |
| PC 端同步  |    √    |    √    |
| 支持移动端 |    ×    |    √    |

## 对象存储支持

|                   |  腾讯云  |  阿里云  |
| ----------------- | :---: | :---: |
| 是否脱离数据库           |   ×   |   ×   |
| 保存多种数据格式          |   √   |   ×   |
| 支持本地图片<br>自动部署到图床 | <br>√ | <br>× |

## 使用的库

- `cos-js-sdk-v5`
- `crypto-js`
- `diff`
- `mongodb`
- `pouchdb`
- `sweetalert2`

## 如何安装

1. 克隆此仓库到本地。
   ```sh
   git clone https://github.com/ketd/obsidian-sync-DB-OS.git
   ```
2. 进入项目目录。
   ```sh
   cd obsidian-sync-DB-OS
   ```
3. 安装依赖。
   ```sh
   npm install
   ```
4. 根据需要配置 `settings`。
5. 运行插件。

## 使用方法

1. **本地图片上传**：
   - 在 Obsidian 中粘贴图片时，插件会自动将图片上传到指定的对象存储，并更新图片链接。
   
2. **冲突解决**：
   - 当检测到笔记在多个设备上有冲突时，会弹出对比窗口，用户可以手动选择正确的版本。

3. **大文件上传**：
   - 支持将大文件（如 PDF）上传到对象存储，并在数据库中保存文件的 hash 值，通过 hash 值来检测文件变动。


## 配置
### 数据库
![image](https://github.com/ketd/obsidian-sync-DB-OS/assets/94940923/24305e0a-c6ee-421c-a151-4b5f1eba5ad8)

### 对象存储
![image](https://github.com/ketd/obsidian-sync-DB-OS/assets/94940923/b9b1153e-12b4-45ed-8141-ddcd314a0039)


## 贡献

欢迎提交 issue 或 pull request 来帮助我们改进这个项目。

## 许可

[MIT](LICENSE)



%% README_END %%