'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaPhone, FaEnvelope, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

type ModalType = 'privacy' | 'terms' | null;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [modalOpen, setModalOpen] = useState<ModalType>(null);

  const modalContent = {
    privacy: {
      title: 'سياسة الخصوصية',
      content: `
        نحن في شركة الخالد كروب نقدر خصوصية زوارنا ونلتزم بحمايتها. تحدد سياسة الخصوصية هذه كيفية جمع واستخدام وحماية المعلومات الشخصية.

        جمع المعلومات:
        • نجمع المعلومات التي تقدمها لنا طواعية
        • نجمع بيانات التصفح بشكل تلقائي
        • نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم

        استخدام المعلومات:
        • تحسين خدماتنا ومنتجاتنا
        • التواصل معك بخصوص الخدمات والعروض
        • تخصيص تجربة المستخدم

        حماية المعلومات:
        • نستخدم تقنيات أمان متقدمة لحماية بياناتك
        • لا نشارك معلوماتك مع أطراف ثالثة دون موافقتك
        • نحتفظ بالبيانات فقط للمدة اللازمة

        حقوقك:
        • الوصول إلى بياناتك الشخصية
        • تصحيح أو تحديث معلوماتك
        • طلب حذف بياناتك
      `
    },
    terms: {
      title: 'الشروط والأحكام',
      content: `
        شروط استخدام خدمات شركة الخالد كروب:

        القبول بالشروط:
        • باستخدام موقعنا وخدماتنا، فإنك توافق على هذه الشروط والأحكام
        • نحتفظ بالحق في تعديل هذه الشروط في أي وقت

        الخدمات:
        • نقدم خدمات إعلامية وإنتاج محتوى
        • نحتفظ بحق رفض أي طلب خدمة
        • نلتزم بتقديم الخدمات وفقاً للمواصفات المتفق عليها

        حقوق الملكية الفكرية:
        • جميع المحتويات محمية بحقوق الملكية الفكرية
        • يمنع نسخ أو استخدام المحتوى دون إذن كتابي
        • نحترم حقوق الملكية الفكرية للآخرين

        المسؤولية:
        • نسعى لتقديم خدمات عالية الجودة
        • لا نتحمل مسؤولية الأضرار غير المباشرة
        • نلتزم بالتعويض في حدود قيمة الخدمة المقدمة

        إنهاء الخدمة:
        • يمكن إنهاء الخدمة في حال مخالفة الشروط
        • نحتفظ بحق إيقاف الخدمة لأسباب تقنية أو أمنية
      `
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* معلومات الشركة */}
          <div className="space-y-6 text-center lg:text-right">
            <div className="relative h-24 w-48 mx-auto lg:mx-0">
              <Image
                src="/logo.png"
                alt="شركة الخالد كروب"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-300 max-w-sm mx-auto lg:mx-0">
              شركة الخالد كروب هي شركة إعلامية رائدة في العراق، متخصصة في إنتاج المحتوى الإبداعي والحلول الإعلامية المتكاملة
            </p>
          </div>

          {/* روابط سريعة */}
          <div className="text-center lg:text-right">
            <h3 className="text-xl font-bold mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-orange-500 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-orange-500 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-orange-500 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-orange-500 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1">
                  أعمالنا
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-orange-500 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          {/* معلومات التواصل */}
          <div className="text-center lg:text-right">
            <h3 className="text-xl font-bold mb-6">معلومات التواصل</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center lg:justify-start gap-3">
                <FaPhone className="text-orange-500 flex-shrink-0" />
                <span dir="ltr" className="text-gray-300">+964 7703 778 778</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-3">
                <FaPhone className="text-orange-500 flex-shrink-0" />
                <span dir="ltr" className="text-gray-300">+964 7713 324 956</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-3">
                <FaEnvelope className="text-orange-500 flex-shrink-0" />
                <span className="text-gray-300">info@alkhaledgroup.com</span>
              </li>
              <li className="flex items-start justify-center lg:justify-start gap-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  العراق - بغداد
                  <br />
                  شارع القادسية
                </span>
              </li>
            </ul>
          </div>

          {/* وسائل التواصل الاجتماعي */}
          <div className="text-center lg:text-right">
            <h3 className="text-xl font-bold mb-6">تابعنا على</h3>
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="https://www.tiktok.com/@alkahled_group"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <FaTiktok className="text-white" />
              </a>
              <a
                href="https://www.youtube.com/@alkahled_group"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <FaYoutube className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/al.khaled_group"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="https://www.facebook.com/alkhaledgroup1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <FaFacebookF className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* الشريط السفلي */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-right text-sm text-gray-300">
              <div className="mb-2 md:mb-0">
                جميع الحقوق محفوظة &copy; {currentYear} شركة الخالد كروب
              </div>
              <div className="text-sm text-gray-300">
                Designed by{' '}
                <a 
                  href="https://www.muqcomp.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-orange-500 hover:text-orange-400 hover:underline transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1"
                >
                  MUQ.Dev Team
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse text-sm text-gray-300">
              <button
                onClick={() => setModalOpen('privacy')}
                className="hover:text-orange-500 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
              >
                سياسة الخصوصية
              </button>
              <span>|</span>
              <button
                onClick={() => setModalOpen('terms')}
                className="hover:text-orange-500 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
              >
                الشروط والأحكام
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* النوافذ المنبثقة */}
      <AnimatePresence>
        {modalOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setModalOpen(null)}
            />
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
            >
              <motion.div
                className="w-full max-w-2xl bg-gray-900 text-gray-100 p-8 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6 sticky top-0 bg-gray-900 py-2">
                  <h2 className="text-2xl font-bold text-white">
                    {modalContent[modalOpen].title}
                  </h2>
                  <button
                    onClick={() => setModalOpen(null)}
                    className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
                  >
                    <FaTimes size={24} />
                  </button>
                </div>
                <div className="prose prose-invert max-w-none">
                  {modalContent[modalOpen].content.split('\n').map((line, index) => (
                    <p key={index} className="mb-4 text-gray-300 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </footer>
  );
}
