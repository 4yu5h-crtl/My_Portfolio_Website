'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const scale = useMotionValue(1);
  
  // Create multiple trailing dots for fluid effect
  const trailDots = Array.from({ length: 5 }).map((_, i) => {
    const delay = (i + 1) * 0.05;
    return {
      x: useSpring(mouseX, {
        damping: 20 - i * 1.5,
        stiffness: 200 - i * 20,
        mass: 0.2 + i * 0.3,
      }),
      y: useSpring(mouseY, {
        damping: 20 - i * 1.5,
        stiffness: 200 - i * 20,
        mass: 0.2 + i * 0.3,
      }),
      scale: useTransform(scale, [0, 1], [0.2, 0.6 - i * 0.1]),
      opacity: useTransform(scale, [0, 1], [0.6, 0.2 - i * 0.03]),
    };
  });

  // Main cursor spring configuration
  const springConfig = { 
    damping: 35,
    stiffness: 350,
    mass: 0.5
  };

  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  const cursorScale = useSpring(scale, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hover-target')
      ) {
        scale.set(1.5);
        document.documentElement.classList.add('cursor-hover');
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hover-target')
      ) {
        scale.set(1);
        document.documentElement.classList.remove('cursor-hover');
      }
    };

    const handleMouseDown = () => scale.set(0.9);
    const handleMouseUp = () => scale.set(1);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY, scale]);

  return (
    <>
      {/* Trailing dots */}
      {trailDots.map((dot, index) => (
        <motion.div
          key={index}
          className="pointer-events-none fixed z-50 h-2 w-2 rounded-full bg-blue-200/40 mix-blend-difference"
          style={{
            x: dot.x,
            y: dot.y,
            scale: dot.scale,
            opacity: dot.opacity,
          }}
        />
      ))}

      {/* Main cursor ring */}
      <motion.div
        ref={cursorRef}
        className="cursor-ring pointer-events-none fixed z-50 h-8 w-8 rounded-full border-2 border-blue-200/50 mix-blend-difference backdrop-blur-sm"
        style={{
          x: cursorX,
          y: cursorY,
          scale: cursorScale,
        }}
      />

      {/* Main cursor dot */}
      <motion.div
        ref={cursorDotRef}
        className="cursor-dot pointer-events-none fixed z-50 h-2 w-2 rounded-full bg-blue-200/80 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          scale: useTransform(cursorScale, [0, 1], [0.5, 0.8]),
        }}
      />
    </>
  );
};

export default CustomCursor; 