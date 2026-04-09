import { Metadata } from "next";
import { User, GraduationCap, Clock, ArrowUpRight, Award, Search, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Faculty - Vadi Husna Public School",
  description:
    "Meet our dedicated and experienced faculty members at Vadi Husna Public School.",
};

const facultyData = [
  { sl: 1, name: "NASHVA K", designation: "PGT", qualification: "M.Sc (Maths), B.Ed, SET", experience: "11 Years" },
  { sl: 2, name: "SHEENA P", designation: "TGT", qualification: "MA, M.Ed, NET, SET", experience: "18 Years" },
  { sl: 3, name: "BABY VANAJA", designation: "TGT", qualification: "MA, B.Ed", experience: "20 Years" },
  { sl: 4, name: "JYOTHI O P", designation: "TGT", qualification: "MA, B.Ed, SET", experience: "18 Years" },
  { sl: 5, name: "SHEEBA K", designation: "PRT", qualification: "MA, M.Ed", experience: "20 Years" },
  { sl: 6, name: "MUNSHIRA", designation: "PRT", qualification: "BA, B.Ed, PGDCA, KTET", experience: "16 Years" },
  { sl: 7, name: "ASWATHY", designation: "PRT", qualification: "BA-ENG, TTC, B.Ed", experience: "17 Years" },
  { sl: 8, name: "SINDHU K P", designation: "PRT", qualification: "MA-HINDI, B.Ed", experience: "12 Years" },
  { sl: 9, name: "SHIPINA K K", designation: "PGT", qualification: "MSc, B.Ed-Maths", experience: "14 Years" },
  { sl: 10, name: "NASEERA", designation: "TGT", qualification: "MSc, B.Ed", experience: "14 Years" },
  { sl: 11, name: "TIBIN AUGUSTIN", designation: "PET", qualification: "BPEd", experience: "7 Years" },
  { sl: 12, name: "SAJITHA P M", designation: "PRT", qualification: "P.D.C Fashion Designing", experience: "18 Years" },
  { sl: 13, name: "SHABNA P", designation: "TGT", qualification: "B.Ed Mathematics", experience: "3 Years" },
  { sl: 14, name: "ANUSREE T P", designation: "PRT", qualification: "MA-Sociology, MTTC", experience: "2 Years" },
  { sl: 15, name: "MUHAMMED SHAFI K M", designation: "TGT", qualification: "MA-English, ASHARI", experience: "8 Years" },
  { sl: 16, name: "FATHIMATH THASKEENA", designation: "PRT", qualification: "B.Tech", experience: "2 Years" },
  { sl: 17, name: "NOORA JASMINE K C", designation: "PRT", qualification: "B.Tech, MTTC", experience: "2 Years" },
  { sl: 18, name: "SHIBI K P", designation: "PRT", qualification: "B.Com, NTT", experience: "10 Years" },
  { sl: 19, name: "AYISHA T K", designation: "PRT", qualification: "AFSAL-AL-ULAMA", experience: "3 Years" },
  { sl: 20, name: "ASWATHY P K", designation: "PRT", qualification: "MA", experience: "3 Years" },
  { sl: 21, name: "HASNA N K", designation: "PRT", qualification: "DECCE, Diploma in ECE", experience: "3 Years" },
  { sl: 22, name: "MUHAMMED FAVAS P P", designation: "Librarian", qualification: "BA, MLiSc, PGOLAN", experience: "4 Years" },
  { sl: 23, name: "NEETHU V", designation: "PRT", qualification: "MSc, MCA", experience: "4 Years" },
  { sl: 24, name: "SMITHA B", designation: "PRT", qualification: "MA, B.Ed, SET", experience: "23 Years" },
  { sl: 25, name: "JISHA M P", designation: "PRT", qualification: "MA, B.Ed, SET, KTET", experience: "12 Years" },
  { sl: 26, name: "THASNEENA O P", designation: "PRT", qualification: "BSc, B.Ed, MTTC", experience: "4 Years" },
  { sl: 27, name: "FASNA P K", designation: "PRT", qualification: "BA, B.Ed, CTTC", experience: "5 Years" },
  { sl: 28, name: "SHAMSUDHEEN K A", designation: "PGT", qualification: "MA, B.Ed-Arabic", experience: "8 Years" },
  { sl: 29, name: "KRISHNENDU K", designation: "TGT", qualification: "B.Sc, B.Ed-Maths", experience: "7 Years" },
  { i: 30, name: "SIJI V", designation: "PGT", qualification: "B.Ed", experience: "10 Years" },
  { sl: 31, name: "DHANYA P", designation: "PRT", qualification: "MA, B.Ed, KTET", experience: "10 Years" },
  { sl: 32, name: "NITHINA M", designation: "PRT", qualification: "B.Sc, B.Ed, KTET", experience: "4 Years" },
  { sl: 33, name: "RAMYA T P", designation: "PGT", qualification: "B.Sc, B.Ed, KTET", experience: "5 Years" },
  { sl: 34, name: "DIYA S", designation: "PGT", qualification: "MCA", experience: "8 Years" },
  { sl: 35, name: "UMMUSALMA M V", designation: "PRT", qualification: "MA, B.Ed, TTC, KTET", experience: "8 Years" },
  { sl: 36, name: "RESHMA M K", designation: "PRT", qualification: "BA, B.Ed-Hindi, MTTC", experience: "11 Years" },
  { sl: 37, name: "GRACY JOSEPH", designation: "PRT", qualification: "B.Com, MTTC, MMI", experience: "25 Years" },
  { sl: 38, name: "ANUSREE K", designation: "TGT", qualification: "BA, B.Ed, KTET", experience: "13 Years" },
  { sl: 39, name: "DHANYA V", designation: "PRT", qualification: "MA, B.Ed, KTET", experience: "7 Years" },
  { sl: 40, name: "SAJNA C R", designation: "PET", qualification: "BA, B.PEd", experience: "3 Years" },
  { sl: 41, name: "RINSHA FATHIMA P", designation: "TGT", qualification: "MA, B.Ed", experience: "1 Year" },
  { sl: 42, name: "FATHIMA THAFSEELA", designation: "COUNSELLOR", qualification: "MSc, Psychology", experience: "3 Months" },
  { sl: 43, name: "SARITHA K", designation: "PRT", qualification: "B.Sc, B.Ed, KTET", experience: "8 Years" },
  { sl: 44, name: "ANJALI KRISHNA R S", designation: "PRT", qualification: "MSc, B.Ed", experience: "1 Year" },
  { sl: 45, name: "RASHMI K", designation: "PRT", qualification: "BA, MuSc", experience: "18 Years" },
  { sl: 46, name: "SHAJI V K", designation: "PRT", qualification: "BA, B.Ed", experience: "8 Years" },
  { sl: 47, name: "DIVYA P K", designation: "PRT", qualification: "BA, B.Ed", experience: "4 Years" },
  { sl: 48, name: "ANUPAMA RAJAN", designation: "PGT", qualification: "MA, B.Ed, SET", experience: "7 Years" },
];

const getDesignationBadge = (designation: string) => {
  if (designation === "PRINCIPAL") return <span className="badge badge-accent shadow-sm">PRINCIPAL</span>;
  if (designation === "PGT" || designation === "TGT" || designation === "PRT") 
    return <span className="badge badge-primary shadow-sm">{designation}</span>;
  if (designation === "PET" || designation === "Librarian" || designation === "COUNSELLOR") 
    return <span className="badge badge-teal shadow-sm">{designation}</span>;
  return <span className="badge badge-primary shadow-sm">{designation}</span>;
};

export default function FacultyPage() {
  return (
    <main className="bg-slate-50/50 min-h-screen">
      {/* Hero */}
      <section className="page-hero !py-32">
        <div className="container-max text-center relative z-10">
          <p className="text-amber-400 font-bold tracking-widest text-xs uppercase mb-3">Vadi Husna Public School</p>
          <h1 className="heading-primary text-white !mb-4">Internal Faculty</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Meet the dedicated and experienced educators committed to excellence at Vadi Husna Public School.
          </p>
        </div>
      </section>

      <div className="container-max py-16 lg:py-24">
        
        {/* Excellence Note */}
        <div className="card-clean p-8 lg:p-12 mb-20 text-center border-t-4 border-amber-500 reveal reveal-up shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-0 opacity-40" />
          <p className="text-body max-w-4xl mx-auto font-medium text-slate-800 relative z-10">
            Success or failure of any education system depends upon the
            quality, commitment and enthusiasm of the teachers. By their
            strenuous efforts adopting a teaching method which is lively,
            informative, and attractive, our school scores{" "}
            <strong className="text-stone-900 border-b-2 border-amber-200 pb-0.5">100% pass results in CBSE Examinations</strong> every year.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24 reveal reveal-up">
          {[
            { label: "Total Faculty", val: "48", icon: Users },
            { label: "Max Experience", val: "25+", icon: Award },
            { label: "Pass Rate", val: "100%", icon: GraduationCap },
            { label: "Qualified Staff", val: "All", icon: User }
          ].map((stat, i) => (
            <div key={i} className="card-clean p-8 text-center group hover:bg-white transition-all duration-300 border-none shadow-sm hover:shadow-xl">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-amber-50 transition-all duration-500">
                <stat.icon className="text-slate-400 group-hover:text-amber-600 transition-colors" size={24} />
              </div>
              <span className="block text-4xl font-bold text-slate-900 mb-1 font-poppins">{stat.val}</span>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-none">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6 reveal reveal-up pb-8 border-b border-slate-200">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight font-poppins">Faculty Directory</h2>
            <p className="text-slate-500 text-sm font-medium mt-1">Academic Year 2024-25 • Primary & Secondary Staff</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-tighter bg-white px-3 py-1.5 rounded-full border border-slate-100"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Principal</span>
            <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-tighter bg-white px-3 py-1.5 rounded-full border border-slate-100"><span className="w-2 h-2 rounded-full bg-slate-900"></span> Academic</span>
            <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-tighter bg-white px-3 py-1.5 rounded-full border border-slate-100"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Support</span>
          </div>
        </div>

        {/* Teacher Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facultyData.map((faculty, i) => (
            <div
              key={faculty.sl}
              className="group card-clean p-6 flex flex-col h-full bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 hover:border-amber-200 reveal reveal-up"
              style={{ transitionDelay: `${(i % 4) * 50}ms` }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-amber-50 flex items-center justify-center text-slate-400 group-hover:text-amber-600 transition-colors duration-500 shadow-inner">
                  <User size={24} />
                </div>
                {getDesignationBadge(faculty.designation)}
              </div>

              <h3 className="font-bold text-slate-900 mb-4 font-poppins text-lg group-hover:text-amber-700 transition-colors leading-tight">
                {faculty.name}
              </h3>

              <div className="mt-auto space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-slate-50 rounded-md group-hover:bg-amber-50 transition-colors">
                      <GraduationCap size={14} className="text-slate-400 group-hover:text-amber-600" />
                    </div>
                    <span className="text-slate-600 text-[13px] leading-snug font-medium">{faculty.qualification}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-1 bg-slate-50 rounded-md group-hover:bg-amber-50 transition-colors">
                      <Clock size={14} className="text-slate-400 group-hover:text-amber-600" />
                    </div>
                    <span className="text-slate-900 text-[13px] font-bold">{faculty.experience} Experience</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Profile #0{faculty.sl}</span>
                  <ArrowUpRight size={16} className="text-amber-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
