# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features interactive animations, dark/light theme support, and a fully functional contact form.

## ✨ Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Interactive Animations**: Framer Motion with scroll-triggered animations
- **Dark/Light Theme**: Automatic theme detection with manual toggle
- **Responsive Design**: Optimized for all devices (320px to 4K)
- **Interactive Particle Background**: Canvas-based particle system with mouse interaction
- **Contact Form**: Fully functional with validation and EmailJS integration
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Cards
- **Accessibility**: WCAG 2.1 AA compliant with screen reader support
- **Performance**: Lighthouse score ≥90 across all categories

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your values:
   ```env
   NEXT_PUBLIC_SITE_URL=https://yourportfolio.com
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Update Personal Information

Edit `app/data/siteData.ts` to customize:

- Personal information (name, title, bio, contact)
- Social media links
- Work experience and achievements
- Skills and proficiency levels
- Project portfolio
- SEO metadata

### Customize Theme Colors

Modify `tailwind.config.js` to change:

- Color palette
- Typography scales
- Animation keyframes
- Responsive breakpoints

### Add New Sections

1. Create component in `app/components/sections/`
2. Import and add to `app/page.tsx`
3. Update navigation in `siteData.ts`

## 📧 Contact Form Setup

### EmailJS Integration

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create email service and template
3. Add credentials to `.env.local`
4. Test form submission

### Alternative: Custom API Route

Replace EmailJS with custom API:

```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  // Your email sending logic
}
```

## 🏗️ Project Structure

```
PortfolioWebsite/
├── app/
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   ├── layout/             # Layout components
│   │   ├── sections/           # Page sections
│   │   └── animations/         # Animation components
│   ├── data/
│   │   └── siteData.ts        # Centralized content
│   ├── hooks/                 # Custom React hooks
│   ├── utils/                 # Utility functions
│   ├── types/                 # TypeScript definitions
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main page
├── public/                    # Static assets
├── tailwind.config.js         # Tailwind configuration
├── next.config.js             # Next.js configuration
└── package.json
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository at [vercel.com](https://vercel.com)
   - Add environment variables in project settings
   - Deploy automatically

### Other Platforms

- **Netlify**: Drag and drop `out` folder after `npm run build`
- **GitHub Pages**: Use `next export` for static generation
- **Docker**: Use provided Dockerfile

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript checks
```

## 📊 Performance Optimization

### Built-in Optimizations

- **Image Optimization**: Next.js automatic WebP conversion
- **Code Splitting**: Automatic route-based splitting
- **Bundle Analysis**: Use `npm run build` to analyze
- **Font Optimization**: Google Fonts with `next/font`

### Performance Tips

1. **Optimize Images**: Use WebP format, proper sizing
2. **Reduce Bundle Size**: Remove unused dependencies
3. **Enable Compression**: Configure server gzip/brotli
4. **Use CDN**: Serve static assets from CDN

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: ARIA labels and semantic HTML
- **Color Contrast**: WCAG AA compliant ratios
- **Reduced Motion**: Respects user motion preferences
- **Focus Management**: Visible focus indicators

## 🔧 Troubleshooting

### Common Issues

**Build Errors**
```bash
npm run type-check  # Check TypeScript issues
npm run lint:fix    # Fix linting issues
rm -rf .next && npm run build  # Clean build
```

**Animation Performance**
- Reduce particle count on mobile
- Use `will-change` CSS property sparingly
- Test on lower-end devices

**Theme Flashing**
- Theme script in `layout.tsx` prevents flash
- Check localStorage permissions

### Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Mobile
- **Fallbacks**: Graceful degradation for older browsers

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [EmailJS](https://www.emailjs.com/) - Contact form service

---

**Need help?** Open an issue or contact [your.email@example.com](mailto:your.email@example.com) 
# PersonalWebsite2025