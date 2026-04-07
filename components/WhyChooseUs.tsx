import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WhyChooseUs() {
  const points = [
    "Holistic Development blending traditional & modern education",
    "100% CBSE Pass Results consistently achieved",
    "Digitized & Smart Classrooms for interactive learning",
    "Dedicated Islamic Education (SKIMVB recognized)",
    "Extensive Transport Fleet covering rural & urban routes",
    "Comprehensive co-curricular & extra-curricular activities",
  ];

  return (
    <section className="relative section-padding bg-slate-900 text-white overflow-hidden my-20">
      {/* Background Graphic */}
      <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-gradient-to-l from-emerald-900/50 to-transparent pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="reveal reveal-left visible">
            <span className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4 block">
              The Vadi Husna Advantage
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight font-poppins">
              Nurturing Leaders for <br />Tomorrow's World
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-lg">
              We provide a safe, engaging, and dynamic environment where students are encouraged to reach their highest potential emotionally, academically, and physically.
            </p>

            <ul className="space-y-4 mb-10">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
                  <span className="text-slate-300">{point}</span>
                </li>
              ))}
            </ul>

            <Link href="/contactus" className="btn-cta text-white shadow-[0_0_20px_rgba(4,120,87,0.4)]">
              Begin Admission Process
            </Link>
          </div>

          <div className="relative reveal reveal-right visible group w-full order-first lg:order-last">
            {/* Main image with border radius and border effect */}
            <div className="rounded-3xl overflow-hidden border-2 border-slate-700 relative z-10 aspect-[4/5] max-w-md mx-auto lg:ml-auto">
              <Image
                src="/vadihusna1.png"
                alt="Vadi Husna Campus Advantage"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                <p className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug">"A benchmark in academic excellence and integrity."</p>
                <p className="text-emerald-400 font-medium">— Affiliated to CBSE Delhi</p>
              </div>
            </div>

            {/* Offset decor square */}
            <div className="absolute -z-10 top-6 -right-4 lg:top-10 lg:-right-10 w-full max-w-md h-full rounded-3xl border-2 border-emerald-600/30 mx-auto right-0 left-0 lg:left-auto" />
          </div>

        </div>
      </div>
    </section>
  );
}
