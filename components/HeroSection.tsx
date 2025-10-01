"use client";

import Link from "next/link";
import { GraduationCap, Users, Award, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  // Place your hero images here
  const images = ["/vadihusna1.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel effect (only if more than one image)
  useEffect(() => {
    if (images.length <= 1) return; // No carousel if single image

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section
      className="relative text-white min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Excellence through
                <span className="block text-yellow-300">Education</span>
              </h1>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                Nurturing young minds since 1996 with quality CBSE education,
                holistic development, and strong moral values in the heart of
                Kozhikode, Kerala.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <GraduationCap className="text-yellow-300" size={24} />
                <span>CBSE Affiliated</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="text-yellow-300" size={24} />
                <span>LKG to XII</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="text-yellow-300" size={24} />
                <span>Since 1996</span>
              </div>
              <div className="flex items-center space-x-3">
                <BookOpen className="text-yellow-300" size={24} />
                <span>English Medium</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="btn-secondary bg-white text-blue-600 hover:bg-gray-50"
              >
                About us
              </Link>
              {/* <Link
                href="/about"
                className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600"
              >
                Learn More
              </Link> */}
            </div>
          </div>

          {/* Floating Cards */}
          {/* <div className="relative">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="absolute -top-4 -left-4 bg-white text-gray-900 p-4 rounded-lg shadow-xl">
                <div className="text-2xl font-bold text-blue-600">513+</div>
                <div className="text-sm">Students</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-gray-900 p-4 rounded-lg shadow-xl">
                <div className="text-2xl font-bold text-green-600">23:1</div>
                <div className="text-sm">Teacher Ratio</div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Carousel indicators (show only if more than one image) */}
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === currentIndex ? "bg-yellow-300" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
