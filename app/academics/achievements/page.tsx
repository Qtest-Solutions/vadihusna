import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements - Vadi Husna Public School",
  description:
    "Celebrate the academic and co-curricular achievements of our students and school.",
};

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Achievements
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-12 text-center">
              We take pride in the outstanding achievements of our students in
              academics, sports, and various competitions.
            </p>

            {/* Academic Achievements */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
                Academic Excellence
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    98%
                  </div>
                  <p className="text-gray-700 font-medium">Class X Pass Rate</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Consistent high performance in CBSE board exams
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    95%
                  </div>
                  <p className="text-gray-700 font-medium">
                    Class XII Pass Rate
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Excellent results in senior secondary exams
                  </p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">
                    25+
                  </div>
                  <p className="text-gray-700 font-medium">District Toppers</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Students achieving top positions in district
                  </p>
                </div>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
                Recent Highlights
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Science Olympiad Winners 2024
                  </h3>
                  <p className="text-gray-600">
                    Three of our students won gold medals in the National
                    Science Olympiad, showcasing their scientific aptitude and
                    problem-solving skills.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Inter-School Quiz Competition
                  </h3>
                  <p className="text-gray-600">
                    Our team secured first position in the district-level
                    inter-school quiz competition, demonstrating their knowledge
                    across various subjects.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Art & Craft Exhibition
                  </h3>
                  <p className="text-gray-600">
                    Students' creative works were displayed at the state-level
                    art exhibition, with several pieces receiving special
                    recognition.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Sports Championships
                  </h3>
                  <p className="text-gray-600">
                    Our athletics team won multiple medals in district and state
                    level competitions, including track and field events.
                  </p>
                </div>
              </div>
            </div>

            {/* Awards & Recognition */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                School Recognition
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Awards Received
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>🏆 Best CBSE School Award - District Level</li>
                    <li>🏆 Excellence in Education - State Recognition</li>
                    <li>🏆 Clean & Green School Certificate</li>
                    <li>🏆 Digital Learning Initiative Award</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Certifications
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ CBSE Affiliation Certificate</li>
                    <li>✓ ISO 9001:2015 Quality Management</li>
                    <li>✓ Green School Certification</li>
                    <li>✓ Safety & Security Compliance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                We continue to strive for excellence and encourage our students
                to achieve their full potential in all areas of development.
              </p>
              <a
                href="/admissions"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Join Our Success Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
