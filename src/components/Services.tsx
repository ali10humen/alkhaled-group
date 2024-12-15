'use client';

import { motion } from 'framer-motion';
import { FaFilm, FaPalette, FaGoogle, FaPrint, FaVideo, FaGlobe } from 'react-icons/fa';

const services = [
  {
    title: 'إنتاج الأعمال الدرامية',
    description: 'إنتاج الأعمال الدرامية السينمائية والتلفزيونية هو العلامة البارزة للشركة مع التخطيط الدقيق لكل خطوات العمل',
    icon: FaFilm,
    items: [
      'الأفلام السينمائية',
      'المسلسلات التلفزيونية',
      'البرامج التلفزيونية'
    ]
  },
  {
    title: 'التصميم الجرافيكي',
    description: 'تصميم وتأليف هوية بصرية ذات بصمات حديثة لإيصال الفكرة بشكل بسيط وسهل',
    icon: FaPalette,
    items: [
      'تصميم الهوية البصرية',
      'العروض التقديمية',
      'الدعايات التجارية'
    ]
  },
  {
    title: 'التسويق الإلكتروني',
    description: 'إطلاق حملات تسويقية ترويجية تستهدف شرائح محددة من الجمهور مع خدمات متكاملة للتسويق الرقمي',
    icon: FaGoogle,
    items: [
      'حملات Google AdWords',
      'التسويق عبر البريد الإلكتروني',
      'حلول التسويق الرقمي'
    ]
  },
  {
    title: 'الخدمات الفنية',
    description: 'تطوير الهوية البصرية للشركات والمنتجات وإدارة الحملات التسويقية بأحدث الأساليب العالمية',
    icon: FaVideo,
    items: [
      'إدارة المعارض والمؤتمرات',
      'الحملات التسويقية والإعلانية',
      'تطوير الهوية البصرية'
    ]
  },
  {
    title: 'المطبوعات والملصقات',
    description: 'خدمات طباعة احترافية للمواد الدعائية والتسويقية بجميع أنواعها',
    icon: FaPrint,
    items: [
      'الأوراق والكروت الرسمية',
      'النشرات والبروشورات',
      'الإعلانات الخارجية والداخلية'
    ]
  },
  {
    title: 'إدارة وسائل التواصل',
    description: 'إنشاء وإدارة وتطوير وحماية صفحات مواقع التواصل الاجتماعي',
    icon: FaGlobe,
    items: [
      'إدارة الصفحات الاجتماعية',
      'حماية المحتوى',
      'تطوير المنصات'
    ]
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* خلفية متحركة */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
        
        {/* إيموجي متحركة في الخلفية */}
        <div className="floating-emoji emoji-1">🎬</div>
        <div className="floating-emoji emoji-2">🎭</div>
        <div className="floating-emoji emoji-3">📺</div>
        <div className="floating-emoji emoji-4">🎨</div>
        <div className="floating-emoji emoji-5">✨</div>
        <div className="floating-emoji emoji-6">📱</div>
        <div className="floating-emoji emoji-7">💻</div>
        <div className="floating-emoji emoji-8">🎥</div>
        <div className="floating-emoji emoji-9">📸</div>
        <div className="floating-emoji emoji-10">🖨️</div>
        <div className="floating-emoji emoji-11">📄</div>
        <div className="floating-emoji emoji-12">🌐</div>
        <div className="floating-emoji emoji-13">💡</div>
        <div className="floating-emoji emoji-14">🎯</div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">خدماتنا</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات الإبداعية والفنية لتلبية جميع احتياجاتكم
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-colors group"
            >
              <div className="flex justify-between items-start mb-4">
                <service.icon className="text-3xl text-orange-500 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-500 group-hover:text-gray-400 transition-colors flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50 group-hover:bg-orange-500"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
