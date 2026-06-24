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
- **Shared parallax background** — Hero, Skills, and Projects use the same full-width `HeroBackground` star field.
- **Rotating Hero subtitle** — subtitle phrases animate while the `Sydney Jimenez` name remains stable and readable.
- **Smart glass Navbar** — centered floating pill, responsive dropdown, scroll-direction hide/show, active-section tracking, and placeholder theme toggle.
- **Responsive Skills carousel** — seamless auto-scroll, drag-to-scroll, brand-colored hover states, smaller mobile tiles, and masked edge fade.
- **Responsive Projects section** — data-driven Bento-style grid with wide website tiles, compact concept tiles, lazy screenshots, and accessible project cards.
- **Project detail modal** — whole-card click opens a scroll-locked modal with sticky title bar, screenshot gallery arrows/dots, GitHub action, optional Live Demo action, and technology logos.
- **Contact section** — responsive two-column contact area with accessible form fields, email validation, field clearing, and toast feedback.
- **Footer** — themed footer with navigation, social links, animated background, and project credit line.
- **Reusable spotlight effect** — cursor-following light effect shared across Contact cards, Project cards, and Skills cards.
- **Toast notifications** — smooth top-right success/error feedback with accessible status messaging and 3-second auto-dismiss.
- **Form validation** — Contact form validates email format and clears fields after a valid local submit.
- **SVG icon system** — custom brand-safe social icons plus technology logo assets.

---

## Design System

The color palette and typography are defined as Tailwind v4 CSS tokens in [globals.css](./src/styles/globals.css).

| Token | Value | Usage |
|---|---|---|
| `--color-accent` | `#00FF99` | Primary neon green highlights |
| `--color-bg-dark` | `#0A0A0A` | Page background |
| `--color-bg-card` | `#111111` | Card surfaces |
| `--color-bg-elevated` | `#1A1A1A` | Navbar and elevated surfaces |
| `--color-body` | `#E7E7E7` | Body text |
| `--color-border-subtle` | `#222222` | Separators and subtle borders |
| `--color-border-accent` | `rgba(0,255,153,0.15)` | Accent borders |
| `--shadow-glow` | `0 0 30px rgba(0,255,153,0.15)` | Glow effects |
| `--font-sans` | `Poppins` | Global font |

Some finished component surfaces also use tuned one-off dark values such as `#121111` and `#111211` where slightly different contrast is needed.
