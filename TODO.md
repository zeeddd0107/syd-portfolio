# Project Roadmap & Checklist

This document tracks the tasks completed, in-progress, and remaining for the Premium Portfolio project.

---

## 🏁 Phase Progress Overview

- [x] **Phase 1:** Project Setup (Vite + React)
- [x] **Phase 2:** Install & Configure Dependencies
- [x] **Phase 3:** Folder Structure & Design System
- [/] **Phase 4:** Navigation & Layout (responsive smart Navbar complete; Footer remains)
- [x] **Phase 5:** Hero / About Section (stable name, rotating subtitle, responsive cursor, and parallax background complete)
- [x] **Phase 6:** Skills Section (responsive heading and mobile carousel refinements complete)
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
- [x] Build a centered floating glassmorphic `Navbar.jsx`
- [x] Hide the Navbar on manual scroll-down and reveal it on scroll-up
- [x] Keep the Navbar visible during anchor-link navigation
- [x] Add data-driven active-section tracking for current and future sections
- [x] Replace the mobile fullscreen drawer with a responsive glass dropdown
- [x] Add accessible placeholder theme-toggle UI (functionality deferred)
- [ ] Build static-safe, secure external link `Footer.jsx`
- [x] Export Navbar through the components barrel `index.js`
- [x] Render Navbar inside `App.jsx` and adjust layout top padding
- [ ] Export and render Footer after it is implemented
- [x] Resolve Tailwind CSS IntelliSense warnings regarding non-canonical spacing
- [x] Refactor `Navbar.jsx` to remove "Let's Talk" CTA actions and align items to the right

### Phase 5: Hero / About Section

- [x] Add professional bio text in `siteConfig.js`
- [x] Generate professional developer avatar placeholder image
- [x] Create custom SVG brand icons component `icons.jsx` for trademark compliance
- [x] Build `TypewriterEffect` component in `src/components/ui/typewriter-effect.jsx` with looping character-by-character animation
- [x] Keep the `Sydney Jimenez` heading stable and semantic using `<h1>`
- [x] Move the typewriter effect to the Hero subtitle
- [x] Store rotating subtitle phrases in `siteConfig.titles`
- [x] Rotate through five subtitle phrases with a responsive blinking cursor
- [x] Build interactive multi-layer parallax star field `HeroBackground.jsx` in `src/effects/` with mouse tracking and ambient drift
- [x] Build responsive double-column `Hero.jsx` with staggered Framer Motion entrance animations
- [x] Render `<Hero />` inside `<main>` wrapper in `App.jsx`
- [x] Style bio text with `#E7E7E7` using Tailwind v4 theme variables (`text-secondary`)

---

### Phase 6: Skills Section

- [x] Create static skills data model in `src/data/skills.js` with 15 technologies
- [x] Store SVG brand logo files in `src/assets/images/logos/` (15 icons)
- [x] Create custom `ExpressIcon` JSX component in `src/components/ui/icons.jsx` (fill-based, white)
- [x] Create data-driven `Skills.jsx` section in `src/sections/` with carousel auto-scroll
- [x] Implement seamless infinite horizontal carousel using `requestAnimationFrame` loop
- [x] Implement click-and-drag manual scrolling with seamless loop correction
- [x] Integrate React Bits `ScrollFloat` animation for the section heading
- [x] Fix `ScrollFloat` reverse animation bug (replaced `scrub: true` with `once: true` + `gsap.context` cleanup)
- [x] Fix duplicate `onMouseLeave` JSX attribute error (merged into single handler)
- [x] Add Framer Motion entrance animations for subtitle label and carousel container
- [x] Render `<Skills />` inside `App.jsx`
- [x] Verify `isSvgFile` flag correctly routes between `<img>` and JSX component rendering
- [x] Make the Skills label and ScrollFloat heading responsive on small screens
- [x] Preserve intentional spacing between the Skills label and heading across breakpoints
- [x] Reduce skill-card, icon, text, and carousel gap sizes on mobile while preserving desktop sizing

## 🚀 Upcoming Tasks

### Phase 7: Projects Section

- [ ] Create projects data model in `src/data/projects.js` (featured project: GymPlify)
- [ ] Define project metadata for type/size, screenshot, stack, repository, and optional live demo
- [ ] Create reusable, accessible `ProjectCard.jsx` with icon-based GitHub and optional Live Demo actions
- [ ] Implement lazy-loading for project images
- [ ] Build an original responsive Bento Grid with a maximum of three cards per row
- [ ] Give website projects wider spans while keeping smaller apps/tools in standard tiles
- [ ] Add restrained entrance, hover elevation, image zoom, border, and accent-glow interactions
- [ ] Verify balanced grid placement, keyboard access, focus states, alt text, and responsive behavior
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
