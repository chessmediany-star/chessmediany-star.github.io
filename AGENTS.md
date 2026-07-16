# AGENTS.md

## Scope
These instructions apply to the entire repository.

## Current state
Chess Media is temporarily a privacy-first under-construction page. Show only the approved branded image and an accessible heading. Do not publish personal names, phone numbers, email addresses, portraits, contact forms, analytics, cookies, or tracking.

Production: https://chessmedia.us/

## Architecture
GitHub Pages deploys the repository root from `main`.

- `index.html`: self-contained maintenance page and metadata.
- `index.html` embeds the approved artwork as a metadata-free WebP data image.
- `CNAME`: must remain exactly `chessmedia.us`.
- `robots.txt`: blocks indexing during maintenance.
- `sitemap.xml`: legacy discovery file, not advertised during maintenance.
- `styles.css`: unused legacy stylesheet retained for history.
- `script.js`: inert maintenance placeholder with no contact behavior or personal data.
- `README.md` and `AGENTS.md`: public documentation.

There is no server, database, form handler, dependency installation, or build step.

## Workflow
1. Pull the latest `main`.
2. Make the smallest intentional change.
3. Update both Markdown files in the same commit.
4. Preview through a local static HTTP server.
5. Test desktop/mobile layout, image loading, metadata, links, and console.
6. Review the exact diff and scan current public files for personal information.
7. Commit, push, wait for GitHub Pages, and verify production.

GoDaddy manages DNS. Keep the GitHub Pages apex records, `www` CNAME, repository `CNAME`, and Enforce HTTPS unchanged.

## Documentation rule
Every code, content, asset, configuration, SEO, domain, or deployment change must update both Markdown files in the same commit. Update the current state, verification date, and README change log.

## Privacy and safety
- Do not add personal details, portraits, forms, analytics, cookies, tracking, or external services without explicit approval.
- Never commit secrets, customer information, or account credentials.
- Re-encode raster images to remove embedded metadata.
- Keep semantic HTML, useful alt text, contrast, and responsive behavior.
- Never change or delete `CNAME` without explicit approval.

## Verification
- Local preview loads the approved image without missing files.
- Desktop and mobile layouts are usable.
- Current public files contain no personal names, phone numbers, or email addresses.
- No forms, inputs, external scripts, analytics, or tracking requests exist.
- Metadata blocks indexing and referrer leakage.
- `robots.txt` disallows crawling.
- `CNAME` contains only `chessmedia.us`.
- Both Markdown files changed in the same commit.
- Production was checked after deployment.

Last verified: 2026-07-16
