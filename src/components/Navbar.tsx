'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronUp, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'services', 'about', 'projects', 'youtubeSection', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      }) || 'hero';
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  const navItems = [
    { href: 'services', text: 'خدماتنا' },
    { href: 'about', text: 'من نحن' },
    { href: 'projects', text: 'أعمالنا' },
    { href: 'youtubeSection', text: 'قناتنا' },
    { href: 'contact', text: 'تواصل معنا' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const NavLink = ({ href, text }: { href: string; text: string }) => (
    <motion.button
      onClick={() => scrollToSection(href)}
      className={`text-sm text-gray-300 hover:text-white transition-all duration-300 relative group ${
        activeSection === href ? 'text-white font-bold' : ''
      }`}
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
      <motion.div
        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] group-hover:w-full transition-all duration-300"
        animate={{
          width: activeSection === href ? '100%' : '0%'
        }}
      />
      {activeSection === href && (
        <motion.div
          className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FF6B00]"
          layoutId="navDot"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        />
      )}
    </motion.button>
  );

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 ${
        isScrolled ? 'bg-black/80 backdrop-blur-sm' : ''
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo or Up Arrow for desktop */}
        <motion.div
          variants={itemVariants}
          whileHover={{ 
            scale: 1.2,
            y: -2,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          <Link
            href="/#hero"
            className={`bg-gradient-to-br from-[#FF6B00] to-[#FF8A3D] hover:from-[#FF8A3D] hover:to-[#FFA76B] text-white rounded-full p-2.5 transition-all duration-300 inline-flex items-center justify-center ${
              activeSection === 'hero' ? 'scale-110 shadow-lg shadow-[#FF6B00]/50' : ''
            }`}
          >
            <FaChevronUp className="w-3 h-3" />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95, y: 0 }}
            >
              <NavLink {...item} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          variants={itemVariants}
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg mt-4 py-4 px-6 rounded-2xl md:hidden"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <motion.div
                    key={item.href}
                    variants={itemVariants}
                    whileHover={{ 
                      x: 10,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <NavLink {...item} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
