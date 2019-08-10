---
title: whenisgoldenhour; now with https and react
created: 2019-08-10
categories: ["dev", "golden hour"]
---

A couple months back, I spent some time sprucing [whenisgoldenhour.com](https://whenisgoldenhour.com) in two ways. The first, was setting up https for the site. Nothing special here; just used AWS ACM for the cert -- and now we have our cool green lock in your browser.

<img src="/static/images/posts/2019-08-10-whenisgoldenhour-updates/screenshot1.png" width="400">

We're not collecting user submitted information or credit cards on the site, so no relevance there. There _is_ the location data we send/receive between google that could technically have been man-in-the-middled pre-HTTPS -- though those locations don't have a high level of precision. Other than that, there are also SEO benefits to being HTTPS compliant. 

The second piece was cleaning up the garbage vanilla javascript the site was originally written in. The result has been a more solid/readable implementation which can be [found on github](https://github.com/ksho/whenisgoldenhour.com). For users, the site looks and functions exactly the same as before. Laying this foundation will make it easier to add features going forward.
