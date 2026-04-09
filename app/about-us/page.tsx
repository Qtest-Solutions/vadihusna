import { GraduationCap, Building2, MapPin, Sparkles, Target, Globe, History, ArrowRight } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Vadi Husna Public School's legacy since 1996, our mission to nurture creativity, and our vision of excellence through holistic education.",
};

export default function AboutPage() {
  const features = [
    {
      title: "Academic Excellence",
      description: "Benchmark standards in education with a proven track record of excellence.",
      icon: GraduationCap,
    },
    {
      title: "Modern Infrastructure",
      description: "Digitized classrooms with state-of-the-art facilities for contemporary learners.",
      icon: Building2,
    },
    {
      title: "Strategic Location",
      description: "Spacious campus with scenic surroundings and easy region-wide accessibility.",
      icon: MapPin,
    },
    {
      title: "Holistic Development",
      description: "A specialized blend of traditional values with modern pedagogical standards.",
      icon: Sparkles,
    },
  ];

  return (
    <main className="bg-white overflow-hidden">
      {/* Hero Section - UNCHANGED */}
      <section className="page-hero">
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-primary text-white">Our Story</h1>
            <p className="text-xl text-stone-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              A journey of educational excellence since 1996.
            </p>
            <div className="inline-flex items-center gap-2 bg-black/20 rounded-full px-6 py-2 text-sm font-medium border border-white/10">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--c-accent)' }}></span>
              Excellence through Education
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement: Clean & Airy */}
      <section className="relative py-24 lg:py-32 bg-white">
        <div className="container-max px-4">
          <div className="max-w-5xl mx-auto text-center reveal reveal-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 mb-8 shadow-sm">
              <Target size={32} />
            </div>
            <p className="text-amber-600 font-bold tracking-widest text-xs uppercase mb-4">Our Institutional Mission</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-12 font-poppins tracking-tight">Excellence through Education</h2>

            <div className="relative p-8 lg:p-12 border-t-2 border-amber-100 bg-slate-50/30 rounded-b-3xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-3">Our Vision</h3>
                  <p className="text-2xl text-slate-700 leading-relaxed font-medium font-poppins">
                    "Excellence through holistic education for whatever professional path the students choose."
                  </p>
                </div>
                <div className="text-left md:border-l md:border-amber-100 md:pl-8">
                  <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-3">Our Mission</h3>
                  <p className="text-2xl text-slate-700 leading-relaxed font-medium font-poppins">
                    "To nurse and nurture creativity in the minds of our students and discover their manifold potentialities."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantage Grid: Simplified & Unique */}
      <section className="section-padding bg-slate-50/50 border-y border-slate-100">
        <div className="container-max">
          <div className="text-center mb-20 reveal reveal-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 font-poppins mb-4">The Vadi Husna Advantage</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">Discover the foundational pillars that define our commitment to student success.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group card-clean p-8 bg-white border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 reveal reveal-up" style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-amber-50 text-amber-600 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 font-poppins">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm font-medium">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Foundation Story: Editorial Layout */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-max px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-start reveal reveal-up">
              <div className="lg:w-1/2 lg:sticky lg:top-32">
                <p className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-3">Our Legacy</p>
                <h2 className="text-4xl lg:text-7xl font-bold text-slate-900 leading-tight font-poppins mb-8">Our Foundation Story</h2>
                <div className="h-1.5 w-24 bg-amber-500 rounded-full mb-8"></div>
                <p className="text-slate-700 text-xl leading-relaxed font-medium">
                  Established in 1996, Vadi Husna Public School represents a world where modern education blends with traditional instruction in orchestral harmony.
                </p>
              </div>

              <div className="lg:w-1/2 space-y-16">
                <div className="reveal reveal-up">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
                      <History size={20} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 font-poppins">Origin & Development</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg font-medium mb-6">
                    Staying rooted to the philosophical foundations of education and having objectives to strive for educational, social, cultural and economic advancement in and around Elettil, a team of dedicated young men headed by <span className="text-slate-900 font-bold border-b-2 border-amber-200">Mr. K. Abdul Khadar</span>, the founder General Secretary of Vadi Husna, established Vadi Husna Public School in 1996.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-lg font-medium mb-6">
                    Ever since its inception, the school has set itself a benchmark in academic excellence, integrity, social and moral responsibility so as to enable the pupils to face the world of stiff competitions and tough challenges.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="reveal reveal-up">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="text-amber-500" size={24} />
                      <h4 className="text-lg font-bold text-slate-900 font-poppins">Motto</h4>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                      Excellence through education. Education as the continuous pursuit of excellence.
                    </p>
                  </div>
                  <div className="reveal reveal-up" style={{ transitionDelay: '100ms' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="text-amber-500" size={24} />
                      <h4 className="text-lg font-bold text-slate-900 font-poppins">Location</h4>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                      Situated in a spacious campus blessed with comfortable scenic surroundings and easy accessibility, within walking distance from Elettil town on Koduvally road.
                    </p>
                  </div>
                </div>

                <div className="card-clean p-10 bg-slate-50 border-none rounded-3xl reveal reveal-up">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 font-poppins">Modern Learning Environment</h3>
                  <div className="space-y-6">
                    {[
                      "Digitized cyber-space classrooms for integrated learning.",
                      "Interdisciplinary frameworks for applied knowledge.",
                      "Scientific education rooted in traditional values."
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <ArrowRight className="text-amber-500 shrink-0 mt-1" size={18} />
                        <p className="text-slate-600 font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action: Minimalist */}
      <section className="py-24 bg-slate-50/50 border-t border-slate-100">
        <div className="container-max text-center px-4 reveal reveal-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 font-poppins">Join Our Legacy</h2>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium">
            Be part of our continuing journey towards educational brilliance and holistic leadership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contactus" className="btn-accent !px-10 !py-4 shadow-xl">
              Contact Admissions Office
            </a>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Academic Year 2024-25</p>
          </div>
        </div>
      </section>
    </main>
  );
}
