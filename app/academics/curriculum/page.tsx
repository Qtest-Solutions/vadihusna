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
  BookText
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
            {[
              { 
                title: "Pre-Primary – III", 
                badge: "Foundation", 
                type: "accent",
                desc: "Montessori-based education emphasizing Practical Life skills and Sensorial Training.", 
                icon: Lightbulb, 
                meta: [
                  { ic: GraduationCap, txt: "Montessori Pedagogy" },
                  { ic: Clock, txt: "Early Years Focus" }
                ]
              },
              { 
                title: "Classes IV – X", 
                badge: "Secondary", 
                type: "primary",
                desc: "Comprehensive curriculum integrating Languages, Sciences, and Computer Studies.", 
                icon: BookOpen, 
                meta: [
                  { ic: GraduationCap, txt: "CBSE Standardized" },
                  { ic: CheckCircle2, txt: "Life Skills Integrated" }
                ]
              },
              { 
                title: "Classes XI & XII", 
                badge: "Senior Sec", 
                type: "teal",
                desc: "Advanced subject clusters tailored for success in higher education and professional paths.", 
                icon: GraduationCap, 
                meta: [
                  { ic: BookText, txt: "Science Stream" },
                  { ic: Globe, txt: "University Prep" }
                ]
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="card-clean p-8 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm`}>
                    <item.icon size={28} className="text-slate-800" />
                  </div>
                  <span className={`badge badge-${item.type}`}>{item.badge}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">{item.desc}</p>
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  {item.meta.map((m, mi) => (
                    <div key={mi} className="flex items-center gap-2.5 text-[13px]">
                      <m.ic size={16} className="text-slate-400 shrink-0" />
                      <span className="font-medium text-slate-700">{m.txt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
