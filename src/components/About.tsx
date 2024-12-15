"use client";

import { motion } from 'framer-motion';
import { FaFilm, FaAward, FaUsers, FaGlobe, FaLightbulb, FaBullseye } from 'react-icons/fa';

const stats = [
  {
    label: 'خبرة في الإنتاج الفني',
    value: '+15',
    subtext: 'عام',
    icon: FaFilm,
    description: 'في إنتاج الأعمال الدرامية'
  },
  {
    label: 'مشاريع ناجحة',
    value: '+200',
    subtext: 'مشروع',
    icon: FaAward,
    description: 'في مختلف المجالات الفنية'
  },
  {
    label: 'فريق متخصص',
    value: '+50',
    subtext: 'محترف',
    icon: FaUsers,
    description: 'من المبدعين في مجالاتهم'
  },
  {
    label: 'عملاء راضون',
    value: '+100',
    subtext: 'عميل',
    icon: FaGlobe,
    description: 'على المستوى المحلي والعربي'
  }
];

const features = [
  {
    title: 'رؤيتنا',
    description: 'نسعى لأن نكون رواداً في مجال الإنتاج الفني على الصعيدين المحلي والعربي والعالمي',
    icon: FaLightbulb,
  },
  {
    title: 'رسالتنا',
    description: 'تقديم أعمال فنية عالية الجودة ترقى إلى مستوى المنافسة الفنية على الصعيدين المحلي والعربي والعالمي',
    icon: FaBullseye,
  }
];

export default function About() {
  return (
    <div id="about" className="relative py-20 bg-black">
      {/* خلفية مميزة */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          <svg className="absolute left-0 top-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="lines" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(255,69,0,0.1)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,0 L100,0 L100,100 L0,100 Z"
              fill="url(#lines)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,69,0,0.05),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان والوصف */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-right mb-16 lg:w-2/3"
          >
            <h2 className="inline-block text-4xl font-bold text-white mb-6 relative">
              من نحن
              <div className="absolute -bottom-2 right-0 h-1 w-24 bg-gradient-to-l from-orange-500 to-transparent" />
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              مجموعة الخالدي هي شركة إنتاج فني رائدة تجمع بين الخبرة والإبداع. نحن نؤمن بأن الفن يمكن أن يغير العالم، ونسعى جاهدين لتقديم محتوى درامي وإعلامي يرتقي بالذائقة الفنية ويحقق التميز على المستوى المحلي والعربي.
            </p>
          </motion.div>
        </div>

        {/* الرؤية والرسالة */}
        <div className="relative mb-24">
          <div className="absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500/50 via-orange-500/20 to-transparent" />
          <div className="space-y-12 relative">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pr-8"
              >
                <div className="absolute -right-4 top-4 w-3 h-3 rounded-full bg-orange-500 shadow-lg shadow-orange-500/50" />
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border-l-2 border-orange-500/30">
                  <div className="flex items-center gap-4 mb-4">
                    <feature.icon className="w-8 h-8 text-orange-500" />
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* الإحصائيات */}
        <div className="relative">
          <div className="absolute inset-0 bg-orange-500/5 -skew-y-3 transform" />
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative p-6 text-center">
                  <div className="mb-4">
                    <stat.icon className="w-8 h-8 mx-auto text-orange-500 transform transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="relative">
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                      <span className="text-lg text-orange-500 mr-1">{stat.subtext}</span>
                    </div>
                    <h3 className="text-lg font-medium text-gray-300 mb-2">{stat.label}</h3>
                    <p className="text-sm text-gray-400">{stat.description}</p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
