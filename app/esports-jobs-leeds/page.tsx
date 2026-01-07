import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://esportsjobs.quest/esports-jobs-leeds",
      url: "https://esportsjobs.quest/esports-jobs-leeds",
      name: "Esports Jobs Leeds | Gaming Careers in Leeds",
      description: "Find esports jobs in Leeds. Gaming careers, esports roles, and video game industry opportunities in Leeds and Yorkshire.",
      isPartOf: { "@id": "https://esportsjobs.quest/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://esportsjobs.quest" },
        { "@type": "ListItem", position: 2, name: "UK Esports Jobs", item: "https://esportsjobs.quest/esports-jobs-uk" },
        { "@type": "ListItem", position: 3, name: "Leeds", item: "https://esportsjobs.quest/esports-jobs-leeds" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are there esports jobs in Leeds?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Leeds has an emerging esports and gaming scene. The city's growing tech sector and strong university presence create opportunities for gaming professionals. Leeds universities have active esports programmes, and the city hosts gaming events."
          }
        },
        {
          "@type": "Question",
          name: "What gaming companies are in Leeds?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Leeds has several game development studios and digital agencies with gaming clients. The city's tech hub includes companies working on gaming technology, esports platforms, and gaming-adjacent services. Rockstar North is nearby in Edinburgh."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Esports Jobs Leeds 🎮 Gaming Careers Yorkshire",
  description: "🚀 Find esports jobs in Leeds. Gaming careers, esports roles, and video game industry opportunities in Leeds and Yorkshire.",
  keywords: "esports jobs leeds, gaming jobs leeds, esports careers yorkshire, video game jobs leeds",
  alternates: { canonical: "https://esportsjobs.quest/esports-jobs-leeds" },
};

const roleTypes = [
  "Content Creator", "Community Manager", "Social Media Manager", "Video Editor",
  "Marketing Manager", "Game Developer", "QA Tester", "Esports Coach",
  "Streamer", "Event Coordinator", "Designer", "Data Analyst"
];

export default function EsportsJobsLeeds() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-transparent to-slate-900" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs-uk" className="hover:text-white">UK Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-green-400">Leeds</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esports Jobs Leeds:{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Gaming Careers in Yorkshire</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Find esports and gaming jobs in Leeds. Yorkshire&apos;s growing tech hub offers opportunities
              in gaming, esports content, and digital entertainment industries.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-jobs-uk" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                All UK Jobs
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Types of Esports Roles in Leeds</h2>
            <div className="flex flex-wrap gap-3">
              {roleTypes.map((role) => (
                <span key={role} className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Leeds Gaming Scene</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Why Leeds?</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Growing tech and digital sector</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Strong university esports programmes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Lower cost of living than London</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Active local gaming community</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Remote Opportunities</h3>
                <p className="text-slate-300 mb-4">
                  Many UK esports companies offer remote roles, allowing you to work for London-based
                  organisations while living in Leeds. Focus on building your skills and online presence.
                </p>
                <Link href="/esports-jobs-remote" className="text-green-400 hover:underline">
                  Browse remote esports jobs →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Explore More UK Esports Jobs</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/esports-jobs-london" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-white font-medium">London Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">UK&apos;s esports capital</p>
              </Link>
              <Link href="/esports-jobs-manchester" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
                <span className="text-white font-medium">Manchester Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">North West opportunities</p>
              </Link>
              <Link href="/esports-jobs-edinburgh" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                <span className="text-white font-medium">Edinburgh Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Scottish gaming careers</p>
              </Link>
              <Link href="/esports-jobs-remote" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-white font-medium">Remote Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Work from anywhere</p>
              </Link>
              <Link href="/entry-level-esports-jobs-uk" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-colors">
                <span className="text-white font-medium">Entry Level Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Start your esports career</p>
              </Link>
              <Link href="/esports-jobs-uk" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
                <span className="text-white font-medium">All UK Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Browse all UK opportunities</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-green-600/20 via-slate-900 to-emerald-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Leeds Esports Job</h2>
            <p className="text-slate-300 mb-8">Browse the latest esports and gaming opportunities.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Post a Job
              </Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
