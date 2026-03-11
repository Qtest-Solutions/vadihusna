import Link from "next/link";

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation Anchors */}
      <div className="sticky top-0 bg-white shadow-md z-40">
        <div className="container mx-auto px-6 py-4 flex gap-6 overflow-x-auto">
          <a href="#curriculum" className="font-medium text-blue-600 hover:text-blue-700 whitespace-nowrap">
            Curriculum
          </a>
          <a href="#examination" className="font-medium text-blue-600 hover:text-blue-700 whitespace-nowrap">
            Examination
          </a>
          <Link href="/academics/faculty" className="font-medium text-blue-600 hover:text-blue-700 whitespace-nowrap">
            Faculty
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        {/* Main Title */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Academics
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our academic programs, meet our faculty, and see our achievements.
          </p>
        </div>

        {/* CURRICULUM SECTION */}
        <section id="curriculum" className="mb-24 scroll-mt-20">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Curriculum & Groups Offered
            </h2>
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
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Features of Our Curriculum
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-sm text-center hover:shadow-md transition">
                <div className="w-16 h-16 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🏛️
                </div>
                <h4 className="font-semibold text-lg mb-2">CBSE Affiliated</h4>
                <p className="text-sm text-gray-700">
                  Following the Central Board of Secondary Education's guidelines
                  and academic rigor.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-sm text-center hover:shadow-md transition">
                <div className="w-16 h-16 bg-green-200 text-green-800 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🕌
                </div>
                <h4 className="font-semibold text-lg mb-2">Islamic Education</h4>
                <p className="text-sm text-gray-700">
                  A secondary Madrassa recognized by Samastha (SKIMVB), promoting
                  moral and spiritual growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXAMINATION SECTION */}
        <section id="examination" className="scroll-mt-20">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Examination & Assessment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The school follows the{" "}
              <span className="font-semibold text-blue-600">
                Continuous and Comprehensive Evaluation (CCE)
              </span>{" "}
              system introduced by CBSE, ensuring an ongoing and holistic
              assessment that measures both scholastic and co-scholastic
              development.
            </p>
          </div>

          {/* Overview Card */}
          <div className="bg-blue-50 rounded-2xl shadow-lg p-8 mt-12 text-center max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Classes VI – X Assessments
            </h3>
            <p className="text-gray-700 mb-2">
              Students are evaluated under three major domains covering academic
              and life skills.
            </p>
            <p className="font-medium text-blue-700">
              Continuous growth, not one-time judgment.
            </p>
          </div>

          {/* Assessment Structure */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Assessment Structure
            </h3>

            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {/* Formative Assessment */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                <h4 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
                  <span className="text-2xl mr-2">📝</span>
                  Formative Assessment (FA)
                </h4>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Teachers evaluate students continuously in a supportive manner.
                  Projects, quizzes, practicals, assignments, debates, and
                  homework are part of this process, fostering consistent growth.
                </p>
                <div className="bg-blue-50 font-medium text-sm text-blue-800 py-3 px-4 rounded-lg">
                  4 formative assessments per academic year
                </div>
              </div>

              {/* Summative Assessment */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                <h4 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                  <span className="text-2xl mr-2">📊</span>
                  Summative Assessment (SA)
                </h4>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Conducted at the end of instructional periods, SA evaluates
                  cumulative learning through structured pen-paper tests.
                </p>
                <div className="bg-green-50 font-medium text-sm text-green-800 py-3 px-4 rounded-lg">
                  2 summative assessments per academic year
                </div>
              </div>
            </div>
          </div>

          {/* Life Skills Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Life Skills & 21st Century Assessments
            </h3>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
              To prepare students for the evolving world, CBSE integrates advanced
              evaluation formats that assess critical thinking, creativity, and
              communication skills.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* PSA */}
              <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
                <div className="text-3xl mb-3">🧩</div>
                <h4 className="font-semibold text-gray-800">PSA</h4>
                <p className="text-sm text-gray-600">
                  Problem Solving Assessment
                </p>
              </div>

              {/* OTBA */}
              <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
                <div className="text-3xl mb-3">📖</div>
                <h4 className="font-semibold text-gray-800">OTBA</h4>
                <p className="text-sm text-gray-600">
                  Open Text Based Assessment
                </p>
              </div>

              {/* CCE */}
              <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
                <div className="text-3xl mb-3">📈</div>
                <h4 className="font-semibold text-gray-800">CCE</h4>
                <p className="text-sm text-gray-600">
                  Continuous Comprehensive Evaluation
                </p>
              </div>

              {/* Portfolio */}
              <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
                <div className="text-3xl mb-3">📋</div>
                <h4 className="font-semibold text-gray-800">Portfolio</h4>
                <p className="text-sm text-gray-600">
                  Student Progress Documentation
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
