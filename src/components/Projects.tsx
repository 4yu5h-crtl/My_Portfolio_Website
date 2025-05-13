'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const projects = [
  {
    title: 'SmartBot',
    description: 'SMARTBOT is an ESP32-based AI robot with local TinyLlama processing for private voice, text, vision, and gesture control, showcasing edge AI in a compact system.',
    tech: ['ESP32', 'OpenCV', 'Python', 'C++', 'LLMs', 'Natural Language Processing', 'Hardware Prototyping'],
    github: 'https://github.com/4yu5h-crtl/SMARTBOT',
    image: '/projects/smartbot.jpg',
    demo: null,
    ongoing: true
  },
  {
    title: 'Fuel-Aware Navigation',
    description: 'A smart navigation system that optimizes routes based on real-time fuel levels, helping you reach your destination efficiently while avoiding running out of fuel.',
    tech: ['ESP-32', 'Web development', 'API', 'C++', 'Computer Networks'],
    github: 'https://github.com/4yu5h-crtl/Fuel_Aware_Navigation',
    image: '/projects/fuel.png',
    demo: null,
    ongoing: true
  },
  {
    title: 'ESP32-CAM Surveillance Bot',
    description: 'A low-cost, DIY surveillance camera using the ESP32-CAM, designed for real-time monitoring, motion-triggered recording, and seamless remote access.',
    tech: ['ESP32-CAM', 'Embedded Systems Development', 'Hardware Prototyping', 'Computer Vision' , 'IoT'],
    github: 'https://github.com/4yu5h-crtl/ESP32-CAM_Surveillance',
    image: '/projects/surveillance.jpg',
    demo: null,
    ongoing: false
  },
  {
    title: 'Chat_with_pdfs',
    description: 'An intelligent document analysis system that lets you interact with PDFs through natural conversations. By integrating the DeepSeek API and Langchain, this project enables users to extract insights, ask questions, and retrieve specific information from PDF documents in real time',
    tech: ['Prompt Engineering', 'Python', 'Natural Language Processing', 'Streamlit', 'Langchain'],
    github: 'https://github.com/4yu5h-crtl/Chat_with_pdfs',
    image: '/projects/pdf.png',
    demo: null,
    ongoing: false
  },
  {
    title: 'Personalized Fitness Dashboard',
    description: 'an intelligent health monitoring system that leverages Machine Learning to estimate calorie burn, analyze workout trends, and provide tailored fitness recommendations. This project is designed to empower users with real-time data-driven health insights to optimize their fitness journey.',
    tech: ['Regression Modeling', 'Python', 'Data Preprocessing', 'Streamlit'],
    github: 'https://github.com/4yu5h-crtl/Personal_Fitness_Tracker',
    image: '/projects/fitness.jpg',
    demo: null,
    ongoing: false
  },
  {
    title: 'AI-Powered Website Creation Tool',
    description: 'Frontend Builder is an AI-assisted web development platform built to simplify HTML website creation, editing, and deployment. Designed for both beginners and developers, the tool offers a smooth and interactive experience to build static sites using real-time code editing and intelligent assistance.',
    tech: ['Natural Language Processing', 'Python', 'AI Integration', 'Streamlit', 'Web Deployment', 'Creative Problem Solving'],
    github: 'https://github.com/4yu5h-crtl/Frontend_Builder/',
    image: '/projects/front-build.png',
    demo: null,
    ongoing: false
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Showcasing the projects I've worked on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass-card group"
              >
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                  <div className="absolute inset-0 bg-blue-200/5">
                    {/* Placeholder for when image fails to load */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl">🚀</span>
                    </div>
                  </div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    {project.ongoing && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        Ongoing
                      </span>
                    )}
                  </div>
                  <p className="text-white/60 text-sm line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="skill-badge"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                      aria-label={`View ${project.title} source code`}
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors"
                        aria-label={`View ${project.title} demo`}
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 