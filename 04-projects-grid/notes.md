# Checkpoint Notes: Projects Grid (CSS Grid)

Quick check against the exercise's requirements:

- **`.projects-grid` uses `display: grid`** — its children (`.project-card`) become grid items automatically, same as `.skills-grid` in Exercise 03.
- **`grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))`** — this is a different pattern from Skills Grid's `repeat(3, 1fr)`. `auto-fit` tells the browser "fit as many columns as will comfortably hold `minmax(260px, 1fr)` each" instead of hardcoding a count — so the column count itself changes as the window resizes.
- **`gap: 1.5rem`** — one rule handling spacing between every card, same reasoning as Skills Grid.
- Each `.project-card` carries an `<img>`, `<h3>`, `<p>`, and a `.tech-tags` line — a heading-plus-description pattern, now with an image on top, same shape as `.skill-card` from Exercise 03.
- **`aspect-ratio: 16 / 9;` and `object-fit: cover;`** on `.project-card img` keep every placeholder image the same shape regardless of its actual dimensions — without this, differently-sized images would make the cards uneven.

## Try This

Resize your browser narrower and watch the number of columns change on its own — no media query involved. Now go back and resize the Skills Grid from Exercise 03 the same way: it doesn't reflow, because `repeat(3, 1fr)` is a fixed count. That difference — fixed count vs. `auto-fit` — is the whole reason the homework in `after-session.md` asks you to swap Skills Grid over to this pattern too.

## Grid Pattern, Reused

`.skills-grid` and `.projects-grid` are the same idea — `display: grid`, a `grid-template-columns` rule, a `gap` — applied twice. The only real difference is the column-sizing strategy: fixed count (Exercise 03) vs. `auto-fit`/`minmax` (this exercise). Once you've built a grid one way, building it the second way should already feel familiar — that repetition is intentional.

## What's Deliberately Not Here

Only 2 project cards are shown, with placeholder images, generic titles, and a `#` link. Real project screenshots, descriptions, and GitHub links are Mission 05 personalization work, not this exercise. The Skills Grid inside this same file still uses its Exercise 03 fixed-column layout — making both grids consistently `auto-fit` is part of the Responsive Challenge homework in `after-session.md`, not something either exercise requires on its own.