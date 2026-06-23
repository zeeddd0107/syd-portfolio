# Development Troubleshooting Log

This document records the specific issues, errors, and configuration roadblocks encountered during development, along with their solutions. It serves as a personal reference to avoid repeating the same issues.

---

## 🔍 Logged Issues & Solutions

### 1. VS Code Port Interception (Simple Browser Tab)

- **Problem:** Running `npm run dev` opened the local server inside an internal VS Code editor tab ("Simple Browser") instead of launching the system's default web browser (Brave/Chrome/Edge/Firefox).
- **Cause:** A default VS Code feature that automatically intercepts localhost port forwarding and keeps the preview inside the editor.
- **Solution:**
  1. Opened VS Code settings (`Ctrl + ,`).
  2. Searched for `openLocalhostLinks`.
  3. Unchecked the option **"Workbench > Browser: Open Localhost Links"**.

### 2. Auto-Opening the Browser on Dev Server Startup

- **Problem:** Having to manually click the localhost port link in the terminal to view the application in the browser.
- **Solution:** Configured Vite to instruct the operating system to automatically launch the default browser as soon as the server boots up. Added the `server.open` config in `vite.config.js`:
  ```javascript
  // vite.config.js
  export default defineConfig({
    // ... other settings
    server: {
      open: true,
    },
  });
  ```

### 3. Emmet HTML Expansion not Working in JSX Files

- **Problem:** Typing HTML tags (like `div` or `h1`) and pressing the `Tab` key inside `.jsx` React files did not expand them into HTML tags (e.g. `<div></div>`).
- **Cause:** VS Code treats `.jsx` files as JavaScript (`javascriptreact`), and by default disables Emmet to prevent accidental expansions while writing regular JS code.
- **Solution:** Mapped the language association to HTML and enabled Tab triggers inside the VS Code `settings.json` file:
  1. Opened Command Palette (`Ctrl + Shift + P`).
  2. Opened `Preferences: Open User Settings (JSON)`.
  3. Added the following configuration block:
     ```json
     "emmet.triggerExpansionOnTab": true,
     "emmet.includeLanguages": {
       "javascriptreact": "html"
     }
     ```

### 4. Tailwind CSS v4 Build Config Error

- **Problem:** The Vite dev server failed to start, throwing the following error:
  ```
  Error: It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin. The PostCSS plugin has moved to a separate package...
  ```
- **Cause:** In `vite.config.js`, the main Tailwind package was imported directly instead of the Vite-specific compiler plugin (i.e. `import tailwindcss from 'tailwindcss'` instead of `import tailwindcss from '@tailwindcss/vite'`). This caused Vite to try to invoke it as a PostCSS compiler function instead of a Vite bundler plugin.
- **Solution:** Corrected the import statement in `vite.config.js` to target the Vite plugin wrapper:
  ```javascript
  // Correct Import:
  import tailwindcss from "@tailwindcss/vite";
  ```

### 5. `jsconfig.json` Deprecated `baseUrl` Warning
- **Problem:** VS Code highlights `baseUrl` in `jsconfig.json` with a warning stating that `'baseUrl' is deprecated and will stop functioning in TypeScript 7.0.`
- **Cause:** In modern TypeScript/JS configuration guidelines (v6.0+), the `baseUrl` property is deprecated because module paths resolve relative to the configuration file root directly. Specifying `"baseUrl": "."` causes compile-time warnings.
- **Solution:** Removed `"baseUrl": "."` from `jsconfig.json` and changed the path resolution targets to use relative formatting (prefixing with `./`):
  ```json
  {
    "compilerOptions": {
      "paths": {
        "@/*": ["./src/*"]
      }
    },
    "include": ["src/**/*"]
  }
  ```

### 6. VS Code CSS Linter "Unknown at-rule" Warnings (`@theme`, `@utility`)
- **Problem:** VS Code shows yellow/red warnings inside `globals.css` with message `Unknown at rule @theme` and `Unknown at rule @utility`.
- **Cause:** VS Code has a built-in CSS validator that only recognizes standard W3C CSS at-rules. It flags custom at-rules introduced by Tailwind CSS v4 as errors/warnings.
- **Solution:** Created a project-level VS Code configuration file (`.vscode/settings.json`) to tell the built-in linter to ignore unknown at-rules:
  ```json
  {
    "css.lint.unknownAtRules": "ignore"
  }
  ```

### 7. Tailwind CSS IntelliSense Canonical Class Warnings
- **Problem:** VS Code's Tailwind CSS IntelliSense extension flags arbitrary values in class names (e.g. `h-[2px]` and `top-[73px]`) with warnings advising to write them as canonical scale classes.
- **Cause:** Tailwind has a standard spacing scale (where `1 unit = 0.25rem = 4px`). The extension flags arbitrary values enclosed in square brackets `[...]` if there are equivalent classes on the spacing scale.
- **Solution:** Updated the classes in `Navbar.jsx` to use their canonical scale equivalents:
  - Replaced `h-[2px]` with `h-0.5` (since `0.5 * 4px = 2px`).
  - Replaced `top-[73px]` with `top-18.25` (since `18.25 * 4px = 73px`).
  - Replaced `h-[calc(100vh-73px)]` with `h-[calc(100vh-18.25rem)]` or `h-[calc(100vh-4.5625rem)]`? Actually, if `top-[73px]` is changed to `top-18.25`, we can keep `h-[calc(100vh-73px)]` or write it cleanly. Let's see what class works.

### 8. Vite Path Alias Import Resolution Failure
- **Problem:** The Vite dev server failed to resolve imports starting with `@/` (e.g. `Failed to resolve import "@/components" from "src/App.jsx"`).
- **Cause:** A spelling typo in `vite.config.js` where the configuration key under `resolve` was written as `alis` instead of `alias`. Vite failed to process the path mapping object as a result.
- **Solution:** Corrected the spelling in `vite.config.js` to `alias`:
  ```javascript
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  }
  ```

### 9. PostCSS `@import` Ordering Error
- **Problem:** Dev server fails to build with the error `[vite:css][postcss] @import must precede all other statements (besides @charset or empty @layer)`.
- **Cause:** The CSS specification states that all `@import` statements must reside at the very top of a CSS file. In `globals.css`, placing `@import "tailwindcss";` before a Google Font `@import url(...)` caused Tailwind's compiler to expand its resets and utilities *before* the font import, causing PostCSS to throw an ordering error.
- **Solution:** Moved the Google Font `@import` declaration above the `@import "tailwindcss";` declaration.

### 10. Missing Brand Icons in `lucide-react` v1.0.0+
- **Problem:** Uncaught SyntaxError showing that `lucide-react` does not provide an export named `Github` (or `Linkedin`).
- **Cause:** Starting in version 1.0.0, the Lucide project removed all corporate/brand logo icons for trademark compliance and design focus.
- **Solution:** Created a custom React SVG icons component file (`src/components/ui/icons.jsx`) to export standalone `GithubIcon` and `LinkedinIcon` components, then updated `src/data/socialLinks.js` to import from this local file.
### 11. GSAP ScrollFloat Animation Reverses on Scroll-Up
- **Problem:** The React Bits `ScrollFloat` heading animation played in reverse when the user scrolled back up to the Hero section after having scrolled into the Skills section.
- **Cause:** The `ScrollTrigger` config used `scrub: true`, which ties the animation progress 1:1 to the scroll position — scrolling up reverses it, scrolling down plays it forward.
- **Solution:** Removed `scrub: true` and added `once: true` to the `scrollTrigger` config. `once: true` tells GSAP to self-destruct the ScrollTrigger after the animation fires for the first time, so the heading stays permanently in its final revealed state regardless of scroll direction.

### 12. GSAP ScrollFloat Does Not Play After Waiting on Hero Section
- **Problem:** If the user stayed on the Hero section for several seconds before scrolling down, the `ScrollFloat` animation on the Skills heading did not play — the heading appeared to already be in its final state silently.
- **Cause:** Two compounding issues:
  1. **React Strict Mode Double-Mount:** React 18 Strict Mode intentionally runs every `useEffect` twice (mount → unmount → mount) in development. Because the original `useEffect` in `ScrollFloat.jsx` had no cleanup return function, GSAP created two separate animations on the same DOM elements. The second animation's ScrollTrigger fired during initial page load and consumed the `once: true` budget, so no animation ever played when scrolled into view.
  2. **Early Trigger Position:** The default `scrollStart = "center bottom+=50%"` resolved to a point 50% below the bottom of the viewport, which can be crossed at page load time during layout recalculations.
- **Solution:**
  1. Wrapped the GSAP animation inside `gsap.context()` and returned `() => ctx.revert()` as the `useEffect` cleanup. This ensures GSAP fully destroys all animations and ScrollTriggers on unmount, preventing the double-animation issue in Strict Mode.
  2. Overrode `scrollStart` at the call site in `Skills.jsx` to `"top bottom"` — triggering only when the top edge of the heading physically enters the bottom of the viewport.

### 13. JSX Duplicate `onMouseLeave` Attribute Error
- **Problem:** VS Code and the Vite compiler flagged a lint error: `JSX elements cannot have multiple attributes with the same name` on line 107 of `Skills.jsx`.
- **Cause:** The scroll container `<div>` in `Skills.jsx` had two separate `onMouseLeave` props added at different times during development:
  - First one (line 102): `onMouseLeave={handleMouseLeaveOrUp}` — stops drag state.
  - Second one (line 107): `onMouseLeave={() => { isHoveredContainer.current = false; setHoveredIndex(null); }}` — resets hover and card highlight state.
  JSX does not allow duplicate attribute names on the same element.
- **Solution:** Removed both duplicate `onMouseLeave` attributes and replaced them with a single unified handler that calls both behaviors:
  ```jsx
  onMouseLeave={() => {
    handleMouseLeaveOrUp(); // stop drag
    isHoveredContainer.current = false; // stop auto-scroll pause
    setHoveredIndex(null); // clear card highlight
  }}
  ```

### 14. Navbar Hides During Anchor-Link Navigation

- **Problem:** Clicking a Navbar link caused the Navbar to disappear while the browser smoothly scrolled to the selected section.
- **Cause:** The scroll-direction handler treated all increases in `window.scrollY` as manual downward scrolling and could not distinguish an anchor-triggered scroll.
- **Solution:** Added an `isNavigating` ref and a short inactivity timer. Link clicks lock the Navbar visible while navigation is active, and normal direction detection resumes after scrolling stops.

### 15. Active Navbar Tab Did Not Update Reliably When Scrolling Up

- **Problem:** Manual scrolling changed the active tab from Home to Skills, but scrolling back upward did not consistently restore Home.
- **Cause:** The first `IntersectionObserver` approach skipped intersection updates while navigation was locked and did not always emit another callback after the lock ended.
- **Solution:** Replaced the observer with data-driven position tracking inside the existing scroll handler. The active section is the last rendered section whose `offsetTop` has crossed an activation point 35% down the viewport. Missing future sections are ignored until matching IDs are rendered.

### 16. Skills Content Was Oversized on Mobile

- **Problem:** The Skills label, animated heading, carousel gaps, technology tiles, icons, and labels consumed too much space on narrow screens.
- **Cause:** Most dimensions used desktop-oriented fixed Tailwind classes at the base breakpoint.
- **Solution:** Added mobile-first sizing and restored the original dimensions with `sm:`/`md:` modifiers. The heading uses a fluid `clamp()` value, cards use `w-32 h-32` on mobile, and desktop sizes remain unchanged.

### 17. PowerShell Blocks the `npm.ps1` Wrapper

- **Problem:** `npm run lint` and `npm run build` failed in PowerShell with a script-signing error for `npm.ps1`.
- **Cause:** The machine's PowerShell execution policy does not permit the unsigned npm wrapper script.
- **Solution:** Run the Windows command shim instead:
  ```powershell
  npm.cmd run lint
  npm.cmd run build
  ```
  This changes only how npm is invoked and does not alter the project.

