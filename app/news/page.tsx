import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates - Vadi Husna Public School",
  description:
    "Stay updated with the latest news, events, and announcements from Vadi Husna Public School.",
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            News & Updates
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-12 text-center">
              Stay informed about the latest happenings at Vadi Husna Public
              School.
            </p>

            <div className="space-y-8">
              {/* Sample News Items */}
              <article className="border-b border-gray-200 pb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2 md:mb-0">
                    Annual Sports Day 2025
                  </h2>
                  <span className="text-sm text-gray-500">March 15, 2025</span>
                </div>
                <p className="text-gray-600 mb-4">
                  We are excited to announce our Annual Sports Day will be held
                  on March 15, 2025. Students from all classes will participate
                  in various sporting events and competitions.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read more →
                </a>
              </article>

              <article className="border-b border-gray-200 pb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2 md:mb-0">
                    Science Exhibition Success
                  </h2>
                  <span className="text-sm text-gray-500">
                    February 28, 2025
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Our students showcased remarkable creativity and scientific
                  thinking at the inter-school science exhibition, winning
                  multiple awards for their innovative projects.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read more →
                </a>
              </article>

              <article className="border-b border-gray-200 pb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2 md:mb-0">
                    Admissions Open for 2025-26
                  </h2>
                  <span className="text-sm text-gray-500">
                    January 10, 2025
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Admissions are now open for the academic year 2025-26. Parents
                  can apply online or visit our school office for more
                  information about the admission process.
                </p>
                <a
                  href="/admissions"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Apply Now →
                </a>
              </article>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600">
                For more updates, follow us on our social media channels or
                contact our office.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
