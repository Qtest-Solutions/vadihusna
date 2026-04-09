import Image from "next/image";
import { 
  Lightbulb, 
  BookOpen, 
  GraduationCap, 
  Building2, 
  MoonStar, 
  Clock,
  CheckCircle2,
  Globe,
  Award,
  BookText,
  Sparkles
} from "lucide-react";

export default function CurriculumPage() {
  return (
    <div>
      {/* HEADER HERO */}
      <section className="page-hero !py-32 !lg:py-40">
        <div className="container-max text-center">
          <p className="text-amber-400 font-bold tracking-widest text-sm uppercase mb-3 text-white">Vadi Husna Public School</p>
          <h1 className="heading-primary text-white !mb-4">School Curriculum</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
            A balanced academic map designed to nurture intellectual curiosity and moral character.
          </p>
        </div>
      </section>

      <div className="container-max py-20 lg:py-24">
        
        {/* CURRICULUM SECTION */}
        <div className="mb-32">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-secondary !mb-2">Curriculum Map</h2>
            <p className="text-stone-500 text-sm font-medium tracking-wide uppercase">Foundation to Senior Secondary</p>
          </div>

          {/* Excellence Note */}
          <div className="card-clean p-8 lg:p-10 mb-16 text-center border-t-4 border-amber-600">
            <p className="text-body max-w-4xl mx-auto font-medium text-slate-700">
              At Vadi Husna Public School, we provide a balanced curriculum that seamlessly blends rigorous <strong className="text-stone-900 border-b border-stone-300 pb-0.5">CBSE Standards</strong> with broad development opportunities. We uniquely integrate recognized <strong className="text-stone-900 border-b border-stone-300 pb-0.5">Islamic Education</strong> via a secondary Madrassa recognized by Samastha (SKIMVB).
            </p>
          </div>

          {/* Features Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: Building2, label: "CBSE Affiliated", val: "930618" },
              { icon: Globe, label: "Global Standards", val: "UNESCO ASPnet" },
              { icon: MoonStar, label: "Moral Education", val: "SKIMVB Regd." },
              { icon: Award, label: "Success Rate", val: "100% Pass" }
            ].map((item, i) => (
              <div key={i} className="card-clean p-6 text-center group hover:bg-slate-50 transition-all">
                <div className="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  <item.icon className="text-amber-600" size={24} />
                </div>
                <span className="block text-xl font-bold text-stone-900 mb-0.5 font-poppins">{item.val}</span>
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Montessori Foundation */}
            <div className="card-clean p-8 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm">
                  <Lightbulb size={28} className="text-slate-800" />
                </div>
                <span className="badge badge-accent">Foundation</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">Pre-Primary – III</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                We follow the Montessori system of education focusing on Practical Life, Sensorial Training, Language Development, Mathematics, and Cultural studies.
              </p>
              <div className="space-y-3 pt-4 border-t border-slate-100">
                {["Practical Life Exercises", "Sensorial Training", "Language & Math Development"].map((txt, mi) => (
                  <div key={mi} className="flex items-center gap-2.5 text-[13px]">
                    <CheckCircle2 size={16} className="text-amber-500 shrink-0" />
                    <span className="font-medium text-slate-700">{txt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Section */}
            <div className="card-clean p-8 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm">
                  <BookOpen size={28} className="text-slate-800" />
                </div>
                <span className="badge badge-primary">Secondary</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">Classes IV – X</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                A robust CBSE curriculum covering core sciences, languages, and 21st-century life skills.
              </p>
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-2 mb-4">
                  {["English", "Malayalam", "Hindi", "Arabic", "Maths", "Science", "Social Science", "Computer", "Moral Science", "GK"].map((s) => (
                    <span key={s} className="px-2 py-1 bg-slate-100 text-[10px] font-bold text-slate-600 rounded uppercase tracking-wider">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Senior Secondary Section */}
            <div className="card-clean p-8 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm">
                  <GraduationCap size={28} className="text-slate-800" />
                </div>
                <span className="badge badge-teal">Senior Sec</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">Classes XI & XII</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                Science Stream specialization designed for success in professional higher education.
              </p>
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-2">
                  {["English", "Maths", "Physics", "Chemistry", "Biology", "Computer Science", "Arabic"].map((s) => (
                    <span key={s} className="px-2 py-1 bg-slate-100 text-[10px] font-bold text-slate-600 rounded uppercase tracking-wider">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ASSESSMENT SYSTEM */}
          <div className="mt-32">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="heading-secondary !mb-2">Assessment & Evaluation</h2>
              <p className="text-stone-500 text-sm font-medium tracking-wide uppercase">Continuous and Comprehensive Evaluation (CCE)</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="card-clean p-8 bg-white reveal reveal-left">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 font-bold">FA</span>
                    Formative Assessment
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    A tool used by teachers to continuously monitor pupil's progress in a supportive environment. Includes assignments, projects, practical work, debates, quizzes, and homework. Grades are awarded thrice/four times in an academic year.
                  </p>
                </div>
                <div className="card-clean p-8 bg-white reveal reveal-left" style={{ transitionDelay: '100ms' }}>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 font-bold">SA</span>
                    Summative Assessment
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    The terminal assessment of performance at the end of instruction periods. This takes the form of a pen-paper test held twice an academic year.
                  </p>
                </div>
              </div>

              <div className="card-clean p-8 lg:p-12 bg-slate-900 text-white reveal reveal-right">
                <h3 className="text-2xl font-bold mb-6 font-poppins text-amber-500">Modern Assessment Modes</h3>
                <p className="text-slate-400 text-sm mb-10 leading-relaxed">
                  In order to keep students abreast with 21st-century life skills, CBSE has introduced multiple modes of assessment:
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { code: "PSA", label: "Problem Solving Assessment" },
                    { code: "OTBA", label: "Open Text Based Assessment" },
                    { code: "ASL", label: "Speaking & Listening Skills" },
                    { code: "VBQ", label: "Value Based Questions" }
                  ].map((m, i) => (
                    <div key={i} className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                      <span className="block text-amber-500 font-bold mb-1">{m.code}</span>
                      <span className="text-xs text-slate-300 font-medium">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CO-SCHOLASTIC & CO-CURRICULAR */}
          <div className="mt-32">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="heading-secondary !mb-2">Holistic Development</h2>
              <p className="text-stone-500 text-sm font-medium tracking-wide uppercase">Beyond the Classroom</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-clean p-8 lg:p-10 reveal reveal-up">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-poppins">Co-Scholastic Assessment</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Describes the desirable behavior related to learner's life skills, work education, visual and performing arts, attitudes, and values.
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  {["Life Skills", "Work Education", "Visual Arts", "Performing Arts", "Values", "Attitudes"].map((s) => (
                    <li key={s} className="flex items-center gap-2 text-xs font-bold text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-clean p-8 lg:p-10 reveal reveal-up" style={{ transitionDelay: '100ms' }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                    <Award size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-poppins">Co-Curricular Activities</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  The inherent and untapped potentials of the students are brought out through various items included in the timetable.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Yoga", "Karate", "Music", "Craft", "Dance", "Daff", "Kolkali"].map((s) => (
                    <span key={s} className="px-3 py-1 bg-orange-50 text-orange-700 text-[11px] font-bold rounded-full border border-orange-100">{s}</span>
                  ))}
                </div>
                <div className="mt-8 grid grid-cols-1 gap-4 text-xs text-slate-500 leading-relaxed italic">
                  <p><strong>Daff:</strong> Dancers clad in white sing religious songs beating on a small drum-like musical instrument.</p>
                  <p><strong>Kolkali:</strong> A kind of dance in which dancers rhythmically beat sticks against each other.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
