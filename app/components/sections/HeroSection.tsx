import { siteData } from '@/data/siteData';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-[680px] items-center bg-background-light px-4 pb-20 pt-32 dark:bg-background-dark sm:px-6 sm:pb-24 sm:pt-40 lg:px-8"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-semibold tracking-tight text-text-primary-light dark:text-text-primary-dark sm:text-6xl lg:text-7xl">
            {siteData.personal.name}
          </h1>
          <p className="mt-5 text-2xl font-medium text-text-primary-light dark:text-text-primary-dark sm:text-3xl">
            {siteData.personal.title}
          </p>
          <p className="mt-4 text-xl leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
            {siteData.personal.tagline}
          </p>
          <p className="mt-8 max-w-2xl text-base leading-8 text-text-secondary-light dark:text-text-secondary-dark sm:text-lg">
            {siteData.personal.bio}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-gray-300 px-6 py-3 font-semibold text-text-primary-light transition-colors hover:bg-surface-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:border-gray-600 dark:text-text-primary-dark dark:hover:bg-surface-dark"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
