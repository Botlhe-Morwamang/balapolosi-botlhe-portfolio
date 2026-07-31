# Mission 04: After Session

Today's session got your portfolio live and gave you a five-line taste of Flask. Everything below is real, expected work — it's just not today's work. Give it proper, unhurried time this week.

---

## Homework: Convert Your Portfolio Into Flask

This is the big one, and it's the actual Day 4 curriculum exercise most participants won't finish in-session — that's by design, not a sign you're behind.

**Goal:** take the static portfolio you've built across Missions 01-03 and serve it through the Flask app you started today, instead of opening it directly as a file.

**Target structure:**

```
portfolio/
├── app.py
├── templates/
│   └── index.html
└── static/
    ├── style.css
    └── script.js
```

**Steps:**
1. Move your `index.html` into a new `templates/` folder.
2. Move your CSS and JS files into a new `static/` folder.
3. In `app.py`, update your route so it renders the template instead of returning a plain string:
   ```python
   from flask import Flask, render_template

   app = Flask(__name__)

   @app.route("/")
   def home():
       return render_template("index.html")

   if __name__ == "__main__":
       app.run(debug=True)
   ```
4. Inside `index.html`, update your CSS/JS `<link>` and `<script>` tags to point to Flask's static file convention, e.g.:
   ```html
   <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
   <script src="{{ url_for('static', filename='script.js') }}"></script>
   ```
5. Run it (`python app.py` or `flask run`) and confirm your site looks and behaves *exactly* like it did as a plain static site — nothing should visually change yet. If something breaks, it's almost always a path issue between `templates/`/`static/` and your `<link>`/`<script>` tags.

**Take your time here.** Getting `templates/` and `static/` path conventions right the first time will save you real confusion in Mission 05.

## Security Challenge: Find The Vulnerability

Look at this code:

```python
password = "admin123"
```

Write down (a paragraph is plenty):
- What's actually wrong with this, beyond "it's a bad password"
- What you'd do instead in a real project (hint: research environment variables and `.env` files — see `resources.md`)
- One other place in your own portfolio project where you're currently trusting input you haven't validated

There's no code to submit for this one — it's a reflection exercise. The goal is recognizing the pattern the next time you see it, not memorizing a fix.

## Side Quest: Explore Beyond GitHub Pages

If your site is live and you want to go further:
- Look at what a custom domain would take (you don't need to buy one — just understand the DNS steps involved)
- Try deploying the same static site to Netlify as well, and compare the experience to GitHub Pages
- Add a `.gitignore` file to your repository if you don't already have one, and research what belongs in it for a Python/Flask project specifically (hint: `__pycache__/`, `.env`, `venv/`)
- Explore Docker and attempt to launch your "new" site using it.

## Looking Ahead To Mission 05

Mission 05 is Launch Day — final polish, the Flask bonus (if you've got it working), and your presentation. The more of this homework you get through this week, the more of Mission 05's limited time you'll have free for genuine polish instead of catch-up. This is the one mission where homework directly determines how relaxed your final session feels.
