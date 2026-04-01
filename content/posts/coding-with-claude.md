---
title: "Little hits of dopamine, all alike"
draft: true
date: 2025-06-18
description: "Small steps in vibe-coding"
tags:
  - claude
  - vibecoding
  - dopamine
---
See also: [Coding agents have crossed a chasm // flurries of latent creativity](https://blog.singleton.io/posts/2025-06-14-coding-agents-cross-a-chasm/)


My partner's into Legos recently. She wanted something to do that would take her mind off of things while still being engaging. So she started building Legos.

The sense of purpose. The thing itself growing. Seeing the change. A manual showing how it should be. Making progress. Being absorbed.

That's how I always felt when I was hacking something together. Things fit together. I had to figure out why they did or didn't work. The reference manuals rarely told you how to do the thing you wanted to do. Instead they hinted at how things might hang together.

As you got more adept, you could plan the work. Try things out. Success. Setback. Going down rabbit holes. Yak shaving.

Do LLMs dream of shaving electric yaks?

I could describe how it spotted the problem and then immediately jumped to the wrong conclusion. We got into an endless round of quoting the file name, escaping the spaces, escaping the escapes. We went around on this several times until I did what I always do: Try to find the smallest reproducible case. It turned out that the file operation routines didn't handle a certain kind of space. 

I had Claude write up the [bug report](https://github.com/anthropics/claude-code/issues/2224)

Screenshots are named like this: `Screenshot 2025-06-18 at 11.00.15 PM.png`. It turns out that the space in `.15 PM` is no ordinary space. It is a [narrow no-breaking space (U+202F)](https://en.wikipedia.org/wiki/Non-breaking_space#Narrow_non-breaking_space) (apparently introduced for Mongolian). Honestly, once Unicode entered the chat, I was gone.

Of course the wrong conclusion that Claude jumped to was exactly what we discovered: there was a bug in the file-handling mcp, 

The funny thing is that had I been doing this by myself, I might have had the same first inclination to suspect the MCP code. And I would have discarded it immediately as being the most unlikely thing 

Also, Claude didn't discover the problem. I did. I copied the file name, pasted it into my trusty BBEdit, and zapped gremlins. 

```
$ ls ~/Desktop/Screenshot\ 2025-06-18\ at\ 11.00.15 PM.png | xxd -g 1
00000000: 2f 55 73 65 72 73 2f 70 68 69 6c 69 70 2f 44 65  /Users/philip/De
00000010: 73 6b 74 6f 70 2f 53 63 72 65 65 6e 73 68 6f 74  sktop/Screenshot
00000020: 20 32 30 32 35 2d 30 36 2d 31 38 20 61 74 20 31   2025-06-18 at 1
00000030: 31 2e 30 30 2e 31 35 e2 80 af 50 4d 2e 70 6e 67  1.00.15...PM.png
00000040: 0a                   --------                            .
```

The fact that the space before `PM` wasn't escaped in the tab expansion of the name should have been an earlier clue.

When working with Claude, I mostly just look at its output, whereas by myself I would be at my shell. With Claude it was like I couldn't see the road. Yes there are Ctl-R to see what it's doing, but even that is mediated.

But the thing is that this a task that I shouldn't have asked Claude to do. What I wanted to do was simple:

Collect all the screenshots  into a directory name Screenshots. That's what I asked Claude to do, and off it went using the MCP routines to list the files then move the files.

We spent 40 minutes tracking down this bug for a task that could have been done in less than a minute:

```
$ cd ~/Desktop
$ mkdir -p Screenshots
$ mv Screenshot\  Screenshots
```

But then the intent was to see what Claude could do with english instructions.

It runs into the same kinds of blocks.