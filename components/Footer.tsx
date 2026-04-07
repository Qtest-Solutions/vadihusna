import Link from "next/link";
import { useLogoUrl } from "@/hooks/use-logo-url";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const { logoUrl } = useLogoUrl();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* School Info */}
          <div>
            <h4 className="text-base font-semibold mb-3">
              Vadi Husna Public School
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-2">
              Excellence through Education — Providing quality CBSE education since 1996.
            </p>
            <div className="inline-block bg-slate-800 rounded-lg px-3 py-1.5 mb-5 border border-slate-700">
              <p className="text-xs font-semibold text-emerald-400">CBSE Affiliation No: 930618</p>
              <p className="text-xs text-slate-400">School Code: 42137</p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.youtube.com/@vadihusnapublicschool35"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
              >
                <Youtube size={18} />
              </Link>
              <Link
                href="https://www.facebook.com/VadiHusnaPublicSchoolElettil/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://www.instagram.com/vadi__husna/?hl=en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about-us", label: "About Us" },
                { href: "/academics", label: "Academics" },
                { href: "/blog", label: "News" },
                { href: "/mandatory-disclosure", label: "Mandatory Disclosure" },
                { href: "/contactus", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-slate-500 mt-0.5 flex-shrink-0" />
                <p className="text-slate-400 text-sm">
                  Vadi Husna Public School
                  <br />
                  Elettil P.O, Koduvally
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-slate-500 mt-0.5 flex-shrink-0" />
                <div className="text-slate-400 text-sm space-y-1">
                  <p>+91 9946100154</p>
                  <p>+91 9539777154</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-slate-500 mt-0.5 flex-shrink-0" />
                <div className="text-slate-400 text-sm space-y-1">
                  <p>vhpseduc@gmail.com</p>
                  <p>vadihusna@yahoo.co.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-base font-semibold mb-4">Location</h4>
            <div className="rounded-lg overflow-hidden border border-slate-700">
              <iframe
                title="School Location Map"
                src="https://www.google.com/maps?q=11.391482,75.882768&z=12&t=m&output=embed&hl=en"
                className="w-full h-44"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="text-slate-500 text-xs mt-2">
              Elettil P.O, Koduvally Road, Kozhikode
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Vadi Husna Public School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
