import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academics",
  description: "Explore our academic programs, curriculum framework, and meet our dedicated faculty. We offer quality education from LKG to XII affiliated with CBSE.",
};

import Link from "next/link";

import { 
  BookOpen, 
  GraduationCap, 
  Users,
  ChevronRight
} from "lucide-react";

export default function AcademicsPage() {
  const pathways = [
    {
      title: "Curriculum Map",
      desc: "Explore our balanced academic structure, from Montessori-based foundations to advanced Senior Secondary clusters.",
      href: "/academics/curriculum",
      icon: BookOpen,
      color: "from-amber-500 to-amber-700",
      image: "/curriculum_hero.png"
    },
    {
      title: "Examination & Assessment",
      desc: "Discover our holistic CCE-based evaluation framework designed to measure continuous progress and life skills.",
      href: "/academics/examination",
      icon: GraduationCap,
      color: "from-emerald-600 to-emerald-800",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Our Educators",
      desc: "Meet the dedicated and experienced faculty members committed to shaping the future of every student.",
      href: "/academics/faculty",
      icon: Users,
      color: "from-blue-600 to-blue-800",
      image: "/vadihusna1.png"
    }
  ];

  return (
    <div>
      {/* HEADER HERO */}
      <section className="page-hero !py-32 !lg:py-48">
        <div className="container-max text-center">
          <p className="text-amber-400 font-bold tracking-widest text-sm uppercase mb-3 text-white">Vadi Husna Public School</p>
          <h1 className="heading-primary text-white !mb-4">Academic Pathways</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Discover the comprehensive educational programs and professional guidance that define the Vadi Husna experience.
          </p>
        </div>
      </section>

      <div className="container-max py-24">
        <div className="grid lg:grid-cols-3 gap-8">
          {pathways.map((path, i) => (
            <Link 
              key={i} 
              href={path.href}
              className="group relative h-[500px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background Image */}
              <img 
                src={path.image} 
                alt={path.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlays */}
              <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100`} />
              
              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${path.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500`}>
                  <path.icon size={28} />
                </div>
                
                <h3 className="text-3xl font-bold mb-4 font-poppins">{path.title}</h3>
                <p className="text-stone-300 leading-relaxed mb-6 line-clamp-3 group-hover:text-white transition-colors">
                  {path.desc}
                </p>
                
                <div className="flex items-center gap-2 font-bold text-sm tracking-wider uppercase group-hover:gap-4 transition-all">
                  Explore Now <ChevronRight size={18} className="text-amber-400" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
