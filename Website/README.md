# DisciplineDesign

A high-end B2B website for **DisciplineDesign**—a UX/product design consultancy focused on complex enterprise software.

Built with **React + Vite** in plain **JavaScript** (no TypeScript), with an Apple-inspired aesthetic: centered layouts, generous whitespace, strong typography, minimal decoration.

---

## 🎯 Project Overview

### Tech Stack

- **Vite 5.x** – Fast dev server, optimized builds
- **React 18.x** – All `.jsx` files, no TypeScript
- **React Router 6.x** – Client-side routing
- **Tailwind CSS 3.x** – Utility-first styling with custom design system
- **MDX** – Content authoring with frontmatter

### Design System

Custom primitives matching apple.com aesthetic:

- **Layout**: `Section`, `Stack`, `Grid`
- **Typography**: `Heading`, `Eyebrow`, `Body`, `Meta`
- **Interactive**: `Button`, `Link`, `Card`, `Tag`, `Stat`

Visual principles:

- Centered content containers (`max-w-6xl`)
- Consistent vertical rhythm (`py-20`, `py-24`)
- Neutral color palette with single accent
- Minimal borders, small border radius
- No heavy shadows, gradients, or glassmorphism

---

## 📁 Project Structure

```
src/
├── main.jsx                    # Entry point
├── App.jsx                     # Router configuration
├── index.css                   # Global styles
├── components/
│   ├── layout/
│   │   ├── AppLayout.jsx       # Main layout wrapper
│   │   ├── Header.jsx          # Navigation
│   │   └── Footer.jsx          # Site footer
│   ├── ui/                     # Design system primitives
│   │   ├── Section.jsx
│   │   ├── Heading.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── ...
│   └── home/                   # Homepage sections
│       ├── Hero.jsx
│       ├── FeaturedCaseStudy.jsx
│       ├── WhyDiscipline.jsx
│       └── SelectedWork.jsx
├── pages/                      # Route pages
│   ├── HomePage.jsx
│   ├── WorkIndexPage.jsx
│   ├── WorkDetailPage.jsx
│   ├── ServicesIndexPage.jsx
│   ├── MethodIndexPage.jsx
│   ├── AboutPage.jsx
│   └── ContactPage.jsx
├── content/
│   └── work/                   # Case studies as JSX modules
└── lib/
    ├── content.js              # Content loader (glob imports)
    └── seo.js                  # Document title utilities

Config files:
├── vite.config.js              # Vite config
├── tailwind.config.cjs         # Custom design tokens
├── postcss.config.cjs          # Tailwind processing
├── .eslintrc.cjs               # Linting rules
└── .prettierrc.json            # Code formatting
```

---

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
# or
pnpm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output: `dist/` directory (static files)

### Preview Production Build

```bash
npm run preview
```

### Code Quality

```bash
# Lint
npm run lint

# Format
npm run format
```

---

## 📝 Content Management

### Adding Case Studies

Create a new `.jsx` file in `src/content/work/`:

```jsx
export const meta = {
  title: 'Project Title',
  slug: 'project-slug',
  client: 'Client Name',
  summary: 'Brief description',
  sector: 'Industry',
  featured: false,
  publishedAt: '2024-11-15',
  metrics: [{ label: 'Metric description', value: '50%' }],
};

export default function CaseStudy() {
  return (
    <div className="space-y-6">
      <h2>Context</h2>
      <p>Your case study content...</p>
    </div>
  );
}
```

The content loader (`lib/content.js`) automatically picks it up via Vite's glob imports.

---

## 🎨 Design System Usage

### Layout Primitives

```jsx
import { Section, Stack, Grid } from '@/components/ui';

<Section spacing="xl">
  <Stack gap="lg">
    <Grid cols={3} gap="lg">
      {/* Your content */}
    </Grid>
  </Stack>
</Section>
```

### Typography

```jsx
import { Heading, Body, Eyebrow, Meta } from '@/components/ui';

<Eyebrow>Label</Eyebrow>
<Heading level="h1" size="hero">Title</Heading>
<Body size="lg">Paragraph text</Body>
<Meta>Metadata</Meta>
```

### Interactive Components

```jsx
import { Button, Link, Card } from '@/components/ui';

<Button to="/work" variant="primary">View Work</Button>
<Link to="/about" variant="inline">Learn More</Link>
<Card to="/work/project-slug">Card content</Card>
```

---

## 🌐 Routes

- `/` – Homepage
- `/work` – Case studies index
- `/work/:slug` – Case study detail
- `/services` – Services overview
- `/services/:slug` – Service detail
- `/doctrine` – Essays index
- `/doctrine/:slug` – Essay detail
- `/about` – About page
- `/contact` – Contact page

---

## 📦 Deployment

Build generates static files suitable for:

- **Vercel** / **Netlify** – Zero-config
- **Cloudflare Pages**
- **AWS S3 + CloudFront**
- Any static hosting

Build command: `npm run build`  
Output directory: `dist`

---

## 🔧 Technical Notes

### JSDoc for Type Hints

We use JSDoc comments for intellisense without TypeScript:

```javascript
/**
 * @param {Object} props
 * @param {'h1' | 'h2' | 'h3'} props.level
 * @param {string} props.children
 */
export default function Heading({ level, children }) {
  // ...
}
```

### Content Loader Pattern

Uses Vite's `import.meta.glob` for zero-config content loading:

```javascript
const modules = import.meta.glob('/src/content/work/*.jsx', { eager: true });
```

### SEO Management

Use the `useDocumentTitle` hook in page components:

```javascript
import { useDocumentTitle } from '@/lib/seo';

export default function MyPage() {
  useDocumentTitle('Page Title', 'Meta description');
  // ...
}
```

---

## 📄 License

Private project for DisciplineDesign.

---

## 🤝 Contributing

This is a private project. For questions, contact: hello@discipline.design
