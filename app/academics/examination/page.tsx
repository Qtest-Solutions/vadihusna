export default function ExaminationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Examination & Open Houses
          </h1>
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
        <div className="bg-blue-50 rounded-2xl shadow-lg p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Classes VI – X Assessments
          </h2>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Assessment Structure
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Formative Assessment */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
                <span className="text-2xl mr-2">📝</span>
                Formative Assessment (FA)
              </h3>
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
              <h3 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                <span className="text-2xl mr-2">📊</span>
                Summative Assessment (SA)
              </h3>
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
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Life Skills & 21st Century Assessments
          </h2>
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

            {/* ASL */}
            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
              <div className="text-3xl mb-3">🗣️</div>
              <h4 className="font-semibold text-gray-800">ASL</h4>
              <p className="text-sm text-gray-600">
                Assessment of Speaking & Listening
              </p>
            </div>

            {/* VBQ */}
            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
              <div className="text-3xl mb-3">💎</div>
              <h4 className="font-semibold text-gray-800">VBQ</h4>
              <p className="text-sm text-gray-600">Value Based Questions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
