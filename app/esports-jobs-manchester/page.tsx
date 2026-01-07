import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://esportsjobs.quest/esports-jobs-manchester",
      url: "https://esportsjobs.quest/esports-jobs-manchester",
      name: "Esports Jobs Manchester | Gaming Careers in Manchester",
      description: "Find esports jobs in Manchester. Gaming careers, esports roles, and video game industry opportunities in the Manchester area.",
      isPartOf: { "@id": "https://esportsjobs.quest/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://esportsjobs.quest" },
        { "@type": "ListItem", position: 2, name: "UK Esports Jobs", item: "https://esportsjobs.quest/esports-jobs-uk" },
        { "@type": "ListItem", position: 3, name: "Manchester", item: "https://esportsjobs.quest/esports-jobs-manchester" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are there esports jobs in Manchester?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Manchester has a growing esports and gaming scene. The city hosts gaming events, has game development studios, and companies seeking esports professionals. While London remains the UK esports hub, Manchester offers opportunities in content creation, event management, and gaming industry roles."
          }
        },
        {
          "@type": "Question",
          name: "What esports companies are based in Manchester?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Manchester is home to various gaming and tech companies. The city has a strong digital sector with opportunities at game studios, esports event organisers, and gaming-adjacent businesses. Universities in Manchester also run esports programmes creating education-related roles."
          }
        },
        {
          "@type": "Question",
          name: "What types of esports jobs are available in Manchester?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Manchester offers esports roles including content creation, event management, community management, gaming journalism, streaming, game development, and marketing positions. Many roles also offer remote or hybrid working arrangements."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Esports Jobs Manchester 🎮 Gaming Careers Manchester",
  description: "🚀 Find esports jobs in Manchester. Gaming careers, esports roles, and video game industry opportunities in Manchester and the North West.",
  keywords: "esports jobs manchester, gaming jobs manchester, esports careers manchester, video game jobs manchester",
  alternates: { canonical: "https://esportsjobs.quest/esports-jobs-manchester" },
};

const roleTypes = [
  "Content Creator", "Event Manager", "Community Manager", "Streamer",
  "Social Media Manager", "Video Editor", "Esports Coach", "Marketing Manager",
  "Game Developer", "QA Tester", "Broadcast Producer", "Journalist"
];

export default function EsportsJobsManchester() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-slate-900" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs-uk" className="hover:text-white">UK Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-red-400">Manchester</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esports Jobs Manchester:{" "}
              <span className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">Gaming Careers in the North</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Find esports and gaming jobs in Manchester. The city&apos;s thriving digital sector and growing
              gaming community create opportunities for esports professionals across content, events, and gaming roles.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold rounded-xl">
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
            <h2 className="text-3xl font-bold text-white mb-8">Types of Esports Roles in Manchester</h2>
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
            <h2 className="text-3xl font-bold text-white mb-8">Manchester&apos;s Gaming Scene</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Why Manchester?</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Growing digital and tech sector</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Lower cost of living than London</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Strong university esports programmes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Active gaming community and events</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Getting Started</h3>
                <p className="text-slate-300 mb-4">
                  Many esports roles now offer remote or hybrid working, meaning you can work for UK-wide
                  companies while based in Manchester. Focus on building your portfolio and networking
                  in the local gaming community.
                </p>
                <Link href="/how-to-get-into-esports" className="text-red-400 hover:underline">
                  Learn how to start your esports career →
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
              <Link href="/esports-jobs-birmingham" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                <span className="text-white font-medium">Birmingham Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Midlands gaming opportunities</p>
              </Link>
              <Link href="/esports-jobs-leeds" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
                <span className="text-white font-medium">Leeds Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Yorkshire gaming careers</p>
              </Link>
              <Link href="/esports-jobs-remote" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-white font-medium">Remote Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Work from anywhere</p>
              </Link>
              <Link href="/entry-level-esports-jobs-uk" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-colors">
                <span className="text-white font-medium">Entry Level Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Start your esports career</p>
              </Link>
              <Link href="/esports-jobs-uk" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
                <span className="text-white font-medium">All UK Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Browse all UK opportunities</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-red-600/20 via-slate-900 to-rose-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Manchester Esports Job</h2>
            <p className="text-slate-300 mb-8">Browse the latest esports and gaming opportunities.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold rounded-xl">
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
