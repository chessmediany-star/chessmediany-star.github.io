# Chess Media Website

Official public website for Chess Media.

- Production: https://chessmedia.us/
- Hosting: GitHub Pages from the `main` branch root
- DNS: GoDaddy
- HTTPS: enforced by GitHub Pages

## Current state
The site is temporarily a privacy-first under-construction page. It displays only the approved Chess Media artwork and an accessible heading. The current page contains no personal names, phone numbers, email addresses, portraits, contact forms, analytics, cookies, or visitor tracking.

## Files
- `index.html`: self-contained maintenance page and metadata.
- `index.html` embeds the approved artwork as a metadata-free WebP data image.
- `CNAME`: must remain exactly `chessmedia.us`.
- `robots.txt`: blocks indexing during maintenance.
- `sitemap.xml`: legacy discovery file, not advertised during maintenance.
- `styles.css`: unused legacy stylesheet retained for history.
- `script.js`: inert maintenance placeholder with no contact behavior or personal data.
- `AGENTS.md` and `README.md`: public documentation.

This is a static site with no server, database, form handler, dependency installation, or build step.

## Preview and deployment
Run `python -m http.server 8000`, then open http://localhost:8000/. Pull `main`, make the smallest change, update both Markdown files, preview, test desktop/mobile and metadata, review the diff, run a privacy scan, commit and push, then verify production.

Keep GoDaddy's GitHub Pages DNS records, `CNAME`, and Enforce HTTPS unchanged.

## Privacy
Keep personal details, portraits, forms, analytics, cookies, and tracking off the public site unless explicitly approved. Re-encode raster images before publishing and scan current public files before every deployment.

## Documentation policy
Every implementation, asset, configuration, SEO, domain, or deployment change must update both Markdown files in the same commit, including the current state, verification date, and change log.

## Change log
| Date | Change | Operational impact |
| --- | --- | --- |
| 2026-07-16 | Replaced the marketing site with the approved under-construction artwork and removed current personal contact and leadership information. | The public site exposes only branded maintenance content and blocks indexing. |
| 2026-07-15 | Enabled GitHub Pages Enforce HTTPS. | HTTP traffic redirects to HTTPS. |
| 2026-07-14 | Added repository and deployment documentation. | Contributors have an operational source of truth. |

Last verified: 2026-07-16
