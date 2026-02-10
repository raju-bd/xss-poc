# xss-poc

**Proof-of-Concept: Stylish Matrix/Cyberpunk-style XSS alert popup**

![XSS Popup Example](example-screenshot.png)

A tiny, self-contained JavaScript payload that creates a dramatic, "hacker-movie"-looking overlay popup — useful for demonstrating reflected/stored XSS during security trainings, bug bounty reports, CTF challenges, or red-team exercises.

**Important**:  
This is **only for authorized testing** on systems you own or have explicit written permission to test.  
Do **not** use this against production applications without permission — doing so is illegal.

## Features

- Fancy retro-futuristic styling (green matrix theme + blinking text)
- Centered overlay with semi-transparent backdrop
- Auto-disappears after ~10 seconds
- No dependencies — pure vanilla JS + CSS-in-JS
- Delivered as a single external `.js` file via **jsDelivr + GitHub**

## One-line injection (most common usage)

```html
<script src="https://cdn.jsdelivr.net/gh/YOUR_USERNAME/xss-poc@main/xss-js.js"></script>

