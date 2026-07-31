# Exercise 02: Interactive Navigation
### 35 minutes — the main guided practical

## Purpose

Your first real DOM manipulation: a button that changes something on the page when clicked. This is today's core exercise — spend most of your remaining session time here.

## What You'll Build

A toggle button that shows/hides your nav menu when clicked.

## The Three Steps (Same Pattern Every Time You Add Interactivity)

1. **Select** the elements you need with `document.querySelector()`.
2. **Listen** for an event with `addEventListener()`.
3. **Change** something when the event fires — usually by toggling a CSS class.

## Example Shape

```html
<header>
  <p>Your Name</p>
  <button id="nav-toggle" class="nav-toggle">☰ Menu</button>
  <nav>
    <ul id="nav-menu" class="nav-menu">
      <li><a href="#hero">Home</a></li>
      <li><a href="#about">About</a></li>
      <!-- ...rest of your nav links -->
    </ul>
  </nav>
</header>
```

```css
.nav-menu {
  display: none; /* hidden by default */
}

.nav-menu.open {
  display: block; /* shown when the 'open' class is added */
}
```

```javascript
const navToggle = document.querySelector('#nav-toggle');
const navMenu = document.querySelector('#nav-menu');

navToggle.addEventListener('click', function () {
  navMenu.classList.toggle('open');
});
```

`classList.toggle('open')` adds the class if it's missing, and removes it if it's already there — that's what makes clicking the button work as an on/off switch, without you having to check the current state yourself.

## Requirements Checklist

- [ ] A button exists (`#nav-toggle` or your own name for it).
- [ ] `document.querySelector()` correctly selects both the button and the nav menu — confirm with `console.log()` if you're not sure a selection worked.
- [ ] `addEventListener('click', ...)` is attached to the button.
- [ ] Clicking the button visibly shows/hides the nav menu.

## Where To Start

Open `starter/index.html`, `starter/style.css`, and `starter/script.js`. These continue from your Mission 02 files — copy your own portfolio's content in if you're working on your real site, or use these as a fallback to test against.

## Common Mistakes To Avoid

- Forgetting to link `script.js` in your HTML (`<script src="script.js"></script>`, usually just before `</body>`).
- A typo in the selector (e.g. `#nav-toggl`) — this fails **silently**, no error, the click just does nothing. This is the single most common bug today. If your button does nothing, `console.log(navToggle)` first, before anything else, to confirm it's not `null`.
- Putting the `<script>` tag in `<head>` without any adjustment — if the script runs before the HTML elements exist, `querySelector` will return `null`. Keeping the script tag at the bottom of `<body>` (as shown above) avoids this.

## Done Early?

Move to `exercises/03-dark-mode/` for the mission challenge slot. If you don't get there, that's homework — see `after-session.md`.
