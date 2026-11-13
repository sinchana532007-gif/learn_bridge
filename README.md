# Learn Bridge

A student and mentor learning portal for **Music**, **Public Speaking & Communication** and **Python**.

Students choose what to learn, practise with a timer, recorder and code editor, and send their work to a mentor. Mentors accept students, review the work, point out mistakes, guide the student and share notes, photos and media.

## Run it

**Option A: VS Code + Live Server (easiest)**
1. Open this folder in VS Code (File → Open Folder).
2. Install the **Live Server** extension when VS Code suggests it (or search "Live Server" by Ritwick Dey in Extensions).
3. Right-click `index.html` → **Open with Live Server**. The app opens at http://127.0.0.1:5500.

**Option B: terminal**
- With Node.js: `npm start`
- With Python: `python -m http.server 5500`, then open http://localhost:5500

Use a local server rather than double-clicking `index.html`, so the microphone and camera work.

## Project structure

```
learn-bridge/
├── index.html              Page shell
├── css/styles.css          All styles (light and dark mode, responsive)
├── js/core.js              Utilities, local database (localStorage), sessions
├── js/catalog.js           Learning topics and exercises, demo mentors, media storage, downloads
├── js/components.js        Practice timer, audio/video recorder, file attachments, media viewer
├── js/public-views.js      Home page, login / create account, mentor profile
├── js/student.js           Student portal: topics, exercises, submissions, notes
├── js/mentor-and-app.js    Mentor portal, review, routing, events, app start
└── docs/mentor-accounts.md Demo mentor logins (team reference only)
```

## Data

Everything is stored in the browser: accounts and work in `localStorage`, recordings and files in `IndexedDB`. Use the same browser on the same computer for student and mentor. To reset, clear the site data in the browser.

## Demo mentors

See `docs/mentor-accounts.md`. All demo mentors use the password `mentor123`.
