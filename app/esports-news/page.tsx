import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";
import { newsArticles, newsCategories, formatDate } from "../../lib/news-data";

// Target keywords: "esports news", "esports industry news", "gaming news uk"
export const metadata: Metadata = {
  title: "Esports News UK | Industry Updates & Career News",
  description: "Latest esports news for UK professionals. Industry updates, tournament announcements, team roster changes, and career opportunities in the esports sector.",
  keywords: "esports news, esports industry news, gaming news uk, esports updates, esports careers news",
  openGraph: {
    title: "Esports News UK | Industry Updates & Career News",
    description: "Stay updated with the latest esports industry news relevant to UK professionals and job seekers.",
    type: "website",
    url: "https://mvp.actor/esports-news",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esports News UK",
    description: "Latest esports industry news for UK professionals.",
  },
  alternates: {
    canonical: "https://mvp.actor/esports-news",
  },
};

export default function EsportsNewsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Esports News UK",
    description: "Latest esports industry news for UK professionals and job seekers",
    url: "https://mvp.actor/esports-news",
    publisher: {
      "@type": "Organization",
      name: "EsportsJobs.quest",
      url: "https://mvp.actor",
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: newsArticles.length,
      itemListElement: newsArticles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "NewsArticle",
          headline: article.title,
          description: article.excerpt,
          datePublished: article.date,
          image: article.image,
          url: `https://mvp.actor/esports-news/${article.slug}`,
        },
      })),
    },
  };

  // Calculate category counts
  const categoryCounts = newsCategories.map((cat) => ({
    name: cat,
    count: cat === "All"
      ? newsArticles.length
      : newsArticles.filter((a) => a.category === cat).length,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Browse Jobs" ctaHref="/esports-jobs" />

      <main>
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-cyan-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-violet-400">Esports News</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Esports{" "}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Industry News
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Stay informed with the latest esports industry news relevant to UK professionals.
                From team announcements to career opportunities, we cover what matters for your
                esports career.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3">
              {categoryCounts.map((category) => (
                <button
                  key={category.name}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    category.name === "All"
                      ? "bg-violet-600 text-white"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href={`/esports-news/${newsArticles[0].slug}`}
              className="block bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-violet-500/50 transition-all group"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto">
                  <img
                    src={newsArticles[0].image}
                    alt={newsArticles[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs font-medium rounded-full">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-300 text-xs font-medium rounded-full">
                      {newsArticles[0].category}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-violet-400 transition-colors">
                    {newsArticles[0].title}
                  </h2>
                  <p className="text-slate-300 mb-6">
                    {newsArticles[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                    <span>{formatDate(newsArticles[0].date)}</span>
                    <span>|</span>
                    <span>{newsArticles[0].readTime}</span>
                    <span>|</span>
                    <span className="text-violet-400">
                      Source: {newsArticles[0].source}
                    </span>
                  </div>
                  <span className="inline-flex items-center text-violet-400 group-hover:text-violet-300 font-medium">
                    Read Full Article
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-12 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Latest News</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.slice(1).map((article) => (
                <Link
                  key={article.id}
                  href={`/esports-news/${article.slug}`}
                  className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-violet-500/50 transition-all group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs font-medium rounded">
                        {article.category}
                      </span>
                      <span className="text-xs text-slate-500">{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-violet-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">{formatDate(article.date)}</span>
                      <span className="text-violet-400 text-sm font-medium group-hover:text-violet-300">
                        Read More
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-violet-600/20 to-cyan-600/20 rounded-2xl p-8 md:p-12 border border-slate-700 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Get Esports Career News in Your Inbox
              </h2>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for weekly updates on esports job opportunities,
                industry news, and career advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-violet-500"
                />
                <button className="px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-500 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Career Resources</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link href="/esports-jobs" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Browse Jobs</h3>
                <p className="text-slate-400 text-sm">Find your next esports role.</p>
              </Link>
              <Link href="/esports-salary-guide-uk" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">UK Salary Guide</h3>
                <p className="text-slate-400 text-sm">Esports salary benchmarks.</p>
              </Link>
              <Link href="/how-to-get-into-esports" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">How to Get Into Esports</h3>
                <p className="text-slate-400 text-sm">Career entry guide.</p>
              </Link>
              <Link href="/top-esports-companies-uk" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Top UK Companies</h3>
                <p className="text-slate-400 text-sm">Who&apos;s hiring in esports.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* External News Sources */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-4">Trusted News Sources</h2>
            <p className="text-slate-400 mb-8">
              We aggregate and curate news from authoritative esports and gaming sources:
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://britishesports.org"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors"
              >
                British Esports Federation
              </a>
              <a
                href="https://esportsinsider.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Esports Insider
              </a>
              <a
                href="https://www.dexerto.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Dexerto
              </a>
              <a
                href="https://dotesports.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Dot Esports
              </a>
              <a
                href="https://www.thegamer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors"
              >
                TheGamer
              </a>
            </div>
          </div>
        </section>
      </main>

      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
