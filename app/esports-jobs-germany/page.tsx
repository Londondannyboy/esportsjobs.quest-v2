import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://esportsjobs.quest/esports-jobs-germany",
      url: "https://esportsjobs.quest/esports-jobs-germany",
      name: "Esports Jobs Germany | Gaming Careers in Deutschland",
      description: "Find esports jobs in Germany. Gaming careers in Berlin, Cologne, and Munich at ESL, Riot Games EMEA, and major European esports organisations.",
      isPartOf: { "@id": "https://esportsjobs.quest/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://esportsjobs.quest" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://esportsjobs.quest/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "Germany", item: "https://esportsjobs.quest/esports-jobs-germany" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why is Germany important for esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Germany is the heart of European esports. Cologne hosts ESL FACEIT Group headquarters and major tournaments like IEM Cologne. Berlin is home to Riot Games EMEA and the LEC. Germany has the largest esports audience in Europe and strong government support for the industry."
          }
        },
        {
          "@type": "Question",
          name: "What esports companies are in Germany?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Major German esports employers include ESL FACEIT Group (Cologne), Riot Games EMEA (Berlin), Freaks 4U Gaming (Berlin), and numerous esports organisations. Gamescom in Cologne is the world's largest gaming event. Many European esports orgs have German operations."
          }
        },
        {
          "@type": "Question",
          name: "Do I need to speak German for esports jobs in Germany?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many international esports companies in Germany operate in English, especially in Berlin. However, German language skills are valuable for local organisations, community roles, and broadcast positions targeting German audiences. English-only roles are common at ESL and Riot."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Esports Jobs Germany 🇩🇪 Gaming Careers in Deutschland",
  description: "🚀 Find esports jobs in Germany. Gaming careers in Berlin, Cologne at ESL, Riot Games EMEA. Browse German esports opportunities.",
  keywords: "esports jobs germany, esports jobs berlin, esports jobs cologne, esl careers, gaming jobs deutschland, european esports jobs",
  alternates: { canonical: "https://esportsjobs.quest/esports-jobs-germany" },
};

const majorCities = [
  { name: "Berlin", description: "Riot Games EMEA HQ, LEC studio, gaming startups", link: "/esports-jobs-berlin" },
  { name: "Cologne", description: "ESL HQ, IEM events, Gamescom", link: null },
  { name: "Munich", description: "Corporate gaming, traditional media crossover", link: null },
  { name: "Hamburg", description: "Gaming media, publishers", link: null },
];

const majorCompanies = [
  { name: "ESL FACEIT Group", location: "Cologne", focus: "Tournament operator, IEM, ESL Pro League" },
  { name: "Riot Games EMEA", location: "Berlin", focus: "LEC, Valorant Champions Tour EMEA" },
  { name: "Freaks 4U Gaming", location: "Berlin", focus: "Esports agency & production" },
  { name: "SK Gaming", location: "Cologne", focus: "Multi-game esports org" },
  { name: "BIG Clan", location: "Berlin", focus: "German esports org" },
  { name: "MOUZ", location: "Hamburg", focus: "Multi-game esports org" },
];

const roleTypes = [
  "Tournament Director", "Broadcast Producer", "Esports Analyst", "Team Manager",
  "Event Coordinator", "Marketing Manager", "Community Manager", "Content Producer",
  "Shoutcaster", "Observer", "Business Development", "Partnership Manager"
];

export default function EsportsJobsGermany() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-yellow-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-yellow-400">Germany</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">🇩🇪</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Esports Jobs Germany:{" "}
                <span className="bg-gradient-to-r from-black via-red-500 to-yellow-400 bg-clip-text text-transparent">Heart of European Esports</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Germany is the centre of European esports. Home to ESL FACEIT Group, Riot Games EMEA,
              and world-class events like IEM Cologne and Gamescom, Germany offers exceptional opportunities
              in competitive gaming.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-black to-yellow-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-jobs-berlin" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Berlin Jobs
              </Link>
            </div>
          </div>
        </section>

        {/* Major Cities */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Esports Jobs by German City</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {majorCities.map((city) => (
                city.link ? (
                  <Link key={city.name} href={city.link} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                    <h3 className="text-lg font-bold text-white">{city.name}</h3>
                    <p className="text-sm text-slate-400 mt-1">{city.description}</p>
                  </Link>
                ) : (
                  <div key={city.name} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
                    <h3 className="text-lg font-bold text-white">{city.name}</h3>
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
            <h2 className="text-3xl font-bold text-white mb-8">Major German Esports Employers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {majorCompanies.map((company) => (
                <div key={company.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{company.name}</h3>
                  <p className="text-xs text-yellow-400">{company.location}</p>
                  <p className="text-sm text-slate-400 mt-1">{company.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Role Types */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Types of German Esports Roles</h2>
            <div className="flex flex-wrap gap-3">
              {roleTypes.map((role) => (
                <span key={role} className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why Germany */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Why Work in German Esports?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">The Opportunity</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>ESL FACEIT Group headquarters in Cologne</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>Riot Games EMEA and LEC in Berlin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>World-class events: IEM, Gamescom</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>Largest esports audience in Europe</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>Strong work-life balance culture</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">For International Talent</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>EU citizens: No visa required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>English widely spoken in esports industry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>Skilled worker visa available for non-EU</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>Central European location</span>
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
              <Link href="/esports-jobs-uk" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-2xl">🇬🇧</span>
                <span className="text-white font-medium ml-2">UK Jobs</span>
              </Link>
              <Link href="/esports-jobs-usa" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-2xl">🇺🇸</span>
                <span className="text-white font-medium ml-2">USA Jobs</span>
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

        <section className="py-20 bg-gradient-to-r from-black/20 via-slate-900 to-yellow-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your German Esports Job</h2>
            <p className="text-slate-300 mb-8">Browse esports and gaming opportunities across Germany.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-black to-yellow-600 text-white font-semibold rounded-xl">
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
