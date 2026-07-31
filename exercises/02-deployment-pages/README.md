# Exercise: Deployment Challenge

**Time:** ~20 minutes (guided) · **Goal:** get your portfolio live at a real, public URL.

Requires: `04-git-mission` completed first — your portfolio needs to already be pushed to GitHub before you can deploy it.

## Task

1. On your GitHub repository page, go to **Settings → Pages**.
2. Under "Build and deployment", set the source to deploy from your `main` branch (root folder, unless your facilitator tells you otherwise).
3. Save, and wait a minute or two — GitHub will build and publish your site.
4. Find your live URL (GitHub will show it on the same Pages settings screen once it's ready — it'll look like `https://<your-username>.github.io/<your-repo-name>/`).
5. Open that URL in your browser. This is your site, live, on the actual internet.
6. Make one visible change locally (anything small), commit it, and push.
7. Refresh your live URL after a minute and confirm the change appears.

## What "Success" Looks Like

You have a URL you could genuinely text to a friend or paste into a job application, and it shows your real portfolio — not a placeholder, not a GitHub error page.

## Common Issues

- **404 page instead of your site** — check that your homepage file is named exactly `index.html` at the root of what you deployed (or the correct subfolder, if you organized differently).
- **Site looks unstyled / broken** — almost always a path issue: check that your CSS/JS `<link>`/`<script>` paths are relative, not pointing to a location that only existed on your own machine.
- **Nothing shows up yet** — give it a couple of minutes; GitHub Pages builds aren't instant. Refresh, don't panic.

## Starter Files

None needed for this exercise — you're deploying the real portfolio you already have. `starter/` is left in place structurally for consistency with other exercises, but there's nothing to copy from it.

## Skills Practiced

- Understanding what "deployment" means in practice
- GitHub Pages configuration
- Connecting a code change → commit → push → live update, end to end
