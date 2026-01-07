import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

// Target keywords: "esports glossary", "esports terms", "gaming terminology"
export const metadata: Metadata = {
  title: "Esports Glossary | Gaming Terms & Definitions for Careers",
  description: "Complete esports glossary with definitions of industry terms. Essential vocabulary for esports job seekers, professionals, and those breaking into gaming careers.",
  keywords: "esports glossary, esports terms, gaming terminology, esports definitions, esports vocabulary",
  openGraph: {
    title: "Esports Glossary | Gaming Terms & Definitions",
    description: "Essential esports vocabulary for career professionals and job seekers.",
    type: "website",
    url: "https://esportsjobs.quest/esports-glossary",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esports Glossary",
    description: "Essential esports terminology for your career.",
  },
  alternates: {
    canonical: "https://esportsjobs.quest/esports-glossary",
  },
};

// Glossary terms - easily expandable for programmatic SEO
const glossaryTerms = [
  {
    term: "Esports",
    slug: "esports",
    definition: "Competitive video gaming at a professional level, where players and teams compete in organised tournaments for prizes and recognition.",
    category: "General",
    relatedTerms: ["Competitive Gaming", "Pro Gaming", "Electronic Sports"],
    careerRelevance: "Understanding esports fundamentals is essential for any role in the industry, from marketing to operations.",
  },
  {
    term: "Esports Coach",
    slug: "esports-coach",
    definition: "A professional who trains and develops esports players and teams, focusing on strategy, gameplay improvement, mental performance, and team dynamics.",
    category: "Roles",
    relatedTerms: ["Head Coach", "Assistant Coach", "Performance Coach"],
    careerRelevance: "Coaching is one of the fastest-growing career paths in esports, with demand across all major titles.",
    relatedPage: "/esports-coach-careers",
  },
  {
    term: "Esports Analyst",
    slug: "esports-analyst",
    definition: "A specialist who studies gameplay, statistics, and opponent strategies to provide insights and recommendations for competitive teams.",
    category: "Roles",
    relatedTerms: ["Data Analyst", "Performance Analyst", "Game Analyst"],
    careerRelevance: "Analyst roles combine gaming knowledge with data skills, offering paths from junior to head analyst positions.",
    relatedPage: "/esports-analyst-careers",
  },
  {
    term: "Caster",
    slug: "caster",
    definition: "A commentator who provides live play-by-play and analysis during esports matches, similar to sports broadcasters.",
    category: "Broadcasting",
    relatedTerms: ["Shoutcaster", "Commentator", "Play-by-Play"],
    careerRelevance: "Casting is a visible role requiring game knowledge, communication skills, and on-camera presence.",
    relatedPage: "/esports-broadcaster-careers",
  },
  {
    term: "LAN",
    slug: "lan",
    definition: "Local Area Network - refers to in-person esports events where players compete on the same network, eliminating online latency.",
    category: "Events",
    relatedTerms: ["LAN Party", "LAN Tournament", "Offline Event"],
    careerRelevance: "LAN events require event managers, production staff, and technical crews, creating numerous job opportunities.",
  },
  {
    term: "Scrim",
    slug: "scrim",
    definition: "Short for 'scrimmage' - practice matches between professional teams to prepare for official competitions.",
    category: "Training",
    relatedTerms: ["Practice Match", "Scrimmage", "Practice Block"],
    careerRelevance: "Scrim schedules are managed by team managers and coaches, making it core knowledge for operations roles.",
  },
  {
    term: "Meta",
    slug: "meta",
    definition: "The current most effective strategies, team compositions, or character picks in a competitive game at any given time.",
    category: "Strategy",
    relatedTerms: ["Metagame", "Current Meta", "Meta Shift"],
    careerRelevance: "Understanding meta is crucial for analysts, coaches, and content creators covering competitive scenes.",
  },
  {
    term: "Franchise League",
    slug: "franchise-league",
    definition: "A league structure where teams buy permanent spots (franchises) rather than qualifying through performance, providing stability.",
    category: "Leagues",
    relatedTerms: ["Franchising", "Permanent Partnership", "League Spot"],
    careerRelevance: "Franchise leagues offer more stable employment as teams have guaranteed participation.",
  },
  {
    term: "Content Creator",
    slug: "content-creator",
    definition: "Individuals who produce gaming-related content across platforms like YouTube, Twitch, TikTok, and social media.",
    category: "Content",
    relatedTerms: ["Streamer", "YouTuber", "Influencer"],
    careerRelevance: "Content creation skills are valued across esports, from in-house teams to influencer partnerships.",
  },
  {
    term: "Bootcamp",
    slug: "bootcamp",
    definition: "Intensive training periods where teams live and practice together, often before major tournaments.",
    category: "Training",
    relatedTerms: ["Training Camp", "Team House", "Practice Facility"],
    careerRelevance: "Bootcamps require logistical coordination, making them relevant for operations and team management roles.",
  },
  {
    term: "Tier 1",
    slug: "tier-1",
    definition: "The highest level of professional esports competition, featuring the best teams and largest prize pools.",
    category: "Competitive",
    relatedTerms: ["Top Tier", "Premier League", "Major League"],
    careerRelevance: "Tier 1 organisations typically offer the best salaries and most professional working environments.",
  },
  {
    term: "Tier 2/Tier 3",
    slug: "tier-2-tier-3",
    definition: "Lower levels of professional competition, often serving as development leagues for emerging talent.",
    category: "Competitive",
    relatedTerms: ["Semi-Pro", "Amateur", "Development League"],
    careerRelevance: "Lower tiers offer entry points for new professionals, with opportunities to grow alongside organisations.",
  },
  {
    term: "Player Agent",
    slug: "player-agent",
    definition: "A representative who negotiates contracts, sponsorships, and career opportunities on behalf of professional players.",
    category: "Management",
    relatedTerms: ["Talent Agent", "Player Manager", "Representative"],
    careerRelevance: "Talent management is a growing field as player contracts and sponsorships become more valuable.",
  },
  {
    term: "Broadcast Production",
    slug: "broadcast-production",
    definition: "The technical and creative work involved in producing live esports broadcasts, including video, audio, and graphics.",
    category: "Broadcasting",
    relatedTerms: ["Production Crew", "Broadcast Team", "Live Production"],
    careerRelevance: "Production roles span technical (observers, directors) to creative (graphics, music) positions.",
  },
  {
    term: "Observer",
    slug: "observer",
    definition: "A specialist who controls the in-game camera during broadcasts, following action and creating compelling viewing experiences.",
    category: "Broadcasting",
    relatedTerms: ["In-Game Director", "Camera Operator", "POV Controller"],
    careerRelevance: "Observers require deep game knowledge and technical skill, making it a specialised career path.",
  },
  {
    term: "TO (Tournament Organiser)",
    slug: "tournament-organiser",
    definition: "Companies or individuals who plan, execute, and manage esports tournaments and competitions.",
    category: "Events",
    relatedTerms: ["Event Organiser", "League Operator", "Competition Host"],
    careerRelevance: "TOs hire across events, production, marketing, and operations for each tournament.",
  },
  {
    term: "Endemic Sponsor",
    slug: "endemic-sponsor",
    definition: "Brands directly related to gaming (peripherals, hardware, energy drinks) that sponsor esports teams and events.",
    category: "Business",
    relatedTerms: ["Gaming Sponsor", "Industry Partner", "Core Sponsor"],
    careerRelevance: "Partnership and sponsorship roles involve working with endemic brands on activations and campaigns.",
  },
  {
    term: "Non-Endemic Sponsor",
    slug: "non-endemic-sponsor",
    definition: "Brands outside the gaming industry (automotive, finance, fashion) that invest in esports for audience reach.",
    category: "Business",
    relatedTerms: ["External Sponsor", "Mainstream Brand", "Crossover Partner"],
    careerRelevance: "Non-endemic sponsorships require bridging gaming culture with mainstream marketing strategies.",
  },
  {
    term: "Grassroots",
    slug: "grassroots",
    definition: "Community-level esports including amateur tournaments, local events, and university competitions.",
    category: "Community",
    relatedTerms: ["Amateur Scene", "Community Events", "Local Esports"],
    careerRelevance: "Grassroots is often where careers begin, with opportunities to gain experience before going pro.",
  },
  {
    term: "MOBA",
    slug: "moba",
    definition: "Multiplayer Online Battle Arena - a genre including games like League of Legends, Dota 2, and Mobile Legends.",
    category: "Genres",
    relatedTerms: ["League of Legends", "Dota 2", "Arena Game"],
    careerRelevance: "MOBA esports has some of the largest teams and budgets, offering diverse career opportunities.",
  },
  {
    term: "FPS",
    slug: "fps",
    definition: "First-Person Shooter - a genre including games like CS2, Valorant, Call of Duty, and Overwatch.",
    category: "Genres",
    relatedTerms: ["Shooter", "Counter-Strike", "Valorant"],
    careerRelevance: "FPS titles dominate esports viewership and offer numerous professional opportunities.",
  },
  {
    term: "Battle Royale",
    slug: "battle-royale",
    definition: "A genre where many players compete until one remains, including Fortnite, PUBG, and Apex Legends.",
    category: "Genres",
    relatedTerms: ["Fortnite", "PUBG", "Apex Legends"],
    careerRelevance: "Battle royale esports brings unique production challenges and team management requirements.",
  },
];

const categories = [
  "All",
  "General",
  "Roles",
  "Broadcasting",
  "Events",
  "Training",
  "Strategy",
  "Leagues",
  "Content",
  "Competitive",
  "Management",
  "Business",
  "Community",
  "Genres",
];

export default function EsportsGlossaryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Esports Glossary",
    description: "Comprehensive glossary of esports and gaming industry terms",
    url: "https://esportsjobs.quest/esports-glossary",
    hasDefinedTerm: glossaryTerms.map((term) => ({
      "@type": "DefinedTerm",
      name: term.term,
      description: term.definition,
      inDefinedTermSet: "https://esportsjobs.quest/esports-glossary",
    })),
  };

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
              <span className="text-violet-400">Esports Glossary</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Esports{" "}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Glossary
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Essential esports terminology for job seekers and professionals. Understand the
                language of competitive gaming to succeed in your esports career.
              </p>

              <div className="flex items-center gap-4 text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="text-violet-400 font-bold">{glossaryTerms.length}</span> terms defined
                </span>
                <span>|</span>
                <span>{categories.length - 1} categories</span>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-6 border-b border-slate-800 sticky top-0 bg-slate-950/95 backdrop-blur-sm z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    category === "All"
                      ? "bg-violet-600 text-white"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Glossary Terms */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {glossaryTerms.map((item) => (
                <article
                  key={item.slug}
                  id={item.slug}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 scroll-mt-24"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-1">{item.term}</h2>
                      <span className="px-2 py-1 bg-violet-600/20 text-violet-400 text-xs font-medium rounded">
                        {item.category}
                      </span>
                    </div>
                    <a
                      href={`#${item.slug}`}
                      className="text-slate-500 hover:text-violet-400 transition-colors"
                      title="Link to this definition"
                    >
                      #
                    </a>
                  </div>

                  <p className="text-slate-300 text-lg mb-4">{item.definition}</p>

                  {item.relatedTerms && item.relatedTerms.length > 0 && (
                    <div className="mb-4">
                      <span className="text-slate-500 text-sm">Also known as: </span>
                      <span className="text-slate-400 text-sm">{item.relatedTerms.join(", ")}</span>
                    </div>
                  )}

                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-violet-400 mb-2">Career Relevance</h3>
                    <p className="text-slate-400 text-sm">{item.careerRelevance}</p>
                  </div>

                  {item.relatedPage && (
                    <Link
                      href={item.relatedPage}
                      className="inline-flex items-center mt-4 text-violet-400 hover:text-violet-300 text-sm font-medium"
                    >
                      Learn more about {item.term} careers
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Alphabet Quick Jump */}
        <section className="py-8 bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold text-white mb-4">Quick Jump</h2>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(glossaryTerms.map(t => t.term[0].toUpperCase()))).sort().map((letter) => (
                <a
                  key={letter}
                  href={`#${glossaryTerms.find(t => t.term[0].toUpperCase() === letter)?.slug}`}
                  className="w-8 h-8 flex items-center justify-center bg-slate-800 text-slate-300 rounded hover:bg-violet-600 hover:text-white transition-colors text-sm font-medium"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Suggest a Term */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-violet-600/20 to-cyan-600/20 rounded-2xl p-8 border border-slate-700 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Missing a Term?
              </h2>
              <p className="text-slate-300 mb-6">
                Know an esports term that should be in our glossary? Let us know and we&apos;ll add it.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-500 transition-colors"
              >
                Suggest a Term
              </Link>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Career Resources</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link href="/how-to-get-into-esports" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">How to Get Into Esports</h3>
                <p className="text-slate-400 text-sm">Complete career entry guide.</p>
              </Link>
              <Link href="/esports-careers" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Career Paths</h3>
                <p className="text-slate-400 text-sm">Explore different roles.</p>
              </Link>
              <Link href="/esports-salary-guide-uk" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">UK Salary Guide</h3>
                <p className="text-slate-400 text-sm">What roles pay in the UK.</p>
              </Link>
              <Link href="/esports-jobs" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Browse Jobs</h3>
                <p className="text-slate-400 text-sm">Find your next role.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
