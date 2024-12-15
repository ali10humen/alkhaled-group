"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function MeshGradient() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden bg-black" />
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear"
        }}
        style={{
          backgroundColor: 'hsla(0,0%,0%,1)',
          backgroundImage: `
            radial-gradient(at 5% 3%, hsla(25,100%,22%,1) 0px, transparent 50%),
            radial-gradient(at 92% 80%, hsla(189,97%,14%,1) 0px, transparent 50%)
          `,
          backgroundSize: '200% 200%'
        }}
      />
    </div>
  );
}