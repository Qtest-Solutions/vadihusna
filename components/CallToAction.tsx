'use client';

import Link from 'next/link';
import { ArrowRight, Download, Calendar } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="section-padding bg-blue-600">
      <div className="container-max text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Join Our School Family?
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Take the first step towards your child's bright future. Apply for admission 
          or schedule a campus visit to experience our world-class education firsthand.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/admissions" className="bg-white text-blue-600 p-6 rounded-xl shadow-lg card-hover group">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
              <ArrowRight className="text-blue-600 group-hover:translate-x-1 transition-transform" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Apply Now</h3>
            <p className="text-gray-600 text-sm">Start your admission process today</p>
          </Link>
          
          <a 
            href="#" 
            className="bg-white text-blue-600 p-6 rounded-xl shadow-lg card-hover group"
            onClick={(e) => e.preventDefault()}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
              <Download className="text-green-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Download Brochure</h3>
            <p className="text-gray-600 text-sm">Get detailed information</p>
          </a>
          
          <Link href="/contact" className="bg-white text-blue-600 p-6 rounded-xl shadow-lg card-hover group">
            <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4">
              <Calendar className="text-orange-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Schedule Visit</h3>
            <p className="text-gray-600 text-sm">Tour our campus facilities</p>
          </Link>
        </div>
      </div>
    </section>
  );
}