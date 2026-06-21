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





