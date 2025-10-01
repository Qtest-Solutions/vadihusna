export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Curriculum & Groups Offered
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            At Vadi Husna Public School, we provide a balanced curriculum that
            blends
            <span className="font-semibold text-blue-600">
              {" "}
              CBSE standards
            </span>{" "}
            with holistic development opportunities. We also offer
            <span className="font-semibold text-green-600">
              {" "}
              Islamic education
            </span>
            via a recognized Madrassa under Samastha (SKIMVB).
          </p>
        </div>

        {/* Curriculum by Levels */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Pre-Primary */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition duration-300 border-t-4 border-pink-400">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-semibold mb-3">Pre-Primary – III</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Montessori-based education emphasizing Practical Life skills,
              Sensorial Training, Language, Mathematics, and Cultural learning.
            </p>
          </div>

          {/* Class IV – X */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition duration-300 border-t-4 border-green-400">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-3">Classes IV – X</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Comprehensive curriculum including Languages, Mathematics,
              Science, Social Science, Computer Studies, Arts & Craft, Physical
              Education, and Life Skills.
            </p>
          </div>

          {/* Class XI & XII */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition duration-300 border-t-4 border-yellow-400">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold mb-3">
              Classes XI & XII (Science)
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Advanced courses in English, Mathematics, Physics, Chemistry,
              Biology, and Computer Science—preparing students for higher
              studies.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Features of Our Curriculum
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-sm text-center hover:shadow-md transition">
              <div className="w-16 h-16 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🏛️
              </div>
              <h3 className="font-semibold text-lg mb-2">CBSE Affiliated</h3>
              <p className="text-sm text-gray-700">
                Following the Central Board of Secondary Education’s guidelines
                and academic rigor.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-sm text-center hover:shadow-md transition">
              <div className="w-16 h-16 bg-green-200 text-green-800 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🕌
              </div>
              <h3 className="font-semibold text-lg mb-2">Islamic Education</h3>
              <p className="text-sm text-gray-700">
                A secondary Madrassa recognized by Samastha (SKIMVB), promoting
                moral and spiritual growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
