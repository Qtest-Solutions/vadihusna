import { Users, Calendar, Award, MapPin } from 'lucide-react';

export const metadata = {
  title: 'About Us - Vadi Husna Public School',
  description: 'Learn about VHPS history, mission, vision, and management. CBSE affiliated school serving Kozhikode since 1996.',
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-max text-center">
          <h1 className="text-5xl font-bold mb-6">About Vadi Husna Public School</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A legacy of educational excellence, character building, and holistic development 
            serving the Kozhikode community since 1996.
          </p>
        </div>
      </section>

      {/* History & Foundation */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-secondary">Our Foundation</h2>
              <p className="text-body mb-6">
                Vadi Husna Public School was established in 1996 under the management of 
                Vadi Husna Educational & Charitable Association, which was registered in 1999. 
                Our school received CBSE affiliation (No. 930618) in 2006, marking a significant 
                milestone in our journey of educational excellence.
              </p>
              <p className="text-body mb-8">
                Under the visionary leadership of our President, Sayid Rasheedali Shihab Thangal, 
                who is also the Chairman of Kerala State Waqaf Board, we have grown from a small 
                institution to a respected educational center serving over 500 students.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-blue-600" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">Founded</div>
                    <div className="text-gray-600">1996</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="text-green-600" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">CBSE Affiliation</div>
                    <div className="text-gray-600">2006</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg"
                alt="School History"
                className="rounded-xl w-full h-96 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Our Mission & Vision</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide holistic education that nurtures creativity, instills strong moral 
                values, and promotes academic excellence while building character. We strive 
                to create an environment where every student can discover their potential and 
                develop into responsible, compassionate citizens.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be a leading educational institution that shapes future leaders with strong 
                academic foundation, ethical values, and innovative thinking. We envision our 
                graduates contributing meaningfully to society while achieving personal and 
                professional success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="heading-secondary text-center mb-12">Management & Leadership</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Vadi Husna Educational & Charitable Association
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Registered in 1999, our managing association has been committed to 
                    providing quality education and serving the community through various 
                    charitable initiatives.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">President</h4>
                      <p className="text-gray-600">Sayid Rasheedali Shihab Thangal</p>
                      <p className="text-sm text-blue-600">Chairman, Kerala State Waqaf Board</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900">Registration</h4>
                      <p className="text-gray-600">1999</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900">Location</h4>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} className="text-blue-600" />
                        <p className="text-gray-600">Elettil P.O., Koduvally Road, Kozhikode</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="text-white" size={48} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Leadership</h4>
                    <p className="text-gray-600">Committed to Educational Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="heading-secondary text-center mb-12">Key Facts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">930618</div>
              <div className="text-gray-900 font-semibold">CBSE Affiliation No.</div>
              <div className="text-gray-600 text-sm">Valid from 2006</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">LKG-XII</div>
              <div className="text-gray-900 font-semibold">Classes Offered</div>
              <div className="text-gray-600 text-sm">Complete Education</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">English</div>
              <div className="text-gray-900 font-semibold">Medium of Instruction</div>
              <div className="text-gray-600 text-sm">Global Standards</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">PCM & PCB</div>
              <div className="text-gray-900 font-semibold">Senior Secondary</div>
              <div className="text-gray-600 text-sm">Career Streams</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}