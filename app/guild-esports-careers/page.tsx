import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://esportsjobs.quest/guild-esports-careers",
      url: "https://esportsjobs.quest/guild-esports-careers",
      name: "Guild Esports Careers & Jobs UK | Work at Guild",
      description: "Find jobs at Guild Esports, the David Beckham-backed UK esports organisation. Careers in esports, content, marketing, and academy programmes.",
      isPartOf: { "@id": "https://esportsjobs.quest/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://esportsjobs.quest" },
        { "@type": "ListItem", position: 2, name: "Top Companies UK", item: "https://esportsjobs.quest/top-esports-companies-uk" },
        { "@type": "ListItem", position: 3, name: "Guild Esports", item: "https://esportsjobs.quest/guild-esports-careers" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is it like working at Guild Esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Guild Esports offers a unique blend of traditional sports professionalism and esports innovation. Co-owned by David Beckham, Guild brings a sports-first approach to competitive gaming. The UK-based organisation emphasises player development, academy programmes, and building sustainable careers in esports."
          }
        },
        {
          "@type": "Question",
          name: "What roles are available at Guild Esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Guild hires across Esports Performance (coaches, analysts, team managers, academy staff), Content & Media (video production, social media, streaming), Marketing & Partnerships (brand management, sponsorships, events), Academy & Education (youth development, coaching programmes), and Business Operations (finance, HR, operations)."
          }
        },
        {
          "@type": "Question",
          name: "Where is Guild Esports located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Guild Esports is headquartered in London, UK. As a publicly traded company on the London Stock Exchange, Guild offers opportunities in a professionally structured esports environment. Some roles are remote-friendly while others require London presence."
          }
        },
        {
          "@type": "Question",
          name: "How do I apply for a job at Guild Esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Check Guild's official website and LinkedIn for current openings. Guild values candidates who align with their vision of professionalising esports. Experience in sports, gaming, or relevant business fields is valued. Their academy programmes also offer pathways into esports careers."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Guild Esports Careers 🏰 Work at Guild UK",
  description: "🎮 Guild Esports careers - jobs at David Beckham's UK esports org. Coaching, content, academy & operations roles in London.",
  keywords: "guild esports careers, guild esports jobs, work at guild, david beckham esports, guild esports uk",
  alternates: { canonical: "https://esportsjobs.quest/guild-esports-careers" },
};

const departments = [
  { name: "Esports Performance", roles: ["Coaches", "Analysts", "Team Managers", "Academy Staff"] },
  { name: "Content & Media", roles: ["Video Producers", "Social Media", "Streaming", "Design"] },
  { name: "Marketing & Partnerships", roles: ["Brand Management", "Sponsorships", "Events", "PR"] },
  { name: "Academy & Education", roles: ["Youth Coaches", "Programme Managers", "Scouts"] },
  { name: "Business Operations", roles: ["Finance", "HR", "Legal", "Investor Relations"] },
];

const facts = [
  { label: "Founded", value: "2020" },
  { label: "Headquarters", value: "London, UK" },
  { label: "Co-Owner", value: "David Beckham" },
  { label: "Games", value: "Valorant, Rocket League, FC" },
  { label: "Listed", value: "London Stock Exchange" },
  { label: "Focus", value: "Academy & Pro Teams" },
];

export default function GuildEsportsCareers() {
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
              <Link href="/top-esports-companies-uk" className="hover:text-white">Top UK Companies</Link>
              <span className="mx-2">/</span>
              <span className="text-purple-400">Guild Esports</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Guild Esports Careers:{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Join the Guild</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Guild Esports, co-owned by David Beckham, is bringing professional sports standards to UK esports.
              With competitive teams in Valorant, Rocket League, and FC, plus industry-leading academy programmes,
              Guild offers unique career paths in British esports.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://guildesports.com/careers" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl inline-block">
                Guild Esports Careers
              </a>
              <Link href="/esports-jobs-uk" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                UK Esports Jobs
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Guild Esports at a Glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {facts.map((fact) => (
                <div key={fact.label} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
                  <div className="text-xl font-bold text-purple-400">{fact.value}</div>
                  <div className="text-sm text-slate-400">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Departments at Guild Esports</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept) => (
                <div key={dept.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-3">{dept.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {dept.roles.map((role) => (
                      <span key={role} className="px-2 py-1 bg-purple-600/20 text-purple-400 text-xs rounded">{role}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">More UK Esports Careers</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/fnatic-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-colors">
                <span className="text-white font-medium">Fnatic Careers</span>
                <p className="text-sm text-slate-400 mt-1">Jobs at the legendary UK esports org</p>
              </Link>
              <Link href="/excel-esports-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
                <span className="text-white font-medium">Excel Esports Careers</span>
                <p className="text-sm text-slate-400 mt-1">UK&apos;s LEC team in London</p>
              </Link>
              <Link href="/british-esports-jobs" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-white font-medium">British Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Roles at British Esports Federation</p>
              </Link>
              <Link href="/esports-jobs-london" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
                <span className="text-white font-medium">London Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">All esports roles in London</p>
              </Link>
              <Link href="/esports-coach-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-white font-medium">Esports Coach Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Coaching roles across all games</p>
              </Link>
              <Link href="/entry-level-esports-jobs-uk" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-colors">
                <span className="text-white font-medium">Entry Level Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Start your esports career</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-purple-600/20 via-slate-900 to-pink-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Apply to Guild Esports</h2>
            <p className="text-slate-300 mb-8">Check Guild&apos;s official channels for current UK esports job openings.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://guildesports.com/careers" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl">
                Guild Esports Careers
              </a>
              <Link href="/esports-jobs-uk" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                All UK Esports Jobs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
