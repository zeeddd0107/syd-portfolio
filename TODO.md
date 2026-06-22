# Project Roadmap & Checklist

This document tracks the tasks completed, in-progress, and remaining for the Premium Portfolio project.

---

## 🏁 Phase Progress Overview

- [x] **Phase 1:** Project Setup (Vite + React)
- [x] **Phase 2:** Install & Configure Dependencies
- [x] **Phase 3:** Folder Structure & Design System
- [/] **Phase 4:** Navigation & Layout (Navbar complete, Footer and layout wrapping in progress)
- [x] **Phase 5:** Hero / About Section (Hero layout, custom typewriter animation, and 3-layer parallax background complete)
- [ ] **Phase 6:** Skills Section
- [ ] **Phase 7:** Projects Section
- [ ] **Phase 8:** Experience Section
- [ ] **Phase 9:** Contact Section
- [ ] **Phase 10:** Advanced Animations & Polish
- [ ] **Phase 11:** 3D Elements (Optional)
- [ ] **Phase 12:** Optimization & Accessibility
- [ ] **Phase 13:** Deployment

---

## 📝 Detailed Checklists

### Phase 1: Project Setup (Vite + React)
- [x] Scaffold project with Vite: `npx create-vite . --template react`
- [x] Install base dependencies: `npm install`
- [x] Delete default boilerplate files (`App.css`, `react.svg`, `vite.svg`)
- [x] Reset `index.css` and rewrite `App.jsx` with minimal placeholder
- [x] Isolate Git repository to local project folder (run `git init` locally)
- [x] Set up remote origin on GitHub and push initial code

### Phase 2: Install & Configure Dependencies
- [x] Install core project packages (`tailwindcss`, `@tailwindcss/vite`, `framer-motion`, `lenis`, `lucide-react`, `clsx`, `tailwind-merge`)
- [x] Register `@tailwindcss/vite` compiler plugin in `vite.config.js`
- [x] Add `@import "tailwindcss";` in global CSS

### Phase 3: Folder Structure & Design System
- [x] Create project directories (`components/ui`, `layout`, `cards`, `buttons`, `constants`, `data`, `utils`, `styles`)
- [x] Relocate `index.css` to `styles/globals.css` and update its import in `main.jsx`
- [x] Configure `@/` path alias in `vite.config.js`
- [x] Configure `jsconfig.json` for VS Code path resolution without deprecated `baseUrl`
- [x] Set up Tailwind v4 Design System Theme in `globals.css` (fonts, color tokens, custom glow shadow, body styles)
- [x] Ignore custom CSS lint warnings by creating `.vscode/settings.json`

### Phase 4: Navigation & Layout
- [x] Initialize Lenis smooth scroll with `requestAnimationFrame` loop in `App.jsx`
- [x] Create central project config `src/constants/siteConfig.js`
- [x] Create social links data mapping in `src/data/socialLinks.js`
- [x] Build sticky glassmorphic `Navbar.jsx` with active section highlights and mobile toggle drawer
- [ ] Build static-safe, secure external link `Footer.jsx`
- [ ] Export layout components in components barrel `index.js`
- [ ] Render Navbar & Footer inside `App.jsx` and adjust layout top padding
- [x] Resolve Tailwind CSS IntelliSense warnings regarding non-canonical spacing
- [x] Refactor `Navbar.jsx` to remove "Let's Talk" CTA actions and align items to the right

### Phase 5: Hero / About Section
- [x] Add professional bio text in `siteConfig.js`
- [x] Generate professional developer avatar placeholder image
- [x] Create custom SVG brand icons component `icons.jsx` for trademark compliance
- [x] Build `TypewriterEffect` component in `src/components/ui/typewriter-effect.jsx` with looping character-by-character animation
- [x] Build interactive multi-layer parallax star field `HeroBackground.jsx` in `src/effects/` with mouse tracking and ambient drift
- [x] Build responsive double-column `Hero.jsx` with staggered Framer Motion entrance animations
- [x] Render `<Hero />` inside `<main>` wrapper in `App.jsx`
- [x] Style bio text with `#E7E7E7` using Tailwind v4 theme variables (`text-secondary`)

---

## 🚀 Upcoming Tasks

### Phase 6: Skills Section
- [ ] Create static skills data model in `src/data/skills.js` grouped by categories
- [ ] Create reusable, animated `SkillCard.jsx` inside `src/components/cards/`
- [ ] Create data-driven `Skills.jsx` section in `src/sections/`
- [ ] Render Skills section in `App.jsx` and verify animations

### Phase 7: Projects Section
- [ ] Create projects data model in `src/data/projects.js` (featured project: GymPlify)
- [ ] Create reusable `ProjectCard.jsx` with hover overlays and links
- [ ] Implement lazy-loading for project images
- [ ] Build `Projects.jsx` section layout with prominent styling for GymPlify
- [ ] Integrate into `App.jsx`

### Phase 8: Experience Section
- [ ] Create experience timeline data model in `src/data/experiences.js` (Internship)
- [ ] Create `ExperienceCard.jsx` or vertical timeline styling
- [ ] Build animated `Experience.jsx` section timeline
- [ ] Integrate into `App.jsx`

### Phase 9: Contact Section
- [ ] Set up EmailJS account and grab credentials
- [ ] Build contact form using React Hook Form + validation schema (Zod/simple checks)
- [ ] Implement EmailJS client email sending on form submission
- [ ] Create contact details column with social links
- [ ] Integrate and add submit status toast notifications

### Phase 10: Advanced Animations & Polish
- [ ] Configure GSAP and ScrollTrigger for section transitions
- [ ] Implement mouse-based parallax effects for Hero background highlights
- [ ] Polish hover interactions and spring motion values

### Phase 11: 3D Elements (Optional)
- [ ] Research three.js / React Three Fiber integration
- [ ] Build canvas highlights (e.g. glowing grid or particles)

### Phase 12: Optimization & Accessibility
- [ ] Audit application using Chrome DevTools Lighthouse
- [ ] Optimize images by compressing/converting to WebP
- [ ] Verify semantic elements and ARIA accessibility labels
- [ ] Ensure perfect keyboard-only tab navigation flow

### Phase 13: Deployment
- [ ] Create production bundle build via `npm run build`
- [ ] Deploy repository to Vercel/Netlify hosting
- [ ] Configure environment variables for EmailJS credentials
