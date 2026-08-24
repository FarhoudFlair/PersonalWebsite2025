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

const NAVIGATION_OFFSET = 80;
const DESKTOP_MEDIA_QUERY = '(min-width: 1024px)';
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
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth',
  });
};

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
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

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;

      if (
        !(target instanceof Node) ||
        mobileMenuRef.current?.contains(target) ||
        mobileMenuButtonRef.current?.contains(target)
      ) {
        return;
      }

      closeMobileMenu();
    };

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

    document.addEventListener('pointerdown', handlePointerDown, true);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown, true);
    };
  }, [closeMobileMenu, isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <nav
      aria-label="Primary navigation"
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200',
        isScrolled || isMobileMenuOpen
          ? 'border-trace bg-canvas'
          : 'border-transparent bg-canvas/95'
      )}
      data-studio-component="site-navigation"
    >
      <div className="container-custom">
        <div className="flex h-16 min-w-0 items-center gap-3">
          <a
            aria-label={`${siteData.personal.name}, home`}
            className="shrink-0 text-lg font-semibold tracking-tight text-ink transition-colors hover:text-signal sm:text-xl"
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              handleNavClick('#home');
            }}
          >
            {siteData.personal.name}
          </a>

          <ul className="hidden min-w-0 flex-1 items-center justify-center gap-5 lg:flex xl:gap-7">
            {siteData.navigation.map((item) => (
              <li key={item.href}>
                <a
                  className="text-sm font-medium text-slate transition-colors hover:text-signal"
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2">
            <div
              aria-label="Social links"
              className="hidden items-center gap-1 lg:flex"
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
                    className="inline-flex h-9 w-9 items-center justify-center text-slate transition-colors hover:text-signal"
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
              aria-label={`Open ${siteData.personal.name}'s résumé in a new tab`}
              className="hidden h-9 items-center gap-2 border border-trace px-3 text-sm font-medium text-ink transition-colors hover:border-signal hover:text-signal lg:inline-flex"
              data-studio-component="resume-link"
              href={siteData.personal.resume}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaDownload aria-hidden="true" className="h-3 w-3 shrink-0" />
              <span>Résumé</span>
            </a>

            <button
              aria-label={
                theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
              }
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center text-slate transition-colors hover:text-signal disabled:pointer-events-none',
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
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex h-9 w-9 items-center justify-center text-ink transition-colors hover:text-signal lg:hidden"
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
          <div aria-hidden="true" className="absolute inset-0 bg-ink/20" />
          <div
            aria-labelledby="mobile-navigation-title"
            aria-modal="true"
            className="absolute inset-y-0 right-0 flex w-11/12 max-w-sm flex-col overflow-y-auto border-l border-trace bg-canvas text-ink"
            id="mobile-navigation-drawer"
            ref={mobileMenuRef}
            role="dialog"
          >
            <div className="flex items-center justify-between border-b border-trace px-4 py-4">
              <p className="text-lg font-semibold" id="mobile-navigation-title">
                Navigation
              </p>
              <button
                aria-label="Close navigation menu"
                className="inline-flex h-9 w-9 items-center justify-center text-ink transition-colors hover:text-signal"
                onClick={() => closeMobileMenu()}
                ref={mobileMenuCloseButtonRef}
                type="button"
              >
                <FaTimes aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>

            <ul className="px-4 py-4">
              {siteData.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    className="block border-b border-trace px-3 py-4 text-lg font-medium text-ink transition-colors hover:border-signal hover:text-signal"
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto border-t border-trace px-4 py-4">
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
                      className="inline-flex h-9 w-9 items-center justify-center text-slate transition-colors hover:text-signal"
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
                aria-label={`Open ${siteData.personal.name}'s résumé in a new tab`}
                className="mt-4 inline-flex h-9 items-center gap-2 border border-trace px-3 text-sm font-medium text-ink transition-colors hover:border-signal hover:text-signal"
                data-studio-component="resume-link"
                href={siteData.personal.resume}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaDownload aria-hidden="true" className="h-3 w-3 shrink-0" />
                <span>Résumé</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}