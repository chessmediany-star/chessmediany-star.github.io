# ChessMedia Website

Official public website for ChessMedia, a strategic creative agency led by Levi Yitzchok Getter.

- Production: https://chessmedia.us/
- Hosting: GitHub Pages
- Source: `main` branch, repository root
- DNS provider and registrar: GoDaddy
- HTTPS: provisioned by GitHub Pages and issued by Let's Encrypt; **Enforce HTTPS** is enabled

## Product direction

The website should feel premium, precise, confident, and results-oriented. Preserve its editorial, chess-inspired visual language: strong typography, dark surfaces, restrained gold accents, generous spacing, and deliberate motion.

Primary goals:

1. Explain ChessMedia's positioning and services clearly.
2. Establish trust through leadership, presentation, and selected work.
3. Convert qualified visitors into project inquiries.
4. Preserve fast loading, accessibility, responsive behavior, and search visibility.

Do not add unverified claims, fabricated client work, misleading metrics, or placeholder testimonials without explicit owner approval.

## Repository structure

- `index.html`: page structure, copy, metadata, structured data, and sections.
- `styles.css`: layout, typography, colors, responsive behavior, and interaction styling.
- `script.js`: portfolio filters and the contact-form `mailto:` flow.
- `CNAME`: the production custom domain; it must remain exactly `chessmedia.us`.
- `robots.txt`: crawler instructions.
- `sitemap.xml`: canonical production URL and search discovery metadata.
- `AGENTS.md`: binding instructions for AI agents and automated contributors.
- `README.md`: product, development, operations, and change history.

This is a static site. It has no application server, database, package installation, or build step. Some images are loaded from external Base44 media URLs and must be treated as production dependencies.

## Local development

Serve the repository root with any local static HTTP server. For example:

```sh
python -m http.server 8000
```

Then open http://localhost:8000/. Do not rely only on opening `index.html` directly because browser behavior can differ under HTTP.

## Contact behavior

The contact section includes a direct email link and a required-field inquiry form. Submitting the form opens the visitor's email client with a prefilled subject and body addressed to `chessmediany@gmail.com`. There is no form backend, no third-party form service, and no stored submission data.

## Deployment

GitHub Pages deploys the `main` branch from `/(root)`.

Required workflow:

1. Pull the latest `main` branch into a local clone.
2. Make the smallest intentional change.
3. Update both Markdown files according to the mandatory policy below.
4. Preview the site through a local static HTTP server.
5. Test the affected behavior and responsive layout.
6. Review the exact diff and confirm that it contains no secrets or unrelated changes.
7. Commit locally with a focused message and push to GitHub.
8. Wait for GitHub Pages and verify https://chessmedia.us/.

Use GitHub's web editor only when the normal local workflow is unavailable. Synchronize the local clone after any emergency direct edit.

## DNS and HTTPS

- GoDaddy manages the domain and DNS.
- Apex A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
- `www` CNAME: `chessmediany-star.github.io`.
- GitHub Pages provisions and installs HTTPS; Let's Encrypt issues the certificate.
- **Enforce HTTPS** is enabled; requests to http://chessmedia.us/ redirect to https://chessmedia.us/.
- Do not purchase or upload a separate GoDaddy certificate for this setup.
- Do not delete or change `CNAME` without explicit owner approval.
- After DNS or domain changes, verify both hostnames and keep **Enforce HTTPS** enabled in GitHub Pages.

## Mandatory documentation policy

This rule is strict and part of the definition of done:

**Every change to code, content, styling, assets, behavior, configuration, SEO, domain settings, integrations, deployment, or file structure MUST update both `AGENTS.md` and `README.md` in the same commit.**

For every change:

1. Update the relevant current-state description or instructions in both files.
2. Update the `Last verified` date in both files.
3. Add a concise entry to the README change log describing the change and operational impact.
4. Keep commands, filenames, URLs, ownership, and deployment steps consistent with the implementation.
5. Stage both Markdown files together with the implementation files.
6. Do not commit, push, merge, or declare completion if either file is stale.

A review with no edits is insufficient. Do not make meaningless wording changes: record the concrete state, instruction, verification date, or change-log entry. If implementation conflicts with documentation, update both together. Never defer documentation to another commit or task.

## Verification checklist

- The local static preview loads without missing files.
- Navigation, portfolio filters, and the contact email draft work.
- Desktop and mobile layouts are usable.
- Keyboard focus and navigation remain accessible.
- The browser console has no new errors.
- Canonical URL, structured data, `robots.txt`, and `sitemap.xml` are correct.
- `CNAME` contains only `chessmedia.us`.
- Both Markdown files changed in the same commit.
- Production was checked after deployment.

## Change log

| Date | Change | Operational impact |
| --- | --- | --- |
| 2026-07-15 | Redesigned the Contact section and upgraded the inquiry form to create a prefilled email draft to `chessmediany@gmail.com`. | Visitors now have a clear direct-email option and a working form without a backend or stored personal data. |
| 2026-07-15 | Enabled GitHub Pages **Enforce HTTPS** after the DNS check and certificate issuance completed. | All HTTP traffic now redirects to the secure HTTPS production site. |
| 2026-07-14 | Added repository documentation and the mandatory documentation-synchronization policy. | Future contributors have a source of truth for product intent, development, DNS, HTTPS, and deployment. |

Last verified: 2026-07-15
# ChessMedia Website

Official public website for ChessMedia, a strategic creative agency led by Levi Yitzchok Getter.

- Production: https://chessmedia.us/
- Hosting: GitHub Pages
- Source: `main` branch, repository root
- DNS provider and registrar: GoDaddy
- HTTPS: provisioned by GitHub Pages and issued by Let's Encrypt; **Enforce HTTPS** is enabled

## Product direction

The website should feel premium, precise, confident, and results-oriented. Preserve its editorial, chess-inspired visual language: strong typography, dark surfaces, restrained gold accents, generous spacing, and deliberate motion.

Primary goals:

1. Explain ChessMedia's positioning and services clearly.
2. Establish trust through leadership, presentation, and selected work.
3. Convert qualified visitors into project inquiries.
4. Preserve fast loading, accessibility, responsive behavior, and search visibility.

Do not add unverified claims, fabricated client work, misleading metrics, or placeholder testimonials without explicit owner approval.

## Repository structure

- `index.html`: page structure, copy, metadata, structured data, and sections.
- `styles.css`: layout, typography, colors, responsive behavior, and interaction styling.
- `script.js`: portfolio filters and the contact-form `mailto:` flow.
- `CNAME`: the production custom domain; it must remain exactly `chessmedia.us`.
- `robots.txt`: crawler instructions.
- `sitemap.xml`: canonical production URL and search discovery metadata.
- `AGENTS.md`: binding instructions for AI agents and automated contributors.
- `README.md`: product, development, operations, and change history.

This is a static site. It has no application server, database, package installation, or build step. Some images are loaded from external Base44 media URLs and must be treated as production dependencies.

## Local development

Serve the repository root with any local static HTTP server. For example:

```sh
python -m http.server 8000
```

Then open http://localhost:8000/. Do not rely only on opening `index.html` directly because browser behavior can differ under HTTP.

## Contact behavior

The inquiry form opens the visitor's email client using `mailto:` and sends to `chessmediany@gmail.com`. There is no form backend or stored submission database.

## Deployment

GitHub Pages deploys the `main` branch from `/(root)`.

Required workflow:

1. Pull the latest `main` branch into a local clone.
2. Make the smallest intentional change.
3. Update both Markdown files according to the mandatory policy below.
4. Preview the site through a local static HTTP server.
5. Test the affected behavior and responsive layout.
6. Review the exact diff and confirm that it contains no secrets or unrelated changes.
7. Commit locally with a focused message and push to GitHub.
8. Wait for GitHub Pages and verify https://chessmedia.us/.

Use GitHub's web editor only when the normal local workflow is unavailable. Synchronize the local clone after any emergency direct edit.

## DNS and HTTPS

- GoDaddy manages the domain and DNS.
- Apex A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
- `www` CNAME: `chessmediany-star.github.io`.
- GitHub Pages provisions and installs HTTPS; Let's Encrypt issues the certificate.
- **Enforce HTTPS** is enabled; requests to http://chessmedia.us/ redirect to https://chessmedia.us/.
- Do not purchase or upload a separate GoDaddy certificate for this setup.
- Do not delete or change `CNAME` without explicit owner approval.
- After DNS or domain changes, verify both hostnames and keep **Enforce HTTPS** enabled in GitHub Pages.

## Mandatory documentation policy

This rule is strict and part of the definition of done:

**Every change to code, content, styling, assets, behavior, configuration, SEO, domain settings, integrations, deployment, or file structure MUST update both `AGENTS.md` and `README.md` in the same commit.**

For every change:

1. Update the relevant current-state description or instructions in both files.
2. Update the `Last verified` date in both files.
3. Add a concise entry to the README change log describing the change and operational impact.
4. Keep commands, filenames, URLs, ownership, and deployment steps consistent with the implementation.
5. Stage both Markdown files together with the implementation files.
6. Do not commit, push, merge, or declare completion if either file is stale.

A review with no edits is insufficient. Do not make meaningless wording changes: record the concrete state, instruction, verification date, or change-log entry. If implementation conflicts with documentation, update both together. Never defer documentation to another commit or task.

## Verification checklist

- The local static preview loads without missing files.
- Navigation, portfolio filters, and the contact email draft work.
- Desktop and mobile layouts are usable.
- Keyboard focus and navigation remain accessible.
- The browser console has no new errors.
- Canonical URL, structured data, `robots.txt`, and `sitemap.xml` are correct.
- `CNAME` contains only `chessmedia.us`.
- Both Markdown files changed in the same commit.
- Production was checked after deployment.

## Change log

| Date | Change | Operational impact |
| --- | --- | --- |
| 2026-07-15 | Enabled GitHub Pages **Enforce HTTPS** after the DNS check and certificate issuance completed. | All HTTP traffic now redirects to the secure HTTPS production site. |
| 2026-07-14 | Added repository documentation and the mandatory documentation-synchronization policy. | Future contributors have a source of truth for product intent, development, DNS, HTTPS, and deployment. |

Last verified: 2026-07-15
