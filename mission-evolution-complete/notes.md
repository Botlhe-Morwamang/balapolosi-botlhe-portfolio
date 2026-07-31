# Checkpoint Notes: Mission 02 Final (Session + Homework Combined)

Quick check against the "80% parity" target — everything below is homework
closing the gap on top of what the four session exercises already built:

- **Universal reset** (`* { margin: 0; padding: 0; box-sizing: border-box; }`)
  removes inconsistent browser default spacing before anything else is laid out.
- **`header { position: sticky; top: 0; z-index: 10; }`** keeps navigation
  reachable while scrolling, with a border to visually separate it from content.
- **`section { max-width: 1100px; margin: 0 auto; }`** stops text from
  stretching edge-to-edge on wide screens — content stays a comfortable
  reading width no matter how wide the browser window is.
- **`a { color: var(--electric-blue); }`** is set once, globally, replacing
  what would otherwise be repeated colour rules on every individual link.
- **`.hero-image img { border-radius: 50%; }`** turns the portrait circular —
  a small rule, but this is the detail that makes a Hero section look
  designed rather than assembled.
- **`.hero { flex-wrap: wrap; }`** plus the `column-reverse` rule inside the
  media query means the image appears *above* the text on mobile, not below
  it — a deliberate reading-order choice, not just "things stack."
- **Both grids now use `repeat(auto-fit, minmax(...))`** — the Skills Grid
  switched over from its Exercise 03 fixed `repeat(3, 1fr)`, so it now
  reflows exactly like the Projects Grid already did.
- **Nav collapses to a stacked column under 720px**, with no JavaScript and
  no toggle button — that's an honest stopping point, since the hamburger
  button that would let you hide/show it doesn't exist until Mission 03.

## Try This

Open DevTools' device toolbar and drag the width down past 720px. Watch four
things happen at once: the nav stacks, the hero image moves above the text,
and both grids collapse toward a single column. Then compare this file
against `04-projects-grid/solution/` — same HTML sections, same classes,
noticeably rougher edges (square image, fixed Skills columns, no sticky
header, nav that just overflows instead of stacking).

## Session vs. Homework, Concretely

Every exercise checkpoint (`01` through `04`) shows what's achievable in the
session's ~55-60 minutes of real hands-on time. This file shows what closes
the remaining gap: not new sections or new concepts, just small, specific
CSS additions layered on top of structure that was already there. That's
the whole idea behind treating this as homework rather than session
content — polish takes real trial-and-error time that a fixed session
can't absorb.