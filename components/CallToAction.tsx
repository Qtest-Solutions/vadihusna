import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with Parallax/KenBurns feel */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
          alt="School building abstract"
          className="w-full h-full object-cover shadow-2xl scale-105"
        />
        {/* Rich gradient overlay typical of premium sites */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-900/90 to-emerald-900/80" />
      </div>

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto glass-dark p-10 lg:p-14 reveal reveal-up">
          <span className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4 block">
            Join Our Community
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins leading-tight">
            Ready to shape your child's future?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed font-medium">
            Admissions for the upcoming academic year are now open. Get in touch with our office to begin the enrollment process.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* <Link href="/admissions" className="btn-cta text-base px-8 py-4 w-full sm:w-auto shadow-[0_0_20px_rgba(4,120,87,0.5)]">
               Apply Now
            </Link> */}
            <Link href="/contactus" className="btn-outline border-white/20 text-white hover:bg-white hover:text-slate-900 text-base px-8 py-4 w-full sm:w-auto flex items-center justify-center group">
              Contact Admissions
              <MoveRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>

          <p className="mt-8 text-slate-400 text-sm flex items-center justify-center gap-2">
            Call us directly at <a href="tel:+919946100154" className="text-amber-400 hover:text-amber-300 font-bold">+91 9946100154</a>
          </p>
        </div>
      </div>
    </section>
  );
}
