// app/news/[slug]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Share2, PlayCircle, Clock } from "lucide-react";

interface NewsItem {
  title: string;
  date: string;
  description: string;
  youtubeUrl: string;
  image: string;
  category: string;
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
    category: "Campus Events",
    description: `
      Our grand Annual Day celebrations was a spectacular showcase of talent and institutional pride. Held on the 24th and 25th of January, the event brought together students, faculty, and parents for two days of unforgettable performances and cultural excellence.

      The program featured a diverse range of artistic expressions, from traditional dances to modern musical compositions, highlighting our students' growth in a holistic educational environment. The atmosphere was electric with vibrant student performances and heartwarming celebrations that truly embodied the spirit of the Vadi Husna community.
    `,
    youtubeUrl: "https://www.youtube.com/watch?v=dvonWgpaDLc&feature=youtu.be",
    image: "/annualday2025.png",
  },
};

// Required for static export
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
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center card-clean p-12 max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-slate-400 mb-8 leading-relaxed">
            The news article you're looking for appears to have moved or does not exist in our archives.
          </p>
          <Link
            href="/blog"
            className="btn-primary inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Back to Archive
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Cinematic Media Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden isolate">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950" />
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 -z-10 bg-slate-900">
          <Image
            src={newsItem.image}
            alt={newsItem.title}
            fill
            className="object-cover animate-ken-burns opacity-70"
            priority
          />
        </div>

        <div className="container-max relative z-20 px-4">
          <div className="max-w-4xl mx-auto text-center reveal reveal-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-500 text-xs font-bold tracking-widest uppercase mb-8 shadow-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              {newsItem.category}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight font-poppins leading-[1.1] drop-shadow-2xl">
              {newsItem.title}
            </h1>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-slate-300">
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
                <Calendar size={16} className="text-amber-500 font-bold" />
                <span className="text-sm font-bold tracking-wide uppercase">{newsItem.date}</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
                <Clock size={16} className="text-amber-500 font-bold" />
                <span className="text-sm font-bold tracking-wide uppercase">Institutional Archive</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="relative z-30 -mt-24 pb-24">
        <div className="container-max px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-clean p-8 lg:p-16 border-slate-800 shadow-3xl reveal reveal-up">
              
              {/* Media Spotlight (Video) */}
              {newsItem.youtubeUrl && (
                <div className="mb-16 group">
                  <div className="relative aspect-video rounded-[2rem] overflow-hidden border-2 border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-slate-900">
                    <iframe
                      src={getEmbedUrl(newsItem.youtubeUrl)}
                      title={newsItem.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest px-4">
                    <PlayCircle size={14} className="text-amber-500" />
                    Official Media Coverage
                  </div>
                </div>
              )}

              {/* Textual Content */}
              <div className="prose prose-invert prose-lg max-w-none">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-0.5 w-12 bg-amber-500"></div>
                  <h2 className="text-2xl font-bold text-white !mb-0 font-poppins uppercase tracking-tighter">Event Insight</h2>
                </div>
                
                <div className="text-slate-300 leading-relaxed space-y-8 font-medium text-lg lg:text-xl">
                  {newsItem.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="whitespace-pre-line first-letter:text-5xl first-letter:font-bold first-letter:text-amber-500 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>

              {/* Navigation Footer */}
              <div className="mt-20 pt-12 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-3 text-slate-400 font-bold uppercase tracking-widest text-xs hover:text-amber-500 transition-colors group"
                >
                  <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-2" />
                  Back to All Media
                </Link>

                <div className="flex items-center gap-4">
                   <button className="flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 transition-all text-xs font-bold tracking-widest uppercase">
                    <Share2 size={16} />
                    Integrity Share
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
