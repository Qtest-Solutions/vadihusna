"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  X,
} from "lucide-react";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setShowSuccess(searchParams.get("success") === "true");
    setShowError(searchParams.get("error") === "true");
  }, [searchParams]);

  useEffect(() => {
    if (showSuccess || showError) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
        setShowError(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess, showError]);

  return (
    <div className="pt-24">
      {/* Success/Error Messages */}
      {(showSuccess || showError) && (
        <div className="fixed top-24 right-4 z-50 animate-in slide-in-from-right duration-300">
          <div
            className={`rounded-lg p-4 shadow-lg max-w-sm ${
              showSuccess
                ? "bg-green-50 border border-green-200"
                : "bg-red-50 border border-red-200"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                {showSuccess ? (
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                ) : (
                  <AlertCircle className="text-red-500 mr-3" size={20} />
                )}
                <div>
                  <h3
                    className={`font-semibold text-sm ${
                      showSuccess ? "text-green-800" : "text-red-800"
                    }`}
                  >
                    {showSuccess ? "Message Sent!" : "Error"}
                  </h3>
                  <p
                    className={`text-xs ${
                      showSuccess ? "text-green-700" : "text-red-700"
                    }`}
                  >
                    {showSuccess
                      ? "We'll respond within 24 hours."
                      : "Please try again or call us directly."}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowSuccess(false);
                  setShowError(false);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-12">
        <div className="container-max text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 mb-4">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm font-medium">Get in Touch</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-lg text-blue-100 max-w-xl mx-auto">
            Ready to join our school family? We're here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-max max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info - Compact Cards */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Quick Contact
              </h2>

              {/* Address */}
              <div className="bg-white rounded-lg shadow-sm ring-1 ring-gray-100 p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 flex-shrink-0">
                    <MapPin className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      Visit Us
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Elettil P.O., Koduvally Road
                      <br />
                      Kozhikode, Kerala - 673572
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-lg shadow-sm ring-1 ring-gray-100 p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-green-50 flex-shrink-0">
                    <Phone className="text-green-600" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      Call Us
                    </h3>
                    <div className="space-y-0.5 text-xs text-gray-600">
                      <a
                        href="tel:+919946100154"
                        className="block hover:text-green-600 transition-colors"
                      >
                        +91-9946100154
                      </a>
                      <a
                        href="tel:+919539777154"
                        className="block hover:text-green-600 transition-colors"
                      >
                        +91-9539777154
                      </a>
                      <a
                        href="tel:04952200154"
                        className="block hover:text-green-600 transition-colors"
                      >
                        0495-2200154
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-lg shadow-sm ring-1 ring-gray-100 p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-purple-50 flex-shrink-0">
                    <Mail className="text-purple-600" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      Email Us
                    </h3>
                    <div className="space-y-0.5 text-xs text-gray-600">
                      <a
                        href="mailto:vhpseduc@gmail.com"
                        className="block hover:text-purple-600 transition-colors"
                      >
                        vhpseduc@gmail.com
                      </a>
                      <a
                        href="mailto:vadihusna@yahoo.co.in"
                        className="block hover:text-purple-600 transition-colors"
                      >
                        vadihusna@yahoo.co.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-sm ring-1 ring-gray-100 p-6">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    Send Message
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Fill out the form and we'll get back to you soon.
                  </p>
                </div>

                <form
                  action="https://formsubmit.co/vhpseduc@gmail.com"
                  method="POST"
                  className="space-y-4"
                >
                  {/* FormSubmit Configuration */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Contact - Vadi Husna Public School"
                  />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://vadihusna.vercel.app/contact?success=true"
                  />
                  <input
                    type="hidden"
                    name="_error"
                    value="https://vadihusna.vercel.app/contact?error=true"
                  />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_autoresponse"
                    value="Thank you for contacting Vadi Husna Public School! We'll respond within 24 hours."
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm"
                        placeholder="+91 9876543210"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm"
                      >
                        <option value="">Choose subject</option>
                        <option value="Admission Inquiry">
                          Admission Inquiry
                        </option>
                        <option value="Campus Visit">Campus Visit</option>
                        <option value="Academic Info">Academic Info</option>
                        <option value="Facilities">Facilities</option>
                        <option value="Transport">Transport</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none text-sm"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <input
                    type="text"
                    name="_honey"
                    style={{ display: "none" }}
                  />

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Map Section */}
      <section className="py-8 bg-gray-50">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Find Us</h2>
            <p className="text-gray-600 text-sm">
              Located in Kozhikode, Kerala
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm ring-1 ring-gray-100 overflow-hidden">
            <div className="aspect-[2/1]">
              <iframe
                title="Vadi Husna Public School Location"
                src="https://www.google.com/maps?q=11.391482,75.882768&z=15&t=m&output=embed&hl=en"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="px-4 py-3 bg-gray-50 border-t">
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-600">
                  Elettil P.O., Koduvally Road, Kozhikode
                </p>
                <a
                  href="https://www.google.com/maps?ll=11.391482,75.882768&z=15&t=m&hl=en-US&gl=US&mapclient=embed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-xs font-medium transition-colors"
                >
                  Open in Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
