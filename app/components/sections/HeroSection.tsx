'use client';

import { motion, useReducedMotion } from 'motion/react';
import GradientText from '@/components/animations/GradientText';
import { siteData } from '@/data/siteData';

const signalLineTransition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1],
} as const;

const currentRole = siteData.experience[0];
const featuredProjects = siteData.projects.filter((project) => project.featured);

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      data-studio-section="home"
      data-studio-component="identity-hero"
      className="min-h-screen overflow-x-clip bg-canvas pt-24 text-ink sm:pt-28 lg:flex lg:items-center lg:pt-24"
    >
      <div className="field-container py-12 sm:py-16 lg:py-20">
        <motion.div
          aria-hidden="true"
          className="h-px origin-left bg-signal"
          initial={shouldReduceMotion ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={shouldReduceMotion ? { duration: 0 } : signalLineTransition}
        />

        <div className="mt-12 grid min-w-0 grid-cols-1 gap-16 lg:mt-16 lg:grid-cols-12 lg:gap-0">
          <div className="min-w-0 lg:col-span-7 lg:pr-12 xl:pr-16">
            <div className="max-w-3xl">
              <h1 className="text-6xl font-bold leading-none tracking-tight text-ink sm:text-7xl lg:text-8xl xl:text-9xl">
                {siteData.personal.name}
              </h1>

              <p className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
                <GradientText>{siteData.personal.title}</GradientText>
              </p>

              <p className="mt-10 max-w-2xl text-xl font-medium leading-8 text-ink sm:text-2xl">
                {siteData.personal.tagline}
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate sm:text-lg sm:leading-8">
                {siteData.personal.bio}
              </p>
            </div>

            <address className="mt-10 not-italic sm:mt-12">
              <dl className="grid border-y border-trace sm:grid-cols-2">
                <div className="py-4 sm:border-r sm:border-trace sm:pr-6">
                  <dt className="metadata text-xs font-medium uppercase text-slate">
                    Location
                  </dt>
                  <dd className="mt-2 text-sm font-medium text-ink sm:text-base">
                    {siteData.personal.location}
                  </dd>
                </div>
                <div className="border-t border-trace py-4 sm:border-t-0 sm:pl-6">
                  <dt className="metadata text-xs font-medium uppercase text-slate">
                    Email
                  </dt>
                  <dd className="mt-2 min-w-0 text-sm font-medium sm:text-base">
                    <a
                      href={`mailto:${siteData.personal.email}`}
                      className="break-words text-ink underline decoration-trace transition-colors hover:decoration-signal"
                    >
                      {siteData.personal.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </address>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                data-qa="primary-action"
                className="inline-flex min-h-11 items-center justify-center bg-signal px-6 py-3 text-sm font-semibold text-canvas outline-safety transition-colors hover:bg-signal/90 dark:text-ink"
              >
                Contact {siteData.personal.name.split(/\s+/)[0]}
              </a>
              <a
                href={siteData.personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                data-studio-component="resume-link"
                aria-label={`Open ${siteData.personal.name}'s résumé in a new tab`}
                className="inline-flex min-h-11 items-center justify-center border border-trace px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-signal"
              >
                Résumé (PDF)
              </a>
            </div>
          </div>

          <aside
            aria-label="Current role and featured projects"
            className="min-w-0 border-t border-trace pt-10 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0 xl:pl-16"
          >
            <section aria-labelledby="current-role-heading">
              <p className="metadata text-xs font-medium uppercase text-slate">
                Current role
              </p>
              <h2
                id="current-role-heading"
                className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl"
              >
                {currentRole.companyUrl ? (
                  <a
                    href={currentRole.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-trace transition-colors hover:decoration-signal"
                  >
                    {currentRole.company}
                  </a>
                ) : (
                  currentRole.company
                )}
              </h2>
              <p className="mt-2 text-lg font-medium text-ink">
                {currentRole.role}
              </p>
              <p className="metadata mt-3 text-xs uppercase leading-5 text-slate">
                {currentRole.startDate} — {currentRole.endDate}
                <span aria-hidden="true"> / </span>
                {currentRole.location}
              </p>
              <p className="metadata mt-4 text-xs leading-5 text-slate">
                {currentRole.technologies.join(' · ')}
              </p>
            </section>

            <section aria-labelledby="featured-projects-heading" className="mt-10">
              <h2
                id="featured-projects-heading"
                className="metadata text-xs font-medium uppercase text-slate"
              >
                Featured projects
              </h2>

              <ul className="mt-4">
                {featuredProjects.map((project) => {
                  const projectUrl = project.liveUrl ?? project.githubUrl;

                  return (
                    <li key={project.id} className="border-t border-trace py-4">
                      <article>
                        <h3 className="text-xl font-bold leading-tight text-ink sm:text-2xl">
                          {projectUrl ? (
                            <a
                              href={projectUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.title} project, opens in a new tab`}
                              className="inline-flex items-baseline gap-2 underline decoration-trace transition-colors hover:decoration-signal"
                            >
                              <span>{project.title}</span>
                              <span aria-hidden="true" className="text-sm text-signal">
                                ↗
                              </span>
                            </a>
                          ) : (
                            project.title
                          )}
                        </h3>
                        <p className="metadata mt-2 text-xs uppercase leading-5 text-slate">
                          {project.startDate}
                          {project.endDate && ` — ${project.endDate}`}
                          <span aria-hidden="true"> / </span>
                          {project.status.replace('-', ' ')}
                        </p>
                      </article>
                    </li>
                  );
                })}
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
}