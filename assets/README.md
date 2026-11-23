# OT New Nurse Theory Programme

Self-teaching site for new OT nurses: Must Know Policies, OT Work Instructions, quizzes (80% pass, unlimited retries), final exam, printable theory-only certificate.

## Publish on GitHub Pages
1. Create a repository, upload all files in this folder (index.html, style.css, app.js, data.js, assets/).
2. Settings > Pages > Source: "Deploy from a branch" > main / (root) > Save.
3. Your site opens at https://USERNAME.github.io/REPO/

## Add or edit content
All content is in `data.js`. Copy a module block in `MODULES`, change `id`, `section` ("policy" or "wi"), lessons and questions.
Competency checklist reference: set `practical: { title, note, items: [...] }` on a module (only where a matching subject exists).
Optional: put `logo.png` in `assets/`.

Progress is saved in the nurse's own browser (localStorage). Certificate: Print > Save as PDF, then Head Nurse signs.

Created by Yousuf Al Busaidi — 11764
