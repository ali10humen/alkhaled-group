"use client";

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaWhatsapp, FaTiktok, FaSnapchatGhost, FaFacebookF, FaYoutube } from 'react-icons/fa';

const contactInfo = [
  {
    icon: FaPhone,
    title: 'اتصل بنا',
    details: '+964 7703 778 778\n+964 7713 324 956',
    link: 'tel:+9647703778778'
  },
  {
    icon: FaEnvelope,
    title: 'راسلنا',
    details: 'info@alkhaledgroup.com',
    link: 'mailto:info@alkhaledgroup.com'
  },
  {
    icon: FaMapMarkerAlt,
    title: 'موقعنا',
    details: 'العراق - بغداد\nشارع القادسية',
    link: 'https://maps.google.com/maps?q=Baghdad+Al+Qadsya+Street'
  }
];

const socialMedia = [
  {
    icon: FaInstagram,
    name: 'Instagram',
    link: 'https://www.instagram.com/al.khaled_group/',
    color: 'from-pink-500 via-red-500 to-yellow-500'
  },
  {
    icon: FaWhatsapp,
    name: 'WhatsApp',
    link: 'https://api.whatsapp.com/message/IRSIH5UJEVP4H1?autoload=1&app_absent=0',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: FaTiktok,
    name: 'TikTok',
    link: 'https://www.tiktok.com/@alkahled_group',
    color: 'from-gray-900 via-gray-800 to-gray-900'
  },
  {
    icon: FaYoutube,
    name: 'YouTube',
    link: 'https://www.youtube.com/@alkahled_group',
    color: 'from-red-600 to-red-700'
  },
  {
    icon: FaSnapchatGhost,
    name: 'Snapchat',
    link: 'https://www.snapchat.com/add/alkhaledgroup',
    color: 'from-yellow-300 to-yellow-400'
  },
  {
    icon: FaFacebookF,
    name: 'Facebook',
    link: 'https://www.facebook.com/alkhaledgroup1',
    color: 'from-blue-600 to-blue-700'
  }
];

export default function Contact() {
  return (
    <div id="contact" className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">تواصل معنا</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            نحن هنا لمناقشة مشروعك القادم ومساعدتك في تحويل رؤيتك إلى واقع. تواصل معنا عبر أي من القنوات المتاحة
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8">لديك مشروع؟ دعنا نتحدث عنه</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    الاسم
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="أدخل اسمك"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-2">
                  نوع المشروع
                </label>
                <select
                  id="project"
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 [&>option]:text-gray-900"
                >
                  <option value="" className="text-gray-900">اختر نوع المشروع</option>
                  <option value="drama" className="text-gray-900">إنتاج درامي</option>
                  <option value="tv" className="text-gray-900">برنامج تلفزيوني</option>
                  <option value="ad" className="text-gray-900">إعلان تجاري</option>
                  <option value="design" className="text-gray-900">تصميم جرافيك</option>
                  <option value="other" className="text-gray-900">أخرى</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  تفاصيل المشروع
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="اخبرنا المزيد عن مشروعك..."
                ></textarea>
              </div>
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  إرسال الطلب
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Social Media & Contact Info */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.icon === FaMapMarkerAlt ? "_blank" : "_self"}
                  rel={info.icon === FaMapMarkerAlt ? "noopener noreferrer" : ""}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                  <p dir="ltr" className="text-gray-300 text-sm whitespace-pre-line">{info.details}</p>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Media Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white text-center mb-8">تابعنا على مواقع التواصل الاجتماعي</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {socialMedia.map((platform, index) => (
                  <motion.a
                    key={index}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="group relative flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                    <platform.icon className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors duration-300" />
                    <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                      {platform.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
