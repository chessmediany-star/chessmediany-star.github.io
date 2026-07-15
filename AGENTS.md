# AGENTS.md

## Scope
These instructions apply to the entire repository.

## Product intent
ChessMedia is the public marketing website for a strategic creative agency led by Levi Yitzchok Getter. The site should feel premium, precise, confident, and results-oriented. Preserve its editorial, chess-inspired visual language: strong typography, dark surfaces, restrained gold accents, generous spacing, and deliberate motion.

Primary goals:
1. Explain ChessMedia's positioning and services clearly.
2. Establish trust through strong presentation, leadership, and selected work.
3. Convert qualified visitors into project inquiries.
4. Preserve fast loading, accessibility, responsive behavior, and search visibility.

Production: https://chessmedia.us/
Contact: chessmediany@gmail.com

Do not introduce unverified claims, fabricated client work, misleading metrics, or placeholder testimonials without explicit owner approval.

## Current architecture
This is a static website hosted by GitHub Pages.

- `index.html`: structure, copy, metadata, structured data, and sections.
- `styles.css`: layout, responsive design, typography, colors, and interaction styling.
- `script.js`: portfolio filtering and the contact-form mailto flow.
- `CNAME`: custom domain; it must remain exactly `chessmedia.us`.
- `robots.txt`: crawler instructions.
- `sitemap.xml`: canonical URL and search discovery metadata.
- `README.md`: human-facing product, development, and deployment documentation.
- `AGENTS.md`: binding instructions for AI agents and automated contributors.

There is no application server, database, package installation, or build step. The browser-delivered files are the production source.

## Deployment
GitHub Pages deploys the `main` branch from `/(root)`.

Required workflow:
1. Pull the latest `main` branch into a local clone.
2. Make the smallest intentional change.
3. Update both Markdown files as required below.
4. Preview through a local static HTTP server.
5. Test affected behavior, desktop/mobile layout, keyboard access, links, metadata, and console.
6. Review the exact diff; include no secrets or unrelated files.
7. Commit locally with a focused message and push to GitHub.
8. Wait for GitHub Pages and verify the production domain.

Do not use GitHub's web editor except when the local workflow is unavailable. After an emergency direct edit, synchronize the local clone immediately.

## Domain and HTTPS
- DNS provider/registrar: GoDaddy.
- Apex A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
- `www` CNAME: `chessmediany-star.github.io`.
- GitHub Pages provisions and installs HTTPS; Let's Encrypt issues the certificate.
- Never purchase or upload a separate GoDaddy certificate for this setup.
- Never delete or change `CNAME` without explicit owner approval.
- After DNS/domain changes, verify both hostnames and enable **Enforce HTTPS** when available.

## Strict documentation synchronization rule
This rule is mandatory and part of the definition of done.

**Every change to code, content, styling, assets, behavior, configuration, SEO, domain settings, integrations, deployment, or file structure MUST update both `AGENTS.md` and `README.md` in the same commit.**

For every change:
1. Update the relevant instructions/current-state description in both files.
2. Update the `Last verified` date in both files.
3. Add a concise README change-log entry describing the change and operational impact.
4. Keep commands, filenames, URLs, ownership, and deployment steps consistent with implementation.
5. Stage both Markdown files together with implementation files.
6. Do not commit, push, merge, or declare completion if either file is stale.

A review with no edits is insufficient. Do not use meaningless wording changes: record the concrete state, instruction, verification date, or change-log entry. If implementation conflicts with documentation, update both together. Never defer documentation to another commit or task.

## Change safety
- Preserve the established design unless the owner requests a redesign.
- Keep semantic HTML, focus states, useful alt text, contrast, and responsive behavior.
- Do not add frameworks, build tools, analytics, cookies, third-party forms, or external services without explicit approval and documentation.
- Never commit passwords, tokens, private keys, customer information, or account credentials.
- Treat external image URLs as dependencies; verify and document replacements.
- The contact form opens the visitor's email client using `mailto:`; it has no backend.

## Verification checklist
- Local static preview loads without missing files.
- Navigation, portfolio filters, and contact email draft work.
- Desktop/mobile layouts are usable and the console has no new errors.
- Canonical URL, structured data, `robots.txt`, and `sitemap.xml` are correct.
- `CNAME` contains only `chessmedia.us`.
- Both Markdown files changed in the same commit.
- Production was checked after deployment.

Last verified: 2026-07-14
