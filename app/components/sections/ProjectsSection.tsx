'use client';

import Image from 'next/image';
import { useRef, useState, type KeyboardEvent } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { siteData } from '@/data/siteData';
import type { Project } from '@/types';
import { cn } from '@/utils/cn';

type ProjectFilter = 'featured' | 'all';

const FILTER_OPTIONS = [
  {
    value: 'featured',
    label: 'Featured',
    qa: 'project-filter-featured',
  },
  {
    value: 'all',
    label: 'All projects',
    qa: 'project-filter-all',
  },
] as const;

const FEATURED_PROJECTS = siteData.projects.filter(
  (project) => project.featured
);

const getProjectsForFilter = (filter: ProjectFilter) =>
  filter === 'featured' ? FEATURED_PROJECTS : siteData.projects;

function ProjectMetadata({ project }: { project: Project }) {
  const statusLabel =
    project.status === 'in-progress'
      ? 'In progress'
      : project.status.charAt(0).toUpperCase() + project.status.slice(1);

  return (
    <div className="metadata flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase text-slate">
      <span>{statusLabel}</span>
      <span aria-hidden="true" className="text-trace">
        /
      </span>
      <span>
        {project.endDate
          ? `${project.startDate} — ${project.endDate}`
          : project.startDate}
      </span>
      {project.featured && (
        <>
          <span aria-hidden="true" className="text-trace">
            /
          </span>
          <span className="font-semibold text-ink">Featured</span>
        </>
      )}
    </div>
  );
}

function ProjectActions({ project }: { project: Project }) {
  if (!project.githubUrl && !project.liveUrl) return null;

  const isAppStore = project.liveUrl?.includes('apps.apple.com');
  const liveLabel = isAppStore ? 'App Store' : 'Live project';

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-trace pt-5">
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} source code on GitHub`}
          className="inline-flex min-h-11 items-center gap-2 border-b border-ink text-sm font-semibold text-ink transition-colors duration-200 hover:border-signal"
        >
          <FaGithub aria-hidden="true" />
          Source code
        </a>
      )}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={
            isAppStore
              ? `Open ${project.title} on the App Store`
              : `Open the live ${project.title} project`
          }
          className="inline-flex min-h-11 items-center gap-2 border-b border-ink text-sm font-semibold text-ink transition-colors duration-200 hover:border-signal"
        >
          <FaExternalLinkAlt aria-hidden="true" className="text-xs" />
          {liveLabel}
        </a>
      )}
    </div>
  );
}

function ProjectBody({ project }: { project: Project }) {
  return (
    <div className="space-y-6">
      <p className="max-w-3xl text-sm leading-7 text-slate">
        {project.longDescription}
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <h4 className="metadata mb-3 text-xs uppercase text-ink">Highlights</h4>
          <ul className="space-y-3">
            {project.highlights.map((highlight) => (
              <li
                key={`${project.id}-${highlight}`}
                className="flex items-start gap-3 text-sm leading-6 text-slate"
              >
                <span
                  aria-hidden="true"
                  className="mt-3 h-px w-3 shrink-0 bg-signal"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="metadata mb-3 text-xs uppercase text-ink">
            Technologies
          </h4>
          <ul className="flex flex-wrap gap-x-4 gap-y-3">
            {project.technologies.map((technology) => (
              <li
                key={`${project.id}-${technology}`}
                className="metadata border-l border-trace pl-3 text-xs text-slate"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ProjectActions project={project} />
    </div>
  );
}

export default function ProjectsSection() {
  const initialProjectId =
    siteData.projects.find((project) => project.featured)?.id ??
    siteData.projects[0]?.id ??
    '';
  const [filter, setFilter] = useState<ProjectFilter>('featured');
  const [activeProjectId, setActiveProjectId] = useState(initialProjectId);
  const projectButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects = getProjectsForFilter(filter);
  const activeProject =
    filteredProjects.find((project) => project.id === activeProjectId) ??
    filteredProjects[0];

  const handleFilterChange = (nextFilter: ProjectFilter) => {
    const nextProjects = getProjectsForFilter(nextFilter);

    setFilter(nextFilter);
    setActiveProjectId((currentProjectId) =>
      nextProjects.some((project) => project.id === currentProjectId)
        ? currentProjectId
        : nextProjects[0]?.id ?? ''
    );
  };

  const handleProjectKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    projectIndex: number
  ) => {
    let nextIndex: number | null = null;

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      nextIndex = (projectIndex + 1) % filteredProjects.length;
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      nextIndex =
        (projectIndex - 1 + filteredProjects.length) % filteredProjects.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = filteredProjects.length - 1;
    }

    if (nextIndex === null) return;

    event.preventDefault();
    projectButtonRefs.current[nextIndex]?.focus();
  };

  return (
    <section
      id="projects"
      data-studio-section="projects"
      data-studio-component="project-showcase"
      className="section-padding field-rule bg-canvas"
    >
      <div className="field-container">
        <header className="grid gap-8 border-b border-trace pb-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="metadata mb-3 text-xs uppercase text-slate">
              Project catalog
            </p>
            <h2 className="text-5xl font-bold uppercase leading-none text-ink sm:text-6xl">
              Projects
            </h2>
          </div>

          <div className="space-y-5 lg:col-span-5">
            <p className="text-sm leading-6 text-slate lg:max-w-md">
              <span className="lg:hidden">
                Each record includes complete project notes and available links.
              </span>
              <span className="hidden lg:inline">
                Focus or select a record to update the project stage.
              </span>
            </p>

            <div
              role="group"
              aria-label="Filter projects"
              className="flex flex-wrap gap-x-6 border-t border-trace"
            >
              {FILTER_OPTIONS.map((option) => {
                const isSelected = filter === option.value;
                const count = getProjectsForFilter(option.value).length;

                return (
                  <button
                    key={option.value}
                    type="button"
                    data-qa={option.qa}
                    aria-pressed={isSelected}
                    aria-controls="project-catalog"
                    onClick={() => handleFilterChange(option.value)}
                    className={cn(
                      'metadata border-t-2 px-0 py-3 text-xs uppercase transition-colors duration-200',
                      isSelected
                        ? '-mt-px border-signal text-ink'
                        : '-mt-px border-transparent text-slate hover:border-trace hover:text-ink'
                    )}
                  >
                    {option.label} ({String(count).padStart(2, '0')})
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        <div className="grid gap-10 pt-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          <ol
            id="project-catalog"
            data-studio-component="project-index"
            aria-label={`${filter === 'featured' ? 'Featured' : 'All'} projects`}
            className="min-w-0 border-b border-trace lg:col-span-5 lg:col-start-8 lg:row-start-1"
          >
            {filteredProjects.map((project, projectIndex) => {
              const isActive = project.id === activeProject?.id;
              const headingId = `project-heading-${project.id}`;

              return (
                <li key={project.id} className="border-t border-trace">
                  <article
                    aria-labelledby={headingId}
                    className={cn(
                      'py-8 transition-colors duration-200 lg:px-5 lg:py-6',
                      isActive && 'lg:bg-signal/10'
                    )}
                  >
                    <header className="relative">
                      <div className="flex items-start gap-4">
                        <span
                          aria-hidden="true"
                          className={cn(
                            'metadata mt-1 w-7 shrink-0 text-xs',
                            isActive ? 'text-ink' : 'text-slate'
                          )}
                        >
                          {String(projectIndex + 1).padStart(2, '0')}
                        </span>
                        <div className="min-w-0 flex-1">
                          <ProjectMetadata project={project} />
                          <h3
                            id={headingId}
                            className="mt-3 break-words text-3xl font-bold uppercase leading-none text-ink"
                          >
                            {project.title}
                          </h3>
                          <p className="mt-3 text-sm leading-6 text-slate">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      <button
                        ref={(element) => {
                          projectButtonRefs.current[projectIndex] = element;
                        }}
                        type="button"
                        aria-label={`Show ${project.title} in the project stage`}
                        aria-controls="project-stage-panel"
                        aria-pressed={isActive}
                        tabIndex={isActive ? 0 : -1}
                        onClick={() => setActiveProjectId(project.id)}
                        onFocus={() => setActiveProjectId(project.id)}
                        onKeyDown={(event) =>
                          handleProjectKeyDown(event, projectIndex)
                        }
                        className="absolute inset-0 z-10 hidden cursor-pointer lg:block"
                      />
                    </header>

                    <div className={cn('mt-6', !isActive && 'lg:hidden')}>
                      <div className="relative aspect-[16/9] overflow-hidden border border-trace bg-trace/30 lg:hidden">
                        <Image
                          src={project.image}
                          alt={`${project.title} project cover`}
                          loading="eager"
                          fill
                          sizes="(max-width: 1023px) calc(100vw - 2rem), 1px"
                          className="object-cover"
                        />
                      </div>
                      <div className={cn('pt-6', isActive && 'lg:border-t lg:border-trace')}>
                        <ProjectBody project={project} />
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
          {activeProject && (
            <div
              id="project-stage-panel"
              role="region"
              aria-labelledby={`project-heading-${activeProject.id}`}
              className="sticky top-24 hidden self-start lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:block"
            >
              <motion.figure
                key={activeProject.id}
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.22, ease: [0.22, 1, 0.36, 1] }
                }
              >
                <div className="relative aspect-[16/9] overflow-hidden border border-trace bg-trace/30">
                  <Image
                    src={activeProject.image}
                    alt={`${activeProject.title} project cover`}
                    fill
                    sizes="(min-width: 1024px) 58vw, 1px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="flex items-baseline justify-between gap-6 border-x border-b border-trace px-4 py-3">
                  <span className="metadata text-xs uppercase text-slate">
                    Active cover
                  </span>
                  <span className="font-display text-xl font-bold uppercase text-ink">
                    {activeProject.title}
                  </span>
                </figcaption>
              </motion.figure>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
