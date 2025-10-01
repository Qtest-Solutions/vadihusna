"use client";

import { useEffect, useState } from "react";
import { useLogoUrl } from "@/hooks/use-logo-url";
import Link from "next/link";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  // Prevent hover-triggered state during hydration
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const academicsDropdown = [
    { href: "/academics/curriculum", label: "Curriculum" },
    { href: "/academics/faculty", label: "Faculty" },
    { href: "/academics/examination", label: "Examination" },
  ];

  const { logoUrl } = useLogoUrl();
  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm">
        <div className="container-max px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+919946100154 | +919539777154 </span>
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
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <img
                src={logoUrl}
                alt="School Logo"
                className="h-12 sm:h-16 object-cover"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Home */}
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Home
              </Link>

              {/* About Us */}
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                About Us
              </Link>

              {/* Academics Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => mounted && setIsAcademicsOpen(true)}
                onMouseLeave={() => mounted && setIsAcademicsOpen(false)}
              >
                <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center gap-1">
                  Academics
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      isAcademicsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isAcademicsOpen && (
                  <div
                    className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg border z-50"
                    onMouseEnter={() => mounted && setIsAcademicsOpen(true)}
                    onMouseLeave={() => mounted && setIsAcademicsOpen(false)}
                  >
                    <div className="py-2">
                      {academicsDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Our Campus */}
              <Link
                href="/campus"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Our Campus
              </Link>

              {/* News */}
              <Link
                href="/news"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                News
              </Link>

              {/* Mandatory Disclosure */}
              <Link
                href="/mandatory-disclosure"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Mandatory Disclosure
              </Link>

              {/* Contact Us */}
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Contact Us
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
              <div className="flex flex-col space-y-4 px-2">
                {/* Home */}
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                {/* About Us */}
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>

                {/* Mobile Academics Dropdown */}
                <div>
                  <button
                    onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
                    className="text-gray-700 hover:text-blue-600 font-medium py-2 px-2 flex items-center gap-1 w-full rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Academics
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        isAcademicsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isAcademicsOpen && (
                    <div className="pl-6 space-y-2 mt-2">
                      {academicsDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-gray-600 hover:text-blue-600 py-2 px-2 text-sm rounded-md hover:bg-gray-50 transition-colors"
                          onClick={() => {
                            setIsOpen(false);
                            setIsAcademicsOpen(false);
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Our Campus */}
                <Link
                  href="/campus"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Our Campus
                </Link>

                {/* News */}
                <Link
                  href="/news"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  News
                </Link>

                {/* Mandatory Disclosure */}
                <Link
                  href="/mandatory-disclosure"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Mandatory Disclosure
                </Link>

                {/* Contact Us */}
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
