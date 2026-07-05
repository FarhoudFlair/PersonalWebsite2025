'use client';

import { motion } from 'framer-motion';
import {
  FaJs, FaPython, FaJava, FaSwift, FaApple, FaReact, FaHtml5, FaCss3Alt,
  FaAndroid, FaDatabase, FaNetworkWired, FaCogs, FaCode, FaShieldAlt,
  FaGitAlt, FaDocker, FaLinux, FaMagic, FaRobot, FaEdit, FaProjectDiagram,
} from 'react-icons/fa';
import {
  SiTypescript, SiCsharp, SiCplusplus, SiC, SiPerl, SiNextdotjs,
  SiDotnet, SiMysql, SiPerforce, SiOpenai,
} from 'react-icons/si';
import { siteData } from '@/data/siteData';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { staggerContainer } from '@/utils/motionVariants';

export default function SkillsSection() {
  const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
    FaJs, FaPython, FaJava, FaSwift, FaApple, FaReact, FaHtml5, FaCss3Alt,
    FaAndroid, FaDatabase, FaNetworkWired, FaCogs, FaCode, FaShieldAlt,
    FaGitAlt, FaDocker, FaLinux, FaMagic, FaRobot, FaEdit, FaProjectDiagram,
    SiTypescript, SiCsharp, SiCplusplus, SiC, SiPerl, SiNextdotjs,
    SiDotnet, SiMysql, SiPerforce, SiOpenai,
  };

  const skillCategories = [
    {
      name: 'Languages',
      value: 'languages',
      icon: '💻',
      description: 'Programming languages I work in',
    },
    {
      name: 'Frontend & Mobile',
      value: 'frontend-mobile',
      icon: '🎨',
      description: 'Building interfaces for web and mobile',
    },
    {
      name: 'Backend & Systems',
      value: 'backend-systems',
      icon: '⚙️',
      description: 'Server-side, data, networking, and security',
    },
    {
      name: 'Tools & DevOps',
      value: 'tools',
      icon: '🛠️',
      description: 'Development tooling and infrastructure',
    },
    {
      name: 'AI & Automation',
      value: 'ai',
      icon: '🤖',
      description: 'AI-assisted development and workflow automation',
    },
  ];

  // Brand colors are used to tint each icon. Pure black/white logos (e.g. Next.js)
  // would vanish on one of the two themes, so fall back to a theme-adaptive gray.
  const brandColor = (color?: string): string | undefined => {
    if (!color) return undefined;
    const v = color.toLowerCase();
    if (v === '#000' || v === '#000000' || v === '#fff' || v === '#ffffff') return undefined;
    return color;
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="section-padding bg-background-light dark:bg-background-dark">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
              The tools and technologies I use to bring ideas to life.
            </p>
          </div>
        </ScrollReveal>

        {/* Skills by Category */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => {
            const categorySkills = siteData.skills.filter(skill => skill.category === category.value);

            if (categorySkills.length === 0) return null;

            return (
              <ScrollReveal key={category.value} delay={categoryIndex * 0.1}>
                <div>
                  {/* Category Header */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                    className="flex items-center mb-8"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{category.icon}</div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-text-primary-light dark:text-text-primary-dark">
                          {category.name}
                        </h3>
                        <p className="text-text-secondary-light dark:text-text-secondary-dark">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Skills Grid */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
                  >
                    {categorySkills.map((skill) => {
                      const IconComponent = iconMap[skill.icon];
                      const color = brandColor(skill.color);

                      return (
                        <motion.div
                          key={skill.id}
                          variants={skillVariants}
                          whileHover={{ y: -6, transition: { duration: 0.2 } }}
                          className="group flex flex-col items-center justify-center gap-3 bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300"
                        >
                          <div className="flex items-center justify-center w-14 h-14 bg-gray-50 dark:bg-gray-800 rounded-xl group-hover:scale-110 transition-transform duration-300">
                            {IconComponent ? (
                              <IconComponent
                                size={30}
                                className={color ? '' : 'text-gray-700 dark:text-gray-200'}
                                style={color ? { color } : undefined}
                              />
                            ) : (
                              <FaCode size={30} className="text-gray-400" />
                            )}
                          </div>
                          <span className="text-sm font-medium text-center text-text-primary-light dark:text-text-primary-dark">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Skills Summary */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900 dark:to-purple-900 rounded-2xl p-8 border border-primary-100 dark:border-primary-800">
              <h3 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                Always Learning
              </h3>
              <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto mb-6">
                Technology evolves rapidly, and I&apos;m committed to staying current with the latest tools and best practices across the stack.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['React 18', 'Next.js 14', 'TypeScript 5', 'Tailwind CSS', '.NET', 'AI-Assisted Dev'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-3 py-1 bg-white dark:bg-gray-800 text-text-primary-light dark:text-text-primary-dark rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
