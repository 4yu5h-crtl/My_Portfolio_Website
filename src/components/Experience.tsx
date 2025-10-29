'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    company: 'IS360 Technologies And Services Pvt Ltd',
    role: 'Research And Development Intern',
    period: 'Jul 2024 - Dec 2024',
    description: 'I was involved in research on EEG-based neurofeedback and Slow Cortical Potentials (SCPs) to monitor and enhance attention in ADHD therapy. Developed machine learning models to classify EEG signals and predict attention patterns. Integrated real-time brain-computer interface (BCI) data with robotic systems to boost therapeutic engagement. Implemented advanced data visualization and analysis to track neurophysiological responses and optimize intervention strategies.',
    skills: ['EEG Analysis', 'Machine Learning', 'Python', 'Brainstorm', 'Matlab', 'Team Work'],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              My professional journey in technology and research
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 4 }}
                className="timeline-item"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <h4 className="text-lg text-white/80">{exp.company}</h4>
                  </div>
                  <span className="text-white/60 md:ml-4">{exp.period}</span>
                </div>
                
                <p className="text-white/70 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;