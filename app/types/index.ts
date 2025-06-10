export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  avatar: string;
  resume: string;
}

export interface SocialLink {
  id: string;
  platform: 'github' | 'linkedin' | 'twitter' | 'instagram';
  url: string;
  icon: string;
  label: string;
  handle?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | 'Present';
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  achievements: string[];
  technologies: string[];
  companyUrl?: string;
  logo?: string;
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
  proficiency: 1 | 2 | 3 | 4 | 5;
  color?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'concept';
  startDate: string;
  endDate?: string;
  highlights: string[];
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  twitterHandle?: string;
}

export interface SiteData {
  personal: PersonalInfo;
  social: SocialLink[];
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  navigation: NavigationItem[];
  seo: SEOData;
} 