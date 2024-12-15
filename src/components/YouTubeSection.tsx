'use client';

import { useState, useEffect } from 'react';
import { getChannelVideos, YouTubeVideo } from '@/lib/youtube';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaPlay, FaCalendarAlt } from 'react-icons/fa';

const CHANNEL_ID = 'UCU8EmZwCmApANjkuSL_Qm4g';

export default function YouTubeSection() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getChannelVideos();
        console.log('Fetched videos:', data);
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

  return (
    <section className="relative py-24 overflow-hidden">
      {/* الخلفية المتحركة */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        
        {/* الدوائر المتحركة */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* النجوم المتحركة */}
        <div className="stars"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-6">
            قناتنا على يوتيوب
          </h2>
          <p className="text-xl text-gray-300">
            تابعونا على قناتنا في يوتيوب لمشاهدة أحدث الفيديوهات
          </p>
        </div>

        {/* عرض قناة يوتيوب مباشرة */}
        <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl mb-24 backdrop-blur-sm bg-white/5">
          <iframe
            src={`https://www.youtube.com/embed/videoseries?list=UU${CHANNEL_ID.substring(2)}`}
            title="Alkhalied Group YouTube Channel"
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* عرض الفيديوهات */}
        <div className="mb-16 relative">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-white mt-4">جاري تحميل الفيديوهات...</p>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-12">
              {error}
            </div>
          ) : videos.length === 0 ? (
            <div className="text-center text-white py-12">
              لا توجد فيديوهات متاحة
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="group backdrop-blur-sm bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={video.thumbnail.url}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <FaPlay className="text-white text-4xl transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 text-right">
                        {video.title}
                      </h3>
                      <p className="text-gray-300 text-sm line-clamp-2 mb-3 text-right">
                        {video.description}
                      </p>
                      <div className="flex items-center justify-end text-gray-400 text-sm">
                        <FaCalendarAlt className="ml-2" />
                        <span>
                          {new Date(video.publishedAt).toLocaleDateString('ar-SA')}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="text-center">
          <a
            href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:shadow-lg hover:scale-105"
          >
            زيارة القناة
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: stars 4s linear infinite;
          opacity: 0.3;
        }

        @keyframes stars {
          0% { transform: translateY(0); }
          100% { transform: translateY(-200px); }
        }
      `}</style>
    </section>
  );
}
