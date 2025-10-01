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
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-secondary mb-4">
            About Vadi Husna Public School
          </h2>
          <p className="text-body leading-relaxed text-gray-700">
            Since 1996, Vadi Husna Public School has been committed to nurturing
            young minds with a foundation of academic excellence, integrity, and
            social responsibility. As a CBSE-affiliated institution, we blend
            modern education with timeless values, preparing students to thrive
            confidently in an ever-evolving world.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
            <Calendar className="text-blue-600 shrink-0 mt-1" size={20} />
            <p className="text-gray-700">
              Established in 1996 under the leadership of Mr. K. Abdul Khadar
            </p>
          </div>
          <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
            <GraduationCap className="text-blue-600 shrink-0 mt-1" size={20} />
            <p className="text-gray-700">
              Affiliated with CBSE Delhi (No. 930618)
            </p>
          </div>
          <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
            <ShieldCheck className="text-blue-600 shrink-0 mt-1" size={20} />
            <p className="text-gray-700">
              Dedicated to academic excellence, character-building, and
              responsibility
            </p>
          </div>
          <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
            <MapPin className="text-blue-600 shrink-0 mt-1" size={20} />
            <p className="text-gray-700">
              Located on a scenic campus near Elettil town on Koduvally Road
            </p>
          </div>
          <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm md:col-span-2">
            <Laptop className="text-blue-600 shrink-0 mt-1" size={20} />
            <p className="text-gray-700">
              Embraces digital learning, innovative practices, and
              interdisciplinary approaches
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/about" className="btn-primary rounded-full">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
