# Family tree

Private static site: `/` shows two tabs, the ancestry wheel (`/roue.html`) and the classic tree (`/arbre.html`), plus a GEDCOM export (`/genealogie.ged`).

## Deploy on Vercel

1. Keep this repository **private** (Settings > General > Danger Zone > Change visibility).
2. In Vercel: Add New > Project > Import this repository. Framework preset: **Other**. No build command, output directory = root.
3. Project > Settings > Environment Variables: add `BASIC_AUTH_USER` and `BASIC_AUTH_PASSWORD` (Production and Preview), then redeploy.
4. Open the site: the browser asks for the username and password.

## Updating

Replace `roue.html`, `arbre.html` and `genealogie.ged` with the new versions and commit. Keep the `__cur` / `__go` hooks at the end of `roue.html` and `arbre.html`: the tabs in `index.html` use them to keep the same person across views. Vercel redeploys automatically.

## Privacy layers

- Password on every page (`middleware.js`).
- `X-Robots-Tag` header and `noindex` meta tags (`vercel.json`, HTML).
- `robots.txt` blocking search engines and known AI crawlers.
