# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Modern portfolio website built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Features interactive particle animations, dark/light theme support, responsive design, and a functional contact form using EmailJS.

## Development Commands

### Primary Workflows
```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Production build (runs type checking and linting automatically)
npm run start        # Start production server (requires prior build)
```

### Quality Assurance
```bash
npm run lint         # Run ESLint to check for issues
npm run lint:fix     # Auto-fix ESLint issues where possible
npm run type-check   # Run TypeScript compiler checks without emitting files
```

### Troubleshooting Builds
If build fails, run these commands in order:
```bash
npm run type-check   # Identify TypeScript errors
npm run lint:fix     # Fix linting issues
rm -rf .next && npm run build  # Clean build cache and rebuild
```

## Architecture

### Component Structure
The application follows a modular component architecture organized by function:

- **`app/components/sections/`** - Main page sections (Hero, Experience, Skills, Projects, Contact)
- **`app/components/layout/`** - Layout components (Navigation, Footer)
- **`app/components/ui/`** - Reusable UI components (Button, Input, Card, Badge, Toggle controls)
- **`app/components/animations/`** - Animation components (ScrollReveal, GradientText, TsParticleBackground, ParticleBackground)

### Data Management
All site content is centralized in **`app/data/siteData.ts`**. This single source of truth contains:
- Personal information and contact details
- Social media links
- Work experience and achievements
- Skills with proficiency levels
- Project portfolio items
- Navigation menu structure
- SEO metadata

**When updating content**, modify `siteData.ts` rather than hardcoding values in components.

### TypeScript Types
All types are defined in **`app/types/index.ts`** and include:
- `PersonalInfo` - Personal details and contact
- `Experience` - Work history with achievements and technologies
- `Skill` - Technical skills with categories and proficiency
- `Project` - Portfolio projects with metadata
- `SiteData` - Complete site data structure

### Theme System
- Uses **Tailwind's class-based dark mode** (`darkMode: 'class'`)
- Theme state managed by custom `useTheme` hook in `app/hooks/useTheme.ts`
- Theme initialization script in `app/layout.tsx` prevents flash on load
- Theme persists in localStorage with system preference fallback

### Particle Animation System
Interactive particle background with two key features:

1. **Interaction Modes**: Users can toggle between `attract` (particles move toward cursor) and `repulse` (particles move away from cursor)
2. **Color Customization**: Users can select from predefined particle colors (Mint Green, Sky Blue, Rose Pink, Amber Gold, Classic White)

**Implementation Details**:
- `TsParticleBackground` component uses `react-tsparticles` library
- Props: `interactionMode` and `particleColor` control behavior and appearance
- Lazy-loaded with 1-second delay to optimize initial page load (First Contentful Paint)
- Automatically disabled for users with `prefers-reduced-motion` preference
- Managed globally through `AppClientWrapper.tsx` with toggle/selector UI components

### Routing & Pages
- Single-page application using Next.js App Router
- Main page (`app/page.tsx`) composes all section components
- Root layout (`app/layout.tsx`) handles metadata, fonts, and theme setup
- Path aliases: `@/*` maps to `./app/*` for clean imports

### State Management
- **SettingsContext** (`app/context/SettingsContext.tsx`) - Global particle effect settings
- Component-level state for forms and interactions
- No external state management library (React Context sufficient)

## Environment Variables

Required variables (create `.env.local` from `.env.example` if available):
```bash
NEXT_PUBLIC_SITE_URL=https://yourportfolio.com
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

**Note**: All EmailJS variables are required for contact form functionality. Missing variables will cause form submission to fail with a configuration error.

## Styling Guidelines

### Tailwind Configuration
- Custom color system in `tailwind.config.js` with semantic tokens (`primary`, `background`, `surface`, `text`, `gradient`)
- Fluid typography using `clamp()` for responsive text sizes (`fluid-sm` through `fluid-4xl`)
- Custom animations: `gradient-text`, `float`, `draw-line`
- Path-based content scanning: `content: ['./app/**/*.{js,ts,jsx,tsx}']`

### Responsive Design
- Mobile-first approach with breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Container utility: `container-custom` class for consistent max-width and padding
- Section padding: `section-padding` utility class

### Animation Patterns
- Use `ScrollReveal` component wrapper for scroll-triggered animations
- Framer Motion variants in `app/utils/motionVariants.ts` provide consistent animation timing
- Always check `useReducedMotion` hook for accessibility compliance

## Key Implementation Patterns

### Adding New Content
1. Update `app/data/siteData.ts` with new data
2. Types in `app/types/index.ts` ensure type safety
3. Components automatically render updated data

### Creating New Sections
1. Create component in `app/components/sections/`
2. Import and add to `app/page.tsx`
3. Add navigation link to `siteData.navigation` array

### Modifying Particle Behavior
The particle system is highly configurable through `TsParticleBackground.tsx`:
- Interaction modes: modify `modes.repulse` or `modes.attract` properties
- Particle count: adjust `particles.number.value`
- Link distance: modify `particles.links.distance`
- Movement speed: change `particles.move.speed`

**Do not add a `key` prop to `TsParticleBackground`** - the component reactively updates when props change.

### Form Handling
Contact form (`ContactSection.tsx`) pattern:
- Client-side validation with real-time error feedback
- EmailJS integration for serverless email sending
- Loading and success states with 5-second auto-reset
- Error handling with user-friendly messages

## Important Technical Notes

- **TypeScript strict mode enabled** - all code must be type-safe
- **Path aliases**: Always use `@/` prefix for app imports (e.g., `@/components/ui/Button`)
- **Client components**: Animation and interactive components require `"use client"` directive
- **Image optimization**: Next.js Image component configured for WebP/AVIF formats
- **Production optimizations**: Console logs removed in production except `error` and `warn`

## Deployment

### Vercel (Recommended)
1. Connect GitHub repository at vercel.com
2. Add environment variables in project settings
3. Deploy automatically on push to main branch

### Build Verification
Always verify production build locally before deploying:
```bash
npm run build
npm run start
```

## Accessibility Features

- WCAG 2.1 AA compliant color contrast
- Full keyboard navigation support
- ARIA labels on interactive elements
- Semantic HTML structure
- Respects `prefers-reduced-motion` and `prefers-color-scheme`
- Screen reader optimized

## ByteRover Integration

If using ByteRover MCP:
- Always use `byterover-retrieve-knowledge` tool before tasks to get related context
- Always use `byterover-store-knowledge` to store critical information after successful tasks
