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
