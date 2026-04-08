# Finance Portfolio Website

A lightweight static website for presenting finance experience, valuation work, and investment pitches.

## Local preview

Because this is a static site, you can run any local server. Example:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Updating your content

1. Edit `index.html` sections for your actual resume experience and project bullets.
2. Add your PDFs into `assets/docs/`.
3. Update each button's `data-pdf` path in `index.html`.
4. Replace contact links in the Contact section.

## Deploying to `tejprattipati.me`

You can host this on any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages). A clean path is **Cloudflare Pages + Cloudflare DNS**:

1. Push this repo to GitHub.
2. In Cloudflare Pages, create a project from this repository.
3. Build command: *(none)*
4. Output directory: `/` (root)
5. Deploy.
6. In Cloudflare Pages → Custom domains, add `tejprattipati.me` and optionally `www.tejprattipati.me`.
7. In your DNS zone, ensure the Cloudflare-provided CNAME/A records are active.

Once DNS propagates, your portfolio will be live on your custom domain.
