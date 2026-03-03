"use client";

import Link from "next/link";
import { GraduationCap, Users, Award, BookOpen, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const images = ["/vadihusna1.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, [images]);

  return (
    <section
      className="relative text-white min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Excellence through
                <span className="block text-yellow-300">Education</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 leading-relaxed">
                Nurturing young minds since 1996 with quality CBSE education,
                holistic development, and strong moral values in the heart of
                Kozhikode, Kerala.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="flex items-center space-x-2 md:space-x-3">
                <GraduationCap
                  className="text-yellow-300 flex-shrink-0"
                  size={20}
                />
                <span className="text-sm sm:text-base">CBSE Affiliated</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <Users className="text-yellow-300 flex-shrink-0" size={20} />
                <span className="text-sm sm:text-base">LKG to XII</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <Award className="text-yellow-300 flex-shrink-0" size={20} />
                <span className="text-sm sm:text-base">Since 1996</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <BookOpen className="text-yellow-300 flex-shrink-0" size={20} />
                <span className="text-sm sm:text-base">English Medium</span>
              </div>
            </div>

            {/* Modern CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {/* Primary button */}
              <Link
                href="/about-us"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap"
              >
                About Us
              </Link>

              {/* Secondary button */}
              <Link
                href="/contactus"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border-2 border-white/80 text-white font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg backdrop-blur-sm whitespace-nowrap"
              >
                <Phone className="mr-2 flex-shrink-0" size={18} />
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-yellow-300 w-8"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
