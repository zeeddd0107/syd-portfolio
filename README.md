# Sydney Jimenez — Premium Portfolio

A premium, animated personal portfolio website built with **React 19** and **Vite**, showcasing my skills and selected projects as an aspiring full-stack developer.

---

## Getting Started

### Prerequisites

- Node.js v18 or higher recommended
- npm

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

The dev server opens the local app at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```text
src/
├── assets/
│   ├── hero.png
│   └── images/
│       ├── logos/            # SVG brand technology icons
│       ├── profile/          # Developer avatar images
│       ├── projects/         # Project screenshot assets
│       └── backgrounds/      # Background image assets
├── components/
│   ├── cards/                # ProjectCard and future reusable card components
│   ├── layout/               # Navbar and Footer
│   ├── ui/                   # Icons, typewriter effect, ProjectModal, Toast, SpotLightLayer
│   └── index.js              # Barrel export file
├── constants/
│   └── siteConfig.js         # Name, rotating titles, bio, nav links, resume URL
├── data/
│   ├── projects.js           # Project metadata, images, links, and layout sizing
│   ├── projectTechnologyIcons.js
│   ├── skills.js
│   └── socialLinks.js
├── effects/
│   └── HeroBackground.jsx    # Interactive multi-layer parallax star field
├── lib/
│   ├── utils.js
│   └── react-bits/
│       └── ScrollFloat.jsx   # GSAP character-by-character heading reveal
├── sections/
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Skills.jsx
├── styles/
│   └── globals.css
├── utils/
│   └── spotlight.js          # Shared mouse-position helper for spotlight effects
├── App.jsx
└── main.jsx
```

---

## Documentation

| File | Description |
|---|---|
| [STACK.md](./STACK.md) | Libraries, architecture, and implementation patterns |
| [PROCESS.md](./PROCESS.md) | Build log and phase decisions |
| [TODO.md](./TODO.md) | Phase checklist and upcoming work |
| [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) | Bugs, warnings, causes, and fixes |

---

## Features

- **Vite + React 19** — fast development workflow and modern React component architecture.
- **Tailwind CSS v4** — custom design system using CSS `@theme` tokens.
- **Lenis smooth scroll** — premium momentum-based page scrolling.
- **Framer Motion** — entrance, hover, Navbar, card, modal, and typewriter animations.
- **GSAP ScrollTrigger** — one-shot character-by-character heading reveals through `ScrollFloat`.
- **Shared parallax background** — Hero, Skills, Projects, Contact, and Footer use the same full-width `HeroBackground` star field.
- **Dark / light theme support** — the Navbar toggle switches the site theme, persists the choice in `localStorage`, and updates page surfaces, text, particles, cards, and controls through CSS variables.
- **Rotating Hero subtitle** — subtitle phrases animate while the `Sydney Jimenez` name remains stable and readable.
- **Smart glass Navbar** — centered floating pill, responsive dropdown, scroll-direction hide/show, active-section tracking, and working theme toggle.
- **Responsive Skills carousel** — seamless auto-scroll, drag-to-scroll, theme-aware technology tiles, brand-colored hover states, smaller mobile tiles, and masked edge fade.
- **Responsive Projects section** — data-driven Bento-style grid with wide website tiles, compact concept tiles, lazy screenshots, clamped preview descriptions, and accessible project cards.
- **Project detail modal** — whole-card click opens a scroll-locked modal with sticky title bar, screenshot gallery arrows/dots, GitHub action, optional Live Demo action, technology logos, and theme-aware borders.
- **Contact section** — responsive two-column contact area with accessible form fields, email validation, field clearing, and toast feedback.
- **Footer** — themed footer with navigation, social links, animated background, and project credit line.
- **Reusable spotlight effect** — cursor-following light effect shared across Contact cards, Project cards, and Skills cards.
- **Toast notifications** — smooth top-right success/error feedback with accessible status messaging and 3-second auto-dismiss.
- **Form validation** — Contact form validates email format and clears fields after a valid local submit.
- **SVG icon system** — custom brand-safe social icons plus technology logo assets.

---

## Design System

The color palette and typography are defined as Tailwind v4 CSS tokens in [globals.css](./src/styles/globals.css).

The project uses CSS variables for theme-aware surfaces. The app writes `data-theme="dark"` or `data-theme="light"` on the root document element, and components read variables such as `--surface-card`, `--text-heading`, `--text-body`, `--button-secondary-bg`, and `--technology-tile-border`.

| Token | Value | Usage |
|---|---|---|
| `--color-accent` | `#00FF99` | Primary neon green highlights |
| `--color-bg-dark` | Dark: `#0A0A0A`, Light: `#F8F3E1` | Page background |
| `--color-bg-card` | `#111111` | Card surfaces |
| `--color-bg-elevated` | `#1A1A1A` | Navbar and elevated surfaces |
| `--color-body` | Theme-aware | Body text |
| `--color-border-subtle` | `#222222` | Separators and subtle borders |
| `--color-border-accent` | `rgba(0,255,153,0.15)` | Accent borders |
| `--shadow-glow` | `0 0 30px rgba(0,255,153,0.15)` | Glow effects |
| `--font-sans` | `Poppins` | Global font |

Important theme variables:

| Variable | Purpose |
|---|---|
| `--surface-card` | Main card and modal surfaces |
| `--surface-navbar` / `--button-secondary-bg` | Glass Navbar and secondary surface treatment |
| `--technology-tile-border` | Shared border color for Skills tiles, Project cards, Project pills, and modal image borders |
| `--text-accent-strong` | Strong accent text for headings, Hero name, active states, and theme-aware highlights |
| `--technology-mono-icon` | Makes monochrome technology icons white in dark mode and black in light mode |
| `--particle-color` | Changes `HeroBackground` particles between white/dark-mode particles and green/light-mode particles |
