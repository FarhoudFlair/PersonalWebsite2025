'use client';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { siteData } from '@/data/siteData';
import Badge from '@/components/ui/Badge';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { slideUpVariants, staggerContainer } from '@/utils/motionVariants';

export default function ExperienceSection() {
  const { ref: timelineRef, inView: timelineInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const formatDate = (dateString: string) => {
    if (dateString === 'Present') return 'Present';
    const [year, month] = dateString.split('-');
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };



  return (
    <section id="experience" className="section-padding bg-surface-light dark:bg-surface-dark">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
              Professional Experience
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
              My journey through various roles and the impact I've made along the way.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={timelineInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-purple-500 transform -translate-x-1/2 origin-top"
          />

          {/* Timeline Items */}
          <motion.div
            initial="hidden"
            animate={timelineInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="space-y-12 md:space-y-16"
          >
            {siteData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={slideUpVariants}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={timelineInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                  className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 transform -translate-x-1/2 z-10"
                  style={{ top: '2rem' }}
                />

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-10 mr-4 md:mx-0 ${ // Adjusted margins for mobile
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Company and Role */}
                    <div className="mb-4">
                      {/* Changed to flex-wrap and gap for better alignment */}
                      <div className="flex flex-wrap items-center gap-x-3 mb-2">
                        <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
                          {exp.role}
                        </h3>
                        {/* <Badge variant="outline" size="sm" className="whitespace-nowrap">
                          {exp.type}
                        </Badge> */}
                      </div>

                      {/* Company Link */}
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                          {exp.company}
                        </h4>
                        {exp.companyUrl && (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-500 hover:text-primary-600 transition-colors"
                          >
                            <FaExternalLinkAlt size={14} />
                          </a>
                        )}
                      </div>

                      {/* Date and Location */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                        <div className="flex items-center space-x-1">
                          <FaCalendarAlt size={12} />
                          <span>
                            {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaMapMarkerAlt size={12} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: index * 0.2 + achIndex * 0.1 + 0.7 }}
                            className="flex items-start space-x-2 text-sm text-text-secondary-light dark:text-text-secondary-dark"
                          >
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">
                        Technologies:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={timelineInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: index * 0.2 + techIndex * 0.05 + 1.2 }}
                          >
                            <Badge variant="secondary" size="sm">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-2/12" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <ScrollReveal delay={0.8}>
          <div className="text-center mt-16">
            <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark mb-6">
              Interested in working together?
            </p>
            <motion.a
              href={siteData.personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              <span>Download Full Resume</span>
              <FaExternalLinkAlt size={16} />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
} 