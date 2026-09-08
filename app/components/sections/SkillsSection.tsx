'use client';

import {
  FaAndroid,
  FaApple,
  FaCode,
  FaCogs,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaEdit,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinux,
  FaMagic,
  FaNetworkWired,
  FaProjectDiagram,
  FaPython,
  FaReact,
  FaRobot,
  FaShieldAlt,
  FaSwift,
} from 'react-icons/fa';
import {
  SiC,
  SiCplusplus,
  SiCsharp,
  SiDotnet,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiPerforce,
  SiPerl,
  SiTypescript,
} from 'react-icons/si';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { siteData } from '@/data/siteData';

const iconMap = {
  FaAndroid,
  FaApple,
  FaCode,
  FaCogs,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaEdit,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinux,
  FaMagic,
  FaNetworkWired,
  FaProjectDiagram,
  FaPython,
  FaReact,
  FaRobot,
  FaShieldAlt,
  FaSwift,
  SiC,
  SiCplusplus,
  SiCsharp,
  SiDotnet,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiPerforce,
  SiPerl,
  SiTypescript,
} as const;

const skillGroups = [
  { category: 'languages', label: 'Languages' },
  { category: 'frontend-mobile', label: 'Frontend & Mobile' },
  { category: 'backend-systems', label: 'Backend & Systems' },
  { category: 'tools', label: 'Tools & DevOps' },
  { category: 'ai', label: 'AI & Automation' },
] as const;

function iconColor(color?: string) {
  if (!color) return undefined;

  const normalizedColor = color.toLowerCase();
  const needsThemeContrast =
    normalizedColor === '#000' ||
    normalizedColor === '#000000' ||
    normalizedColor === '#fff' ||
    normalizedColor === '#ffffff';

  return needsThemeContrast ? undefined : color;
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      data-studio-section="skills"
      data-studio-component="capability-matrix"
      className="section-padding field-rule bg-canvas"
    >
      <div className="field-container">
        <ScrollReveal direction="left" duration={0.4}>
          <header className="mb-14 grid md:grid-cols-12 lg:mb-20">
            <h2 className="font-display text-6xl font-bold uppercase leading-none text-ink sm:text-7xl md:col-span-6 lg:text-8xl">
              Skills
            </h2>
          </header>
        </ScrollReveal>

        <ul className="border-t border-trace">
          {skillGroups.map((group) => {
            const skills = siteData.skills.filter((skill) => skill.category === group.category);

            return (
              <li
                key={group.category}
                className="grid gap-8 border-b border-trace py-10 md:grid-cols-12 lg:gap-8 lg:py-14"
              >
                <h3 className="font-display text-4xl font-semibold uppercase leading-none text-ink sm:text-5xl md:col-span-4 lg:text-6xl">
                  {group.label}
                </h3>

                <ul className="grid sm:grid-cols-2 md:col-span-8 lg:grid-cols-3">
                  {skills.map((skill) => {
                    const IconComponent =
                      iconMap[skill.icon as keyof typeof iconMap] ?? FaCode;
                    const color = iconColor(skill.color);

                    return (
                      <li
                        key={skill.id}
                        className="flex items-center gap-3 border-t border-trace py-4"
                      >
                        <span
                          className="flex w-8 shrink-0 items-center border-r border-trace pr-3"
                          data-skill-color={skill.color}
                        >
                          <IconComponent
                            aria-hidden="true"
                            focusable="false"
                            className={`h-5 w-5 ${color ? '' : 'text-ink'}`}
                            style={color ? { color } : undefined}
                          />
                        </span>
                        <span className="text-sm font-medium text-ink">{skill.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
