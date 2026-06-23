# Sydney Jimenez — Premium Portfolio

A premium, animated personal portfolio website built with **React 19** and **Vite**, showcasing my skills, projects, and experience as an aspiring full-stack developer.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Install Dependencies
```bash
npm install
```

### Run the Development Server
```bash
npm run dev
```
The dev server will open your default browser automatically at `http://localhost:5173`.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 🗂️ Project Structure

```
src/
├── assets/
│   ├── hero.png
│   └── images/
│       ├── logos/            # SVG brand technology icons (15 files, kebab-case)
│       ├── profile/          # Developer avatar images
│       ├── projects/         # Project screenshot assets
│       └── backgrounds/      # Background image assets
├── components/               # Reusable React UI components
│   ├── layout/               # Structural components (Navbar, Footer)
│   ├── ui/                   # Generic UI primitives (icons, typewriter effect)
│   ├── cards/                # Card components (SkillCard, ProjectCard, etc.)
│   ├── buttons/              # Button components
│   └── index.js              # Barrel export file
├── constants/                # Static site-wide configuration
│   └── siteConfig.js         # Name, title, bio, nav links, resume URL
├── data/                     # Dynamic data models
│   ├── socialLinks.js        # Social profile links + icon mappings
│   └── skills.js             # 15-skill data array with icons, colors, isSvgFile flags
├── effects/                  # Canvas/DOM visual effect components
│   └── HeroBackground.jsx    # Interactive multi-layer parallax star field
├── lib/                      # Third-party integrations and utility wrappers
│   ├── utils.js              # cn() helper (clsx + tailwind-merge)
│   └── react-bits/           # Vendor animation components (treat as read-only)
│       └── ScrollFloat.jsx   # GSAP character-by-character heading reveal
├── sections/                 # Full-page section components
│   ├── Hero.jsx              # Hero / About section
│   └── Skills.jsx            # Skills section with infinite carousel
├── styles/                   # Global CSS
│   └── globals.css           # Tailwind v4 theme tokens, resets, animations
├── utils/                    # Custom utility functions (reserved for future use)
├── App.jsx                   # Root component — layout, smooth scroll init
└── main.jsx                  # React entry point (createRoot)
```

---

## 📚 Documentation

| File | Description |
|---|---|
| [STACK.md](./STACK.md) | Full breakdown of every library and tool used |
| [PROCESS.md](./PROCESS.md) | Step-by-step build log of all development phases |
| [TODO.md](./TODO.md) | Phase-by-phase progress checklist and upcoming tasks |
| [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) | Log of bugs, errors, and their solutions |

---

## ✨ Features

- ⚡ **Vite + React 19** — blazing-fast HMR development workflow
- 🎨 **Tailwind CSS v4** — custom design system with `@theme` tokens
- 🌊 **Lenis smooth scroll** — buttery momentum-based scrolling
- 🎬 **Framer Motion** — staggered entrance and spring hover animations
- 🔤 **GSAP ScrollTrigger** — one-shot character-by-character heading reveal
- 🌌 **Interactive star field** — mouse-responsive multi-layer parallax background
- ⌨️ **Typewriter effect** — animated character-by-character name reveal with loop
- 🎡 **Infinite skill carousel** — seamless auto-scrolling with hover-pause and drag support
- 🖼️ **SVG icon system** — brand-accurate technology logos with dynamic color theming
- 📱 **Fully responsive** — mobile-first layout with collapsible nav drawer

---

## 🎨 Design System

The color palette and typography are defined as Tailwind v4 CSS tokens in `src/styles/globals.css`:

| Token | Value | Usage |
|---|---|---|
| `--color-accent` | `#00FF99` | Primary neon green highlights |
| `--color-bg-dark` | `#0A0A0A` | Page background |
| `--color-bg-card` | `#111111` | Card surfaces |
| `--color-bg-elevated` | `#1A1A1A` | Navbar / modal backgrounds |
| `--color-secondary` | `#E7E7E7` | Secondary body text |
| `--color-border-subtle` | `#222222` | Separator lines |
| `--color-border-accent` | `rgba(0,255,153,0.15)` | Accent green card borders |
| `--shadow-glow` | `0 0 30px rgba(0,255,153,0.15)` | Card glow shadow |
| `--font-sans` | `Poppins` | Global sans-serif font |
