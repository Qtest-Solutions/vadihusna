import Link from 'next/link';
import { Download, Calendar, CheckCircle, Phone, Mail } from 'lucide-react';

export const metadata = {
  title: 'Admissions - Vadi Husna Public School',
  description: 'Apply for admission to VHPS. Get admission process, eligibility criteria, fees structure, and download application forms.',
};

export default function AdmissionsPage() {
  const admissionProcess = [
    {
      step: '01',
      title: 'Application Form',
      description: 'Download and fill the admission form or apply online'
    },
    {
      step: '02',
      title: 'Document Submission',
      description: 'Submit required documents and photographs'
    },
    {
      step: '03',
      title: 'Interaction/Test',
      description: 'Attend student interaction or entrance test if required'
    },
    {
      step: '04',
      title: 'Fee Payment',
      description: 'Pay admission fee upon selection confirmation'
    }
  ];

  const requiredDocuments = [
    'Birth Certificate (Original & Copy)',
    'Previous School Transfer Certificate',
    'Academic Records/Report Cards',
    'Passport Size Photographs (6 nos.)',
    'Address Proof',
    'Caste Certificate (if applicable)',
    'Medical Certificate',
    'Aadhar Card (Student & Parents)'
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container-max text-center">
          <h1 className="text-5xl font-bold mb-6">Admissions 2024-25</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Join our school family and embark on a journey of academic excellence, 
            character development, and holistic growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary bg-white text-blue-600 hover:bg-gray-50">
              <Download className="mr-2" size={20} />
              Download Application Form
            </button>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600">
              <Calendar className="mr-2" size={20} />
              Schedule Campus Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="heading-secondary text-center mb-12">Admission Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Requirements */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Eligibility */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Eligibility Criteria</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-3">LKG</h3>
                  <p className="text-gray-600">Minimum age: 3.5 years as on June 1st</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-3">UKG</h3>
                  <p className="text-gray-600">Minimum age: 4.5 years as on June 1st</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-3">Class I</h3>
                  <p className="text-gray-600">Minimum age: 5.5 years as on June 1st</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-3">Classes II-XII</h3>
                  <p className="text-gray-600">Previous class completion certificate required</p>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h2>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <ul className="space-y-3">
                  {requiredDocuments.map((doc, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fees Structure */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="heading-secondary text-center mb-12">Fees Structure</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Annual Fees (Approximate)</h3>
                <p>Affordable quality education for all</p>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Class X (Example)</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tuition Fee</span>
                        <span className="font-semibold">₹21,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Other Fees</span>
                        <span className="font-semibold">₹9,000</span>
                      </div>
                      <hr />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total Annual Fee</span>
                        <span className="text-blue-600">₹30,000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Fees vary by class and grade</li>
                      <li>• Payment plans available</li>
                      <li>• Scholarships for meritorious students</li>
                      <li>• Transport fees charged separately</li>
                      <li>• Books and uniform costs separate</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-yellow-50 rounded-lg">
                  <p className="text-yellow-800">
                    <strong>Note:</strong> Fees are subject to revision. Please contact the school office 
                    for current fees structure and payment schedules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Admission */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help with Admission?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our admission team is here to assist you throughout the process
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a href="tel:+919946100154" className="bg-white text-blue-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Phone className="mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p>+91-9946100154</p>
            </a>
            
            <a href="mailto:vhpseduc@gmail.com" className="bg-white text-blue-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Mail className="mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p>vhpseduc@gmail.com</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}