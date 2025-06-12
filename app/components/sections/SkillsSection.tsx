'use client';

import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaAws 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiFigma 
} from 'react-icons/si';
import { siteData } from '@/data/siteData';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { staggerContainer } from '@/utils/motionVariants';

export default function SkillsSection() {
  const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    FaReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    FaNodeJs,
    FaPython,
    SiPostgresql,
    FaGitAlt,
    FaDocker,
    FaAws,
    SiFigma,
  };

  const skillCategories = [
    {
      name: 'Frontend',
      value: 'frontend',
      icon: '🎨',
      description: 'Building beautiful and interactive user interfaces',
    },
    {
      name: 'Backend',
      value: 'backend',
      icon: '⚙️',
      description: 'Server-side development and APIs',
    },
    {
      name: 'Tools',
      value: 'tools',
      icon: '🛠️',
      description: 'Development tools and infrastructure',
    },
    {
      name: 'Design',
      value: 'design',
      icon: '🎯',
      description: 'UI/UX design and prototyping',
    },
  ];

  const getProficiencyWidth = (level: number) => {
    return `${(level / 5) * 100}%`;
  };

  const getProficiencyColor = (level: number) => {
    if (level >= 4) return 'bg-green-500';
    if (level >= 3) return 'bg-blue-500';
    if (level >= 2) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
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
              <ScrollReveal key={category.value} delay={categoryIndex * 0.2}>
                <div>
                  {/* Category Header */}
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
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
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  >
                    {categorySkills.map((skill, skillIndex) => {
                      const IconComponent = iconMap[skill.icon];
                      
                      return (
                        <motion.div
                          key={skill.id}
                          variants={skillVariants}
                          whileHover={{ 
                            y: -8, 
                            scale: 1.05,
                            transition: { duration: 0.2 }
                          }}
                          className="group relative bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                          {/* Skill Icon */}
                          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-50 dark:bg-gray-800 rounded-lg group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-colors">
                            {IconComponent ? (
                              <IconComponent 
                                size={32} 
                                className="text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                              />
                            ) : (
                              <div 
                                className="w-8 h-8 bg-primary-500 rounded" 
                              />
                            )}
                          </div>

                          {/* Skill Name */}
                          <h4 className="text-lg font-semibold text-center text-text-primary-light dark:text-text-primary-dark mb-3">
                            {skill.name}
                          </h4>

                          {/* Proficiency Bar */}
                          <div className="space-y-2">
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-text-secondary-light dark:text-text-secondary-dark">
                                Proficiency
                              </span>
                              <span className="text-text-primary-light dark:text-text-primary-dark font-medium">
                                {skill.proficiency}/5
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: getProficiencyWidth(skill.proficiency) }}
                                transition={{ 
                                  duration: 1, 
                                  delay: categoryIndex * 0.2 + skillIndex * 0.1,
                                  ease: 'easeOut'
                                }}
                                className={`h-full rounded-full ${getProficiencyColor(skill.proficiency)}`}
                              />
                            </div>
                          </div>

                          {/* Hover Overlay */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 rounded-xl pointer-events-none"
                          />
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
        <ScrollReveal delay={0.6}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900 dark:to-purple-900 rounded-2xl p-8 border border-primary-100 dark:border-primary-800">
              <h3 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                Always Learning
              </h3>
              <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto mb-6">
                Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices in web development.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['React 18', 'Next.js 14', 'TypeScript 5', 'Tailwind CSS 3', 'Node.js', 'PostgreSQL'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
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