import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import hospitalLogo from './assets/logo.png';
import radheLogo from './assets/Radhe Dental Hospital Emblem.png';
import rghsLogo from './assets/RGHSScheme.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white py-1.5 sm:py-2.5 px-2 sm:px-6 lg:px-8 sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-[1550px] mx-auto flex items-center justify-between gap-1.5 sm:gap-4 lg:gap-6 relative">
        
        {/* ── Box 1: 1st Branch (Anand Dental Hospital) ── */}
        <Link to="/" className="flex items-center shrink-0 group">
          <img
            src={hospitalLogo}
            alt="Anand Dental Hospital Logo"
            className="h-[34px] sm:h-[58px] md:h-[68px] w-auto shrink-0 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="ml-1.5 sm:ml-3 flex flex-col justify-center">
            <span className="text-[7px] sm:text-[9.5px] font-black text-sky-600 uppercase tracking-wider leading-none mb-0.5">
              RGHS APPROVED
            </span>
            <span className="text-[10px] sm:text-[13px] md:text-[14.5px] lg:text-[15px] font-black text-[#1D70B8] uppercase tracking-tight leading-tight whitespace-nowrap">
              ANAND DENTAL<span className="hidden sm:inline"> HOSPITAL</span>
            </span>
            <span className="text-[7.5px] sm:text-[9px] md:text-[9.5px] font-bold text-gray-500 uppercase tracking-wider leading-none mt-0.5 hidden sm:block">
              AND DIAGNOSTIC CENTRE
            </span>
          </div>
        </Link>

        {/* ── Box 2: 2nd Branch (Radhe Dental Hospital) ── */}
        <div className="flex items-center pl-1.5 sm:pl-4 md:pl-5 border-l border-gray-200/90 sm:border-l-2 shrink-0">
          <img
            src={radheLogo}
            alt="Radhe Dental Hospital Logo"
            className="h-[32px] sm:h-[54px] md:h-[66px] w-auto object-contain rounded-full shrink-0 drop-shadow-sm transition-transform duration-300 hover:scale-105"
          />
          <div className="ml-1.5 sm:ml-3 flex flex-col justify-center">
            <span className="text-[9.5px] sm:text-[13px] md:text-[14px] font-black text-[#1D70B8] uppercase tracking-tight whitespace-nowrap leading-tight">
              RADHE DENTAL<span className="hidden md:inline"> HOSPITAL</span>
            </span>
            <a
              href="tel:+919462209414"
              className="mt-0.5 sm:mt-1 flex items-center gap-0.5 sm:gap-1 text-[9px] sm:text-[12px] md:text-[12.5px] font-bold text-gray-700 hover:text-[#0066cc] transition-colors w-fit group"
              title="Call Radhe Dental Hospital: +91 94622 09414"
            >
              <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#0066cc] fill-[#0066cc] group-hover:scale-110 transition-transform shrink-0" />
              <span className="font-extrabold text-[#0066cc] tracking-tight sm:tracking-wide whitespace-nowrap leading-none">+91 94622 09414</span>
            </a>
          </div>
        </div>

        {/* ── Box 3: RGHS Logo + Navigation Links ── */}
        <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6 shrink-0">
          {/* RGHS Scheme Logo */}
          <img
            src={rghsLogo}
            alt="RGHS Scheme"
            className="h-[56px] sm:h-[66px] md:h-[74px] lg:h-[80px] w-auto shrink-0 hidden md:block"
          />

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-6 text-[13.5px] font-black text-[#0066cc] tracking-wide uppercase whitespace-nowrap">
            <Link
              to="/"
              className={`transition-colors py-1 ${
                isActive('/') ? 'text-blue-900 border-b-2 border-blue-600 pb-0.5' : 'hover:text-blue-800'
              }`}
            >
              HOME
            </Link>
            <Link
              to="/contact"
              className={`transition-colors py-1 ${
                location.pathname === '/contact'
                  ? 'text-blue-900 border-b-2 border-blue-600 pb-0.5'
                  : 'hover:text-blue-800'
              }`}
            >
              CONTACT US
            </Link>
            <Link
              to="/services"
              className={`transition-colors py-1 flex items-center gap-1 ${
                location.pathname.startsWith('/services')
                  ? 'text-blue-900 border-b-2 border-blue-600 pb-0.5'
                  : 'hover:text-blue-800'
              }`}
            >
              SERVICES <span className="text-[9px] mt-0.5">▼</span>
            </Link>
            <Link
              to="/blogs"
              className={`transition-colors py-1 ${
                location.pathname.startsWith('/blogs')
                  ? 'text-blue-900 border-b-2 border-blue-600 pb-0.5'
                  : 'hover:text-blue-800'
              }`}
            >
              BLOGS
            </Link>
            <a
              href="tel:+919462209414"
              className={`transition-colors py-1 ${
                location.pathname === '/book-appointment'
                  ? 'text-blue-900 border-b-2 border-blue-600 pb-0.5'
                  : 'hover:text-blue-800'
              }`}
            >
              BOOK APPOINTMENT
            </a>
          </nav>

          {/* Mobile / Tablet Menu Button */}
          <button
            className="xl:hidden text-[#0066cc] p-1 sm:p-1.5 hover:bg-blue-50 rounded-lg transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-7 sm:h-7" /> : <Menu className="w-5 h-5 sm:w-7 sm:h-7" />}
          </button>
        </div>

      </div>

      {/* ── Mobile & Tablet Dropdown Drawer ── */}
      {isMobileMenuOpen && (
        <nav className="xl:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 px-6 flex flex-col space-y-3.5 text-[14px] font-black text-[#0066cc] tracking-wide uppercase z-50 border-t border-gray-100 animate-in fade-in duration-200">
          {/* Quick Call Banner for Radhe Dental Hospital */}
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-100 rounded-xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img src={radheLogo} alt="Radhe Dental Hospital" className="h-10 w-auto object-contain rounded-full shrink-0" />
              <div>
                <p className="text-[13px] font-black text-[#1D70B8] uppercase leading-tight">
                  Radhe Dental Hospital
                </p>
              </div>
            </div>
            <a
              href="tel:+919462209414"
              className="flex items-center gap-1.5 bg-[#0066cc] hover:bg-blue-700 text-white text-[12px] font-bold px-3 py-1.5 rounded-full shadow transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call</span>
            </a>
          </div>

          {/* RGHS Scheme Mention on Mobile */}
          <div className="flex items-center gap-2 py-1 px-1 border-b border-gray-100 md:hidden">
            <img src={rghsLogo} alt="RGHS Scheme" className="h-9 w-auto" />
            <span className="text-[11px] font-bold text-gray-600 normal-case">
              RGHS Approved Dental Hospital
            </span>
          </div>

          <Link
            to="/"
            className={`py-1.5 transition ${
              isActive('/') ? 'text-blue-900 border-l-4 border-blue-600 pl-3' : 'hover:text-blue-800'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="/contact"
            className={`py-1.5 transition ${
              location.pathname === '/contact' ? 'text-blue-900 border-l-4 border-blue-600 pl-3' : 'hover:text-blue-800'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            CONTACT US
          </Link>
          <Link
            to="/services"
            className={`py-1.5 transition ${
              location.pathname.startsWith('/services') ? 'text-blue-900 border-l-4 border-blue-600 pl-3' : 'hover:text-blue-800'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            SERVICES
          </Link>
          <Link
            to="/blogs"
            className={`py-1.5 transition ${
              location.pathname.startsWith('/blogs') ? 'text-blue-900 border-l-4 border-blue-600 pl-3' : 'hover:text-blue-800'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            BLOGS
          </Link>
          <a
            href="tel:+919462209414"
            className="text-blue-900 py-1.5 flex items-center justify-between"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span>BOOK APPOINTMENT</span>
            <span className="text-[12px] text-gray-500 font-normal lowercase tracking-normal">📞 +91 94622 09414</span>
          </a>

          <div className="pt-2 border-t border-gray-100 text-[11px] font-normal normal-case text-gray-500">
            <p>📍 Branch 1: Hanuman Vatika A, Gokulpura, Jaipur</p>
            <p className="mt-0.5">⏰ Monday - Saturday: 9:00 am – 9:00 pm</p>
          </div>
        </nav>
      )}
    </header>
  );
}
