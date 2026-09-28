# Family tree

Unlisted static site (no password): `/` shows two tabs, the ancestry wheel (`/roue.html`) and the classic tree (`/arbre.html`), plus a GEDCOM export (`/genealogie.ged`).

## Deploy on Vercel

1. Keep this repository **private** (Settings > General > Danger Zone > Change visibility).
2. In Vercel: Add New > Project > Import this repository. Framework preset: **Other**. No build command, output directory = root.
3. Every push to `main` redeploys the site.

## Updating

Replace `roue.html`, `arbre.html` and `genealogie.ged` with the new versions and commit. Keep the `__cur` / `__go` hooks at the end of `roue.html` and `arbre.html`: the tabs in `index.html` use them to keep the same person across views. Vercel redeploys automatically.

## Privacy

There is no password: anyone who has the address can open the site. It is kept out of search engines and AI crawlers by:

- the `X-Robots-Tag` header and `noindex` meta tags (`vercel.json`, HTML);
- `robots.txt`, which blocks search engines and known AI crawlers.

Only share the address with people who should see the family data.
