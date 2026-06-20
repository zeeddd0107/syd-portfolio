# Project Tech Stack

This document lists and explains the core technologies, libraries, and tools used to build the Premium Portfolio.

---

## 💻 Core Development Stack

| Technology | Category | Purpose |
|---|---|---|
| **React 19** | Frontend Library | Core framework for UI component composition, state management, and declarative rendering. |
| **Vite** | Build Tool & Dev Server | Blazing-fast development server with Native ES Modules (HMR) and Rollup-based production builder. |
| **JavaScript (ES6+)** | Language | Native language used for application logic, utilities, and components. |

---

## 🎨 Styling & Presentation

| Library | Category | Purpose |
|---|---|---|
| **Tailwind CSS v4** | CSS Framework | Utility-first CSS compiling theme configurations directly through the `@theme` directive in CSS. |
| **Poppins** | Typography | Modern, professional sans-serif font family imported from Google Fonts for global typography. |

---

## 🎬 Animations & Scroll Mechanics

| Library | Category | Purpose |
|---|---|---|
| **Framer Motion** | Animation Library | Handles entrance animations, staggered lists, hover scales, and dynamic page transition physics. |
| **GSAP (ScrollTrigger)** | Animation Library | Used for complex scroll-tied timelines and page transitions that require precise timing control. |
| **Lenis** | Smooth Scroll | normalizes browser scroll speed and momentum to deliver a premium, fluid scrolling experience. |

---

## 🛠️ Utilities & Helpers

| Library | Category | Purpose |
|---|---|---|
| **Lucide React** | Icons | Clean, modern SVG icon library compiled as native React components. |
| **clsx** | Utility | Helper to dynamically combine conditionally applied CSS class strings in React components. |
| **tailwind-merge** | Utility | Prevents Tailwind class duplication and overrides (e.g. resolving `p-2` and `p-4` conflicts dynamically). |

---

## 📨 Forms & Integrations

| Library | Category | Purpose |
|---|---|---|
| **React Hook Form** | Form Management | Optimizes form state management by using uncontrolled inputs to minimize re-renders. |
| **Zod** | Validation | Schema-based validation tool that integrates with React Hook Form to ensure input safety. |
| **EmailJS** | Email Delivery | Send email submissions directly from the client-side contact form to your inbox without requiring a custom backend. |
