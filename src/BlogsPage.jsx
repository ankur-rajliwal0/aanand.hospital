import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hospitalLogo from './assets/logo.png';
import rghsLogo from './assets/RGHSScheme.png';
import dentistBlurBg from './assets/dentist_blur_bg.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import { blogsData } from './data/blogsData';

export default function BlogsPage() {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [expandedBlog, setExpandedBlog] = useState(null);

   useEffect(() => {
      AOS.init({ duration: 900, once: true, offset: 60 });
      setTimeout(() => AOS.refresh(), 300);
      window.scrollTo(0, 0);
   }, []);

   const toggleBlog = (id) => {
      setExpandedBlog(expandedBlog === id ? null : id);
   };

   return (
      <div className="font-sans text-gray-800 bg-[#f8f9fa] min-h-screen">
         {/* Header */}
         <Navbar />

         {/* Hero Section */}
         <div className="bg-[#1a7ee6] text-white py-16 px-6 text-center shadow-inner relative overflow-hidden" style={{ backgroundImage: `url(${dentistBlurBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
            <div className="absolute inset-0 bg-[#1a7ee6]/80" />
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
               <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 drop-shadow-md">Dental Health Blog</h1>
               <p className="text-lg md:text-xl font-medium text-blue-100 drop-shadow-sm mb-8">Tips, insights, and expert advice for a healthier smile.</p>
               <div className="inline-block bg-white text-[#0066cc] px-6 py-3 rounded-full font-bold text-sm md:text-base shadow-lg border-2 border-white transition-transform hover:scale-105">
                  ✅ RGHS, ECHS, Ayushman, CGHS & All TPA Facilities Available
               </div>
            </div>
         </div>

         {/* Blog Grid */}
         <section className="py-20 px-6 max-w-[1300px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {blogsData.map((blog, index) => (
                  <div key={blog.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col border border-gray-100" data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
                     <div className="p-8 flex flex-col h-full">
                        <div className="text-[#00a651] text-sm font-bold mb-3 tracking-wider">{blog.date}</div>
                        <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4 leading-tight">{blog.title}</h3>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-[15px] whitespace-pre-line">
                           {expandedBlog === blog.id ? blog.content : blog.excerpt}
                        </p>
                        
                        <button 
                           onClick={() => toggleBlog(blog.id)}
                           className="text-[#1a7ee6] font-bold text-sm tracking-wide uppercase hover:text-blue-800 self-start transition-colors"
                        >
                           {expandedBlog === blog.id ? 'Read Less' : 'Read More'} &rarr;
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         <Footer />
      </div>
   );
}
