# Checkpoint Notes: Hero Section (Flexbox)

Quick check against the exercise's requirements:

- **`.hero` uses `display: flex`** — `.hero-text` and `.hero-image` are now flex children, laid out side by side instead of stacking on their own.
- **`align-items: center`** vertically centers the text block against the image, so a taller element doesn't leave the shorter one awkwardly pinned to the top.
- **`justify-content: space-between`** pushes the two children to opposite sides with breathing room between them — combined with the `gap: 2rem`, which does the same job more predictably (either works; `gap` is generally the more modern choice).
- **`flex: 1` on both children** gives them equal width so neither dominates the layout by default. Try removing it and see how the image (which has an intrinsic size) starts crowding the text.
- **The CTA button** (`.cta-button`) is styled to actually look clickable — padding, background colour, and no underline (`text-decoration: none`) so it reads as a button, not a plain link.

## Why `align-items` Matters Here

Without `align-items: center`, flex children default to `stretch` — meaning `.hero-text` and `.hero-image` would both stretch to match the height of whichever is tallest, which often looks wrong for a Hero (e.g. the image div stretching taller than the actual image inside it). Try commenting out `align-items` and compare — this is the fastest way to feel why the default matters.

## What's Deliberately Not Here

This layout is **not yet responsive** — at a narrow width, `.hero-text` and `.hero-image` will squash into two cramped columns instead of stacking. That's intentional: fixing it is the Responsive Challenge homework in `after-session.md`, not part of this exercise.
