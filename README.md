# Pixeldynamics — Experimental Animation Studio

A brutalist, high-motion prototype for an experimental animation studio. Built as a single-page site: stark black-and-white type, vibrant red accents, and scroll-driven interaction designed to feel like a digital art exhibition.

**[Live site →](https://nsak00.github.io/nexus/)**

## Highlights

- **Hero — The Master Splash**: full-bleed autoplaying showreel with a film-grain overlay and oversized brutalist type.
- **Exhibition Room**: vertical scroll drives a pinned, horizontally-panning gallery — hover any frame for a scale/warp reaction. A glitch-mask transition bridges into the next section.
- **Studio Profile**: a sharp, technical "blueprint" layout — thin grid lines, monospace spec-sheet cards, crosshair corner marks.
- **The Last Pulse**: parallax closing statement with a screen-blend analog texture and contact CTA.

## Stack

Plain HTML + inline styles + vanilla JS (scroll listeners, `IntersectionObserver`, `requestAnimationFrame` easing). React is loaded at runtime from CDN by `support.js` to render the page — there is no build step.

## Running locally

Just open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Deploying

This repo is already structured for GitHub Pages — no build step required.

1. Push `index.html`, `support.js`, and `uploads/` to the root of the `main` branch.
2. In **Settings → Pages**, set source to `Deploy from a branch`, branch `main`, folder `/ (root)`.
3. Site goes live at `https://nsak00.github.io/nexus/`.

## Structure

```
.
├── index.html      # the full page
├── support.js      # tiny runtime that loads React/Babel and mounts the page
└── uploads/         # showreel video + generated imagery
```

## Credits

All imagery and video are original Gemini-generated assets created for this prototype.
