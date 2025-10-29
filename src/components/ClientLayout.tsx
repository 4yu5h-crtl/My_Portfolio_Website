'use client';

import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Blobity from 'blobity';
import { initialBlobityOptions } from '../../utils/blobity.config';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const instance: any = new Blobity(initialBlobityOptions);
    return () => {
      if (instance && typeof instance.destroy === 'function') {
        instance.destroy();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] via-[#0a0a0a] to-[#050505] text-white">
      <AnimatePresence mode="wait">
        {children}
      </AnimatePresence>
    </div>
  );
}