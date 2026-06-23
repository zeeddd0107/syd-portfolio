# Project Tech Stack

This document lists and explains the core technologies, libraries, and tools used to build the Premium Portfolio.

---

## 💻 Core Development Stack

| Technology | Category | Version | Purpose |
|---|---|---|---|
| **React** | Frontend Library | ^19.2.6 | Core framework for UI component composition, state management, and declarative rendering. |
| **Vite** | Build Tool & Dev Server | ^8.0.12 | Blazing-fast development server with Native ES Modules (HMR) and Rollup-based production builder. |
| **JavaScript (ES6+)** | Language | — | Native language used for application logic, utilities, and components. |

---

## 🎨 Styling & Presentation

| Library | Category | Version | Purpose |
|---|---|---|---|
| **Tailwind CSS v4** | CSS Framework | ^4.3.1 | Utility-first CSS compiling theme configurations directly through the `@theme` directive in CSS. |
| **@tailwindcss/vite** | Vite Plugin | ^4.3.1 | Vite-specific compiler plugin that integrates Tailwind v4 into the Vite build pipeline. |
| **Poppins** | Typography | — | Modern, professional sans-serif font family imported from Google Fonts for global typography. |

---

## 🎬 Animations & Scroll Mechanics

| Library | Category | Version | Purpose |
|---|---|---|---|
| **Framer Motion** | Animation Library | ^12.40.0 | Handles entrance animations, staggered lists, hover scales, and character-by-character typewriter effects. |
| **GSAP (ScrollTrigger)** | Animation Library | ^3.x | Used for the `ScrollFloat` character-by-character heading reveal animation with one-shot viewport triggering (`once: true`) and `gsap.context()` lifecycle cleanup. |
| **Lenis** | Smooth Scroll | ^1.3.23 | Normalizes browser scroll speed and momentum to deliver a premium, fluid scrolling experience. |

---

## 🛠️ Utilities & Helpers

| Library | Category | Version | Purpose |
|---|---|---|---|
| **Lucide React** | Icons | ^1.21.0 | Clean, modern SVG icon library compiled as native React components. |
| **clsx** | Utility | ^2.1.1 | Helper to dynamically combine conditionally applied CSS class strings in React components. |
| **tailwind-merge** | Utility | ^3.6.0 | Prevents Tailwind class duplication and overrides (e.g. resolving `p-2` and `p-4` conflicts dynamically). |

---

## 📨 Forms & Integrations

| Library | Category | Version | Purpose |
|---|---|---|---|
| **React Hook Form** | Form Management | *(planned)* | Optimizes form state management by using uncontrolled inputs to minimize re-renders. |
| **Zod** | Validation | *(planned)* | Schema-based validation tool that integrates with React Hook Form to ensure input safety. |
| **EmailJS** | Email Delivery | *(planned)* | Send email submissions directly from the client-side contact form to your inbox without requiring a custom backend. |

---

## 📁 Source Architecture

The `src/` directory is organized by role, not by feature:

| Directory | Contains | Convention |
|---|---|---|
| `src/sections/` | Full-page section components (Hero, Skills, etc.) | One file per section, named in PascalCase |
| `src/components/layout/` | Structural shell components (Navbar, Footer) | Shared across all pages |
| `src/components/ui/` | Primitive/generic UI utilities (icons, typewriter) | Stateless or minimally stateful |
| `src/components/cards/` | Data-driven card display components | Receives data via props |
| `src/components/buttons/` | Custom button variants | Wraps `<a>` or `<button>` |
| `src/effects/` | DOM/canvas visual effect components | Not content — purely decorative, pointer-events-none |
| `src/constants/` | Static site config and metadata | JS objects; no JSX |
| `src/data/` | Dynamic content arrays (social links, skills, etc.) | JS arrays/objects; no JSX |
| `src/lib/` | Third-party wrappers and utility factories | e.g. `cn()` from clsx + tailwind-merge; React Bits components |
| `src/lib/react-bits/` | React Bits third-party animation components | e.g. `ScrollFloat.jsx` — treat as read-only vendor code |
| `src/assets/images/logos/` | Brand technology SVG logo files | One SVG per technology, kebab-case named |
| `src/styles/` | Global CSS entry file | `globals.css` only — no component-level CSS files |
| `src/utils/` | Custom pure utility functions | Reserved for future use |
