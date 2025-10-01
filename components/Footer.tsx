import Link from "next/link";
import { useLogoUrl } from "@/hooks/use-logo-url";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const { logoUrl } = useLogoUrl();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <h1 className="text-gray mb-4 text-lg font-semibold">
              Vadi Husna Public School
            </h1>
            {/* <Link href="/" className="flex items-center space-x-3">
              <img
                src={logoUrl}
                alt="School Logo"
                className="rounded-xl w-[80%] h-13 object-cover shadow-lg mb-5"
              />
            </Link> */}
            <p className="text-gray-300 mb-4">
              Excellence through Education - Providing quality CBSE education
              since 1996
            </p>
            <div className="flex space-x-4">
              <Link
                href={"https://www.youtube.com/@vadihusnapublicschool35"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube
                  size={20}
                  className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors"
                />
              </Link>
              <Link
                href={"https://www.facebook.com/VadiHusnaPublicSchoolElettil/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  size={20}
                  className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors"
                />
              </Link>
              <Link
                href={"https://www.instagram.com/vadi__husna/?hl=en/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  size={20}
                  className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors"
                />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/mandatory-disclosure"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Mandatory Disclosure
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="text-blue-400 mt-1 flex-shrink-0"
                />
                <p className="text-gray-300 text-sm sm:text-base">
                  Vadi Husna Public School
                  <br />
                  Elettil P.O, Koduvally
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm sm:text-base">
                    +919946100154
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base">
                    +919539777154
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm sm:text-base break-all">
                    vhpseduc@gmail.com
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base break-all">
                    vadihusna@yahoo.co.in
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Location</h4>
            <div className="rounded-lg overflow-hidden ring-1 ring-gray-800 bg-gray-800">
              <iframe
                title="School Location Map"
                src="https://www.google.com/maps?q=11.391482,75.882768&z=12&t=m&output=embed&hl=en"
                className="w-full h-48"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Vadi Husna Public School, Elettil P.O, Koduvally
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-max px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center items-center">
          <p className="text-gray-400 text-sm text-center">
            © 2025 Vadi Husna Public School. All rights reserved.
          </p>
          {/* <div className="flex space-x-4 text-sm text-gray-400 mt-2 sm:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
