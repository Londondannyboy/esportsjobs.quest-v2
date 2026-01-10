import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mvp.actor/esports-jobs-saudi-arabia",
      url: "https://mvp.actor/esports-jobs-saudi-arabia",
      name: "Esports Jobs Saudi Arabia | Gaming Careers in KSA",
      description: "Find esports jobs in Saudi Arabia. Gaming careers at the Esports World Cup, Savvy Games Group, and organisations in the Middle East's biggest gaming market.",
      isPartOf: { "@id": "https://mvp.actor/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mvp.actor" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://mvp.actor/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "Saudi Arabia", item: "https://mvp.actor/esports-jobs-saudi-arabia" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the Esports World Cup?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Esports World Cup is the world's largest esports festival, held annually in Riyadh, Saudi Arabia. EWC 2025 features 2,000+ elite players from 200+ clubs across 100+ countries, competing in 25 tournaments for $70+ million in prize money. The event runs from July to August at Boulevard City in Riyadh."
          }
        },
        {
          "@type": "Question",
          name: "What esports jobs are available in Saudi Arabia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Saudi Arabia is creating 39,000 gaming jobs by 2030 under its National Gaming and Esports Strategy. Roles include tournament production, game development, esports operations, broadcast production, marketing, and business development. The Esports World Cup Foundation, Savvy Games Group, and new studios are actively hiring."
          }
        },
        {
          "@type": "Question",
          name: "How much is Saudi Arabia investing in gaming?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Saudi Arabia's Savvy Games Group is investing $37.8 billion (142 billion riyals) to make the kingdom a global gaming hub. The National Gaming Strategy aims to establish 250 game companies, create 39,000 jobs, and contribute 50 billion riyals to GDP by 2030."
          }
        },
        {
          "@type": "Question",
          name: "Can international professionals work in Saudi esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Saudi Arabia is actively recruiting international talent for its gaming industry. Work visas are available for skilled professionals. The Esports World Cup Foundation employs an international team in Riyadh. Many positions offer competitive tax-free salaries and relocation packages."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Esports Jobs Saudi Arabia 🇸🇦 Gaming Careers in KSA | Esports World Cup",
  description: "🚀 Find esports jobs in Saudi Arabia. Gaming careers at the Esports World Cup, Savvy Games Group. $37B investment creating 39,000 jobs by 2030.",
  keywords: "esports jobs saudi arabia, gaming jobs ksa, esports world cup jobs, savvy games careers, riyadh esports jobs, middle east gaming jobs",
  alternates: { canonical: "https://mvp.actor/esports-jobs-saudi-arabia" },
};

const majorCompanies = [
  { name: "Esports World Cup Foundation", location: "Riyadh", focus: "World's largest esports festival, $70M+ prize pools" },
  { name: "Savvy Games Group", location: "Riyadh", focus: "$37.8B investment fund, game acquisitions" },
  { name: "Steer Studios", location: "Riyadh", focus: "AAA game development studio" },
  { name: "Scopely (Saudi-owned)", location: "Global", focus: "Mobile games developer ($4.9B acquisition)" },
  { name: "NEOM", location: "NEOM", focus: "Future city with gaming & esports focus" },
  { name: "Various International Orgs", location: "Riyadh", focus: "Teams relocating for EWC Club Program" },
];

const roleTypes = [
  "Tournament Director", "Broadcast Producer", "Games Growth Director", "Esports Operations",
  "Event Production", "Game Developer", "Marketing Manager", "Business Development",
  "Content Producer", "Community Manager", "Talent Manager", "Partnership Manager",
  "Technical Director", "Observer", "Shoutcaster", "Stage Manager"
];

const keyStats = [
  { stat: "$37.8B", label: "Savvy Games Group investment" },
  { stat: "39,000", label: "Gaming jobs target by 2030" },
  { stat: "$70M+", label: "EWC 2025 prize pool" },
  { stat: "250", label: "Game companies target" },
];

export default function EsportsJobsSaudiArabia() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-transparent to-green-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-green-400">Saudi Arabia</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">🇸🇦</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Esports Jobs Saudi Arabia:{" "}
                <span className="bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent">The New Global Hub</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Saudi Arabia is transforming into the world&apos;s biggest esports destination. With $37.8 billion
              in gaming investment, the Esports World Cup, and plans to create 39,000 jobs by 2030,
              the Kingdom offers unprecedented opportunities in competitive gaming.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <a href="https://esportsworldcupfoundation.recruitee.com/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                EWC Foundation Jobs →
              </a>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="py-12 bg-gradient-to-r from-green-900/30 via-slate-900 to-green-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {keyStats.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-green-400 mb-1">{item.stat}</div>
                  <div className="text-slate-400 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Esports World Cup Section */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">The Esports World Cup</h2>
            <p className="text-slate-400 mb-8 max-w-3xl">
              The world&apos;s largest esports festival, held annually in Riyadh. EWC 2025 runs July 7 - August 24
              at Boulevard City, featuring 25 tournaments across 24 games.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-green-500/30">
                <h3 className="text-xl font-bold text-white mb-3">Scale</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• 2,000+ elite players</li>
                  <li>• 200+ clubs from 100+ countries</li>
                  <li>• 25 tournaments, 24 games</li>
                  <li>• $70M+ total prize pool</li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-green-500/30">
                <h3 className="text-xl font-bold text-white mb-3">Jobs Created</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Tournament production</li>
                  <li>• Broadcast & content</li>
                  <li>• Event operations</li>
                  <li>• Year-round EWCF roles</li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-green-500/30">
                <h3 className="text-xl font-bold text-white mb-3">Club Program</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• $20M club partner program</li>
                  <li>• Up to $1M per club</li>
                  <li>• 40 participating clubs</li>
                  <li>• Long-term employment focus</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Major Companies */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Major Saudi Gaming Employers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {majorCompanies.map((company) => (
                <div key={company.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{company.name}</h3>
                  <p className="text-xs text-green-400">{company.location}</p>
                  <p className="text-sm text-slate-400 mt-1">{company.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Role Types */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Types of Saudi Esports Roles</h2>
            <div className="flex flex-wrap gap-3">
              {roleTypes.map((role) => (
                <span key={role} className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why Saudi Arabia */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Why Work in Saudi Esports?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">The Opportunity</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>$37.8 billion gaming investment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>World&apos;s largest esports events</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Tax-free salaries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>39,000 new jobs by 2030</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Ground-floor opportunity in growing market</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">For International Talent</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Work visas actively sponsored</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Competitive relocation packages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>International teams at EWCF</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>English widely used in gaming industry</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Other Regions */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Explore Other Regions</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link href="/esports-jobs-dubai" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
                <span className="text-2xl">🇦🇪</span>
                <span className="text-white font-medium ml-2">Dubai Jobs</span>
              </Link>
              <Link href="/esports-jobs-usa" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-2xl">🇺🇸</span>
                <span className="text-white font-medium ml-2">USA Jobs</span>
              </Link>
              <Link href="/esports-jobs-germany" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-colors">
                <span className="text-2xl">🇩🇪</span>
                <span className="text-white font-medium ml-2">Germany Jobs</span>
              </Link>
              <Link href="/esports-jobs-singapore" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
                <span className="text-2xl">🇸🇬</span>
                <span className="text-white font-medium ml-2">Singapore Jobs</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-green-600/20 via-slate-900 to-green-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Saudi Arabia Esports Job</h2>
            <p className="text-slate-300 mb-8">Browse opportunities in the world&apos;s fastest-growing esports market.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <a href="https://esportsworldcupfoundation.recruitee.com/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                EWC Foundation Careers →
              </a>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
