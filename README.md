# DisciplineDesign — Digital Archive

## Overview

A thoughtful collection of digital artifacts documenting the evolution of human-centered design practice.

This repository serves as a living archive of DisciplineDesign's digital presence and communication materials. Like any meaningful archive, it preserves not merely the final forms but the processes and intentions that shaped them—a record of how design thinking translates into practical tools that serve both creators and users.

## The Collection

### Website (`/Website`)

A React-based digital presence that embodies our philosophy of placing human needs at the center of software development. Built with modern web technologies—Vite, React, Tailwind CSS, and thoughtful animation libraries—this site demonstrates the very principles we advocate: clarity before complexity, understanding before implementation.

The website serves as both a manifesto and a practical resource, articulating our belief that the gap between user needs and technical implementation requires careful, deliberate translation. Every component, from the navigation patterns to the content architecture, reflects our commitment to making complex ideas accessible.

**Key Technologies:**

- React 18 with modern hooks and patterns
- Tailwind CSS for systematic design consistency
- Framer Motion and GSAP for meaningful animations
- Lenis for smooth, accessible scrolling experiences
- Vite for optimized development and build processes

### Mail Signature (`/MailSignature`)

Professional email signature templates that maintain visual consistency across all organizational communications. These HTML-based signatures represent the intersection of corporate identity and digital accessibility—small but significant touchpoints that reinforce our commitment to thoughtful design in every interaction.

## Philosophy in Practice

This archive reflects our core belief that good software begins with good understanding. Each project documented here demonstrates a different aspect of our approach:

- **Deliberate simplicity** over feature accumulation
- **User research** as the foundation for design decisions
- **Systematic thinking** that scales from components to complete experiences
- **Accessibility** as a fundamental requirement, not an afterthought

## Historical Context

Created during a period when rapid development often overshadowed careful planning, these projects advocate for a more measured approach. They represent our response to an industry tendency to "start coding first, ask questions later"—proposing instead that thoughtful upfront work prevents exponentially more expensive corrections downstream.

## For Researchers and Practitioners

This repository may be of interest to:

- **Design historians** studying the evolution of web-based design practice
- **UX researchers** examining the relationship between philosophy and implementation
- **Developers** seeking examples of React applications built with accessibility and performance in mind
- **Students** exploring how design principles manifest in actual code and content

## Preservation Notes

All code is maintained in its original state to preserve historical context, though dependencies may be updated for security. The content reflects the thinking and language of its time, serving as a snapshot of design discourse in the mid-2020s.

## Getting Started

Each subdirectory contains its own README with specific setup instructions. The website requires Node.js and modern browser support; the mail signatures are self-contained HTML files ready for deployment.

---

# Project Notes

These notes describe how the site is structured and the rules NOT to break
when adding pages, text, or components.

## 1. Stack

- Vite + React
- React Router for pages
- Tailwind CSS for layout and utilities
- Typography centralized in the `Text` component (`src/components/text.jsx`)
- No CSS tokens, no typographic `:root` variables, no parallel design systems.

---

## 2. Typography – SINGLE source: `Text`

All "content" text goes through `<Text>`, with these variants:

- `type="title"`  
  For page titles or main block headings.  
  Used for example in: `Case Studies`, "Architecture before code", etc.

- `type="subtitle"`  
  For important subheadings, second levels under titles.

- `type="lead"`  
  The main body text, the larger one.  
  Effectively our "narrative H2".

- `type="label"`  
  Small all-caps headings with wide tracking.  
  Examples: "The problem", "Who we are", "Method", "Context".

- `type="subsection"`  
  Body text smaller than lead, used in services, card descriptions, secondary paragraphs.

- `type="small"`  
  Small text, used in footer, microcopy, details.

- `type="custom"`  
  Only for special cases (e.g., "DisciplineDesign" brand in footer or DD in nav)  
  Use sparingly, otherwise variants need to be redefined.

General rule:

- **Do not create new typographic classes in CSS.**
- If a new text style is needed, add it to `Text` and that's it.

Allowed exceptions:

- Home hero: "Human-centered software"  
  → styled directly with Tailwind because it's a graphic element, not system text.
- "DD" logo in navbar  
  → direct `font-extra-black`, same reason.

---

## 3. Layout

- `main` has light background and always contains a single `article`.
- `article` manages max-width and horizontal padding:
  - `max-w-screen-xl`
  - `mx-auto`
  - responsive padding.
- Main sections use consistent vertical spacing:
  - top/bottom padding defined in JSX (e.g., `pt-20 pb-40`)
  - internal spacing managed with `gap-*`, `mt-*`, `space-y-*`.

Rule:  
Do not redefine `article` or `main` in CSS.  
If a different layout is needed, add a wrapper inside `article`.

---

## 4. Pages

### 4.1 Home (`src/pages/Home.jsx`)

Structure:

1. **Hero**

   - full-screen background image
   - SVG logo
   - tagline "Human-centered software" (hand-styled, not with `<Text>`)

2. **Content sections**
   - "Architecture before code" block
   - "The problem" block
   - "Who we are" block
   - "The result" block
   - "Method" block
   - "A simple rule" block
   - contacts + quick services

Rules:

- All text after the hero uses `<Text>` with consistent `type`.
- Charts (`<Charts />`) are used as visual breaks and have no custom typographic styles outside `<Text>`.

### 4.2 Case Studies (`src/pages/Case.jsx`)

- Routes: `/cases` and `/cases/:caseId` (`sils`, `academy`, `under`)
- List of three cases:
  - SILS
  - Academy Veneto Lavoro
  - UnderControl

Interaction:

- Click on a case:
  - Opens related content (accordion)
  - Updates URL to `/cases/<slug>`
  - Closes any other open case
- Click again on the same case:
  - Closes it
  - Returns to `/cases`

Text:

- Each case follows structure:
  - `Context`
  - `Architecture` / `Flow` / etc.
  - optional "For software houses" section
  - `Conclusion`
- Labels ("Context", etc.) → `<Text type="label">`
- Narrative copy → `<Text type="lead">` or `subsection` depending on weight.

### 4.3 Services (`src/pages/Servizi.jsx`)

- Page with card grid.
- Each card uses the `Card` component:
  - `title` → `<Text type='label'>`
  - `subtitle` → `<Text type='subsection'>`
- SVG icons integrated inline.

Rule:  
No raw `<h4>`, `<h5>` inside cards.

### 4.4 Contact (`src/pages/Contatti.jsx`)

- Main text block → `lead` / `title`
- "Let's talk about the project" / "Quick services" boxes with short text → `lead` / `subsection` / `small`
- Email CTAs managed as styled `<a>`, not as system text.

---

## 5. Navbar and Footer

### Navbar

- "DD" logo: text with `font-extra-black text-ruby-400`
- Links: textual nav with Tailwind, no need for `<Text>`.

Rule:  
The navbar is considered part of the chrome, not typographic content.

### Footer

- Branding: can use `custom` + Tailwind for special weights/sizes.
- Everything else (`©`, descriptions, email) → `small` or `subsection`.

---

## 6. What NOT to do

- Do not reintroduce `.text-h2`, `.text-h1`, etc. in CSS.
- Do not add typographic tokens (`--font-size-*`) or `tokens.css` files.
- Do not restyle `p`, `h1`, `h2`, `h3`, `h4` in `index.css` to control content.
- Do not use Copilot to "refactor typography" without reading this file.

If a new text style is needed, modify ONLY:

- `src/components/text.jsx`

_This archive continues to grow as our practice evolves. We believe in documenting not just our successes but our processes—the questions we asked, the problems we solved, and the principles that guided our decisions._
