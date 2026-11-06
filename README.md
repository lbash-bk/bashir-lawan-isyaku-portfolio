# Bashir Lawan Isyaku | Portfolio

Personal portfolio website: data analysis projects, dashboards and software engineering work.

Built with plain HTML, CSS and JavaScript (no frameworks) and hosted on GitHub Pages.

## Run locally

Open a terminal in this folder and run:

    python -m http.server 8000

Then visit http://localhost:8000 in your browser.

## Folder structure

    index.html            Homepage
    project.html          Case-study page (builds any project from projects.js)
    assets/css/           base, layout, components, interactions
    assets/js/            projects.js (content), main.js (interactive features)
    assets/images/        profile photo and project screenshots
    assets/docs/          CV (PDF)

## Add a new project

1. Open `assets/js/projects.js`.
2. Copy one project object inside `PROJECTS` and change its values.
3. Add screenshots to `assets/images/projects/` and reference them in the `thumb` and `screenshots` fields.
4. Save, commit and push. The card and the case-study page appear automatically.

## Contact

blawanbkd@gmail.com
