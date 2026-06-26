# Project Process Log

This document records the build process, decisions, and phase outcomes for the Premium Portfolio project.

---

## Phase 1: Project Setup

- Created the React project with Vite.
- Installed baseline dependencies.
- Removed default Vite boilerplate.
- Reset the app entry files for a clean custom build.
- Initialized Git inside the project directory instead of the user home directory.
- Connected the project to a GitHub remote.

---

## Phase 2: Dependencies and Tooling

- Installed the core frontend stack:
  - React
  - Vite
  - Tailwind CSS v4
  - Framer Motion
  - Lenis
  - Lucide React
  - clsx
  - tailwind-merge
- Configured `@tailwindcss/vite` in `vite.config.js`.
- Set up Tailwind through `src/styles/globals.css`.

---

## Phase 3: Structure and Design System

- Created a scalable `src/` structure by responsibility:
  - `components/`
  - `sections/`
  - `data/`
  - `constants/`
  - `effects/`
  - `lib/`
  - `styles/`
- Added the `@/` import alias.
- Added `jsconfig.json` for editor path support.
- Defined Tailwind v4 design tokens in `globals.css`.
- Added VS Code settings to ignore Tailwind v4 custom at-rule warnings.

---

## Phase 4: Navigation and Layout

- Integrated Lenis smooth scrolling in `App.jsx`.
- Created `siteConfig.js` as the single source of truth for metadata and navigation links.
- Built the centered floating glassmorphic Navbar.
- Removed the previous top-left brand text.
- Added scroll-aware behavior:
  - scroll down hides the Navbar
  - scroll up reveals the Navbar
  - anchor navigation keeps it visible
- Added data-driven active-section tracking.
- Added responsive mobile dropdown.
- Added accessible theme toggle UI.
- Connected the toggle to real dark/light mode state in `App.jsx`.
- Persisted the selected theme in `localStorage`.
- Updated the Navbar to adapt its surfaces, shadows, toggle icons, and mobile dropdown colors between themes.
- Removed the Experience tab for now because the section is deferred.
- Footer is now implemented and rendered after the Contact section.

---

## Phase 5: Hero / About

- Added the professional bio and title phrases to `siteConfig.js`.
- Kept `Sydney Jimenez` stable in a semantic `<h1>`.
- Moved the animated typewriter effect to the subtitle.
- Created a rotating subtitle list:
  - Aspiring Full-Stack Developer
  - Curious by Nature
  - Pragmatic
  - Simplicity First
  - Building With Purpose
- Tuned the cursor for desktop and mobile spacing.
- Added the profile avatar asset.
- Created custom SVG social icons because Lucide no longer ships brand icons.
- Built the responsive two-column Hero layout with Framer Motion entrance animations.
- Built `HeroBackground.jsx`, a multi-layer mouse-responsive parallax star field.
- Updated the app structure so `main` is full-width while each section owns its own constrained content wrapper.

Key decision:

- Full-width visual backgrounds should belong to sections.
- Content alignment should be handled by inner `max-w-7xl` wrappers.

---

## Phase 6: Skills

- Created `skills.js` as a data-driven list of technologies.
- Added SVG technology assets under `src/assets/images/logos/`.
- Built `Skills.jsx` with:
  - seamless auto-scrolling carousel
  - hover pause
  - click-and-drag scrolling
  - brand-colored hover border/glow
  - responsive mobile card sizing
- Integrated `ScrollFloat` for the heading.
- Fixed `ScrollFloat` behavior:
  - no reverse animation on scroll-up
  - proper cleanup for React StrictMode
  - better trigger timing
- Applied `HeroBackground` to the Skills section.
- Constrained the carousel to `max-w-7xl`.
- Replaced hard overlay fades with a CSS mask fade so cards fade naturally without black edge blocks.
- Tuned mobile spacing and right padding.
- Updated skill card surface color for a more consistent dark card look.
- Updated Skills technology tiles to use theme-aware secondary surfaces.
- Added stronger but subtle borders to technology tiles.
- Made monochrome technology icons adapt between white in dark mode and black in light mode.
- Reduced desktop tile padding for better balance.

Key decision:

- The star background fills the full section, but the heading and carousel remain constrained for layout discipline.

---

## Phase 7: Projects

- Created `src/data/projects.js`.
- Added GymPlify as the real featured project.
- Added placeholder concept projects for layout balance:
  - DevTrack
  - API Pulse
  - Campus Connect
- Added project screenshot assets under `src/assets/images/projects/`.
- Created `projectTechnologyIcons.js` for icon mapping across project tech stacks.
- Built `ProjectCard.jsx`:
  - screenshot / placeholder preview
  - title
  - description
  - technology pills with icons
  - View button
  - whole-card click behavior
  - keyboard support
  - hover border/glow
- Removed the direct GitHub action from the card, but preserved `githubUrl` in project data.
- Built `Projects.jsx` with a responsive Bento-style grid:
  - wide website cards
  - standard utility/tool cards
  - max three-card visual rhythm on large screens
  - mobile-first one-column layout
- Added `ProjectModal.jsx`:
  - scroll-locked backdrop
  - sticky title header
  - close button
  - backdrop click-to-close
  - mouse-wheel modal scrolling
  - GitHub action inside modal
  - optional Live Demo action
  - technology logo section
  - screenshot gallery with arrows and dots when multiple images exist
- Applied the shared `HeroBackground` to Projects.
- Tuned project mobile responsiveness:
  - safer section padding
  - better screenshot object positioning
  - smaller mobile description and technology pills
  - modal left untouched after it was confirmed working well
- Added the shared spotlight hover effect to Project cards using `SpotLightLayer.jsx` and `handleSpotlightMove`.
- Clamped Project card descriptions so preview cards stay compact while full descriptions remain available inside the modal.
- Applied shared themed border styling to Project cards, technology pills, and modal image frames.
- Tuned modal carousel arrows, dots, and action buttons for theme readability.
- Improved modal screenshot sizing so images remain visible and do not visually collide with the modal edges.
- Fixed tablet-to-desktop project layout spacing so cards stay centered with balanced side padding.

Key decisions:

- `image` remains the card thumbnail.
- Optional `images` powers the modal gallery.
- `githubUrl` stays in `projects.js` even when GitHub is not shown on the card.
- Project detail actions belong in the modal, not the preview card.
- Preview cards should summarize; detailed project explanations belong in the modal.

---

## Phase 9: Contact and Footer

- Skipped the Experience section for now and kept its Navbar tab hidden.
- Reviewed an external Contact page as structural inspiration only.
- Built `Contact.jsx` with:
  - shared `HeroBackground`
  - centered `Contact` label
  - `Hire me` heading animated with `ScrollFloat`
  - responsive two-column layout
  - contact links for email, GitHub, and LinkedIn
  - accessible form labels and required fields
  - controlled form state
  - email format validation
  - field clearing after a valid submit
- Added local feedback behavior:
  - success toast for valid submit
  - error toast for invalid email
  - toast auto-dismiss after 3 seconds
  - compact top-right toast layout with an X dismiss button
- Built `Footer.jsx` with:
  - navigation links from `siteConfig.navLinks`
  - social links
  - shared `HeroBackground`
  - copyright line
  - heart icon in the project credit text
- Created reusable spotlight utilities:
  - `src/components/ui/SpotLightLayer.jsx`
  - `src/utils/spotlight.js`
- Applied the spotlight hover effect to:
  - Contact cards
  - Project cards
  - Skills cards

Key decisions:

- Real email sending is intentionally deferred until an email service or backend is chosen.
- The Contact form is honest about its current behavior and does not pretend messages are sent.
- Spotlight movement logic lives in `src/utils/spotlight.js` to avoid repeated mouse-position code.
- The visual spotlight layer is reusable so the exact styling can stay consistent across cards.

---

## Phase 10: Theme and Visual Polish

- Added a working dark/light theme system:
  - `App.jsx` owns theme state.
  - `localStorage` remembers the selected theme.
  - `data-theme` on the root document element activates the correct CSS variable set.
- Changed the light theme direction to a warm cream background instead of plain gray.
- Updated `HeroBackground` so particles become green in light mode.
- Polished the Hero section for light mode:
  - stronger readable accent for the name
  - theme-aware body text
  - theme-aware primary and secondary buttons
  - cleaner social tooltip colors
- Polished the Navbar for light mode:
  - stronger glass surface
  - darker shadow
  - clearer mobile dropdown
  - theme toggle with sun/moon behavior
- Polished the Skills section:
  - theme-aware technology tile surfaces
  - shared border variables
  - corrected monochrome icon color in light mode
  - subtler hover glow for monochrome and SVG icons
- Polished the Projects section:
  - theme-aware card surfaces
  - less aggressive hover glow
  - Project card description clamping
  - Project pill borders aligned with card borders
  - modal image frame border aligned with card borders

Key decision:

- Theme styling should use semantic CSS variables instead of hardcoded one-off light/dark classes whenever possible.

---

## Current State

Completed:

- Project setup
- Tooling
- Design system
- Smart Navbar
- Hero
- Skills
- Projects
- Contact UI
- Footer

Still pending:

- Experience section
- Real email sending integration
- Remaining light-theme polish for Contact and Footer
- Accessibility audit
- Image optimization
- Deployment
