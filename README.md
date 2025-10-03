# Personal Website (GitHub Pages)

This repository contains the source for **Dr. Aman Abidi**’s personal website, powered by **GitHub Pages** and the **Jekyll Minimal** theme.

## Quick Start (no local setup)
1. Create a new public repository named **`amanabidi.github.io`** on GitHub.
2. Upload the files from this folder to the repository root (or push via `git`).
3. Go to **Settings → Pages** and ensure the site is served from the **`main`** branch (root).  
   Your site will be available at `https://amanabidi.github.io/` within a couple of minutes.

## Customise
- Edit `index.md` to update content.
- Update `_config.yml` with your social links, title/description, and (optionally) a logo.  
  Add your photo at `assets/img/profile.jpg` and then set `logo: /assets/img/profile.jpg` in `_config.yml`.
- Create additional pages (e.g., `publications.md`, `teaching.md`) with the front matter:
  ```yaml
  ---
  layout: default
  title: Publications
  ---
  ```
  and link them from `index.md`.

## Optional (custom domain)
- Add your domain’s DNS `CNAME` record pointing to `amanabidi.github.io`.
- Create a `CNAME` file at the repo root containing your domain, e.g. `amanabidi.dev`.

## Notes
- This site uses only whitelisted GitHub Pages plugins (`jekyll-seo-tag`, `jekyll-sitemap`) and requires no Ruby setup locally.
- For a richer academic theme later, consider **Minimal Mistakes**, **al-folio**, or **academicpages**. Start simple here, upgrade when needed.
