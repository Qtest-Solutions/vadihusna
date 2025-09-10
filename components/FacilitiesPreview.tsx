import Link from 'next/link';
import { BookOpen, FlaskConical, Computer, Dumbbell } from 'lucide-react';

export default function FacilitiesPreview() {
  const facilities = [
    {
      icon: BookOpen,
      title: 'Library & Reading Room',
      description: 'Extensive collection of books and digital resources for comprehensive learning',
      color: 'text-blue-600'
    },
    {
      icon: FlaskConical,
      title: 'Science Laboratories',
      description: 'Well-equipped Physics, Chemistry, and Biology labs for hands-on experiments',
      color: 'text-green-600'
    },
    {
      icon: Computer,
      title: 'Computer Lab',
      description: 'Modern computers with latest software for digital literacy and programming',
      color: 'text-purple-600'
    },
    {
      icon: Dumbbell,
      title: 'Sports Facilities',
      description: 'Spacious playground and sports equipment for physical development',
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="heading-secondary">World-Class Facilities</h2>
          <p className="text-body">
            Modern infrastructure designed to enhance learning and development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg card-hover text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4`}>
                  <IconComponent className={facility.color} size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600 text-sm">{facility.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <Link href="/facilities" className="btn-primary">
            Explore All Facilities
          </Link>
        </div>
      </div>
    </section>
  );
}