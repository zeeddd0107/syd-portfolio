# Development Troubleshooting Log

This document records issues encountered during development, their causes, and the solution used.

---

## 1. VS Code Port Interception

**Problem:** The dev server opened inside VS Code's Simple Browser instead of the default system browser.

**Cause:** VS Code intercepted localhost links.

**Solution:** Disabled `Workbench > Browser: Open Localhost Links`.

---

## 2. Dev Server Did Not Auto-Open Browser

**Problem:** The local server had to be opened manually.

**Solution:** Added `server.open` to `vite.config.js`.

---

## 3. Emmet Did Not Expand in JSX

**Problem:** HTML-like abbreviations did not expand in `.jsx` files.

**Cause:** VS Code treats JSX as `javascriptreact`.

**Solution:** Enabled Emmet expansion for `javascriptreact` in VS Code settings.

---

## 4. Tailwind CSS v4 Plugin Error

**Problem:** Vite failed because Tailwind was used as a direct PostCSS plugin.

**Cause:** Tailwind v4 requires the Vite compiler plugin.

**Solution:** Imported `@tailwindcss/vite` in `vite.config.js`.

---

## 5. Deprecated `baseUrl` Warning

**Problem:** `jsconfig.json` warned that `baseUrl` is deprecated.

**Solution:** Removed `baseUrl` and used:

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

---

## 6. Tailwind v4 Unknown At-Rule Warnings

**Problem:** VS Code flagged `@theme` and `@utility`.

**Cause:** Built-in CSS validation does not recognize Tailwind v4 at-rules.

**Solution:** Added project VS Code settings:

```json
{
  "css.lint.unknownAtRules": "ignore"
}
```

---

## 7. Vite Alias Import Failure

**Problem:** `@/` imports failed.

**Cause:** `vite.config.js` used `alis` instead of `alias`.

**Solution:** Corrected the config key to `alias`.

---

## 8. Google Font `@import` Ordering

**Problem:** PostCSS complained that `@import` must precede other statements.

**Cause:** CSS imports were ordered incorrectly.

**Solution:** Kept the Google Font import above the Tailwind import.

---

## 9. Missing Brand Icons in Lucide

**Problem:** `Github` and `Linkedin` brand icons were unavailable from `lucide-react`.

**Cause:** Lucide removed brand icons for trademark/design reasons.

**Solution:** Created local custom SVG components in `src/components/ui/icons.jsx`.

---

## 10. ScrollFloat Reversed on Scroll-Up

**Problem:** Heading animation reversed when scrolling upward.

**Cause:** `scrub: true` tied animation progress to scroll position.

**Solution:** Removed scrub behavior and used one-shot viewport triggering.

---

## 11. ScrollFloat Did Not Play Reliably

**Problem:** The heading animation sometimes appeared already complete.

**Cause:** React StrictMode double-mounted effects and the trigger started too early.

**Solution:** Wrapped GSAP setup in `gsap.context()` with cleanup and used a later call-site trigger.

---

## 12. Duplicate JSX Attribute

**Problem:** `Skills.jsx` had duplicate `onMouseLeave` props.

**Cause:** Drag cleanup and hover cleanup were added separately.

**Solution:** Merged both behaviors into one `onMouseLeave` handler.

---

## 13. Navbar Hid During Anchor Navigation

**Problem:** Clicking a Navbar link made the Navbar disappear.

**Cause:** Programmatic smooth scrolling looked like manual downward scrolling.

**Solution:** Added a temporary navigation lock so the Navbar stays visible during anchor navigation.

---

## 14. Active Navbar Tab Did Not Restore on Scroll-Up

**Problem:** The active tab changed from Home to Skills but did not reliably switch back.

**Cause:** Intersection-based tracking was not reliable with navigation locks.

**Solution:** Replaced it with data-driven section offset tracking.

---

## 15. Skills Content Oversized on Mobile

**Problem:** Heading, tiles, icons, and gaps were too large on small screens.

**Solution:** Added mobile-first sizing and restored desktop sizes with responsive modifiers.

---

## 16. PowerShell Blocked `npm.ps1`

**Problem:** `npm run build` or `npm run lint` failed because PowerShell blocked `npm.ps1`.

**Cause:** Execution policy rejected the unsigned npm wrapper script.

**Solution:** Use the Windows shim:

```powershell
npm.cmd run build
npm.cmd run lint
```

---

## 17. Project Image Import Failed

**Problem:** Importing a project screenshot failed in `projects.js`.

**Cause:** The referenced image path did not exist yet or the file name did not match.

**Solution:** Place screenshots under `src/assets/images/projects/` and import the exact filename:

```js
import gymplifyImage from "@/assets/images/projects/gymplify-dashboard.png";
```

---

## 18. Modal Background Page Scrolled

**Problem:** The page behind the project modal still scrolled.

**Cause:** `overflow: hidden` alone was not strong enough for the current smooth-scroll/page setup.

**Solution:** Locked the document body with fixed positioning while preserving the current scroll position, then restored it on close.

---

## 19. Modal Was Not Scrollable After Scroll Lock

**Problem:** The background stopped scrolling, but the modal content did not scroll correctly.

**Cause:** The scrollable area moved from the modal shell to the inner content, but the wheel handler still targeted the wrong ref.

**Solution:** Added a dedicated `contentRef` and routed wheel scrolling to the actual scrollable content area.

---

## 20. React Hook Called Inside Another Hook

**Problem:** React reported that `useEffect` was called inside a callback.

**Cause:** A second `useEffect` for resetting the modal gallery index was accidentally pasted inside the scroll-lock effect.

**Solution:** Removed the nested hook. Resetting the active image index now happens when the modal closes instead of through a synchronous state update effect.

---

## 21. `setState` Warning Inside Effect

**Problem:** React warned against calling `setActiveImageIndex(0)` synchronously inside an effect.

**Cause:** The state reset was not synchronizing with an external system; it was UI state that could be reset in the close event.

**Solution:** Removed the reset effect and reset the gallery index in the modal close handlers.

---

## 22. HeroBackground Looked Full-Width Only in Hero

**Problem:** The Hero background appeared full-width, but Skills and Projects backgrounds looked constrained.

**Cause:** The original Hero background was escaping because the Hero section was not positioned, while Skills/Projects were correctly positioned inside a constrained parent.

**Solution:** Made `<main>` full-width and moved `max-w-7xl`/padding into each section's inner content wrapper. Each section now owns its full-width background intentionally.

---

## 23. Carousel Fade Created Dark Edge Blocks

**Problem:** Gradient overlay fades looked like black borders on the carousel edges.

**Cause:** Overlay divs faded from the dark page background and visually covered large skill cards.

**Solution:** Removed overlay divs and used a CSS mask on the carousel wrapper so the card content itself fades naturally.

---

## 24. Project Cards Felt Too Wide on Mobile

**Problem:** Project cards and screenshots felt cramped on narrow screens.

**Cause:** Desktop-oriented spacing and image positioning were carrying into mobile.

**Solution:** Added mobile-safe padding, smaller text/pill sizing, and better screenshot object positioning while preserving the modal UI.
