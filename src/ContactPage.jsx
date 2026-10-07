import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, ShieldPlus, Menu, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hospitalLogo from './assets/logo.png';
import rghsLogo from './assets/RGHSScheme.png';
import smilingWoman from './assets/smiling_woman.jpg';
import dentistBlurBg from './assets/dentist_blur_bg.jpg';
import Footer from './Footer';

export default function ContactPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 60 });
    setTimeout(() => AOS.refresh(), 300);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* ── Header ── */}
      <header className="bg-white py-3 px-8 sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1250px] mx-auto flex justify-between items-center relative">
          <div className="flex items-center space-x-6">
            <img src={hospitalLogo} alt="Anand Dental Jaipur Logo" className="h-[70px] w-auto" />
            <img src={rghsLogo} alt="RGHS Scheme" className="h-[90px] w-auto ml-2" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-[14px] font-black text-[#0066cc] tracking-wide uppercase">
            <Link to="/" className="hover:text-blue-800 transition">HOME</Link>
            <Link to="/contact" className="text-blue-900 border-b-2 border-blue-600 pb-0.5 transition">CONTACT US</Link>
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
            <Link to="/contact" className="text-blue-900 transition" onClick={() => setIsMobileMenuOpen(false)}>CONTACT US</Link>
            <Link to="/services" className="hover:text-blue-800 transition" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</Link>
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
            Contact Our Dentist
          </h1>
          <p className="text-gray-400 text-[16px] mb-8">Appointments are Available!</p>
          <a href="tel:+919462209414" className="inline-block bg-[#4aa5ff] hover:bg-blue-600 text-white font-bold py-3 px-9 rounded-full shadow-lg transition-transform hover:scale-105 duration-300 text-[15px]">
            Book Appointment
          </a>
        </div>
      </section>

      {/* ── Blue Hospital Name Banner ── */}
      <div className="bg-[#1a7ee6] text-white text-center py-10 px-6" data-aos="fade-up">
        <p className="text-[15px] font-medium tracking-widest text-blue-200 mb-2">Anand Dental's</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-widest uppercase">Anand Dental Hospital</h2>
      </div>

      {/* ── Section 2: First-Time Patient ── */}
      <section className="relative py-20 px-8 overflow-hidden"
        style={{ backgroundImage: `url(${dentistBlurBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-white/80" />
        <div className="relative z-10 max-w-[820px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#222] mb-5 leading-tight" data-aos="fade-up">
            First-Time Patient?
          </h2>
          <p className="text-[#1a7ee6] font-bold text-[18px] mb-8" data-aos="fade-up" data-aos-delay="100">
            +91 94622 09414
          </p>
          <div className="space-y-6 text-[15px] text-[#444] leading-[1.9]" data-aos="fade-up" data-aos-delay="150">
            <p>🌟 <span className="font-bold text-[#222]">Welcome to Anand Dental Jaipur!</span> 🌟</p>
            <p>At Anand Dental, we believe that every smile tells a story. Our passionate team of experienced dentists is committed to creating beautiful, healthy smiles that light up your life. Here's what makes us stand out:</p>
            <div className="space-y-4">
              <p data-aos="fade-up" data-aos-delay="200"><span className="font-black text-[#222]">1.</span><br /><span className="font-bold text-[#222]">Personalized Care:</span> Your smile is unique, and so is our approach. We tailor treatments to your specific needs, ensuring optimal results.</p>
              <p data-aos="fade-up" data-aos-delay="250"><span className="font-black text-[#222]">2.</span><br /><span className="font-bold text-[#222]">Cutting-Edge Technology:</span> From digital X-rays to pain-free procedures, we stay ahead with the latest advancements in dentistry.</p>
              <p data-aos="fade-up" data-aos-delay="300"><span className="font-black text-[#222]">3.</span><br /><span className="font-bold text-[#222]">Comfortable Environment:</span> Our cozy clinic feels more like a spa than a dental office. Relax, sip on herbal tea, and let us take care of you.</p>
              <div data-aos="fade-up" data-aos-delay="350">
                <p><span className="font-black text-[#222]">4.</span></p>
                <p><span className="font-bold text-[#222]">Comprehensive Services:</span></p>
                <ul className="list-disc list-inside mt-2 space-y-1.5 ml-2">
                  <li><span className="font-bold text-[#222]">Routine Check-ups:</span> Prevention is key! Regular visits keep your smile in top shape.</li>
                  <li><span className="font-bold text-[#222]">Cosmetic Dentistry:</span> Enhance your smile with teeth whitening, veneers, and more.</li>
                  <li><span className="font-bold text-[#222]">Implants &amp; Restorations:</span> Replace missing teeth seamlessly.</li>
                  <li><span className="font-bold text-[#222]">Orthodontics:</span> Straighten your smile discreetly with clear aligners.</li>
                  <li><span className="font-bold text-[#222]">Emergency Care:</span> We're here when you need us most.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: RGHS + Hours ── */}
      <section className="bg-[#b2dfdb] py-16 px-8">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-[#00695c] text-center mb-12 uppercase leading-snug" data-aos="fade-up">
            RGHS Approved Trusted<br />Dental Hospital
          </h2>
          <div className="flex flex-col md:flex-row items-start justify-center gap-16">
            {/* RGHS Card */}
            <div className="bg-[#80cbc4] rounded-2xl p-10 flex flex-col items-center justify-center shadow-xl w-full md:w-[420px]" data-aos="fade-right">
              <div className="w-[220px] h-[180px] mb-6 flex items-center justify-center">
                <img src={rghsLogo} alt="RGHS Scheme" className="w-[140px] h-auto drop-shadow-lg" />
              </div>
              <p className="text-[#004d40] font-black text-2xl tracking-widest uppercase">RGHS</p>
              <p className="text-[#004d40] font-semibold text-[15px] text-center mt-1 tracking-wide">Rajasthan Government<br />Health Scheme</p>
            </div>
            {/* Hours */}
            <div className="w-full md:w-[300px]" data-aos="fade-left" data-aos-delay="200">
              <h3 className="text-[#00695c] font-black text-[20px] mb-6 uppercase tracking-wide">Hours:</h3>
              <ul className="space-y-3 text-[14px] text-[#004d40] font-medium">
                {[['Monday:', '10 am – 8 pm'], ['Tuesday:', '10am – 8 pm'], ['Wednesday:', '10 am – 8 pm'], ['Thursday:', '10 am – 8 pm'], ['Friday:', '10 am – 8 pm'], ['Saturdays:', '10 am – 8 pm'], ['Sunday:', '10 am – 8 pm']].map(([day, time]) => (
                  <li key={day} className="flex justify-between border-b border-[#80cbc4] pb-2">
                    <span className="font-semibold">{day}</span><span>{time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Contact / Maps Footer ── */}
      <section className="relative w-full pt-16 pb-24 bg-white overflow-hidden">
        <div className="absolute top-10 left-[-10%] w-[500px] h-[500px] bg-[#f5f5f5] rounded-full z-0" />
        <div className="absolute top-10 right-[-10%] w-[500px] h-[500px] bg-[#f5f5f5] rounded-full z-0" />
        <div className="max-w-[1300px] mx-auto px-0 md:px-6 relative z-10">
          <div className="bg-gradient-to-r from-[#1762c9] to-[#3994f5] text-white rounded-none md:rounded-bl-[280px] md:rounded-br-[120px] pt-16 pb-24 px-10 md:pl-20 md:pr-12 flex flex-col md:flex-row gap-10 shadow-2xl">
            {/* Col 1 */}
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
              <a href="tel:+919462209414" className="inline-block border border-white hover:bg-white hover:text-[#1762c9] text-white font-medium py-2 px-6 rounded text-[15px] transition mb-10 self-start shadow-sm">Book Appointment</a>
              <div className="flex space-x-3">
                <a href="#" className="w-9 h-9 rounded-full bg-[#3b5998] flex items-center justify-center hover:scale-110 transition shadow-md"><svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/></svg></a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition shadow-md"><svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg></a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#E1306C] flex items-center justify-center hover:scale-110 transition shadow-md"><svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#0077b5] flex items-center justify-center hover:scale-110 transition shadow-md"><svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
              </div>
            </div>
            {/* Col 2 */}
            <div className="w-full md:w-[35%] flex flex-col" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-white rounded-full p-1 mt-1 shadow-sm"><Clock className="w-4 h-4 text-[#1762c9]" /></div>
                <div>
                  <h4 className="font-serif text-[18px] mb-4 font-normal tracking-wide uppercase">Anand Dental<br />Hospital</h4>
                  <p className="text-[14px] font-medium leading-relaxed max-w-[280px] text-white">45,46, Opp. Parth Chiranjivi Complex,<br />Hanuman Vatika A, Gokulpura,<br />Jaipur, Rajasthan 302012</p>
                </div>
              </div>
              <div className="w-full h-[200px] rounded-sm overflow-hidden border-2 border-white/20 shadow-lg mt-auto">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.7639586648697!2d75.70951398053819!3d26.942696516369644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db30020854b0f%3A0xd2dfd395e3eb1f13!2sANAND%20DENTAL!5e0!3m2!1sen!2sin!4v1791226542150!5m2!1sen!2sin" width="100%" height="100%" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
            {/* Col 3 */}
            <div className="w-full md:w-[35%] flex flex-col" data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-white rounded-full p-1 mt-1 shadow-sm"><Clock className="w-4 h-4 text-[#1762c9]" /></div>
                <div>
                  <h4 className="font-serif text-[18px] mb-4 font-normal tracking-wide uppercase">Anand Dental<br />Branch 2</h4>
                  <p className="text-[14px] font-medium leading-relaxed max-w-[280px] text-white">45,46, Opp. Parth Chiranjivi Complex,<br />Hanuman Vatika A, Gokulpura,<br />Jaipur, Rajasthan 302012</p>
                </div>
              </div>
              <div className="w-full h-[200px] rounded-sm overflow-hidden border-2 border-white/20 shadow-lg mt-auto">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.7639586648697!2d75.70951398053819!3d26.942696516369644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db30020854b0f%3A0xd2dfd395e3eb1f13!2sANAND%20DENTAL!5e0!3m2!1sen!2sin!4v1791226542150!5m2!1sen!2sin" width="100%" height="100%" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
