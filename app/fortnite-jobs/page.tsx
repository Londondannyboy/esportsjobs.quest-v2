import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mvp.actor/fortnite-jobs",
      url: "https://mvp.actor/fortnite-jobs",
      name: "Fortnite Jobs | FNCS Esports Careers",
      description: "Find Fortnite esports jobs. Careers at Epic Games, FNCS production, and Fortnite content creation.",
      isPartOf: { "@id": "https://mvp.actor/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mvp.actor" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://mvp.actor/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "Fortnite", item: "https://mvp.actor/fortnite-jobs" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What jobs are available in Fortnite esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fortnite offers careers at Epic Games (development, esports operations, FNCS production), content creation, coaching, and team management. The scene is more individual/duo focused than team-based games, making content creation and coaching particularly valuable career paths."
          }
        },
        {
          "@type": "Question",
          name: "How do I work at Epic Games?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Epic Games is headquartered in Cary, North Carolina with offices globally. They hire for game development, esports operations, marketing, and corporate roles. Fortnite-specific roles include competitive operations, broadcast production, and community management."
          }
        },
        {
          "@type": "Question",
          name: "Is Fortnite esports different from other games?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Fortnite competitive is primarily solo and duo based rather than full team rosters. This means fewer traditional team staff roles but more opportunities in content creation, individual coaching, and Epic Games' direct operations. The FNCS (Fortnite Champion Series) is run entirely by Epic."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Fortnite Jobs 🎮 FNCS Esports Careers | Epic Games",
  description: "🚀 Find Fortnite esports jobs. Careers at Epic Games, FNCS production, content creation. Coaching and competitive Fortnite opportunities.",
  keywords: "fortnite jobs, fncs careers, epic games jobs, fortnite esports, fortnite coaching jobs, fortnite content creator jobs",
  alternates: { canonical: "https://mvp.actor/fortnite-jobs" },
};

const epicLocations = [
  { location: "Cary, North Carolina", focus: "Epic Games HQ, Game Development" },
  { location: "Los Angeles", focus: "Esports, Content, Marketing" },
  { location: "London", focus: "EU Operations" },
  { location: "Seoul", focus: "Asia Pacific Operations" },
];

const roleTypes = [
  { role: "Competitive Operations", description: "FNCS tournament management" },
  { role: "Broadcast Producer", description: "FNCS show production" },
  { role: "Game Developer", description: "Competitive mode development" },
  { role: "Content Creator", description: "Streaming, YouTube, social content" },
  { role: "Coach", description: "Individual/duo coaching services" },
  { role: "Creative Director", description: "Fortnite Creative mode content" },
  { role: "Community Manager", description: "Competitive community engagement" },
  { role: "Marketing Manager", description: "Esports marketing campaigns" },
  { role: "Shoutcaster", description: "FNCS broadcast talent" },
  { role: "Video Editor", description: "Competitive highlights, content" },
];

const contentOpportunities = [
  { type: "Streaming", description: "Competitive/content streaming on Twitch/YouTube" },
  { type: "YouTube Content", description: "Tutorials, highlights, entertainment" },
  { type: "Coaching Services", description: "1-on-1 and group coaching" },
  { type: "Creative Maps", description: "Building competitive practice maps" },
  { type: "Social Content", description: "TikTok, Shorts, Reels clips" },
  { type: "Tournament Hosting", description: "Community tournament organisation" },
];

export default function FortniteJobs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-slate-950/80 to-blue-600/30" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-purple-400">Fortnite</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Fortnite Jobs:{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">FNCS & Epic Games Careers</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Fortnite remains one of gaming&apos;s biggest phenomena. With the FNCS competitive circuit
              and massive content creator ecosystem, Fortnite offers unique career paths—from Epic Games
              roles to content creation and coaching.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-jobs-usa" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                USA Jobs (Epic HQ)
              </Link>
              <Link href="/esports-recruitment-agency" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700 hover:border-purple-500/50">
                Recruitment Services
              </Link>
            </div>
          </div>
        </section>

        {/* Fortnite Ecosystem */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">The Fortnite Ecosystem</h2>
            <p className="text-slate-400 mb-8 max-w-3xl">
              Unlike team-based esports, Fortnite competitive is primarily solo and duo focused.
              This creates a different job landscape with more emphasis on content creation, coaching,
              and Epic Games direct employment rather than traditional team staff roles.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-xl font-bold text-white mb-3">Epic Games</h3>
                <p className="text-slate-400 text-sm">
                  Development, esports operations, FNCS production, marketing. Headquarters in North Carolina.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-xl font-bold text-white mb-3">Content Creation</h3>
                <p className="text-slate-400 text-sm">
                  Streaming, YouTube, coaching services. Major revenue path for Fortnite professionals.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-xl font-bold text-white mb-3">Esports Orgs</h3>
                <p className="text-slate-400 text-sm">
                  Content creator signings, coaching staff, management. Less team-based than other games.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Epic Games */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Epic Games Locations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {epicLocations.map((loc) => (
                <div key={loc.location} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{loc.location}</h3>
                  <p className="text-sm text-slate-400">{loc.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Role Types */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Types of Fortnite Jobs</h2>
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

        {/* Content Opportunities */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Content & Creator Opportunities</h2>
            <p className="text-slate-400 mb-8 max-w-3xl">
              Fortnite&apos;s content creator ecosystem is massive. Many professionals earn more through
              content than competitive play. These paths can lead to org signings and full-time careers.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {contentOpportunities.map((item) => (
                <div key={item.type} className="bg-slate-800/50 rounded-xl p-4 border border-blue-500/30">
                  <h3 className="text-lg font-bold text-white">{item.type}</h3>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FNCS */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">FNCS - Fortnite Champion Series</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">What is FNCS?</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Official Fortnite competitive circuit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Run entirely by Epic Games</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Solo, duo, and trio formats</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Multi-million dollar prize pools</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">FNCS Jobs</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Broadcast production at Epic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Tournament operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>On-air talent (casters, analysts)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Competitive integrity/anti-cheat</span>
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
                <p className="text-slate-400 text-sm mt-1">Tactical shooter</p>
              </Link>
              <Link href="/league-of-legends-jobs" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-white font-medium">League of Legends Jobs</span>
                <p className="text-slate-400 text-sm mt-1">MOBA esports</p>
              </Link>
              <Link href="/counter-strike-jobs" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-colors">
                <span className="text-white font-medium">Counter-Strike Jobs</span>
                <p className="text-slate-400 text-sm mt-1">CS2 esports</p>
              </Link>
              <Link href="/esports-jobs" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-white font-medium">All Esports Jobs</span>
                <p className="text-slate-400 text-sm mt-1">Browse all games</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-purple-600/20 via-slate-900 to-blue-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Fortnite Job</h2>
            <p className="text-slate-300 mb-8">Browse Fortnite careers at Epic Games, content creation, and more.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-jobs-usa" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                USA Jobs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
