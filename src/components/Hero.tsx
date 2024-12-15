"use client";

import { motion } from 'framer-motion';
import MeshGradient from './MeshGradient';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Animated Mesh Gradient Background */}
      <MeshGradient />
      
      {/* Background Emojis */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
        {/* Creative Emojis */}
        <motion.div 
          className="absolute top-[15%] left-[10%] text-6xl opacity-10"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          🎨
        </motion.div>
        <motion.div 
          className="absolute top-[45%] right-[15%] text-6xl opacity-10"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          ✨
        </motion.div>
        <motion.div 
          className="absolute bottom-[20%] left-[20%] text-6xl opacity-10"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          🎬
        </motion.div>
        <motion.div 
          className="absolute top-[30%] right-[25%] text-6xl opacity-10"
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          💡
        </motion.div>
        <motion.div 
          className="absolute bottom-[35%] right-[10%] text-6xl opacity-10"
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          🎥
        </motion.div>
        <motion.div 
          className="absolute top-[60%] left-[15%] text-6xl opacity-10"
          animate={{ y: [8, -8, 8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          🎭
        </motion.div>
      </div>
      
      {/* Fixed Icon */}
      <div className="absolute bottom-10 right-10 z-10">
        <svg 
          width="80" 
          height="80" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-white/30 rotate-45"
        >
          <path d="M19 5L5 19M5 5l14 14"/>
        </svg>
      </div>
      
      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 h-screen flex flex-col lg:flex-row items-center justify-between py-20 lg:py-0">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-right lg:ml-8 mb-8 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
              نبدع في صناعة
              <br />
              <span className="bg-gradient-to-l from-orange-500 to-orange-600 text-transparent bg-clip-text">
                المحتوى الإبداعي
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mr-0">
              رواد في مجال الإنتاج الفني والإعلامي على المستوى المحلي والعربي، نقدم محتوى درامياً وإعلامياً بمعايير عالمية
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
              <motion.a
                href="#projects"
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-medium text-white overflow-hidden transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">اكتشف أعمالنا</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 translate-y-[101%] transition-transform duration-300 group-hover:translate-y-0" />
              </motion.a>
              
              <motion.a
                href="#contact"
                className="group relative inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-medium text-white overflow-hidden transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">تواصل معنا</span>
                <div className="absolute inset-0 bg-white/20 translate-y-[101%] transition-transform duration-300 group-hover:translate-y-0" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Video Container */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-[280px] sm:w-[400px] h-[80px] sm:h-[100px] overflow-hidden rounded-[40px] cursor-pointer transition-all duration-500 hover:h-[240px] sm:hover:h-[360px] hover:w-[340px] sm:hover:w-[600px] group backdrop-blur-sm bg-white/5"
        >
          {/* Play Icon Circle */}
          <div 
            className="group absolute top-3 sm:top-4 right-3 sm:right-4 z-30 w-8 sm:w-12 h-8 sm:h-12 bg-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-orange-500"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 sm:w-6 h-4 sm:h-6 transition-all duration-300 -rotate-45 stroke-orange-500 group-hover:stroke-white group-hover:rotate-0"
            >
              <path 
                d="M12 5v14M5 12l7 7 7-7" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Video Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-20" />

          <video
            autoPlay
            loop
            muted
            controls
            className="w-full h-full object-cover"
            playsInline
          >
            <source src="/videos/showreel.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
}
