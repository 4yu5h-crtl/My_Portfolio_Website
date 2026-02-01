'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'SmartBot',
    description: 'SMARTBOT is an ESP32-based AI robot with local TinyLlama processing for private voice, text, vision, and gesture control, showcasing edge AI in a compact system.',
    tech: ['ESP32', 'OpenCV', 'Python', 'C++', 'LLMs', 'Natural Language Processing'],
    github: 'https://github.com/4yu5h-crtl/SMARTBOT',
    image: '/projects/smartbot.jpg',
    demo: null,
    ongoing: false
  },
  {
    title: 'Fuel-Aware Navigation',
    description: 'A smart navigation system that optimizes routes based on real-time fuel levels, helping you reach your destination efficiently while avoiding running out of fuel.',
    tech: ['ESP-32', 'Web development', 'API', 'C++', 'Computer Networks'],
    github: 'https://github.com/4yu5h-crtl/Fuel_Aware_Navigation',
    image: '/projects/fuel.png',
    demo: null,
    ongoing: false
  },
  {
    title: 'ESP32-CAM Surveillance Bot',
    description: 'A low-cost, DIY surveillance camera using the ESP32-CAM, designed for real-time monitoring, motion-triggered recording, and seamless remote access.',
    tech: ['ESP32-CAM', 'Embedded Systems', 'Hardware Prototyping', 'Computer Vision', 'IoT'],
    github: 'https://github.com/4yu5h-crtl/ESP32-CAM_Surveillance',
    image: '/projects/surveillance.jpg',
    demo: null,
    ongoing: false
  },
  {
    title: 'Chat with PDFs',
    description: 'An intelligent document analysis system that lets you interact with PDFs through natural conversations. By integrating the DeepSeek API and Langchain, this project enables users to extract insights, ask questions, and retrieve specific information from PDF documents in real time.',
    tech: ['Prompt Engineering', 'Python', 'NLP', 'Streamlit', 'Langchain'],
    github: 'https://github.com/4yu5h-crtl/Chat_with_pdfs',
    image: '/projects/pdf.png',
    demo: null,
    ongoing: false
  },
  {
    title: 'AI-Powered Website Creation Tool',
    description: 'Frontend Builder is an AI-assisted web development platform built to simplify HTML website creation, editing, and deployment. Designed for both beginners and developers, the tool offers a smooth and interactive experience to build static sites using real-time code editing and intelligent assistance.',
    tech: ['NLP', 'Python', 'AI Integration', 'Streamlit', 'Web Deployment'],
    github: 'https://github.com/4yu5h-crtl/Frontend_Builder/',
    image: '/projects/front-build.png',
    demo: null,
    ongoing: false
  },
];

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  return (
    <section 
      id="projects" 
      className="flex flex-col gap-6 md:gap-10 pt-[110px] px-4 md:px-8"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Projects</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Showcasing the projects I've worked on.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tech={project.tech}
                github={project.github}
                image={project.image}
                demo={project.demo}
                ongoing={project.ongoing}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default Projects;
