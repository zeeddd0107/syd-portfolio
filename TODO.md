# Project Roadmap & Checklist

This document tracks completed work, in-progress areas, and upcoming phases for the Premium Portfolio project.

---

## Phase Progress Overview

- [x] **Phase 1:** Project Setup (Vite + React)
- [x] **Phase 2:** Install & Configure Dependencies
- [x] **Phase 3:** Folder Structure & Design System
- [/] **Phase 4:** Navigation & Layout — smart Navbar complete; Footer remains
- [x] **Phase 5:** Hero / About Section
- [x] **Phase 6:** Skills Section
- [x] **Phase 7:** Projects Section
- [ ] **Phase 8:** Experience Section — deferred; Navbar tab hidden for now
- [ ] **Phase 9:** Contact Section
- [ ] **Phase 10:** Advanced Animations & Polish
- [ ] **Phase 11:** 3D Elements (Optional)
- [ ] **Phase 12:** Optimization & Accessibility
- [ ] **Phase 13:** Deployment

---

## Detailed Checklists

### Phase 1: Project Setup (Vite + React)

- [x] Scaffold project with Vite.
- [x] Install base dependencies.
- [x] Remove default boilerplate assets and CSS.
- [x] Reset the app entry component.
- [x] Initialize Git inside the project folder.
- [x] Connect the local repository to GitHub.

### Phase 2: Install & Configure Dependencies

- [x] Install Tailwind CSS v4, Framer Motion, Lenis, Lucide React, clsx, and tailwind-merge.
- [x] Register `@tailwindcss/vite` in `vite.config.js`.
- [x] Import Tailwind through the global CSS entry.

### Phase 3: Folder Structure & Design System

- [x] Create scalable folders for components, layout, cards, constants, data, effects, styles, and utilities.
- [x] Move global CSS to `src/styles/globals.css`.
- [x] Configure the `@/` path alias.
- [x] Configure `jsconfig.json` for editor path resolution.
- [x] Define Tailwind v4 theme tokens for color, typography, and shadows.
- [x] Add project-level VS Code CSS lint settings for Tailwind v4 custom at-rules.

### Phase 4: Navigation & Layout

- [x] Initialize Lenis smooth scroll in `App.jsx`.
- [x] Create central `siteConfig.js`.
- [x] Create social link data.
- [x] Build a centered floating glassmorphic Navbar.
- [x] Remove the old top-left `SJ` brand treatment.
- [x] Hide Navbar on manual scroll-down and reveal it on scroll-up.
- [x] Keep Navbar visible during anchor-link navigation.
- [x] Track active section from rendered `siteConfig.navLinks`.
- [x] Add responsive mobile dropdown.
- [x] Add accessible placeholder theme toggle UI.
- [x] Hide the Experience tab while the section is deferred.
- [x] Render Navbar inside `App.jsx`.
- [ ] Build and render Footer.

### Phase 5: Hero / About Section

- [x] Add professional bio and rotating titles in `siteConfig.js`.
- [x] Build stable semantic `<h1>` for `Sydney Jimenez`.
- [x] Move the typewriter animation to the subtitle.
- [x] Rotate through five subtitle phrases.
- [x] Keep the cursor responsive and visible on mobile.
- [x] Add developer avatar asset.
- [x] Create brand-safe custom social icons.
- [x] Build responsive Hero layout with Framer Motion entrance animations.
- [x] Build and render interactive `HeroBackground`.
- [x] Convert the app layout so full-width sections own their backgrounds while inner content remains constrained.

### Phase 6: Skills Section

- [x] Create `src/data/skills.js` with 15 technologies.
- [x] Add SVG technology logo assets.
- [x] Create custom Express icon support.
- [x] Build `Skills.jsx`.
- [x] Implement seamless infinite horizontal carousel.
- [x] Add hover pause and click-and-drag scrolling.
- [x] Add brand-colored skill card hover states.
- [x] Integrate `ScrollFloat` heading animation.
- [x] Fix ScrollFloat reversal and StrictMode cleanup issues.
- [x] Add responsive label, heading, spacing, cards, icons, and text.
- [x] Apply the shared `HeroBackground` to the Skills section.
- [x] Constrain the carousel to `max-w-7xl`.
- [x] Add masked carousel edge fading without dark overlay blocks.
- [x] Tune skill card surface color.

### Phase 7: Projects Section

- [x] Create `src/data/projects.js` with GymPlify and placeholder concept projects.
- [x] Add project screenshot assets in `src/assets/images/projects/`.
- [x] Create `src/data/projectTechnologyIcons.js`.
- [x] Create reusable `ProjectCard.jsx`.
- [x] Render projects from data instead of hardcoding cards.
- [x] Implement responsive Bento-style grid with wider website tiles.
- [x] Add lazy-loaded project screenshots and accessible alt text.
- [x] Add technology pills with icons.
- [x] Make the whole card clickable while keeping the View button.
- [x] Remove direct GitHub button from the card while preserving `githubUrl` in data.
- [x] Add card hover border/glow without scale enlargement.
- [x] Build `ProjectModal.jsx` with sticky header, close button, scroll lock, and backdrop click-to-close.
- [x] Prevent background page scroll while the modal is open.
- [x] Keep modal content scrollable with mouse wheel and scrollbar.
- [x] Add GitHub action and optional Live Demo action inside the modal.
- [x] Add modal technology logo section with hover scaling.
- [x] Add optional project screenshot gallery using `images`, arrows, and dots.
- [x] Apply the shared `HeroBackground` to Projects.
- [x] Improve mobile Projects spacing, card sizing, text sizing, and screenshot behavior.
- [x] Integrate `<Projects />` into `App.jsx`.

---

## Upcoming Tasks

### Phase 8: Experience Section

- [ ] Decide whether to include Experience now or defer until stronger content is ready.
- [ ] Create `src/data/experiences.js`.
- [ ] Build timeline/card UI.
- [ ] Add the Navbar tab back only when the section exists.

### Phase 9: Contact Section

- [ ] Choose form strategy.
- [ ] Build contact section layout.
- [ ] Add validation.
- [ ] Add email sending integration if needed.
- [ ] Add accessible status feedback.

### Phase 10: Advanced Animations & Polish

- [ ] Review animation density across Hero, Skills, and Projects.
- [ ] Audit mobile spacing across all current sections.
- [ ] Tune hover, focus, and reduced-motion behavior.

### Phase 12: Optimization & Accessibility

- [ ] Run Lighthouse.
- [ ] Compress and/or convert large images to WebP.
- [ ] Verify keyboard-only navigation.
- [ ] Verify modal focus behavior.
- [ ] Check alt text and ARIA labels.

### Phase 13: Deployment

- [ ] Run production build.
- [ ] Deploy to Vercel or Netlify.
- [ ] Verify deployed routing, assets, and performance.
