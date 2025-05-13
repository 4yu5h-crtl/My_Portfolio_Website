'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaKaggle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Image from 'next/image';

interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/4yu5h-crtl',
    icon: <FaGithub size={24} />
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ayush-chintalwar-18b9b1259/',
    icon: <FaLinkedin size={24} />
  },
  {
    name: 'Kaggle',
    url: 'https://www.kaggle.com/ayush1364',
    icon: <FaKaggle size={24} />
  }  
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <motion.h1 
                  {...fadeInUp}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                >
                  Hey, there{' '}
                  <span className="wave inline-block">👋</span>
                </motion.h1>
                
                <motion.div 
                  {...fadeInUp}
                  transition={{ delay: 0.2 }}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold h-[60px] md:h-[80px] relative"
                >
                  <TypeAnimation
                    sequence={[
                      "I'm Ayush Chintalwar.",
                      1500,
                      'I like to build smart systems.',
                      1500,
                      'Innovating with tech.',
                      1500,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ 
                      display: 'inline-block',
                      background: 'linear-gradient(to right, #007BFF, #0056b3)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                    speed={{ type: 'keyStrokeDelayInMs', value: 75 }}
                    deletionSpeed={{ type: 'keyStrokeDelayInMs', value: 65 }}
                    omitDeletionAnimation={false}
                    preRenderFirstString={true}
                  />
                  <div 
                    className="absolute inset-0 -z-10 opacity-20 blur-xl"
                    style={{
                      background: 'linear-gradient(to right, #007BFF, #0056b3)',
                    }}
                  />
                </motion.div>

                <motion.p 
                  {...fadeInUp}
                  transition={{ delay: 0.3 }}
                  className="text-lg md:text-xl text-[#9E9E9E] mt-2"
                >
                  A Robotics & AI Enthusiast, Passionate about using tech to solve problems.
                </motion.p>
              </div>

              {/* Social Links */}
              <motion.div 
                {...fadeInUp}
                transition={{ delay: 0.4 }}
                className="flex gap-6"
              >
                {[
                  { icon: FaGithub, href: 'https://github.com/4yu5h-crtl' },
                  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ayush-chintalwar-18b9b1259/' },
                  { icon: FaKaggle, href: 'https://www.kaggle.com/ayush1364' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9E9E9E] hover:text-[#007BFF] transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square max-w-[400px] w-full hidden md:block justify-self-end"
            >
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <Image
                  src="/hero-image.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#007BFF]/20 via-transparent to-[#007BFF]/10 rounded-xl" />
              </div>
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#007BFF]/20 to-[#007BFF]/10 blur-xl opacity-50 -z-10" />
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#007BFF]/10 to-[#007BFF]/5 blur-2xl opacity-30 -z-20" />
            </motion.div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] bg-[#007BFF]/10 rounded-full filter blur-3xl -top-20 -left-20 animate-pulse" />
          <div className="absolute w-[400px] h-[400px] bg-[#007BFF]/5 rounded-full filter blur-3xl -bottom-20 -right-20 animate-pulse" />
        </div>
      </section>

      <About />
      <Projects />
      <Certifications />
      <Experience />
      <Contact />
    </main>
  );
} 