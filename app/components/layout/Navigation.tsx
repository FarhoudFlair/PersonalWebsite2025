'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  FaBars,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaTimes,
} from 'react-icons/fa';
import { siteData } from '@/data/siteData';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/utils/cn';

const FIELD_INDEX_ORDER = [
  '#home',
  '#projects',
  '#experience',
  '#skills',
  '#contact',
] as const;

const DESKTOP_MEDIA_QUERY = '(min-width: 1024px)';
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

const monogram = siteData.personal.name
  .split(/\s+/)
  .map((namePart) => namePart.charAt(0))
  .join('');

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

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuCloseButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme, mounted } = useTheme();

  const closeMobileMenu = useCallback((restoreMenuButtonFocus = true) => {
    setIsMobileMenuOpen(false);

    if (restoreMenuButtonFocus) {
      window.requestAnimationFrame(() => {
        mobileMenuButtonRef.current?.focus();
      });
    }
  }, []);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMobileMenuOpen(false);
      }
    };

    desktopMediaQuery.addEventListener('change', handleDesktopChange);
    return () => desktopMediaQuery.removeEventListener('change', handleDesktopChange);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    mobileMenuCloseButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMobileMenu();
        return;
      }

      if (event.key !== 'Tab' || !mobileMenuRef.current) {
        return;
      }

      const focusableElements = Array.from(
        mobileMenuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        )
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (!mobileMenuRef.current.contains(activeElement)) {
        event.preventDefault();
        firstFocusableElement.focus();
      } else if (event.shiftKey && activeElement === firstFocusableElement) {
        event.preventDefault();
        lastFocusableElement.focus();
      } else if (!event.shiftKey && activeElement === lastFocusableElement) {
        event.preventDefault();
        firstFocusableElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeMobileMenu, isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed inset-x-0 top-0 z-50 border-b border-trace bg-canvas text-ink"
      data-studio-component="site-navigation"
    >
      <div className="field-container">
        <div className="flex h-16 min-w-0 items-center gap-3">
          <a
            aria-label={`${siteData.personal.name}, home`}
            className="group flex h-9 shrink-0 items-center gap-2 text-ink"
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              handleNavClick('#home');
            }}
          >
            <span
              aria-hidden="true"
              className="metadata inline-flex h-9 w-9 items-center justify-center border border-ink bg-ink text-xs font-semibold text-canvas group-hover:border-signal group-hover:bg-signal"
            >
              {monogram}
            </span>
            <span className="hidden text-sm font-semibold sm:inline">
              {siteData.personal.name}
            </span>
          </a>

          <ol className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
            {fieldIndexItems.map((item, index) => (
              <li
                className="border-l border-trace first:border-l-0"
                key={item.href}
              >
                <a
                  className="group flex h-9 items-center gap-2 px-2 text-xs font-semibold uppercase tracking-wide text-ink hover:text-signal xl:px-3"
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  <span className="metadata text-slate group-hover:text-signal">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ol>

          <div className="ml-auto flex shrink-0 items-center gap-1">
            <div
              aria-label="Social links"
              className="flex items-center gap-1"
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
                    className="inline-flex h-9 w-9 items-center justify-center border border-transparent text-slate hover:border-trace hover:text-signal"
                    href={social.url}
                    key={social.id}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon aria-hidden="true" className="h-4 w-4" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                );
              })}
            </div>

            <a
              aria-label={`Open ${siteData.personal.name}'s resume in a new tab`}
              className="inline-flex h-9 items-center gap-1 border border-trace px-2 text-xs font-semibold uppercase tracking-wide text-ink hover:border-signal hover:text-signal"
              data-studio-component="resume-link"
              href={siteData.personal.resume}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaDownload aria-hidden="true" className="h-3 w-3 shrink-0" />
              <span>Resume</span>
            </a>

            <button
              aria-label={
                theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
              }
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center border border-transparent text-slate hover:border-trace hover:text-signal disabled:pointer-events-none',
                !mounted && 'invisible'
              )}
              data-qa="theme-toggle"
              data-studio-component="theme-toggle"
              disabled={!mounted}
              onClick={toggleTheme}
              type="button"
            >
              {theme === 'dark' ? (
                <FaSun aria-hidden="true" className="h-4 w-4" />
              ) : (
                <FaMoon aria-hidden="true" className="h-4 w-4" />
              )}
            </button>

            <button
              aria-controls="mobile-navigation-drawer"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close field index' : 'Open field index'}
              className="inline-flex h-9 w-9 items-center justify-center border border-trace text-ink hover:border-signal hover:text-signal lg:hidden"
              data-qa="mobile-menu-toggle"
              onClick={() => {
                if (isMobileMenuOpen) {
                  closeMobileMenu();
                } else {
                  setIsMobileMenuOpen(true);
                }
              }}
              ref={mobileMenuButtonRef}
              type="button"
            >
              {isMobileMenuOpen ? (
                <FaTimes aria-hidden="true" className="h-4 w-4" />
              ) : (
                <FaBars aria-hidden="true" className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-16 lg:hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-canvas/80"
            onPointerDown={() => closeMobileMenu()}
          />
          <div
            aria-labelledby="mobile-navigation-title"
            aria-modal="true"
            className="absolute inset-y-0 right-0 flex w-11/12 max-w-sm flex-col overflow-y-auto border-l border-trace bg-canvas text-ink"
            id="mobile-navigation-drawer"
            ref={mobileMenuRef}
            role="dialog"
          >
            <div className="flex items-center justify-between border-b border-trace px-4 py-4">
              <p
                className="metadata text-xs font-semibold uppercase tracking-widest text-slate"
                id="mobile-navigation-title"
              >
                Field index
              </p>
              <button
                aria-label="Close field index"
                className="inline-flex h-9 w-9 items-center justify-center border border-trace text-ink hover:border-signal hover:text-signal"
                onClick={() => closeMobileMenu()}
                ref={mobileMenuCloseButtonRef}
                type="button"
              >
                <FaTimes aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>

            <ol>
              {fieldIndexItems.map((item, index) => (
                <li className="border-b border-trace" key={item.href}>
                  <a
                    className="group flex items-center gap-3 px-4 py-5 text-ink hover:bg-trace/30 hover:text-signal"
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    <span className="metadata w-8 shrink-0 text-xs text-slate group-hover:text-signal">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="min-w-0 flex-1 font-display text-2xl font-semibold uppercase">
                      {item.label}
                    </span>
                    <span aria-hidden="true" className="text-slate group-hover:text-signal">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </nav>
  );
}