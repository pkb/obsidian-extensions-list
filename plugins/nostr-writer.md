---
aliases:
- Nostr Writer
author:
- jamesmagoo
author_page: https://github.com/jamesmagoo
categories: []
description: Publish your writing directly to Nostr.
downloads: 3718
funding_page:
  Buy Me a Coffee: https://bmc.link/jamesmagoo
  Github Sponsors: https://github.com/sponsors/jamesmagoo
mobile: false
number: 1090
title: Nostr Writer
type: plugin
updated: '2024-04-18T12:56:53'
url: https://github.com/jamesmagoo/nostr-writer
version: 2.2.0
---

%% README_START %%

# Obsidian Nostr Writer
> Directly publish from Obsidian to Nostr 

## A Match Made..
[**Obsidian**](https://obsidian.md/) is an amazing markdown editor, word processor, note organiser, and idea synthesiser: the perfect tool for writers. 

[**Nostr**](https://nostr.com/) represents the future of how we communicate and distribute the written word: decentralised, free, independent, incorruptible. 

They seem to me to be a match made in heaven...
***
[![Did We Just Become Best Friends?](https://raw.githubusercontent.com/jamesmagoo/nostr-writer/HEAD/docs/stepbros.png)](https://www.youtube.com/watch?v=3-ZUDtaGf3I)

## A Quiet Place
> Avoid the web browser and all its distractions!

This tool is completely abstracted from Nostr, allowing you to stay focused - the plugin does not read Nostr messages or give you any view into the public space. It just publishes what you've written. Stay focused on your work and disconnected from the noise. 

## Demo Video
<div align="center">
    <a href="https://www.loom.com/share/d1456e7335c049e19194df5bcba669a0">
      <p>Obsidian Nostr Writer Demo - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/d1456e7335c049e19194df5bcba669a0">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/d1456e7335c049e19194df5bcba669a0-with-play.gif">
    </a>
  </div>

## User Guide
Big thank you to Tony for making this user guide! 
[User Guide](https://habla.news/tony/87412fcb)

## For Writers
> This tool is low-friction..
1. Add your Nostr private key (once on set-up).
2. Write in Obsidian
3. Hit publish to Nostr, and that's it. 

## Features
- Publishing to Nostr: directly publish your notes from Obsidian to Nostr with a couple of clicks.
- Image Support: images in your `.md` file will automatically be uploaded and handled when you publish.
- Tags: Add tags to your work to make it more discoverable. 
- Published View : see all posts sent from Obsidian with links to view.
- Note Writer: quickly compose and publish short form notes directly to Nostr from within Obsidian.
- Relay Configuration: configure to send to whatever relays you like.
- Multiple User Profiles: publish under different nostr accounts, just add the nsecs. 
- Nostr Bookmarks: easily view and download your Nostr bookmarks into Obsidian as `.md` files for reference and local use.
- Frontmatter handling: the plugin now automatically populates article information fields from the frontmatter, streamlining metadata handling and enhancing user experience. Post data extraction, it also removes the frontmatter from the article body for publishing to Nostr.

### Ideas..
- Plugin User Relay: A relay specific to this plugin - see what everyone else is writing.
- Image CDN : Images in your file will be uploaded to a CDN & plugged into your nostr message
- Frontmatter : after publishing it would be cool if this also creates a "front matter" in the published .md file

## Writing On Nostr
It's time to start building your blog, speaking to your audience, and publishing your work freely outside of any walled garden. 

With Nostr, you are not wed to any platform like Substack, Medium, or Twitter - who can all shut you down and delete your work with the push of a button.

#### Why Nostr?
1. **Ownership**: When you post on Nostr, you own your content. There's no platform claiming any rights to your work, so you can do what you want with it - republish it, sell it, etc.

2. **Get Paid (No Middlemen)**: Nostr allows for direct monetization options, you can earn directly from your readers without sharing a percentage of your earnings with a platform like Substack or Twitter.

3. **Readership Building**: Nostr allows writers to build and manage their own communities. This can foster a more personal and engaged readership compared to larger, more impersonal platforms.

4. **Open-source and Community-driven**: As an open-source project, Nostr is driven by the community and its development is guided by the needs and wants of its users. You are not at the mercy of corporate decisions or profit-driven changes.

5. **Cost-Effective**: Nostr does not charge you fees for using their platform, unlike platforms like Substack. This makes it an economical choice for writers, particularly those who are just starting out or those who want to maximize their earnings.

### Long-Form Content
On Nostr you can write messages specifically tagged as "long-form". This tool publishes messages of this kind. Long-form content aggregators and clients such as https://habla.news & https://blogstack.io/ specifically channel these messages to readers. There'll be much more in the future.. 😉
### Short-Form Content
This tool focuses on publishing full .md files in the long-form from Obsidian. However, if you've got a short message to send out there - an idea or a quip - just toggle on short-form writer in settings; this will give you a place to write a message and send.
***
### Security Notice
This plugin stores your private key within your local Obsidian settings file, specifically in:
```
<Vault Directory>/.obsidian/plugins/nostr-writer/data.json
```

It is not transmitted elsewhere, but its security is fundamentally tied to the security of your device and Obsidian files.

Please be aware that if an unauthorized person gains access to your device or your Obsidian files, they might be able to access your private key. The plugin obscures the key in its settings interface but this doesn't equate to strong encryption or secured storage.

Therefore, it's important to ensure the overall security of your device and your Obsidian files to keep your private key safe. 

> Remember, the security of your private key is your responsibility.

## Install / Update
### In Obsidian
- Install: settings -> Community plugins -> search list typing "Nostr Writer"
- Update: settings-> Community plugins -> current plugins -> check for updates
### Manually Installing the Plugin
-   Head over to [releases](https://github.com/jamesmagoo/nostr-writer/releases) and download a release - latest is recommended - (or the pre-release for upcoming features.)
-   Navigate to your plugin folder in your prefered vault: `VaultFolder/.obsidian/plugins/`
-   Create a new folder called `nostr-writer`
-   Copy and paste over `main.js`, `styles.css`, `manifest.json` into the newly created `/nostr-writer` folder.
-   Make sure you enable the plugin by going into Settings > Community plugins > Installed plugins > toggle 'nostr-writer'.

## ⚡️SATS
lightning address: 
```
magoo@getalby.com
```

lightning invoice: 
```
lnbc200u1pjvu03dpp5x20p0q5tdwylg5hsqw3av6qxufah0y64efldazmgad2rsffgda8qdpdfehhxarjypthy6t5v4ezqnmzwd5kg6tpdcs9qmr4va5kucqzzsxqyz5vqsp5w55p4tzawyfz5fasflmsvdfnnappd6hqnw9p7y2p0nl974f0mtkq9qyyssqq6gvpnvvuftqsdqyxzn9wrre3qfkpefzz6kqwssa3pz8l9mzczyq4u7qdc09jpatw9ekln9gh47vxrvx6zg6vlsqw7pq4a7kvj4ku4qpdrflwj
```
Message me on Nostr with ideas & feedback (or for something more formal, add an issue [here](https://github.com/jamesmagoo/nostr-writer/issues))
```
npub10a8kw2hsevhfycl4yhtg7vzrcpwpu7s6med27juf4lzqpsvy270qrh8zkw
```
</br>
<div align="center">
<a href="https://www.buymeacoffee.com/jamesmagoo" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>


<!-- <a id="usdButton" class="button suggested-action green" href="https://getalby.com/p/winterpaper90109" target="_blank"><i class="fas fa-dollar-sign" aria-hidden="true"></i>Buy Me a <span id="thing">Pizza</span></a> -->

</div>



%% README_END %%