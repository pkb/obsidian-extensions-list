---
aliases:
- Send Note
author:
- '[[authors/jvsteiner|Jamie Steiner]]'
categories: []
description: Instantly send a note, to other obsidian users so they can import them
  into their vault. It uses AWS S3 as a storage backend. Data is shared encrypted
  by default, and only you and the person you send it to have the key.
downloads: 58
mobile: true
number: 2093
stars: 0
title: Send Note
type: plugin
updated: '2024-12-19T01:00:28'
url: https://github.com/jvsteiner/send-note
version: 0.8.39
---

%% README_START %%

# Send Note

Instantly share / publish a note using AWS S3 as the medium of exchange. Notes are shared in markdown format, and are encrypted by default. This project allows/requires you to provide your own s3 based storage. When shared, the note is upload to AWS S3, and a url is created. Other users who receive the url, can open it in obsidian, and the note will be added to their vault. This allows users a quick and easy way to transport notes from one user to another, as long as both users have this plugin installed. Encryption is used, the key is embedded in the link. Users can also delete the note from the S3 backend, right from Obsidian.

To send a note, choose `Send Note` from the command palette.

This project shares code with my other plugin [s3-image-uploader](https://github.com/jvsteiner/s3-image-uploader), which allows you to use s3 to host media files on S3. This plugin complements s3-image-uploader, because it allows you to share notes with other users, and those notes may themselves contain embedded media links using s3-image-uploader. Tangential, perhaps, but the shared code base was complementary and made developing this easier.

This plugin is supported by advertisements.

Note: this plugin is still in development, and there may be some bugs. Please report any issues you find.

## Usage

Use the `Send Note` command from the Command Palette. You can map it to a hotkey to make things faster.

The yaml frontmatter will be updated to provide access to the share url for you to send to other users. You can also delete the note from the Pastebin backend by clicking the `Delete Note` button in the frontmatter.

You have to set up your own s3 bucket, and provide the following information to the plugin:

- `accessKeyId`: the access key ID for an s3 user with write access to your bucket
- `secretAccessKey`: the secret access key for the s3 user
- `region`: the region of your bucket
- `bucket`: the name of your bucket (must already exist)
- `folder`: the folder in your bucket where you want to store the images (optional, and will be created on the fly if it does not exist.)

If you want others to be able to view the images, you need to make your bucket world readable. You can do this by adding the following policy to your bucket:

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

---

## Encryption

The content of your note is encrypted by default. What this means is that you can read the note, and the person you send it to can read the note, but nobody else can read the content - not even the hosting server.

> 🛈 **Encryption is optional, and can be turned on/off for all notes, whatever you prefer.**

## Troubleshooting

See here: [Troubleshooting](https://docs.note.sx/Troubleshooting)

## Acknowledgements

This plugin is based on the [share-note](https://github.com/alangrainger/share-note) plugin by [@alangrainger](https://github.com/alangrainger/). Ok, "based" is a bit of a stretch, I used all of the code from that plugin, added just the AWS backend, and I deleted as much stuff as I added. This plugin serves a very different purpose, however. The UI that Alan Grainger created for share-note is just perfect, so I used it as a starting point. Thanks a ton, Alan!

## License

MIT License

## TODO

1. I might want to delete previous copies automatically, when you reshare a note. Currently, it will just create a new note, and the old note will still be available, although the url gets replaced in the frontmatter.
2. Add another storage backend, maybe AWS S3, or something else. I'm open to suggestions.


%% README_END %%