# Aleem Tech AI - Professional Frontend Web Application

> A premium, futuristic AI technology company website built with pure HTML5, CSS3, and Vanilla JavaScript. Fully responsive, accessible, and production-ready.

**Owner:** Rana Muhammad Aleem Akhtar  
**Email:** raleem811811@gmail.com  
**Phone:** +92 315 1664843  
**Address:** Hostel City Park Road Islamabad

---

## 📋 Project Overview

Aleem Tech AI is a complete responsive frontend web application showcasing a modern AI technology company. The project demonstrates mastery of frontend fundamentals including responsive design, semantic HTML, CSS Grid/Flexbox, accessibility standards, and interactive JavaScript — all without any frameworks.

This project follows the **Full Stack Development Project 1 – Industrial Training Kit** workflow, implementing a mobile-first design strategy with wireframe-based planning.

---

## ✨ Features

- **6 Fully Responsive Pages** — Home, About, Services, Portfolio, Blog, Contact
- **Mobile-First Architecture** — Built from mobile up to desktop
- **Futuristic Dark UI** — Premium AI/SaaS aesthetic with glassmorphism
- **Heavy Professional Animations** — Scroll reveal, typing effects, floating objects, parallax
- **Interactive UI** — Card tilt, mouse interactions, ripple effects, counters
- **Portfolio Filtering** — Category-based project filtering
- **Blog Categories** — Dynamic article filtering
- **Contact Form** — Validated form with accessibility support
- **Newsletter Signup** — Email subscription component
- **Sticky Navigation** — Transparent to glass effect on scroll
- **Mobile Menu** — Full-screen responsive navigation
- **Scroll-to-Top** — Animated back-to-top button
- **Loading Screen** — Professional page loader
- **Particle Background** — Animated floating particles

---

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| HTML5 | Semantic structure & content |
| CSS3 | Styling, Grid, Flexbox, animations |
| Vanilla JavaScript | Interactivity & DOM manipulation |
| CSS Variables | Theming & design tokens |
| CSS Grid | Page-level layouts |
| Flexbox | Component-level layouts |
| Media Queries | Responsive breakpoints |
| Intersection Observer | Scroll animations & lazy triggers |
| CSS Transforms | 3D effects & transitions |
| Backdrop Filter | Glassmorphism effects |
| Google Fonts | Typography (Montserrat, Poppins, Inter) |

**No Frameworks Used** — Pure HTML, CSS, and JavaScript only.

---

## 📐 Responsive Design Strategy

### Mobile-First Workflow

```
1. Mobile Layout (0–767px)    → Base styles
2. Tablet Expansion (768px+)  → Grid adjustments
3. Desktop Enhancement (1024px+) → Full layouts
```

### Breakpoints

| Device | Range |
|--------|-------|
| Mobile | 0px – 767px |
| Tablet | 768px – 1023px |
| Desktop | 1024px+ |
| Large Desktop | 1200px+ |

### Responsive Features

- Collapsible mobile hamburger menu
- Adaptive CSS Grid columns
- Fluid typography with `clamp()`
- Responsive spacing with relative units
- Touch-friendly interactive elements
- Responsive images and aspect ratios

---

## 📁 Folder Structure

```
project/
│
├── index.html              # Home page
├── about.html              # About page
├── services.html           # Services page
├── portfolio.html          # Portfolio page
├── blog.html               # Blog page
├── contact.html            # Contact page
│
├── css/
│   ├── style.css           # Main stylesheet (design system)
│   ├── responsive.css      # Media queries & breakpoints
│   └── animations.css      # CSS animations & effects
│
├── js/
│   ├── main.js             # Core functionality
│   ├── animations.js       # Scroll & intersection animations
│   └── interactions.js     # Mouse & hover interactions
│
├── assets/
│   ├── images/             # Image assets
│   ├── icons/              # Icon assets
│   ├── 3d/                 # 3D illustration assets
│   └── fonts/              # Local font files
│
└── README.md               # Project documentation
```

---

## 🚀 Setup Instructions

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aleemrana8/Full-Stack-Project-.git
   ```

2. **Navigate to project:**
   ```bash
   cd Full-Stack-Project-
   ```

3. **Open in browser:**
   - Open `index.html` directly in your browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000

     # Using Node.js
     npx serve .
     ```

4. **View at:** `http://localhost:8000`

---

## 🌐 GitHub Pages Deployment

1. Push code to GitHub repository
2. Go to **Settings** → **Pages**
3. Under **Source**, select `main` branch
4. Set folder to `/ (root)`
5. Click **Save**
6. Site will be live at: `https://aleemrana8.github.io/Full-Stack-Project-/`

---

## ♿ Accessibility Features

| Feature | Implementation |
|---------|---------------|
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` |
| ARIA Labels | Navigation, buttons, forms, landmarks |
| Keyboard Navigation | Focus states, tab order, skip links |
| Screen Reader Support | `sr-only` class, `aria-hidden`, `aria-label` |
| Color Contrast | WCAG AA compliant color combinations |
| Form Labels | Associated `<label>` elements for all inputs |
| Alt Text | Descriptive alternatives for visual content |
| Focus Indicators | Visible focus rings on interactive elements |
| Reduced Motion | `prefers-reduced-motion` media query support |
| High Contrast | `prefers-contrast: high` media query support |

---

## 🔍 SEO Optimization

- Meta title and description on every page
- Open Graph meta tags
- Semantic heading hierarchy (h1 → h6)
- Clean, descriptive URL structure
- Optimized HTML structure
- Breadcrumb navigation
- Responsive design (Google ranking factor)
- Fast performance (Core Web Vitals)
- Proper link structure

---

## ⚡ Performance Optimization

- **CSS Organization** — Modular CSS files for caching
- **Minimal JavaScript** — No heavy libraries or frameworks
- **Animation Performance** — CSS transforms over layout properties
- **Font Loading** — `preconnect` for Google Fonts
- **Efficient Selectors** — Minimal CSS specificity
- **Intersection Observer** — Lazy animation triggers
- **Passive Event Listeners** — Non-blocking scroll handlers
- **Will-Change** — GPU acceleration hints
- **Reduced Motion** — Respects user accessibility preferences
- **Print Styles** — Optimized print stylesheet

### Core Web Vitals

| Metric | Optimization |
|--------|-------------|
| LCP (Largest Contentful Paint) | Optimized font loading, minimal render-blocking |
| CLS (Cumulative Layout Shift) | Fixed dimensions, no layout thrashing |
| FID (First Input Delay) | Lightweight JS, passive listeners |

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | #050816 | Main background |
| `--bg-secondary` | #0B1026 | Secondary background |
| `--accent-blue` | #4F8CFF | Primary accent |
| `--accent-purple` | #7C4DFF | Secondary accent |
| `--accent-cyan` | #00E5FF | Highlight accent |
| `--text-primary` | #FFFFFF | Main text |
| `--text-secondary` | #D1D5DB | Muted text |

### Typography

- **Headings:** Montserrat / Inter (700-800 weight)
- **Body:** Poppins / Open Sans (300-600 weight)
- **Fluid sizing:** `clamp()` for responsive text

---

## 📸 Screenshots

> Add screenshots of the final website here

| Page | Mobile | Tablet | Desktop |
|------|--------|--------|---------|
| Home | [screenshot] | [screenshot] | [screenshot] |
| About | [screenshot] | [screenshot] | [screenshot] |
| Services | [screenshot] | [screenshot] | [screenshot] |
| Portfolio | [screenshot] | [screenshot] | [screenshot] |
| Blog | [screenshot] | [screenshot] | [screenshot] |
| Contact | [screenshot] | [screenshot] | [screenshot] |

---

## 📄 Pages Overview

| Page | Description |
|------|-------------|
| **Home** | Hero section, features, services preview, portfolio preview, testimonials, blog preview, newsletter |
| **About** | Company story, mission/vision, founder, skills, timeline, counters, team |
| **Services** | 8 service cards (AI, Web, UI/UX, SEO, Cloud, SaaS, Automation, Strategy) + process |
| **Portfolio** | 9 project cards with category filtering (AI, Web, Mobile, SaaS, Design) |
| **Blog** | Featured article + 6 blog posts with category filtering |
| **Contact** | Contact form, info cards, map placeholder, social links |

---

## 🧪 Testing Checklist

- [x] Mobile responsiveness (320px–767px)
- [x] Tablet responsiveness (768px–1023px)
- [x] Desktop layout (1024px+)
- [x] Navigation functionality
- [x] Mobile menu toggle
- [x] Form validation
- [x] Scroll animations
- [x] Counter animations
- [x] Portfolio filtering
- [x] Blog filtering
- [x] Keyboard navigation
- [x] Screen reader compatibility
- [x] Cross-browser testing
- [x] Performance audit

---

## 📝 License

© 2026 Aleem Tech AI. All rights reserved.  
Designed & Developed by **Rana Muhammad Aleem Akhtar**

---

## 🤝 Contact

For inquiries, collaborations, or project discussions:

- **Email:** raleem811811@gmail.com
- **Phone:** +92 315 1664843
- **Location:** Hostel City Park Road, Islamabad, Pakistan
