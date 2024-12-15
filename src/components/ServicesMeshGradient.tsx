"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ServicesMeshGradient() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* الخلفية الأساسية */}
      <div className="absolute inset-0 bg-black" />

      {/* التدرجات اللونية المتحركة */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsla(189,97%,14%,0.4) 0%, transparent 50%)`,
            `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsla(189,97%,14%,0.4) 0%, transparent 50%)`
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />

      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, hsla(189,97%,14%,0.3) 0%, transparent 50%)`,
            `radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, hsla(189,97%,14%,0.3) 0%, transparent 50%)`
          ]
        }}
        transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* تأثيرات الضوء */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-0 w-full h-full transform"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, hsla(189,97%,14%,0.4) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, hsla(189,97%,14%,0.3) 0%, transparent 50%)
            `,
            filter: 'blur(40px)'
          }}
        />
      </div>

      {/* نقطة تتبع الماوس */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-4 h-4 rounded-full blur-xl"
          style={{
            background: 'hsla(189,97%,14%,0.4)',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.2s ease-out'
          }}
        />
      </div>
    </div>
  );
}
