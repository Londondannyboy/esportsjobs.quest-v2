import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://esportsjobs.quest/esports-salary-guide-australia",
      url: "https://esportsjobs.quest/esports-salary-guide-australia",
      name: "Esports Salary Guide Australia 2025 | Gaming Industry Pay",
      description: "Complete guide to esports and gaming salaries in Australia. Salary ranges for Sydney, Melbourne, and Brisbane gaming jobs.",
      isPartOf: { "@id": "https://esportsjobs.quest/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://esportsjobs.quest" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://esportsjobs.quest/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "Australia Salary Guide", item: "https://esportsjobs.quest/esports-salary-guide-australia" }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Esports Salary Guide Australia 2025 | Gaming Industry Pay",
  description: "🚀 Complete guide to esports and gaming salaries in Australia. Salary ranges for Sydney, Melbourne, and Brisbane. ESL Australia, publishers, and orgs.",
  keywords: "esports salary australia, gaming jobs salary sydney, australian esports pay, gaming industry australia wages, melbourne gaming jobs",
  alternates: { canonical: "https://esportsjobs.quest/esports-salary-guide-australia" },
};

const salaryRanges = [
  { role: "Junior Community Manager", entry: "A$55,000 - A$70,000", mid: "A$70,000 - A$85,000", senior: "A$85,000 - A$100,000" },
  { role: "Marketing Manager", entry: "A$60,000 - A$75,000", mid: "A$75,000 - A$100,000", senior: "A$100,000 - A$130,000" },
  { role: "Esports Manager", entry: "A$65,000 - A$80,000", mid: "A$80,000 - A$110,000", senior: "A$110,000 - A$140,000" },
  { role: "Broadcast Producer", entry: "A$55,000 - A$70,000", mid: "A$70,000 - A$95,000", senior: "A$95,000 - A$120,000" },
  { role: "Tournament Organiser", entry: "A$50,000 - A$65,000", mid: "A$65,000 - A$85,000", senior: "A$85,000 - A$110,000" },
  { role: "Business Development", entry: "A$70,000 - A$90,000", mid: "A$90,000 - A$120,000", senior: "A$120,000 - A$160,000" },
  { role: "Content Creator", entry: "A$50,000 - A$65,000", mid: "A$65,000 - A$85,000", senior: "A$85,000 - A$110,000" },
  { role: "Head of Esports", entry: "-", mid: "A$110,000 - A$140,000", senior: "A$140,000 - A$180,000+" },
];

const cityComparison = [
  { city: "Sydney", adjustment: "Base (highest)", notes: "Media hub, publishers, highest cost of living" },
  { city: "Melbourne", adjustment: "-5% to -10%", notes: "Strong gaming scene, lower costs than Sydney" },
  { city: "Brisbane", adjustment: "-10% to -15%", notes: "Growing scene, lower cost of living" },
  { city: "Perth", adjustment: "-10%", notes: "Remote but some opportunities" },
  { city: "Adelaide", adjustment: "-15%", notes: "Smaller scene, developing market" },
];

const employers = [
  { name: "ESL Australia", location: "Sydney", type: "Tournament Operator", salary: "Competitive" },
  { name: "Riot Games OCE", location: "Sydney", type: "Publisher", salary: "Top tier" },
  { name: "Blizzard ANZ", location: "Sydney", type: "Publisher", salary: "Top tier" },
  { name: "EA Australia", location: "Melbourne", type: "Publisher", salary: "Top tier" },
  { name: "Respawn Entertainment", location: "Sydney", type: "Developer", salary: "Above market" },
  { name: "Chiefs Esports", location: "Melbourne", type: "Esports Org", salary: "Market rate" },
  { name: "ORDER", location: "Melbourne", type: "Esports Org", salary: "Market rate" },
  { name: "Pentanet.GG", location: "Perth", type: "Esports Org", salary: "Market rate" },
];

const benefits = [
  "Superannuation (11% employer contribution, mandatory)",
  "4 weeks paid annual leave (minimum)",
  "10 days paid personal/sick leave",
  "Medicare (public health system)",
  "Long service leave (after 7+ years)",
  "Flexible working arrangements",
  "Professional development",
  "Gaming equipment allowance",
];

export default function EsportsSalaryGuideAustralia() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-yellow-500/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-yellow-400">Australia Salary Guide</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">🇦🇺</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Esports Salary Guide Australia{" "}
                <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">2025</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Australia has a vibrant esports scene with strong salaries compared to many markets.
              This guide covers salary ranges across Sydney, Melbourne, and other key cities,
              plus Australian employment benefits and superannuation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs-australia" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-yellow-600 text-white font-semibold rounded-xl">
                Browse Australia Jobs
              </Link>
              <Link href="/esports-salary-guide-usa" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                USA Salary Guide
              </Link>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="py-12 bg-gradient-to-r from-blue-900/30 via-slate-900 to-yellow-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-1">A$75K</div>
                <div className="text-slate-400 text-sm">Average mid-level salary</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-1">11%</div>
                <div className="text-slate-400 text-sm">Super (on top of salary)</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-1">Sydney</div>
                <div className="text-slate-400 text-sm">Media/esports hub</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-1">OCE</div>
                <div className="text-slate-400 text-sm">Regional competitive scene</div>
              </div>
            </div>
          </div>
        </section>

        {/* Salary Table */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Esports Salary Ranges (Annual, Base + Super)</h2>
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
              * Salaries shown are base salary. Add 11% for superannuation (employer-paid retirement contribution).
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
            <h2 className="text-3xl font-bold text-white mb-8">Major Australian Esports Employers</h2>
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
            <h2 className="text-3xl font-bold text-white mb-8">Australian Employment Benefits</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <p className="text-slate-300 mb-6">
                Australia has strong employee protections. Key benefits are mandated by law, with many employers offering additional perks:
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

        {/* Understanding Super */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Understanding Superannuation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">What is Super?</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Mandatory employer pension contribution (11% in 2024)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Paid on top of your base salary</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Goes into a retirement fund (your choice)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Accessible from preservation age (60-67)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Salary vs Package</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span><strong>Base salary:</strong> A$80,000</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span><strong>+ Super (11%):</strong> A$8,800</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span><strong>= Total package:</strong> A$88,800</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">!</span>
                    <span>Always clarify if quoted salary includes or excludes super</span>
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
              <Link href="/esports-salary-guide-germany" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-colors">
                <span className="text-2xl">🇩🇪</span>
                <span className="text-white font-medium ml-2">Germany Salary Guide</span>
              </Link>
              <Link href="/esports-jobs-australia" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
                <span className="text-white font-medium">Australia Jobs</span>
                <p className="text-slate-400 text-xs">Browse current openings</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-600/20 via-slate-900 to-yellow-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Australian Esports Job</h2>
            <p className="text-slate-300 mb-8">Browse esports opportunities in Sydney, Melbourne, and across Australia.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs-australia" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-yellow-600 text-white font-semibold rounded-xl">
                Browse Australia Jobs
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
