"use client";
import {
  easeInOut,
  easeOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";

export default function HeroSection() {
  const handWaveAnimation = {
    rotate: [0, 15, -10, 15, -10, 15, -10, 15, -10, 15, 0],
    transition: {
      duration: 1.5,
      ease: easeInOut,
    },
  };

  const animateIn1 = {
    opacity: [0, 1],
    y: ["1rem", "0px"],
    transition: {
      delay: 1.5,
      duration: 0.7,
      ease: easeOut,
    },
  };

  const animateIn2 = {
    ...animateIn1,
    transition: {
      ...animateIn1.transition,
      delay: 2,
    },
  };

  const animateIn3 = {
    ...animateIn1,
    transition: {
      ...animateIn1.transition,
      delay: 2.4,
    },
  };

  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
  });

  const { ref, inView } = useInView({
    threshold: 0.4,
    rootMargin: "-100px 0px",
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-15deg"]);

  return (
    <section
      ref={ref}
      className="pt-24 pb-12 lg:py-32"
      id="home"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row min-h-[70vh] items-center lg:justify-between">
      <div className="text w-full sm:w-4/5 text-center lg:text-start lg:w-[55%] flex flex-col gap-4 lg:gap-6 mb-6 lg:mb-0">
        <div className="flex flex-col gap-3">
          <motion.div
            className="flex gap-2 mx-auto lg:mx-0 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <p className="text-white/60 text-lg sm:text-xl lg:text-2xl">
              Hey, there
            </p>
            <motion.div
              animate={handWaveAnimation}
              style={{ transformOrigin: "bottom right" }}
            >
              <span className="text-xl sm:text-2xl lg:text-3xl">👋</span>
            </motion.div>
          </motion.div>
          <motion.h1
            className="text-[28px] sm:text-[32px] md:text-4xl lg:text-5xl leading-tight font-bold"
            initial={{ opacity: 0 }}
            animate={animateIn1}
          >
            <span className="text-white/60">I&apos;m </span>
            <span className="bg-gradient-to-r from-[#007BFF] to-[#0056b3] bg-clip-text text-transparent block sm:inline">
              Ayush Chintalwar
            </span>
            <span className="block mt-1 sm:mt-0 sm:inline"> <br></br>IoT Innovator & <br></br>GenAI Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={animateIn2}
            className="text-white/40 text-base sm:text-lg lg:text-xl my-2"
          >
            Passionate about using technology to solve real-world problems and build smart systems.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={animateIn3}
          className="flex gap-5 w-fit mx-auto lg:mx-0 mt-2"
        >
          {[
            { icon: "github", href: "https://github.com/4yu5h-crtl", label: "GitHub" },
            { icon: "linkedin", href: "https://www.linkedin.com/in/ayush-chintalwar-18b9b1259/", label: "LinkedIn" },
            { icon: "kaggle", href: "https://www.kaggle.com/ayush1364", label: "Kaggle" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9E9E9E] hover:text-[#BDBDBD] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              data-blobity-tooltip={social.label}
              aria-label={social.label}
            >
              {social.icon === "github" && <FaGithub className="w-7 h-7" />}
              {social.icon === "linkedin" && <FaLinkedin className="w-7 h-7" />}
              {social.icon === "kaggle" && <SiKaggle className="w-7 h-7" />}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* IMAGE */}
      <div className="mt-10 lg:mt-0 lg:-translate-x-20">
        <motion.div
          ref={imgRef}
          // style={{
          //   rotate: rotate,
          // }}
          className="h-image flex items-center w-[260px] h-[320px] sm:w-[280px] sm:h-[340px] lg:w-[320px] lg:h-[380px] xl:w-[360px] xl:h-[420px] justify-center relative"
          initial={{ opacity: 0 }}
          animate={animateIn1}
        >
          <Image
            src="/hero-image.png"
            priority
            fill
            alt="Ayush's picture"
            className="object-cover rounded-xl"
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 420px"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#007BFF]/20 via-transparent to-[#007BFF]/10 rounded-xl" />
        </motion.div>
      </div>
      </div>
    </section>
  );
}