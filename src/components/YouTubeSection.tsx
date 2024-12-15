'use client';

import { motion } from 'framer-motion';
import { FaYoutube, FaEye, FaRegClock } from 'react-icons/fa';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getChannelVideos, YouTubeVideo } from '@/lib/youtube';

export default function YouTubeSection() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getChannelVideos();
        setVideos(data);
      } catch (err) {
        setError('حدث خطأ في تحميل الفيديوهات');
        console.error('Error fetching videos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (!mounted) return null;

  return (
    <section id="youtubeSection" className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* خلفية متحركة مع الإيموجي */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30"></div>
        
        {/* الإيموجي المتحركة */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="emoji-float text-8xl" style={{ left: '10%', animationDelay: '0s' }}>🎥</div>
          <div className="emoji-float text-8xl" style={{ left: '20%', animationDelay: '2s' }}>🎬</div>
          <div className="emoji-float text-8xl" style={{ left: '30%', animationDelay: '4s' }}>📹</div>
          <div className="emoji-float text-8xl" style={{ left: '40%', animationDelay: '1s' }}>🎦</div>
          <div className="emoji-float text-8xl" style={{ left: '50%', animationDelay: '3s' }}>📺</div>
          <div className="emoji-float text-8xl" style={{ left: '60%', animationDelay: '5s' }}>🎭</div>
          <div className="emoji-float text-8xl" style={{ left: '70%', animationDelay: '2.5s' }}>🎪</div>
          <div className="emoji-float text-8xl" style={{ left: '80%', animationDelay: '4.5s' }}>🎨</div>
          <div className="emoji-float text-8xl" style={{ left: '90%', animationDelay: '1.5s' }}>⭐️</div>
        </div>
      </div>

      {/* المحتوى */}
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center justify-center mb-6">
            <FaYoutube className="text-8xl text-red-600 mb-4 animate-pulse" />
            <h2 className="text-5xl font-bold text-white">قناتنا على يوتيوب</h2>
          </div>
          <p className="text-xl text-gray-300">شاهد أحدث أعمالنا وإنتاجاتنا الفنية</p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <FaYoutube className="text-6xl text-red-600 animate-bounce" />
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <motion.a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative aspect-video">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaYoutube className="text-white text-3xl" />
                    </motion.div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{video.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center">
                      <FaEye className="mr-1" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center">
                      <FaRegClock className="mr-1" />
                      <span>{video.publishedAt}</span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .emoji-float {
          position: absolute;
          opacity: 0.5;
          animation: floatEmoji 10s ease-in-out infinite;
          top: 100%;
        }

        @keyframes floatEmoji {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 0.5;
          }
          80% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-1000px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
