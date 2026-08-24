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
                    'grid gap-6 md:grid-cols-12 lg:gap-8',
                    isCurrent
                      ? 'bg-ink px-4 py-10 text-canvas sm:px-6 lg:px-8 lg:py-14'
                      : 'py-10 lg:py-12'
                  )}
                >
                  <div className="md:col-span-2">
                    <p
                      className={cn(
                        'metadata flex flex-wrap gap-x-2 text-xs',
                        isCurrent ? 'text-canvas/70' : 'text-slate'
                      )}
                    >
                      <time dateTime={experience.startDate}>{experience.startDate}</time>
                      <span aria-hidden="true">—</span>
                      {experience.endDate === 'Present' ? (
                        <span>{experience.endDate}</span>
                      ) : (
                        <time dateTime={experience.endDate}>{experience.endDate}</time>
                      )}
                    </p>
                    <div
                      className={cn(
                        'mt-3 space-y-1 text-sm',
                        isCurrent ? 'text-canvas/70' : 'text-slate'
                      )}
                    >
                      <p>{experience.location}</p>
                      <p>{experience.type}</p>
                    </div>
                  </div>

                  <header className="md:col-span-3">
                    <h3
                      id={`role-${experience.id}`}
                      className={cn(
                        'font-display font-semibold leading-none',
                        isCurrent
                          ? 'text-4xl text-canvas lg:text-5xl'
                          : 'text-2xl text-ink lg:text-3xl'
                      )}
                    >
                      {experience.role}
                    </h3>
                    {experience.companyUrl ? (
                      <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          'mt-3 inline-flex items-baseline gap-2 font-medium underline underline-offset-4 transition-colors',
                          isCurrent
                            ? 'text-canvas decoration-signal hover:decoration-canvas'
                            : 'text-signal decoration-trace hover:decoration-signal'
                        )}
                        aria-label={`${experience.company} website (opens in a new tab)`}
                      >
                        <span>{experience.company}</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <p
                        className={cn(
                          'mt-3 font-medium',
                          isCurrent ? 'text-canvas' : 'text-signal'
                        )}
                      >
                        {experience.company}
                      </p>
                    )}
                  </header>

                  <div className="md:col-span-5">
                    <h4 className="sr-only">Achievements at {experience.company}</h4>
                    <ul
                      className={cn(
                        'space-y-3 text-sm leading-relaxed',
                        isCurrent ? 'text-canvas' : 'text-ink'
                      )}
                    >
                      {primaryAchievements.map((achievement, achievementIndex) => (
                        <li
                          key={`${experience.id}-achievement-${achievementIndex}`}
                          className="flex gap-3"
                        >
                          <span
                            aria-hidden="true"
                            className={isCurrent ? 'text-canvas/70' : 'text-signal'}
                          >
                            —
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {additionalAchievements.length > 0 && (
                      <details
                        className={cn(
                          'mt-4 border-l pl-4',
                          isCurrent ? 'border-canvas/30' : 'border-trace'
                        )}
                      >
                        <summary
                          className={cn(
                            'w-fit cursor-pointer text-sm font-medium underline underline-offset-4',
                            isCurrent
                              ? 'text-canvas decoration-signal marker:text-canvas hover:decoration-canvas'
                              : 'text-signal decoration-trace marker:text-signal hover:decoration-signal'
                          )}
                        >
                          Show {additionalAchievements.length} more achievement
                          {additionalAchievements.length === 1 ? '' : 's'}
                        </summary>
                        <ul
                          className={cn(
                            'mt-3 space-y-3 text-sm leading-relaxed',
                            isCurrent ? 'text-canvas' : 'text-ink'
                          )}
                        >
                          {additionalAchievements.map((achievement, achievementIndex) => (
                            <li
                              key={`${experience.id}-additional-achievement-${achievementIndex}`}
                              className="flex gap-3"
                            >
                              <span
                                aria-hidden="true"
                                className={isCurrent ? 'text-canvas/70' : 'text-signal'}
                              >
                                —
                              </span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </details>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <h4
                      className={cn(
                        'text-xs font-semibold uppercase',
                        isCurrent ? 'text-canvas/70' : 'text-slate'
                      )}
                    >
                      Technologies
                    </h4>
                    <ul
                      className={cn(
                        'metadata mt-3 flex flex-wrap gap-x-2 gap-y-1 text-xs leading-relaxed',
                        isCurrent ? 'text-canvas/70' : 'text-slate'
                      )}
                    >
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