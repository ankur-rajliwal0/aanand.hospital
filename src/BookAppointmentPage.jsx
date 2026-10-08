import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, ShieldPlus, Menu, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hospitalLogo from './assets/logo.png';
import rghsLogo from './assets/RGHSScheme.png';
import dentistMaskBg from './assets/dentist_mask_bg.jpg';
import Footer from './Footer';

export default function BookAppointmentPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 60 });
    setTimeout(() => AOS.refresh(), 300);
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment request submitted! We will contact you shortly.');
  };

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* ── Header ── */}
      <header className="bg-white py-3 px-8 sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1250px] mx-auto flex justify-between items-center relative">
          <div className="flex items-center space-x-6">
            <img src={hospitalLogo} alt="Anand Dental Jaipur Logo" className="h-[70px] w-auto" />
            <span className="ml-3 lg:ml-4 text-[11px] md:text-xs lg:text-sm font-black text-[#1D70B8] uppercase tracking-wider hidden sm:block max-w-[200px] md:max-w-[250px] lg:max-w-[350px] leading-snug">RGHS APPROVED ANAND DENTAL HOSPITAL AND DIAGNOSTIC CENTRE</span>
            <img src={rghsLogo} alt="RGHS Scheme" className="h-[90px] w-auto ml-2" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-[14px] font-black text-[#0066cc] tracking-wide uppercase">
            <Link to="/" className="hover:text-blue-800 transition">HOME</Link>
            <Link to="/contact" className="hover:text-blue-800 transition">CONTACT US</Link>
            <Link to="/services" className="hover:text-blue-800 transition flex items-center gap-1">SERVICES <span className="text-[9px] mt-0.5">▼</span></Link>
            <Link to="/blogs" className="hover:text-blue-800 transition">BLOGS</Link>
            <a href="tel:+919462209414" className="text-blue-900 border-b-2 border-blue-600 pb-0.5 transition">BOOK APPOINTMENT</a>
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
            <a href="tel:+919462209414" className="text-blue-900 transition" onClick={() => setIsMobileMenuOpen(false)}>BOOK APPOINTMENT</a>
          </nav>
        )}
      </header>

      {/* ── Section 1: Hero + Form ── */}
      <section className="relative min-h-[480px] flex items-stretch overflow-hidden">
        {/* Background dental image */}
        <div className="absolute inset-0 z-0">
          <img
            src={dentistMaskBg}
            alt="Dental procedure"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Content row */}
        <div className="relative z-10 w-full max-w-[1300px] mx-auto px-8 py-16 flex flex-col md:flex-row items-center gap-10">

          {/* Left: Text */}
          <div className="w-full md:w-1/2 text-white" data-aos="fade-right">
            <p className="text-[13px] tracking-[0.3em] uppercase mb-4 text-gray-300">
              A Leading Visionary <span className="text-[#4aa5ff]">In</span> Dental Care.
            </p>
            <h1 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-5">
              Where Confidence<br />Begins With A<br />Smile
            </h1>
            <p className="text-[15px] font-medium text-gray-200">
              Smile <span className="font-black text-white">Bright</span>, Live{' '}
              <span className="font-black text-white">Light.</span>
            </p>
          </div>

          {/* Right: Form */}
          <div className="w-full md:w-[45%]" data-aos="fade-left" data-aos-delay="150">
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden"
            >
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full bg-white/90 text-gray-800 px-5 py-4 text-[14px] border-b border-gray-200 outline-none placeholder-gray-500 block"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-white/90 text-gray-800 px-5 py-4 text-[14px] border-b border-gray-200 outline-none placeholder-gray-500 block"
              />
              <input
                type="tel"
                placeholder="Phone"
                required
                className="w-full bg-white/90 text-gray-800 px-5 py-4 text-[14px] border-b border-gray-200 outline-none placeholder-gray-500 block"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-white/90 text-gray-800 px-5 py-4 text-[14px] outline-none placeholder-gray-500 block resize-none"
              />
              <div className="bg-white/90 px-5 py-3 flex justify-end">
                <a
                  href="tel:+919462209414"
                  className="inline-block bg-[#4aa5ff] hover:bg-blue-600 text-white font-bold py-2 px-7 rounded-full shadow-lg transition-transform hover:scale-105 duration-300 text-[14px]"
                >
                  Book Appointment
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ── Section 2: Contact / Maps Footer ── */}
      <section className="relative w-full pt-16 pb-24 bg-white overflow-hidden">
        <div className="absolute top-10 left-[-10%] w-[500px] h-[500px] bg-[#f5f5f5] rounded-full z-0" />
        <div className="absolute top-10 right-[-10%] w-[500px] h-[500px] bg-[#f5f5f5] rounded-full z-0" />

        <div className="max-w-[1300px] mx-auto px-0 md:px-6 relative z-10">
          <div className="bg-gradient-to-r from-[#1762c9] to-[#3994f5] text-white rounded-none md:rounded-bl-[280px] md:rounded-br-[120px] pt-16 pb-24 px-10 md:pl-20 md:pr-12 flex flex-col md:flex-row gap-10 shadow-2xl">

            {/* Col 1: Contact Info */}
            <div className="w-full md:w-[30%] flex flex-col" data-aos="fade-up">
              <div className="flex items-start space-x-4 mb-8">
                <Phone className="w-5 h-5 mt-1" fill="white" />
                <div>
                  <h4 className="font-serif text-[20px] mb-2 font-normal tracking-wide">Call</h4>
                  <p className="text-[15px] mb-1 font-medium tracking-wider">+91 94622 09414</p>
                  <p className="text-[15px] font-medium tracking-wider"></p>
                </div>
              </div>
              <div className="flex items-start space-x-4 mb-10">
                <Mail className="w-5 h-5 mt-1" fill="white" />
                <div>
                  <h4 className="font-serif text-[20px] mb-2 font-normal tracking-wide">Email Us</h4>
                  <p className="text-[14px] font-medium">dr.savita1989@gmail.com</p>
                </div>
              </div>
              <a href="tel:+919462209414" className="inline-block border border-white hover:bg-white hover:text-[#1762c9] text-white font-medium py-2 px-6 rounded text-[15px] transition mb-10 self-start shadow-sm">
                Book Appointment
              </a>
              <div className="flex space-x-3">
                <a href="#" className="w-9 h-9 rounded-full bg-[#3b5998] flex items-center justify-center hover:scale-110 transition shadow-md">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/></svg>
                </a>
                <a href="https://wa.me/919462209414" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition shadow-md">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                </a>
                <a href="https://www.instagram.com/ananddentalhospitaljaipur?stkn=MTYybmU2dDBkaGtucg%3D%3D" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#E1306C] flex items-center justify-center hover:scale-110 transition shadow-md">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#0077b5] flex items-center justify-center hover:scale-110 transition shadow-md">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>

            {/* Col 2: Anand Dental */}
            <div className="w-full md:w-[35%] flex flex-col" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-white rounded-full p-1 mt-1 shadow-sm"><Clock className="w-4 h-4 text-[#1762c9]" /></div>
                <div>
                  <h4 className="font-serif text-[16px] mb-4 font-normal tracking-wide uppercase leading-snug">RGHS APPROVED ANAND DENTAL HOSPITAL<br />AND DIAGNOSTIC CENTRE</h4>
                  <p className="text-[14px] font-medium leading-relaxed max-w-[280px] text-white">
                    45,46, Opp. Parth Chiranjivi Complex,<br />Hanuman Vatika A, Gokulpura,<br />Jaipur, Rajasthan 302012
                  </p>
                </div>
              </div>
              <div className="w-full h-[200px] rounded-sm overflow-hidden border-2 border-white/20 shadow-lg mt-auto">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.7639586648697!2d75.70951398053819!3d26.942696516369644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db30020854b0f%3A0xd2dfd395e3eb1f13!2sANAND%20DENTAL!5e0!3m2!1sen!2sin!4v1791226542150!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>

            {/* Col 3: Shekhawat Hospital */}
            <div className="w-full md:w-[35%] flex flex-col" data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-white rounded-full p-1 mt-1 shadow-sm"><Clock className="w-4 h-4 text-[#1762c9]" /></div>
                <div>
                  <h4 className="font-serif text-[16px] mb-4 font-normal tracking-wide uppercase leading-snug">RGHS APPROVED ANAND DENTAL HOSPITAL<br />AND DIAGNOSTIC CENTRE (BRANCH 2)</h4>
                  <p className="text-[14px] font-medium leading-relaxed max-w-[280px] text-white">
                    45,46, Opp. Parth Chiranjivi Complex,<br />Hanuman Vatika A, Gokulpura,<br />Jaipur, Rajasthan 302012
                  </p>
                </div>
              </div>
              {/* Removed Map from Branch 2 */}
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
