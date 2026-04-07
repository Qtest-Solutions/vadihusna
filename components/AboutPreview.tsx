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
                Founded by the Vadi Husna Educational & Charitable Association under the leadership of Mr. K. Abdul Khadar, our school was established to drive social, cultural, and educational advancement in the rural community of Elettil, Koduvally.
              </p>
              <p className="text-body text-slate-600 mb-8 text-lg leading-relaxed">
                We blend modern scientific education with traditional moral instruction. As a proud Senior Secondary CBSE School (Affiliation No. 930618) and a trusted member of the UNESCO ASPnet, we maintain world-class standards while anchoring our students in community values.
              </p>
            </div>

            <div className="reveal reveal-up grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10" style={{ transitionDelay: '200ms' }}>
               <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors group">
                 <div className="bg-slate-100 p-3 rounded-lg group-hover:bg-amber-100 transition-colors">
                   <Target className="text-slate-800" size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-slate-900 mb-1">Our Mission</h3>
                   <p className="text-sm text-slate-600">Educational, social, and cultural advancement in Elettil.</p>
                 </div>
               </div>
               
               <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors group">
                 <div className="bg-slate-100 p-3 rounded-lg group-hover:bg-amber-100 transition-colors">
                   <Globe className="text-slate-800" size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-slate-900 mb-1">Global Vision</h3>
                   <p className="text-sm text-slate-600">UNESCO ASPnet member promoting global citizenship and peace.</p>
                 </div>
               </div>
            </div>

            <div className="reveal reveal-up" style={{ transitionDelay: '300ms' }}>
              <Link href="/about-us" className="btn-primary group inline-flex items-center">
                Discover Our Story
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="order-1 lg:order-2 reveal reveal-right visible relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 relative z-10">
              <div className="space-y-4 sm:space-y-6 mt-12">
                <img 
                   src="/annualday2025.png" 
                   alt="Students learning at Vadi Husna" 
                   className="rounded-2xl rounded-tr-[4rem] shadow-xl object-cover w-full h-[300px]"
                />
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-slate-900 rounded-2xl rounded-bl-[4rem] shadow-xl p-8 text-white h-[300px] flex flex-col justify-center">
                   <BookOpen className="text-amber-500 mb-4" size={40} />
                   <h3 className="text-2xl font-bold mb-2">Modern Pedagogy</h3>
                   <p className="text-slate-300 text-sm">Interactive smart classrooms offering an extension of integrated learning.</p>
                </div>
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute bottom-10 -left-6 z-20 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-[float_4s_ease-in-out_infinite]">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-amber-600">28+</span>
              </div>
              <div>
                <p className="font-bold text-slate-900 leading-tight">Years of<br/>Excellence</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
