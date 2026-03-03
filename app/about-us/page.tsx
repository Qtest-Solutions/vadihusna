export const metadata = {
  title: "About Us - Vadi Husna Public School",
  description: "Our History – Origin and Development",
};

export default function AboutPage() {
  const milestones = [
    {
      year: "1996",
      title: "Foundation",
      description:
        "Vadi Husna Public School established by Mr. K. Abdul Khadar and team",
    },
    {
      year: "1996",
      title: "CBSE Affiliation",
      description: "Affiliated to CBSE Delhi under No. 930618",
    },
    {
      year: "Present",
      title: "Digital Excellence",
      description:
        "Fully digitized classrooms with modern learning infrastructure",
    },
  ];

  const features = [
    {
      title: "Academic Excellence",
      description: "Benchmark standards in education with proven track record",
      icon: "🎓",
    },
    {
      title: "Modern Infrastructure",
      description: "Digitized classrooms with state-of-the-art facilities",
      icon: "🏫",
    },
    {
      title: "Strategic Location",
      description:
        "Spacious campus with scenic surroundings and easy accessibility",
      icon: "📍",
    },
    {
      title: "Holistic Development",
      description: "Blending traditional values with modern education",
      icon: "🌟",
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>

        <div className="relative section-padding">
          <div className="container-max text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Our Story
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                A journey of educational excellence since 1996
              </p>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Excellence through Education
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              "Excellence through Education" - We strive for educational,
              social, cultural, and economic advancement, where modern education
              blends with traditional instruction in perfect harmony.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Journey
            </h2>

            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-0.5"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-2 md:-translate-x-2 z-10 ring-4 ring-white shadow-lg"></div>

                    <div
                      className={`ml-16 md:ml-0 md:w-1/2 ${
                        index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-100 p-6 hover:shadow-md transition-shadow">
                        <div className="text-2xl font-bold text-blue-600 mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Features Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the key elements that make Vadi Husna Public School a
              beacon of educational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-100 p-6 h-full hover:shadow-lg hover:ring-blue-200 transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Story */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Foundation Story
            </h2>

            <div className="prose prose-lg prose-blue max-w-none">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Staying rooted to the philosophical foundations of education
                  and having objectives to strive for educational, social,
                  cultural and economic advancement in and around Elettil, a
                  team of dedicated young men headed by
                  <span className="font-semibold text-blue-700">
                    {" "}
                    Mr. K. Abdul Khadar
                  </span>
                  , the founder General Secretary of Vadi Husna, established
                  Vadi Husna Public School in 1996.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Affiliated to CBSE Delhi under No. 930618, our school
                  represents a place where modern education blends with
                  traditional instruction in orchestral harmony. Ever since its
                  inception, the school has set itself a benchmark in academic
                  excellence, integrity, social and moral responsibility.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-100 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    🎯 Our Philosophy
                  </h3>
                  <p className="text-gray-600">
                    Education is the continuous pursuit of excellence. Our motto
                    "Excellence through Education" drives everything we do.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-100 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    🌍 Our Location
                  </h3>
                  <p className="text-gray-600">
                    Situated in a spacious campus with scenic surroundings,
                    within walking distance from Elettil town on Koduvally road.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Modern Learning Environment
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Having digitized all our classrooms, we focus on cyber space
                  which offers opportunities for extension of integrated
                  learning, establishing relationships of interdisciplinary
                  nature and designing new vistas of knowledge.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Within a short span of time, we have transformed our
                  institution into a center of academic excellence where modern
                  scientific education is delivered alongside traditional
                  instruction, ensuring our students are well-prepared to face
                  any challenge they encounter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Legacy
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of our continuing journey towards educational excellence and
            holistic development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <a
              href="/admissions"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Apply for Admission
            </a> */}
            <a
              href="/contactus"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
