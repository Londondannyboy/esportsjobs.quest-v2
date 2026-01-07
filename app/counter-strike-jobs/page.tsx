import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://esportsjobs.quest/counter-strike-jobs",
      url: "https://esportsjobs.quest/counter-strike-jobs",
      name: "Counter-Strike Jobs | CS2 Esports Careers",
      description: "Find Counter-Strike 2 esports jobs. Careers at Valve, ESL, BLAST, and CS2 esports organisations worldwide.",
      isPartOf: { "@id": "https://esportsjobs.quest/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://esportsjobs.quest" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://esportsjobs.quest/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "Counter-Strike", item: "https://esportsjobs.quest/counter-strike-jobs" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What jobs are available in Counter-Strike esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CS2 esports offers careers in coaching, analysis, tournament production, broadcast talent, and team operations. Unlike LoL/Valorant, CS has a third-party tournament ecosystem with ESL, BLAST, and PGL running major events. Teams like FaZe, Natus Vincere, G2, and Vitality hire coaches, analysts, and staff."
          }
        },
        {
          "@type": "Question",
          name: "How is CS2 esports different from other games?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CS2 esports uses a third-party tournament model rather than franchise leagues. Tournament operators like ESL FACEIT Group, BLAST, and PGL run the major events. This creates more diverse job opportunities across multiple companies rather than a single publisher."
          }
        },
        {
          "@type": "Question",
          name: "Which CS2 tournament operators are hiring?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Major CS2 tournament operators include ESL FACEIT Group (Cologne, IEM events), BLAST Premier (Copenhagen), and PGL (Romania). These companies hire for production, broadcast, operations, and marketing roles. They often need staff for events across multiple locations."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Counter-Strike Jobs 🎮 CS2 Esports Careers | ESL, BLAST",
  description: "🚀 Find Counter-Strike 2 esports jobs. Careers at ESL, BLAST, Valve, and CS2 teams like FaZe, NaVi, G2. Coaching, broadcast, production roles.",
  keywords: "counter-strike jobs, cs2 esports careers, esl jobs, blast jobs, csgo jobs, cs2 coaching jobs",
  alternates: { canonical: "https://esportsjobs.quest/counter-strike-jobs" },
};

const tournamentOperators = [
  { name: "ESL FACEIT Group", location: "Cologne", focus: "IEM, ESL Pro League, FACEIT" },
  { name: "BLAST Premier", location: "Copenhagen", focus: "BLAST events, Premier circuit" },
  { name: "PGL", location: "Bucharest", focus: "Major championships, production" },
  { name: "Valve", location: "Seattle", focus: "Major sponsorship, game development" },
];

const majorTeams = [
  { name: "Natus Vincere", region: "CIS", location: "Ukraine" },
  { name: "FaZe Clan", region: "International", location: "Los Angeles" },
  { name: "G2 Esports", region: "Europe", location: "Berlin" },
  { name: "Team Vitality", region: "Europe", location: "Paris" },
  { name: "Team Liquid", region: "Americas", location: "Netherlands" },
  { name: "Cloud9", region: "Americas", location: "Los Angeles" },
  { name: "Heroic", region: "Europe", location: "Copenhagen" },
  { name: "MOUZ", region: "Europe", location: "Hamburg" },
];

const roleTypes = [
  { role: "Head Coach", description: "Lead strategy, tactics, team development" },
  { role: "Assistant Coach", description: "Demo review, individual player work" },
  { role: "Analyst", description: "Opponent scouting, utility setups, stats" },
  { role: "Tournament Director", description: "Oversee event operations" },
  { role: "Broadcast Producer", description: "Live show production for events" },
  { role: "Observer", description: "In-game camera work for broadcasts" },
  { role: "Shoutcaster", description: "Play-by-play and colour commentary" },
  { role: "Desk Host/Analyst", description: "Studio content and analysis" },
  { role: "Event Operations", description: "On-site event management" },
  { role: "Content Producer", description: "Team and event content creation" },
];

const majorEvents = [
  { name: "IEM Cologne", operator: "ESL", location: "Germany" },
  { name: "IEM Katowice", operator: "ESL", location: "Poland" },
  { name: "BLAST Premier Finals", operator: "BLAST", location: "Various" },
  { name: "CS2 Major", operator: "Valve/PGL", location: "Rotating" },
];

export default function CounterStrikeJobs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511882150382-421056c89033?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 via-slate-950/80 to-yellow-600/30" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-orange-400">Counter-Strike</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Counter-Strike Jobs:{" "}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">CS2 Esports Careers</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Counter-Strike has been an esports staple for over two decades. With CS2&apos;s launch,
              the scene continues to thrive. Unlike franchise leagues, CS uses third-party tournaments
              run by ESL, BLAST, and PGL—creating diverse career opportunities across the ecosystem.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-jobs-germany" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Germany Jobs (ESL HQ)
              </Link>
              <Link href="/esports-recruitment-agency" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700 hover:border-orange-500/50">
                Recruitment Services
              </Link>
            </div>
          </div>
        </section>

        {/* Tournament Operators */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">CS2 Tournament Operators</h2>
            <p className="text-slate-400 mb-8 max-w-3xl">
              Unlike Riot Games titles, CS2 esports is run by third-party tournament operators.
              This creates opportunities at multiple companies rather than a single publisher.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {tournamentOperators.map((org) => (
                <div key={org.name} className="bg-slate-800/50 rounded-xl p-5 border border-orange-500/30">
                  <h3 className="text-xl font-bold text-white">{org.name}</h3>
                  <p className="text-sm text-orange-400">📍 {org.location}</p>
                  <p className="text-sm text-slate-400 mt-2">{org.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Major Events */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Major CS2 Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {majorEvents.map((event) => (
                <div key={event.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{event.name}</h3>
                  <p className="text-xs text-yellow-400">{event.operator}</p>
                  <p className="text-sm text-slate-400">{event.location}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-400 mt-6 text-sm">
              Events require production staff, broadcast talent, operations teams, and more.
              Many positions are freelance/contract based around event schedules.
            </p>
          </div>
        </section>

        {/* Major Teams */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Top CS2 Teams Hiring</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {majorTeams.map((team) => (
                <div key={team.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{team.name}</h3>
                  <p className="text-xs text-orange-400">{team.region}</p>
                  <p className="text-sm text-slate-400">{team.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Role Types */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Types of CS2 Esports Jobs</h2>
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

        {/* CS2 vs Other Esports */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">CS2 Job Market vs Other Esports</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">CS2 Advantages</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">✓</span>
                    <span>Multiple tournament operators = more employers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">✓</span>
                    <span>Freelance opportunities around event schedules</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">✓</span>
                    <span>European-centric (ESL in Cologne, BLAST in Copenhagen)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">✓</span>
                    <span>Long-established scene with institutional knowledge</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Key Locations</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">📍</span>
                    <span><strong>Cologne, Germany</strong> - ESL FACEIT Group HQ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">📍</span>
                    <span><strong>Copenhagen, Denmark</strong> - BLAST HQ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">📍</span>
                    <span><strong>Bucharest, Romania</strong> - PGL HQ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">📍</span>
                    <span><strong>Seattle, USA</strong> - Valve (publisher)</span>
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
                <p className="text-slate-400 text-sm mt-1">Tactical shooter rival</p>
              </Link>
              <Link href="/league-of-legends-jobs" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-white font-medium">League of Legends Jobs</span>
                <p className="text-slate-400 text-sm mt-1">MOBA esports</p>
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

        <section className="py-20 bg-gradient-to-r from-orange-600/20 via-slate-900 to-yellow-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Counter-Strike Job</h2>
            <p className="text-slate-300 mb-8">Browse CS2 esports careers at ESL, BLAST, and top teams.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-broadcaster-careers" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Broadcast Careers
              </Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
