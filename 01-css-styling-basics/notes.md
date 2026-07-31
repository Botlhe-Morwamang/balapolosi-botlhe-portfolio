# Checkpoint Notes: CSS Styling Basics

Quick check against the exercise's requirements:

- **Background, text colour, and font on `body`** — dark navy background, white text, `Inter` font. Contrast is deliberately high (white on navy) so text stays readable.
- **A class selector, not just element selectors** — `.section-heading` is applied to every `<h2>` across sections. Notice it's added as a `class` attribute in the HTML, not targeted by tag name — that's the difference the exercise is checking for.
- **Padding on sections** — `section { padding: 2rem; }` — content no longer touches the browser edges.

## The Cascade Experiment

The commented-out block at the bottom shows the exercise: with two `body { color: ... }` rules of equal specificity, **the later one in the file wins** — `navy` overrides `black`. This is the simplest possible cascade example, and it's worth actually uncommenting and checking in DevTools rather than taking on faith.

## Where The Brand Colours Came From

The navy/electric-blue/white choice here matches `docs/brand-guide.md` — used here purely as one demonstration of a cohesive palette. Your own colour choices for your own portfolio are entirely up to you; this isn't a required palette.

## What's Deliberately Not Here

No Flexbox, no Grid, no responsive behavior yet — those come in the next two checkpoints. This solution is intentionally just the base layer.
