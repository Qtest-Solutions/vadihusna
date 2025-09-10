'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Priya Menon',
      role: 'Parent of Class X Student',
      content: 'VHPS has been exceptional in providing quality education. The teachers are dedicated, and my child has shown remarkable improvement in both academics and confidence.',
      rating: 5
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Parent of Alumni',
      content: 'The holistic approach to education at VHPS helped shape my daughter into a well-rounded individual. The affordable fees make quality education accessible.',
      rating: 5
    },
    {
      name: 'Fatima Ali',
      role: 'Parent of Class XII Student',
      content: 'The science facilities and experienced teachers have prepared my son excellently for competitive exams. Highly recommend VHPS for serious students.',
      rating: 4
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="heading-secondary">What Parents Say</h2>
          <p className="text-body">Trusted by families across Kozhikode</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <Quote className="text-blue-600 mb-6" size={48} />
            
            <div className="mb-8">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
                
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
          >
            <ChevronLeft className="text-blue-600" size={24} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
          >
            <ChevronRight className="text-blue-600" size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}