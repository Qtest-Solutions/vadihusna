import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Ken Burns Effect */}
      {/* Note: I'm using an external high-quality placeholder that looks like a school/campus since local assets aren't specified for this layout yet */}
      <div className="absolute inset-0 z-0">
        <img
          src="/vadihusna_hero.jpg"
          alt="Vadi Husna Public School Campus"
          className="hero-kenburns object-cover w-full h-full"
        />
        {/* Deep Sapphire Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90 z-10" />
      </div>



      {/* Content */}
      <div className="container-max relative z-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-20">

        {/* Tiny Badge */}
        {/* <div className="reveal reveal-up visible">
          <span className="inline-block py-1 px-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase mb-6 shadow-xl">
            Established 1996 • CBSE Affiliation No. 930618
          </span>
        </div> */}

        {/* Cinematic Headline */}
        <div className="reveal reveal-up visible mt-8" style={{ transitionDelay: '100ms' }}>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 mt-11 leading-tight drop-shadow-xl" style={{ fontFamily: 'var(--font-poppins)' }}>
            Excellence Through <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Education
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="reveal reveal-up visible" style={{ transitionDelay: '200ms' }}>
          <p className="text-slate-200 text-lg md:text-1xl font-medium max-w-2xl mx-auto mb-6 leading-relaxed drop-shadow-md">
            Empowering students with modern knowledge while staying rooted in traditional values. Join us on a journey of holistic development.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="reveal reveal-up visible flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto" style={{ transitionDelay: '300ms' }}>
          <Link href="/about-us" className="btn-accent px-10 py-3 text-base group">
            Learn More
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/contactus" className="btn-outline px-10 py-3 text-base">
            Contact Us
          </Link>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-8 flex flex-col items-center animate-[fadeIn_2s_ease-out_forwards]">
          {/* <p className="text-white/60 text-xs font-bold tracking-widest uppercase mb-1">Scroll to discover</p> */}
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1 backdrop-blur-sm">
            <div className="w-1.5 h-3 bg-amber-500 rounded-full animate-[float_2s_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
}
