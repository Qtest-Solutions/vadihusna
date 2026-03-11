"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="section-padding bg-blue-600">
      <div className="container-max text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Join Our School Family?
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Have questions or need assistance? Get in touch with us—our team is
          here to help.
        </p>

        {/* CTA Button */}
        <Link
          href="/contactus"
          className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold text-lg py-3 px-8 rounded-full shadow-lg hover:bg-blue-50 hover:shadow-xl transition-transform duration-200 hover:-translate-y-0.5"
        >
          <Phone className="text-green-600" size={22} />
          Contact Us
        </Link>
      </div>
    </section>
  );
}
