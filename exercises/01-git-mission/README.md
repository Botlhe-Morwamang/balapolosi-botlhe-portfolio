# Exercise: Git Mission

**Time:** ~15 minutes (guided) · **Goal:** turn your portfolio folder into a real Git repository with a genuine commit history.

**Before you start:** this assumes you've already completed the GitHub account + local Git login setup guide. If you haven't, do that first — this exercise picks up right where it leaves off, with your very first real commit.


## Task

Working inside your existing portfolio folder (the one you've been building since Mission 01):

1. Initialize a Git repository.
2. Create a `.gitignore` (a starter one is provided in `starter/`).
3. Stage and make your **first commit**: "Initial portfolio structure".
4. Make one small, real change to your site (anything — a typo fix, a colour tweak).
5. Stage and commit that change with its own clear message: "Added styling" or similar, describing what actually changed.
6. Create a new, empty repository on GitHub (don't initialize it with a README — you already have content).
7. Connect your local repository to it as a remote, and push.

## Required Commits (Minimum)

Per the curriculum, by the end of this exercise your history should show at least:
- `Initial portfolio structure`
- `Added styling`
- `Added JavaScript features`

If your styling and JavaScript were already both in place before today (likely, since you built them in Missions 02 and 03), it's fine to represent them as one combined early commit plus today's real new commit — the point is that your history tells an honest story of your project, not that it artificially recreates three commits that didn't really happen separately.

## Starter Files

`starter/.gitignore.example` — a starter ignore file for a portfolio project. Copy this into your portfolio folder as `.gitignore` before your first commit, so you never accidentally commit clutter like OS files.

## Common Errors

- **"fatal: not a git repository"** — you're not inside your portfolio folder. `cd` into it first.
- **"nothing to commit"** — you haven't run `git add` yet, or you already committed everything.
- **Push rejected / authentication failed** — flag your facilitator immediately. This is almost always an account-auth setup issue, not something wrong with your commits.

## Skills Practiced

- `git init`
- `git add` / `git status`
- `git commit -m "..."`
- `git remote add origin <url>`
- `git push -u origin main`
