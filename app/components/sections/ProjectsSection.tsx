'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaStar, FaClock, FaCheckCircle } from 'react-icons/fa';
import { siteData } from '@/data/siteData';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { staggerContainer } from '@/utils/motionVariants';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'featured' | 'all'>('featured');

  const statusIcons = {
    completed: FaCheckCircle,
    'in-progress': FaClock,
    concept: FaStar,
  };

  const statusColors = {
    completed: 'text-green-500',
    'in-progress': 'text-yellow-500',
    concept: 'text-blue-500',
  };

  const filteredProjects = siteData.projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    return true;
  });

  const projectVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
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

  const overlayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="projects" className="section-padding bg-surface-light dark:bg-surface-dark">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
              Projects
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
              A showcase of my recent work and personal projects that demonstrate my skills and passion for development.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { key: 'featured', label: 'Featured' },
              { key: 'all', label: 'All Projects' },
            ].map((filterOption) => (
              <Button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key as any)}
                variant={filter === filterOption.key ? 'primary' : 'outline'}
                size="sm"
                className="transition-all duration-300"
              >
                {filterOption.label}
              </Button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <motion.div
          layout
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => {
            const StatusIcon = statusIcons[project.status];
            
            return (
              <motion.div
                key={project.id}
                layout
                variants={projectVariants}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <Card variant="elevated" className="h-full overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 overflow-hidden">
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20">🚀</div>
                    </div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge variant="default" size="sm" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                          <FaStar className="mr-1" size={12} />
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant="outline" 
                        size="sm"
                        className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm"
                      >
                        <StatusIcon className={`mr-1 ${statusColors[project.status]}`} size={12} />
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
                      </Badge>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      initial="hidden"
                      whileHover="visible"
                      variants={overlayVariants}
                      className="absolute inset-0 bg-black/60 flex items-center justify-center"
                    >
                      <div className="flex space-x-4">
                        {project.liveUrl && (
                          <Button
                            onClick={() => window.open(project.liveUrl, '_blank')}
                            size="sm"
                            className="bg-white text-black hover:bg-gray-100"
                          >
                            <FaExternalLinkAlt className="mr-2" size={14} />
                            Live Demo
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            onClick={() => window.open(project.githubUrl, '_blank')}
                            variant="outline"
                            size="sm"
                            className="bg-transparent border-white text-white hover:bg-white hover:text-black"
                          >
                            <FaGithub className="mr-2" size={14} />
                            Code
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    {/* Project Title and Description */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Project Highlights */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {project.highlights.slice(0, 2).map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start space-x-2 text-xs text-text-secondary-light dark:text-text-secondary-dark">
                            <span className="w-1 h-1 bg-primary-500 rounded-full mt-1.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                        {project.highlights.length > 2 && (
                          <li className="text-xs text-primary-600 dark:text-primary-400">
                            +{project.highlights.length - 2} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" size="sm" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" size="sm" className="text-xs">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Project Timeline */}
                    <div className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                      {project.startDate} {project.endDate && `- ${project.endDate}`}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">
              No projects found
            </h3>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              Try adjusting your filter to see more projects.
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <ScrollReveal delay={0.6}>
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
              Have a project in mind?
            </h3>
            <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark mb-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together to bring your ideas to life.
            </p>
            <Button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              size="lg"
              className="min-w-[200px]"
            >
              Let's Talk
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
} 