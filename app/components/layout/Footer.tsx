'use client';

import { FaArrowUp, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { siteData } from '@/data/siteData';

const FIELD_INDEX_ORDER = [
  '#home',
  '#projects',
  '#experience',
  '#skills',
  '#contact',
] as const;

const NAVIGATION_OFFSET = 80;

const fieldIndexItems = FIELD_INDEX_ORDER.reduce<typeof siteData.navigation>(
  (items, href) => {
    const item = siteData.navigation.find(
      (navigationItem) => navigationItem.href === href
    );

    if (item) {
      items.push(item);
    }

    return items;
  },
  []
);

const getSocialIcon = (platform: string) => {
  if (platform === 'github') {
    return FaGithub;
  }

  if (platform === 'linkedin') {
    return FaLinkedin;
  }

  return null;
};

const scrollToSection = (href: string) => {
  if (!href.startsWith('#')) {
    return;
  }

  const element = document.querySelector(href);
  if (!element) {
    return;
  }

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - NAVIGATION_OFFSET;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      className="border-t border-trace bg-ink text-canvas"
      data-studio-component="site-footer"
      data-studio-section="footer"
    >
      <div className="field-container">
        <div className="flex flex-col gap-6 py-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="metadata text-xs font-semibold uppercase tracking-widest text-canvas/70">
              Field index / end
            </p>
            <h2 className="mt-2 text-3xl font-semibold uppercase tracking-tight">
              {siteData.personal.name}
            </h2>
            <p className="mt-1 text-sm text-canvas/70">{siteData.personal.title}</p>
          </div>

          <address className="flex flex-col gap-1 text-sm not-italic md:items-end md:text-right">
            <a
              className="font-medium underline decoration-canvas/40 hover:decoration-canvas"
              href={`mailto:${siteData.personal.email}`}
            >
              {siteData.personal.email}
            </a>
            <span className="text-canvas/70">{siteData.personal.location}</span>
          </address>
        </div>

        <nav aria-label="Footer field index">
          <ol className="grid divide-y divide-canvas/20 border-y border-canvas/20 md:grid-cols-5 md:divide-x md:divide-y-0">
            {fieldIndexItems.map((item, index) => (
              <li key={item.href}>
                <a
                  className="group flex min-h-14 items-center justify-between gap-3 px-3 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-canvas hover:text-ink"
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(item.href);
                  }}
                >
                  <span className="metadata text-xs text-canvas/70 group-hover:text-ink/70">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="flex flex-col gap-5 border-b border-canvas/20 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div
            aria-label="Social links"
            className="flex flex-wrap items-center gap-2"
            data-studio-component="social-links"
            role="group"
          >
            {siteData.social.map((social) => {
              const Icon = getSocialIcon(social.platform);
              if (!Icon) {
                return null;
              }

              return (
                <a
                  className="inline-flex h-9 items-center gap-2 border border-canvas/30 px-3 text-sm font-medium hover:border-canvas hover:bg-canvas hover:text-ink"
                  href={social.url}
                  key={social.id}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                  <span>{social.label}</span>
                </a>
              );
            })}
          </div>

          <a
            aria-label={`Open ${siteData.personal.name}'s resume in a new tab`}
            className="inline-flex h-9 w-fit items-center gap-2 border border-canvas/30 px-3 text-sm font-medium hover:border-canvas hover:bg-canvas hover:text-ink"
            data-studio-component="resume-link"
            href={siteData.personal.resume}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaDownload aria-hidden="true" className="h-3 w-3" />
            <span>Resume</span>
          </a>
        </div>

        <div className="flex flex-col gap-4 py-5 text-sm text-canvas/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteData.personal.name}. All rights reserved.
          </p>
          <button
            className="inline-flex w-fit items-center gap-2 border border-canvas/30 px-3 py-2 font-medium text-canvas hover:border-canvas hover:bg-canvas hover:text-ink"
            onClick={scrollToTop}
            type="button"
          >
            <FaArrowUp aria-hidden="true" className="h-3 w-3" />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}