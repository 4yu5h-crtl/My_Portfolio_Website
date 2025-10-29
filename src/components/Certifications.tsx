'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const certifications = [
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle',
    date: 'October 2025',
    credentialUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=F30A97FE2E59F11799E83F304758CFCC3067EC49E8585CDE3887BC2FA8627DAD',
    description: 'A comprehensive program covering LLM fundamentals, OCI Generative AI deep-dive, and hands-on chatbot development using LangChain, RAG, and OCI deployment.',
    skills: ['Generative AI', 'Langchain', 'Oracle Cloud Interface', 'LLMops', 'RAG'],
    image: '/certifications/oraclegenai.jpg', 
  },
  {
    name: 'IBM Machine Learning Professional Certificate',
    issuer: 'IBM',
    date: 'May 2025',
    credentialUrl: 'https://coursera.org/verify/professional-cert/NGICRIOWHBIN',
    description: 'Comprehensive course covering supervised learning, unsupervised learning, and deep learning techniques. Implemented algorithms from scratch and used popular ML libraries.',
    skills: ['Machine Learning', 'Python', 'Classification And Regression Tree', 'Algorithms', 'Reinforcement Learning', 'Statistical Inference', 'Deep Learning', 'Exploratory Data Analysis', ],
    image: '/certifications/ibmml.jpg', 
  },
  {
    name: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy',
    date: 'May 2025',
    credentialUrl: 'https://www.credly.com/go/NEMwhbKJ',
    description: 'An introductory course providing foundational knowledge of AWS cloud concepts, services, and infrastructure.',
    skills: ['AWS', 'EC2', 'VPC', 'EBS'],
    image: '/certifications/cf.png', 
  },
  {
    name: 'Develop GenAI Apps with Gemini and Streamlit',
    issuer: 'AWS Academy',
    date: 'April 2025',
    credentialUrl: 'https://www.cloudskillsboost.google/public_profiles/fc3b686c-6a4b-48ff-836c-346811d07391/badges/15640641',
    description: 'Intermediate course on text generation with Gemini, function calling via Python SDK, and deploying Streamlit apps using Docker and Cloud Run.',
    skills: ['Gemini', 'Python', 'Vertex Ai', 'Generative AI', 'Streamlit', 'Application Development'],
    image: '/certifications/streamlit.png', 
  },
  {
    name: 'Explore Generative AI with the Gemini API in Vertex AI',
    issuer: 'Google Cloud',
    date: 'April 2025',
    credentialUrl: 'https://www.cloudskillsboost.google/public_profiles/fc3b686c-6a4b-48ff-836c-346811d07391/badges/15013534',
    description: 'Intermediate-level course exploring Gemini API for text generation, multimodal content creation, and function calling to enhance AI-powered applications.',
    skills: ['Gemini', 'Python', 'Vertex Ai', 'Generative AI'],
    image: '/certifications/vergemini.png', 
  },
  {
    name: 'Build Real World AI Applications with Gemini and Imagen',
    issuer: 'Google Cloud',
    date: 'April 2025',
    credentialUrl: 'https://www.cloudskillsboost.google/public_profiles/fc3b686c-6a4b-48ff-836c-346811d07391/badges/14964510',
    description: 'Introductory course covering image recognition, NLP, and image generation using Gemini and Imagen, with app deployment on Vertex AI.',
    skills: ['Gemini', 'Imagen', 'Python', 'Vertex Ai', 'Generative AI'],
    image: '/certifications/imagemini.png', 
  },
  {
    name: 'Fundamentals of AI Agents Using RAG and LangChain',
    issuer: 'IBM',
    date: 'March 2025',
    credentialUrl: 'https://coursera.org/verify/7EYKIOQHGZVR',
    description: 'A course introducing retrieval-augmented generation (RAG) and LangChain for building AI agents and chatbots.',
    skills: ['Retrieval augmented generation (RAG)', 'In-context learning', 'prompt engineering', 'LangChain', 'Chatbots'],
    image: '/certifications/raglangchain.jpeg', 
  },
  {
    name: 'Generative AI Learning Plan For Developers',
    issuer: 'AWS',
    date: 'February 2025',
    credentialUrl: '',
    description: 'A learning plan focusing on developing generative AI applications using AWS Bedrock, Python, and prompt engineering techniques.',
    skills: ['AWS Bedrock', 'Python', 'Prompt Engineering', 'GenAi application on AWS', 'Generative AI'],
    image: '/certifications/awsgenai.jpg', 
  },
  {
    name: 'GenAI	Job	Simulation',
    issuer: 'BCG X',
    date: 'February 2025',
    credentialUrl: '',
    description: 'A simulation-based experience in chatbot development, data extraction, analysis, and generative AI applications.',
    skills: ['Chatbot Development', 'Python', ' Data Extraction', 'Analysis', 'Generative AI'],
    image: '/certifications/bcggenai.jpg', 
  },
  {
    name: 'Promptly for Beginners: Build a Generative AI App',
    issuer: 'Coursera Project Network',
    date: 'November 2024',
    credentialUrl: 'https://coursera.org/verify/827EXW4NGBHS',
    description: 'A guided project teaching the basics of building and deploying a generative AI app using Promptly.',
    skills: ['Automation', 'Generative AI', 'Workflow', 'AI Application'],
    image: '/certifications/promptly.jpeg', 
  },
  {
    name: 'Python and Statistics for Financial Analysis',
    issuer: 'The Hong Kong University of Science and Technology',
    date: 'August 2024',
    credentialUrl: 'https://coursera.org/verify/9PT3WYA3H9OW',
    description: 'A course combining Python programming and statistical techniques for financial data analysis and visualization.',
    skills: ['Python', 'Statistics', 'Financial Analysis', 'Data Visualization', 'General Statistics', 'Probability', 'Finance'],
    image: '/certifications/pyfinan.jpeg', 
  },
  {
    name: 'Generative AI: Prompt Engineering Basics',
    issuer: 'IBM',
    date: 'July 2024',
    credentialUrl: 'https://coursera.org/verify/BSTT2L3TXAAP',
    description: 'An introductory course on prompt engineering techniques and best practices for generative AI models.',
    skills: ['Generative AI', 'Prompt Engineering', 'prompt patterns', 'prompt engineering techniques',],
    image: '/certifications/promptengbas.jpeg', 
  },
  {
    name: 'ROBO AI',
    issuer: 'My Equation',
    date: 'March 2024',
    credentialUrl: '',
    description: 'A program covering 3D modeling, robotics, AI integration, ROS-2, Gazebo simulation, and embedded systems.',
    skills: ['3D Modelling', 'Robotics', 'AI', 'ROS-2', 'Gazebo', 'Circuit Design', 'Embedded Systems',],
    image: '/certifications/roboai.jpg', 
  },
  {
    name: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    date: 'January 2024',
    credentialUrl: 'https://coursera.org/verify/9UKSVM9B3GGS',
    description: 'A beginner-level course explaining the fundamentals of generative AI, its applications, and how it differs from traditional machine learning.',
    skills: [],
    image: '/certifications/introgenai.jpeg', 
  },
];

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certifications" className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Professional certifications and qualifications I've earned
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                    <h4 className="text-lg text-white/80">{cert.issuer}</h4>
                    <p className="text-white/60 text-sm">{cert.date}</p>
                  </div>
                  
                  <p className="text-white/70 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="skill-badge text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {!!cert.credentialUrl && (
                    <a 
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-[#007BFF] hover:text-[#0056b3] transition-colors text-sm font-medium"
                      aria-label={`View certificate for ${cert.name}`}
                    >
                      View Certificate →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;