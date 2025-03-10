---
aliases:
- Plugin Manager
author:
- '[[authors/ohm-en|ohm-en]]'
categories:
- '[[categories/Plugin management|Plugin management]]'
description: Extends plugin management of Obsidian.MD
downloads: 9337
mobile: true
number: 936
stars: 93
title: Plugin Manager
type: plugin
updated: '2023-07-16T23:59:09'
url: https://github.com/ohm-en/obsidian-plugin-manager
version: 0.1.5
---

%% README_START %%

:PROPERTIES:
:ID:       565cc737-ce08-43bb-be8e-58416208951e
:END:
#+title: Obsidian - Plugin Manager
#+auto_tangle: t

* Table of Contents                                                 :toc_2:
- [[#description][Description]]
  - [[#features][Features]]
  - [[#manual-installation][(Manual) Installation]]
- [[#the-program][The Program]]
  - [[#preamble][Preamble]]
  - [[#functions][Functions]]
  - [[#logic][Logic]]
  - [[#obsidian-overhead][Obsidian Overhead]]
- [[#environment--compilation][Environment & Compilation]]
  - [[#compile-w-noweb][Compile w/ Noweb]]
  - [[#build-dependencies][Build Dependencies]]
  - [[#tests][Tests]]
  - [[#manifest][Manifest]]
- [[#credits][Credits]]
- [[#license][LICENSE]]

* Description
A plugin for [[https://obsidian.md/][ObsidianMD]] which provides better management for other plugins.

** Features
| Lazy Loading    | Create a startup delay for a given plugin in seconds within the Manager's settings page |
| Plugin Toggling | Quickly toggle a given plugin via the command palette and/or configure hotkey           |

** (Manual) Installation
Until the plugin has been published to the community tab, please use the below method to install:

1. Download the latest ~main.js~ & ~manifest.json~ from the latest [[https://github.com/ohm-en/obsidian-plugin-manager/releases][release]].
2. Create a folder--with any name--in ~.obsidian/plugins~ at your vaults location.
3. Move the downloaded files into the created folder.
4. After reloading the Obsidian plugin list, you will see the plugin. Enable it.

* The Program
This plugin is written in literate format. If you'd like to read the source-code, you can find it below with relevant descriptions or in the file titled ~main.js~.

** Preamble
*** Libraries
The program only depends on the Obsidian API. Though unclear, this includes all functions, methods, etc. under ~obsidian~, ~plugin~, and ~app~.

#+NAME: dependencies
#+begin_src js
  var obsidian = require("obsidian");
#+end_src
*** Arguments

Our program (plugin) is called by the Obsidian application based off our exported module (see [[Compile w/ Noweb]]).

When Obsidian executes the plugin, we receive the ~app~ and ~manifest~ variables which are used to interact with the Obsidian API. Please see the [[https://github.com/obsidianmd/obsidian-api][documentation]] for more information.

*** Global Store
:PROPERTIES:
:header-args: :noweb-ref store 
:END:

A single global object will be used as our "store" throughout the program. It known as the ~pluginArr~ and is used to defer ideally all mutable data. Additionally, we use a listener on the object to reflect its state onto the environment.

**** Saved Settings
Our store will furthermore be cached on the system using the Obsidian API (in a file titled ~data.json~). The program has no support for lazy loading without the data from this file.

#+begin_src js
  const savedData = await plugin.loadData();
  const pluginSettings = (savedData ? savedData : {pluginArr: {}});
#+end_src

**** The Global Listener
In hopes of containing complexity in the program, this listener attempts to maintain the proper environment state by listening to changes to the global object, ~pluginArr~. It's primary goal is to keep each plugin in the correct state of enablement.

| Plugin States      | Desc.                    |
|--------------------+--------------------------|
| Enabled & Saved    | Enabled on boot          |
| Enabled & Unsaved  | Enabled until next boot  |
| Disabled & Saved   | Disabled                 |
| Disabled & Unsaved | Disabled until next boot |
|--------------------+--------------------------|

#+begin_src js
  const pluginListen = {
    async set(obj, prop, value) {
      const nbj = Object.assign({}, obj);
      nbj[prop] = value;
      const { id } = obj;
      if (nbj.enabled) {
        // If lazy loading disabled
        if (nbj.delay == 0) {
          app.plugins.enablePluginAndSave(id);
        }
        // If lazy loading newly enabled
        else if (obj.delay == 0) {
          app.plugins.disablePluginAndSave(id);
          app.plugins.enablePlugin(id);
        }
        // If lazy loading already enabled
        else {
          app.plugins.enablePlugin(id);
        }
      } else {
        app.plugins.disablePluginAndSave(id);
      }
      Reflect.set(...arguments);
      await plugin.saveData(pluginSettings);
      return true;
    },
  };

  // NOTE: `pluginArr` is defined in the above block for access within `onunload`.
  Object.entries(pluginSettings.pluginArr).forEach(function ([id, pluginObj]) {
    pluginArr[id] = new Proxy(pluginObj, pluginListen);
  });
#+end_src

** Functions 
:PROPERTIES:
:header-args: :noweb-ref specific-library
:END:
*** Check If Plugin Is Enabled
Checks the state of a plugin with the Obsidian API. This does not check with the store, but they should always match.

#+begin_src js
  const pluginStatus = function (pluginId) {
    return app.plugins.plugins.hasOwnProperty(pluginId);
  };
#+end_src

** Logic
:PROPERTIES:
:header-args: :noweb-ref business-logic
:END:
*** Lazy Load Plugins
The original purpose of this plugin was to implement an easier variation of TftHacker's lazy-loading.

Using a saved listed of plugins and their relevant on load delay, this is trivially achieved with Obsidian's ~app.plugins.enablePlugin~ function which enabled a plugin until the application state of reloaded (reboot).

Therefore to achieve lazy loading, we need to set a function on start which enables relevant plugins based on their delay.

However, ~app.plugins.enablePlugin~ only works if ~app.plugin.enablePluginAndSave~ has not been first used. If that's the case, you must first disable it with ~app.plugin.disablePluginAndSave~. In our case, this happens when plugins have a saved delay, but Obsidian Plugin Manager had been disabled, so this must be handled. Though as a consequence, this does create some scenarios where the user may experience interruptions or slow downs from a plethora of plugins getting disabled and enabled again.

#+begin_src js
  Object.entries(pluginArr).forEach(
      function([id, data]) {
        if (data.enabled & data.delay > 0) {
          if (pluginStatus(id) == true) {
            app.plugins.disablePluginAndSave(id)
            app.plugins.enablePlugin(id)
          } else {
              setTimeout(
                function() {
                    app.plugins.enablePlugin(id)
                }, data.delay)
          }
        }
      }
  );
#+end_src
**** Clean Up
:PROPERTIES:
:header-args: :noweb-ref clean-up 
:END:

In the case where this plugin is removed or disabled I'm sure users would appreciate keeping their previously lazy loaded plugins enabled. Therefore, I using Obsidian's ~onunload~ function I will save all the plugins state properly.

#+begin_src js
  if (!app.plugins.enabledPlugins.has("obsidian-plugin-manager")) {
    Object.entries(pluginArr).forEach(function ([id, data]) {
      if (data.enabled & (data.delay > 0)) {
        app.plugins.disablePlugin(id);
        app.plugins.enablePluginAndSave(id);
      }
    });
  }
#+end_src

Furthermore, as seen above, we need to check if the plugin has been disabled or only unloaded as running at every unload would cease all lazy loading functionality. Therefore we check ~app.plugins.enabledPlugins~ to see if our plugin is still enabled.

*** Quick Toggle For Plugins
Takes a list of installed plugins and creates a corresponding array of Obsidian commands which are responsible for toggling the relevant plugin on/off. If desired, the user can add a keybinding using the Obsidian GUI.

For this to work, we first need a function which toggles the plugin's state on/off while maintaining the proper state (for lazy loading); however, this is already handled by the global listener, so we only need to change the value of ~pluginArr[id].enabled~ to its inverse.

Furthermore, we need an object which abides by Obsidian's command API. This simply requires a ~id~, ~name~, and ~callback~ (fn) as attributes which the below command handles nicely.

#+begin_src js
  const createToggleCommand = function ({ id, name }) {
    const obj = {
      id: `toggle-${id}`,
      name: `toggle ${name}`,
      callback: function () {
        pluginArr[id].enabled = !pluginArr[id].enabled;
      },
    };
    return obj;
  };
#+end_src

Using the above function to generate the required JS object, we only need to map over a list of plugins (provided by manifests in the case) to add each command one by one.

#+begin_src js :noweb yes
  Object.values(app.plugins.manifests)
    .filter(({ id }) => !pluginArr[id]?.disableToggleCommand)
    .map(createToggleCommand)
    // `addCommand` needs to be wrapped in a function. I suspect it's accessing local variables?
    .map(function (obj) {
      plugin.addCommand(obj);
    });
#+end_src

*** Register Settings Panel
Alike the majority of Obsidian plugins, we too create a settings panel for easy configuration by the user. However, in our case we're making a close replication of the features provided in Obsidian's own 'Community Plugin' tab. Ideally we would replace it, but this has yet to be implemented.

**** Blacklist
However, we first need to limit plugins which don't support lazy loading. Currently only this plugin is unsupported as it's unable to manage itself. We'll see this data later when generating the settings.

NOTE: The user's can still edit the values manually to enable lazy loading. This is intentional.

#+begin_src js
  const blacklist = ["plugin-manager"];
#+end_src

**** Plugin List
The settings panel is a list of every installed plugin with a few options. The following loops between each plugin and adds it to the settings panel.

#+begin_src js
  const MySettingTab = new obsidian.PluginSettingTab(app, plugin);
  MySettingTab.display = async function () {
    const { containerEl: El } = MySettingTab;
    El.empty();
    // The Manifests are listed based on their id instead of their shown name, so we need to sort it in alphabetical order by what the user sees: the name.
    const sortedPlugins = Object.entries(app.plugins.manifests).sort(function (
      a,
      b
    ) {
      const A = a[1].name.toUpperCase();
      const B = b[1].name.toUpperCase();
      return A < B ? -1 : A > B ? 1 : 0;
    });
    sortedPlugins.forEach(function ([id, pluginData], index, arr) {
      if (!pluginArr[id]) {
          pluginSettings.pluginArr[id] = { id: id, delay: 0, enabled: pluginStatus(id), disableToggleCommand: false };
          pluginArr[id] = new Proxy(pluginSettings.pluginArr[id], pluginListen);
      }
      const data = pluginArr[id];
      const manifest = app.plugins.manifests[id];

      const div = El.createDiv()
      const st = new obsidian.Setting(div);
      st.setHeading();
      st.setName(manifest.name);
      st.setDesc(manifest.description);
      st.addToggle(function (tg) {
        tg.setValue(pluginStatus(id));
        tg.onChange(function (value) {
          pluginArr[id].enabled = value;
        });
      });


      const delayField = new obsidian.Setting(div);
      delayField.setName("Startup Delay (in seconds)");
      delayField.addText(function (tx) {
          // If plugin id on the blacklist, don't allow EU to change load delay;
          if (!blacklist.includes(id)) {
              tx.inputEl.type = "number";
              tx.setPlaceholder("0");
              const delayInSeconds = data.delay === 0 ? "" :  (data.delay / 1000).toString();
              tx.setValue(delayInSeconds);
              tx.onChange(function (delay) {
                pluginArr[id].delay = Number(delay * 1000);
              });
          } else {
              tx.inputEl.type = "text";
              tx.setPlaceholder("Plugin Not Supported");
              tx.setDisabled(true);
          }
      });

      const disableToggleCommandField = new obsidian.Setting(div);
      disableToggleCommandField.setName("Enable quick toggle command")
      disableToggleCommandField.addToggle(function (tg) {
        tg.setValue(!pluginArr[id].disableToggleCommand);
        tg.onChange(function (value) {
          pluginArr[id].disableToggleCommand = !value;
        });
      });
    });
  };
#+end_src

**** Register
Now that we've created the settings object we need to register it with the ~addSettingTab~ API function.

#+begin_src js
  plugin.addSettingTab(MySettingTab);
#+end_src

** Obsidian Overhead
To utilize the Obsidian API, we must extend the ~Plugin~ object. This object contains most the methods for interacting with the API.

To do so, it's normally done with a class using the ~extends~ keyword to the Plugin class (~class MyPlugin extends Plugin~), but instead I've chosen to use a simple function which returns the a plugin object.

Furthermore, code put in ~plugin.onload~ will be the entry point for our "business logic" and ~plugin.unonload~ will be used for the clean up.

#+NAME: entry-point
#+begin_src javascript :noweb yes
  function constructor(app, manifest) {
    const plugin = new obsidian.Plugin(app, manifest);
    const pluginArr = {};

    plugin.onload = async function() {
      <<specific-library>>
      <<store>>
      <<business-logic>>
    }

    plugin.onunload = function() {
      <<clean-up>>
    }

    return plugin; }
#+end_src

* Environment & Compilation
** Compile w/ Noweb
This literate document is written in org-mode and use ~org-babel-tangle~ to compile the relevant code blocks into files. The ~<<NAME>>~ syntax is used to achieve this.

#+begin_src js :noweb yes :tangle .obsidian/plugins/src/main.js
'use strict';

<<dependencies>>

<<entry-point>>
module.exports = constructor;
#+end_src

** Build Dependencies
Defines a ~package.json~ file used for Node.js; however, this project makes little use of its features.

#+begin_src json :tangle ./package.json
{
	"name": "plugin-manager",
	"version": "0.1.3",
	"description": "Extends plugin management of Obsidian.MD",
	"main": "main.js",
	"scripts": {},
	"keywords": [],
	"author": "ohm-en",
	"license": "MIT",
	"devDependencies": {
		"@types/node": "^16.11.6",
		"builtin-modules": "^3.2.0",
		"eslint": "^8.25.0",
		"eslint-config-google": "^0.14.0",
		"obsidian": "^0.12.17"
	}
}
#+end_src

** Tests

#+begin_src javascript
  const pluginArr_test = function(pluginArr) {
      pluginArr[id].delay = 2000;
      new
      await plugin.saveData(pluginArr);
      const newPluginArr = await plugin.loadData();
      return pluginArr[id].delay == newPluginArr[id].delay ? true : false
  }
#+end_src

** Manifest
A manifest file containing metadata as required by a ObsidianMD plugin.

#+begin_src json :tangle ./manifest.json
{
	"id": "plugin-manager",
	"name": "Plugin Manager",
	"version": "0.1.5",
	"minAppVersion": "0.13.14",
	"description": "Extends plugin management of Obsidian.MD",
	"author": "ohm-en",
	"authorUrl": "https://github.com/ohm-en",
	"isDesktopOnly": false
}
#+end_src

*** BRAT/Beta
A "beta" manifest file for [[https://github.com/TfTHacker/obsidian42-brat][BRAT]] support. 

#+begin_src json :tangle ./manifest-beta.json
{
	"id": "plugin-manager",
	"name": "Plugin Manager",
	"version": "0.1.6",
	"minAppVersion": "0.13.14",
	"description": "Extends plugin management of Obsidian.MD",
	"author": "ohm-en",
	"authorUrl": "https://github.com/ohm-en",
	"isDesktopOnly": false
}
#+end_src

* Credits
A huge thanks to [[https://twitter.com/tfthacker/][@TfTHacker]] for creating the original implementation of lazy loading as found [[https://tfthacker.medium.com/improve-obsidian-startup-time-on-older-devices-with-the-faststart-script-70a6c590309f][here]].

* LICENSE
#+begin_src text :tangle ./LICENSE
MIT License

Copyright (c) 2022 ohm-en

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
#+end_src


%% README_END %%