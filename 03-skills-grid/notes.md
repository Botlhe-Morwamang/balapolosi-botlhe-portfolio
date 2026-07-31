# Checkpoint Notes: Skills Grid (CSS Grid)

Quick check against the exercise's requirements:

- **`.skills-grid` uses `display: grid`** — its children (`.skill-card`) become grid items automatically.
- **`grid-template-columns: repeat(3, 1fr)`** creates exactly 3 equal-width columns. `1fr` means "one fraction of the available space" — with three of them, each gets a third.
- **`gap: 1rem`** replaces manually setting `margin` on every card — one line handles spacing between all grid items, both horizontally and vertically, consistently.
- Each `.skill-card` has padding, a border, and a background colour so it visually reads as a distinct card rather than plain text sitting in a row.

## Try This

Change `repeat(3, 1fr)` to `repeat(2, 1fr)` or `repeat(4, 1fr)` and reload — this is the fastest way to build real intuition for what the column count is actually doing, faster than reading about it.

## Grid vs. Flexbox, Concretely

Compare this file's `.hero` (Flexbox, Exercise 02) against `.skills-grid` (Grid, this exercise). The Hero only needed to arrange two things side-by-side — one dimension. The Skills Grid needed multiple items to wrap into rows *and* stay aligned in columns — two dimensions at once. That's the practical difference, not just a definition to memorize.

## What's Deliberately Not Here

Only 3 skill cards are shown, and the grid isn't responsive yet — at a narrow screen width, `repeat(3, 1fr)` will squash three columns into an unreadably narrow layout. Making the grid adapt (e.g. switching to 1 or 2 columns on mobile via a media query) is part of the Responsive Challenge homework in `after-session.md`, not this exercise.
