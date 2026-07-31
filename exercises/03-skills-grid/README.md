# Exercise 03: Skills Grid (CSS Grid)
### 20 minutes — mission challenge slot, often spills into homework

## Purpose

A first, light introduction to CSS Grid — full mastery isn't the goal today, just enough to lay out a set of cards. If you don't finish this in session, that's expected and it's homework, not a gap.

## Goal
Turn your `#skills` section into a responsive card grid, where each card has
a **category heading** and a **short description** — not just a bare list of
words.

## Structure

Each `.skill-card` should contain exactly two things:

```html
<div class="skill-card">
  <h3>Category name</h3>
  <p>A short description of what falls under this category.</p>
</div>
```

Use generic placeholder categories for now — things like "Languages",
"Tools", "Design", "Soft Skills" — with a short generic sentence under each.
You'll swap in your real skills later (Mission 05); right now we're only
building the *pattern*.

## What You'll Build

A grid of skill cards — one per skill (e.g. HTML, CSS, JavaScript, Python, Git), each in its own card.

## Example Shape

```html
<section id="skills" class="skills">
  <h2>Skills</h2>
  <div class="skills-grid">
    <div class="skill-card">HTML</div>
    <div class="skill-card">CSS</div>
    <div class="skill-card">JavaScript</div>
    <div class="skill-card">Git</div>
  </div>
</section>
```

```css
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
```

`repeat(3, 1fr)` means "3 equal-width columns" — try changing the `3` to `2` or `4` and see what happens, that's the fastest way to build intuition for Grid.

## Requirements Checklist

- [ ] `.skills-grid` uses `display: grid`.
- [ ] Cards are arranged in columns using `grid-template-columns`.
- [ ] There's visible `gap` between cards (not manual margins on every card).

## Grid vs. Flexbox — Why Two Layout Tools?

Flexbox (Exercise 02) is great for laying things out in **one direction** — a row or a column. Grid is built for **two dimensions at once** — rows *and* columns together, which is exactly what a card layout needs. You'll use both throughout the bootcamp; neither replaces the other.

## Ran Out Of Time?

Totally expected — this is the first thing to drop if the session runs long. Finish it as homework; see `after-session.md`. A cleaner, more responsive version of this grid comes back when you tackle the Responsive Challenge.
