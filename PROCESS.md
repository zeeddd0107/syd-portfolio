# Project Process Log

This document tracks the step-by-step progress of building the Premium Portfolio. It acts as a reference for the setup, decisions made, and phases completed.

---

## 🛠️ Phases & Steps Completed

### Phase 1: Project Setup (Vite + React)
*   **Scaffolding the Project:**
    *   Initialized the React project inside the project root using Vite:
        ```bash
        npx -y create-vite@latest . --template react
        ```
    *   Installed baseline dependencies using `npm install`.
*   **Entry Points & Architecture Discovery:**
    *   Analyzed `index.html` as the true entry point of the Vite app.
    *   Understood how `src/main.jsx` utilizes React 19's `createRoot` and mounts `<App />` within `<div id="root">` inside `index.html`.
    *   Discussed the importance of keeping `StrictMode` enabled in development to catch potential bugs and lifecycle issues.
*   **Boilerplate Cleanup:**
    *   Deleted default Vite/React assets: `src/App.css`, `src/assets/react.svg`, and `public/vite.svg`.
    *   Cleared out `src/index.css` to prepare it for global Tailwind styling.
    *   Rewrote `src/App.jsx` with a clean, minimal placeholder.
*   **Git Repository Isolation:**
    *   Discovered Git was tracking the user's home directory (`C:\Users\sydney`) instead of the project directory.
    *   Isolated the project by initializing Git directly inside the project root:
        ```bash
        git init
        ```
*   **Linking and Pushing to GitHub:**
    *   Renamed default branch to `main`:
        ```bash
        git branch -M main
        ```
    *   Linked the local repository to a remote repository on GitHub:
        ```bash
        git remote add origin <github-repo-url>
        ```
    *   Pushed local commits to the remote origin and set upstream:
        ```bash
        git push -u origin main
        ```


### Phase 2: Install & Configure Dependencies (Complete)
*   **Library Installation:**
    *   Installed core libraries for styling, animation, smoothing, and utilities:
        ```bash
        npm install tailwindcss @tailwindcss/vite framer-motion lenis lucide-react clsx tailwind-merge
        ```
*   **Tailwind CSS v4 Configuration:**
    *   Configured Vite to use the Tailwind v4 compiler plugin in `vite.config.js`.
    *   Imported Tailwind into the CSS entry point `src/index.css` using `@import "tailwindcss";`.
*   **Environment Verification:**
    *   Updated `src/App.jsx` with temporary Tailwind utility classes (`min-h-screen`, `bg-neutral-950`, `flex`, `text-emerald-400`, etc.) to confirm compilation and styling works.

### Phase 3: Folder Structure & Design System (Complete)
*   **Folder Structure Restructuring:**
    *   Created subdirectories inside `src/` to support scalable architecture:
        ```powershell
        mkdir src/components/ui, src/components/layout, src/components/cards, src/components/buttons, src/constants, src/data, src/utils, src/styles
        ```
    *   Relocated `src/index.css` to `src/styles/globals.css` and updated its import inside `src/main.jsx`.
*   **Path Alias (`@/`) Configuration:**
    *   Configured Vite's resolver in `vite.config.js` to map `@/` to the `./src` directory.
    *   Created a standard `jsconfig.json` file to enable VS Code auto-import and IntelliSense path matching, resolved without the deprecated `baseUrl` parameter for compatibility with TypeScript 6.0+.
*   **Tailwind CSS v4 Custom Theme:**
    *   Configured custom design tokens (Poppins font, colors like `#00FF99` accent, dark backgrounds, elevated layout boundaries, subtle/accent borders, and custom box shadow glows) directly in `src/styles/globals.css` using the new `@theme` directive.
    *   Added standard body resets and enabled antialiasing.
*   **Linter Integration Configuration:**
    *   Resolved CSS linting issues in VS Code for custom `@theme` and `@utility` rules by adding `css.lint.unknownAtRules: "ignore"` to a new project-level `.vscode/settings.json` file.

### Phase 4: Navigation & Layout (Complete)
*   **Lenis Smooth Scroll Integration:**
    *   Configured Lenis smooth scrolling inside a `useEffect` hook in `src/App.jsx` running on a browser `requestAnimationFrame` animation frame loop.
*   **Central Config & Data Separation:**
    *   Created `src/constants/siteConfig.js` for portfolio metadata (name, title, email, and navigation path urls).
    *   Created `src/data/socialLinks.js` for social profile details and Lucide icon mappings.
*   **Navbar Component & Barrel Export:**
    *   Built a responsive, sticky, glassmorphic navigation bar in `src/components/layout/Navbar.jsx` with desktop links, a mobile drawer toggle state, and active section highlights.
    *   Configured barrel exports inside `src/components/index.js` to enable clean named imports.
    *   Rendered the `<Navbar />` inside `src/App.jsx`, adjusting layout spacing with top padding.
*   **Footer Component Implementation:**
    *   Built a matching page footer in `src/components/layout/Footer.jsx` that dynamically resolves copyright dates and renders external social links with security-standard `rel="noopener noreferrer"` parameters.
*   **Navbar Layout Refinements:**
    *   Removed the "Let's Talk" CTA buttons (both the desktop button and the mobile menu drawer version) to keep the navigation cleaner.
    *   Relied on the flexbox layout container's `justify-between` utility class to automatically align the remaining desktop navigation items to the far right, matching the responsive theme.

### Phase 5: Hero / About Section (Complete)
*   **Decoupled Site Bio:**
    *   Updated `siteConfig.js` to include the professional portfolio bio text.
*   **Visual Asset Scaffolding:**
    *   Created a custom, theme-compliant professional developer profile avatar (`developer_avatar.png`) inside `src/assets/images/profile/`.
*   **Custom Brand Icons:**
    *   Created `src/components/ui/icons.jsx` to export standalone `GithubIcon` and `LinkedinIcon` SVG components.
    *   This was necessary because `lucide-react` v1.0.0+ removed all brand/logo icons for trademark compliance.
    *   Updated `src/data/socialLinks.js` to import from this local file instead of `lucide-react`.
*   **TypewriterEffect Component:**
    *   Built a reusable `TypewriterEffect` component at `src/components/ui/typewriter-effect.jsx`.
    *   Uses Framer Motion's `useAnimate` + `stagger` to reveal characters one at a time with a configurable 0.06s per-character delay.
    *   Uses `useInView` to trigger the animation only when the component enters the viewport.
    *   Loops every 8 seconds: fades out characters in reverse (last-to-first), pauses 300ms, then retypes them.
    *   Renders a blinking accent-colored cursor block after the animation completes.
*   **HeroBackground Effect:**
    *   Built an interactive multi-layer parallax star field in `src/effects/HeroBackground.jsx`.
    *   Stars are organized into 3 depth layers: Far (80 stars, slow), Mid (50 stars, medium), Close (20 stars, fast).
    *   Star positions, sizes, opacities, and twinkle timing are generated deterministically using a `seededRandom()` function (no random re-renders on hot reload).
    *   A `mousemove` listener updates a ref (`mouse.current`) with normalized coordinates; a `requestAnimationFrame` loop lerps a smoothed position ref (`current.current`) toward the target for lag-feel parallax.
    *   Each layer div is translated independently using `depth × current mouse position + auto-orbit offset` for a natural floating galaxy effect.
    *   Positioned with `absolute inset-0 -z-10` so it sits behind all Hero content without capturing pointer events.
*   **Animated Hero Component:**
    *   Implemented the unified Hero + About screen component in `src/sections/Hero.jsx`.
    *   Configured hardware-accelerated entrance animations using Framer Motion (staggered container children with custom cubic-bezier ease curves `[0.16, 1, 0.3, 1]`).
    *   Built a split columns responsive grid (text left `lg:col-span-7`, floating spring-hover photo right `lg:col-span-5`).
    *   Imported and displayed the new custom brand icon components for error-free loading.
*   **Integration:**
    *   Rendered `<Hero />` inside the root `<main>` layout container in `App.jsx`.
*   **Design and Color System Customization:**
    *   Configured a custom `--color-secondary: #E7E7E7` color token directly in `globals.css` to represent secondary body typography.
    *   Applied this design token as the Tailwind v4 utility class `text-secondary` to the Hero component's bio paragraph, improving reading legibility on deep background contrast.

### Phase 6: Skills Section (Complete)
*   **Skills Data Model:**
    *   Created `src/data/skills.js` to define the full list of 15 technologies (Python, Java, C#, ASP.NET Core, React, JavaScript, Tailwind CSS, HTML5, CSS3, Git, GitHub, Postman, Firebase, Express, Node.js).
    *   Each skill entry stores `name`, `icon` (SVG path string or JSX component reference), `isSvgFile` (boolean), and `color` (brand hex color).
    *   Used the `isSvgFile` flag to switch between rendering an `<img>` tag (for SVG file assets) and a JSX React component (for custom-drawn inline icons).
*   **SVG Icon Assets:**
    *   Created `src/assets/images/logos/` as the canonical folder for all brand technology SVG logo files.
    *   Added 15 individual SVG files: `csharp.svg`, `css.svg`, `dotnetcore.svg`, `express.svg`, `firebase.svg`, `git.svg`, `github.svg`, `html.svg`, `java.svg`, `javascript.svg`, `nodejs.svg`, `postman.svg`, `python.svg`, `react.svg`, `tailwind.svg`.
    *   Updated `express.svg` to use `fill="currentColor"` to enable dynamic color inheritance.
*   **Custom Icon Components:**
    *   Extended `src/components/ui/icons.jsx` with a custom `ExpressIcon` JSX component rendered using the official Express.js logo SVG path and `fill="currentColor"`.
    *   This ensures Express matches the visual style of the `GithubIcon` and `LinkedinIcon` already in the file.
*   **Skills Section Component:**
    *   Built `src/sections/Skills.jsx` with the following features:
        *   **Seamless Auto-Scroll Carousel:** Uses a `requestAnimationFrame` loop to continuously increment `scrollLeft` at `0.8px/frame`. The skills list is rendered twice side-by-side (`Array.from({ length: 2 }).map(...)`) so when the first copy ends, `scrollLeft` resets to the start of the second copy without any visible jump.
        *   **Hover Pause:** The carousel stops scrolling when the user hovers over the container (`isHoveredContainer` ref).
        *   **Click-and-Drag Scrolling:** `onMouseDown`, `onMouseMove`, and `onMouseUp` handlers implement desktop drag-to-scroll with a `1.5×` sensitivity multiplier and seamless loop correction during drag.
        *   **Dynamic Icon Rendering:** Checks `skill.isSvgFile` to render either `<img src={skill.icon} />` for SVG assets or `<Icon size={52} />` for JSX components.
        *   **Per-Card Hover Effects:** Each skill card independently tracks `hoveredIndex`, applying brand color glow (`boxShadow`), border highlight, and `translateY(-6px) scale(1.03)` lift using `style` props.
        *   **Edge Fade Overlays:** Left and right gradient overlays mask the carousel edges for a premium polished look.
*   **ScrollFloat Animation (Heading):**
    *   Integrated the React Bits `ScrollFloat` GSAP component at `src/lib/react-bits/ScrollFloat.jsx` for the "Skills & Technologies" heading.
    *   **Bug Fix — Animation Reversal:** The original `scrub: true` config caused the animation to reverse on scroll-up. Replaced with `once: true` (animation plays exactly once when element enters viewport).
    *   **Bug Fix — React StrictMode Double-Mount:** The original `useEffect` had no cleanup function. React 18 Strict Mode mounts effects twice, creating two competing animations. Fixed by wrapping the animation in `gsap.context()` and returning `ctx.revert()` as cleanup.
    *   **Bug Fix — Early Trigger:** Default `scrollStart = "center bottom+=50%"` caused the trigger to fire while still below the viewport. Overridden at call site with `scrollStart="top bottom"` for immediate entry-based triggering.
    *   **Performance Improvement:** Changed ease from `back.inOut(2)` (slow ramp-up) to `power2.out` (starts at full speed). Reduced stagger from `0.04s` to `0.02s` per character for snappier reveal.
*   **Framer Motion Entrance Animations:**
    *   Wrapped the `"What I Work With"` subtitle label in a `<motion.span>` with `initial={{ opacity: 0, y: 15 }}` and `whileInView={{ opacity: 1, y: 0 }}` (viewport `once: true`).
    *   Wrapped the carousel container in a `<motion.div>` with `initial={{ opacity: 0, y: 30 }}` and `whileInView={{ opacity: 1, y: 0 }}` (viewport `once: true`, `delay: 0.1s`).
    *   Both animations use `easeOut` easing and play only once, preserving the final state when scrolling back up.
*   **JSX Error Fix:**
    *   Resolved `JSX elements cannot have multiple attributes with the same name` lint error on line 107 caused by two `onMouseLeave` attributes on the scroll container. Merged them into a single unified handler.
