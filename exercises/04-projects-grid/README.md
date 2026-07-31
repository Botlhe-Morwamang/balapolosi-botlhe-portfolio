# Exercise 04: Projects Grid (CSS Grid)

## Goal
Same idea as the Skills Grid, applied to a different section: a responsive
grid of project cards. If Exercise 03 clicked, this one should feel
familiar fast — that's on purpose.

## Structure

Each `.project-card` should contain:

```html
<article class="project-card">
  <img src="https://placehold.co/400x225" alt="Placeholder project screenshot">
  <h3>Project 1</h3>
  <p>A short placeholder description of what this project does.</p>
  <p class="tech-tags">Tag · Tag · Tag</p>
  <a href="#">View Project</a>
</article>
```

Use generic placeholders — "Project 1", "Project 2", generic tags, `#` or a
placeholder link. Your real projects come later (Mission 05); today is
purely the layout.

## What to build

1. In `projects-section.html`, build a `<div class="projects-grid">`
   containing 2–3 `.project-card` elements following the structure above.
2. In `projects-grid.css`, style `.projects-grid` as a CSS Grid — same
   approach as `.skills-grid`, but give cards a bit more room since they
   carry more content (`minmax(260px, 1fr)` instead of `minmax(220px, 1fr)`,
   once you get to the responsive version in homework).
3. Style `.project-card` as a card (background, border, radius, padding) —
   consistent with `.skill-card`, since these two sections should feel like
   they belong to the same site.
4. Make the project image behave: constrain its height and crop it so
   different image sizes don't distort the grid. Two properties do this
   together:
   ```css
   .project-card img {
     aspect-ratio: 16 / 9;
     object-fit: cover;
     width: 100%;
   }
   ```
5. Style `.tech-tags` as a small, slightly muted line under the description.

## Check yourself
- Every card has the same structure: image, title, description, tags line,
  link — in that order.
- Placeholder images all crop to the same aspect ratio, even if you use
  differently-sized placeholder images.
- Compare `.project-card` next to `.skill-card` — they shouldn't look like
  they came from two different sites.
