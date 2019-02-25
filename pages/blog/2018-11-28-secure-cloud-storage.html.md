---
title: Securing Personal Documents in the Cloud with Cryptomator
---

## Securing Personal Documents in the Cloud with Cryptomator

Personal cloud storage services have become a valuable part of most people's computing lives. Dropbox has served all kinds of roles for me over the almost 9 years I've been using it, including:
- A glorified public folder to share big files with other people
- Syncing personal notes between devices
- Quick and dirty sharing an album of photos
- Syncing unix dot files and custom scripts I've written across development machines

The one use I haven't been able to fully figure out is syncing all of life's documents and scans because a lot of these files are sensitive (e.g. tax returns, medical docs, passport, to name only a few), and most of these services don't offer client-side encryption. Of the big guys (Dropbox, Google Drive, Apple iCloud, Amazon Cloud Drive) the encryption story is basically two parts (at the time of this writing):

1. Files are encrypted in transit over SSL.
2. Files are encrypted at rest using either 128 or 256-bit AES.

Additionally, separate from encryption, most offer two factor authentication for logging in to access your files. Great.

I can see two vulnerabilities that remain with this setup: 

1. If you _don't_ have two factor authentication enabled, all it takes is a login to access your files.  
2. All these services hold the private keys for decrypting your files. Your files could be decrypted without your permission in the scenario where: external attacker gets ahold of private keys and decrypts; internal bad actor does the same; law enforcement subpoena requests access to decrypted data.  

Despite knowing I "have nothing to hide", it's not enough to trust any of these companies to take care of you here -- the responsibility to safeguard your data is going to be on you. So considering the landscape of data compromise and increased government surveillance in the United States, it can make sense to think about how you can protect yourself.

Knowing all that, what are we left with? How can we get the benefits of these best-in-class syncing/storage services while not leaving ourselves open to data compromise? I've gotten a lot of value out of being to access sensitive documents away from home -- I'm at work, booking a flight and need my passport number; on the phone with insurance, need to reference an old EOB; on vacation a week before closing on a house, needing to coordinate settlement docs (yeah, not recommended, but we did this). You get it. The convenience of having this type of access is the promise of the internet come true. Tossing all of these up on Dropbox is pretty risky though.

Let's consider the requirements we need to fill:  
- Files need to be encrypted client-side with a key I generate (and am responsible for) prior to upload.  
- Files can be accessed and viewed from at least macOS and iOS.  
- Files can be added with minimal friction from iOS -- I scan documents with my phone as soon as they come in the mail and upload them to the cloud before shredding.  
- Syncing is bulletproof -- it's fast, files show up quickly across devices, and I can tell what it's doing.  

I considered a few options that don't fulfill the reqs:  
#### Encrypted disk image inside of iCloud.
This isn't doable for two reasons: 1. every time you make a change to the disk image, the whole thing needs to re-sync; 2. can't decrypt in iOS.

#### One of the "zero-knowledge" cloud services that encrypts client-side, like SpiderOak.
I wanted to like these guys since our values are aligned, and went back to their service a few times over the years. I still can't stand the UI though, and syncing just isn't as good as the big guys.

#### Hosting my "own cloud" either on my home server or a remote server.
Software like ownCloud, resiliosync, bittorrent sync, and nextCloud all do some flavor of this. Problem here is general cross-platform compatibility and bulletproof syncing. If I'm hosting this server from my house and the power goes out, the whole thing breaks down. Dropbox and iCloud are at the point where I drop a file in and it shows up everywhere else more or less immediately -- they're the best at this, and I'm not interested in playing somewhere else.

### What it comes down to
We need some app that encrypts files client-side on a per-file basis, and has native decryption on both mac and iOS. Enter, Cryptomator.

How it works is, you specify a folder that will hold your files and create an encryption key. It then locally mounts a virtual volume where you add/modify decrypted versions of your files. When you update a file in the virtual drive, it encrypts it, and sends it over to the local cloud location.. at which point, iCloud will sync that encrypted file up to the web. On iOS, there's a cryptomator app that you can paste in your decryption key (memorized or stored somewhere like 1password), and it will show you your decrypted files -- you can also enable Touch ID for decryption, which makes this flow super easy.

There is going to be the added friction of unlocking your vault on desktop and mobile, but it's copying an encryption key from 1Password at the worst, and TouchID/FaceID at the best. 

I’ve been living with this process for about 6 months, and it’s settled into my day-to-day pretty smoothly.
