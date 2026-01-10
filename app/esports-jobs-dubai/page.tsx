import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mvp.actor/esports-jobs-dubai",
      url: "https://mvp.actor/esports-jobs-dubai",
      name: "Esports Jobs Dubai & UAE | Gaming Careers in Emirates",
      description: "Find esports jobs in Dubai and the UAE. Gaming careers at Galaxy Racer, YaLLa Esports, and organisations in the Middle East's gaming hub.",
      isPartOf: { "@id": "https://mvp.actor/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mvp.actor" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://mvp.actor/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "Dubai", item: "https://mvp.actor/esports-jobs-dubai" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the esports scene like in Dubai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dubai is a major esports hub in the Middle East, hosting international tournaments and home to organisations like Galaxy Racer and YaLLa Esports. The UAE government supports gaming through initiatives and events. Dubai's position as a global business hub makes it attractive for esports companies expanding into the MENA region."
          }
        },
        {
          "@type": "Question",
          name: "What esports companies are in Dubai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dubai hosts Galaxy Racer (one of the world's largest esports organisations), YaLLa Esports, Nigma Galaxy, and regional operations of international companies. Gaming cafes, tournament operators, and content studios are also based in Dubai and Abu Dhabi."
          }
        },
        {
          "@type": "Question",
          name: "Are esports salaries tax-free in Dubai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, the UAE has no personal income tax, making Dubai attractive for esports professionals. Salaries are paid tax-free, which significantly increases take-home pay compared to many Western countries. This, combined with the lifestyle, attracts international talent."
          }
        },
        {
          "@type": "Question",
          name: "Can international professionals work in UAE esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Dubai actively welcomes international talent. Work visas are straightforward for skilled professionals with employer sponsorship. Many esports companies in Dubai employ international teams. English is widely used as the business language."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Esports Jobs Dubai & UAE 🇦🇪 Gaming Careers in Emirates",
  description: "🚀 Find esports jobs in Dubai and UAE. Gaming careers at Galaxy Racer, YaLLa Esports. Tax-free salaries in the Middle East gaming hub.",
  keywords: "esports jobs dubai, gaming jobs uae, esports careers dubai, galaxy racer jobs, middle east esports jobs, abu dhabi gaming",
  alternates: { canonical: "https://mvp.actor/esports-jobs-dubai" },
};

const majorCompanies = [
  { name: "Galaxy Racer", location: "Dubai", focus: "Global esports org, content creators" },
  { name: "YaLLa Esports", location: "Dubai", focus: "MENA esports organisation" },
  { name: "Nigma Galaxy", location: "Dubai", focus: "Dota 2, esports org" },
  { name: "E7 Esports", location: "Abu Dhabi", focus: "UAE-based esports org" },
  { name: "Nasr Esports", location: "UAE", focus: "Multi-game esports org" },
  { name: "Gaming Events Companies", location: "Dubai", focus: "Tournament operators, production" },
];

const roleTypes = [
  "Esports Manager", "Content Creator", "Tournament Organiser", "Marketing Manager",
  "Community Manager", "Social Media Manager", "Video Producer", "Broadcast Producer",
  "Team Manager", "Business Development", "Partnership Manager", "Event Coordinator"
];

const benefits = [
  "Tax-free salaries",
  "Modern infrastructure",
  "Global business hub",
  "Growing esports investment",
  "Year-round events",
  "High quality of life",
  "English-speaking environment",
  "Strategic MENA location",
];

export default function EsportsJobsDubai() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-green-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-red-400">Dubai & UAE</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">🇦🇪</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Esports Jobs Dubai & UAE:{" "}
                <span className="bg-gradient-to-r from-red-400 via-white to-green-400 bg-clip-text text-transparent">Middle East Gaming Hub</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Dubai and the UAE are emerging as major esports destinations. Home to Galaxy Racer,
              YaLLa Esports, and growing tournament infrastructure, the Emirates offer tax-free
              opportunities in a rapidly expanding market.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-red-600 to-green-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-jobs-saudi-arabia" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Saudi Arabia Jobs
              </Link>
            </div>
          </div>
        </section>

        {/* Major Companies */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">UAE Esports Organisations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {majorCompanies.map((company) => (
                <div key={company.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{company.name}</h3>
                  <p className="text-xs text-red-400">{company.location}</p>
                  <p className="text-sm text-slate-400 mt-1">{company.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Role Types */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Types of Dubai Esports Roles</h2>
            <div className="flex flex-wrap gap-3">
              {roleTypes.map((role) => (
                <span key={role} className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why Dubai */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Why Work in Dubai Esports?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <span className="text-red-400 mr-2">✓</span>
                  <span className="text-slate-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dubai vs Saudi */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Dubai vs Saudi Arabia for Esports</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-red-500/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>🇦🇪</span> Dubai/UAE
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Established esports orgs (Galaxy Racer)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Global business hub infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>More developed expat community</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Mature tournament scene</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-green-500/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>🇸🇦</span> Saudi Arabia
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Massive investment ($37.8B)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Esports World Cup (world&apos;s largest)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>39,000 new jobs by 2030</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Ground-floor opportunity</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-slate-400 mt-6 text-center">
              Both markets are growing rapidly. Dubai offers maturity; Saudi offers scale.
              Many professionals work across both markets.
            </p>
          </div>
        </section>

        {/* Other Regions */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Explore Other Regions</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link href="/esports-jobs-saudi-arabia" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
                <span className="text-2xl">🇸🇦</span>
                <span className="text-white font-medium ml-2">Saudi Arabia</span>
              </Link>
              <Link href="/esports-jobs-usa" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-2xl">🇺🇸</span>
                <span className="text-white font-medium ml-2">USA Jobs</span>
              </Link>
              <Link href="/esports-jobs-uk" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-2xl">🇬🇧</span>
                <span className="text-white font-medium ml-2">UK Jobs</span>
              </Link>
              <Link href="/esports-jobs-singapore" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
                <span className="text-2xl">🇸🇬</span>
                <span className="text-white font-medium ml-2">Singapore Jobs</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-red-600/20 via-slate-900 to-green-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Dubai Esports Job</h2>
            <p className="text-slate-300 mb-8">Browse tax-free opportunities in the Middle East gaming market.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-red-600 to-green-600 text-white font-semibold rounded-xl">
                Browse All Jobs
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
