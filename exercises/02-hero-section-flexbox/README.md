# Exercise 02: Hero Section (Flexbox)
### 35 minutes — the main guided practical

## Purpose

Turn your Hero section into a real, laid-out design using Flexbox. This is today's core exercise — spend most of your remaining session time here.

## What You'll Build

A Hero section with:

1. Your name and title (already there from Mission 01).
2. A short description sentence (already there).
3. **New:** a call-to-action button (e.g. "View My Work" linking to `#projects`).
4. **New:** an image or placeholder graphic.
5. Layout: text on one side, image on the other (or stacked, if you prefer that look) — using Flexbox, not floats or manual positioning.

## Example Shape

```html
<section id="hero" class="hero">
  <div class="hero-text">
    <h1>Your Name</h1>
    <p>Aspiring Web Developer — learning to build websites that solve real problems.</p>
    <a href="#projects" class="cta-button">View My Work</a>
  </div>
  <div class="hero-image">
    <img src="https://placehold.co/300x300" alt="Placeholder hero graphic">
  </div>
</section>
```

```css
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}
```

Don't copy this verbatim — use it as a shape, adapt it to your own content and taste.

## Requirements Checklist

- [ ] `.hero` (or your Hero section) uses `display: flex`.
- [ ] Text and image are positioned using `flex-direction`, `justify-content`, and/or `align-items` — not manual margins to "nudge things into place."
- [ ] A call-to-action link/button exists and points somewhere real (e.g. `#projects`).
- [ ] The layout doesn't visually break at your current browser width (we'll deliberately break it on purpose in the Responsive Challenge homework — don't fix mobile yet, just get desktop right).

## Where To Start

Keep working in the same `style.css` and `index.html` from Exercise 01 — this isn't a separate file, it's the next layer on the same page. The `starter/` folder here has the Hero markup pre-added with `<!-- TODO -->` comments if you want a reference point.

## Common Mistakes To Avoid

- Using `text-align: center` and manual margins to fake a layout instead of `display: flex`.
- Forgetting `align-items` — without it, flex children default to stretching to match each other's height, which often looks wrong for a Hero with an image.
- Spending the whole 35 minutes tweaking exact pixel values — get the structure right first, exact polish is homework-tier.

## Done Early?

Move to `exercises/03-skills-grid/` for the mission challenge slot. If you don't get there, that's homework — see `after-session.md`.
