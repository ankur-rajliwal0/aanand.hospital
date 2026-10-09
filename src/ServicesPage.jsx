import React, { useState, useEffect, useRef } from 'react';
import {
   Phone,
   Smile,
   Activity,
   ShieldPlus,
   Stethoscope,
   Syringe,
   Zap,
   AlignEndHorizontal,
   ChevronLeft,
   ChevronRight,
   Check,
   Scissors,
   Crown,
   Shield,
   Star,
   BadgeCheck,
   Mail,
   Clock,
   Menu,
   X
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroDentists from './assets/image.png';
import doctorPortrait from './assets/image copy.png';
import hospitalLogo from './assets/logo.png';
import rghsLogo from './assets/RGHSScheme.png';
import dentistMaskBg from './assets/dentist_mask_bg.jpg';
import staff1 from './assets/staff_1.jpg';
import staff2 from './assets/staff_2.jpg';
import staffImg1 from './assets/WhatsApp Image 2026-10-07 at 5.43.33 PM.jpeg';
import staffImg2 from './assets/WhatsApp Image 2026-10-07 at 5.43.34 PM.jpeg';
import staffImg3 from './assets/image copy 2.png';
import staffImg4 from './assets/image copy 3.png';
import smilingWoman from './assets/smiling_woman.jpg';
import surgeryCollage from './assets/surgery_collage.jpg';
import surgerySlide1 from './assets/image copy 4.png';
import surgerySlide2 from './assets/image copy 5.png';
import surgerySlide3 from './assets/image copy 6.png';
import surgerySlide4 from './assets/image copy 7.png';
import surgerySlide5 from './assets/image copy 8.png';
import receptionBg from './assets/reception.jpg';
import dentistBlurBg from './assets/dentist_blur_bg.jpg';
import Lenis from '@studio-freight/lenis';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Counter({ end, duration = 2000, suffix = '' }) {
   const [count, setCount] = useState(0);
   const [hasAnimated, setHasAnimated] = useState(false);
   const counterRef = useRef(null);

   useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
         if (entries[0].isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let startTimestamp = null;
            const step = (timestamp) => {
               if (!startTimestamp) startTimestamp = timestamp;
               // easeOutExpo for fast start, slow end
               const progress = Math.min((timestamp - startTimestamp) / duration, 1);
               const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
               setCount(Math.floor(easeProgress * end));
               if (progress < 1) {
                  window.requestAnimationFrame(step);
               }
            };
            window.requestAnimationFrame(step);
         }
      }, { threshold: 0.1 });

      if (counterRef.current) observer.observe(counterRef.current);
      return () => observer.disconnect();
   }, [end, duration, hasAnimated]);

   return <span ref={counterRef}>{count}{suffix}</span>;
}

function ServicesPage() {
   const [offsetY, setOffsetY] = useState(0);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const handleScroll = () => setOffsetY(window.scrollY);

   const surgeryImages = [surgeryCollage, surgerySlide1, surgerySlide2, surgerySlide3, surgerySlide4, surgerySlide5];
   const [currentSurgerySlide, setCurrentSurgerySlide] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentSurgerySlide((prev) => (prev + 1) % surgeryImages.length);
      }, 1500);
      return () => clearInterval(interval);
   }, [surgeryImages.length]);

   const nextSurgerySlide = () => setCurrentSurgerySlide((prev) => (prev + 1) % surgeryImages.length);
   const prevSurgerySlide = () => setCurrentSurgerySlide((prev) => (prev === 0 ? surgeryImages.length - 1 : prev - 1));

   useEffect(() => {
      AOS.init({ duration: 1000, once: true, offset: 50 });
      setTimeout(() => AOS.refresh(), 500); // Give time for images to load

      // Lenis Smooth Scroll Setup
      const lenis = new Lenis({
         duration: 1.2,
         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
         direction: 'vertical',
         gestureDirection: 'vertical',
         smooth: true,
         mouseMultiplier: 1,
         smoothTouch: false,
         touchMultiplier: 2,
         infinite: false,
      });

      function raf(time) {
         lenis.raf(time);
         requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // Standard scroll listener for parallax
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
         lenis.destroy();
      };
   }, []);

   return (
      <div className="font-sans text-gray-800 bg-white min-h-screen">
         {/* Header */}
         <header className="bg-white py-3 px-8 sticky top-0 z-50 shadow-sm">
            <div className="max-w-[1250px] mx-auto flex justify-between items-center relative">
               <div className="flex items-center">
                  <img src={hospitalLogo} alt="Anand Dental Jaipur Logo" className="h-[70px] w-auto" />
                  <span className="ml-3 lg:ml-4 text-[11px] md:text-xs lg:text-sm font-black text-[#1D70B8] uppercase tracking-wider hidden sm:block max-w-[200px] md:max-w-[250px] lg:max-w-[350px] leading-snug">RGHS APPROVED ANAND DENTAL HOSPITAL AND DIAGNOSTIC CENTRE</span>
               </div>

               <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
                  <img src={rghsLogo} alt="RGHS Scheme" className="h-[90px] w-auto" />
               </div>

               {/* Desktop Nav */}
               <nav className="hidden md:flex items-center space-x-8 text-[14px] font-black text-[#0066cc] tracking-wide uppercase">
                  <Link to="/" className="hover:text-blue-800 transition">HOME</Link>
                  <Link to="/contact" className="hover:text-blue-800 transition">CONTACT US</Link>
                  <Link to="/services" className="text-blue-900 border-b-2 border-blue-600 pb-0.5 transition flex items-center gap-1">SERVICES <span className="text-[9px] mt-0.5">▼</span></Link>
                  <Link to="/blogs" className="hover:text-blue-800 transition">BLOGS</Link>
                  <a href="tel:+919462209414" className="hover:text-blue-800 transition">BOOK APPOINTMENT</a>
               </nav>

               {/* Mobile Menu Button */}
               <button
                  className="md:hidden text-[#0066cc] p-2"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               >
                  {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
               </button>
            </div>

            {/* Mobile Dropdown Nav */}
            {isMobileMenuOpen && (
               <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4 text-[14px] font-black text-[#0066cc] tracking-wide uppercase z-50 border-t border-gray-100">
                  <Link to="/" className="hover:text-blue-800 transition" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
                  <Link to="/contact" className="hover:text-blue-800 transition" onClick={() => setIsMobileMenuOpen(false)}>CONTACT US</Link>
                  <Link to="/services" className="text-blue-900 transition" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</Link>
                  <Link to="/blogs" className="hover:text-blue-800 transition" onClick={() => setIsMobileMenuOpen(false)}>BLOGS</Link>
                  <a href="tel:+919462209414" className="hover:text-blue-800 transition" onClick={() => setIsMobileMenuOpen(false)}>BOOK APPOINTMENT</a>
               </nav>
            )}
         </header>

         {/* ── Section 1: Hero ── */}
         <section className="relative min-h-[380px] flex items-center bg-white overflow-hidden">
            <div className="absolute inset-0 z-0" data-aos="fade-left" data-aos-duration="1400">
               <img src={smilingWoman} alt="Smiling patient" className="w-full h-full object-cover object-center" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#f4f6f9] z-10" style={{ clipPath: 'polygon(0 0, 62% 0, 48% 100%, 0 100%)' }} />
            <div className="absolute top-0 left-0 w-full h-full bg-white z-10" style={{ clipPath: 'polygon(0 0, 56% 0, 42% 100%, 0 100%)' }} />
            <div className="relative z-20 max-w-[1400px] w-full mx-auto px-8 py-16" data-aos="fade-right">
               <h1 className="text-4xl md:text-5xl font-serif text-[#222] font-semibold mb-4 leading-tight">
                  Our Dental Services
               </h1>
               <p className="text-gray-400 text-[16px] mb-8">Comprehensive care for your beautiful smile!</p>
               <a href="tel:+919462209414" className="inline-block bg-[#4aa5ff] hover:bg-blue-600 text-white font-bold py-3 px-9 rounded-full shadow-lg transition-transform hover:scale-105 duration-300 text-[15px]">
                  Book Appointment
               </a>
            </div>
         </section>

         {/* Services Section */}
         <section className="py-12 mb-12 relative overflow-hidden">
            {/* Decorative Left Shadow Curve */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-[450px] w-[600px] h-[800px] bg-white rounded-full shadow-[50px_0_100px_rgba(0,0,0,0.05)] z-0 pointer-events-none hidden lg:block"></div>

            <div className="relative z-10 w-[95%] lg:w-[92%] ml-auto mb-12 px-6 lg:px-12">
               <h2 className="text-[44px] font-serif text-[#333] tracking-wide text-left">Our Services</h2>
            </div>

            {/* First Row */}
            <div className="relative w-[96%] lg:w-[94%] ml-auto mb-20 max-w-[1500px]" data-aos="fade-up">
               <div className="absolute top-0 right-0 w-full h-[145px] bg-[#007bff] rounded-tl-[100px] shadow-[-15px_20px_40px_rgba(0,123,255,0.15)] z-0"></div>

               <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-8 px-4 lg:px-12 pt-[30px] justify-items-center">

                  <div className="flex flex-col items-center w-[130px]">
                     <div className="w-[85px] h-[85px] rounded-[1.5rem] bg-[#1a8cff] shadow-[inset_0_0_15px_rgba(0,255,255,0.4),_0_5px_10px_rgba(0,0,0,0.15)] border border-cyan-300 flex items-center justify-center mb-10">
                        <Smile className="w-10 h-10 text-cyan-100 drop-shadow-md" strokeWidth={1.5} />
                     </div>
                     <p className="text-[10px] font-serif text-[#333] text-center tracking-[0.1em] uppercase leading-relaxed whitespace-pre-line">SMILE MAKEOVER</p>
                  </div>

                  <div className="flex flex-col items-center w-[130px]">
                     <div className="w-[85px] h-[85px] rounded-[1.5rem] bg-[#1a8cff] shadow-[inset_0_0_15px_rgba(0,255,255,0.4),_0_5px_10px_rgba(0,0,0,0.15)] border border-cyan-300 flex items-center justify-center mb-10">
                        <Zap className="w-10 h-10 text-cyan-100 drop-shadow-md" strokeWidth={1.5} />
                     </div>
                     <p className="text-[10px] font-serif text-[#333] text-center tracking-[0.1em] uppercase leading-relaxed whitespace-pre-line">IMPLANTS</p>
                  </div>

                  <div className="flex flex-col items-center w-[130px]">
                     <div className="w-[85px] h-[85px] rounded-[1.5rem] bg-[#1a8cff] shadow-[inset_0_0_15px_rgba(0,255,255,0.4),_0_5px_10px_rgba(0,0,0,0.15)] border border-cyan-300 flex items-center justify-center mb-10">
                        <Stethoscope className="w-10 h-10 text-cyan-100 drop-shadow-md" strokeWidth={1.5} />
                     </div>
                     <p className="text-[10px] font-serif text-[#333] text-center tracking-[0.1em] uppercase leading-relaxed whitespace-pre-line">{"GENERAL\nDENTISTRY"}</p>
                  </div>

                  <div className="flex flex-col items-center w-[140px]">
                     <div className="w-[85px] h-[85px] rounded-[1.5rem] bg-[#1a8cff] shadow-[inset_0_0_15px_rgba(0,255,255,0.4),_0_5px_10px_rgba(0,0,0,0.15)] border border-cyan-300 flex items-center justify-center mb-10">
                        <Syringe className="w-10 h-10 text-cyan-100 drop-shadow-md" strokeWidth={1.5} />
                     </div>
                     <p className="text-[10px] font-serif text-[#333] text-center tracking-[0.05em] uppercase leading-relaxed whitespace-pre-line">{"Tooth Restoration/\nTooth filling"}</p>
                  </div>

                  <div className="flex flex-col items-center w-[130px]">
                     <div className="w-[85px] h-[85px] rounded-[1.5rem] bg-[#1a8cff] shadow-[inset_0_0_15px_rgba(0,255,255,0.4),_0_5px_10px_rgba(0,0,0,0.15)] border border-cyan-300 flex items-center justify-center mb-10">
                        <AlignEndHorizontal className="w-10 h-10 text-cyan-100 drop-shadow-md" strokeWidth={1.5} />
                     </div>
                     <p className="text-[10px] font-serif text-[#333] text-center tracking-[0.1em] uppercase leading-relaxed whitespace-pre-line">Denture</p>
                  </div>

                  <div className="flex flex-col items-center w-[130px]">
                     <div className="w-[85px] h-[85px] rounded-[1.5rem] bg-[#1a8cff] shadow-[inset_0_0_15px_rgba(0,255,255,0.4),_0_5px_10px_rgba(0,0,0,0.15)] border border-cyan-300 flex items-center justify-center mb-10">
                        <Activity className="w-10 h-10 text-cyan-100 drop-shadow-md" strokeWidth={1.5} />
                     </div>
                     <p className="text-[10px] font-serif text-[#333] text-center tracking-[0.1em] uppercase leading-relaxed whitespace-pre-line">{"LASER\nDENTISTRY"}</p>
                  </div>
               </div>
            </div>

            {/* Second Row */}
            <div className="relative w-[96%] lg:w-[94%] ml-auto mb-16 max-w-[1500px]" data-aos="fade-up" data-aos-delay="100">
               <div className="absolute top-0 right-0 w-full h-[145px] bg-[#007bff] rounded-bl-[100px] shadow-[-15px_20px_40px_rgba(0,123,255,0.15)] z-0"></div>

               <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-8 px-4 lg:px-12 pt-[30px] justify-items-center">

                  <div className="flex flex-col items-center w-[130px]">
                     <div className="w-[85px] h-[85px] rounded-[1.5rem] bg-[#1a8cff] shadow-[inset_0_0_15px_rgba(0,255,255,0.4),_0_5px_10px_rgba(0,0,0,0.15)] border border-cyan-300 flex items-center justify-center mb-10">
                        <Scissors className="w-10 h-10 text-cyan-100 drop-shadow-md" strokeWidth={1.5} />
                     </div>
                     <p className="text-[10px] font-serif text-[#333] text-center tracking-[0.1em] uppercase leading-relaxed whitespace-pre-line">EXTRACTION</p>
                  </div>

                  <div className="flex flex-col items-center w-[130px]">
                     <div className="w-[85px] h-[85px] rounded-[1.5rem] bg-[#1a8cff] shadow-[inset_0_0_15px_rgba(0,255,255,0.4),_0_5px_10px_rgba(0,0,0,0.15)] border border-cyan-300 flex items-center justify-center mb-10">
                        <Shield className="w-10 h-10 text-cyan-100 drop-shadow-md" strokeWidth={1.5} />
                     </div>
                     <p className="text-[10px] font-serif text-[#333] text-center tracking-[0.08em] uppercase leading-relaxed whitespace-pre-line">{"Orthodontic\nTreatment"}</p>
                  </div>

                  <div className="flex flex-col items-center w-[130px]">
                     <div className="w-[85px] h-[85px] rounded-[1.5rem] bg-[#1a8cff] shadow-[inset_0_0_15px_rgba(0,255,255,0.4),_0_5px_10px_rgba(0,0,0,0.15)] border border-cyan-300 flex items-center justify-center mb-10">
                        <Crown className="w-10 h-10 text-cyan-100 drop-shadow-md" strokeWidth={1.5} />
                     </div>
                     <p className="text-[10px] font-serif text-[#333] text-center tracking-[0.08em] uppercase leading-relaxed whitespace-pre-line">Prosthodontics</p>
                  </div>

                  <div className="flex flex-col items-center w-[130px]">
                     <div className="w-[85px] h-[85px] rounded-[1.5rem] bg-[#1a8cff] shadow-[inset_0_0_15px_rgba(0,255,255,0.4),_0_5px_10px_rgba(0,0,0,0.15)] border border-cyan-300 flex items-center justify-center mb-10">
                        <Zap className="w-10 h-10 text-cyan-100 drop-shadow-md" strokeWidth={1.5} />
                     </div>
                     <p className="text-[10px] font-serif text-[#333] text-center tracking-[0.1em] uppercase leading-relaxed whitespace-pre-line">Endodontics</p>
                  </div>

                  <div className="flex flex-col items-center w-[140px]">
                     <div className="w-[85px] h-[85px] rounded-[1.5rem] bg-[#1a8cff] shadow-[inset_0_0_15px_rgba(0,255,255,0.4),_0_5px_10px_rgba(0,0,0,0.15)] border border-cyan-300 flex items-center justify-center mb-10">
                        <Stethoscope className="w-10 h-10 text-cyan-100 drop-shadow-md" strokeWidth={1.5} />
                     </div>
                     <p className="text-[10px] font-serif text-[#333] text-center tracking-[0.05em] uppercase leading-relaxed whitespace-pre-line">{"Single Sitting Root\nCanal Treatment"}</p>
                  </div>

                  <div className="flex flex-col items-center w-[130px]">
                     <div className="w-[85px] h-[85px] rounded-[1.5rem] bg-[#1a8cff] shadow-[inset_0_0_15px_rgba(0,255,255,0.4),_0_5px_10px_rgba(0,0,0,0.15)] border border-cyan-300 flex items-center justify-center mb-10">
                        <Activity className="w-10 h-10 text-cyan-100 drop-shadow-md" strokeWidth={1.5} />
                     </div>
                     <p className="text-[10px] font-serif text-[#333] text-center tracking-[0.08em] uppercase leading-relaxed whitespace-pre-line">{"Maxillofacial\nSurgery"}</p>
                  </div>

               </div>
            </div>
         </section>



         {/* Footer / Contact Section */}
         <section className="relative w-full pt-16 pb-24 bg-white overflow-hidden">
            {/* Decorative background blobs */}
            <div className="absolute top-10 left-[-10%] w-[500px] h-[500px] bg-[#f5f5f5] rounded-full z-0"></div>
            <div className="absolute top-10 right-[-10%] w-[500px] h-[500px] bg-[#f5f5f5] rounded-full z-0"></div>

            <div className="max-w-[1300px] mx-auto px-0 md:px-6 relative z-10">
               <div className="bg-gradient-to-r from-[#1762c9] to-[#3994f5] text-white rounded-none md:rounded-bl-[280px] md:rounded-br-[120px] pt-16 pb-24 px-10 md:pl-20 md:pr-12 flex flex-col md:flex-row gap-10 shadow-2xl">

                  {/* Column 1: Contact Info */}
                  <div className="w-full md:w-[30%] flex flex-col" data-aos="fade-up">
                     {/* Call */}
                     <div className="flex items-start space-x-4 mb-8">
                        <Phone className="w-5 h-5 mt-1" fill="white" />
                        <div>
                           <h4 className="font-serif text-[20px] mb-2 font-normal tracking-wide">Call</h4>
                           <p className="text-[15px] mb-1 font-medium tracking-wider">+91 94622 09414</p>
                        </div>
                     </div>

                     {/* Email */}
                     <div className="flex items-start space-x-4 mb-10">
                        <Mail className="w-5 h-5 mt-1" fill="white" />
                        <div>
                           <h4 className="font-serif text-[20px] mb-2 font-normal tracking-wide">Email Us</h4>
                           <p className="text-[14px] font-medium">dr.savita1989@gmail.com</p>
                        </div>
                     </div>

                     {/* Book Button */}
                     <a href="tel:+919462209414" className="inline-block border border-white hover:bg-white hover:text-[#1762c9] text-white font-medium py-2 px-6 rounded text-[15px] transition mb-10 self-start shadow-sm">
                        Book Appointment
                     </a>

                     {/* Socials */}
                     <div className="flex space-x-3">
                        <a href="https://www.facebook.com/share/1EruKrG2nV/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#3b5998] flex items-center justify-center hover:scale-110 transition shadow-md">
                           <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" /></svg>
                        </a>
                        <a href="https://wa.me/919462209414" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition shadow-md">
                           <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/ananddentalhospitaljaipur?stkn=MTYybmU2dDBkaGtucg%3D%3D" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#E1306C] flex items-center justify-center hover:scale-110 transition shadow-md">
                           <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
                        </a>
                        <a href="#" className="w-9 h-9 rounded-full bg-[#0077b5] flex items-center justify-center hover:scale-110 transition shadow-md">
                           <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                     </div>
                  </div>

                  {/* Column 2: Anand Dental */}
                  <div className="w-full md:w-[35%] flex flex-col" data-aos="fade-up" data-aos-delay="200">
                     <div className="flex items-start space-x-4 mb-6">
                        <div className="bg-white rounded-full p-1 mt-1 shadow-sm">
                           <Clock className="w-4 h-4 text-[#1762c9]" />
                        </div>
                        <div>
                           <h4 className="font-serif text-[16px] mb-4 font-normal tracking-wide uppercase leading-snug">RGHS APPROVED ANAND DENTAL HOSPITAL<br />AND DIAGNOSTIC CENTRE</h4>
                           <p className="text-[14px] font-medium leading-relaxed max-w-[280px] text-white">
                              45,46, Opp. Parth Chiranjivi Complex,<br />
                              Hanuman Vatika A, Gokulpura,<br />
                              Jaipur, Rajasthan 302012
                           </p>
                        </div>
                     </div>
                     <div className="w-full h-[200px] rounded-sm overflow-hidden border-2 border-white/20 shadow-lg mt-auto">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.7639586648697!2d75.70951398053819!3d26.942696516369644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db30020854b0f%3A0xd2dfd395e3eb1f13!2sANAND%20DENTAL!5e0!3m2!1sen!2sin!4v1791226542150!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                     </div>
                  </div>



               </div>
            </div>
         </section>

         <Footer />

         {/* Floating WhatsApp Button */}
         <a 
            href="https://wa.me/919462209414" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="fixed bottom-6 right-6 bg-[#25D366] text-white p-3 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.2)] z-[100] transition-transform hover:scale-110 flex items-center justify-center animate-bounce"
            style={{ animationDuration: '2s' }}
         >
            <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
         </a>
      </div>
   );
}

export default ServicesPage;
