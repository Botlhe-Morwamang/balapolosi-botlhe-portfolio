# Exercise 01: CSS Styling Basics
### 20 minutes

## Purpose

Apply your first real styling to the skeleton you built in Mission 01. Small, deliberate changes — not a full redesign.

## What You'll Do

1. Link a stylesheet to your portfolio's `index.html`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
   (Put this inside `<head>`, after the `<title>`.)

2. In `style.css`, style:
   - **Background** — give `body` a background colour (or keep it white on purpose — that's a choice too).
   - **Text colour** — set a readable text colour, with enough contrast against your background.
   - **Font** — set a `font-family` on `body`. System fonts are fine (e.g. `sans-serif`), or try importing a Google Font if you want to experiment.
   - **Spacing** — add some `padding` to your `<section>` elements so content isn't jammed against the edges.

## A Note On The Cascade

If you write two rules that both apply to the same element, the more specific one (or the later one, if equally specific) wins. Try this on purpose once: write `body { color: black; }` and then, below it, `body { color: navy; }` — check which one actually renders and confirm it's what you expected. This is a fast way to build real intuition for the cascade instead of just hearing about it.

## Requirements Checklist

- [ ] Stylesheet is linked and visibly affecting the page (not silently failing to load — check DevTools' Network tab if unsure).
- [ ] `body` has an explicit background colour, text colour, and font.
- [ ] At least one selector uses a **class** (e.g. `.section-heading`), not just element selectors.
- [ ] Sections have visible padding — content shouldn't touch the edges of the browser window.

## If You're Using Your Own Mission 01 Skeleton

Use your own file — that's the real target of today's styling. The `starter/` folder here has a copy of a basic skeleton in case you need a working fallback to test against, but your actual portfolio file is what matters.

## Done In Under 20 Minutes?

Move to `exercises/02-hero-section-flexbox/` — you'll keep working in the same `style.css` file.
