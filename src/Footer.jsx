import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';
import hospitalLogo from './assets/hospital_logo.jpg';

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-white">

      {/* ── Top Section ── */}
      <div className="max-w-[1300px] mx-auto px-8 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1: Logo + About */}
        <div>
          <img src={hospitalLogo} alt="Anand Dental Jaipur" className="h-[70px] w-auto bg-white rounded-lg p-1 mb-5" />
          <p className="text-gray-400 text-[13.5px] leading-[1.9] mb-5">
            Anand Dental is committed to providing world-class dental care with a gentle touch. Your smile is our mission.
          </p>
          <div className="flex space-x-3">
            {/* Facebook */}
            <a href="#" className="w-9 h-9 rounded-full bg-[#3b5998] flex items-center justify-center hover:scale-110 transition shadow-md">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/></svg>
            </a>
            {/* WhatsApp */}
            <a href="#" className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition shadow-md">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/ananddentalhospitaljaipur?stkn=MTYybmU2dDBkaGtucg%3D%3D" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#E1306C] flex items-center justify-center hover:scale-110 transition shadow-md">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="w-9 h-9 rounded-full bg-[#0077b5] flex items-center justify-center hover:scale-110 transition shadow-md">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h3 className="text-white font-bold text-[16px] tracking-widest uppercase mb-6 border-b border-[#1e3a5f] pb-3">
            Quick Links
          </h3>
          <ul className="space-y-3 text-[13.5px]">
            {[
              { label: 'Home', to: '/' },
              { label: 'Contact Us', to: '/contact' },
              { label: 'Book Appointment', to: '/book-appointment' },
              { label: 'Our Services', to: '/services' },
              { label: 'Our Doctors', to: '/#doctors' },
            ].map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="text-gray-400 hover:text-[#4aa5ff] transition flex items-center gap-2"
                >
                  <span className="text-[#4aa5ff] text-[10px]">▶</span> {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Contact Info */}
        <div>
          <h3 className="text-white font-bold text-[16px] tracking-widest uppercase mb-6 border-b border-[#1e3a5f] pb-3">
            Contact Us
          </h3>
          <ul className="space-y-5 text-[13.5px] text-gray-400">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-[#4aa5ff] shrink-0" />
              <div>
                <p>+91 94622 09414</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-[#4aa5ff] shrink-0" />
              <p>info@ananddentalclinic.com</p>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-[#4aa5ff] shrink-0" />
              <p>45,46, Opp. Parth Chiranjivi Complex,<br />Hanuman Vatika A, Gokulpura,<br />Jaipur, Rajasthan 302012</p>
            </li>
          </ul>
        </div>

        {/* Col 4: Working Hours */}
        <div>
          <h3 className="text-white font-bold text-[16px] tracking-widest uppercase mb-6 border-b border-[#1e3a5f] pb-3">
            Working Hours
          </h3>
          <ul className="space-y-2.5 text-[13px] text-gray-400">
            {[
              ['Monday', '10:00 am – 8:00 pm'],
              ['Tuesday', '10:00 am – 8:00 pm'],
              ['Wednesday', '10:00 am – 8:00 pm'],
              ['Thursday', '10:00 am – 8:00 pm'],
              ['Friday', '10:00 am – 8:00 pm'],
              ['Saturday', '10:00 am – 8:00 pm'],
              ['Sunday', '10:00 am – 8:00 pm'],
            ].map(([day, time]) => (
              <li key={day} className="flex justify-between gap-4">
                <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-[#4aa5ff]" />{day}</span>
                <span className="text-white/70">{time}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/book-appointment"
            className="mt-6 inline-block bg-[#4aa5ff] hover:bg-blue-500 text-white font-bold py-2.5 px-7 rounded-full shadow-lg transition-transform hover:scale-105 duration-300 text-[13px]"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-[#1e3a5f]" />

      {/* ── Bottom Bar ── */}
      <div className="max-w-[1300px] mx-auto px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[12.5px] text-gray-500">
        <p>© {new Date().getFullYear()} <span className="text-white font-semibold">Anand Dental Jaipur</span>. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 mx-0.5" /> by Anand Dental Team
        </p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
}
