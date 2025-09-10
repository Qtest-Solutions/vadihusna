import Link from 'next/link';
import { Target, Heart, Trophy } from 'lucide-react';

export default function AboutPreview() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="heading-secondary">About Vadi Husna Public School</h2>
            <p className="text-body mb-8">
              Established in 1996 under the Vadi Husna Educational & Charitable Association, 
              we are a CBSE affiliated institution committed to providing quality education 
              that nurtures both academic excellence and character development.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <Target className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To provide holistic education that fosters creativity, moral values, 
                    and academic excellence while building strong character.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Heart className="text-green-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Values</h3>
                  <p className="text-gray-600">
                    We believe in nurturing compassionate, responsible citizens who contribute 
                    positively to society while achieving academic success.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Trophy className="text-orange-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Achievement</h3>
                  <p className="text-gray-600">
                    CBSE affiliation since 2006, serving over 500 students with a team of 
                    dedicated qualified teachers and modern facilities.
                  </p>
                </div>
              </div>
            </div>
            
            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
          
          {/* Image */}
          <div>
            <img
              src="https://images.pexels.com/photos/8197543/pexels-photo-8197543.jpeg"
              alt="School building"
              className="rounded-xl w-full h-96 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}