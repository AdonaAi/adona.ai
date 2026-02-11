## Project Summary
A high-fidelity clone of the adona.ai main landing page and its sub-pages (Facebook Ad Maker, AI Newsletter Generator). The project showcases a modern, clean tech aesthetic with minimalist white backgrounds, vibrant vibrant gradients, and dynamic 3D-style product showcases.

## Tech Stack
- Framework: Next.js 15 (App Router)
- Styling: Tailwind CSS 4
- Icons: Lucide React
- Animation: Framer Motion
- Fonts: Inter (Google Fonts)

## Architecture
- `src/app/page.tsx`: Main landing page assembling 15+ high-fidelity sections.
- `src/app/facebook-ad-maker/`: Dedicated page for Facebook Ad generation.
- `src/app/ai-newsletter-generator/`: Dedicated page for AI-driven newsletter creation.
- `src/components/sections/`: Root sections for the main landing page.
- `src/components/sections/fb-ads/`: Specialized sections for Facebook Ads.
- `src/components/sections/newsletter/`: Specialized sections for Newsletter Generator.
- `src/app/globals.css`: Global styles, Tailwind 4 configuration, and brand design tokens.

## User Preferences
- Clean, minimalist "Modern Tech" aesthetic.
- Light theme dominant with a vibrant vibrant palette (Adona Brand Colors):
  - Dark Blue: #03045e
  - Medium Blue: #0077b6
  - Sky Blue: #00b4d8
  - Light Blue: #caf0f8
- High use of product mockups, perspective tilts, and floating elements.
- "Pill-shaped" navigation bar with a glassmorphism effect and clear navigation links.
- "Buy now" buttons with gradient borders and black text.
- **Tighter spacing between Navbar and Hero section (Hero top padding should be around 120px-140px).**
- **Brand Name: Always use "adona.ai" in text content and branding.**

## Project Guidelines
- Use "use client" for components using `framer-motion` or React hooks.
- Maintain responsive design with large vertical padding (120px-140px) between sections.
- Page-specific sections should be kept in dedicated subfolders (e.g., `/fb-ads`, `/newsletter`).
- The Navbar must include navigation links (Use cases, Affiliate, Blog, About us, Login).

## Common Patterns
- Gradient border pill-shaped buttons for primary CTAs using Adona blue gradients.
- Soft, diffuse drop shadows for cards and mockups.
- Perspective transforms (rotateX/rotateY) for product showcase elements.
- Scroll-revealing text animations for mission/manifesto sections.
