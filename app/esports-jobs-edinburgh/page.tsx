import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mvp.actor/esports-jobs-edinburgh",
      url: "https://mvp.actor/esports-jobs-edinburgh",
      name: "Esports Jobs Edinburgh | Gaming Careers Scotland",
      description: "Find esports jobs in Edinburgh. Gaming careers at Rockstar North, esports roles, and video game industry opportunities in Scotland.",
      isPartOf: { "@id": "https://mvp.actor/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mvp.actor" },
        { "@type": "ListItem", position: 2, name: "UK Esports Jobs", item: "https://mvp.actor/esports-jobs-uk" },
        { "@type": "ListItem", position: 3, name: "Edinburgh", item: "https://mvp.actor/esports-jobs-edinburgh" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are there gaming jobs in Edinburgh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Edinburgh is a major UK game development hub. Rockstar North, creators of Grand Theft Auto, is headquartered here. The city also has other game studios and a growing esports scene, making it excellent for gaming careers."
          }
        },
        {
          "@type": "Question",
          name: "What gaming companies are in Edinburgh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Edinburgh is home to Rockstar North (GTA, Red Dead Redemption), one of the world's most successful game studios. Other studios include Blazing Griffin, Outplay Entertainment, and various indie developers. The city has a strong game development ecosystem."
          }
        },
        {
          "@type": "Question",
          name: "What types of esports jobs are in Edinburgh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Edinburgh offers roles in game development, QA testing, game design, programming, art, and production at major studios. The esports scene includes content creation, streaming, community management, and event organisation. Universities also run esports programmes."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Esports Jobs Edinburgh 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Gaming Careers Scotland",
  description: "🚀 Find esports jobs in Edinburgh. Gaming careers at Rockstar North, esports roles, and video game industry opportunities in Scotland.",
  keywords: "esports jobs edinburgh, gaming jobs edinburgh, rockstar north jobs, game developer jobs scotland, esports careers scotland",
  alternates: { canonical: "https://mvp.actor/esports-jobs-edinburgh" },
};

const roleTypes = [
  "Game Developer", "Game Designer", "QA Tester", "3D Artist",
  "Animator", "Producer", "Content Creator", "Community Manager",
  "Esports Coach", "Streamer", "Video Editor", "Marketing Manager"
];

export default function EsportsJobsEdinburgh() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-slate-900" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs-uk" className="hover:text-white">UK Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-blue-400">Edinburgh</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esports Jobs Edinburgh:{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Gaming Careers in Scotland</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Find esports and gaming jobs in Edinburgh. Home to Rockstar North (creators of GTA),
              Edinburgh is a major UK game development hub with opportunities across gaming and esports.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl">
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
            <h2 className="text-3xl font-bold text-white mb-8">Types of Gaming Roles in Edinburgh</h2>
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
            <h2 className="text-3xl font-bold text-white mb-8">Edinburgh&apos;s Gaming Industry</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Why Edinburgh?</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Home to Rockstar North (GTA, Red Dead)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Strong game development ecosystem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Multiple indie studios and startups</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>University game development programmes</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Major Studios</h3>
                <p className="text-slate-300 mb-4">
                  Edinburgh&apos;s crown jewel is Rockstar North, but the city also hosts Blazing Griffin,
                  Outplay Entertainment, and numerous indie developers. The Scottish games industry
                  contributes significantly to the UK&apos;s gaming economy.
                </p>
                <Link href="/gaming-industry-jobs-uk" className="text-blue-400 hover:underline">
                  Explore gaming industry jobs →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Explore More UK Gaming Jobs</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/esports-jobs-london" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
                <span className="text-white font-medium">London Gaming Jobs</span>
                <p className="text-sm text-slate-400 mt-1">UK&apos;s largest gaming hub</p>
              </Link>
              <Link href="/esports-jobs-manchester" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-colors">
                <span className="text-white font-medium">Manchester Gaming Jobs</span>
                <p className="text-sm text-slate-400 mt-1">North West opportunities</p>
              </Link>
              <Link href="/esports-jobs-leeds" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
                <span className="text-white font-medium">Leeds Gaming Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Yorkshire gaming careers</p>
              </Link>
              <Link href="/gaming-tester-jobs-uk" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                <span className="text-white font-medium">QA Tester Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Game testing opportunities</p>
              </Link>
              <Link href="/gaming-industry-jobs-uk" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-white font-medium">Gaming Industry Jobs</span>
                <p className="text-sm text-slate-400 mt-1">All gaming industry roles</p>
              </Link>
              <Link href="/esports-jobs-uk" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-white font-medium">All UK Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Browse all UK opportunities</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-600/20 via-slate-900 to-cyan-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Edinburgh Gaming Job</h2>
            <p className="text-slate-300 mb-8">Browse the latest gaming and esports opportunities in Scotland.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl">
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
