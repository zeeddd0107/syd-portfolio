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

### Phase 4: Navigation & Layout (In Progress)
*   **Lenis Smooth Scroll Integration:**
    *   Configured Lenis smooth scrolling inside a `useEffect` hook in `src/App.jsx` running on a browser `requestAnimationFrame` animation frame loop.
*   **Central Config & Data Separation:**
    *   Created `src/constants/siteConfig.js` for portfolio metadata (name, title, email, and navigation path urls).
    *   Created `src/data/socialLinks.js` for social profile details and Lucide icon mappings.
*   **Navbar Component & Barrel Export:**
    *   Built a responsive, sticky, glassmorphic navigation bar in `src/components/layout/Navbar.jsx` with desktop links, a mobile drawer toggle state, and active section highlights.
    *   Configured barrel exports inside `src/components/index.js` to enable clean named imports.
    *   Rendered the `<Navbar />` inside `src/App.jsx`, adjusting layout spacing with top padding.



