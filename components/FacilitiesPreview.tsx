import { BookOpen, Laptop, Microscope, Dumbbell, Bus, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FacilitiesPreview() {
  const facilities = [
    {
      title: "Science & Computer Labs",
      description: "6 distinct laboratories including Physics, Chemistry, Biology, and a Computer Lab with 34 workstations.",
      icon: Microscope,
      color: "from-emerald-900/90 to-slate-900/90",
      accent: "bg-emerald-500",
    },
    {
      title: "Extensive Library",
      description: "6 fully-equipped libraries with vast collections, reading spaces, and integrated digital resources.",
      icon: BookOpen,
      color: "from-amber-900/90 to-slate-900/90",
      accent: "bg-amber-500",
    },
    {
      title: "Digital Classrooms",
      description: "44 rooms in total, including 20 fully digitized interactive smart classrooms for advanced learning.",
      icon: Laptop,
      color: "from-blue-900/90 to-slate-900/90",
      accent: "bg-blue-500",
    },
    {
      title: "Physical Education",
      description: "A massive 12,700 sq. meter playground providing exceptional facilities for sports and physical development.",
      icon: Dumbbell,
      color: "from-rose-900/90 to-slate-900/90",
      accent: "bg-rose-500",
    },
    {
      title: "School Transportation",
      description: "Safe and reliable fleet of vehicles covering extensive routes across the surrounding region.",
      icon: Bus,
      color: "from-violet-900/90 to-slate-900/90",
      accent: "bg-violet-500",
    },
  ];

  return (
    <section className="section-padding bg-slate-900 relative overflow-hidden text-white">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
      <div className="absolute -left-40 top-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -right-40 bottom-40 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal reveal-up">
          <div className="max-w-2xl">
            <p className="section-label !text-emerald-400">World-Class Infrastructure</p>
            <h2 className="heading-secondary text-white">Campus Facilities</h2>
            <p className="text-slate-400 mt-4 text-lg">
              We provide an optimal environment for academic and extracurricular excellence, ensuring every student has the resources they need to succeed in a dynamic world.
            </p>
          </div>
          <Link href="/facilities" className="btn-primary group shrink-0 hidden md:flex">
            Explore All Facilities
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            // First item spans 2 columns and 2 rows on large screens
            const isFeatured = index === 0;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl reveal reveal-up ${isFeatured ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Gradient Overlay - Now solid for a clean look without images */}
                <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-100`} />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                    <div className={`w-12 h-12 rounded-full ${facility.accent} flex items-center justify-center mb-4 shadow-xl`}>
                      <Icon className="text-white" size={24} />
                    </div>

                    <h3 className={`font-bold mb-2 font-poppins text-white leading-tight ${isFeatured ? 'text-3xl' : 'text-xl'}`}>
                      {facility.title}
                    </h3>

                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                      <div className="overflow-hidden">
                        <p className={`text-slate-200 mt-2 ${isFeatured ? 'text-lg max-w-lg' : 'text-sm'}`}>
                          {facility.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center reveal reveal-up md:hidden" style={{ transitionDelay: '300ms' }}>
          <Link href="/facilities" className="btn-primary group w-full justify-center">
            Explore All Facilities
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
