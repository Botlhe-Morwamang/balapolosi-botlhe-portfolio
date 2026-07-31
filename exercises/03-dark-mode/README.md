# Exercise 03: Dark Mode
### 20 minutes — mission challenge slot, often spills into homework

## Purpose

A second practice round of the same pattern from Exercise 02 (select → listen → change), applied to something more visible: a full theme switch. If you don't finish this in session, that's expected — it's homework, not a gap.

## What You'll Build

A "Switch Theme" button that toggles a class on `<body>`, swapping your colour scheme.

## The Same Three Steps

1. **Select** the button.
2. **Listen** for a click.
3. **Change** something — this time, toggle a class on `<body>` instead of on the nav menu.

## Example Shape

```html
<button id="theme-toggle">Switch Theme</button>
```

```css
body.light-mode {
  background-color: #ffffff;
  color: #0d1b2a;
}

body.light-mode .skill-card {
  background-color: #f0f0f0;
  border-color: #0d1b2a;
}
```

```javascript
const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('click', function () {
  document.body.classList.toggle('light-mode');
});
```

Notice this is the *exact same pattern* as Exercise 02 — select, listen, toggle a class. Once this pattern clicks, most beginner JavaScript interactivity is a variation on it.

## Requirements Checklist

- [ ] A "Switch Theme" (or similarly labeled) button exists.
- [ ] Clicking it toggles a class on `document.body`.
- [ ] At least one CSS rule actually changes visibly when the class is present (background colour is the easiest to see).

## Ran Out Of Time?

Totally expected — this is the first thing to drop if the session runs long. Finish it as homework; see `after-session.md`. If you do finish both this and Exercise 02 in session, you've essentially done two rounds of the same core pattern — a good sign it's starting to feel familiar.
