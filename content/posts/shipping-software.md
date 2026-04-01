---
source: https://www.reddit.com/r/ExperiencedDevs/s/jOo0k8uCIy
tags:
  - work
  - software
  - process
  - organizations
type: writering
title: Shipping software
date: 2025-05-15
amoxtli: obsidian://open?vault=amoxtli&file=L%2Fshipping%20software
description: "How was software developed before Agile?"
---

Agile puts a lot of pressure on developers to release new features regularly. Befire agile and before the net, software development was different. The thing to keep in mind is that before 1995 or so, every software release was a delivery of physical goods.

You wrote software, but you *shipped* tapes, floppies, and  <span class="small-caps">CD-ROMs</span>.  These are physical things that need to be manufactured. It could take days or weeks to get media produced from your Golden Master.

And that Golden Master better be golden. There is no internet. There are no hot fixes. There is no way to ship early and often. That typo in the UI was there until the next major upgrade.

Before Agile, the pressure was on getting the design right the first time, which of course is impossible. The first part of the process involved writing several sets of documents: product requirements, software design, functional specs. The idea was to have the entire product specified before a line of code got written.[^1]

Once actual coding began, we'd discover that the thing we designed couldn't be implemented the way we thought. The design would change, but the design document never did. Six months in, the planning documents were out of date. Everyone was too busy writing code to keep them up to date.

Every component had a lead time. Documentation, for instance, had to be completed about a month before the anticipated ship date. The convention was that the product was frozen at that point. It was usually a very soft freeze.

All these physical pieces had to be ready at the right time. If anything slipped, everything slipped and threw the entire process off. Which was normal.

We didn't have DevOps; we had entire departments that sourced package designers, negotiated with printers, had backup suppliers, and kept track of the COGS: cost of goods sold.

Every physical piece added to COGS. Want a registration card? That's an extra 40 cents per unit. We used compressors like [StuffIt](https://en.wikipedia.org/wiki/StuffIt) to reduce the number of floppies needed. Each floppy cost about a dollar. The general rule was that every additional dollar to the COGS translated to an additional $10 to the sales price.

The pressure then was to design, implement, and ship a solid, bug-free product that would sell enough units to justify another 12 to 18 months of development work for the upgrade.



[^1]: When someone asked a programmer I worked with what he did for a living, he'd say he was a writer because: "I've been writing specs and plans. I haven't written any code in months."

