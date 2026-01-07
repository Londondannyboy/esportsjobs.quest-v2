import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://esportsjobs.quest/top-esports-companies-uk",
      url: "https://esportsjobs.quest/top-esports-companies-uk",
      name: "Top Esports Companies UK 2025 | Who's Hiring?",
      description: "Directory of top esports companies in the UK. From Fnatic to British Esports, discover who's hiring.",
      isPartOf: { "@id": "https://esportsjobs.quest/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://esportsjobs.quest" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs UK", item: "https://esportsjobs.quest/esports-jobs-uk" },
        { "@type": "ListItem", position: 3, name: "Top Companies", item: "https://esportsjobs.quest/top-esports-companies-uk" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which UK esports companies are currently hiring?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Major UK esports employers regularly hiring include: Fnatic (London, 100+ employees), Excel Esports (London, LEC team), FACEIT (London, gaming platform), Gfinity (London, tournaments), Guild Esports (London, multi-title), and ESL UK (London, events). Belong Gaming Arenas hire across multiple UK locations. Check company career pages and LinkedIn for current openings. Hiring activity varies by season and business needs."
          }
        },
        {
          "@type": "Question",
          name: "What is the company culture like at UK esports organisations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UK esports company cultures tend to be passionate, fast-paced, and results-oriented. Teams are typically smaller than traditional companies, meaning more responsibility and visibility. Work can be demanding around events and competition schedules. Most organisations value creativity, initiative, and deep esports knowledge. Dress codes are casual, but professionalism is expected. Remote and flexible working has become more common since COVID-19."
          }
        },
        {
          "@type": "Question",
          name: "How do I get noticed by UK esports companies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To get noticed: 1) Build a strong online presence demonstrating esports knowledge, 2) Create portfolio work relevant to your target role, 3) Network actively on Twitter, LinkedIn, and Discord, 4) Attend UK esports events like Insomnia, EGX, and local viewing parties, 5) Engage genuinely with company content without being pushy, 6) Apply strategically with tailored applications showing cultural fit. Many roles are filled through connections, so networking is essential."
          }
        },
        {
          "@type": "Question",
          name: "What is the interview process like at UK esports companies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Interview processes typically include: initial screening (CV review, sometimes video intro), first interview (culture fit, background), second interview (skills assessment, often with department head), and sometimes a task or presentation relevant to the role. Expect questions about esports knowledge, specific games, and industry awareness. Processes vary by company size—smaller orgs may be faster, while larger companies have more structured hiring."
          }
        },
        {
          "@type": "Question",
          name: "Do UK esports companies offer relocation support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Relocation support varies. Larger organisations like Fnatic and FACEIT may offer some relocation assistance for senior or specialist roles. Smaller companies typically don't have formal relocation packages but may offer flexibility on start dates. For international candidates, visa sponsorship is available at some companies for in-demand roles. Many UK esports jobs now offer remote options, reducing relocation necessity."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Top Esports Companies UK 🏢 Who's Hiring",
  description: "Directory of top esports companies in the UK. From Fnatic to British Esports, discover who's hiring and where to apply for esports jobs.",
  keywords: "esports companies uk, uk esports organisations, gaming companies hiring uk, esports employers uk",
  alternates: { canonical: "https://esportsjobs.quest/top-esports-companies-uk" },
};

const companies = [
  { name: "Fnatic", type: "Esports Org", location: "London", employees: "100+", games: "LoL, Valorant, CS2", hiring: "Yes" },
  { name: "Excel Esports", type: "Esports Org", location: "London", employees: "30+", games: "LoL (LEC), Valorant", hiring: "Yes" },
  { name: "Guild Esports", type: "Esports Org", location: "London", employees: "20+", games: "Valorant, Rocket League, FIFA", hiring: "Yes" },
  { name: "Gfinity", type: "Tournament Operator", location: "London", employees: "50+", games: "Multiple", hiring: "Yes" },
  { name: "FACEIT", type: "Platform", location: "London", employees: "80+", games: "CS2, Dota 2, Multiple", hiring: "Yes" },
  { name: "British Esports", type: "Governing Body", location: "UK-wide", employees: "20+", games: "All", hiring: "Sometimes" },
  { name: "Wylde Gaming", type: "Esports Org", location: "Manchester", employees: "15+", games: "Rocket League, FIFA", hiring: "Yes" },
  { name: "Team Liquid EU", type: "Esports Org", location: "Remote/EU", employees: "50+", games: "Multiple", hiring: "Yes" },
  { name: "ESL UK", type: "Tournament Operator", location: "London", employees: "30+", games: "Multiple", hiring: "Yes" },
  { name: "Belong Gaming Arenas", type: "Venues", location: "Multiple UK", employees: "100+", games: "All", hiring: "Yes" },
  { name: "Insomnia Gaming Festival", type: "Events", location: "Birmingham", employees: "20+", games: "All", hiring: "Seasonal" },
  { name: "NUEL", type: "University Esports", location: "UK-wide", employees: "10+", games: "Multiple", hiring: "Yes" },
];

export default function TopEsportsCompaniesUK() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-cyan-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs-uk" className="hover:text-white">Esports Jobs UK</Link>
              <span className="mx-2">/</span>
              <span className="text-violet-400">Top Companies</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Top Esports Companies{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Hiring in the UK</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              The UK is home to leading esports organisations, tournament operators, and gaming companies.
              Discover who&apos;s hiring and where to apply.
            </p>
            <Link href="/esports-jobs-uk" className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl inline-block">
              View Open Positions
            </Link>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">UK Esports Companies Directory</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companies.map((company) => (
                <div key={company.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">{company.name}</h3>
                    <span className={`px-2 py-1 rounded text-xs ${company.hiring === "Yes" ? "bg-emerald-600/20 text-emerald-400" : "bg-amber-600/20 text-amber-400"}`}>
                      {company.hiring === "Yes" ? "Hiring" : company.hiring}
                    </span>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p className="text-violet-400">{company.type}</p>
                    <p className="text-slate-400">📍 {company.location}</p>
                    <p className="text-slate-400">👥 {company.employees}</p>
                    <p className="text-slate-500">🎮 {company.games}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-violet-600/20 via-slate-900 to-cyan-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Apply to Top Companies</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs-uk" className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl">Browse Jobs</Link>
              <Link href="/esports-recruitment" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">Recruitment Help</Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
