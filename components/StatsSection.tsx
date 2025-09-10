export default function StatsSection() {
  const stats = [
    {
      number: '28+',
      label: 'Years of Excellence',
      description: 'Serving the community since 1996'
    },
    {
      number: '513+',
      label: 'Students',
      description: 'Bright minds shaping the future'
    },
    {
      number: '33+',
      label: 'Qualified Teachers',
      description: 'Dedicated to student success'
    },
    {
      number: '23:1',
      label: 'Student-Teacher Ratio',
      description: 'Personalized attention'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="heading-secondary">Our Impact in Numbers</h2>
          <p className="text-body">Committed to educational excellence and student success</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}