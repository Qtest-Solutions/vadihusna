'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/academics', label: 'Academics' },
    { href: '/facilities', label: 'Facilities' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/student-life', label: 'Student Life' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm">
        <div className="container-max flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91-9946100154</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>vhpseduc@gmail.com</span>
            </div>
          </div>
          <div className="text-xs">
            CBSE Affiliation No: 930618 | Founded 1996
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container-max">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">VADI HUSNA</h1>
                <p className="text-sm text-blue-600">PUBLIC SCHOOL</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/admissions" className="btn-primary">
                Apply Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/admissions" className="btn-primary w-full text-center">
                  Apply Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}