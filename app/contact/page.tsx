"use client";

import { useState } from "react";
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
  const [showModal, setShowModal] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/vhpseduc@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: "New Contact - Vadi Husna Public School",
          _template: "table",
          _captcha: "false",
          _autoresponse:
            "Thank you for contacting Vadi Husna Public School! We'll respond within 24 hours.",
        }),
      });

      setShowModal(response.ok ? "success" : "error");
    } catch {
      setShowModal("error");
    }
    setLoading(false);
  };

  const handleCloseModal = () => {
    setShowModal(null);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="pt-24">
      {/* ✅ Modal instead of query-param alerts */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-sm w-full text-center relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>

            {showModal === "success" ? (
              <>
                <CheckCircle className="text-green-600 w-12 h-12 mx-auto mb-3" />
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Message Sent!
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  Thank you for contacting us. We’ll respond within 24 hours.
                </p>
              </>
            ) : (
              <>
                <AlertCircle className="text-red-600 w-12 h-12 mx-auto mb-3" />
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Something went wrong
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  Please try again later or contact us directly.
                </p>
              </>
            )}

            <button
              onClick={handleCloseModal}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium py-2 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition"
            >
              OK
            </button>
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
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Quick Contact
              </h2>

              <div className="bg-white rounded-lg shadow-sm p-4 ring-1 ring-gray-100 hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <MapPin className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-900">
                      Visit Us
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Elettil P.O., Koduvally Road
                      <br />
                      Kozhikode, Kerala - 673572
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-4 ring-1 ring-gray-100 hover:shadow-md transition">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Phone className="text-green-600" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-900 mb-1">
                      Call Us
                    </h3>
                    <div className="space-y-0.5 text-xs text-gray-600">
                      <a
                        href="tel:+919946100154"
                        className="hover:text-green-600"
                      >
                        +91-9946100154
                      </a>
                      <a
                        href="tel:+919539777154"
                        className="hover:text-green-600"
                      >
                        +91-9539777154
                      </a>
                      <a
                        href="tel:04952200154"
                        className="hover:text-green-600"
                      >
                        0495-2200154
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-4 ring-1 ring-gray-100 hover:shadow-md transition">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Mail className="text-purple-600" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-900 mb-1">
                      Email Us
                    </h3>
                    <div className="space-y-0.5 text-xs text-gray-600">
                      <a
                        href="mailto:vhpseduc@gmail.com"
                        className="block hover:text-purple-600"
                      >
                        vhpseduc@gmail.com
                      </a>
                      <a
                        href="mailto:vadihusna@yahoo.co.in"
                        className="block hover:text-purple-600"
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
              <div className="bg-white rounded-lg shadow-sm p-6 ring-1 ring-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Send Message
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  Fill out the form and we’ll get back to you soon.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition flex items-center justify-center gap-2 shadow-md"
                  >
                    {loading ? "Sending..." : <Send size={16} />}
                    {!loading && "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 bg-gray-50">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Find Us</h2>
            <p className="text-sm text-gray-600">
              Located in Kozhikode, Kerala
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-100 overflow-hidden">
            <div className="aspect-[2/1]">
              <iframe
                title="Vadi Husna Public School Location"
                src="https://www.google.com/maps?q=11.391482,75.882768&z=15&t=m&output=embed&hl=en"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>
            <div className="px-4 py-3 bg-gray-50 border-t flex justify-between items-center">
              <p className="text-xs text-gray-600">
                Elettil P.O., Koduvally Road, Kozhikode
              </p>
              <a
                href="https://www.google.com/maps?ll=11.391482,75.882768&z=15&t=m"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-700 text-xs font-medium transition"
              >
                Open in Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
