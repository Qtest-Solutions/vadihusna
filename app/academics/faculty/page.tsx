import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faculty - Vadi Husna Public School",
  description:
    "Meet our dedicated and experienced faculty members at Vadi Husna Public School.",
};

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Faculty
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-12 text-center">
              Our experienced and dedicated faculty members are committed to
              providing quality education and nurturing young minds.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Sample Faculty Cards */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👨‍🏫</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Principal
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  School Leadership
                </p>
                <p className="text-gray-600 text-sm">
                  Leading the school with vision and dedication to academic
                  excellence.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👩‍🔬</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Science Department
                </h3>
                <p className="text-green-600 font-medium mb-3">
                  Physics, Chemistry, Biology
                </p>
                <p className="text-gray-600 text-sm">
                  Experienced faculty making science engaging and
                  understandable.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
                <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👨‍💼</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Mathematics Department
                </h3>
                <p className="text-yellow-600 font-medium mb-3">
                  Pure & Applied Mathematics
                </p>
                <p className="text-gray-600 text-sm">
                  Making mathematics accessible and enjoyable for all students.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👩‍💻</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Computer Science
                </h3>
                <p className="text-purple-600 font-medium mb-3">
                  Technology & Programming
                </p>
                <p className="text-gray-600 text-sm">
                  Preparing students for the digital future with modern
                  technology skills.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👩‍🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Arts & Languages
                </h3>
                <p className="text-red-600 font-medium mb-3">
                  English, Hindi, Malayalam
                </p>
                <p className="text-gray-600 text-sm">
                  Fostering communication skills and cultural appreciation.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
                <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👨‍🏃</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Physical Education
                </h3>
                <p className="text-indigo-600 font-medium mb-3">
                  Sports & Fitness
                </p>
                <p className="text-gray-600 text-sm">
                  Promoting physical fitness and sportsmanship among students.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Faculty Qualifications
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Academic Excellence
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Master's degree in respective subjects</li>
                    <li>• B.Ed qualification for teaching methodology</li>
                    <li>• Regular professional development training</li>
                    <li>• Years of teaching experience</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Commitment to Students
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Individual attention to each student</li>
                    <li>• Innovative teaching methodologies</li>
                    <li>• Extra academic support when needed</li>
                    <li>• Mentoring and guidance for career choices</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
