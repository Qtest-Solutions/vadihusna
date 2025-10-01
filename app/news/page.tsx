import Link from "next/link";

const newsData = [
  {
    slug: "annual-day-2025",
    title: "Annual Day Celebrated (24, 25 Jan)",
    date: "08-Feb-2025",
    image: "/annualday2025.png", // use your actual image
    description:
      "Our grand Annual Day was celebrated with vibrant performances, cultural events, and student participation on 24th & 25th January.",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          News & Updates
        </h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {newsData.map((news) => (
            <article
              key={news.slug}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {news.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{news.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{news.date}</span>
                  <Link
                    href={`/news/${news.slug}`}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
