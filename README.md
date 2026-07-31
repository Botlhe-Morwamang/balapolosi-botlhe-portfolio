# Mission 04: "Ship Like a Professional"

> Git & GitHub · Deployment · Your First Web Server · Secure Coding Habits

---

## Mission Briefing

Your portfolio has looked good since Mission 02 and it's had interactivity since Mission 03. But right now it only exists on your laptop. Today it becomes **real** — tracked with version control, pushed to GitHub, and live on the internet at a URL you can actually send someone.

You'll also meet the backend for the first time. Not as "learning Python" — as building **your first web server**, the thing that turns a static page into an application that can respond to requests. And you'll pick up the handful of security habits every professional developer carries from day one, before you ever ship anything real.

By the end of today: your code has a history, your site has a pulse (a live URL), and you've seen — even briefly — what's on the other side of the browser.

## Honest Time Framing

This is the busiest mission on paper — Git, deployment, Flask, and security are four separate topics that could each eat a full session. We are **not** doing all four in full depth today. That would mean rushing everything and mastering nothing.

Today's session goes deep on **Git & GitHub → Deployment** (they're sequential: commit, push, deploy — one flows into the next) and gives you a **tiny, real** taste of Flask. Security is a conversation, not a coding exercise, today. The full Flask conversion of your portfolio is homework, done at your own pace — see `after-session.md`.

## Session Segment Table (120 Minutes)

| Segment | Time | What Happens |
|---|---|---|
| Welcome, recap & mission briefing | 10 min | Recap Mission 03, introduce today's arc: commit → push → deploy → serve |
| Concept introduction | 20 min | Git/GitHub mental model, what deployment actually means, secure coding habits (conceptual) |
| Live coding demonstration | 25 min | Facilitator commits + pushes a repo live, deploys it to GitHub Pages, then runs a 5-line Flask hello-world server |
| Guided practical exercise | 35 min | You do the same: init your repo, commit your portfolio, push to GitHub, deploy with GitHub Pages |
| Mission challenge / side quest | 20 min | Flask Hello World — get a tiny local server running and see it respond in your browser |
| Q&A, recap & homework | 10 min | Preview homework: converting your whole portfolio into a Flask app |

**Realistic hands-on time today: ~55 minutes** (guided practical + mission challenge). Everything beyond that — most importantly the full Flask conversion — is homework, and that's by design.

## What You'll Build Today

| Item | In Session? | Where |
|---|---|---|
| Git repository with real commit history | ✅ Yes | Your existing portfolio folder |
| Portfolio live on GitHub Pages | ✅ Yes | A real URL you can share |
| A working Flask "Hello World" server on your machine | ✅ Yes (tiny) | `exercises/03-flask-hello-world/` |
| Your full portfolio running as a Flask app | ⬜ Homework | `after-session.md` |
| Security discussion — what NOT to do | ✅ Yes (conceptual only) | Covered in concept intro, revisited in homework |

## Folder Map

## Folder Map

```
04-deployment/
├── README.md                 ← you are here
├── objectives.md              ← what you should walk out able to do
├── resources.md                ← links: session-need vs homework-research
├── after-session.md              ← Flask conversion, security challenge, side quests
└── exercises/
    ├── 01-git-mission/            ← init, commit, push
    ├── 02-deployment-pages/        ← go live on GitHub Pages
    └── 03-flask-hello-world/        ← your first web server, five lines
```

## How To Use This Mission

1. Read this README, then `objectives.md`, so you know what "done" looks like today.
2. Follow along with the live demo — don't try to work ahead, Git mistakes are much easier to fix when you've seen the whole flow once first.
3. Work through the three exercises in order — each one depends on the folder from the last.
4. Everything in `after-session.md` is real work, just not today's work. Budget real time for it this week.

## Getting Help

Stuck on a Git error? Nine times out of ten it's one of: wrong folder, uncommitted changes, or a typo in a remote URL. Read the error message out loud before asking — Git's errors are unusually literal. If GitHub push authentication is the blocker, flag your facilitator immediately rather than troubleshooting alone; account/token issues eat time fast.
