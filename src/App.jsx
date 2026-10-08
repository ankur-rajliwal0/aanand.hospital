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
   X,
   FileText
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroDentists from './assets/image.png';
import doctorPortrait from './assets/WhatsApp Image 2026-10-07 at 9.03.58 PM.jpeg';
import hospitalLogo from './assets/logo.png';
import rghsLogo from './assets/RGHSScheme.png';
import rghsPdf from './assets/List_of_empaneled_hospitals_under_RGHS.pdf';
import { jaipurHospitals } from './data/jaipurHospitals';
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
import staffImg5 from './assets/image copy 9.png';
import receptionBg from './assets/reception.jpg';
import dentistBlurBg from './assets/dentist_blur_bg.jpg';
import Lenis from '@studio-freight/lenis';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const reviewsData = [
   {
      id: 1,
      name: "Divyanshi chouhan",
      time: "2 days ago",
      avatar: "D",
      bgColor: "bg-[#d81b60]",
      textColor: "text-white",
      text: "Had my wisdom tooth surgically extracted, and the experience was really smooth and comfortable. Very professional and caring approach."
   },
   {
      id: 2,
      name: "SV choudhary",
      time: "2 days ago",
      avatar: <Smile className="w-7 h-7" />,
      bgColor: "bg-[#ffeb3b]",
      textColor: "text-[#222]",
      text: "Nice experience at dental clinic by Dr Savita Yadav"
   },
   {
      id: 3,
      name: "KISHAN SINGH",
      time: "4 days ago",
      avatar: "K",
      bgColor: "bg-[#5e35b1]",
      textColor: "text-white",
      text: "Good Experience with Dr Manisha And Dr Rashmi All thanks to Dr Savita Yadav for such good clinical work and great nature."
   },
   {
      id: 4,
      name: "Aman Sharma",
      time: "1 week ago",
      avatar: "A",
      bgColor: "bg-[#1976d2]",
      textColor: "text-white",
      text: "Best dental hospital in Jaipur! The staff is very polite and Dr Savita Yadav explained the entire procedure clearly. Highly recommended for any dental issues."
   },
   {
      id: 5,
      name: "Neha Gupta",
      time: "2 weeks ago",
      avatar: "N",
      bgColor: "bg-[#43a047]",
      textColor: "text-white",
      text: "Got my root canal done here. It was painless and the clinic is extremely hygienic. Thank you Dr Savita Yadav and team for the wonderful care."
   }
];

function ReviewCard({ review }) {
   const [expanded, setExpanded] = useState(false);
   
   return (
      <div className="bg-[#f5f5f5] rounded-lg p-6 shadow-sm h-full flex flex-col w-full min-h-[220px]">
         <div className="flex items-center space-x-4 mb-4 relative">
            <div className="relative">
               <div className={`w-12 h-12 rounded-full ${review.bgColor} ${review.textColor} flex items-center justify-center text-xl font-medium shrink-0`}>
                  {review.avatar}
               </div>
               <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-[#4285F4] text-[12px] font-bold">G</span>
               </div>
            </div>
            <div className="min-w-0">
               <div className="flex items-center space-x-1">
                  <h4 className="font-semibold text-[15px] text-[#333] truncate">{review.name}</h4>
                  <BadgeCheck className="w-4 h-4 text-[#1a73e8] shrink-0" fill="currentColor" color="white" />
               </div>
               <p className="text-xs text-gray-500 font-medium">{review.time}</p>
            </div>
         </div>
         <div className="flex text-[#FBBC05] mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-4 h-4" />)}
         </div>
         <p className="text-[#444] text-[14px] leading-relaxed flex-grow">
            {expanded || review.text.length <= 100 ? review.text : `${review.text.substring(0, 100)}...`}
         </p>
         {review.text.length > 100 && (
            <button 
               className="text-[#1a73e8] text-sm mt-2 hover:underline text-left font-medium w-fit cursor-pointer shrink-0"
               onClick={() => setExpanded(!expanded)}
            >
               {expanded ? 'Read less' : 'Read more'}
            </button>
         )}
      </div>
   );
}

function ReviewSlider() {
   const sliderRef = useRef(null);
   const [activeIndex, setActiveIndex] = useState(0);

   const scrollRight = () => {
      if (sliderRef.current) {
         const itemWidth = sliderRef.current.children[0].offsetWidth + 24; // width + gap
         if (sliderRef.current.scrollLeft + sliderRef.current.clientWidth >= sliderRef.current.scrollWidth - 10) {
             sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
         } else {
             sliderRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
         }
      }
   };

   const scrollLeftAction = () => {
      if (sliderRef.current) {
         const itemWidth = sliderRef.current.children[0].offsetWidth + 24; 
         if (sliderRef.current.scrollLeft <= 0) {
             sliderRef.current.scrollTo({ left: sliderRef.current.scrollWidth, behavior: 'smooth' });
         } else {
             sliderRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
         }
      }
   };
   
   const handleScroll = () => {
      if (sliderRef.current) {
         const scrollLeft = sliderRef.current.scrollLeft;
         const itemWidth = sliderRef.current.children[0].offsetWidth + 24;
         const newIndex = Math.round(scrollLeft / itemWidth);
         setActiveIndex(Math.min(newIndex, reviewsData.length - 1));
      }
   };

   useEffect(() => {
       const timer = setInterval(() => {
           scrollRight();
       }, 3000); 
       return () => clearInterval(timer);
   }, []);

   return (
      <div className="relative w-full max-w-full group">
         <div 
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
         >
            {reviewsData.map((review) => (
               <div key={review.id} className="snap-start shrink-0 w-[calc(100vw-4rem)] md:w-[calc(33.333%-1rem)]">
                  <ReviewCard review={review} />
               </div>
            ))}
         </div>
         {/* Prev Button Overlay */}
         <div 
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-500 text-white rounded-full items-center justify-center shadow-lg hover:bg-gray-600 cursor-pointer transition z-10 opacity-0 group-hover:opacity-100"
            onClick={scrollLeftAction}
         >
            <ChevronLeft className="w-6 h-6" />
         </div>
         {/* Next Button Overlay */}
         <div 
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-500 text-white rounded-full items-center justify-center shadow-lg hover:bg-gray-600 cursor-pointer transition z-10 opacity-0 group-hover:opacity-100"
            onClick={scrollRight}
         >
            <ChevronRight className="w-6 h-6" />
         </div>
         {/* Dots */}
         <div className="flex justify-center mt-6 space-x-2 items-center">
            {reviewsData.map((_, idx) => (
               <div 
                  key={idx} 
                  className={`rounded-full transition-all ${idx === activeIndex ? 'w-2 h-2 bg-[#444]' : 'w-1.5 h-1.5 bg-gray-300'}`}
               ></div>
            ))}
         </div>
      </div>
   );
}

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

function App() {
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
                  <span className="ml-4 text-2xl md:text-3xl font-black text-[#1D70B8] uppercase tracking-wider hidden sm:block">Anand Hospital</span>
               </div>

               <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
                  <img src={rghsLogo} alt="RGHS Scheme" className="h-[90px] w-auto" />
               </div>

               {/* Desktop Nav */}
               <nav className="hidden md:flex items-center space-x-8 text-[14px] font-black text-[#0066cc] tracking-wide uppercase">
                  <Link to="/" className="hover:text-blue-800 transition">HOME</Link>
                  <Link to="/contact" className="hover:text-blue-800 transition">CONTACT US</Link>
                  <Link to="/services" className="hover:text-blue-800 transition flex items-center gap-1">SERVICES <span className="text-[9px] mt-0.5">▼</span></Link>
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
                  <Link to="/services" className="hover:text-blue-800 transition" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</Link>
                  <Link to="/blogs" className="hover:text-blue-800 transition" onClick={() => setIsMobileMenuOpen(false)}>BLOGS</Link>
                  <a href="tel:+919462209414" className="text-blue-900" onClick={() => setIsMobileMenuOpen(false)}>BOOK APPOINTMENT</a>
               </nav>
            )}
         </header>

         {/* Hero Section */}
         <section className="relative min-h-[500px] md:min-h-[700px] flex items-center bg-transparent overflow-hidden">
            {/* Background Image (Right side on desktop, Full on mobile) */}
            <div className="absolute inset-0 right-0 w-full h-full z-0 overflow-hidden" data-aos="fade-left" data-aos-duration="1500">
               <img
                  src={heroDentists}
                  alt="Team of Dentists"
                  className="w-full h-full object-contain object-top md:object-cover md:object-center"
                  style={{ transform: `translateY(${offsetY * 0.3}px)` }}
               />
            </div>

            {/* Slanted Light Grey Overlay (Desktop Only) */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#f4f6f9] z-10 hidden md:block md:[clip-path:polygon(0_0,56%_0,46%_55%,68%_100%,0_100%)]"></div>

            {/* Slanted White Overlay (Desktop Only) */}
            <div className="absolute top-0 left-0 w-full h-full bg-white z-10 hidden md:block md:[clip-path:polygon(0_0,50%_0,40%_55%,62%_100%,0_100%)]"></div>

            {/* Content */}
            <div className="relative z-20 w-full max-w-[1400px] mx-auto md:px-8 md:pt-12 md:pb-20 flex flex-col justify-center min-h-[500px] md:min-h-0">

               <div className="w-full md:w-[45%]">
                  {/* Mobile White Background Box */}
                  <div className="relative pt-16 pb-8 md:p-0 hidden md:block" data-aos="fade-right">
                     {/* Mobile slanted background */}
                     <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-[-1] block md:hidden [clip-path:polygon(0_0,60%_0,75%_100%,0_100%)]"></div>

                     <div className="text-center md:text-left pr-[25%] pl-[2%] md:p-0">
                        <p className="text-gray-500 font-medium mb-3 md:mb-4 uppercase text-[10px] md:text-sm tracking-wider">A leading visionary in dental care.</p>
                        <h1 className="text-[28px] leading-[1.3] md:text-5xl lg:text-6xl font-serif text-[#333] font-bold mb-4 md:mb-6">
                           Set a Long-Lasting<br className="block md:hidden" /> Impression<br />
                           With A Beautiful Smile!
                        </h1>
                        <p className="text-gray-500 mb-2 md:mb-8 font-medium text-[11px] md:text-base px-2 md:px-0">
                           Without Going Through <span className="text-gray-800 font-bold">Heavy Pain & Pocket-Burning Costs!</span>
                        </p>
                     </div>
                  </div>

                  {/* Button outside the white box on mobile */}
                  <div className="text-center md:text-left mt-[350px] md:mt-0 pb-12 md:pb-0" data-aos="fade-up">
                     <a href="tel:+919462209414" className="inline-block bg-[#4aa5ff] hover:bg-blue-600 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full shadow-xl transition-transform hover:scale-105 duration-300 text-[15px] md:text-lg">
                        Book Appointment
                     </a>
                  </div>
               </div>

            </div>
         </section>

         {/* RGHS Banner */}
         <section className="bg-white py-4 px-8 pt-8">
            <div className="max-w-[1250px] mx-auto bg-[#ebf8f0] flex flex-col md:flex-row items-stretch justify-between min-h-[220px]">
               <div className="bg-[#1D70B8] p-6 flex flex-col items-center justify-center md:w-[280px]">
                  <img src={hospitalLogo} alt="Hospital Logo" className="h-[100px] bg-white p-2 rounded-full mb-2 shadow-lg" />
                  <div className="text-white font-bold tracking-widest text-xl leading-none mt-2">Anand  </div>
                  <div className="text-white text-[11px] tracking-widest mt-1">dental Hospital</div>
               </div>

               <div className="flex items-center justify-center flex-1 py-8 md:py-0">
                  <h2 className="text-5xl md:text-6xl font-black text-[#00a651] text-center tracking-wide uppercase leading-tight">
                     RGHS<br />APPROVED
                  </h2>
               </div>

               <div className="bg-[#dcf2e3] md:w-[350px] flex flex-col items-center justify-center relative overflow-hidden py-12 md:py-0">
                  <div className="flex items-center justify-center mb-8 relative">
                     <img src={rghsLogo} alt="RGHS Scheme" className="h-[120px] w-auto drop-shadow-md" />
                  </div>
                  <div className="bg-[#0056b3] text-white px-8 py-2 text-[15px] font-medium absolute bottom-6 shadow-md w-10/12 text-center">राजस्थान गवर्नमेंट हेल्थ स्कीम</div>
               </div>
            </div>
         </section>

         {/* Doctor Info Section */}
         <section className="py-20 px-8 max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
               <h3 className="font-bold text-gray-600 tracking-[0.2em] text-sm mb-4">ANAND DENTAL HOSPITAL</h3>
               <h2 className="text-5xl md:text-[64px] font-black text-[#1D70B8] uppercase tracking-wide">Anand Hospital</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-24 max-w-5xl mx-auto">
               <div>
                  <div className="text-6xl md:text-[80px] font-light text-[#5eaaa8] mb-2 tracking-tighter"><Counter end={14} /></div>
                  <div className="text-sm font-bold text-gray-600 uppercase tracking-[0.15em]">Years of<br />Experience</div>
               </div>
               <div>
                  <div className="text-6xl md:text-[80px] font-light text-[#5eaaa8] mb-2 tracking-tighter"><Counter end={14000} /></div>
                  <div className="text-sm font-bold text-gray-600 uppercase tracking-[0.15em]">+ Happy Clients</div>
               </div>
               <div>
                  <div className="text-6xl md:text-[80px] font-light text-[#5eaaa8] mb-2 tracking-tighter"><Counter end={100} suffix="%" /></div>
                  <div className="text-sm font-bold text-gray-600 uppercase tracking-[0.15em]">Client<br />Satisfaction</div>
               </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-12 max-w-6xl mx-auto">
               {/* Doctor Card */}
               <div className="w-full lg:w-[45%] bg-white rounded-t-[100px] rounded-b-3xl shadow-xl overflow-hidden border border-gray-100" data-aos="fade-right">
                  <div className="h-[400px] relative overflow-hidden rounded-t-[100px]">
                     <img src={doctorPortrait} alt="Dr. Anand" className="w-full h-full object-cover object-center" />
                     <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
                  </div>

                  <div className="bg-[#1b64a6] text-white text-center py-3 px-6">
                     <h3 className="text-[26px] font-bold">Dr. Savita Yadav</h3>
                  </div>

                  <div className="bg-white text-[#1b64a6] text-center p-6 flex flex-col items-center justify-center space-y-1">
                     <p className="font-bold text-[17px]">BDS, MDS</p>
                     <p className="font-bold text-[17px]">(Oral & Maxillofacial Surgeon)</p>
                  </div>
               </div>

               {/* Doctor Description Text */}
               <div className="w-full lg:w-[55%] pt-4" data-aos="fade-left" data-aos-delay="200">
                  <p className="text-gray-500 font-medium mb-3 text-[15px]">We're committed to dental excellence &</p>
                  <h3 className="text-[34px] text-gray-800 mb-8 font-serif leading-snug font-normal">Giving You The Best Smile That You Deserve!</h3>

                  <div className="text-[#666] space-y-5 leading-[1.8] text-[15px]">
                     <p>Anand Dental Jaipur provides excellent dental service and care to patients. With years of experience in various dental procedures, our team is passionate about helping patients achieve and maintain optimal oral health and a beautiful smile.</p>

                     <p>We use the latest technology and equipment to ensure the safety and comfort of our patients. We follow the highest standards of hygiene and sterilization in our clinic. Our team is friendly and compassionate, listening to patients' needs and concerns.</p>

                     <p>Anand Dental is committed to providing quality dental care at affordable prices. We are RGHS approved and accept insurance. We welcome new patients and referrals, and strive to make every visit a pleasant and satisfying experience.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* Decorative Wave */}
         <div className="w-full overflow-hidden mt-8">
            <svg viewBox="0 0 1440 150" className="w-full h-[100px] md:h-[150px] block" preserveAspectRatio="none">
               <path fill="#e6f0f9" d="M0,50 C400,180 800,10 1440,80 L1440,150 L0,150 Z" />
               <path fill="#b3d4f0" d="M0,80 C400,200 900,20 1440,100 L1440,150 L0,150 Z" />
               <path fill="#7fb3d5" d="M0,110 C450,220 1000,40 1440,120 L1440,150 L0,150 Z" />
            </svg>
         </div>

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

         {/* RGHS Empaneled Hospitals Section */}
         <section className="py-16 px-1 sm:px-2 md:px-6 max-w-[1400px] mx-auto text-center relative z-20 mb-12">
            <div className="bg-white rounded-[20px] md:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-4 sm:p-6 md:p-10 lg:p-16 border-t-[10px] border-[#00a651]" data-aos="fade-up">
               <h2 className="text-[30px] md:text-[44px] font-serif text-[#333] mb-4 tracking-wide">RGHS Empaneled Hospitals in Jaipur</h2>
               <p className="text-gray-600 text-lg mb-10 max-w-3xl mx-auto">
                  We are proud to be officially listed among the trusted healthcare providers for the Rajasthan Government Health Scheme in Jaipur City.
               </p>
               
               <div className="bg-[#f8fcf9] rounded-[10px] md:rounded-[20px] p-2 sm:p-4 md:p-8 border border-[#c3edd4] relative text-left" data-aos="zoom-in" data-aos-delay="100">
                  
                  {/* Table of Empaneled Hospitals */}
                  <div className="overflow-x-auto pb-4">
                     <table className="w-full text-left border-collapse min-w-[600px] md:min-w-[1100px] shadow-sm rounded-lg overflow-hidden">
                        <thead>
                           <tr className="bg-[#00a651] text-white text-[11px] md:text-[12px] uppercase tracking-wider">
                              <th className="p-2 md:p-3 border border-[#008f45] text-center w-10 md:w-12">S.No</th>
                              <th className="p-2 md:p-3 border border-[#008f45] w-[140px] md:w-[200px]">Hospital Name</th>
                              <th className="hidden md:table-cell p-3 border border-[#008f45] w-[250px]">Address</th>
                              <th className="hidden lg:table-cell p-3 border border-[#008f45]">District</th>
                              <th className="hidden lg:table-cell p-3 border border-[#008f45]">City</th>
                              <th className="p-2 md:p-3 border border-[#008f45]">Specialty</th>
                              <th className="p-2 md:p-3 border border-[#008f45]">Phone</th>
                              <th className="hidden lg:table-cell p-3 border border-[#008f45] whitespace-nowrap">Valid From</th>
                              <th className="hidden lg:table-cell p-3 border border-[#008f45] whitespace-nowrap">Valid To</th>
                              <th className="p-2 md:p-3 border border-[#008f45] text-center">Status</th>
                           </tr>
                        </thead>
                        <tbody className="text-[11px] md:text-[12px] text-gray-700 bg-white">
                           {jaipurHospitals.map((hospital, index) => {
                              const isAnand = hospital.name.toUpperCase().includes('ANAND DENTAL');
                              return (
                                 <tr 
                                    key={index} 
                                    className={isAnand ? 'bg-[#e0f4e8] border-2 border-[#00a651] font-bold shadow-[inset_0_0_10px_rgba(0,166,81,0.2)] transform md:scale-[1.01] relative z-10' : 'border-b border-gray-200 hover:bg-gray-50 transition-colors'}
                                 >
                                    <td className={`p-2 md:p-3 border-r border-gray-200 text-center align-middle ${isAnand ? 'border-[#00a651] text-[#00695c]' : ''}`}>{hospital.sNo}</td>
                                    <td className={`p-2 md:p-3 border-r border-gray-200 align-middle ${isAnand ? 'border-[#00a651] text-[#00695c] text-[12px] md:text-[13px]' : ''}`}>
                                       {isAnand && <Star className="w-3 md:w-3.5 h-3 md:h-3.5 inline mr-1 text-[#f9a825]" />}
                                       {hospital.name}
                                    </td>
                                    <td className={`hidden md:table-cell p-3 border-r border-gray-200 align-middle ${isAnand ? 'border-[#00a651]' : ''}`}>{hospital.address}</td>
                                    <td className={`hidden lg:table-cell p-3 border-r border-gray-200 align-middle ${isAnand ? 'border-[#00a651]' : ''}`}>{hospital.district}</td>
                                    <td className={`hidden lg:table-cell p-3 border-r border-gray-200 align-middle ${isAnand ? 'border-[#00a651]' : ''}`}>{hospital.city}</td>
                                    <td className={`p-2 md:p-3 border-r border-gray-200 align-middle ${isAnand ? 'border-[#00a651]' : ''}`}>{hospital.specialty}</td>
                                    <td className={`p-2 md:p-3 border-r border-gray-200 align-middle whitespace-nowrap ${isAnand ? 'border-[#00a651]' : ''}`}>{hospital.phone}</td>
                                    <td className={`hidden lg:table-cell p-3 border-r border-gray-200 align-middle whitespace-nowrap ${isAnand ? 'border-[#00a651]' : ''}`}>{hospital.from}</td>
                                    <td className={`hidden lg:table-cell p-3 border-r border-gray-200 align-middle whitespace-nowrap ${isAnand ? 'border-[#00a651]' : ''}`}>{hospital.to}</td>
                                    <td className={`p-2 md:p-3 text-center align-middle font-bold ${isAnand ? 'text-[#00a651]' : ''}`}>{hospital.status}</td>
                                 </tr>
                              );
                           })}
                        </tbody>
                     </table>
                  </div>

               </div>
            </div>
         </section>

         {/* Surgery Section */}
         <section className="py-16 text-center max-w-4xl mx-auto px-4">
            <div className="relative group overflow-hidden h-[500px] rounded-lg shadow-xl">
               {surgeryImages.map((img, index) => (
                  <img
                     key={index}
                     src={img}
                     alt={`Surgery Procedure ${index + 1}`}
                     className={`absolute top-0 left-0 w-full h-[500px] object-cover transition-opacity duration-1000 ease-in-out ${index === currentSurgerySlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  />
               ))}
               <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <button onClick={prevSurgerySlide} className="bg-white/80 p-2 rounded-full shadow-lg text-blue-600 hover:bg-white backdrop-blur-sm"><ChevronLeft className="w-8 h-8" /></button>
                  <button onClick={nextSurgerySlide} className="bg-white/80 p-2 rounded-full shadow-lg text-blue-600 hover:bg-white backdrop-blur-sm"><ChevronRight className="w-8 h-8" /></button>
               </div>
            </div>
         </section>

         {/* Dentist Knows Best Section */}
         <section className="relative w-full min-h-[900px] flex items-center bg-white mt-12 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${dentistBlurBg})`, backgroundSize: 'cover', backgroundPosition: 'center right' }}></div>

            {/* White Gradient Fade Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none" style={{
               background: 'radial-gradient(120% 140% at -10% 50%, rgba(255,255,255,1) 35%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0) 75%)'
            }}></div>

            {/* Content */}
            <div className="relative z-20 w-full max-w-[1400px] mx-auto px-8 md:px-16 pt-24 pb-[300px]">
               <div className="w-full md:w-[60%] lg:w-[48%]">



                  <h2 className="text-[44px] md:text-[54px] font-serif text-[#333] mb-16 leading-[1.2] tracking-wide">
                     Your Dentist Knows<br />Best
                  </h2>

                  <div className="space-y-12">
                     <div>
                        <h3 className="text-[22px] font-serif text-[#444] mb-3">Don't rush when you brush!</h3>
                        <p className="text-[14px] text-[#666] leading-[1.8] tracking-wide">"<span className="font-bold text-[#444]">Take your time, make it shine!</span> At Anand Dental, we encourage thorough brushing for a radiant smile that lasts a lifetime."</p>
                     </div>

                     <div>
                        <h3 className="text-[22px] font-serif text-[#444] mb-3">Visit your dentist once in 6 months</h3>
                        <p className="text-[14px] text-[#666] leading-[1.8] tracking-wide">"<span className="font-bold text-[#444]">Regular check-ups are key to oral health.</span> Visiting Anand Dental every six months helps catch potential issues early, ensures your teeth are professionally cleaned, and keeps your smile shining bright."</p>
                     </div>

                     <div>
                        <h3 className="text-[22px] font-serif text-[#444] mb-3">Don't Forget to Floss!</h3>
                        <p className="text-[14px] text-[#666] leading-[1.8] tracking-wide">"<span className="font-bold text-[#444]">Flossing is just as important as brushing!</span> It reaches the nooks and crannies your toothbrush can't, keeping your gums healthy and your smile bright. Remember, a good dental routine includes both brushing and flossing!"</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Consultants and Staff */}
         <section className="relative z-20 bg-[#007bff] text-white pt-16 pb-24 px-0 md:px-8 rounded-tr-[150px] lg:rounded-tr-[200px] -mt-[250px]">
            <div className="max-w-[1400px] mx-auto">


               <h2 className="text-[44px] font-serif text-center mb-16 tracking-wide relative z-20">Our Staff</h2>
               <div className="flex flex-wrap justify-center gap-6 px-4 lg:px-12 relative z-20">
                  {[
                     { name: "Dr. Gyan Prakash \nSharma", role: "BDS\nJUNIOR DENTIST", img: staffImg1 },
                     { name: "Dr. Apeksha\nkaushik", role: "BDS\nSENIOR DENTIST", img: staffImg2 },
                     { name: "Dr. Sonali\nSahu", role: "BDS\nJUNIOR DENTIST", img: staffImg3 },
                     { name: "Dr. Shreya", role: "BDS\nJUNIOR DENTIST", img: staffImg4 },
                     { name: "Dr. Savita Yadav", role: "MDS\nORAL AND MAXILLOFACIAL SURGEON", img: staffImg5 }
                  ].map((staff, i) => (
                     <div key={i} className="w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(20%-1.5rem)] min-w-[200px] bg-white rounded-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col" data-aos="fade-up" data-aos-delay={i * 100}>
                        <img src={staff.img} alt={`Staff ${i + 1}`} className="w-full h-[220px] object-cover object-top" />
                        <div className="p-6 pt-8 text-center flex-grow flex flex-col justify-center">
                           <h3 className="text-[17px] font-serif font-bold mb-3 text-[#333] whitespace-pre-line leading-snug" dangerouslySetInnerHTML={{ __html: staff.name }}></h3>
                           <p className="text-[12px] text-gray-400 font-medium whitespace-pre-line leading-relaxed">{staff.role}</p>
                        </div>
                     </div>
                  ))}
               </div>


            </div>

            {/* Wavy bottom hanging over the next section */}
            <div className="absolute left-0 bottom-0 w-full translate-y-[99%] z-10 leading-none">
               <svg viewBox="0 0 1440 100" className="w-full block h-[40px] md:h-[60px]" preserveAspectRatio="none">
                  <path fill="#007bff" d="M0,0 L0,50 Q36,100 72,50 T144,50 T216,50 T288,50 T360,50 T432,50 T504,50 T576,50 T648,50 T720,50 T792,50 T864,50 T936,50 T1008,50 T1080,50 T1152,50 T1224,50 T1296,50 T1368,50 T1440,50 L1440,0 Z" />
               </svg>
            </div>
         </section>

         {/* Family Section */}
         <section className="relative z-30 w-full pt-32 pb-32 -mt-[80px] lg:-mt-[150px]">
            <div className="w-[95%] max-w-[1300px] mx-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] flex flex-col bg-transparent">

               {/* Top Scalloped Edge */}
               <div className="w-full h-[20px] flex flex-col md:flex-row" style={{
                  maskImage: 'radial-gradient(circle at 10px 10px, black 10px, transparent 11px), linear-gradient(black, black)',
                  maskSize: '20px 20px, 100% 10px',
                  maskPosition: 'top left, bottom left',
                  maskRepeat: 'repeat-x, no-repeat',
                  WebkitMaskImage: 'radial-gradient(circle at 10px 10px, black 10px, transparent 11px), linear-gradient(black, black)',
                  WebkitMaskSize: '20px 20px, 100% 10px',
                  WebkitMaskPosition: 'top left, bottom left',
                  WebkitMaskRepeat: 'repeat-x, no-repeat'
               }}>
                  <div className="w-full md:w-[45%] h-full bg-white"></div>
                  <div className="hidden md:block w-full md:w-[55%] h-full bg-[#6bb3ff]"></div>
               </div>

               {/* Main Content (Drop shadow traces this perfectly because it has no mask!) */}
               <div className="w-full flex flex-col md:flex-row bg-white rounded-b-[100px] md:rounded-b-[250px] overflow-hidden">

                  {/* Left Side (White) */}
                  <div className="w-full md:w-[45%] p-10 md:p-16 pt-20 bg-white relative z-20" data-aos="fade-right">
                     <h2 className="text-[26px] font-serif text-[#333] mb-6 leading-snug tracking-wide">Dental Care for The Whole<br />Family</h2>
                     <p className="text-[13px] text-[#666] mb-10 leading-relaxed font-medium">"<span className="font-bold text-[#444]">Your Family's Partner in Lifelong Oral Health.</span> We provide comprehensive dental care for all ages, ensuring bright smiles from toddlers to grandparents." <span role="img" aria-label="smile">🤩</span></p>

                     <div className="space-y-6 text-[#555] font-serif text-[15px]">
                        <div className="flex items-center"><Check className="text-[#007bff] mr-4 w-5 h-5 stroke-[3]" /> Adult Care</div>
                        <div className="flex items-center"><Check className="text-[#007bff] mr-4 w-5 h-5 stroke-[3]" /> Child Care</div>
                        <div className="flex items-center"><Check className="text-[#007bff] mr-4 w-5 h-5 stroke-[3]" /> Orthodontic Care</div>
                     </div>
                  </div>

                  {/* Right Side (Light Blue Box + Image) */}
                  <div className="w-full md:w-[55%] relative flex flex-col bg-white" data-aos="fade-left" data-aos-delay="200">
                     {/* Light Blue Box */}
                     <div className="w-full p-10 md:p-16 pt-20 pb-16 bg-[#6bb3ff] flex flex-col text-center items-center justify-center rounded-bl-[40px] rounded-br-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] relative z-20">
                        <h2 className="text-[34px] md:text-[40px] font-serif text-white mb-8 leading-snug tracking-wide">We are A Full-Service<br />Dental Hospital</h2>
                        <p className="text-white text-[13px] leading-[1.8] font-medium max-w-lg mx-auto mb-10">
                           "<span className="font-bold">Anand Dental: Your All-Inclusive Dental Care Destination.</span> We offer various dental services, from preventive care and routine check-ups to advanced treatments. Our team of experienced professionals is dedicated to providing personalised care for every member of your family. Trust us to keep your family's smiles healthy and bright."
                        </p>
                        <button className="bg-[#4aa5ff] hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition">
                           Get Started
                        </button>
                     </div>

                     {/* Image with Radial Fade */}
                     <div className="w-full relative h-[400px]">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${receptionBg})` }}></div>
                        {/* Gradient overlay to create the soft white glowing mask effect */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.7)_50%,rgba(255,255,255,1)_80%,rgba(255,255,255,1)_100%)]"></div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Reviews Section */}
         <section className="w-full py-24 bg-white relative">
            <div className="max-w-[1200px] mx-auto px-6">
               <h2 className="text-center text-[28px] font-bold text-[#222] mb-12">What our customers say</h2>

               {/* Top Banner */}
               <div className="bg-[#f5f5f5] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between mb-8">
                  <div>
                     <div className="flex items-center space-x-2 text-[22px] font-bold mb-2">
                        <span className="flex tracking-tighter">
                           <span className="text-[#4285F4]">G</span>
                           <span className="text-[#EA4335]">o</span>
                           <span className="text-[#FBBC05]">o</span>
                           <span className="text-[#4285F4]">g</span>
                           <span className="text-[#34A853]">l</span>
                           <span className="text-[#EA4335]">e</span>
                        </span>
                        <span className="text-[#444]">Reviews</span>
                     </div>
                     <div className="flex items-center space-x-2">
                        <span className="font-bold text-xl text-[#333]">4.9</span>
                        <div className="flex text-[#FBBC05]">
                           <Star fill="currentColor" className="w-5 h-5" />
                           <Star fill="currentColor" className="w-5 h-5" />
                           <Star fill="currentColor" className="w-5 h-5" />
                           <Star fill="currentColor" className="w-5 h-5" />
                           <Star fill="currentColor" className="w-5 h-5" />
                        </div>
                        <span className="text-gray-500 text-sm font-medium">(231)</span>
                     </div>
                  </div>
                  <div className="mt-6 md:mt-0">
                     <button className="bg-[#1a73e8] hover:bg-blue-600 text-white font-semibold py-2.5 px-6 rounded text-sm transition shadow-sm">
                        Review us on Google
                     </button>
                  </div>
               </div>

               {/* Cards Grid */}
               <ReviewSlider />

               {/* Watermark */}
               <div className="flex justify-center mt-8">
                  <div className="bg-[#f5f5f5] text-gray-500 text-[11px] px-3 py-1.5 rounded-full flex items-center font-medium">
                     <Shield className="w-3 h-3 mr-1.5" /> Free Google Reviews Widget
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
                        <a href="#" className="w-9 h-9 rounded-full bg-[#3b5998] flex items-center justify-center hover:scale-110 transition shadow-md">
                           <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" /></svg>
                        </a>
                        <a href="#" className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition shadow-md">
                           <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                        </a>
                        <a href="#" className="w-9 h-9 rounded-full bg-[#E1306C] flex items-center justify-center hover:scale-110 transition shadow-md">
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
                           <h4 className="font-serif text-[18px] mb-4 font-normal tracking-wide uppercase">Anand Dental<br />Jaipur</h4>
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
               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
         </a>
      </div>
   );
}

export default App;
