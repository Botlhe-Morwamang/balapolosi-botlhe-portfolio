# Exercise: Flask Hello World

**Time:** ~20 minutes · **Goal:** run your first web server and see it respond in a browser.

This is deliberately tiny. You are **not** converting your portfolio today — that's homework (see `after-session.md`). Today you just need to see a server respond, once, with your own eyes.

## Task

1. Install Flask if you haven't already:
   ```
   pip install flask
   ```
2. Open `starter/app.py` — it has TODO markers for the two things you need to add.
3. Complete the TODOs so the app defines one route (`/`) that returns a short message.
4. Run it:
   ```
   python app.py
   ```
5. Open `http://127.0.0.1:5000` (or whatever address your terminal shows) in your browser.
6. See your message appear.

## Reflection (Say Out Loud, To Yourself Or A Neighbor)

- What did you just do that's different from double-clicking an HTML file?
- Your browser sent a *request*. Something on your own machine sent back a *response*. What was that "something"?

That's the whole concept for today. Everything else about Flask — templates, static files, routes with real portfolio content — is this week's homework.

## Common Issues

- **`ModuleNotFoundError: No module named 'flask'`** — Flask isn't installed in the Python environment you're running. Re-run the `pip install flask` step.
- **`Address already in use`** — something else (maybe a previous run of this same app) is already using port 5000. Stop it, or change the port in `app.run(port=5001)`.
- **Nothing happens when you visit the URL** — check your terminal is still running the app (it should show a line like `Running on http://127.0.0.1:5000`); if you closed that terminal, the server stopped.

## Starter Files

`starter/app.py` — has two `# TODO` markers: one for the Flask import/app setup, one for the actual route.

## Skills Practiced

- Running a Python script from the command line
- The absolute basics of a Flask route
- Reading a terminal's server output
