import { Quote, User } from "lucide-react";

export default function MessagesSection() {
  const messages = [
    {
      role: "Chairman",
      name: "Mr. K. Abdul Khadar",
      text: "Our vision is to provide excellence through holistic education. We stay rooted to the philosophical foundations of education while striving for educational, social, cultural, and economic advancement. At Vadi Husna, we blend modern scientific education with traditional instruction in perfect harmony.",
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-max">
        <div className="text-center mb-16 reveal reveal-up">
          <p className="section-label text-amber-600 mb-2 tracking-widest text-sm font-bold uppercase">Leadership Voice</p>
          <h2 className="heading-secondary text-slate-900 font-bold">Message from our Chairman</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-50 rounded-3xl p-8 lg:p-12 hover:shadow-2xl transition-all duration-500 reveal reveal-up"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={80} className="text-slate-900" />
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center gap-6 mb-8">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shadow-sm border-2 border-white">
                    <User size={32} />
                  </div>
                  <div>
                    <p className="text-amber-600 font-bold text-sm tracking-widest uppercase mb-1">{message.role}</p>
                    <h3 className="text-3xl font-bold text-slate-900 font-poppins">{message.name}</h3>
                  </div>
                </div>
                
                <p className="text-slate-600 text-xl leading-relaxed italic font-medium text-center">
                  "{message.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
