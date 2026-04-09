import {
  BookOpen,
  Atom,
  FlaskConical,
  Microscope,
  Calculator,
  Laptop,
  Car,
  ArrowRight,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Campus",
  description: "Explore the Vadi Husna Public School campus. Learn about our library with 4,000+ books, specialized science laboratories, 800-seat auditorium, and reliable transportation services.",
};

export default function CampusPage() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-max text-center">
          <h1 className="heading-primary text-white mb-4">Campus Facilities</h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Explore our library, laboratories, and transport services that
            support student learning and safety.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="container-max py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <a
              href="#library"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-200 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition"
            >
              <BookOpen className="h-4 w-4" style={{ color: 'var(--c-primary)' }} />
              Library
            </a>
            <a
              href="#laboratories"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-200 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition"
            >
              <Atom className="h-4 w-4" style={{ color: 'var(--c-cta)' }} />
              Laboratories
            </a>
            <a
              href="#transportation"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-200 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition"
            >
              <Car className="h-4 w-4" style={{ color: 'var(--c-accent)' }} />
              Transportation
            </a>
          </div>
        </div>
      </section>

      {/* Library */}
      <section id="library" className="section-padding bg-white scroll-mt-16">
        <div className="container-max">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-lg bg-stone-100 flex-shrink-0">
              <BookOpen className="h-6 w-6" style={{ color: 'var(--c-primary)' }} />
            </div>
            <h2 className="heading-secondary !mb-0">Library</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="card-clean p-8 h-full">
                <p className="text-body text-stone-700 leading-relaxed">
                  <strong className="font-semibold text-stone-900">“Reading is to the mind what exercise is to the body.”</strong><br/><br/> 
                  Our library is well stocked with around 4,000 books in English,
                  Malayalam, Hindi, and Arabic. The school subscribes to
                  journals, magazines, and several newspapers. A spacious,
                  well-furnished library room provides facilities for reading
                  and reference for both teachers and students. Young scholars
                  in quest of knowledge can invest their time in this spacious
                  library room. Students are expected to write down the names of
                  the books they read in the school diary; a brief synopsis of
                  each book should be written and shown to the librarian, class
                  teacher, or other subject teachers.
                </p>
              </div>
            </div>
            <div>
              <div className="card-clean p-6 bg-stone-50 border-none h-full">
                <p className="section-label">Highlights</p>
                <ul className="mt-4 space-y-3 text-sm text-stone-700">
                  <li className="flex gap-2 items-start"><span style={{ color: 'var(--c-primary)' }}>•</span> ~4,000 books</li>
                  <li className="flex gap-2 items-start"><span style={{ color: 'var(--c-primary)' }}>•</span> English, Malayalam, Hindi, Arabic</li>
                  <li className="flex gap-2 items-start"><span style={{ color: 'var(--c-primary)' }}>•</span> Journals, magazines, newspapers</li>
                  <li className="flex gap-2 items-start"><span style={{ color: 'var(--c-primary)' }}>•</span> Reading and reference space</li>
                  <li className="flex gap-2 items-start"><span style={{ color: 'var(--c-primary)' }}>•</span> Diary entries and synopsis practice</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratories */}
      <section
        id="laboratories"
        className="section-padding bg-stone-50 border-y border-stone-200 scroll-mt-16"
      >
        <div className="container-max">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-lg bg-stone-100 flex-shrink-0">
              <Atom className="h-6 w-6" style={{ color: 'var(--c-cta)' }} />
            </div>
            <h2 className="heading-secondary !mb-0">Laboratories</h2>
          </div>

          <div className="card-clean p-8 mb-10 border-l-4" style={{ borderLeftColor: 'var(--c-cta)' }}>
            <p className="text-body text-stone-700">
              The school has separate laboratories for Chemistry, Biology,
              Physics, Computer Science, and Mathematics. All apparatus,
              chemicals, models, specimens, charts, a human skeleton, and other
              equipment are provided. Each lab is approximately 30’ × 20’ and is
              equipped with the required furniture and facilities for
              experimental work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Physics */}
            <div className="card-clean p-6 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-stone-50 group-hover:bg-stone-100 transition-colors">
                  <Atom className="h-5 w-5 text-stone-600" />
                </div>
                <h3 className="heading-tertiary text-lg">Physics Lab</h3>
              </div>
              <ul className="text-sm text-stone-600 space-y-2">
                <li className="flex gap-2 items-start"><span className="text-stone-300 mt-0.5">•</span> Large room with furniture and experimental facilities</li>
                <li className="flex gap-2 items-start"><span className="text-stone-300 mt-0.5">•</span> Apparatus for length, area, volume; pneumatics and hydrostatics</li>
                <li className="flex gap-2 items-start"><span className="text-stone-300 mt-0.5">•</span> Hydrometers and specific gravity; meteorology; mechanics; heat; light; sound</li>
                <li className="flex gap-2 items-start"><span className="text-stone-300 mt-0.5">•</span> Magnetism and electricity</li>
              </ul>
            </div>

            {/* Chemistry */}
            <div className="card-clean p-6 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-stone-50 group-hover:bg-stone-100 transition-colors">
                  <FlaskConical className="h-5 w-5 text-stone-600" />
                </div>
                <h3 className="heading-tertiary text-lg">Chemistry Lab</h3>
              </div>
              <ul className="text-sm text-stone-600 space-y-2">
                <li className="flex gap-2 items-start"><span className="text-stone-300 mt-0.5">•</span> Senior secondary infrastructure; CBSE‑aligned chemicals and glassware</li>
                <li className="flex gap-2 items-start"><span className="text-stone-300 mt-0.5">•</span> Borosilicate glassware; AR jars for chemical storage</li>
                <li className="flex gap-2 items-start"><span className="text-stone-300 mt-0.5">•</span> Balances, water bath, Kip’s apparatus, Bunsen burners</li>
                <li className="flex gap-2 items-start"><span className="text-stone-300 mt-0.5">•</span> Heating setups, gas pipelines/storage, taps, sinks</li>
                <li className="flex gap-2 items-start"><span className="text-stone-300 mt-0.5">•</span> Individual cupboards and shelves</li>
              </ul>
            </div>

            {/* Biology */}
            <div className="card-clean p-6 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-stone-50 group-hover:bg-stone-100 transition-colors">
                  <Microscope className="h-5 w-5 text-stone-600" />
                </div>
                <h3 className="heading-tertiary text-lg">Biology Lab</h3>
              </div>
              <ul className="text-sm text-stone-600 space-y-2">
                <li className="flex gap-2 items-start"><span className="text-stone-300 mt-0.5">•</span> Binocular, dissection, projection, student, and research microscopes</li>
                <li className="flex gap-2 items-start"><span className="text-stone-300 mt-0.5">•</span> Human skeleton and models (brain, circulatory, digestive, ear, embryo, etc.)</li>
                <li className="flex gap-2 items-start"><span className="text-stone-300 mt-0.5">•</span> Organs (teeth/mouth, heart, kidney, respiratory system, liver, skull)</li>
                <li className="flex gap-2 items-start"><span className="text-stone-300 mt-0.5">•</span> Plant physiology apparatus and projectors</li>
              </ul>
            </div>

            {/* Mathematics */}
            <div className="card-clean p-6 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-stone-50 group-hover:bg-stone-100 transition-colors">
                  <Calculator className="h-5 w-5 text-stone-600" />
                </div>
                <h3 className="heading-tertiary text-lg">Mathematics Lab</h3>
              </div>
              <ul className="text-sm text-stone-600 space-y-2">
                <li className="flex gap-2 items-start"><span className="text-stone-300 mt-0.5">•</span> Geometrical model sets and blackboard</li>
                <li className="flex gap-2 items-start"><span className="text-stone-300 mt-0.5">•</span> Roll‑up graph board; wooden/plastic instrument boxes</li>
                <li className="flex gap-2 items-start"><span className="text-stone-300 mt-0.5">•</span> Models of algebraic identities, charts, shapes (angles, triangles, cubes, rectangles)</li>
              </ul>
            </div>

            {/* Computer */}
            <div className="card-clean p-6 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-stone-50 group-hover:bg-stone-100 transition-colors">
                  <Laptop className="h-5 w-5 text-stone-600" />
                </div>
                <h3 className="heading-tertiary text-lg">Computer Lab</h3>
              </div>
              <ul className="text-sm text-stone-600 space-y-2">
                <li className="flex gap-2 items-start"><span className="text-stone-300 mt-0.5">•</span> Well‑furnished lab with 40 systems</li>
                <li className="flex gap-2 items-start"><span className="text-stone-300 mt-0.5">•</span> Computer education from Std. I to Std. XII</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Auditorium */}
      <section id="auditorium" className="section-padding bg-stone-50 border-y border-stone-200 scroll-mt-16">
        <div className="container-max">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-lg bg-stone-100 flex-shrink-0">
              <Laptop className="h-6 w-6" style={{ color: 'var(--c-primary)' }} />
            </div>
            <h2 className="heading-secondary !mb-0">Auditorium</h2>
          </div>
          <div className="card-clean p-8 bg-white">
            <p className="text-body text-stone-700 leading-relaxed">
              Our campus features a spacious, state-of-the-art auditorium with a 
              <strong className="text-stone-900"> capacity of over 800 seats</strong>. 
              It serves as the hub for major school functions, cultural programs, 
              seminars, and academic gatherings, providing an excellent platform 
              for students to showcase their talents.
            </p>
          </div>
        </div>
      </section>

      {/* Rules & Discipline */}
      <section id="rules" className="section-padding bg-white scroll-mt-16">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label">Campus Life</p>
            <h2 className="heading-secondary">Rules & Discipline</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-clean p-8 border-t-4 border-amber-500">
              <h3 className="text-xl font-bold text-slate-900 mb-4">School Timing</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                The school begins at <strong className="text-slate-900">9:00 AM</strong>. Pupils must reach the school at least 5 minutes before the first bell. Every student must bring the school diary to class every day.
              </p>
            </div>

            <div className="card-clean p-8 border-t-4 border-amber-500">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Conduct & Leave</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Regularity is strictly required. Leave of absence should be recorded in the school diary. Pupils must come in clean, tidy uniforms. Respect for school property and polite behavior is mandatory.
              </p>
            </div>

            <div className="card-clean p-8 border-t-4 border-amber-500">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Prohibitions</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Mobile phones, cameras, and all other electronic gadgets are <strong className="text-red-600 uppercase">strictly prohibited</strong> on campus. Discipline is the soul of our institution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
