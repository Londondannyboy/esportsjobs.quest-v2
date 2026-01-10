import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mvp.actor/excel-esports-careers",
      url: "https://mvp.actor/excel-esports-careers",
      name: "Excel Esports Careers & Jobs UK | Work at Excel",
      description: "Find jobs at Excel Esports, the UK's leading League of Legends organisation. Careers in esports, content, marketing, and operations in London.",
      isPartOf: { "@id": "https://mvp.actor/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mvp.actor" },
        { "@type": "ListItem", position: 2, name: "Top Companies UK", item: "https://mvp.actor/top-esports-companies-uk" },
        { "@type": "ListItem", position: 3, name: "Excel Esports", item: "https://mvp.actor/excel-esports-careers" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is it like working at Excel Esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Excel Esports is a UK-based organisation with a professional, growth-oriented culture. As one of the LEC's teams, Excel combines British esports heritage with European competition. The London office offers a dynamic environment focused on building a championship-calibre organisation."
          }
        },
        {
          "@type": "Question",
          name: "What roles are available at Excel Esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Excel hires across Esports Performance (coaches, analysts, team managers, performance staff), Content & Media (video producers, social media, designers), Marketing & Partnerships (brand management, sponsorships, events), and Business Operations (finance, operations, HR). They also run educational esports programmes."
          }
        },
        {
          "@type": "Question",
          name: "Where is Excel Esports located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Excel Esports is headquartered in London, UK. As a British organisation competing in the LEC, they offer opportunities to work in UK esports while being part of the European competitive scene. Some roles may involve travel to Berlin for LEC matches."
          }
        },
        {
          "@type": "Question",
          name: "How do I apply for a job at Excel Esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Check Excel's official website and social channels for current openings. Excel values candidates who are passionate about British esports and can contribute to their growth ambitions. Experience in gaming or esports is valued, along with relevant professional skills."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Excel Esports Careers 🇬🇧 Work at Excel UK",
  description: "🎮 Excel Esports careers - jobs at the UK's LEC team. Coaching, content, marketing & operations roles in London. British esports jobs.",
  keywords: "excel esports careers, excel esports jobs, work at excel, excel esports uk, lec jobs uk",
  alternates: { canonical: "https://mvp.actor/excel-esports-careers" },
};

const departments = [
  { name: "Esports Performance", roles: ["Coaches", "Analysts", "Team Managers", "Performance Staff"] },
  { name: "Content & Media", roles: ["Video Producers", "Social Media", "Designers", "Streamers"] },
  { name: "Marketing & Partnerships", roles: ["Brand Management", "Sponsorships", "Events", "Community"] },
  { name: "Business Operations", roles: ["Finance", "Operations", "HR", "Admin"] },
  { name: "Education & Grassroots", roles: ["Programme Managers", "Coaches", "Event Staff"] },
];

const facts = [
  { label: "Founded", value: "2018" },
  { label: "Headquarters", value: "London, UK" },
  { label: "Competition", value: "LEC" },
  { label: "Main Game", value: "League of Legends" },
  { label: "Country", value: "United Kingdom" },
  { label: "Focus", value: "British Esports" },
];

export default function ExcelEsportsCareers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-transparent to-slate-900" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/top-esports-companies-uk" className="hover:text-white">Top UK Companies</Link>
              <span className="mx-2">/</span>
              <span className="text-green-400">Excel Esports</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Excel Esports Careers:{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">UK&apos;s LEC Team</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Excel Esports is the UK&apos;s representative in the League of Legends EMEA Championship (LEC).
              Based in London, Excel offers unique opportunities to work in British esports while competing
              at the highest European level.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://xl.gg" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl inline-block">
                Excel Esports Website
              </a>
              <Link href="/esports-jobs-uk" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                UK Esports Jobs
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Excel Esports at a Glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {facts.map((fact) => (
                <div key={fact.label} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
                  <div className="text-xl font-bold text-green-400">{fact.value}</div>
                  <div className="text-sm text-slate-400">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Departments at Excel Esports</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept) => (
                <div key={dept.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-3">{dept.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {dept.roles.map((role) => (
                      <span key={role} className="px-2 py-1 bg-green-600/20 text-green-400 text-xs rounded">{role}</span>
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
              <Link href="/guild-esports-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                <span className="text-white font-medium">Guild Esports Careers</span>
                <p className="text-sm text-slate-400 mt-1">David Beckham-backed UK org</p>
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
              <Link href="/esports-jobs-uk" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-colors">
                <span className="text-white font-medium">All UK Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Browse all UK opportunities</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-green-600/20 via-slate-900 to-emerald-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Apply to Excel Esports</h2>
            <p className="text-slate-300 mb-8">Check Excel&apos;s official channels for current UK esports job openings.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://xl.gg" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl">
                Excel Esports
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
