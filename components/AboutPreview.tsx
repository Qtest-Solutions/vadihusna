import Link from "next/link";
import {
  Calendar,
  GraduationCap,
  ShieldCheck,
  MapPin,
  Laptop,
} from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="heading-secondary">
              About Vadi Husna Public School
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-body">
                Founded in 1996 under the leadership of Mr. K. Abdul Khadar,
                Vadi Husna Public School is dedicated to academic excellence,
                integrity, and social responsibility. Affiliated with CBSE Delhi
                (No. 930618), the school blends modern education with moral
                values, preparing students to navigate challenges with
                confidence. Rooted in a vision for educational, social, and
                cultural advancement, we uphold our motto, "Excellence through
                Education."
              </p>
              <p className="text-body">
                Nestled in a spacious, scenic campus near Elettil town on
                Koduvally Road, Vadi Husna embraces digital learning and
                interdisciplinary approaches, fostering a dynamic and
                future-ready learning environment. By integrating scientific
                education with moral wisdom, we ensure that students receive a
                well-rounded education, empowering them to thrive in an
                ever-evolving world.
              </p>
            </div>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 text-gray-700">
                <Calendar className="text-blue-600 mt-1" size={18} />
                <span>
                  Founded in 1996 under the leadership of Mr. K. Abdul Khadar
                </span>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <GraduationCap className="text-blue-600 mt-1" size={18} />
                <span>Affiliated with CBSE Delhi (No. 930618)</span>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <ShieldCheck className="text-blue-600 mt-1" size={18} />
                <span>
                  Dedicated to academic excellence, integrity, and social
                  responsibility
                </span>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <MapPin className="text-blue-600 mt-1" size={18} />
                <span>
                  Spacious, scenic campus near Elettil town on Koduvally Road
                </span>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <Laptop className="text-blue-600 mt-1" size={18} />
                <span>
                  Embraces digital learning and interdisciplinary approaches
                </span>
              </div>
            </div>

            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://images.pexels.com/photos/8197543/pexels-photo-8197543.jpeg"
              alt="School building"
              className="rounded-xl w-full h-96 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
