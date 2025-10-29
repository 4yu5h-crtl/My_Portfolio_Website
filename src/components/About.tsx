'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRobot, FaCode, FaBrain } from 'react-icons/fa';

const skills = [
  {
    icon: <FaRobot className="w-8 h-8 text-blue-400" />,
    title: 'Embedded Systems & Automation',
    description: 'Building smart devices with microcontrollers and sensors for real-time control.',
    technologies: ['ESP32', 'Arduino', 'C++', 'ROS', 'Sensor Integration', 'Hardware Design']
  },
  {
    icon: <FaCode className="w-8 h-8 text-blue-400" />,
    title: 'Generative AI',
    description: 'Developing AI models that generate text, images, and more from prompts.',
    technologies: ['Prompt Engineering', 'LangChain', 'RAG', 'Vibe-Coding', 'Stable Diffusion']
  },
  {
    icon: <FaBrain className="w-8 h-8 text-blue-400" />,
    title: 'AI & Machine Learning',
    description: 'Creating models that learn from data to make intelligent decisions.',
    technologies: ['Python', 'ML Algorithms', 'Computer Vision', 'Ensemble Methods']
  }
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
            I'm a tech enthusiast deeply interested in embedded systems, generative AI, and prompt engineering. I enjoy exploring how technology can solve real-world problems, from building intelligent machines to enhancing user experiences on the web.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
                View Resume
              </a>
              {/* <a href="/resume.pdf" download className="btn-secondary">
                Download Resume
              </a> */}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="glass-card p-8 space-y-4"
            >
              <h3 className="text-xl font-bold">What Drives Me</h3>
              <p className="text-white/70 leading-relaxed">
              I believe technology has the power to create meaningful change. Whether it's developing smarter embedded systems or crafting efficient web applications, I'm driven by the challenge of pushing boundaries and making impactful contributions through innovation and research.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass-card p-8 space-y-4"
              >
                <div className="flex items-center space-x-3">
                  {skill.icon}
                  <h3 className="text-xl font-bold">{skill.title}</h3>
                </div>
                <p className="text-white/70">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="skill-badge"
                    >
                      {tech}
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

export default About;