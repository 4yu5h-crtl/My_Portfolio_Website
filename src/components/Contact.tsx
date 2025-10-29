'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Let's collaborate on something amazing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="glass-card p-8 space-y-6"
            >
              <h3 className="text-2xl font-bold">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-blue-400 w-5 h-5" />
                  <div>
                    <p className="text-sm text-white/60">Email</p>
                    <a 
                      href="mailto:ayush.chintalwar1234@gmail.com"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      ayush.chintalwar1234@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-blue-400 w-5 h-5" />
                  <div>
                    <p className="text-sm text-white/60">Location</p>
                    <p className="text-white">Pune, Maharashtra, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <FaClock className="text-blue-400 w-5 h-5" />
                  <div>
                    <p className="text-sm text-white/60">Availability</p>
                    <p className="text-white">Open to new opportunities</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="glass-card p-8 flex items-center justify-center"
            >
              <img
                src="/contact-gif.gif"
                alt="Contact GIF"
                className="rounded-xl object-cover w-full h-56 sm:h-72 md:h-80"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;