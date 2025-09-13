export const metadata = {
  title: "About Us - Vadi Husna Public School",
  description: "Our History – Origin and Development",
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-max text-center">
          <h1 className="text-5xl font-bold mb-2">Our History</h1>
          <p className="text-xl max-w-3xl mx-auto">Origin and Development</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="space-y-6 text-body">
            <p>
              Staying rooted to the philosophical foundations of education and
              having objectives to strive for educational, social, cultural and
              economic advancement in and around Elettil a team of dedicated
              young men headed by Mr. K. Abdul Khadar, the founder General
              Secretary of Vadi Husna, established Vadi Husna Public School in
              1996 and affiliated to CBSE Delhi under No. 930618, where modern
              education blends with traditional instruction in an orchestral
              harmony .Ever since its inception the school has set itself a
              benchmark in academic excellence, integrity, social and moral
              responsibility so as to enable the pupils to face the world of
              stiff competitions and tough challenges.
            </p>
            <p>
              Since education is the continuous pursuit of excellence the motto
              of Vadi Husna is “Excellence through education”.
            </p>
            <p>
              The school is situated in a spacious campus blessed with
              comfortable scenic surroundings and easy accessibility from all
              sides of the area, within walking distance from Elettil town on
              Koduvally road. Having digitized all the classes, we focus on
              cyber space which will offer opportunities for extension of
              integrated learning, establishing relationships of
              interdisciplinary nature and designing new vistas of knowledge.
            </p>
            <p>
              Within a short span of time we have made the school as an
              institution of academic excellence where modern scientific
              education is imported with traditional instruction and the
              students are sufficiently trained in surviving any challenge they
              confront with.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
