---
name: nextjs-ai-futuristic-design
description: >
  Professional Next.js + Tailwind CSS project skill. Enforces a strict futuristic AI aesthetic
  using a black and #700225 (deep crimson) design system. Use for any frontend build, page,
  component, dashboard, landing page, or full application in this project. Every output must
  be production-grade, visually distinctive, and consistent with the defined design language.
---

# ⚡ PROJECT SKILL — Futuristic AI Design System
## Stack: Next.js · Tailwind CSS · Any Library · Black × #700225

> **Agent Instruction**: Read this entire document before writing a single line of code.
> Every decision — color, spacing, font, animation, component shape — must align with this system.
> There are no exceptions. Professional output is the only acceptable output.

---

## 1. TECH STACK (NON-NEGOTIABLE)

| Layer | Technology |
|---|---|
| Framework | **Next.js 14+** (App Router preferred) |
| Styling | **Tailwind CSS** (with custom config extension) |
| Language | **TypeScript** (always) |
| Animation | **Framer Motion** (primary) + CSS keyframes |
| Icons | **Lucide React** or **Heroicons** |
| Fonts | Google Fonts via `next/font` |
| State | Zustand or React Context |
| UI Primitives | Radix UI / shadcn/ui (unstyled, restyled to system) |
| 3D / Particle FX | Three.js / React Three Fiber / tsParticles (when relevant) |
| Charts | Recharts or Victory (restyled to system) |

---

## 2. COLOR SYSTEM

This project lives in two colors. Every visual element must derive from them.

```js
// tailwind.config.ts — extend this
colors: {
  brand: {
    black:     '#000000',
    void:      '#080808',   // near-black backgrounds
    deep:      '#0D0D0D',   // card/panel background
    surface:   '#141414',   // elevated surface
    border:    '#1F1F1F',   // subtle borders
    muted:     '#2A2A2A',   // disabled / secondary backgrounds
    crimson:   '#700225',   // PRIMARY ACCENT
    crimsonHi: '#8B0230',   // hover / highlight state
    crimsonLo: '#4A0118',   // pressed / dark accent
    crimsonGlow:'#700225',  // used in box-shadow glow
    white:     '#FFFFFF',
    offwhite:  '#F0EDE8',   // body text
    dim:       '#888888',   // secondary text
    ghost:     '#3A3A3A',   // placeholder text
  }
}
```

### Usage Rules
- **Background**: Always `brand.void` or `brand.black`. Never white or light backgrounds.
- **Primary Accent**: `#700225` — used for CTAs, active states, underlines, glows, borders on focus.
- **Text**: `brand.white` for headings, `brand.offwhite` for body, `brand.dim` for captions.
- **Never** introduce colors outside this palette without explicit instruction.
- **Gradients** are allowed and encouraged — always from `#000000` → `#700225` or vice versa.

---

## 3. TYPOGRAPHY

```ts
// Use next/font — example pairing
import { Space_Grotesk, Rajdhani } from 'next/font'

// Display / Headings
const display = Rajdhani({ subsets: ['latin'], weight: ['500','600','700'] })

// Body / UI
const body = Space_Grotesk({ subsets: ['latin'], weight: ['300','400','500','600'] })
```

### Type Scale & Rules
| Role | Size | Weight | Color |
|---|---|---|---|
| Hero Headline | `text-6xl` – `text-8xl` | 700 | `#FFFFFF` |
| Section Title | `text-3xl` – `text-5xl` | 600 | `#FFFFFF` |
| Card Title | `text-xl` – `text-2xl` | 600 | `#F0EDE8` |
| Body | `text-base` – `text-lg` | 400 | `#F0EDE8` |
| Caption / Label | `text-xs` – `text-sm` | 500 | `#888888` |
| Accent Label | `text-xs` | 600 uppercase tracking-widest | `#700225` |

- **Letter-spacing**: Use `tracking-widest` on all-caps labels and section tags.
- **Line-height**: `leading-tight` for headlines, `leading-relaxed` for body.
- **Never** use system fonts (Arial, Helvetica, sans-serif alone).

---

## 4. DESIGN LANGUAGE — FUTURISTIC AI AESTHETIC

This project looks like the command center of an advanced AI system. The aesthetic must evoke:
- Deep space, neural networks, precision engineering
- Power, intelligence, controlled danger
- Cutting-edge technology with confident restraint

### Visual Principles

#### 4.1 Depth & Atmosphere
- Backgrounds are **never flat black** — use subtle radial gradients:
  ```css
  background: radial-gradient(ellipse at 20% 50%, rgba(112, 2, 37, 0.15) 0%, #000000 60%);
  ```
- Layer multiple glowing radial spots (crimson at very low opacity: 0.05–0.20).
- Use `backdrop-blur` heavily on panels and modals.

#### 4.2 Grid & Geometric Structure
- Faint grid overlay on hero sections:
  ```css
  background-image: 
    linear-gradient(rgba(112,2,37,0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(112,2,37,0.08) 1px, transparent 1px);
  background-size: 40px 40px;
  ```
- Use angular/diagonal clipping for section dividers (`clip-path: polygon(...)`).
- Hard geometric shapes: thin lines, sharp corners, technical feel.

#### 4.3 Glow Effects
- Crimson glow on interactive elements:
  ```css
  box-shadow: 0 0 20px rgba(112, 2, 37, 0.4), 0 0 60px rgba(112, 2, 37, 0.15);
  ```
- Text glow on key headings:
  ```css
  text-shadow: 0 0 30px rgba(112, 2, 37, 0.6);
  ```
- On hover: intensify glow.

#### 4.4 Borders & Lines
- Use `border border-[#700225]/20` for cards (subtle crimson border).
- Use `border-[#700225]` for active/focused/selected states.
- Thin horizontal rules (`<hr>`) with crimson gradient:
  ```css
  background: linear-gradient(90deg, transparent, #700225, transparent);
  height: 1px;
  ```
- Corner accents: small absolute-positioned `::before`/`::after` L-shaped corner lines in crimson on cards.

#### 4.5 Cards & Panels
```tsx
// Standard card pattern
className="
  relative
  bg-[#0D0D0D]
  border border-[#700225]/20
  rounded-sm               /* sharp corners, not rounded */
  p-6
  backdrop-blur-md
  hover:border-[#700225]/60
  hover:shadow-[0_0_30px_rgba(112,2,37,0.2)]
  transition-all duration-300
"
```

#### 4.6 Buttons
```tsx
// Primary CTA
className="
  bg-[#700225]
  text-white
  font-semibold tracking-widest uppercase text-sm
  px-8 py-3
  border border-[#700225]
  hover:bg-[#8B0230]
  hover:shadow-[0_0_25px_rgba(112,2,37,0.5)]
  active:bg-[#4A0118]
  transition-all duration-200
  rounded-sm
"

// Ghost / Secondary
className="
  bg-transparent
  text-white
  border border-[#700225]/50
  hover:border-[#700225]
  hover:bg-[#700225]/10
  hover:shadow-[0_0_20px_rgba(112,2,37,0.3)]
  font-semibold tracking-widest uppercase text-sm
  px-8 py-3 rounded-sm
  transition-all duration-200
"
```

#### 4.7 Icons & Accent Elements
- Icons: always white or `#700225`. Never grayscale.
- Use thin geometric decorative lines near section headings.
- Section tags: `[ SECTION_NAME ]` or `// SECTION_NAME` style in crimson monospace.
- Animated scanning lines, pulsing dots, and radar-ring effects are welcome in hero areas.

---

## 5. ANIMATION STANDARDS

All motion must feel **precise, purposeful, and technical**. No bouncy or playful easing.

### Framer Motion Defaults
```ts
// Page / Section entry
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
}

// Staggered children
const stagger = {
  animate: { transition: { staggerChildren: 0.08 } }
}

// Glow pulse (for accent elements)
const glowPulse = {
  animate: {
    boxShadow: [
      '0 0 10px rgba(112,2,37,0.3)',
      '0 0 30px rgba(112,2,37,0.7)',
      '0 0 10px rgba(112,2,37,0.3)',
    ],
    transition: { duration: 2.5, repeat: Infinity }
  }
}
```

### CSS Keyframes (in globals.css)
```css
@keyframes scanline {
  0%   { transform: translateY(-100%); opacity: 0.4; }
  100% { transform: translateY(100vh); opacity: 0; }
}

@keyframes radar-ring {
  0%   { transform: scale(0.5); opacity: 0.8; }
  100% { transform: scale(2.5); opacity: 0; }
}

@keyframes data-flicker {
  0%, 95%, 100% { opacity: 1; }
  96%           { opacity: 0.4; }
  97%           { opacity: 1; }
  98%           { opacity: 0.6; }
}

@keyframes borderTrace {
  0%   { clip-path: inset(0 100% 100% 0); }
  25%  { clip-path: inset(0 0 100% 0); }
  50%  { clip-path: inset(0 0 0 0); }
  100% { clip-path: inset(0 0 0 0); }
}
```

### Rules
- **Entry animations**: always fade + translate. Never scale-bounce.
- **Hover**: `transition-all duration-200` minimum.
- **No** `animate-spin` on anything except true loading indicators.
- Keep `will-change: transform` on heavy animated elements for GPU acceleration.

---

## 6. LAYOUT RULES

### Spacing System
- Section padding: `py-24 lg:py-32` (generous vertical rhythm)
- Container: `max-w-7xl mx-auto px-6 lg:px-12`
- Card gaps: `gap-6` (grid) or `gap-8` (featured)

### Page Structure
```
<html>
  <body bg="#000000">
    <NavBar />           ← fixed, glass blur, crimson active states
    <main>
      <HeroSection />    ← full viewport, atmospheric bg, animated
      <Section ... />    ← alternating content patterns
    </main>
    <Footer />           ← dark, minimal, crimson accent
  </body>
</html>
```

### Grid Patterns
- Feature grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Asymmetric layouts encouraged: `grid-cols-5` with `col-span-3` + `col-span-2`
- Never center everything — use intentional asymmetry for visual tension.

---

## 7. COMPONENT LIBRARY RULES

When using shadcn/ui or Radix primitives:
- **Override all default styles** to match this system.
- No rounded-xl anywhere — use `rounded-sm` or `rounded-none`.
- All focus rings: `ring-[#700225]`.
- Dropdowns: dark bg `#0D0D0D`, border `#700225/30`, hover `#700225/15`.
- Dialogs/Modals: backdrop blur + crimson border + dark bg.

---

## 8. FILE & FOLDER STRUCTURE

```
/app
  /layout.tsx          ← fonts, global metadata, ThemeProvider
  /page.tsx            ← homepage
  /globals.css         ← keyframes, base styles, scrollbar styles
/(components)
  /ui/                 ← base primitives (Button, Card, Badge...)
  /sections/           ← page sections (Hero, Features, CTA...)
  /layout/             ← Navbar, Footer, Sidebar
  /effects/            ← GridOverlay, GlowOrb, ScanLine, ParticleField
/(lib)
  /utils.ts            ← cn(), clsx helpers
  /constants.ts        ← colors, config
/(hooks)               ← custom hooks
/public                ← assets
/tailwind.config.ts    ← extended with brand colors
```

---

## 9. SCROLLBAR STYLING

Always include in `globals.css`:
```css
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: #000000; }
::-webkit-scrollbar-thumb { background: #700225; border-radius: 0; }
::-webkit-scrollbar-thumb:hover { background: #8B0230; }
```

---

## 10. META & PERFORMANCE STANDARDS

- All images: `next/image` with proper `alt`, `width`, `height`.
- All pages: proper `<title>`, `<meta description>`, OpenGraph tags.
- Code-split heavy sections with `dynamic(() => import(...), { ssr: false })`.
- No `console.log` in production code.
- All interactive elements must have `aria-label` or visible label.
- TypeScript: no `any` types. Define proper interfaces.
- All API routes: proper error handling with typed responses.

---

## 11. QUICK REFERENCE — "IS IT ON-BRAND?"

Ask before every decision:

| ✅ ON-BRAND | ❌ OFF-BRAND |
|---|---|
| Black background, crimson glow | White / light background |
| Sharp corners `rounded-sm` | Large radius `rounded-2xl` |
| Uppercase tracking-widest labels | Casual lowercase labels |
| Framer Motion fade+translate | Bounce / elastic easing |
| Thin geometric borders | Thick colorful borders |
| Radial crimson atmosphere | Flat solid backgrounds |
| Technical monospace accent text | Decorative script fonts |
| Controlled dark glassmorphism | Bright colorful glassmorphism |
| Dense but breathable layout | Cluttered OR overly empty |

---

## 12. EXAMPLE COMPONENT — FEATURE CARD

```tsx
'use client'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="
        group relative
        bg-[#0D0D0D] border border-[#700225]/20
        p-6 rounded-sm
        hover:border-[#700225]/60
        hover:shadow-[0_0_40px_rgba(112,2,37,0.15)]
        transition-all duration-300
        overflow-hidden
      "
    >
      {/* Corner accent */}
      <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#700225] opacity-60 group-hover:opacity-100 transition-opacity" />
      <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#700225] opacity-60 group-hover:opacity-100 transition-opacity" />

      {/* Icon */}
      <div className="
        w-12 h-12 mb-4
        flex items-center justify-center
        bg-[#700225]/10 border border-[#700225]/30
        rounded-sm
        group-hover:bg-[#700225]/20
        group-hover:shadow-[0_0_15px_rgba(112,2,37,0.3)]
        transition-all duration-300
      ">
        <Icon className="w-5 h-5 text-[#700225]" />
      </div>

      {/* Content */}
      <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#700225] mb-2">
        // feature
      </p>
      <h3 className="text-lg font-semibold text-white mb-3 leading-tight">{title}</h3>
      <p className="text-sm text-[#888888] leading-relaxed">{description}</p>
    </motion.div>
  )
}
```

---

## 13. AGENT FINAL CHECKLIST

Before submitting any output, verify:

- [ ] All backgrounds are dark (`#000000`, `#080808`, `#0D0D0D`, `#141414`)
- [ ] Primary accent is exclusively `#700225` and its variants
- [ ] No external colors introduced
- [ ] TypeScript used throughout — no `any`
- [ ] Framer Motion on all visible entry animations
- [ ] Atmospheric background (radial glow, grid, or particle effect)
- [ ] Corner accents on cards
- [ ] Scrollbar styled
- [ ] All buttons: uppercase, tracking-widest, sharp corners
- [ ] No default Tailwind colors used raw (no `bg-blue-500`, `text-gray-400`, etc.)
- [ ] Responsive: mobile → tablet → desktop verified
- [ ] `next/image` used for all images
- [ ] Proper TypeScript interfaces defined
- [ ] File structure matches Section 8

---

*This skill was designed for professional, production-level output.
Treat every component as a portfolio piece. No shortcuts. No generic defaults.*