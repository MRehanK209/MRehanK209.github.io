# Muhammad Rehan Khalid — Portfolio

## Files

| Path                   | Purpose                                |
|------------------------|----------------------------------------|
| `index.html`           | Page markup (hero, about, experience, projects, skills, education, contact) |
| `style.css`            | Dark theme, teal/indigo gradient, responsive |
| `script.js`            | Mobile nav, scroll-spy, reveal-on-scroll |
| `assets/profile.png`   | Profile picture                        |
| `assets/CV.pdf`        | Downloadable CV                        |

## Run locally

```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages (recommended)

1. Create a public repo named **`MRehanK209.github.io`** on GitHub
   (the repo name *must* match your GitHub username).
2. Copy everything inside `site/` (not the `site/` folder itself) into the repo root.
3. Commit and push to `main`.
4. GitHub → **Settings → Pages → Source = `main` / root** → Save.
5. Site goes live at `https://MRehanK209.github.io/` in ~1 minute.

```bash
git init -b main
git add .
git commit -m "<Commit Message>"
git remote add origin git@github.com:MRehanK209/MRehanK209.github.io.git
git push -u origin main
```

## Customise

- **Profile picture** — replace `assets/profile.png`.
- **CV** — replace `assets/CV.pdf` (kept at the same path so the link doesn't break).
- **Social links** — search `index.html` for `MRehanK209`, `mrehank209@gmail.com`, and the LinkedIn URL.
- **Add a project** — copy any `<article class="project">` block in the Projects section.
