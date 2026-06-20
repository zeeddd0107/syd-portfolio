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

### Phase 2: Install & Configure Dependencies (In Progress)
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
