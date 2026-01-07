import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://esportsjobs.quest/league-of-legends-jobs",
      url: "https://esportsjobs.quest/league-of-legends-jobs",
      name: "League of Legends Jobs | LoL Esports Careers",
      description: "Find League of Legends esports jobs. Careers at Riot Games, LEC, LCS teams, and LoL esports organisations worldwide.",
      isPartOf: { "@id": "https://esportsjobs.quest/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://esportsjobs.quest" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://esportsjobs.quest/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "League of Legends", item: "https://esportsjobs.quest/league-of-legends-jobs" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What jobs are available in League of Legends esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "LoL esports offers diverse careers including: coaches and analysts for professional teams, broadcast talent (casters, hosts, analysts), production roles at Riot Games, team operations and management, content creation, marketing, and business development at esports organisations competing in leagues like LEC, LCS, LCK, and LPL."
          }
        },
        {
          "@type": "Question",
          name: "How do I get a job at Riot Games?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Riot Games hires across game development, esports operations, broadcast production, marketing, and corporate functions. Key locations include Los Angeles (HQ), Dublin (EMEA), and regional offices. Build relevant experience, showcase passion for League of Legends, and apply through Riot's careers page. Networking at events and demonstrating game knowledge helps."
          }
        },
        {
          "@type": "Question",
          name: "What qualifications do I need for LoL esports jobs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Requirements vary by role. Coaching typically requires high rank (Diamond+) and analytical skills. Broadcast talent needs on-camera experience and game knowledge. Production roles benefit from broadcast/event experience. Marketing and business roles may require relevant degrees but passion for esports and LoL knowledge are highly valued."
          }
        },
        {
          "@type": "Question",
          name: "Which LoL esports teams are hiring?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Major teams hiring include: G2 Esports, Fnatic, Team Liquid, Cloud9, T1, Gen.G, 100 Thieves, and many more. Teams hire for coaching, analysis, content, marketing, operations, and management roles. League-specific roles are also available at Riot Games for LEC, LCS, LCK, and other regional leagues."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "League of Legends Jobs 🎮 LoL Esports Careers | Riot Games",
  description: "🚀 Find League of Legends esports jobs. Careers at Riot Games, LEC, LCS teams like G2, Fnatic, Cloud9, T1. LoL coaching, analyst, broadcast roles.",
  keywords: "league of legends jobs, lol esports careers, riot games jobs, lec jobs, lcs jobs, lol coaching jobs, esports analyst lol",
  alternates: { canonical: "https://esportsjobs.quest/league-of-legends-jobs" },
};

const riotLocations = [
  { location: "Los Angeles", focus: "HQ, LCS, Game Development" },
  { location: "Berlin", focus: "LEC, EMEA Esports" },
  { location: "Dublin", focus: "EMEA Operations" },
  { location: "Seoul", focus: "LCK Partnership" },
  { location: "Shanghai", focus: "LPL, China Operations" },
  { location: "Sydney", focus: "OCE Operations" },
];

const majorTeams = [
  { name: "G2 Esports", region: "LEC", location: "Berlin" },
  { name: "Fnatic", region: "LEC", location: "London/Berlin" },
  { name: "Team Liquid", region: "LCS", location: "Los Angeles" },
  { name: "Cloud9", region: "LCS", location: "Los Angeles" },
  { name: "T1", region: "LCK", location: "Seoul" },
  { name: "Gen.G", region: "LCK", location: "Seoul/Los Angeles" },
  { name: "100 Thieves", region: "LCS", location: "Los Angeles" },
  { name: "MAD Lions", region: "LEC", location: "Madrid" },
];

const roleTypes = [
  { role: "Head Coach", description: "Lead team strategy and player development" },
  { role: "Assistant Coach", description: "Support head coach, work with players" },
  { role: "Analyst", description: "VOD review, opponent scouting, meta analysis" },
  { role: "Performance Coach", description: "Mental performance, team dynamics" },
  { role: "Shoutcaster", description: "Play-by-play and colour commentary" },
  { role: "Broadcast Producer", description: "Live show production for leagues" },
  { role: "Content Creator", description: "Team content, social media, video" },
  { role: "Team Manager", description: "Player logistics, team operations" },
  { role: "General Manager", description: "Roster decisions, org strategy" },
  { role: "Marketing Manager", description: "Team/league marketing campaigns" },
];

const leagues = [
  { name: "LEC", fullName: "League of Legends EMEA Championship", location: "Berlin" },
  { name: "LCS", fullName: "League Championship Series", location: "Los Angeles" },
  { name: "LCK", fullName: "League of Legends Champions Korea", location: "Seoul" },
  { name: "LPL", fullName: "League of Legends Pro League", location: "China" },
  { name: "PCS", fullName: "Pacific Championship Series", location: "Taiwan/SEA" },
  { name: "CBLOL", fullName: "Campeonato Brasileiro de LoL", location: "Brazil" },
];

export default function LeagueOfLegendsJobs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-slate-950/80 to-cyan-600/30" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-blue-400">League of Legends</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              League of Legends Jobs:{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">LoL Esports Careers</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              League of Legends is the world&apos;s biggest esport. From Riot Games to professional teams
              competing in the LEC, LCS, and LCK, discover careers in the LoL ecosystem—coaching,
              analysis, broadcast, content, and operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/valorant-jobs" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Valorant Jobs
              </Link>
              <Link href="/esports-recruitment-agency" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700 hover:border-blue-500/50">
                Recruitment Services
              </Link>
            </div>
          </div>
        </section>

        {/* Riot Games Section */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Riot Games - The Publisher</h2>
            <p className="text-slate-400 mb-8 max-w-3xl">
              Riot Games develops League of Legends and runs all official LoL esports leagues.
              They hire across game development, esports operations, broadcast, and corporate functions globally.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {riotLocations.map((loc) => (
                <div key={loc.location} className="bg-slate-800/50 rounded-xl p-4 border border-blue-500/30">
                  <h3 className="text-lg font-bold text-white">{loc.location}</h3>
                  <p className="text-sm text-slate-400">{loc.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pro Leagues */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">LoL Esports Leagues</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {leagues.map((league) => (
                <div key={league.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-xl font-bold text-blue-400">{league.name}</h3>
                  <p className="text-white text-sm">{league.fullName}</p>
                  <p className="text-slate-400 text-sm mt-1">📍 {league.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Major Teams */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Major LoL Teams Hiring</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {majorTeams.map((team) => (
                <div key={team.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{team.name}</h3>
                  <p className="text-xs text-cyan-400">{team.region}</p>
                  <p className="text-sm text-slate-400">{team.location}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/g2-esports-careers" className="text-blue-400 hover:underline text-sm">G2 Esports Careers →</Link>
              <Link href="/fnatic-careers" className="text-blue-400 hover:underline text-sm">Fnatic Careers →</Link>
              <Link href="/team-liquid-careers" className="text-blue-400 hover:underline text-sm">Team Liquid Careers →</Link>
              <Link href="/cloud9-careers" className="text-blue-400 hover:underline text-sm">Cloud9 Careers →</Link>
            </div>
          </div>
        </section>

        {/* Role Types */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Types of LoL Esports Jobs</h2>
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

        {/* How to Get In */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">How to Get a LoL Esports Job</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">For Coaching/Analysis Roles</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">1.</span>
                    <span>Reach high rank in solo queue (Diamond+)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">2.</span>
                    <span>Create VOD reviews and analysis content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">3.</span>
                    <span>Coach amateur/semi-pro teams for experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">4.</span>
                    <span>Build network in the LoL community</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">5.</span>
                    <span>Apply to academy/amateur leagues first</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">For Broadcast/Content Roles</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">1.</span>
                    <span>Cast amateur tournaments and stream</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">2.</span>
                    <span>Build a demo reel of your best work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">3.</span>
                    <span>Deep game knowledge is essential</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">4.</span>
                    <span>Network at LoL events and online</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">5.</span>
                    <span>Apply to regional leagues before major leagues</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Games */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Jobs in Other Esports</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link href="/valorant-jobs" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
                <span className="text-white font-medium">Valorant Jobs</span>
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

        <section className="py-20 bg-gradient-to-r from-blue-600/20 via-slate-900 to-cyan-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your League of Legends Job</h2>
            <p className="text-slate-300 mb-8">Browse LoL esports careers at Riot Games, pro teams, and more.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-coach-careers" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Coaching Careers
              </Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
