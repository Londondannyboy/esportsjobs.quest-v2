import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://esportsjobs.quest/esports-salary-guide-usa",
      url: "https://esportsjobs.quest/esports-salary-guide-usa",
      name: "Esports Salary Guide USA 2025 | Gaming Industry Salaries",
      description: "Comprehensive esports and gaming salary guide for the United States. Salary ranges for esports producers, coaches, marketers, and more in 2025.",
      isPartOf: { "@id": "https://esportsjobs.quest/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://esportsjobs.quest" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://esportsjobs.quest/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "USA Salary Guide", item: "https://esportsjobs.quest/esports-salary-guide-usa" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the average esports salary in the USA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "US esports salaries vary widely by role and experience. Entry-level positions start around $45,000-$60,000. Mid-level professionals earn $70,000-$100,000. Senior roles and directors can earn $120,000-$200,000+. Pro players and executives can earn significantly more."
          }
        },
        {
          "@type": "Question",
          name: "Are US esports salaries higher than Europe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, US esports salaries are typically 20-40% higher than equivalent European roles. However, cost of living in major US gaming hubs (LA, NYC) is also higher. When adjusted for cost of living, the gap narrows but US salaries remain competitive."
          }
        },
        {
          "@type": "Question",
          name: "What are the highest paying esports jobs in the USA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Top-paying US esports roles include: VP/Director positions ($150,000-$250,000+), Senior Producers ($100,000-$150,000), Engineering leads ($120,000-$180,000), and Business Development Directors ($110,000-$160,000). Pro players at top tier can earn $200,000-$500,000+ including salary and bonuses."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Esports Salary Guide USA 2025 💰 Gaming Industry Salaries",
  description: "🚀 Complete esports salary guide for the USA. Salary ranges for producers, coaches, marketers, and all esports roles in America 2025.",
  keywords: "esports salary usa, gaming salary america, esports pay, how much do esports jobs pay, us gaming salaries 2025",
  alternates: { canonical: "https://esportsjobs.quest/esports-salary-guide-usa" },
};

const salaryData = [
  { role: "Esports Producer", entry: "$50,000 - $65,000", mid: "$70,000 - $95,000", senior: "$100,000 - $140,000" },
  { role: "Broadcast Director", entry: "$55,000 - $70,000", mid: "$80,000 - $110,000", senior: "$120,000 - $160,000" },
  { role: "Esports Coach", entry: "$45,000 - $60,000", mid: "$65,000 - $90,000", senior: "$95,000 - $150,000" },
  { role: "Marketing Manager", entry: "$50,000 - $65,000", mid: "$75,000 - $100,000", senior: "$110,000 - $150,000" },
  { role: "Community Manager", entry: "$40,000 - $55,000", mid: "$60,000 - $80,000", senior: "$85,000 - $110,000" },
  { role: "Content Producer", entry: "$45,000 - $60,000", mid: "$65,000 - $90,000", senior: "$95,000 - $130,000" },
  { role: "Social Media Manager", entry: "$42,000 - $55,000", mid: "$60,000 - $80,000", senior: "$85,000 - $110,000" },
  { role: "Event Coordinator", entry: "$40,000 - $55,000", mid: "$60,000 - $80,000", senior: "$85,000 - $115,000" },
  { role: "Business Development", entry: "$55,000 - $70,000", mid: "$80,000 - $110,000", senior: "$120,000 - $170,000" },
  { role: "Partnership Manager", entry: "$50,000 - $65,000", mid: "$75,000 - $100,000", senior: "$110,000 - $150,000" },
  { role: "Analyst", entry: "$50,000 - $65,000", mid: "$70,000 - $95,000", senior: "$100,000 - $140,000" },
  { role: "Video Editor", entry: "$40,000 - $55,000", mid: "$60,000 - $80,000", senior: "$85,000 - $115,000" },
];

const executiveSalaries = [
  { role: "VP of Esports", range: "$150,000 - $250,000+" },
  { role: "General Manager", range: "$120,000 - $200,000" },
  { role: "Director of Operations", range: "$110,000 - $160,000" },
  { role: "Head of Content", range: "$100,000 - $150,000" },
];

const proPlayerSalaries = [
  { tier: "Tier 1 (Top Orgs)", range: "$150,000 - $500,000+", notes: "LCS, CDL, OWL starters" },
  { tier: "Tier 2", range: "$60,000 - $150,000", notes: "Academy, Challengers" },
  { tier: "Tier 3", range: "$30,000 - $60,000", notes: "Semi-pro, emerging leagues" },
];

const cityAdjustments = [
  { city: "Los Angeles", adjustment: "Baseline (highest)" },
  { city: "New York", adjustment: "-5% to +5%" },
  { city: "Seattle", adjustment: "-5% to -10%" },
  { city: "Austin", adjustment: "-15% to -20%" },
  { city: "Remote", adjustment: "-10% to -20%" },
];

export default function EsportsSalaryGuideUSA() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Browse Jobs" ctaHref="/esports-jobs" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-transparent to-blue-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-green-400">USA Salary Guide</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">💰</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Esports Salary Guide USA{" "}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">2025</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Comprehensive salary data for esports and gaming professionals in the United States.
              Use this guide to benchmark your compensation and negotiate your next role.
            </p>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 inline-block">
              <p className="text-slate-400 text-sm">
                <span className="text-green-400 font-medium">Last Updated:</span> December 2024 |
                <span className="text-green-400 font-medium ml-2">Data Sources:</span> Industry surveys, job postings, recruiter data
              </p>
            </div>
          </div>
        </section>

        {/* Main Salary Table */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">US Esports Salaries by Role</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-4 px-4 text-slate-400 font-medium">Role</th>
                    <th className="text-center py-4 px-4 text-slate-400 font-medium">Entry Level<br /><span className="text-xs">(0-2 years)</span></th>
                    <th className="text-center py-4 px-4 text-slate-400 font-medium">Mid Level<br /><span className="text-xs">(3-5 years)</span></th>
                    <th className="text-center py-4 px-4 text-slate-400 font-medium">Senior Level<br /><span className="text-xs">(6+ years)</span></th>
                  </tr>
                </thead>
                <tbody>
                  {salaryData.map((item) => (
                    <tr key={item.role} className="border-b border-slate-800">
                      <td className="py-4 px-4 text-white font-medium">{item.role}</td>
                      <td className="py-4 px-4 text-center text-green-400">{item.entry}</td>
                      <td className="py-4 px-4 text-center text-green-400">{item.mid}</td>
                      <td className="py-4 px-4 text-center text-green-400">{item.senior}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-sm mt-4">
              * Salaries in USD. Ranges reflect base salary; total compensation may include bonuses, equity, and benefits.
            </p>
          </div>
        </section>

        {/* Executive Salaries */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Executive & Leadership Salaries</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {executiveSalaries.map((item) => (
                <div key={item.role} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 text-center">
                  <h3 className="text-lg font-bold text-white mb-2">{item.role}</h3>
                  <p className="text-2xl text-green-400 font-bold">{item.range}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pro Player Salaries */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Pro Player Salaries (North America)</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {proPlayerSalaries.map((item) => (
                <div key={item.tier} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-2">{item.tier}</h3>
                  <p className="text-2xl text-green-400 font-bold mb-2">{item.range}</p>
                  <p className="text-slate-400 text-sm">{item.notes}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-sm mt-4">
              * Pro player salaries exclude prize winnings, streaming income, and sponsorships which can significantly increase total earnings.
            </p>
          </div>
        </section>

        {/* City Adjustments */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Salary Adjustments by Location</h2>
            <p className="text-slate-400 mb-6">
              Salaries vary significantly by city due to cost of living. LA typically has the highest salaries but also highest costs.
            </p>
            <div className="grid md:grid-cols-5 gap-4">
              {cityAdjustments.map((item) => (
                <div key={item.city} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
                  <h3 className="text-white font-bold mb-1">{item.city}</h3>
                  <p className="text-slate-400 text-sm">{item.adjustment}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Insights */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Key Salary Insights 2025</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">What&apos;s Driving Salaries Up</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">↑</span>
                    <span>Competition from tech companies for talent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">↑</span>
                    <span>Increased investment in esports operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">↑</span>
                    <span>Specialised skills in high demand</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">↑</span>
                    <span>Remote work expanding candidate pools</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">US vs International</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>US salaries typically 20-40% higher than EU</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>LA/NYC cost of living offsets some advantage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>US benefits less comprehensive than EU</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Remote US roles increasingly available globally</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Related Salary Guides</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/esports-salary-guide-uk" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-2xl">🇬🇧</span>
                <span className="text-white font-medium ml-2">UK Salary Guide</span>
              </Link>
              <Link href="/esports-jobs-usa" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-2xl">🇺🇸</span>
                <span className="text-white font-medium ml-2">USA Jobs</span>
              </Link>
              <Link href="/esports-jobs-remote" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
                <span className="text-2xl">🌍</span>
                <span className="text-white font-medium ml-2">Remote Jobs</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-green-600/20 via-slate-900 to-blue-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Next US Esports Role</h2>
            <p className="text-slate-300 mb-8">Browse opportunities and see what you could be earning.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs-usa" className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl">
                Browse USA Jobs
              </Link>
              <Link href="/esports-jobs" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                All Jobs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
