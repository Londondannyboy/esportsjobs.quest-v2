import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mvp.actor/esports-jobs-australia",
      url: "https://mvp.actor/esports-jobs-australia",
      name: "Esports Jobs Australia | Gaming Careers in Australia",
      description: "Find esports jobs in Australia. Gaming careers in Sydney, Melbourne, and Brisbane at ESL Australia, gaming studios, and esports organisations.",
      isPartOf: { "@id": "https://mvp.actor/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mvp.actor" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://mvp.actor/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "Australia", item: "https://mvp.actor/esports-jobs-australia" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where are the best cities for esports jobs in Australia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sydney is Australia's gaming capital, hosting ESL Australia and major esports organisations. Melbourne has a strong esports community and events scene. Brisbane is growing with game development studios and esports investment."
          }
        },
        {
          "@type": "Question",
          name: "What is the Australian esports scene like?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Australia has a passionate esports community despite timezone challenges. The OCE region competes in League of Legends, Valorant, CS2, and other titles. ESL Australia runs major tournaments. The scene is growing with increasing investment and mainstream recognition."
          }
        },
        {
          "@type": "Question",
          name: "Can international professionals work in Australian esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Australia offers Working Holiday Visas for many nationalities (ages 18-30/35). Skilled worker visas are available for experienced professionals. The gaming industry is on the skilled occupation list. Sponsorship is possible for specialised roles."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Esports Jobs Australia 🇦🇺 Gaming Careers in Australia",
  description: "🚀 Find esports jobs in Australia. Gaming careers in Sydney, Melbourne at ESL Australia and major gaming organisations.",
  keywords: "esports jobs australia, gaming jobs sydney, esports jobs melbourne, esl australia careers, oce esports jobs",
  alternates: { canonical: "https://mvp.actor/esports-jobs-australia" },
};

const majorCities = [
  { name: "Sydney", state: "NSW", description: "ESL Australia, major orgs, media", link: "/esports-jobs-sydney" },
  { name: "Melbourne", state: "VIC", description: "Strong esports community, events" },
  { name: "Brisbane", state: "QLD", description: "Growing game dev hub" },
  { name: "Perth", state: "WA", description: "Emerging scene" },
];

const majorCompanies = [
  { name: "ESL Australia", location: "Sydney", focus: "Tournament operator, IEM Sydney" },
  { name: "Riot Games OCE", location: "Sydney", focus: "League of Legends, Valorant OCE" },
  { name: "ORDER Esports", location: "Melbourne", focus: "Multi-game esports org" },
  { name: "Chiefs Esports Club", location: "Sydney", focus: "Multi-game esports org" },
  { name: "Dire Wolves", location: "Sydney", focus: "League of Legends, Valorant" },
  { name: "Ground Zero Gaming", location: "Melbourne", focus: "Esports org" },
];

const roleTypes = [
  "Esports Producer", "Tournament Coordinator", "Community Manager", "Content Creator",
  "Broadcast Producer", "Marketing Manager", "Team Manager", "Social Media Manager",
  "Video Editor", "Shoutcaster", "Event Coordinator", "Business Development"
];

export default function EsportsJobsAustralia() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-transparent to-yellow-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-green-400">Australia</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">🇦🇺</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Esports Jobs Australia:{" "}
                <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">OCE&apos;s Gaming Hub</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Australia is the heart of OCE esports. Despite timezone challenges, the Australian scene
              is passionate and growing. From ESL Australia tournaments to local orgs competing globally,
              discover opportunities in Australia&apos;s gaming industry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-green-600 to-yellow-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-jobs-sydney" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Sydney Jobs
              </Link>
            </div>
          </div>
        </section>

        {/* Major Cities */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Esports Jobs by Australian City</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {majorCities.map((city) => (
                city.link ? (
                  <Link key={city.name} href={city.link} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 hover:border-green-500/50 transition-colors">
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
            <h2 className="text-3xl font-bold text-white mb-8">Australian Esports Organisations</h2>
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
            <h2 className="text-3xl font-bold text-white mb-8">Types of Australian Esports Roles</h2>
            <div className="flex flex-wrap gap-3">
              {roleTypes.map((role) => (
                <span key={role} className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why Australia */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Why Work in Australian Esports?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">The Opportunity</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Growing esports market with passionate fans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>ESL Australia and major tournament operators</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Excellent quality of life</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Less competition than NA/EU markets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Increasing investment in OCE esports</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">For International Talent</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Working Holiday Visas for ages 18-30/35</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Skilled worker visa options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Gaming on skilled occupation list</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>English-speaking environment</span>
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
              <Link href="/esports-jobs-singapore" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
                <span className="text-2xl">🇸🇬</span>
                <span className="text-white font-medium ml-2">Singapore Jobs</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-green-600/20 via-slate-900 to-yellow-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Australian Esports Job</h2>
            <p className="text-slate-300 mb-8">Browse esports and gaming opportunities across Australia.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-green-600 to-yellow-600 text-white font-semibold rounded-xl">
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
