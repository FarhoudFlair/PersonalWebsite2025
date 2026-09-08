import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { siteData } from '@/data/siteData';
import type { Project } from '@/types';

const FEATURED_PROJECTS = [
  {
    id: 'deenpath',
    category: 'Published iOS product',
    image: '/images/projects/featured/deenpath-store.webp',
    alt: 'DeenPath iOS app store cover',
    containImage: false,
  },
  {
    id: 'stockscanner',
    category: 'Market analysis',
    image: '/images/projects/featured/stockscanner-cover.webp',
    alt: 'StockScanner project cover',
    containImage: false,
  },
  {
    id: 'rat',
    category: 'Systems tooling',
    image: '/images/projects/featured/rat-cover.webp',
    alt: 'Remote Admin Toolkit project cover',
    containImage: false,
  },
  {
    id: 'imposter-hunt',
    category: 'iOS party game',
    image: '/images/projects/imposter-hunt.webp',
    alt: 'Imposter Hunt app icon',
    containImage: true,
  },
] as const;

const projectsById = siteData.projects.reduce<Record<string, Project>>(
  (projects, project) => {
    projects[project.id] = project;
    return projects;
  },
  {}
);

const featuredProjects = FEATURED_PROJECTS.map((featuredProject) => ({
  ...featuredProject,
  project: projectsById[featuredProject.id],
}));

const FEATURED_PROJECT_IDS: Record<string, true> = {
  deenpath: true,
  stockscanner: true,
  rat: true,
  'imposter-hunt': true,
};
const archiveProjects = siteData.projects
  .filter((project) => !FEATURED_PROJECT_IDS[project.id])
  .sort((firstProject, secondProject) =>
    firstProject.title.localeCompare(secondProject.title)
  );

const STATUS_LABELS: Record<NonNullable<Project['status']>, string> = {
  completed: 'Completed',
  'in-progress': 'In progress',
  concept: 'Concept',
};

function ProjectMetadata({ project }: { project: Project }) {
  const metadata = [
    project.status ? STATUS_LABELS[project.status] : null,
    project.startDate
      ? project.endDate
        ? `${project.startDate} — ${project.endDate}`
        : project.startDate
      : null,
  ].filter((value): value is string => Boolean(value));

  if (!metadata.length) {
    return null;
  }

  return (
    <p className="metadata flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase text-slate">
      {metadata.map((value, index) => (
        <span key={`${project.id}-${value}`}>
          {index > 0 && <span aria-hidden="true">/ </span>}
          {value}
        </span>
      ))}
    </p>
  );
}

function ProjectActions({ project }: { project: Project }) {
  if (!project.githubUrl && !project.liveUrl) {
    return null;
  }

  const isAppStore = project.liveUrl?.includes('apps.apple.com');
  const actionClassName =
    'inline-flex min-h-10 items-center gap-2 border border-trace px-3 py-2 text-xs font-semibold text-ink outline-safety transition-colors duration-200 hover:border-signal hover:bg-signal hover:text-canvas dark:hover:text-ink';

  return (
    <div className="flex flex-wrap gap-2">
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View the ${project.title} repository on GitHub (opens in a new tab)`}
          className={actionClassName}
        >
          <FaGithub aria-hidden="true" className="h-3.5 w-3.5" />
          <span>Repository</span>
        </a>
      )}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={
            isAppStore
              ? `View ${project.title} on the App Store (opens in a new tab)`
              : `Open ${project.title} (opens in a new tab)`
          }
          className={actionClassName}
        >
          <FaExternalLinkAlt aria-hidden="true" className="h-3 w-3" />
          <span>{isAppStore ? 'View on the App Store' : 'Open project'}</span>
        </a>
      )}
    </div>
  );
}

function ProjectImage({
  src,
  alt,
  sizes,
  contain = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  contain?: boolean;
}) {
  return (
    <div className="relative min-h-52 overflow-hidden bg-ink/5 sm:min-h-56">
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={contain ? 'object-contain p-8' : 'object-cover'}
      />
    </div>
  );
}

function FeaturedProjectCard({
  featuredProject,
}: {
  featuredProject: (typeof featuredProjects)[number];
}) {
  const { project, category, image, alt, containImage } = featuredProject;
  const headingId = `project-heading-${project.id}`;

  return (
    <article
      aria-labelledby={headingId}
      data-qa={project.id === 'deenpath' ? 'project-published-product' : undefined}
      className="h-full border border-trace bg-canvas transition-colors duration-200 hover:border-signal"
    >
      <div className="grid h-full grid-cols-1 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <figure>
          <ProjectImage
            src={image}
            alt={alt}
            contain={containImage}
            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 34vw, calc(100vw - 2rem)"
          />
        </figure>

        <div className="flex min-w-0 flex-col p-4 sm:p-5">
          <p className="metadata text-xs font-semibold uppercase tracking-widest text-signal">
            {category}
          </p>
          <h4
            id={headingId}
            className="mt-2 break-words font-display text-2xl font-bold leading-none text-ink sm:text-3xl"
          >
            {project.title}
          </h4>
          <ProjectMetadata project={project} />
          <p className="mt-4 break-words text-sm leading-6 text-slate [overflow-wrap:anywhere]">
            {project.description}
          </p>

          <ul
            aria-label={`${project.title} technologies`}
            className="metadata mt-4 min-w-0 flex flex-wrap gap-x-3 gap-y-2 border-t border-trace pt-3 text-xs leading-5 text-slate"
          >
            {project.technologies.map((technology) => (
              <li
                key={`${project.id}-${technology}`}
                className="min-w-0 break-words border-l border-trace pl-2 [overflow-wrap:anywhere]"
              >
                {technology}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-5">
            <ProjectActions project={project} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      data-studio-section="projects"
      data-studio-component="project-showcase"
      className="section-padding field-rule bg-canvas"
    >
      <div className="field-container">
        <header className="grid gap-6 border-b border-trace pb-10 lg:grid-cols-12 lg:items-end">
          <h2 className="font-display text-6xl font-bold uppercase leading-none text-ink sm:text-7xl lg:col-span-8 lg:text-8xl">
            Projects
          </h2>
          <p className="max-w-md text-sm leading-6 text-slate lg:col-span-4">
            Four featured projects, with the rest of the catalog collapsed
            until you want it.
          </p>
        </header>

        <section
          aria-labelledby="project-selected-work-heading"
          data-qa="project-selected-work"
          className="mt-12 lg:mt-16"
        >
          <header className="mb-6 flex flex-col gap-3 border-b border-trace pb-5 sm:flex-row sm:items-end sm:justify-between">
            <h3
              id="project-selected-work-heading"
              className="font-display text-3xl font-bold leading-none text-ink sm:text-4xl"
            >
              Selected work
            </h3>
            <p className="metadata text-xs uppercase text-slate">
              Featured projects
            </p>
          </header>

          <ul className="grid gap-5 md:grid-cols-2">
            {featuredProjects.map((featuredProject) => (
              <li key={featuredProject.project.id} className="min-w-0">
                <FeaturedProjectCard featuredProject={featuredProject} />
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="project-archive-heading"
          data-qa="project-archive"
          className="mt-16 lg:mt-20"
        >
          <details className="archive-details group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 border-b border-ink py-4 outline-safety marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="min-w-0">
                <h3
                  id="project-archive-heading"
                  className="font-display text-3xl font-bold leading-none text-ink sm:text-4xl"
                >
                  Archive
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate">
                  {archiveProjects.length} more project
                  {archiveProjects.length === 1 ? '' : 's'}, listed
                  alphabetically with repository links and technical details.
                </p>
              </span>
              <span className="shrink-0 text-sm font-semibold text-signal underline decoration-trace underline-offset-4 group-hover:decoration-signal">
                <span className="archive-details-closed">See more...</span>
                <span className="archive-details-open">See less</span>
              </span>
            </summary>

            <ol className="border-t border-trace">
            {archiveProjects.map((project) => {
              const headingId = `project-heading-${project.id}`;

              return (
                <li key={project.id} className="border-b border-trace">
                  <article
                    aria-labelledby={headingId}
                    className="grid gap-5 py-5 lg:grid-cols-12 lg:items-start lg:gap-8"
                  >
                    <div className="min-w-0 lg:col-span-4">
                      <ProjectMetadata project={project} />
                      <h4
                        id={headingId}
                        className="mt-2 break-words font-display text-2xl font-semibold leading-none text-ink sm:text-3xl"
                      >
                        {project.title}
                      </h4>
                    </div>

                    <p className="min-w-0 max-w-prose break-words text-sm leading-6 text-slate [overflow-wrap:anywhere] lg:col-span-4">
                      {project.description}
                    </p>

                    <div className="min-w-0 lg:col-span-4">
                      <h5 className="metadata text-xs uppercase text-ink">
                        Technologies
                      </h5>
                      <ul className="metadata mt-3 min-w-0 flex flex-wrap gap-x-3 gap-y-2 text-xs leading-5 text-slate">
                        {project.technologies.map((technology) => (
                          <li
                            key={`${project.id}-${technology}`}
                            className="min-w-0 break-words border-l border-trace pl-2 [overflow-wrap:anywhere]"
                          >
                            {technology}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4">
                        <ProjectActions project={project} />
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
          </details>
        </section>
      </div>
    </section>
  );
}
