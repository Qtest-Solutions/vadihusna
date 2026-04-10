import {
  ClipboardCheck,
  BarChart,
  BrainCircuit,
  BookText,
  RefreshCw,
  FileCheck2,
  Clock,
  CheckCircle2
} from "lucide-react";

export default function ExaminationPage() {
  return (
    <div>
      {/* HEADER HERO */}
      <section className="page-hero !py-32 !lg:py-40 h-[550px]">
        <div className="container-max text-center">
          <p className="text-amber-400 font-bold tracking-widest text-sm uppercase mb-3 text-white">Vadi Husna Public School</p>
          <h1 className="heading-primary text-white !mb-4">Examination & Assessment</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
            A comprehensive evaluation framework fostering both academic excellence and practical life skills.
          </p>
        </div>
      </section>

      <div className="container-max py-20 lg:py-24">

        {/* EXAMINATION SECTION */}
        <div className="mb-32">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-secondary !mb-2">Evaluation Framework</h2>
            <p className="text-stone-500 text-sm font-medium tracking-wide uppercase">Continuous and Comprehensive Evaluation</p>
          </div>

          <div className="card-clean p-8 lg:p-10 mb-16 text-center border-t-4 border-slate-900">
            <p className="text-body max-w-4xl mx-auto font-medium text-slate-700">
              Our evaluation system follows the <strong className="text-stone-900 border-b border-stone-300 pb-0.5">CCE Pattern</strong> introduced by CBSE, ensuring academic progress is measured alongside behavioral and collaborative development.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: RefreshCw, label: "Assessment Pattern", val: "Continuous" },
              { icon: BrainCircuit, label: "Critical Thinking", val: "Applied" },
              { icon: FileCheck2, label: "Evaluation Type", val: "Comprehensive" },
              { icon: ClipboardCheck, label: "Reporting", val: "Holistic" }
            ].map((item, i) => (
              <div key={i} className="card-clean p-6 text-center group hover:bg-slate-50 transition-all">
                <div className="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  <item.icon className="text-emerald-700" size={24} />
                </div>
                <span className="block text-xl font-bold text-stone-900 mb-0.5 font-poppins">{item.val}</span>
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {/* Formative Card */}
            <div className="card-clean p-10 flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-0 transition-transform group-hover:scale-150 duration-700" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-emerald-600">
                    <ClipboardCheck size={32} />
                  </div>
                  <span className="badge badge-teal">Formative (FA)</span>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">Formative Assessment</h4>
                <p className="text-slate-600 leading-relaxed mb-10">
                  A tool to help monitoring student progress in a non-threatening environment. FA enhances learning via constant feedback sessions.
                </p>
                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-3 text-sm">
                    <RefreshCw size={18} className="text-slate-400" />
                    <span className="font-bold text-slate-900 uppercase tracking-wider text-xs">4 Assessments per year</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={18} className="text-slate-400" />
                    <span className="text-slate-700">Includes Practical, Project & Assignments</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Summative Card */}
            <div className="card-clean p-10 flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0 transition-transform group-hover:scale-150 duration-700" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600">
                    <BarChart size={32} />
                  </div>
                  <span className="badge badge-primary">Summative (SA)</span>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">Summative Assessment</h4>
                <p className="text-slate-600 leading-relaxed mb-10">
                  Conducted at the end of every term. It measures how much a student has learned from the instructional syllabus through structured tests.
                </p>
                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock size={18} className="text-slate-400" />
                    <span className="font-bold text-slate-900 uppercase tracking-wider text-xs">2 Assessments per year</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={18} className="text-slate-400" />
                    <span className="text-slate-700">Standardized Pen-Paper Examination</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Life Skills Grid */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="heading-tertiary !text-3xl mb-4 text-slate-900">21st Century Skills Focus</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">Evaluating critical thinking and creative aptitude through advanced secondary pillars.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { ic: BrainCircuit, t: "PSA", d: "Problem Solving" },
                { ic: BookText, t: "OTBA", d: "Open Text Assessment" },
                { ic: RefreshCw, t: "CCE", d: "Continuous Growth" },
                { ic: ClipboardCheck, t: "Portfolio", d: "Direct Evidence" }
              ].map((item, i) => (
                <div key={i} className="card-clean p-6 text-center hover:bg-slate-50 border-none shadow-sm flex flex-col items-center">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4">
                    <item.ic size={24} className="text-slate-400" />
                  </div>
                  <h5 className="font-bold text-slate-900 mb-1 uppercase tracking-widest text-xs">{item.t}</h5>
                  <p className="text-[11px] font-medium text-slate-500">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
