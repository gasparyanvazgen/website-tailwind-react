# VazgenDev — Personal Developer Portfolio

Premium personal portfolio, focused on freelance software development, full-stack applications, backend systems, APIs, databases, and modern web experiences.

## Live site

- GitHub: https://github.com/gasparyanvazgen
- LinkedIn: https://linkedin.com/in/vazgen-gasparyan
- Email: infogasparian@gmail.com

## Features

- Premium personal + freelance-agency visual direction
- Responsive home page with services, projects, articles, about, experience, education, and FAQ
- Dedicated project case-study pages
- Dedicated article pages
- All Projects and All Articles index pages
- Contact page with a zero-backend `mailto:` inquiry flow
- Local admin dashboard for portfolio settings
- Router-aware navigation and GitHub Pages deep-link recovery
- Per-page SEO metadata and canonical URLs
- Open Graph and Twitter/X metadata
- JSON-LD structured data for the person, website, articles, and project case studies
- Sitemap and robots.txt
- Custom 404 experience
- Accessibility basics including skip navigation, semantic labels, FAQ ARIA state, and reduced-motion support
- Route-level code splitting for smaller initial JavaScript payloads

## Tech stack

- React 18
- TypeScript
- React Router 6
- Tailwind CSS
- Heroicons
- Create React App / `react-scripts`
- GitHub Pages

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home page |
| `/projects` | All projects |
| `/projects/:slug` | Individual project case study |
| `/articles` | All articles |
| `/articles/:slug` | Individual article |
| `/contact` | Freelance contact page |
| `/admin` | Local browser-only admin dashboard |
| `*` | Custom 404 page |

Home section links use hashes such as `/#about`, `/#services`, `/#projects`, and `/#articles`.

## Local development

```bash
npm install
npm start
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

The generated production files are placed in `build/`.

## GitHub Pages deployment

The project is configured with:

```json
"homepage": "https://gasparyanvazgen.github.io/"
```

Deploy with:

```bash
npm run deploy
```

Before publishing, verify direct navigation and refresh for:

- `/projects`
- `/articles`
- `/contact`
- one project detail URL
- one article detail URL

The repository includes a GitHub Pages `404.html` fallback and an early redirect restoration script in `index.html` so React Router can recover deep links after a hard refresh.

## SEO

- Unique title and description for public pages
- Canonical URLs
- Open Graph metadata
- Twitter/X card metadata
- `robots.txt`
- `sitemap.xml`
- JSON-LD `Person` and `WebSite` schema on the home page
- JSON-LD `Article` schema on article pages
- JSON-LD `CreativeWork` schema on project pages
- `/admin` is marked `noindex,nofollow` and excluded from `robots.txt`

## Content model

Projects and articles are stored in `src/data.ts` using typed interfaces. To add content:

1. Add a new item to `articleItems` or `projectItems`.
2. Give it a unique slug.
3. Add the content, tags, and metadata.
4. Add the URL to `public/sitemap.xml` when it is a public indexable page.

The detail pages automatically resolve the slug from the shared data.

## Admin dashboard

`/admin` is intentionally a **local browser-only dashboard**. It stores simple site settings in `localStorage` and does not provide real authentication or server-side content management.

Do not store passwords, API keys, private credentials, or other secrets in the client-side admin page.

## Contact flow

The public inquiry form opens the visitor's default email client using `mailto:infogasparian@gmail.com`. This keeps the static GitHub Pages deployment backend-free and does not pretend to submit data to a server.

For a server-backed form later, connect the UI to a service such as Formspree or your own API.

## Accessibility and performance

- Keyboard-accessible navigation and FAQ controls
- Skip-to-content link
- Descriptive image `alt` text
- `aria-expanded` / `aria-controls` for the FAQ
- Reduced-motion support
- Responsive layout
- Explicit image dimensions to reduce layout shift
- Lazy loading for below-the-fold portrait imagery
- Route-level lazy loading for secondary pages

## License

Personal portfolio project. Content, branding, and personal assets belong to Vazgen Gasparian. Reuse of the personal content or branding requires permission.
