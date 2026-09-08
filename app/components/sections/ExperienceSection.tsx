'use client';

import ScrollReveal from '@/components/animations/ScrollReveal';
import { siteData } from '@/data/siteData';
import { cn } from '@/utils/cn';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      data-studio-section="experience"
      data-studio-component="career-ledger"
      className="section-padding field-rule bg-canvas"
    >
      <div className="field-container">
        <ScrollReveal direction="right" duration={0.45}>
          <header className="mb-14 grid md:grid-cols-12 lg:mb-20">
            <h2 className="font-display text-6xl font-bold uppercase leading-none text-ink sm:text-7xl md:col-span-6 lg:text-8xl">
              Experience
            </h2>
          </header>
        </ScrollReveal>

        <ol className="border-t border-trace">
          {siteData.experience.map((experience, experienceIndex) => {
            const isCurrent = experienceIndex === 0;
            const primaryAchievements = experience.achievements.slice(0, 2);
            const additionalAchievements = experience.achievements.slice(2);

            return (
              <li key={experience.id} className="border-b border-trace">
                <article
                  aria-labelledby={`role-${experience.id}`}
                  className={cn(
                    'grid gap-6 py-10 md:grid-cols-12 lg:gap-8 lg:py-12',
                    isCurrent && 'border-l-2 border-signal pl-4 sm:pl-5'
                  )}
                >
                  <div className="md:col-span-2">
                    {isCurrent && (
                      <p className="metadata mb-2 text-xs font-semibold uppercase tracking-widest text-signal">
                        Current
                      </p>
                    )}
                    <p className="metadata flex flex-wrap gap-x-2 text-xs text-slate">
                      <time dateTime={experience.startDate}>{experience.startDate}</time>
                      <span aria-hidden="true">-</span>
                      {experience.endDate === 'Present' ? (
                        <span>{experience.endDate}</span>
                      ) : (
                        <time dateTime={experience.endDate}>{experience.endDate}</time>
                      )}
                    </p>
                    <div className="mt-3 space-y-1 text-sm text-slate">
                      <p>{experience.location}</p>
                      <p>{experience.type}</p>
                    </div>
                  </div>

                  <header className="md:col-span-3">
                    <h3
                      id={`role-${experience.id}`}
                      className={cn(
                        'font-display font-semibold leading-none text-ink',
                        isCurrent ? 'text-3xl lg:text-4xl' : 'text-2xl lg:text-3xl'
                      )}
                    >
                      {experience.role}
                    </h3>
                    {experience.companyUrl ? (
                      <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-baseline gap-2 font-medium text-signal underline decoration-trace underline-offset-4 transition-colors hover:decoration-signal"
                        aria-label={`${experience.company} website (opens in a new tab)`}
                      >
                        <span>{experience.company}</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <p className="mt-3 font-medium text-signal">
                        {experience.company}
                      </p>
                    )}
                  </header>

                  <div className="md:col-span-5">
                    <h4 className="sr-only">Achievements at {experience.company}</h4>
                    <ul className="space-y-3 text-sm leading-relaxed text-ink">
                      {primaryAchievements.map((achievement, achievementIndex) => (
                        <li
                          key={`${experience.id}-achievement-${achievementIndex}`}
                          className="flex gap-3"
                        >
                          <span aria-hidden="true" className="text-signal">
                            -
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {additionalAchievements.length > 0 && (
                      <details className="mt-4 border-l border-trace pl-4">
                        <summary className="w-fit cursor-pointer text-sm font-medium text-signal underline decoration-trace underline-offset-4 marker:text-signal hover:decoration-signal">
                          Show {additionalAchievements.length} more achievement
                          {additionalAchievements.length === 1 ? '' : 's'}
                        </summary>
                        <ul className="mt-3 space-y-3 text-sm leading-relaxed text-ink">
                          {additionalAchievements.map((achievement, achievementIndex) => (
                            <li
                              key={`${experience.id}-additional-achievement-${achievementIndex}`}
                              className="flex gap-3"
                            >
                              <span aria-hidden="true" className="text-signal">
                                -
                              </span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </details>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <h4 className="text-xs font-semibold uppercase text-slate">
                      Technologies
                    </h4>
                    <ul className="metadata mt-3 flex flex-wrap gap-x-2 gap-y-1 text-xs leading-relaxed text-slate">
                      {experience.technologies.map((technology, technologyIndex) => (
                        <li key={`${experience.id}-${technology}`}>
                          {technology}
                          {technologyIndex < experience.technologies.length - 1 ? ',' : ''}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
