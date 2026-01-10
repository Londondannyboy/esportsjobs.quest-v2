import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mvp.actor/esports-salary-guide-germany",
      url: "https://mvp.actor/esports-salary-guide-germany",
      name: "Esports Salary Guide Germany 2025 | Gaming Industry Pay",
      description: "Complete guide to esports and gaming salaries in Germany. Salary ranges for Berlin, Cologne, and Hamburg gaming jobs.",
      isPartOf: { "@id": "https://mvp.actor/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mvp.actor" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://mvp.actor/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "Germany Salary Guide", item: "https://mvp.actor/esports-salary-guide-germany" }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Esports Salary Guide Germany 2025 | Gaming Industry Pay",
  description: "🚀 Complete guide to esports and gaming salaries in Germany. Salary ranges for Berlin, Cologne, and Hamburg. ESL, Freaks 4U, and publisher roles.",
  keywords: "esports salary germany, gaming jobs salary berlin, esl salary, german esports pay, gaming industry germany wages",
  alternates: { canonical: "https://mvp.actor/esports-salary-guide-germany" },
};

const salaryRanges = [
  { role: "Junior Community Manager", entry: "€30,000 - €38,000", mid: "€38,000 - €48,000", senior: "€48,000 - €60,000" },
  { role: "Marketing Manager", entry: "€35,000 - €45,000", mid: "€45,000 - €60,000", senior: "€60,000 - €80,000" },
  { role: "Esports Manager", entry: "€38,000 - €48,000", mid: "€48,000 - €65,000", senior: "€65,000 - €90,000" },
  { role: "Broadcast Producer", entry: "€32,000 - €42,000", mid: "€42,000 - €58,000", senior: "€58,000 - €75,000" },
  { role: "Tournament Organiser", entry: "€30,000 - €40,000", mid: "€40,000 - €55,000", senior: "€55,000 - €70,000" },
  { role: "Business Development", entry: "€40,000 - €50,000", mid: "€50,000 - €70,000", senior: "€70,000 - €100,000" },
  { role: "Content Creator", entry: "€28,000 - €35,000", mid: "€35,000 - €50,000", senior: "€50,000 - €70,000" },
  { role: "Head of Esports", entry: "-", mid: "€70,000 - €90,000", senior: "€90,000 - €130,000+" },
];

const cityComparison = [
  { city: "Berlin", adjustment: "Base", notes: "Tech hub, many startups, highest cost of living" },
  { city: "Cologne", adjustment: "-5% to -10%", notes: "ESL HQ, strong esports scene, lower costs" },
  { city: "Hamburg", adjustment: "-5%", notes: "Media hub, established companies" },
  { city: "Frankfurt", adjustment: "+5%", notes: "Finance hub, some gaming offices" },
  { city: "Munich", adjustment: "+5% to +10%", notes: "Higher salaries but high cost of living" },
];

const employers = [
  { name: "ESL (now part of Savvy Gaming)", location: "Cologne", type: "Tournament Operator", salary: "Above market" },
  { name: "Freaks 4U Gaming", location: "Berlin", type: "Esports Agency", salary: "Competitive" },
  { name: "Riot Games Germany", location: "Berlin", type: "Publisher", salary: "Top tier" },
  { name: "EA Germany", location: "Cologne", type: "Publisher", salary: "Top tier" },
  { name: "Ubisoft Blue Byte", location: "Düsseldorf", type: "Developer/Publisher", salary: "Competitive" },
  { name: "BIG (Berlin International Gaming)", location: "Berlin", type: "Esports Org", salary: "Market rate" },
  { name: "SK Gaming", location: "Cologne", type: "Esports Org", salary: "Market rate" },
  { name: "STARK Esports", location: "Germany", type: "Esports Agency", salary: "Competitive" },
];

const benefits = [
  "30 days paid holiday (standard in Germany)",
  "Health insurance (mandatory, employer contributes ~7.5%)",
  "Pension contributions (~9.3% employer share)",
  "13th month salary (common but not mandatory)",
  "Public transport subsidies (Jobticket)",
  "Home office allowance",
  "Professional development budget",
  "Gaming equipment",
];

export default function EsportsSalaryGuideGermany() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-red-600/20 to-yellow-500/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-yellow-400">Germany Salary Guide</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">🇩🇪</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Esports Salary Guide Germany{" "}
                <span className="bg-gradient-to-r from-black via-red-400 to-yellow-400 bg-clip-text text-transparent">2025</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Germany is the heart of European esports, home to ESL and a thriving gaming industry.
              This guide covers salary ranges across Berlin, Cologne, Hamburg, and other key cities,
              plus German employment benefits and what to expect from employers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs-germany" className="px-8 py-4 bg-gradient-to-r from-black to-red-600 text-white font-semibold rounded-xl">
                Browse Germany Jobs
              </Link>
              <Link href="/esports-salary-guide-uk" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                UK Salary Guide
              </Link>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="py-12 bg-gradient-to-r from-black/30 via-slate-900 to-yellow-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-1">€45K</div>
                <div className="text-slate-400 text-sm">Average entry salary</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-1">30</div>
                <div className="text-slate-400 text-sm">Days holiday standard</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-1">Cologne</div>
                <div className="text-slate-400 text-sm">Esports hub (ESL)</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-1">Berlin</div>
                <div className="text-slate-400 text-sm">Gaming startups</div>
              </div>
            </div>
          </div>
        </section>

        {/* Salary Table */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Esports Salary Ranges (Annual, Gross)</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-slate-800/50 rounded-xl border border-slate-700">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-4 text-slate-300 font-semibold">Role</th>
                    <th className="text-center p-4 text-slate-300 font-semibold">Entry (0-2 yrs)</th>
                    <th className="text-center p-4 text-slate-300 font-semibold">Mid (2-5 yrs)</th>
                    <th className="text-center p-4 text-slate-300 font-semibold">Senior (5+ yrs)</th>
                  </tr>
                </thead>
                <tbody>
                  {salaryRanges.map((row) => (
                    <tr key={row.role} className="border-b border-slate-700/50">
                      <td className="p-4 text-white font-medium">{row.role}</td>
                      <td className="text-center p-4 text-slate-300">{row.entry}</td>
                      <td className="text-center p-4 text-yellow-400">{row.mid}</td>
                      <td className="text-center p-4 text-emerald-400">{row.senior}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              * Salaries are gross annual amounts. Net pay in Germany is typically 55-65% of gross after tax and social contributions.
            </p>
          </div>
        </section>

        {/* City Comparison */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Salary by City</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cityComparison.map((city) => (
                <div key={city.city} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{city.city}</h3>
                  <p className="text-yellow-400 text-sm">{city.adjustment}</p>
                  <p className="text-sm text-slate-400 mt-2">{city.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Major Employers */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Major German Esports Employers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {employers.map((emp) => (
                <div key={emp.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{emp.name}</h3>
                  <p className="text-xs text-yellow-400">{emp.location}</p>
                  <p className="text-sm text-slate-400 mt-1">{emp.type}</p>
                  <p className="text-xs text-emerald-400 mt-2">Pay: {emp.salary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">German Employment Benefits</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <p className="text-slate-300 mb-6">
                Germany has strong employee protections and mandatory benefits. Most esports and gaming companies offer additional perks:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <span className="text-yellow-400">✓</span>
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Negotiation Tips */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Salary Negotiation in Germany</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">German Specifics</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Salaries discussed as annual gross (Brutto)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Ask about 13th month salary bonus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Home office days are common to negotiate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Company car less common in esports than in other industries</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Tips</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Research cost of living in specific city</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Publishers pay significantly more than esports orgs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>German language skills increase salary potential</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Consider total package including benefits</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">More Salary Guides</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link href="/esports-salary-guide-uk" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-2xl">🇬🇧</span>
                <span className="text-white font-medium ml-2">UK Salary Guide</span>
              </Link>
              <Link href="/esports-salary-guide-usa" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-2xl">🇺🇸</span>
                <span className="text-white font-medium ml-2">USA Salary Guide</span>
              </Link>
              <Link href="/esports-jobs-germany" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-colors">
                <span className="text-white font-medium">Germany Jobs</span>
                <p className="text-slate-400 text-xs">Browse current openings</p>
              </Link>
              <Link href="/esports-jobs" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                <span className="text-white font-medium">All Esports Jobs</span>
                <p className="text-slate-400 text-xs">Global opportunities</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-black/20 via-slate-900 to-yellow-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your German Esports Job</h2>
            <p className="text-slate-300 mb-8">Browse esports opportunities in Berlin, Cologne, and across Germany.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs-germany" className="px-8 py-4 bg-gradient-to-r from-black to-red-600 text-white font-semibold rounded-xl">
                Browse Germany Jobs
              </Link>
              <Link href="/esports-jobs-remote" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Remote Jobs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
