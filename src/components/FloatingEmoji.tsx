'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FloatingEmojiProps {
  emoji: string;
  initialX: number;
  initialY: number;
}

const FloatingEmoji: React.FC<FloatingEmojiProps> = ({ emoji, initialX, initialY }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, Math.random() * 5000 + 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="absolute text-6xl pointer-events-none select-none opacity-50 z-10"
      initial={{ x: initialX, y: initialY, opacity: 0, scale: 0 }}
      animate={{
        x: initialX + (Math.random() * 200 - 100),
        y: initialY - 300,
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
        rotate: Math.random() * 360
      }}
      transition={{
        duration: Math.random() * 4 + 6,
        ease: "easeOut"
      }}
    >
      {emoji}
    </motion.div>
  );
};

export default FloatingEmoji;
