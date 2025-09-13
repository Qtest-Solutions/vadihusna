export default function FacilitiesPage() {
  const facilities = [
    "Library & Reading Room",
    "Science Laboratories",
    "Computer Lab",
    "Sports Facilities",
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <h1 className="heading-secondary mb-6">Facilities</h1>
        <p className="text-body mb-8">An overview of our campus facilities.</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {facilities.map((f) => (
            <li key={f} className="bg-white rounded-xl p-6 shadow">
              {f}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
