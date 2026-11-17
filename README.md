# VazgenDev — Personal Developer Portfolio

> A responsive portfolio website for freelance software development, built with React, TypeScript, and Tailwind CSS.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)

**Live site:** https://gasparyanvazgen.github.io/

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)

---

## Overview

VazgenDev is the personal portfolio of Vazgen Gasparyan, a software developer and freelance engineer. It presents services, project case studies, articles, and a contact form in a single-page application that is deployed as a static site to GitHub Pages.

The site is content-driven: projects and articles are defined as typed data in `src/data.ts`, so adding a new case study or article means adding an entry rather than building a new page.

---

## Key Features

- Home page built from reusable sections: hero, services, tech stack, projects, about, articles, FAQ, and footer
- Project listing and individual project case-study pages, with screenshots (`/projects`, `/projects/:slug`)
- Article listing and individual article pages (`/articles`, `/articles/:slug`)
- Contact page with a form powered by [Formspree](https://formspree.io/) (`/contact`)
- Local admin page (`/admin`) that stores simple site settings (email, GitHub, LinkedIn, availability) in the browser's `localStorage`; it is excluded from crawlers via `robots.txt`
- 404 page and "article not found" handling
- Typed content model for projects and articles (`src/data.ts`)
- Per-page SEO component with `schema.org` structured data (`src/components/Seo.tsx`)
- SEO and PWA assets: `sitemap.xml`, `robots.txt`, `manifest.json`, Open Graph image, favicons
- Lazy-loaded routes with a loading fallback
- GitHub Pages deep-link support through `public/404.html` and redirect handling in `src/index.tsx`
- Two deploy targets: a personal GitHub Pages site and a project repository (different `PUBLIC_URL` base paths)

> **Note:** `src/App.tsx` currently contains a temporary route map that serves only the coming-soon landing page (`src/pages/Home.tsx`) at `/` and redirects all other paths to it. To serve the full site, register the page components in `App.tsx`. See [Usage](#usage).

---

## Tech Stack

| Category | Technology |
| --- | --- |
| Language | TypeScript `^4.9.5` |
| UI library | React `^18.3.1`, React DOM `^18.3.1` |
| Routing | React Router DOM `^6.24.1` |
| Build tooling | Create React App (`react-scripts` `5.0.1`) |
| Styling | Tailwind CSS `^3.4.4`, PostCSS `^8.4.39`, Autoprefixer `^10.4.19` |
| Icons | `@heroicons/react` `^2.1.5`, `@icons-pack/react-simple-icons` `^13.15.1` |
| Forms | `@formspree/react` `^3.0.0` |
| Testing | Jest (via CRA), `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event` |
| Formatting | Prettier `^3.3.2` with `prettier-plugin-tailwindcss` |
| Deployment | `gh-pages` `^6.1.1`, `cross-env` `^7.0.3` |
| Metrics | `web-vitals` `^2.1.4` |

---

## Project Structure

```text
website-tailwind-react/
├── public/
│   ├── images/projects/tally/   # Project screenshots
│   ├── 404.html                 # GitHub Pages deep-link redirect helper
│   ├── index.html               # HTML template
│   ├── manifest.json            # PWA manifest
│   ├── robots.txt               # Crawler rules (disallows /admin) and sitemap link
│   ├── sitemap.xml              # Sitemap
│   ├── og-image.png             # Open Graph image
│   ├── favicon.ico, logo192.png, logo512.png
│   └── google4d29c05650d62661.html  # Google Search Console verification
├── src/
│   ├── assets/
│   │   ├── icons/               # GitHub, LinkedIn, Gmail SVG icons
│   │   └── images/avatar.webp
│   ├── components/              # Hero, NavBar, Footer, Services, Projects, ProjectCard,
│   │                            #   TechStack, AboutMe, Articles, Faq, Button, Seo
│   ├── interfaces/              # Shared TypeScript prop types
│   ├── pages/
│   │   ├── Home.tsx             # Landing page
│   │   ├── ProjectsPage.tsx     # All projects
│   │   ├── Project.tsx          # Single project case study
│   │   ├── ArticlesPage.tsx     # All articles
│   │   ├── Article.tsx          # Single article
│   │   ├── Contact.tsx          # Contact form
│   │   ├── Admin.tsx            # Local settings page
│   │   └── NotFound.tsx
│   ├── App.tsx                  # Route map
│   ├── index.tsx                # Entry point; restores deep-link route from 404.html redirect
│   ├── index.css                # Global styles / Tailwind directives
│   ├── data.ts                  # Typed project and article content
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   └── App.test.tsx             # Default CRA test (see "Running tests")
├── tailwind.config.js           # Custom colors and avatar border radius
├── postcss.config.js
├── tsconfig.json
├── .prettierrc                  # Prettier + Tailwind class sorting plugin
├── package.json
└── package-lock.json
```

---

## Getting Started

### Prerequisites

- **Node.js:** `v18.x` or `v20.x` LTS (recommended for compatibility with `react-scripts` 5.0.1)
- **npm:** `v9+` or `v10+` (bundled with Node.js; a `package-lock.json` is included)
- **Git**


### Installation

```bash
# 1. Clone the repository
git clone https://github.com/gasparyanvazgen/website-tailwind-react.git
cd website-tailwind-react

# 2. Install dependencies
npm install
```

### Configuration

No `.env` or `.env.example` file is included, and no environment variables are required to run locally.

| Item | Where | Notes |
| --- | --- | --- |
| `PUBLIC_URL` | Set by the `build:*` npm scripts | `/` for the personal site, `/website-tailwind-react` for the project site. Used as the React Router `basename`. |
| Formspree form ID | `src/pages/Home.tsx` and `src/pages/Contact.tsx` | Replace the form ID with your own [Formspree](https://formspree.io) endpoint ID if forking this project. |
| Contact and social links | `src/pages/Home.tsx`, `src/pages/Admin.tsx` | Update the email, GitHub, and LinkedIn URLs. |
| Site URL | `src/pages/Home.tsx`, `public/sitemap.xml`, `public/robots.txt` | Update to match your deployment domain. |

`.gitignore` already excludes `.env.local`, `.env.development.local`, `.env.test.local`, and `.env.production.local`, should you add environment variables later.

---

## Usage

### Development server

```bash
npm start
```

Opens the app at http://localhost:3000 with hot reload.

### Production build

```bash
npm run build            # Standard CRA build into /build
npm run build:personal   # PUBLIC_URL=/ (personal GitHub Pages site)
npm run build:project    # PUBLIC_URL=/website-tailwind-react (project GitHub Pages site)
```

### Deployment (GitHub Pages)

```bash
npm run deploy:personal  # Publishes ./build to gasparyanvazgen/gasparyanvazgen.github.io
npm run deploy:project   # Publishes ./build to gasparyanvazgen/website-tailwind-react
npm run deploy:both      # Builds and deploys to both targets in sequence
```

Run the matching `build:*` script before each `deploy:*` script (`deploy:both` does this for you). Deployment uses SSH remotes, so your SSH key needs push access to the target repository. If you fork this project, update the repository URLs in the `deploy:*` scripts in `package.json`.

### Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/projects` | All projects |
| `/projects/:slug` | Project case study (e.g. `/projects/tally`) |
| `/articles` | All articles |
| `/articles/:slug` | Article (e.g. `/articles/building-apis-that-scale`) |
| `/contact` | Contact form |
| `/admin` | Local settings page (not indexed) |

The current `App.tsx` only registers `/`. To enable the full route set, register the page components (`ProjectsPage`, `Project`, `ArticlesPage`, `Article`, `Contact`, `Admin`, `NotFound`) as `<Route>` entries and remove the catch-all redirect `<Route path="*" element={<Navigate to="/" replace />} />`.

### Adding content

Projects and articles are defined in `src/data.ts` using the exported `ProjectItem` and `ArticleItem` interfaces. Add an entry to `projectItems` or `articleItems` (each needs a unique `slug`) and it will be available at `/projects/<slug>` or `/articles/<slug>`. Project screenshots go in `public/images/projects/<slug>/`.

### Running tests

```bash
npm test
```

Note: `src/App.test.tsx` is the default Create React App test (it looks for "learn react" text) and does not match the current app. Update or replace it before relying on the test suite.

### Formatting

```bash
npx prettier --write "src/**/*.{ts,tsx,css}"
```

---

## Contributing

This is a personal portfolio project, but suggestions and bug reports are welcome.

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Make your changes and format them with Prettier.
4. Commit using the `type: message` format: `git commit -m "feat: add your feature"`
5. Push: `git push origin feat/your-feature`
6. Open a Pull Request describing your changes.

### Commit Message Format

All commits follow the `type: message` convention (no space after the colon):

- `feat: message` — New feature or section
- `fix: message` — Bug fix
- `docs: message` — Documentation updates
- `style: message` — Formatting or Tailwind CSS updates
- `refactor: message` — Code restructuring without behavior changes
- `chore: message` — Build scripts, dependencies, or configuration

Please open an issue first for larger changes so they can be discussed.

---

## Contact

- GitHub: https://github.com/gasparyanvazgen
- LinkedIn: https://linkedin.com/in/vazgen-gasparyan
- Email: infogasparian@gmail.com
