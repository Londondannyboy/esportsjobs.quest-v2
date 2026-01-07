import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://esportsjobs.quest/esports-jobs-sweden",
      url: "https://esportsjobs.quest/esports-jobs-sweden",
      name: "Esports Jobs Sweden | Gaming Careers in Sverige",
      description: "Find esports jobs in Sweden. Gaming careers at Paradox, DICE, Mojang, and Nordic esports organisations in Stockholm and beyond.",
      isPartOf: { "@id": "https://esportsjobs.quest/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://esportsjobs.quest" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://esportsjobs.quest/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "Sweden", item: "https://esportsjobs.quest/esports-jobs-sweden" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What gaming companies are in Sweden?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sweden is a global gaming powerhouse. Major studios include DICE (Battlefield), Mojang (Minecraft), Paradox Interactive, King (Candy Crush), Avalanche Studios, and Embark Studios. Stockholm is one of the world's top gaming hubs, producing more successful games per capita than almost anywhere else."
          }
        },
        {
          "@type": "Question",
          name: "What is the esports scene like in Sweden?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sweden has a legendary esports history, particularly in Counter-Strike. Teams like Ninjas in Pyjamas, Fnatic, and Alliance have Swedish roots. DreamHack, one of the world's largest esports festivals, originated in Sweden. The country has strong government support for gaming and esports."
          }
        },
        {
          "@type": "Question",
          name: "Can international professionals work in Swedish gaming?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Sweden welcomes international talent. EU citizens have freedom of movement. Non-EU professionals can obtain work permits with employer sponsorship. English is widely spoken in the Swedish gaming industry, making it accessible for international hires."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Esports Jobs Sweden 🇸🇪 Gaming Careers in Stockholm",
  description: "🚀 Find esports jobs in Sweden. Gaming careers at DICE, Mojang, Paradox, King. Stockholm is a global gaming hub.",
  keywords: "esports jobs sweden, gaming jobs stockholm, dice careers, mojang jobs, paradox interactive careers, swedish esports jobs",
  alternates: { canonical: "https://esportsjobs.quest/esports-jobs-sweden" },
};

const majorCompanies = [
  { name: "DICE", location: "Stockholm", focus: "Battlefield franchise, EA studio" },
  { name: "Mojang Studios", location: "Stockholm", focus: "Minecraft (Microsoft)" },
  { name: "Paradox Interactive", location: "Stockholm", focus: "Strategy games, Crusader Kings" },
  { name: "King", location: "Stockholm", focus: "Candy Crush (Activision Blizzard)" },
  { name: "Avalanche Studios", location: "Stockholm", focus: "Just Cause, Mad Max" },
  { name: "Embark Studios", location: "Stockholm", focus: "Founded by ex-DICE veterans" },
  { name: "Starbreeze", location: "Stockholm", focus: "Payday franchise" },
  { name: "Fatshark", location: "Stockholm", focus: "Warhammer: Vermintide, Darktide" },
];

const esportsOrgs = [
  { name: "Ninjas in Pyjamas", focus: "Legendary Swedish esports org" },
  { name: "Fnatic", focus: "Founded in London, Swedish CS:GO roots" },
  { name: "Alliance", focus: "Swedish Dota 2 champions" },
  { name: "DreamHack", focus: "World's largest gaming festival, Swedish origin" },
];

const roleTypes = [
  "Game Developer", "Game Designer", "Producer", "QA Engineer",
  "Esports Manager", "Community Manager", "Marketing Manager", "Content Creator",
  "Live Ops Manager", "Data Analyst", "UI/UX Designer", "Sound Designer"
];

export default function EsportsJobsSweden() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-yellow-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-blue-400">Sweden</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">🇸🇪</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Esports Jobs Sweden:{" "}
                <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">Gaming Powerhouse</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Sweden punches far above its weight in gaming. Home to Minecraft, Battlefield, Candy Crush,
              and legendary esports teams, Stockholm produces more successful games per capita than almost
              anywhere on Earth. Discover opportunities in one of gaming&apos;s most innovative markets.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-yellow-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-jobs-germany" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Germany Jobs
              </Link>
            </div>
          </div>
        </section>

        {/* Sweden's Gaming Legacy */}
        <section className="py-12 bg-gradient-to-r from-blue-900/30 via-slate-900 to-yellow-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-black text-blue-400 mb-1">Minecraft</div>
                <div className="text-slate-400 text-sm">World&apos;s best-selling game</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-blue-400 mb-1">Battlefield</div>
                <div className="text-slate-400 text-sm">AAA franchise</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-blue-400 mb-1">DreamHack</div>
                <div className="text-slate-400 text-sm">World&apos;s largest LAN</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-blue-400 mb-1">NiP</div>
                <div className="text-slate-400 text-sm">Esports legends</div>
              </div>
            </div>
          </div>
        </section>

        {/* Major Companies */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Major Swedish Gaming Studios</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {majorCompanies.map((company) => (
                <div key={company.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{company.name}</h3>
                  <p className="text-xs text-blue-400">{company.location}</p>
                  <p className="text-sm text-slate-400 mt-1">{company.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Esports Organisations */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Swedish Esports Legacy</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {esportsOrgs.map((org) => (
                <div key={org.name} className="bg-slate-800/50 rounded-xl p-4 border border-yellow-500/30">
                  <h3 className="text-lg font-bold text-white">{org.name}</h3>
                  <p className="text-sm text-slate-400 mt-1">{org.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Role Types */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Types of Swedish Gaming Roles</h2>
            <div className="flex flex-wrap gap-3">
              {roleTypes.map((role) => (
                <span key={role} className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why Sweden */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Why Work in Swedish Gaming?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">The Opportunity</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>World-class studios (DICE, Mojang, Paradox)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Strong work-life balance culture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Excellent employee benefits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>High quality of life</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Innovation-focused culture</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">For International Talent</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>EU citizens: No visa required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>English widely spoken in industry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Work permit sponsorship available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>International studio culture</span>
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
              <Link href="/esports-jobs-germany" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-colors">
                <span className="text-2xl">🇩🇪</span>
                <span className="text-white font-medium ml-2">Germany Jobs</span>
              </Link>
              <Link href="/esports-jobs-uk" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-2xl">🇬🇧</span>
                <span className="text-white font-medium ml-2">UK Jobs</span>
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

        <section className="py-20 bg-gradient-to-r from-blue-600/20 via-slate-900 to-yellow-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Swedish Gaming Job</h2>
            <p className="text-slate-300 mb-8">Browse opportunities at world-class studios in Stockholm and beyond.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-yellow-600 text-white font-semibold rounded-xl">
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
