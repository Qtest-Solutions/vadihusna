import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">V</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">VADI HUSNA</h3>
                <p className="text-sm text-gray-300">PUBLIC SCHOOL</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Excellence through Education - Providing quality CBSE education since 1996
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Twitter size={20} className="text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram size={20} className="text-gray-400 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/academics" className="text-gray-300 hover:text-white">Academics</Link></li>
              <li><Link href="/admissions" className="text-gray-300 hover:text-white">Admissions</Link></li>
              <li><Link href="/facilities" className="text-gray-300 hover:text-white">Facilities</Link></li>
              <li><Link href="/student-life" className="text-gray-300 hover:text-white">Student Life</Link></li>
              <li><Link href="/mandatory-disclosure" className="text-gray-300 hover:text-white">Mandatory Disclosure</Link></li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Academics</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Classes: LKG - XII</li>
              <li>CBSE Curriculum</li>
              <li>English Medium</li>
              <li>Streams: PCM & PCB</li>
              <li>Student-Teacher Ratio: 23:1</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Elettil P.O., Koduvally Road<br />
                  Kozhikode, Kerala - 673572
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <div>
                  <p className="text-gray-300">+91-9946100154</p>
                  <p className="text-gray-300">0495-2200154</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <p className="text-gray-300">vhpseduc@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-max flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Vadi Husna Public School. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400 mt-2 sm:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}