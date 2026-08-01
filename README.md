# Balapolosi Botlhe Morwamang — Developer Portfolio

## About My Project
A responsive, professional portfolio website built as my final project for X3 Labs' 
Mission: Genesis bootcamp. It showcases my background as a Soil and Water Conservation 
Engineering student, my technical projects, and provides a working way for visitors 
to get in touch.
**Live:**(https://botlhe-morwamang.github.io/balapolosi-botlhe-portfolio/#)
**Repository:** (https://github.com/Botlhe-Morwamang/balapolosi-botlhe-portfolio.git)

## Features
- Responsive navigation with mobile menu toggle
- Dark mode / theme switcher
- Hero section with introduction and professional title
- About, Education, Skills, and Projects sections
- Projects grid showcasing 4 real engineering projects with linked reports
- Working contact form with client-side validation (name, email, message)
- Contact form submissions delivered via FormSubmit — no backend required for the live site
- Bonus: A separate Flask backend that processes the same contact form locally, 
  demonstrating backend fundamentals (routes, environment variables, SMTP email sending)

## Technologies Used
- HTML5 (semantic structure)
- CSS3 (responsive design, custom properties, dark mode)
- JavaScript (DOM manipulation, form validation, fetch API)
- Git & GitHub (version control, GitHub Pages deployment)
- Python & Flask (bonus backend)
- python-dotenv (secure credential management)
- FormSubmit (third-party form delivery service)

## Challenges I Overcame
- Setting up Python and fixing a Windows PATH issue that prevented `pip`/`python` 
  from being recognized (resolved using the `py` launcher)
- Debugging a Gmail SMTP authentication error by generating and correctly applying 
  an App Password
- Identifying and removing duplicated code blocks in both `app.py` and `script.js` 
  that were causing silent errors and duplicate contact forms
- Realizing my local Flask server wouldn't work for real visitors on a live site, 
  and integrating FormSubmit as a backend-free solution instead
- Diagnosing a security software (Kaspersky) false positive that was silently 
  blocking form submissions, and resolving it via a trusted URL exception

## Future Improvements
- Convert the static site into a full Flask-templated version (as outlined in 
  Day 4, Exercise 4) and deploy it on a platform like Render
- Add a project filter by category
- Add a downloadable CV/resume link
- Fetch and display GitHub repositories dynamically using the GitHub API
- Add smooth scroll animations between sections