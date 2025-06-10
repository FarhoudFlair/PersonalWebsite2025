export const SITE_CONFIG = {
  name: 'Portfolio Website',
  url: 'https://yourportfolio.com',
  description: 'Creative developer specializing in modern web applications',
  author: 'Your Name',
} as const;

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.6,
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const PARTICLE_CONFIG = {
  count: {
    mobile: 50,
    desktop: 100,
  },
  connectionDistance: 100,
  mouseInfluenceRadius: 150,
} as const; 