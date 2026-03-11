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

export default function CampusPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container-max">
          <h1 className="text-5xl font-bold mb-4">Campus Facilities</h1>
          <p className="text-lg max-w-3xl">
            Explore our library, laboratories, and transport services that
            support student learning and safety.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-4 sticky top-16 z-10 bg-white/80 backdrop-blur border-b pt-10">
        <div className="container-max">
          <div className="flex flex-wrap gap-3">
            <a
              href="#library"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border hover:bg-gray-50 transition"
            >
              <BookOpen className="h-4 w-4 text-blue-600" />
              <span className="font-medium">Library</span>
            </a>
            <a
              href="#laboratories"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border hover:bg-gray-50 transition"
            >
              <Atom className="h-4 w-4 text-green-600" />
              <span className="font-medium">Laboratories</span>
            </a>
            <a
              href="#transportation"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border hover:bg-gray-50 transition"
            >
              <Car className="h-4 w-4 text-orange-600" />
              <span className="font-medium">Transportation</span>
            </a>
          </div>
        </div>
      </section>

      {/* Library */}
      <section id="library" className="section-padding">
        <div className="container-max">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-2 rounded-lg bg-blue-100">
              <BookOpen className="h-6 w-6 text-blue-700" />
            </div>
            <h2 className="heading-secondary">Library</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-100 p-6">
                <p className="text-body">
                  “Reading is to the mind what exercise is to the body.” Our
                  library is well stocked with around 4,000 books in English,
                  Malayalam, Hindi, and Arabic. The school subscribes to
                  journals, magazines, and several newspapers. A spacious,
                  well‑furnished library room provides facilities for reading
                  and reference for both teachers and students. Young scholars
                  in quest of knowledge can invest their time in this spacious
                  library room. Students are expected to write down the names of
                  the books they read in the school diary; a brief synopsis of
                  each book should be written and shown to the librarian, class
                  teacher, or other subject teachers.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl border bg-white p-4">
                <p className="text-sm text-gray-600">Highlights</p>
                <ul className="mt-2 space-y-2 text-sm text-gray-800 list-disc list-inside">
                  <li>~4,000 books</li>
                  <li>English, Malayalam, Hindi, Arabic</li>
                  <li>Journals, magazines, newspapers</li>
                  <li>Reading and reference space</li>
                  <li>Diary entries and synopsis practice</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratories */}
      <section
        id="laboratories"
        className="section-padding bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container-max">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-2 rounded-lg bg-green-100">
              <Atom className="h-6 w-6 text-green-700" />
            </div>
            <h2 className="heading-secondary">Laboratories</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-100 p-6 mb-8">
            <p className="text-body">
              The school has separate laboratories for Chemistry, Biology,
              Physics, Computer Science, and Mathematics. All apparatus,
              chemicals, models, specimens, charts, a human skeleton, and other
              equipment are provided. Each lab is approximately 30’ × 20’ and is
              equipped with the required furniture and facilities for
              experimental work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Physics */}
            <div className="rounded-xl border bg-white p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-md bg-blue-50">
                  <Atom className="h-5 w-5 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold">Physics Lab</h3>
              </div>
              <ul className="text-body list-disc list-inside space-y-1">
                <li>Large room with furniture and experimental facilities</li>
                <li>
                  Apparatus for length, area, volume; pneumatics and
                  hydrostatics
                </li>
                <li>
                  Hydrometers and specific gravity; meteorology; mechanics;
                  heat; light; sound
                </li>
                <li>Magnetism and electricity</li>
              </ul>
            </div>

            {/* Chemistry */}
            <div className="rounded-xl border bg-white p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-md bg-rose-50">
                  <FlaskConical className="h-5 w-5 text-rose-700" />
                </div>
                <h3 className="text-xl font-semibold">Chemistry Lab</h3>
              </div>
              <ul className="text-body list-disc list-inside space-y-1">
                <li>
                  Senior secondary infrastructure; CBSE‑aligned chemicals and
                  glassware
                </li>
                <li>Borosilicate glassware; AR jars for chemical storage</li>
                <li>Balances, water bath, Kip’s apparatus, Bunsen burners</li>
                <li>Heating setups, gas pipelines/storage, taps, sinks</li>
                <li>Individual cupboards and shelves</li>
              </ul>
            </div>

            {/* Biology */}
            <div className="rounded-xl border bg-white p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-md bg-emerald-50">
                  <Microscope className="h-5 w-5 text-emerald-700" />
                </div>
                <h3 className="text-xl font-semibold">Biology Lab</h3>
              </div>
              <ul className="text-body list-disc list-inside space-y-1">
                <li>
                  Binocular, dissection, projection, student, and research
                  microscopes
                </li>
                <li>
                  Human skeleton and models (brain, circulatory, digestive, ear,
                  embryo, etc.)
                </li>
                <li>
                  Organs (teeth/mouth, heart, kidney, respiratory system, liver,
                  skull)
                </li>
                <li>Plant physiology apparatus and projectors</li>
              </ul>
            </div>

            {/* Mathematics */}
            <div className="rounded-xl border bg-white p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-md bg-amber-50">
                  <Calculator className="h-5 w-5 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold">Mathematics Lab</h3>
              </div>
              <ul className="text-body list-disc list-inside space-y-1">
                <li>Geometrical model sets and blackboard</li>
                <li>Roll‑up graph board; wooden/plastic instrument boxes</li>
                <li>
                  Models of algebraic identities, charts, shapes (angles,
                  triangles, cubes, rectangles)
                </li>
              </ul>
            </div>

            {/* Computer */}
            <div className="rounded-xl border bg-white p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-md bg-indigo-50">
                  <Laptop className="h-5 w-5 text-indigo-700" />
                </div>
                <h3 className="text-xl font-semibold">Computer Lab</h3>
              </div>
              <ul className="text-body list-disc list-inside space-y-1">
                <li>Well‑furnished lab with 40 systems</li>
                <li>Computer education from Std. I to Std. XII</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section id="transportation" className="section-padding">
        <div className="container-max">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-2 rounded-lg bg-orange-100">
              <Car className="h-6 w-6 text-orange-700" />
            </div>
            <h2 className="heading-secondary">Transportation</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-100 p-6">
                <p className="text-body">
                  The school operates a fleet of vehicles to provide safe
                  transportation of pupils to and from surrounding areas.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <a
                href="/contactus"
                className="group rounded-xl border bg-white p-4 flex items-center justify-between hover:shadow-md transition"
              >
                <span className="font-medium">Route and pickup queries</span>
                <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-gray-900" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
