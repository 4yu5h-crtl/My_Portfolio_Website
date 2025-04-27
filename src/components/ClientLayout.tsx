'use client';

import { AnimatePresence } from 'framer-motion';
import CustomCursor from './CustomCursor';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] via-[#0a0a0a] to-[#050505] text-white">
      <CustomCursor />
      <AnimatePresence mode="wait">
        {children}
      </AnimatePresence>
    </div>
  );
} 