---
title: Tech for predictability amidst a SEPTA funding crisis
created: 2025-09-10
categories: ["dev", "transit"]
---

[SEPTA Live](https://mysepta.ksho.co/) is my Claude Code'd solve for a Philadelphia that, for the time being, has heavily reduced bus and rail capacity.

In spite of there being an [open API](https://api.septa.org) to access realtime vehicle locations, SEPTA fails to implement two key features in their official app:  

1. **Live-refreshing locations.** When you've selected a specific route, say the 40 bus, it doesn't automatically update the vehicle locations on that route -- the user has to back out of the page for that route, and click back into it to see updated locations. Maddening.  

2. **Live locations for multiple routes.** It's common to take >1 route to get where you're going -- and there are often many options to get to your destination. What you need to do this effectively though, is the ability to see where vehicles of many other routes are while you're moving on your current one. e.g. if you're on the 47 north, you could grab any of the 64, 40, 42, 9 to go west .. and you'll want to hop off the 47 for the closest one.  

In a world right now where we're lacking a lot of buses, timing your transfers is more necessary than ever!

The repo lives at https://github.com/ksho/my-septa-routes

Enjoy, and here's the LinkedIn post for the algorithm.

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7365012506529910784" height="1052" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>