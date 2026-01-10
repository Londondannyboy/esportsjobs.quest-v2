import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mvp.actor/esports-jobs-seattle",
      url: "https://mvp.actor/esports-jobs-seattle",
      name: "Esports Jobs Seattle | Gaming Careers in Washington",
      description: "Find esports jobs in Seattle. Gaming careers at Valve, Bungie, and major gaming studios in the Pacific Northwest.",
      isPartOf: { "@id": "https://mvp.actor/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mvp.actor" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://mvp.actor/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "USA", item: "https://mvp.actor/esports-jobs-usa" },
        { "@type": "ListItem", position: 4, name: "Seattle", item: "https://mvp.actor/esports-jobs-seattle" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What gaming companies are headquartered in Seattle?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Seattle is home to Valve (Steam, CS2, Dota 2), Bungie (Destiny), and numerous other gaming studios. Microsoft Gaming (Xbox) is based nearby in Redmond. The Pacific Northwest has a strong concentration of gaming talent and studios."
          }
        },
        {
          "@type": "Question",
          name: "What esports jobs are available in Seattle?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Seattle offers game development, esports operations (especially Dota 2 and CS2 through Valve), and tech roles. The city is strong for developers, engineers, designers, and technical roles. Business and marketing positions also available at major studios."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Esports Jobs Seattle 🌲 Gaming Careers in Washington",
  description: "🚀 Find esports jobs in Seattle. Gaming careers at Valve, Bungie, and major studios in the Pacific Northwest.",
  keywords: "esports jobs seattle, gaming jobs seattle, valve careers, bungie jobs, washington gaming jobs, dota 2 jobs",
  alternates: { canonical: "https://mvp.actor/esports-jobs-seattle" },
};

const majorCompanies = [
  { name: "Valve", focus: "Steam, CS2, Dota 2, TF2" },
  { name: "Bungie", focus: "Destiny franchise" },
  { name: "Microsoft Gaming", focus: "Xbox, Game Pass (Redmond)" },
  { name: "Sucker Punch", focus: "Ghost of Tsushima (Sony)" },
  { name: "PopCap Games", focus: "Plants vs Zombies (EA)" },
  { name: "ArenaNet", focus: "Guild Wars" },
];

const roleTypes = [
  "Game Developer", "Software Engineer", "Game Designer", "Producer",
  "QA Engineer", "Technical Artist", "Animator", "Sound Designer",
  "Esports Operations", "Community Manager", "Marketing Manager", "Data Analyst"
];

export default function EsportsJobsSeattle() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-transparent to-blue-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs-usa" className="hover:text-white">USA</Link>
              <span className="mx-2">/</span>
              <span className="text-green-400">Seattle</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esports Jobs Seattle:{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Home of Valve & Bungie</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Seattle is a powerhouse of game development. Home to Valve (CS2, Dota 2, Steam) and
              Bungie (Destiny), plus Microsoft Gaming nearby, the Pacific Northwest offers exceptional
              opportunities in gaming and esports.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-jobs-usa" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                All USA Jobs
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Major Gaming Studios in Seattle</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {majorCompanies.map((company) => (
                <div key={company.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{company.name}</h3>
                  <p className="text-sm text-slate-400">{company.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Types of Seattle Gaming Roles</h2>
            <div className="flex flex-wrap gap-3">
              {roleTypes.map((role) => (
                <span key={role} className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Why Seattle for Gaming?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">The Opportunity</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Valve HQ - CS2, Dota 2, Steam</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Bungie - Destiny franchise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Microsoft/Xbox nearby</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Strong tech talent pool</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>No state income tax</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">For Esports Specifically</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Valve runs Dota 2 and CS2 esports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>The International historically in Seattle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Esports operations roles at Valve</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Tech-focused esports positions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Other US Esports Hubs</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/esports-jobs-los-angeles" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                <span className="text-white font-medium">Los Angeles</span>
                <p className="text-sm text-slate-400 mt-1">Esports capital of NA</p>
              </Link>
              <Link href="/esports-jobs-austin" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-colors">
                <span className="text-white font-medium">Austin</span>
                <p className="text-sm text-slate-400 mt-1">Emerging gaming hub</p>
              </Link>
              <Link href="/esports-jobs-new-york" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-white font-medium">New York</span>
                <p className="text-sm text-slate-400 mt-1">Media and business</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-green-600/20 via-slate-900 to-blue-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Seattle Gaming Job</h2>
            <p className="text-slate-300 mb-8">Browse esports and gaming opportunities in the Pacific Northwest.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl">
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
