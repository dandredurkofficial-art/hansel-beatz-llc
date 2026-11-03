# Hansel Beatz LLC — Official Website

A responsive, multi-page static website for Hansel Beatz LLC, built with HTML, Tailwind CSS CDN, vanilla JavaScript, and Lucide Icons.

## Pages
- `index.html` — Home
- `about.html` — About the label
- `artists.html` — Artist roster (editable sample entries)
- `music.html` — Releases catalogue (editable sample entries)
- `distribution.html` — Symphonic Distribution partnership information
- `news.html` — News and announcements (sample entries)
- `contact.html` — Contact form (mailto-based starter; configure a real form service before launch)

## Deploy using GitHub + Cloudflare Pages (no terminal)

1. Create a new GitHub repository, for example `hansel-beatz-website`.
2. Upload **all files and folders inside this project** to the repository root. Make sure `index.html` is at the root, not inside another nested folder.
3. In Cloudflare, open **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
4. Connect your GitHub account and select the repository.
5. For the build settings:
   - Framework preset: `None`
   - Build command: leave blank
   - Build output directory: `/` (or `.` if Cloudflare asks for a relative path)
6. Deploy. Cloudflare will provide a `*.pages.dev` preview address.
7. To use your own domain, open the Pages project → **Custom domains** → **Set up a custom domain**, then follow Cloudflare's DNS instructions.

## Editing content
- Change company copy and page sections in the relevant `.html` file.
- Update artist cards in `artists.html`.
- Update release cards in `music.html`.
- Update news cards in `news.html`.
- Replace the placeholder email address `hello@hanselbeatz.com` with your real business email.
- Replace social profile links currently set to `#` with your official profile URLs.
- Replace the temporary wordmark with your approved logo when available.

## Important before publishing
- Artist, release, and news entries are clearly marked sample content. Replace or remove them before launch.
- Do not use the Symphonic logo unless you have permission and an approved asset. The partnership page uses text branding only.
- The contact form currently opens the visitor's email app using `mailto:`. It does not securely submit or store messages. For a production form, connect a form provider or implement a Cloudflare Worker endpoint with spam protection.
- Add your real privacy policy, business address (if appropriate), legal details, and verified company information before launch.

## Technology
- Tailwind CSS CDN
- Lucide Icons CDN
- Vanilla JavaScript
- Static HTML/CSS suitable for Cloudflare Pages

No terminal, Node.js, npm, or build step is required.
