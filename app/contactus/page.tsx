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
    <div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-stone-900/40 flex items-center justify-center z-50 px-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-sm w-full text-center relative border border-stone-200">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 transition"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {showModal === "success" ? (
              <>
                <CheckCircle className="mx-auto mb-4" style={{ color: 'var(--c-cta)', width: '3rem', height: '3rem' }} />
                <h2 className="text-xl font-semibold text-stone-900 mb-2 font-poppins">
                  Message Sent!
                </h2>
                <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                  Thank you for contacting us. We’ll respond within 24 hours.
                </p>
              </>
            ) : (
              <>
                <AlertCircle className="text-red-600 mx-auto mb-4" style={{ width: '3rem', height: '3rem' }} />
                <h2 className="text-xl font-semibold text-stone-900 mb-2 font-poppins">
                  Something went wrong
                </h2>
                <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                  Please try again later or contact us directly via phone.
                </p>
              </>
            )}

            <button
              onClick={handleCloseModal}
              className="btn-primary w-full"
            >
              Okay
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container-max text-center">
          <h1 className="heading-primary text-white">Contact Us</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            Ready to join our school family? We're here to answer any questions you might have.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-stone-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <p className="section-label">Information</p>
                <h2 className="text-2xl font-semibold text-stone-900 mb-6 font-poppins">
                  Get in Touch
                </h2>
              </div>

              <div className="card-clean p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-stone-100 flex-shrink-0">
                  <MapPin size={20} style={{ color: 'var(--c-accent)' }} />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1">
                    Visit Us
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Elettil P.O., Koduvally Road
                    <br />
                    Kozhikode, Kerala - 673572
                  </p>
                </div>
              </div>

              <div className="card-clean p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-stone-100 flex-shrink-0">
                  <Phone size={20} style={{ color: 'var(--c-primary)' }} />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-2">
                    Call Us
                  </h3>
                  <div className="space-y-1.5 text-sm text-stone-600 flex flex-col">
                    <a
                      href="tel:+919946100154"
                      className="hover:text-stone-900 transition-colors"
                    >
                      +91-9946100154
                    </a>
                    <a
                      href="tel:+919539777154"
                      className="hover:text-stone-900 transition-colors"
                    >
                      +91-9539777154
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-clean p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-stone-100 flex-shrink-0">
                  <Mail size={20} style={{ color: 'var(--c-cta)' }} />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-2">
                    Email Us
                  </h3>
                  <div className="space-y-1.5 text-sm flex flex-col">
                    <a
                      href="mailto:vhpseduc@gmail.com"
                      className="link-accent font-normal"
                    >
                      vhpseduc@gmail.com
                    </a>
                    <a
                      href="mailto:vadihusna@yahoo.co.in"
                      className="link-accent font-normal"
                    >
                      vadihusna@yahoo.co.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="card-clean p-8 lg:p-10 border-t-4" style={{ borderTopColor: 'var(--c-primary)' }}>
                <h2 className="text-2xl font-semibold text-stone-900 mb-2 font-poppins">
                  Send Message
                </h2>
                <p className="text-sm text-stone-500 mb-8">
                  Fill out the form and our administrative team will get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-stone-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent text-sm bg-stone-50 focus:bg-white transition-colors"
                        style={{ '--tw-ring-color': 'var(--c-primary-light)' } as any}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-stone-700">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent text-sm bg-stone-50 focus:bg-white transition-colors"
                        style={{ '--tw-ring-color': 'var(--c-primary-light)' } as any}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-stone-700">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent text-sm bg-stone-50 focus:bg-white transition-colors"
                        style={{ '--tw-ring-color': 'var(--c-primary-light)' } as any}
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-stone-700">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent text-sm bg-stone-50 focus:bg-white transition-colors appearance-none cursor-pointer"
                        style={{ '--tw-ring-color': 'var(--c-primary-light)' } as any}
                      >
                        <option value="Admission Inquiry">Admission Inquiry</option>
                        <option value="Academic Info">Academic Info</option>
                        <option value="Facilities">Facilities</option>
                        <option value="Transport">Transport</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-stone-700">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent text-sm bg-stone-50 focus:bg-white transition-colors resize-none"
                      style={{ '--tw-ring-color': 'var(--c-primary-light)' } as any}
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full gap-2 text-base"
                  >
                    {loading ? "Sending..." : (
                      <>
                        Send Message <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white border-t border-stone-200">
        <div className="container-max">
          <div className="text-center mb-10">
            <p className="section-label">Location</p>
            <h2 className="heading-secondary">Find Us</h2>
          </div>

          <div className="card-clean overflow-hidden max-w-4xl mx-auto">
            <div className="aspect-video w-full">
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
            <div className="px-6 py-4 bg-stone-50 border-t border-stone-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
              <p className="text-sm text-stone-600 font-medium">
                Elettil P.O., Koduvally Road, Kozhikode, Kerala 673572
              </p>
              <a
                href="https://www.google.com/maps?ll=11.391482,75.882768&z=15&t=m"
                target="_blank"
                rel="noreferrer"
                className="link-accent whitespace-nowrap"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
