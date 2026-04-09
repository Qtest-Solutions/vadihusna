import Link from 'next/link';
import { Download, Calendar, CheckCircle, Phone, Mail } from 'lucide-react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admissions 2024-25',
  description: 'Apply for admission at Vadi Husna Public School for the academic year 2024-25. Find information on the admission process, eligibility criteria, required documents, and fee structure.',
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
    <div>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container-max text-center">
          <h1 className="heading-primary text-white">Admissions 2024-25</h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto mb-8">
            Join our school family and embark on a journey of academic excellence, 
            character development, and holistic growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-cta text-white" style={{ backgroundColor: 'var(--c-cta)' }}>
              <Download className="mr-2" size={18} />
              Download Application Form
            </button>
            <Link href="/contactus" className="btn-outline text-white border-white/20 hover:bg-white/10 hover:text-white">
              <Calendar className="mr-2" size={18} />
              Schedule Campus Visit
            </Link>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 text-white text-xs font-bold uppercase tracking-widest mt-4 sm:mt-0">
              Registration opens in January
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label">How to Apply</p>
            <h2 className="heading-secondary">Admission Process</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div 
                  className="rounded-full w-14 h-14 flex items-center justify-center text-lg font-bold mx-auto mb-4 text-white"
                  style={{ backgroundColor: 'var(--c-primary)' }}
                >
                  {process.step}
                </div>
                <h3 className="heading-tertiary mb-2">{process.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Requirements */}
      <section className="section-padding bg-stone-50 border-y border-stone-200">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Eligibility */}
            <div>
              <p className="section-label">Guidelines</p>
              <h2 className="text-2xl font-semibold text-stone-900 mb-6 font-poppins">Eligibility Criteria</h2>
              
              <div className="space-y-4">
                <div className="card-clean p-5">
                  <h3 className="font-semibold text-stone-900 mb-1">LKG</h3>
                  <p className="text-sm text-stone-600">Minimum age: 3.5 years as on June 1st</p>
                </div>
                
                <div className="card-clean p-5">
                  <h3 className="font-semibold text-stone-900 mb-1">UKG</h3>
                  <p className="text-sm text-stone-600">Minimum age: 4.5 years as on June 1st</p>
                </div>
                
                <div className="card-clean p-5">
                  <h3 className="font-semibold text-stone-900 mb-1">Class I</h3>
                  <p className="text-sm text-stone-600">Minimum age: 5.5 years as on June 1st</p>
                </div>
                
                <div className="card-clean p-5">
                  <h3 className="font-semibold text-stone-900 mb-1">Classes II-XII</h3>
                  <p className="text-sm text-stone-600">Previous class completion certificate required</p>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div>
              <p className="section-label">Checklist</p>
              <h2 className="text-2xl font-semibold text-stone-900 mb-6 font-poppins">Required Documents</h2>
              
              <div className="card-clean p-6 lg:p-8">
                <ul className="space-y-4">
                  {requiredDocuments.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3 border-b border-stone-100 pb-3 last:border-0 last:pb-0">
                      <CheckCircle className="mt-0.5 flex-shrink-0" style={{ color: 'var(--c-cta)' }} size={16} />
                      <span className="text-sm text-stone-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fees Structure */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label">Investment in Education</p>
            <h2 className="heading-secondary">Fees Structure</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="card-clean overflow-hidden">
              <div className="p-6 text-white text-center" style={{ backgroundColor: 'var(--c-primary)' }}>
                <h3 className="text-2xl font-bold mb-1">Annual Fees (Approximate)</h3>
                <p className="text-stone-300 text-sm">Affordable quality education for all</p>
              </div>
              
              <div className="p-6 lg:p-10 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-lg font-semibold text-stone-900 mb-5 pb-2 border-b">Class X (Example)</h4>
                    <div className="space-y-4 text-sm">
                      <div className="flex justify-between items-center text-stone-600">
                        <span>Tuition Fee</span>
                        <span className="font-semibold text-stone-900">₹21,000</span>
                      </div>
                      <div className="flex justify-between items-center text-stone-600">
                        <span>Other Fees</span>
                        <span className="font-semibold text-stone-900">₹9,000</span>
                      </div>
                      <div className="h-px bg-stone-200 my-2"></div>
                      <div className="flex justify-between items-center text-base font-bold text-stone-900">
                        <span>Total Annual Fee</span>
                        <span style={{ color: 'var(--c-primary)' }}>₹30,000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-stone-900 mb-5 pb-2 border-b">Additional Information</h4>
                    <ul className="space-y-3 text-sm text-stone-600">
                      <li className="flex items-start gap-2"><span className="text-stone-400">•</span> Fees vary by class and grade</li>
                      <li className="flex items-start gap-2"><span className="text-stone-400">•</span> Payment plans available</li>
                      <li className="flex items-start gap-2"><span className="text-stone-400">•</span> Scholarships for meritorious students</li>
                      <li className="flex items-start gap-2"><span className="text-stone-400">•</span> Transport fees charged separately</li>
                      <li className="flex items-start gap-2"><span className="text-stone-400">•</span> Books and uniform costs separate</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 p-4 rounded-lg bg-orange-50 border border-orange-100 flex items-start gap-3">
                  <div className="text-orange-500 font-bold mt-0.5 animate-pulse">!</div>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    <strong className="text-stone-900">Note:</strong> Fees are subject to revision. Please contact the school office 
                    for current fees structure and payment schedules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Admission */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: 'var(--c-primary)' }}>
        <div className="container-max text-center">
          <h2 className="text-3xl font-semibold mb-4 text-white font-poppins">Need Help with Admission?</h2>
          <p className="text-lg text-stone-300 mb-10 max-w-xl mx-auto">
            Our admission team is here to assist you throughout the process.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a href="tel:+919946100154" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-stone-50 group-hover:bg-stone-100 transition-colors">
                <Phone style={{ color: 'var(--c-primary)' }} size={20} />
              </div>
              <h3 className="font-semibold text-stone-900 mb-1">Call Us</h3>
              <p className="text-sm font-medium" style={{ color: 'var(--c-cta)' }}>+91-9946100154</p>
            </a>
            
            <a href="mailto:vadihusnapublicschool@gmail.com" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-stone-50 group-hover:bg-stone-100 transition-colors">
                <Mail style={{ color: 'var(--c-primary)' }} size={20} />
              </div>
              <h3 className="font-semibold text-stone-900 mb-1">Email Us</h3>
              <p className="text-sm font-medium" style={{ color: 'var(--c-cta)' }}>vadihusnapublicschool@gmail.com</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}