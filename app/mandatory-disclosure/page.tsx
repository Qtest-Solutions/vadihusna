export const metadata = {
  title: 'Mandatory Disclosure - Vadi Husna Public School',
  description: 'CBSE mandatory disclosure for VHPS including affiliation details, trust information, infrastructure, and academic details.',
};

export default function MandatoryDisclosurePage() {
  const disclosureData = {
    schoolInfo: {
      name: "Vadi Husna Public School",
      affiliation: "930618",
      affiliationDate: "2006",
      societyTrust: "Vadi Husna Educational & Charitable Association",
      registrationDate: "1999",
      address: "Elettil P.O., Koduvally Road, Kozhikode, Kerala - 673572",
      phone: "+91-9946100154, +91-9539777154, 0495-2200154",
      email: "vhpseduc@gmail.com",
      website: "https://www.vadihusnaschool.com"
    },
    management: {
      president: "Sayid Rasheedali Shihab Thangal",
      designation: "Chairman, Kerala State Waqaf Board"
    },
    infrastructure: {
      landArea: "Spacious campus near Elettil town",
      buildingArea: "Multi-story academic building",
      playgroundArea: "Large playground with sports facilities",
      totalClassrooms: "30+",
      otherRooms: "Science labs, Computer lab, Library, Auditorium, Music room, Art room",
      libraryBooks: "5000+ books and digital resources"
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container-max text-center">
          <h1 className="text-5xl font-bold mb-6">Mandatory Disclosure</h1>
          <p className="text-xl max-w-3xl mx-auto">
            As per CBSE regulations, complete transparency in school information and operations
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            {/* General Information */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="bg-blue-600 text-white p-6">
                <h2 className="text-2xl font-bold">1. General Information</h2>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">School Name</h3>
                      <p className="text-gray-600">{disclosureData.schoolInfo.name}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">CBSE Affiliation No.</h3>
                      <p className="text-gray-600">{disclosureData.schoolInfo.affiliation}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Affiliation Date</h3>
                      <p className="text-gray-600">{disclosureData.schoolInfo.affiliationDate}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">{disclosureData.schoolInfo.address}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">{disclosureData.schoolInfo.phone}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">{disclosureData.schoolInfo.email}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Website</h3>
                      <p className="text-gray-600">{disclosureData.schoolInfo.website}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Society/Trust Information */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="bg-green-600 text-white p-6">
                <h2 className="text-2xl font-bold">2. Society/Trust Information</h2>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">Name of Society/Trust</h3>
                      <p className="text-gray-600">{disclosureData.schoolInfo.societyTrust}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Registration Date</h3>
                      <p className="text-gray-600">{disclosureData.schoolInfo.registrationDate}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">President</h3>
                      <p className="text-gray-600">{disclosureData.management.president}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Designation</h3>
                      <p className="text-gray-600">{disclosureData.management.designation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="bg-purple-600 text-white p-6">
                <h2 className="text-2xl font-bold">3. Academic Information</h2>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Classes Offered</h3>
                    <p className="text-gray-600">LKG to XII</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Medium of Instruction</h3>
                    <p className="text-gray-600">English</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Senior Secondary Streams</h3>
                    <p className="text-gray-600">Science (PCM & PCB)</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Total Students</h3>
                    <p className="text-gray-600">513+ Students</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Total Teachers</h3>
                    <p className="text-gray-600">33+ Teachers</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Student-Teacher Ratio</h3>
                    <p className="text-gray-600">23:1</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Infrastructure Details */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="bg-orange-600 text-white p-6">
                <h2 className="text-2xl font-bold">4. Infrastructure Details</h2>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900">Campus</h3>
                      <p className="text-gray-600">{disclosureData.infrastructure.landArea}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Building</h3>
                      <p className="text-gray-600">{disclosureData.infrastructure.buildingArea}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Playground</h3>
                      <p className="text-gray-600">{disclosureData.infrastructure.playgroundArea}</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900">Total Classrooms</h3>
                      <p className="text-gray-600">{disclosureData.infrastructure.totalClassrooms}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Special Rooms</h3>
                      <p className="text-gray-600">{disclosureData.infrastructure.otherRooms}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Library Collection</h3>
                      <p className="text-gray-600">{disclosureData.infrastructure.libraryBooks}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-red-600 text-white p-6">
                <h2 className="text-2xl font-bold">5. Additional Information</h2>
              </div>
              <div className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Facilities Available</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <ul className="space-y-2 text-gray-600">
                        <li>• Science Laboratories</li>
                        <li>• Computer Lab</li>
                        <li>• Library</li>
                        <li>• Auditorium</li>
                      </ul>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Music Room</li>
                        <li>• Art & Craft Room</li>
                        <li>• Sports Facilities</li>
                        <li>• Canteen</li>
                      </ul>
                      <ul className="space-y-2 text-gray-600">
                        <li>• First Aid Room</li>
                        <li>• Transport Service</li>
                        <li>• Security System</li>
                        <li>• Power Backup</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Important Note</h3>
                    <p className="text-gray-700">
                      This disclosure is prepared as per CBSE guidelines. The affiliation is provisional 
                      and is subject to renewal. Parents are advised to verify the current status of 
                      affiliation before admission. For the most current information, please contact 
                      the school directly or visit the CBSE website.
                    </p>
                  </div>

                  <div className="text-center pt-6">
                    <p className="text-gray-600">
                      Last updated: January 2024<br />
                      For queries, contact: vhpseduc@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}