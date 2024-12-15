'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  // إنتاج فيديو
  {
    id: 1,
    title: "فيديو إعلاني لشركة عقارية",
    category: "إنتاج فيديو",
    description: "إنتاج فيديو إعلاني متكامل يعرض مشاريع الشركة العقارية بأسلوب احترافي",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&h=600&q=80",
    tags: ["موشن جرافيك", "تصوير احترافي", "مونتاج"]
  },
  {
    id: 2,
    title: "فيديو تعريفي لمنتج جديد",
    category: "إنتاج فيديو",
    description: "فيديو تعريفي يشرح مميزات المنتج وطريقة استخدامه",
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=800&h=600&q=80",
    tags: ["تصوير منتجات", "إضاءة احترافية", "مونتاج"]
  },
  
  // هوية بصرية
  {
    id: 3,
    title: "هوية بصرية لمطعم",
    category: "هوية بصرية",
    description: "تصميم هوية بصرية متكاملة تعكس أصالة المطبخ وعراقة المكان",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=800&h=600&q=80",
    tags: ["شعار", "ألوان", "تايبوغرافي"]
  },
  {
    id: 4,
    title: "هوية بصرية لشركة تقنية",
    category: "هوية بصرية",
    description: "هوية عصرية تجمع بين البساطة والابتكار",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&h=600&q=80",
    tags: ["تصميم شعار", "دليل الهوية", "قرطاسية"]
  },

  // تسويق
  {
    id: 5,
    title: "حملة تسويقية لمنتج صحي",
    category: "تسويق",
    description: "حملة تسويقية شاملة عبر منصات التواصل الاجتماعي",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&h=600&q=80",
    tags: ["تسويق رقمي", "إدارة محتوى", "إعلانات"]
  },
  {
    id: 6,
    title: "حملة إعلانية لمعرض تجاري",
    category: "تسويق",
    description: "حملة متكاملة تشمل الإعلان الرقمي والمطبوع",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&h=600&q=80",
    tags: ["تصميم إعلانات", "تسويق رقمي", "طباعة"]
  },

  // إنتاج تلفزيوني
  {
    id: 7,
    title: "برنامج حواري ثقافي",
    category: "إنتاج تلفزيوني",
    description: "إنتاج برنامج حواري أسبوعي يناقش قضايا ثقافية متنوعة",
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&h=600&q=80",
    tags: ["إنتاج", "تصوير", "إضاءة"]
  },
  {
    id: 8,
    title: "برنامج وثائقي",
    category: "إنتاج تلفزيوني",
    description: "سلسلة وثائقية تستكشف تاريخ وثقافة المنطقة",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&h=600&q=80",
    tags: ["تصوير خارجي", "مونتاج", "تصحيح ألوان"]
  },

  // تصميم رقمي
  {
    id: 9,
    title: "تطبيق للهواتف الذكية",
    category: "تصميم رقمي",
    description: "تصميم واجهات مستخدم لتطبيق خدمات لوجستية",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&h=600&q=80",
    tags: ["UI/UX", "تصميم تفاعلي", "واجهات المستخدم"]
  },
  {
    id: 10,
    title: "موقع إلكتروني تفاعلي",
    category: "تصميم رقمي",
    description: "تصميم وتطوير موقع إلكتروني عصري لشركة ناشئة",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&h=600&q=80",
    tags: ["تصميم مواقع", "برمجة", "تجربة المستخدم"]
  }
];

interface Category {
  id: string;
  name: string;
}

const categories: Category[] = [
  { id: 'all', name: 'جميع الأعمال' },
  { id: 'إنتاج فيديو', name: 'إنتاج فيديو' },
  { id: 'هوية بصرية', name: 'هوية بصرية' },
  { id: 'تسويق', name: 'تسويق' },
  { id: 'إنتاج تلفزيوني', name: 'إنتاج تلفزيوني' },
  { id: 'تصميم رقمي', name: 'تصميم رقمي' }
];

interface ProjectCardProps {
  project: Project;
  onImageClick: () => void;
}

const ProjectCard = ({ project, onImageClick }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      <div 
        className="relative h-48 w-full overflow-hidden cursor-pointer" 
        onClick={onImageClick}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={project.id <= 3}
          className="group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visibleProjects, setVisibleProjects] = useState<number>(6);
  const [isGridView, setIsGridView] = useState<boolean>(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'all' || project.category === selectedCategory
  );

  const handleLoadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length));
  };

  return (
    <div id="projects" className="relative pt-20 pb-20 bg-gradient-to-b from-[hsla(189,97%,14%,1)] to-black">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">أعمالنا</h2>
          <p className="text-xl text-gray-300">نقدم أفضل الحلول الإبداعية لعملائنا</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-white text-[hsla(189,97%,14%,1)]'
                  : 'bg-transparent text-white border border-white/30 hover:bg-white/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsGridView(!isGridView)}
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300"
          >
            {isGridView ? 'عرض القائمة' : 'عرض الشبكة'}
          </button>
        </div>

        <div className={`grid ${
          isGridView 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            : 'grid-cols-1 gap-8'
        }`}>
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative ${!isGridView ? 'flex gap-8 items-center' : ''}`}
            >
              <ProjectCard 
                project={project} 
                onImageClick={() => {
                  setSelectedImage(project.image);
                  setLightboxOpen(true);
                }}
              />
            </motion.div>
          ))}
        </div>

        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg transition-all duration-300"
            >
              عرض المزيد
            </button>
          </div>
        )}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={[{ src: selectedImage || '' }]}
      />
    </div>
  );
}
