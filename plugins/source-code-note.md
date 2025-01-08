---
aliases:
- Source Code Note
author:
- '[[authors/waiting0324|Waiting]]'
categories:
- '[[categories/Code and development|Code and development]]'
description: This plugin can help you organize source code note easily.
downloads: 3650
mobile: true
number: 844
stars: 15
title: Source Code Note
type: plugin
updated: '2023-03-14T21:59:35'
url: https://github.com/waiting0324/obsidian-code-note
version: 1.0.0
---

%% README_START %%

# Obsidian Source Code Note Plugin

[中文文檔](./README-zh.md)

Technical Support [AntV X6](https://x6.antv.antgroup.com/)

## Functionality

- Parse the code blocks in Obsidian notes, draw the graphs of the method call links, and keep the code blocks in the canvas for easy viewing
![Demo](https://raw.githubusercontent.com/waiting0324/obsidian-code-note/HEAD/img/demo.gif)

## How to use

### 1. In the code comments section of Markdown's code block, write the relevant information with the keyword

| Supported keywords | Effect                          |
| ------------ |-----------------------------|
| @class       | Name of the class corresponding to the method                    |
| @function    | Method Name                        |
| @call        | Call the related method, multiple methods are supported. Format: class name @ method name |

**Example**

```Java
/** 
 * Register metadata string.
 * 
 * @class ShenyuClientHttpRegistryController
 * @function registerMetadata(@RequestBody final MetaDataRegisterDTO metaDataRegisterDTO)
 * @call RegisterClientServerDisruptorPublisher @ publish(final DataTypeParent data)
 * 
 * @param metaDataRegisterDTO the meta data register dto  
 * @return the string  
 */
@PostMapping("/register-metadata")  
@ResponseBody  
public String registerMetadata(@RequestBody final MetaDataRegisterDTO metaDataRegisterDTO) {  
    // 通过 Publisher 注册 元数据对象  
    publisher.publish(metaDataRegisterDTO);  
    return ShenyuResultMessage.SUCCESS;  
}
```

```Java
/** 
 * Register metadata string. 
 * 
 * @class RegisterClientServerDisruptorPublisher
 * @function publish(final DataTypeParent data)
 * 
 * @param metaDataRegisterDTO the meta data register dto  
 * @return the string  
 */
@Override  
public void publish(final DataTypeParent data) {  
    // 获取 DisruptorProvider 
    DisruptorProvider<Collection<DataTypeParent>> provider = providerManage.getProvider();  
    // 调用 DisruptorProvider 的 onData 方法，发送数据  
    provider.onData(Collections.singleton(data));  
}
```
### 2. Click the button to the left of Obsidian to open the canvas


%% README_END %%