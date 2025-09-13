import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculum - Vadi Husna Public School",
  description:
    "Learn about our comprehensive CBSE curriculum and academic programs.",
};

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Curriculum
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-12 text-center">
              Our comprehensive CBSE curriculum is designed to foster academic
              excellence and holistic development.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Primary Section (LKG - V)
                </h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Foundation in English, Hindi, and Malayalam</li>
                  <li>• Mathematics fundamentals</li>
                  <li>• Environmental Studies</li>
                  <li>• Art and Craft activities</li>
                  <li>• Physical Education and Games</li>
                  <li>• Moral Science and Values</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Secondary Section (VI - X)
                </h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Core subjects: English, Hindi, Mathematics</li>
                  <li>• Science (Physics, Chemistry, Biology)</li>
                  <li>• Social Science</li>
                  <li>• Optional third language</li>
                  <li>• Computer Science</li>
                  <li>• Work Experience and Life Skills</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Senior Secondary (XI - XII)
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Science Stream
                  </h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Physics, Chemistry, Biology/Mathematics</li>
                    <li>• English and Hindi</li>
                    <li>• Physical Education/Computer Science</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Commerce Stream
                  </h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Accountancy, Business Studies, Economics</li>
                    <li>• English and Hindi</li>
                    <li>• Mathematics/Physical Education</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Key Features
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="font-semibold mb-2">CBSE Affiliated</h3>
                  <p className="text-sm text-gray-600">
                    Following CBSE curriculum standards
                  </p>
                </div>
                <div className="p-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="font-semibold mb-2">Holistic Approach</h3>
                  <p className="text-sm text-gray-600">
                    Academic and co-curricular balance
                  </p>
                </div>
                <div className="p-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="font-semibold mb-2">Excellence Focus</h3>
                  <p className="text-sm text-gray-600">
                    Nurturing academic excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
