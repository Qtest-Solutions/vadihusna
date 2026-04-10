import Link from "next/link";
import { ArrowRight, BookOpen, Target, Globe } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-100 rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3" />

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="reveal reveal-left">
              <p className="section-label text-amber-600 mb-2 tracking-widest text-sm font-bold uppercase">Our Heritage</p>
              <h2 className="heading-secondary text-slate-900 mb-6 drop-shadow-sm font-bold">
                Excellence through <br className="hidden sm:block" /> Education Since 1996
              </h2>
            </div>

            <div className="reveal reveal-up visible" style={{ transitionDelay: '100ms' }}>
              <p className="text-body text-slate-600 mb-6 text-lg leading-relaxed">
                Staying rooted to the philosophical foundations of education and having objectives to strive for educational, social, cultural and economic advancement in and around Elettil, a dedicated team established Vadi Husna Public School in 1996.
              </p>
              <p className="text-body text-slate-600 mb-8 text-lg leading-relaxed">
                Ever since its inception, the school has set itself a benchmark in academic excellence, integrity, social and moral responsibility so as to enable the pupils to face the world of stiff competitions and tough challenges.
              </p>
</div>

            <div className="reveal reveal-up" style={{ transitionDelay: '300ms' }}>
              <Link href="/about-us" className="btn-primary group inline-flex items-center">
                Discover Our Story
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="order-1 lg:order-2 reveal reveal-right visible relative">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white rounded-2xl rounded-tr-[3rem] shadow-xl p-8 hover:scale-105 transition-transform duration-300">
                <Target className="text-amber-500 mb-4" size={40} />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Our Mission</h3>
                <p className="text-slate-600">To nurse and nurture creativity in the minds of our students and discover their manifold potentialities.</p>
              </div>

              <div className="bg-slate-900 rounded-2xl rounded-bl-[3rem] shadow-xl p-8 text-white hover:scale-105 transition-transform duration-300">
                <Globe className="text-amber-500 mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                <p className="text-slate-300">Excellence through holistic education for whatever professional path the students choose.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
