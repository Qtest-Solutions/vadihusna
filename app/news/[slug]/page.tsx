// app/news/[slug]/page.tsx
import Link from "next/link";

interface NewsItem {
  title: string;
  date: string;
  description: string;
  youtubeUrl: string;
  image: string;
}

interface NewsDetailPageProps {
  params: {
    slug: string;
  };
}

const newsDetails: Record<string, NewsItem> = {
  "annual-day-2025": {
    title: "Annual Day Celebrated (24, 25 Jan)",
    date: "08-Feb-2025",
    description: `
      The grand Annual Day 2025 was held on 24th & 25th January 
      with cultural programs, student performances, and vibrant celebrations.
    `,
    youtubeUrl: "https://www.youtube.com/watch?v=dvonWgpaDLc&feature=youtu.be",
    image: "/annualday2025.png",
  },
};

// ✅ Required for static export
export async function generateStaticParams() {
  return Object.keys(newsDetails).map((slug) => ({ slug }));
}

// Convert YouTube watch URL to embed URL
function getEmbedUrl(url: string) {
  const videoId = url.split("v=")[1]?.split("&")[0];
  return `https://www.youtube.com/embed/${videoId}`;
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const newsItem = newsDetails[params.slug];

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            News Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The news article you're looking for doesn't exist.
          </p>
          <Link
            href="/news"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {newsItem.title}
            </h1>
            <div className="flex items-center gap-4 text-blue-100">
              <span className="bg-blue-500/30 px-3 py-1 rounded-full text-sm">
                {newsItem.date}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          {/* Video Embed */}
          <div className="mb-8">
            <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={getEmbedUrl(newsItem.youtubeUrl)}
                title={newsItem.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                About This Event
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {newsItem.description.trim()}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <Link
                href="/news"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to News
              </Link>

              <div className="flex gap-4">
                {/* Remove the share button for static export, or make it a client component */}
                {/* <div className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Share
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
