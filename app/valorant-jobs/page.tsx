import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mvp.actor/valorant-jobs",
      url: "https://mvp.actor/valorant-jobs",
      name: "Valorant Jobs | VCT Esports Careers",
      description: "Find Valorant esports jobs. Careers at Riot Games, VCT teams, and Valorant esports organisations worldwide.",
      isPartOf: { "@id": "https://mvp.actor/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mvp.actor" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://mvp.actor/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "Valorant", item: "https://mvp.actor/valorant-jobs" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What jobs are available in Valorant esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Valorant esports offers careers in coaching, analysis, broadcast talent, production, team operations, content creation, and marketing. Riot Games hires for VCT operations globally. Teams in VCT Americas, EMEA, Pacific, and China hire coaches, analysts, managers, and support staff."
          }
        },
        {
          "@type": "Question",
          name: "How do I become a Valorant esports coach?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start by reaching high rank (Immortal+), studying pro play extensively, and coaching amateur teams. Build a portfolio of analysis content, VOD reviews, and coaching results. Network in the community, apply to tier 2/3 teams first, then work up to VCT organisations."
          }
        },
        {
          "@type": "Question",
          name: "Which Valorant teams are hiring?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "VCT partner teams like Sentinels, 100 Thieves, Cloud9, Fnatic, Team Liquid, Paper Rex, DRX, and others hire for coaching, analysis, content, and operations roles. Tier 2 organisations in VCT Challengers also offer opportunities to break into the scene."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Valorant Jobs 🎮 VCT Esports Careers | Riot Games",
  description: "🚀 Find Valorant esports jobs. Careers at Riot Games VCT, Sentinels, 100 Thieves, Fnatic. Coaching, analyst, broadcast, content roles.",
  keywords: "valorant jobs, vct esports careers, riot games valorant jobs, valorant coaching jobs, esports analyst valorant",
  alternates: { canonical: "https://mvp.actor/valorant-jobs" },
};

const vctRegions = [
  { name: "VCT Americas", location: "Los Angeles", teams: "Sentinels, 100T, Cloud9, NRG, LOUD" },
  { name: "VCT EMEA", location: "Berlin", teams: "Fnatic, Team Liquid, Team Vitality, Giants" },
  { name: "VCT Pacific", location: "Seoul", teams: "Paper Rex, DRX, T1, Gen.G, PRX" },
  { name: "VCT China", location: "Shanghai", teams: "EDG, Bilibili, FPX, Wolves" },
];

const majorTeams = [
  { name: "Sentinels", region: "Americas", location: "Los Angeles" },
  { name: "100 Thieves", region: "Americas", location: "Los Angeles" },
  { name: "Cloud9", region: "Americas", location: "Los Angeles" },
  { name: "Fnatic", region: "EMEA", location: "London" },
  { name: "Team Liquid", region: "EMEA", location: "Netherlands" },
  { name: "Paper Rex", region: "Pacific", location: "Singapore" },
  { name: "DRX", region: "Pacific", location: "Seoul" },
  { name: "LOUD", region: "Americas", location: "Brazil" },
];

const roleTypes = [
  { role: "Head Coach", description: "Lead team strategy, agent comps, map play" },
  { role: "Strategic Coach", description: "Map-specific strategies and setups" },
  { role: "Analyst", description: "VOD review, opponent scouting, data analysis" },
  { role: "Performance Coach", description: "Mental performance, aim training" },
  { role: "Shoutcaster", description: "Play-by-play and colour commentary" },
  { role: "Observer", description: "In-game camera operation for broadcasts" },
  { role: "Broadcast Producer", description: "Live VCT show production" },
  { role: "Content Creator", description: "Team content, social media, video" },
  { role: "Team Manager", description: "Player logistics, bootcamps, travel" },
  { role: "General Manager", description: "Roster decisions, org strategy" },
];

export default function ValorantJobs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 via-slate-950/80 to-pink-600/30" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-red-400">Valorant</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Valorant Jobs:{" "}
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">VCT Esports Careers</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Valorant is one of the fastest-growing esports. The Valorant Champions Tour (VCT) spans
              three major regions with partnered teams competing year-round. Find careers at Riot Games,
              VCT teams, and the broader Valorant ecosystem.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/league-of-legends-jobs" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                LoL Jobs
              </Link>
              <Link href="/esports-recruitment-agency" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700 hover:border-red-500/50">
                Recruitment Services
              </Link>
            </div>
          </div>
        </section>

        {/* VCT Regions */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">VCT Regions & Locations</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {vctRegions.map((region) => (
                <div key={region.name} className="bg-slate-800/50 rounded-xl p-5 border border-red-500/30">
                  <h3 className="text-xl font-bold text-white">{region.name}</h3>
                  <p className="text-sm text-red-400">📍 {region.location}</p>
                  <p className="text-sm text-slate-400 mt-2">Teams: {region.teams}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Major Teams */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">VCT Partner Teams Hiring</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {majorTeams.map((team) => (
                <div key={team.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{team.name}</h3>
                  <p className="text-xs text-pink-400">{team.region}</p>
                  <p className="text-sm text-slate-400">{team.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Role Types */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Types of Valorant Esports Jobs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {roleTypes.map((item) => (
                <div key={item.role} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{item.role}</h3>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Riot Games */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Working at Riot Games - Valorant</h2>
            <p className="text-slate-400 mb-6 max-w-3xl">
              Riot Games runs the VCT and hires for esports operations, broadcast, game development,
              and more. Key VCT locations include Los Angeles (Americas), Berlin (EMEA), Seoul (Pacific),
              and Shanghai (China).
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">Riot Valorant Esports Roles</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-slate-300">
                <li>• VCT Tournament Operations</li>
                <li>• Broadcast Production</li>
                <li>• Esports Marketing</li>
                <li>• Game Balance (Competitive)</li>
                <li>• Observer Team</li>
                <li>• Content & Social</li>
                <li>• Partnership Management</li>
                <li>• Event Production</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Games */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Jobs in Other Esports</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link href="/league-of-legends-jobs" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-white font-medium">League of Legends Jobs</span>
                <p className="text-slate-400 text-sm mt-1">Also by Riot Games</p>
              </Link>
              <Link href="/counter-strike-jobs" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-colors">
                <span className="text-white font-medium">Counter-Strike Jobs</span>
                <p className="text-slate-400 text-sm mt-1">CS2 esports careers</p>
              </Link>
              <Link href="/fortnite-jobs" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                <span className="text-white font-medium">Fortnite Jobs</span>
                <p className="text-slate-400 text-sm mt-1">Epic Games esports</p>
              </Link>
              <Link href="/esports-jobs" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-white font-medium">All Esports Jobs</span>
                <p className="text-slate-400 text-sm mt-1">Browse all games</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-red-600/20 via-slate-900 to-pink-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Valorant Esports Job</h2>
            <p className="text-slate-300 mb-8">Browse VCT careers at Riot Games, partner teams, and more.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-analyst-careers" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Analyst Careers
              </Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
