import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://esportsjobs.quest/esports-jobs-canada",
      url: "https://esportsjobs.quest/esports-jobs-canada",
      name: "Esports Jobs Canada | Gaming Careers in Canada",
      description: "Find esports jobs in Canada. Gaming careers in Vancouver, Toronto, and Montreal at major studios and esports organisations.",
      isPartOf: { "@id": "https://esportsjobs.quest/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://esportsjobs.quest" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://esportsjobs.quest/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "Canada", item: "https://esportsjobs.quest/esports-jobs-canada" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where are the best cities for esports jobs in Canada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vancouver is Canada's gaming capital with EA, Activision studios, and the Overwatch League team. Toronto has a growing esports scene with esports organisations and media companies. Montreal has strong game development with Ubisoft and indie studios."
          }
        },
        {
          "@type": "Question",
          name: "What esports companies are in Canada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Major Canadian esports employers include EA Vancouver, Activision studios, Ubisoft Montreal, and esports organisations. OverActive Media owns the Toronto Defiant (OWL) and Toronto Ultra (CDL). Vancouver Titans and other regional organisations also operate in Canada."
          }
        },
        {
          "@type": "Question",
          name: "Is it easy to get esports work visa in Canada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Canada has relatively accessible immigration programs for skilled workers. The Global Talent Stream can provide fast-track work permits for in-demand tech and gaming roles. Working Holiday Visas are available for many nationalities. Canada is known for welcoming international talent."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Esports Jobs Canada 🇨🇦 Gaming Careers in Canada",
  description: "🚀 Find esports jobs in Canada. Gaming careers in Vancouver, Toronto, Montreal at major studios and esports organisations.",
  keywords: "esports jobs canada, gaming jobs vancouver, esports jobs toronto, ea canada careers, canadian esports jobs",
  alternates: { canonical: "https://esportsjobs.quest/esports-jobs-canada" },
};

const majorCities = [
  { name: "Vancouver", province: "BC", description: "Gaming capital - EA, Activision studios" },
  { name: "Toronto", province: "ON", description: "Esports media, OWL & CDL teams" },
  { name: "Montreal", province: "QC", description: "Ubisoft HQ, indie scene" },
  { name: "Edmonton", province: "AB", description: "BioWare HQ, growing scene" },
];

const majorCompanies = [
  { name: "EA Vancouver", location: "Vancouver", focus: "EA Sports, FIFA, NHL" },
  { name: "Activision", location: "Vancouver", focus: "Call of Duty development" },
  { name: "Ubisoft Montreal", location: "Montreal", focus: "Assassin's Creed, Rainbow Six" },
  { name: "OverActive Media", location: "Toronto", focus: "Toronto Defiant, Toronto Ultra" },
  { name: "BioWare", location: "Edmonton", focus: "Mass Effect, Dragon Age" },
  { name: "Behaviour Interactive", location: "Montreal", focus: "Dead by Daylight" },
];

const roleTypes = [
  "Game Developer", "Esports Producer", "Community Manager", "Marketing Manager",
  "Content Creator", "Video Editor", "Tournament Organiser", "Team Manager",
  "Broadcast Producer", "Social Media Manager", "Business Development"
];

export default function EsportsJobsCanada() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-red-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-red-400">Canada</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">🇨🇦</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Esports Jobs Canada:{" "}
                <span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">North America&apos;s Rising Hub</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Canada offers excellent opportunities in gaming and esports. With major studios in Vancouver,
              a growing Toronto esports scene, and Montreal&apos;s game development hub, Canada combines
              North American opportunity with welcoming immigration policies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-400 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-jobs-remote" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Remote Jobs
              </Link>
            </div>
          </div>
        </section>

        {/* Major Cities */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Esports Jobs by Canadian City</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {majorCities.map((city) => (
                <div key={city.name} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{city.name}, {city.province}</h3>
                  <p className="text-sm text-slate-400 mt-1">{city.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Major Companies */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Major Canadian Gaming Employers</h2>
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
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Types of Canadian Esports Roles</h2>
            <div className="flex flex-wrap gap-3">
              {roleTypes.map((role) => (
                <span key={role} className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why Canada */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Why Work in Canadian Gaming?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">The Opportunity</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Major AAA studios in Vancouver</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Growing esports scene in Toronto</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Government support for gaming industry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Lower cost of living than US</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>High quality of life</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">For International Talent</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Global Talent Stream for fast-track permits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Working Holiday Visas available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Welcoming immigration policies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Path to permanent residence</span>
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
              <Link href="/esports-jobs-usa" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-2xl">🇺🇸</span>
                <span className="text-white font-medium ml-2">USA Jobs</span>
              </Link>
              <Link href="/esports-jobs-uk" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-2xl">🇬🇧</span>
                <span className="text-white font-medium ml-2">UK Jobs</span>
              </Link>
              <Link href="/esports-jobs-germany" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-colors">
                <span className="text-2xl">🇩🇪</span>
                <span className="text-white font-medium ml-2">Germany Jobs</span>
              </Link>
              <Link href="/esports-jobs-australia" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
                <span className="text-2xl">🇦🇺</span>
                <span className="text-white font-medium ml-2">Australia Jobs</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-red-600/20 via-slate-900 to-red-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Canadian Esports Job</h2>
            <p className="text-slate-300 mb-8">Browse esports and gaming opportunities across Canada.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-400 text-white font-semibold rounded-xl">
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
