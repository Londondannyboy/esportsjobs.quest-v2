import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mvp.actor/esports-jobs-los-angeles",
      url: "https://mvp.actor/esports-jobs-los-angeles",
      name: "Esports Jobs Los Angeles | Gaming Careers in LA",
      description: "Find esports jobs in Los Angeles. Gaming careers at Riot Games, Blizzard, Activision and major esports organisations in North America's esports capital.",
      isPartOf: { "@id": "https://mvp.actor/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mvp.actor" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://mvp.actor/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "Los Angeles", item: "https://mvp.actor/esports-jobs-los-angeles" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why is Los Angeles the esports capital of North America?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Los Angeles hosts the headquarters of Riot Games, Activision Blizzard, and most major NA esports organisations. The city has purpose-built esports arenas, hosts major tournaments, and benefits from proximity to Hollywood for content production. Most LCS, OWL, and CDL teams are based in or around LA."
          }
        },
        {
          "@type": "Question",
          name: "What esports companies are in Los Angeles?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "LA hosts Riot Games (League of Legends, Valorant), Activision Blizzard (Call of Duty, Overwatch), plus esports orgs like 100 Thieves, FaZe Clan, NRG, Sentinels, and Cloud9. The city also has major streaming networks, esports agencies, and gaming media companies."
          }
        },
        {
          "@type": "Question",
          name: "What esports jobs are available in Los Angeles?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "LA offers the full spectrum of esports careers: game development, esports operations, broadcast production, content creation, marketing, team management, player support, and business development. The entertainment industry crossover creates unique opportunities in content and talent management."
          }
        },
        {
          "@type": "Question",
          name: "Can UK citizens work in esports in Los Angeles?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, but you'll need a work visa (typically H-1B or O-1). Many gaming companies sponsor skilled workers. The esports industry is competitive for visas due to specialised skills. Consider remote roles with US companies or transfer opportunities from UK offices of global gaming companies."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Esports Jobs Los Angeles 🇺🇸 Gaming Careers LA",
  description: "🚀 Find esports jobs in Los Angeles. Gaming careers at Riot Games, Activision, and major esports organisations in North America's esports capital.",
  keywords: "esports jobs los angeles, gaming jobs la, riot games careers, activision jobs, 100 thieves jobs, esports careers usa, na esports jobs",
  alternates: { canonical: "https://mvp.actor/esports-jobs-los-angeles" },
};

const majorCompanies = [
  { name: "Riot Games", focus: "League of Legends, Valorant" },
  { name: "Activision Blizzard", focus: "CoD, Overwatch, WoW" },
  { name: "100 Thieves", focus: "Esports org & lifestyle brand" },
  { name: "FaZe Clan", focus: "Esports & entertainment" },
  { name: "NRG Esports", focus: "Multi-game esports org" },
  { name: "Sentinels", focus: "Valorant, Apex esports" },
];

const roleTypes = [
  "Game Developer", "Esports Producer", "Broadcast Director", "Content Creator",
  "Team Manager", "Player Coach", "Marketing Manager", "Business Development",
  "Community Manager", "Talent Manager", "Video Editor", "Social Media Manager"
];

export default function EsportsJobsLosAngeles() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-slate-900" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-purple-400">Los Angeles</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esports Jobs Los Angeles:{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">North America&apos;s Esports Capital</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Los Angeles is the heart of North American esports. Home to Riot Games, Activision Blizzard,
              and most major esports organisations, LA offers unparalleled opportunities in competitive gaming.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-jobs-remote" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Remote Jobs
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Major Gaming Companies in Los Angeles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {majorCompanies.map((company) => (
                <div key={company.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{company.name}</h3>
                  <p className="text-sm text-slate-400">{company.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Types of Esports Roles in LA</h2>
            <div className="flex flex-wrap gap-3">
              {roleTypes.map((role) => (
                <span key={role} className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Why Los Angeles for Esports?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">The Opportunity</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Riot Games & Activision Blizzard HQ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Most major NA esports orgs based here</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Purpose-built esports arenas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Hollywood crossover for content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Highest concentration of esports jobs</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">For UK Professionals</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Many companies sponsor H-1B visas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>O-1 visa for esports talent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Internal transfers from UK offices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Remote work increasingly available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Explore Global Esports Jobs</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/cloud9-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-white font-medium">Cloud9 Careers</span>
                <p className="text-sm text-slate-400 mt-1">LA-based esports org</p>
              </Link>
              <Link href="/esports-jobs-seoul" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-white font-medium">Seoul Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Korea - World esports capital</p>
              </Link>
              <Link href="/esports-jobs-berlin" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
                <span className="text-white font-medium">Berlin Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">European esports hub</p>
              </Link>
              <Link href="/esports-jobs-singapore" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
                <span className="text-white font-medium">Singapore Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">SEA esports hub</p>
              </Link>
              <Link href="/esports-jobs-london" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-colors">
                <span className="text-white font-medium">London Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">UK esports capital</p>
              </Link>
              <Link href="/esports-jobs-remote" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-colors">
                <span className="text-white font-medium">Remote Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Work from anywhere</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-purple-600/20 via-slate-900 to-pink-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Los Angeles Esports Job</h2>
            <p className="text-slate-300 mb-8">Browse esports and gaming opportunities in North America.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl">
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
