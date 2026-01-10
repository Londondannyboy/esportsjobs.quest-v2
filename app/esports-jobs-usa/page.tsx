import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mvp.actor/esports-jobs-usa",
      url: "https://mvp.actor/esports-jobs-usa",
      name: "Esports Jobs USA | Gaming Careers in America",
      description: "Find esports jobs across the United States. Gaming careers at Riot Games, Activision, major esports organisations and tournament operators in North America.",
      isPartOf: { "@id": "https://mvp.actor/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mvp.actor" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://mvp.actor/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "USA", item: "https://mvp.actor/esports-jobs-usa" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where are the best cities for esports jobs in the USA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Los Angeles is the undisputed esports capital of North America, hosting Riot Games, Activision Blizzard, and most major esports organisations. Seattle has Valve and significant gaming presence. Austin, Texas is emerging as a gaming hub with lower cost of living. New York has growing esports presence and media companies."
          }
        },
        {
          "@type": "Question",
          name: "What esports companies hire in the USA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Major US esports employers include Riot Games, Activision Blizzard, Valve, Epic Games, and EA Sports. Esports organisations like 100 Thieves, Cloud9, FaZe Clan, Team Liquid, NRG, and Sentinels all have US operations. Tournament operators ESL FACEIT Group and BLAST also hire across the US."
          }
        },
        {
          "@type": "Question",
          name: "What are typical esports salaries in the USA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "US esports salaries are typically higher than Europe. Entry-level positions start around $45,000-$60,000. Mid-level roles like producers or marketing managers earn $70,000-$100,000. Senior positions and directors can earn $120,000-$200,000+. Pro players and top talent earn significantly more."
          }
        },
        {
          "@type": "Question",
          name: "Can international professionals work in US esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, but you'll need a work visa. H-1B visas are common for skilled workers, and O-1 visas are available for individuals with extraordinary ability in esports. Many gaming companies sponsor visas. Remote positions with US companies are increasingly common for international talent."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Esports Jobs USA 🇺🇸 Gaming Careers in America",
  description: "🚀 Find esports jobs across the United States. Gaming careers at Riot Games, Activision, and major esports organisations. Browse American esports opportunities.",
  keywords: "esports jobs usa, esports careers america, gaming jobs united states, riot games careers, esports jobs north america, us esports jobs",
  alternates: { canonical: "https://mvp.actor/esports-jobs-usa" },
};

const majorCities = [
  { name: "Los Angeles", state: "California", description: "Esports capital of NA - Riot, Activision, major orgs", link: "/esports-jobs-los-angeles" },
  { name: "Seattle", state: "Washington", description: "Valve HQ, strong gaming presence", link: "/esports-jobs-seattle" },
  { name: "Austin", state: "Texas", description: "Emerging gaming hub, lower cost of living", link: "/esports-jobs-austin" },
  { name: "New York", state: "New York", description: "Media, marketing, and growing esports scene", link: "/esports-jobs-new-york" },
  { name: "San Francisco", state: "California", description: "Tech hub with gaming startups", link: null },
  { name: "Chicago", state: "Illinois", description: "Tournament hosting, central location", link: null },
];

const majorCompanies = [
  { name: "Riot Games", location: "Los Angeles", focus: "League of Legends, Valorant, TFT" },
  { name: "Activision Blizzard", location: "Los Angeles", focus: "CoD, Overwatch, WoW" },
  { name: "Valve", location: "Seattle", focus: "CS2, Dota 2, Steam" },
  { name: "Epic Games", location: "North Carolina", focus: "Fortnite, Unreal Engine" },
  { name: "100 Thieves", location: "Los Angeles", focus: "Esports org & lifestyle brand" },
  { name: "Cloud9", location: "Los Angeles", focus: "Multi-game esports org" },
  { name: "Team Liquid", location: "Los Angeles", focus: "Multi-game esports org" },
  { name: "FaZe Clan", location: "Los Angeles", focus: "Esports & entertainment" },
];

const roleTypes = [
  "Esports Producer", "Broadcast Director", "Tournament Organiser", "Team Manager",
  "Player Coach", "Analyst", "Content Creator", "Marketing Manager", "Community Manager",
  "Business Development", "Partnership Manager", "Video Editor", "Social Media Manager",
  "Event Coordinator", "Shoutcaster", "Game Developer"
];

const salaryRanges = [
  { role: "Entry Level", range: "$45,000 - $60,000" },
  { role: "Mid Level", range: "$70,000 - $100,000" },
  { role: "Senior Level", range: "$100,000 - $150,000" },
  { role: "Director/VP", range: "$150,000 - $250,000+" },
];

export default function EsportsJobsUSA() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-slate-950/80 to-red-600/30" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-blue-400">USA</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">🇺🇸</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Esports Jobs USA:{" "}
                <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">Gaming Careers in America</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              The United States is home to the world&apos;s largest esports market. From Los Angeles to New York,
              discover gaming careers at major publishers, esports organisations, and tournament operators across America.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-salary-guide-usa" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                USA Salary Guide
              </Link>
              <Link href="/esports-recruitment-agency" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700 hover:border-blue-500/50">
                Recruitment Services
              </Link>
            </div>
          </div>
        </section>

        {/* Major Cities */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Esports Jobs by US City</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {majorCities.map((city) => (
                city.link ? (
                  <Link key={city.name} href={city.link} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 hover:border-blue-500/50 transition-colors">
                    <h3 className="text-lg font-bold text-white">{city.name}, {city.state}</h3>
                    <p className="text-sm text-slate-400 mt-1">{city.description}</p>
                  </Link>
                ) : (
                  <div key={city.name} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
                    <h3 className="text-lg font-bold text-white">{city.name}, {city.state}</h3>
                    <p className="text-sm text-slate-400 mt-1">{city.description}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* Major Companies */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Major US Esports Employers</h2>
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

        {/* Role Types */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Types of US Esports Roles</h2>
            <div className="flex flex-wrap gap-3">
              {roleTypes.map((role) => (
                <span key={role} className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Salary Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">US Esports Salary Overview</h2>
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {salaryRanges.map((item) => (
                <div key={item.role} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 text-center">
                  <h3 className="text-lg font-bold text-white">{item.role}</h3>
                  <p className="text-xl text-green-400 font-bold mt-2">{item.range}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-400 text-center">
              <Link href="/esports-salary-guide-usa" className="text-blue-400 hover:underline">View detailed USA salary guide →</Link>
            </p>
          </div>
        </section>

        {/* Why USA */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Why Work in US Esports?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">The Opportunity</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Largest esports market in the world</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Highest salaries in the industry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Most major publishers & orgs headquartered here</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Strong venture capital for gaming startups</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Major tournaments and events year-round</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">For International Talent</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>H-1B visa sponsorship common</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>O-1 visas for exceptional esports talent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Many remote positions available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Global companies with international offices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Other Regions */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Explore Other Regions</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link href="/esports-jobs-uk" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-2xl">🇬🇧</span>
                <span className="text-white font-medium ml-2">UK Jobs</span>
              </Link>
              <Link href="/esports-jobs-germany" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-colors">
                <span className="text-2xl">🇩🇪</span>
                <span className="text-white font-medium ml-2">Germany Jobs</span>
              </Link>
              <Link href="/esports-jobs-canada" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
                <span className="text-2xl">🇨🇦</span>
                <span className="text-white font-medium ml-2">Canada Jobs</span>
              </Link>
              <Link href="/esports-jobs-australia" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
                <span className="text-2xl">🇦🇺</span>
                <span className="text-white font-medium ml-2">Australia Jobs</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-600/20 via-slate-900 to-red-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your US Esports Job</h2>
            <p className="text-slate-300 mb-8">Browse esports and gaming opportunities across America.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold rounded-xl">
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
