import Link from "next/link";

export default function AcademicsPage() {
  const sections = [
    {
      href: "/academics/curriculum",
      label: "Curriculum",
      desc: "CBSE-aligned syllabus across grades.",
    },
    {
      href: "/academics/faculty",
      label: "Faculty",
      desc: "Experienced and dedicated teachers.",
    },
    {
      href: "/academics/examination",
      label: "Examination",
      desc: "Assessment methods and student performance.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-max">
        <h1 className="heading-secondary mb-4">Academics</h1>
        <p className="text-body mb-8">
          Explore our academic programs, meet our faculty, and see our
          achievements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="bg-white rounded-xl p-6 shadow-lg card-hover block"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {s.label}
              </h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
