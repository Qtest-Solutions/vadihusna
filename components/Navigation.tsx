"use client";

import { useEffect, useState } from "react";
import { useLogoUrl } from "@/hooks/use-logo-url";
import Link from "next/link";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const academicsDropdown = [
    { href: "/academics/curriculum", label: "Curriculum" },
    { href: "/academics/faculty", label: "Faculty" },
    { href: "/academics/examination", label: "Examination" },
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/our-campus", label: "Our Campus" },
    { href: "/blog", label: "News" },
    { href: "/mandatory-disclosure", label: "Mandatory Disclosure" },
  ];

  const { logoUrl } = useLogoUrl();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrolled
        ? 'py-2 bg-black/90 backdrop-blur-xl border-b border-white/20 shadow-lg'
        : 'py-4 bg-transparent'
        }`}
    >

      {/* Top Info Bar - Only visible at top */}
      <div className={`transition-all duration-300 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'}`}>
        <div className="px-4 sm:px-6 lg:px-8 text-white text-sm flex justify-between items-center h-full border-b border-white/20">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 hover:text-white/80 transition-colors cursor-pointer">
              <Phone size={13} />
              <span className="text-xs font-medium tracking-wide">+91 9946100154</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 hover:text-white/80 transition-colors cursor-pointer">
              <Mail size={13} />
              <span className="text-xs font-medium tracking-wide">vhpseduc@gmail.com</span>
            </div>
          </div>
          <div className="hidden sm:block text-xs font-bold tracking-widest uppercase text-white/70">
            Excellence Through Education
          </div>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src={logoUrl}
              alt="Vadi Husna Public School Logo"
              className={`object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] ${scrolled ? "h-14 sm:h-16" : "h-14 sm:h-16"
                }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white px-4 py-2 text-[15px] hover:text-white/80 transition-colors relative group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Academics Dropdown */}
            <div
              className="flex items-center relative"
              onMouseEnter={() => mounted && setIsAcademicsOpen(true)}
              onMouseLeave={() => mounted && setIsAcademicsOpen(false)}
            >
              <button className="text-white px-4 py-2 text-[15px] flex items-center gap-1.5 hover:text-white/80 transition-colors">
                Academics
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${isAcademicsOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div className={`absolute top-full right-0 w-56 pt-4 transition-all duration-300 ${isAcademicsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}>
                <div className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden">
                  {academicsDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-700 transition-colors border-b border-slate-50 last:border-0"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contactus"
              className="ml-4 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 bg-amber-600 text-white hover:bg-amber-500 shadow-md transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur-xl border-t border-white/10 transition-all duration-300 ease-in-out shadow-2xl ${isOpen ? "max-h-[800px] opacity-100 py-4" : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <div className="px-4 space-y-2 container-max flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-white/80 font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="border-t border-white/10 my-2 pt-2">
            <p className="text-xs font-bold tracking-widest text-white/50 px-4 mb-2">ACADEMICS</p>
            {academicsDropdown.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-white/70 hover:text-white py-2.5 px-4 text-base rounded-lg hover:bg-white/10 transition-colors pl-6"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contactus"
            className="mt-4 bg-amber-600 text-white font-bold py-3 px-4 rounded-xl text-center shadow-md"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}