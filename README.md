# Adona.ai

A modern SaaS marketing platform built with Next.js 16 and React 19. The application provides a complete frontend for a content generation and advertising management platform, featuring multiple product pages, a dashboard, authentication, and payment integration.

## Tech Stack

- **Framework:** Next.js 16 (App Router + Turbopack)
- **Language:** TypeScript
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI primitives + custom component library (50+ components)
- **Animation:** Framer Motion
- **3D:** Three.js / React Three Fiber
- **Forms:** React Hook Form + Zod validation
- **Auth:** Better Auth
- **Database:** Drizzle ORM + libSQL (Turso)
- **Payments:** Stripe
- **Charts:** Recharts

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Landing page
│   ├── login/              # Authentication
│   ├── pricing/            # Pricing page with Stripe integration
│   ├── dashboard/          # User dashboard + settings
│   ├── blog/               # Blog section
│   ├── about-us/           # About page
│   ├── affiliate/          # Affiliate program
│   ├── instagram-ad-maker/ # Product page
│   ├── facebook-ad-maker/  # Product page
│   └── ...                 # Additional product & legal pages
├── components/
│   ├── ui/                 # 53 reusable UI components (Button, Dialog, Table, etc.)
│   ├── sections/           # 70+ page sections (Hero, FAQ, Features, etc.)
│   └── dashboard/          # Dashboard-specific components
└── lib/
    ├── utils.ts            # Utility functions
    └── hooks/              # Custom React hooks
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Landing | `/` | Main marketing page |
| Login | `/login` | User authentication |
| Pricing | `/pricing` | Plans & Stripe checkout |
| Dashboard | `/dashboard` | User dashboard |
| Settings | `/dashboard/settings` | Account settings |
| Blog | `/blog` | Blog listing |
| About | `/about-us` | Team & company info |
| Affiliate | `/affiliate` | Affiliate program |
| Product Pages | `/instagram-ad-maker`, `/facebook-ad-maker`, etc. | Feature-specific landing pages |

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/santusdominus123/adona.ai.git
cd adona.ai

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Scripts

```bash
npm run dev       # Start dev server (Turbopack)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Key Features

- **Responsive Design** — Mobile-first approach across all pages
- **Component Library** — 50+ reusable UI components built on Radix UI
- **Dark Mode** — Theme switching with next-themes
- **Animations** — Smooth transitions and interactions with Framer Motion
- **3D Elements** — Interactive 3D visuals using Three.js
- **Form Handling** — Type-safe forms with React Hook Form + Zod
- **Payment Integration** — Stripe checkout flow
- **SEO Optimized** — Proper metadata and semantic HTML

## Deployment

Built for deployment on [Vercel](https://vercel.com). Push to `main` branch to trigger automatic deployment.

## License

Private — All rights reserved.
