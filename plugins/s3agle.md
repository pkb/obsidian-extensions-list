---
aliases:
- S3agle
author:
- '[[turnercore|Turner Monroe (turnercore)]]'
categories:
- '[[categories/Attachments management|Attachments management]]'
description: Use S3 providers and/or Eagle to manage vault attachments locally and
  remotely.
downloads: 385
mobile: false
number: 1642
title: S3agle
type: plugin
updated: '2024-08-26T14:54:41'
url: https://github.com/turnercore/s3agle
version: 0.5.9
---

%% README_START %%

# S3agle File Management for Obsidian

This is a plugin for [Obsidian](https://obsidian.md). It was based off [S3 Image Uploader](https://github.com/jvsteiner/s3-image-uploader).

This project uses S3 Storage provider and/or [Eagle](https://eagle.cool/) to manage files locally. You can use each independiently.

## An overview of how to use this plugin, in 2 steps.

1. Go to settings and configure the plugin.
   - If you are using S3 storage you will need to get your S3 storage variables, including your accessKeyId, your secretAccessKey, your region, the bucket name, and the bucket folder if needed.
   - If you want to use Eagle as well, you'll need to download and install the Eagle app (https://eagle.cool), and have it running in the background.
2. Drag and drop or copy and paste a file into your notes. Your files will be automatically uploaded and a preview link created for S3 and/or Eagle depending on your settings.

A couple of other use cases:

- Uploading all files in a note to S3/Eagle with a command. Note that this will not delete the file in your vault.
- Downloading and converting uploaded S3 files back into vault files. These will also be uploaded to Eagle if you are using it.
- Using the plugin without S3 uploads to offload your vault files into an Eagle library. Note that, for now, this will break most ways to preview the files, which is why S3 is recomended.

## What is Eagle?

[Eagle](https://eagle.cool/) is a file mangement app. Eagle app needs to be running in the background for the Eagle functionality to work properly. The Eagle URL is editable within the settings in case you want to try running it remotely. This plugin has not been tested with Eagle running on a remote computer, but in theory it should work Eagle has only released basic API access to the app, and as this API is expanded this plugin could have more options for storing files within it.

> [!NOTE]
> This plugin is still in development, and there may be some bugs. Please report any issues you find. Always be sure to backup your vault before using a new plugin.

### Usage

You have to set up your own S3 bucket, and provide the following information to the plugin:

- `accessKeyId`: the access key ID for an s3 user with write access to your bucket
- `secretAccessKey`: the secret access key for the s3 user
- `region`: the region of your bucket
- `bucket`: the name of your bucket (must already exist)
- `folder`: the folder in your bucket where you want to store files (optional, and will be created on the fly if it does not exist.)

Any S3 compitible storage provider should work.

If you want to be able to view the files from Obsidian, you need to make your bucket world readable. You can do this by adding the following policy to your bucket:

```json
{
  "Version": "2008-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::<your-bucket>/*"
    }
  ]
}
```

You also need to set up a CORS policy for the bucket:

```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET", "PUT", "POST", "DELETE"],
    "AllowedOrigins": ["*"],
    "ExposeHeaders": []
  }
]
```

You also need to set up a user with write access to your bucket. You can do this by creating a new user in the IAM console, and attaching the `AmazonS3FullAccess` policy to it. More granular access control policies are possible, but this is the simplest way to get started.

When you paste a file from the clipboard into the Obsidian note, the plugin will upload the file to your bucket, and insert a link to the file in your note. The link will be of the form `https://<your-bucket>.s3.<your-region>.amazonaws.com/<your-optional-folder>/<image-name>`. If you have made your bucket world readable, you can share the link with others, and they will be able to view the file.

If you select the "Upload on drag" option in the plugin settings, the plugin will also upload images that you drag into the note - as well as video, audio files and pdfs.

If you do not want this behavior in all notes, you can customize it on a per note basis.
Use the following variables in the frontmatter of your note to enable or disable specific features in that note. Frontmatter settings will override global settings.

The following frontmatter variables are supported:

1. `S3agleLocalOnly` if enabled it will not upload the file to S3. If you are using Eagle it will still upload the file to Eagle.
2. `S3eagleUploadOnDrag` enable/disable the drag and drop functionality.

Example:

```
---
S3agleLocalOnly: true
S3eagleUploadOnDrag: true
---
```

### Commands

The following commands are added:

`S3agle: Download ALL files from S3 to local`
This command will find all the files uploaded to your S3 url, download them, and add them to local vault storage and/or Eagle. Note that this will NOT delete the file from your S3 server, you'll need to do that manually.

`S3agle: Upload ALL files to S3/Eagle`
This command will upload all the files that it can find in the current note to S3 and/or Eagle (depending on your settings). It will also update any of the links to turn them to S3 links. Note this does not delete the files locally.

## How Eagle and S3 Interact with the Plugin

If you are using Eagle and S3 then the plugin will upload files to S3 and use S3 for Obsidian links. This means your files will be accessible even when using your vault on another computer.

It will also upload the files to Eagle, using the S3 link as the "website" field in Eagle so you can find the remote links again. In the future this will be used to be able to insert S3 links into new documents, using Eagle as the browser/searcher/file manager.

The file will not, by default, be stored locally in the vault.

If you are downloading files from S3 to make local, it will use vault storage as well as Eagle.

If Eagle is turned off the plugin will skip any Eagle related steps, and use local vault storage or S3 only.

If S3 is disabled, files won't be uploaded to S3, but will still be uploaded to Eagle.

## Generating file embeddings

A good reason to use S3 along with Eagle is to allow the embedding of files within the Obsidian note. When using S3 storage, the plugin can embed .pdf files and .ppt files by using Google Docs pdf viewer for pdf and Microsoft Office ppt viewer for ppt file embeds. This can be turned off in which case only a link will be generated.

## Hashing file names

If you would like more privacy in your file names, or just to ensure they are unique, there is an option to enable file name hashing in the settings. The same filename will generate the same hash to avoid uploading the file over and over to S3. The "Reset seed" button is there in case you want the same input filename to generate a different hash for some reason.

## Development

Pull requests welcome! Features that I would like to add include:

- [ ] Upload and download individual files from command.
- [ ] Use Eagle for file embedding previews (this may require an update to the Eagle API before it is possible)
- [ ] Eagle file explorer with thumbnails for Eagle files to insert them into the note.
- [ ] Ability to insert already uploaded files into new documents. (exploring files with Eagle should enable this)
- [ ] Have plugin work better without S3
- [ ] Add additional online storage options like Dropbox in addtion to S3

If you enjoy this plugin, throw some support by making PR improvements, contributing by donating, and making issue and bug reports.


%% README_END %%