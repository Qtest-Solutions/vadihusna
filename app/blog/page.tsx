import Link from "next/link";

const newsData = [
  {
    slug: "annual-day-2025",
    title: "Annual Day Celebrated (24, 25 Jan)",
    date: "08-Feb-2025",
    image: "/annualday2025.png",
    description:
      "Our grand Annual Day was celebrated with vibrant performances, cultural events, and student participation on 24th & 25th January.",
  },
];

export default function NewsPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container-max text-center">
          <h1 className="heading-primary text-white">News & Updates</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            Stay informed about the latest events, achievements, and announcements from Vadi Husna Public School.
          </p>
        </div>
      </section>

      <section className="section-padding min-h-[50vh]">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <article
                key={news.slug}
                className="card-clean overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300 shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-stone-700 shadow-sm">
                    {news.date}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="heading-tertiary mb-3 group-hover:text-stone-600 transition-colors">
                    {news.title}
                  </h2>
                  <p className="text-sm text-stone-600 leading-relaxed mb-6 flex-grow">
                    {news.description}
                  </p>
                  <Link
                    href={`/blog/${news.slug}`}
                    className="link-accent mt-auto group-hover:translate-x-1 transition-transform"
                  >
                    Read Full Story →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {newsData.length === 0 && (
            <div className="text-center py-20">
              <p className="text-stone-500">No news articles available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
