# Project Tech Stack

This document explains the technologies, libraries, and architecture patterns used in the Premium Portfolio.

---

## Core Development Stack

| Technology | Category | Purpose |
|---|---|---|
| React 19 | Frontend library | Component composition, state, hooks, and declarative rendering |
| Vite | Build tool | Fast dev server, HMR, and production bundling |
| JavaScript ES6+ | Language | App logic, data models, and components |

---

## Styling and Presentation

| Technology | Category | Purpose |
|---|---|---|
| Tailwind CSS v4 | CSS framework | Utility-first styling with CSS `@theme` design tokens |
| `@tailwindcss/vite` | Vite plugin | Tailwind v4 compiler integration |
| Poppins | Typography | Global sans-serif font |

Design tokens live in [globals.css](./src/styles/globals.css). Component-level one-off values are used sparingly when a surface needs tuned contrast, such as project and modal cards using `#121111`.

---

## Animation and Scroll

| Library | Purpose |
|---|---|
| Framer Motion | Entrance animations, hover states, cards, modal transitions, and typewriter character motion |
| GSAP ScrollTrigger | `ScrollFloat` heading reveal animation |
| Lenis | Smooth page scrolling |

---

## Icons and Assets

| System | Purpose |
|---|---|
| Lucide React | Generic UI icons such as arrows, menu, close, external link, and carousel chevrons |
| Custom SVG icon components | Brand-safe social icons and Express icon |
| SVG logo files | Technology icons for Skills and Projects |
| Project screenshots | Stored in `src/assets/images/projects/` and imported through project data |

---

## Source Architecture

| Directory | Contains | Convention |
|---|---|---|
| `src/sections/` | Page sections such as Hero, Skills, and Projects | One file per major section |
| `src/components/layout/` | App-level structural components | Navbar now, Footer later |
| `src/components/cards/` | Data-driven card components | Receives data and callbacks through props |
| `src/components/ui/` | Reusable UI primitives | Icons, modals, typewriter effect |
| `src/data/` | Content arrays and mappings | Plain JS data, no JSX except icon component references where needed |
| `src/constants/` | Site-wide config | Navigation, name, bio, resume URL |
| `src/effects/` | Decorative visual effects | Pointer-events disabled, non-content visuals |
| `src/lib/` | Utility wrappers and vendor components | `cn()` helper and React Bits `ScrollFloat` |
| `src/styles/` | Global CSS | Tailwind import, theme tokens, keyframes, resets |

---

## Current Interaction Architecture

### Navbar

- `siteConfig.navLinks` controls rendered navigation items.
- The Experience tab is currently hidden until that section is ready.
- Scroll direction determines Navbar visibility.
- A navigation lock prevents anchor-link clicks from being treated as manual downward scrolling.
- Active section tracking reads rendered section offsets from the nav link hashes.
- The theme toggle is present as a placeholder only.

### Hero

- `siteConfig.name` renders as the stable `<h1>`.
- `siteConfig.titles` powers the subtitle `TypewriterEffect`.
- `HeroBackground` is the shared parallax star field used by Hero, Skills, and Projects.
- The app uses a full-width `<main>` and section-level inner wrappers for alignment.

### Skills

- `skills.js` stores name, icon, SVG/component routing, and brand color.
- The carousel renders the skills list twice for seamless looping.
- `requestAnimationFrame` controls continuous scroll.
- Hover and drag states pause or override auto-scroll.
- Cards use brand-colored border/glow hover styles.
- The carousel uses a CSS mask fade instead of dark overlay divs.

### Projects

- `projects.js` stores project metadata, project type, grid size, screenshot, optional gallery images, GitHub URL, live URL, and technology stack.
- `ProjectCard` is preview-focused:
  - clickable whole card
  - keyboard activation
  - screenshot/placeholder
  - title, description, technology pills
  - View button
- `Projects.jsx` owns selected-project state and renders `ProjectModal`.
- `ProjectModal` is detail-focused:
  - body scroll lock
  - sticky title bar
  - backdrop click-to-close
  - mouse-wheel scroll inside modal content
  - optional multi-image gallery with arrows and dots
  - GitHub and optional Live Demo actions
  - technology logo list

### Data Model Notes

- `image` is the card thumbnail.
- `images` is optional and powers the modal gallery.
- `githubUrl` remains in data even when the card does not show a GitHub icon.
- `liveUrl` controls whether the Live Demo action appears.
- `size` controls Bento grid span behavior.

---

## Planned Integrations

| Library / Feature | Status | Purpose |
|---|---|---|
| React Hook Form | Planned | Contact form state |
| Zod or simple validation | Planned | Contact form validation |
| EmailJS or alternative | Planned | Client-side contact message delivery |
| Lighthouse audit | Planned | Accessibility and performance verification |
| Image optimization / WebP | Planned | Reduce screenshot and asset weight |
