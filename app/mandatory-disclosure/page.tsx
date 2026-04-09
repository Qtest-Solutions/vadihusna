import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mandatory Disclosure",
  description:
    "CBSE mandatory disclosure for VHPS including affiliation details, trust information, infrastructure, and academic details as per board regulations.",
};

export default function MandatoryDisclosurePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container-max text-center">
          <h1 className="heading-primary text-white">
            Mandatory Public Disclosure
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            As per CBSE regulations, complete transparency in school information
            and operations
          </p>
          <div className="mt-8">
            <a
              href="https://www.vadihusnaschool.com/web/content/1088?unique=4cb35bdc4e813d2f2b401f19306aaab76cf4239e"
              className="btn-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download PDF Version
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-stone-50">
        <div className="container-max">
          <div className="max-w-5xl mx-auto space-y-12">
            
            {/* Section A: General Information */}
            <div className="card-clean overflow-hidden">
              <div className="px-6 py-4 bg-stone-100 border-b border-stone-200">
                <h2 className="text-lg font-semibold text-stone-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-stone-200 flex items-center justify-center text-sm font-bold text-stone-600">A</span>
                  GENERAL INFORMATION
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="table-clean">
                  <thead>
                    <tr>
                      <th className="w-16">SL NO.</th>
                      <th className="w-1/3">INFORMATION</th>
                      <th>DETAILS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className="font-medium text-stone-900">NAME OF THE SCHOOL</td>
                      <td>Vadi Husna Public School, Elettil P O, Koduvally, Kozhikode (Dist), PIN: 673572</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td className="font-medium text-stone-900">AFFILIATION NO.</td>
                      <td>930618</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td className="font-medium text-stone-900">SCHOOL CODE</td>
                      <td>42137</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td className="font-medium text-stone-900">COMPLETE ADDRESS WITH PIN CODE</td>
                      <td>Elettil P O, Koduvally, Kozhikode (Dist), PIN: 673572</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td className="font-medium text-stone-900">PRINCIPAL NAME & QUALIFICATION</td>
                      <td>[To be updated]<br /><span className="text-stone-500 text-xs">-</span></td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td className="font-medium text-stone-900">SCHOOL EMAIL ID</td>
                      <p>vadihusnapublicschool@gmail.com</p>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td className="font-medium text-stone-900">CONTACT DETAILS</td>
                      <td>0495-2200154<br />+919946100154 / +919539777154</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section B: Documents and Information */}
            <div className="card-clean overflow-hidden">
              <div className="px-6 py-4 bg-stone-100 border-b border-stone-200">
                <h2 className="text-lg font-semibold text-stone-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-stone-200 flex items-center justify-center text-sm font-bold text-stone-600">B</span>
                  DOCUMENTS AND INFORMATION
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="table-clean">
                  <thead>
                    <tr>
                      <th className="w-16">SL NO.</th>
                      <th className="w-2/3">DOCUMENTS/INFORMATION</th>
                      <th>UPLOAD DOCUMENTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className="font-medium text-stone-900 text-xs leading-normal">COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY</td>
                      <td><a href="https://drive.google.com/file/d/17ginYCpB7HNXvMDPItbKr-H9SsYT_qZw/view" className="link-accent">View Document</a></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td className="font-medium text-stone-900 text-xs leading-normal">COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE</td>
                      <td><a href="https://drive.google.com/file/d/1iuvABAYNhc2vg8uVJX9lbt69N3waztD7/view" className="link-accent">View Document</a></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td className="font-medium text-stone-900 text-xs leading-normal">COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT</td>
                      <td><a href="https://drive.google.com/file/d/1ZtLZzSycJV9PE1IpEfzErmfdZxfgoVbi/view" className="link-accent">View Document</a></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td className="font-medium text-stone-900 text-xs leading-normal">COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT'S RENEWAL IF APPLICABLE</td>
                      <td><a href="https://drive.google.com/file/d/1ssiwiP4rpxf5Win0TguCbm4g8IHAQCCN/view" className="link-accent">View Document</a></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td className="font-medium text-stone-900 text-xs leading-normal">COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE</td>
                      <td><a href="https://drive.google.com/file/d/1-Xco7uOKlJz3PpnTyR_PFwM1l0d-H3s/view" className="link-accent">View Document</a></td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td className="font-medium text-stone-900 text-xs leading-normal">COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY</td>
                      <td><a href="https://drive.google.com/file/d/1KAQu0eCU9EgkaIsp_E0RM1oJJqapXPDf/view" className="link-accent">View Document</a></td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td className="font-medium text-stone-900 text-xs leading-normal">COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATIONOR SELF CERTIFICATION BY SCHOOL</td>
                      <td><a href="https://drive.google.com/file/d/1wFI6K_rKpC0CL82SZ-oMspdIPrQko9LN/view" className="link-accent">View Document</a></td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td className="font-medium text-stone-900 text-xs leading-normal">COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES</td>
                      <td><a href="https://drive.google.com/file/d/1uN8LDmB6gDOeKBHSi_miUzpQfOo6V2Wo/view" className="link-accent">View Document</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section C: Result and Academics */}
            <div className="card-clean overflow-hidden">
              <div className="px-6 py-4 bg-stone-100 border-b border-stone-200">
                <h2 className="text-lg font-semibold text-stone-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-stone-200 flex items-center justify-center text-sm font-bold text-stone-600">C</span>
                  RESULT AND ACADEMICS
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="table-clean mb-6">
                  <thead>
                    <tr>
                      <th className="w-16">SL NO.</th>
                      <th className="w-2/3">DOCUMENTS/INFORMATION</th>
                      <th>UPLOAD DOCUMENTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className="font-medium text-stone-900 text-xs">FEE STRUCTURE OF THE SCHOOL</td>
                      <td><a href="https://drive.google.com/file/d/12T3Mj1ab1nyZOT-SLaDewDBk3tL0DpA3/view" className="link-accent">View Document</a></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td className="font-medium text-stone-900 text-xs">ANNUAL ACADEMIC CALANDER</td>
                      <td><a href="https://drive.google.com/file/d/1RibLA3-WcMUsevtbYADCQ8icl9TMO5ss/view" className="link-accent">View Document</a></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td className="font-medium text-stone-900 text-xs">LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)</td>
                      <td><a href="https://drive.google.com/file/d/17Cb_bs_FUmQ0kTR1SjFxmwxJ53XJ8QHZ/view" className="link-accent">View Document</a></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td className="font-medium text-stone-900 text-xs">LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS</td>
                      <td><a href="https://drive.google.com/file/d/10ALl3l6dCnVXhVN7kzqxTBnyWKpaGDzf/view" className="link-accent">View Document</a></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td className="font-medium text-stone-900 text-xs">LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABLILITY</td>
                      <td><a href="https://drive.google.com/file/d/1ssiwiP4rpxf5Win0TguCbm4g8IHAQCCN/view" className="link-accent">View Document</a></td>
                    </tr>
                  </tbody>
                </table>
                
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  {/* Results Class X */}
                  <div className="border border-stone-200 rounded-lg overflow-hidden">
                    <div className="bg-stone-50 px-4 py-2 border-b border-stone-200">
                      <h3 className="text-sm font-bold text-stone-900">RESULT CLASS: X</h3>
                    </div>
                    <table className="table-clean text-center">
                      <thead>
                        <tr>
                          <th>YEAR</th>
                          <th>REGISTERED</th>
                          <th>PASSED</th>
                          <th>PERCENTAGE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>2022</td>
                          <td>33</td>
                          <td>33</td>
                          <td className="text-[var(--c-cta)] font-semibold">100%</td>
                        </tr>
                        <tr>
                          <td>2023</td>
                          <td>34</td>
                          <td>34</td>
                          <td className="text-[var(--c-cta)] font-semibold">100%</td>
                        </tr>
                        <tr>
                          <td>2024</td>
                          <td>8</td>
                          <td>8</td>
                          <td className="text-[var(--c-cta)] font-semibold">100%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Results Class XII */}
                  <div className="border border-stone-200 rounded-lg overflow-hidden">
                    <div className="bg-stone-50 px-4 py-2 border-b border-stone-200">
                      <h3 className="text-sm font-bold text-stone-900">RESULT CLASS: XII</h3>
                    </div>
                    <table className="table-clean text-center">
                      <thead>
                        <tr>
                          <th>YEAR</th>
                          <th>REGISTERED</th>
                          <th>PASSED</th>
                          <th>PERCENTAGE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>2022</td>
                          <td>19</td>
                          <td>19</td>
                          <td className="text-[var(--c-cta)] font-semibold">100%</td>
                        </tr>
                        <tr>
                          <td>2023</td>
                          <td>17</td>
                          <td>17</td>
                          <td className="text-[var(--c-cta)] font-semibold">100%</td>
                        </tr>
                        <tr>
                          <td>2024</td>
                          <td>28</td>
                          <td>28</td>
                          <td className="text-[var(--c-cta)] font-semibold">100%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Section D: Staff (Teaching) */}
            <div className="card-clean overflow-hidden">
              <div className="px-6 py-4 bg-stone-100 border-b border-stone-200">
                <h2 className="text-lg font-semibold text-stone-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-stone-200 flex items-center justify-center text-sm font-bold text-stone-600">D</span>
                  STAFF (TEACHING)
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="table-clean">
                  <thead>
                    <tr>
                      <th className="w-16">SL NO.</th>
                      <th className="w-1/3">INFORMATION</th>
                      <th>DETAILS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className="font-medium text-stone-900">PRINCIPAL</td>
                      <td>[To be updated]<br /><span className="text-stone-500 text-xs">-</span></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td className="font-medium text-stone-900">TOTAL NO. OF TEACHERS</td>
                      <td>
                        <span className="font-semibold text-stone-900">45 Total Teachers</span>
                        <div className="flex gap-4 mt-2 text-xs">
                          <span className="px-2 py-1 bg-stone-100 rounded">PGT: 7</span>
                          <span className="px-2 py-1 bg-stone-100 rounded">TGT: 11</span>
                          <span className="px-2 py-1 bg-stone-100 rounded">PRT: 27</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td className="font-medium text-stone-900">TEACHERS SECTION RATIO</td>
                      <td>1:1:5</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td className="font-medium text-stone-900">DETAILS OF COUNSELLOR AND WELLNESS TEACHER</td>
                      <td className="text-sm">
                        <ul className="space-y-1">
                          <li>1. Mrs. FATHIMATH THAFSEELA - MSc. Psychology</li>
                          <li>2. Mrs. NASMILA MARIYAM - MSc. Psychology</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section E: School Infrastructure */}
             <div className="card-clean overflow-hidden">
              <div className="px-6 py-4 bg-stone-100 border-b border-stone-200">
                <h2 className="text-lg font-semibold text-stone-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-stone-200 flex items-center justify-center text-sm font-bold text-stone-600">E</span>
                  SCHOOL INFRASTRUCTURE
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="table-clean">
                  <thead>
                    <tr>
                      <th className="w-16">SL NO.</th>
                      <th className="w-1/2">INFORMATION</th>
                      <th>DETAILS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className="font-medium text-stone-900">TOTAL CAMPUS AREA (SQ MTR)</td>
                      <td>9510 sq mtr<br /><span className="text-xs text-stone-500">Playground Area: 12700 sq mtr</span></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td className="font-medium text-stone-900">NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR)</td>
                      <td className="text-sm">
                        <span className="font-semibold text-stone-900 block mb-1">Total Class Rooms: 44</span>
                        <ul className="space-y-0.5 text-stone-600 text-xs">
                          <li>• Small-sized: 4</li>
                          <li>• Medium-sized: 29</li>
                          <li>• Large-sized: 11</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td className="font-medium text-stone-900">NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)</td>
                      <td className="text-sm">
                        Total Labs: 6<br />Computer Lab: YES (34 PCs)
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td className="font-medium text-stone-900">INTERNET FACILITY (Y/N)</td>
                      <td>YES (Wi-Fi Enabled)</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td className="font-medium text-stone-900">NO. OF GIRLS & BOYS TOILETS</td>
                      <td>10 Girls, 10 Boys</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td className="font-medium text-stone-900">ADDITIONAL FACILITIES</td>
                      <td className="text-sm text-stone-600">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                          <span>• Playgrounds: 1</span>
                          <span>• Libraries: 6</span>
                          <span>• Canteens (Student/Staff): 2</span>
                          <span>• Water Purifiers: 5</span>
                          <span>• Auditoriums: 1</span>
                          <span>• Digital Classrooms: 20</span>
                          <span>• Sports/Dance/Music: YES</span>
                          <span>• Security Guards/Wall: YES</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
