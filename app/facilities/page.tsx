import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus Facilities",
  description: "Discover the state-of-the-art infrastructure at Vadi Husna Public School. From science labs and computer facilities to our massive auditorium and school mess.",
};

export default function FacilitiesPage() {

  const facilities = [
    {
      title: "Library & Reading Room",
      desc: "Comprehensive collection of books, journals, and digital resources."
    },
    {
      title: "Science Laboratories",
      desc: "Fully equipped Physics, Chemistry, and Biology labs for practical learning."
    },
    {
      title: "Computer Lab",
      desc: "Modern computing facility with high-speed internet and latest software."
    },
    {
      title: "Sports Facilities",
      desc: "Expansive playgrounds and equipment for holistic physical development."
    },
    {
      title: "Auditorium",
      desc: "A spacious venue with a capacity of 800 students for events and gatherings."
    },
    {
      title: "School Mess",
      desc: "Dedicated catering facility providing nutritious meals for staff and students."
    },
    {
      title: "Transport Facility",
      desc: "Safe and reliable bus service covering all major routes with distance-based fares."
    },
  ];

  return (
    <div>
      <section className="page-hero">
        <div className="container-max text-center">
          <h1 className="heading-primary text-white">Our Facilities</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            State-of-the-art infrastructure designed to foster academic excellence and personal growth.
          </p>
        </div>
      </section>

      <section className="section-padding bg-stone-50 min-h-[50vh]">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((f, i) => (
              <div key={i} className="card-clean p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 shadow-sm border-t-2" style={{ borderTopColor: 'var(--c-primary)' }}>
                <div>
                  <h3 className="heading-tertiary mb-3 leading-snug">{f.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed mb-4">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
