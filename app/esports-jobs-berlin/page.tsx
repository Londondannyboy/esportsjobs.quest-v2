import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mvp.actor/esports-jobs-berlin",
      url: "https://mvp.actor/esports-jobs-berlin",
      name: "Esports Jobs Berlin | Gaming Careers in Germany",
      description: "Find esports jobs in Berlin. Gaming careers at Riot Games EU, G2 Esports, ESL and major European esports organisations in Europe's esports capital.",
      isPartOf: { "@id": "https://mvp.actor/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mvp.actor" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://mvp.actor/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "Berlin", item: "https://mvp.actor/esports-jobs-berlin" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why is Berlin the esports capital of Europe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Berlin hosts the LEC (League of Legends EMEA Championship), Riot Games EU offices, G2 Esports HQ, and ESL headquarters. The city has purpose-built esports studios, a thriving startup scene, and a welcoming international culture. Most major EU esports events and broadcasts happen in Berlin."
          }
        },
        {
          "@type": "Question",
          name: "What esports companies are in Berlin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Berlin hosts Riot Games EU (LEC operations), G2 Esports, ESL FACEIT Group (world's largest esports company), MAD Lions, Team BDS, Rogue, plus numerous esports agencies, production companies, and gaming startups. The city is the broadcast home of European League of Legends."
          }
        },
        {
          "@type": "Question",
          name: "Can English speakers work in esports in Berlin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, English is the primary language in Berlin's esports industry. Many companies operate entirely in English, especially international esports organisations and broadcast operations. German language skills are beneficial but not always required for esports roles."
          }
        },
        {
          "@type": "Question",
          name: "Can UK citizens work in Berlin after Brexit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UK citizens now need a work visa for Germany. Skilled workers can apply for the EU Blue Card or standard work permit. Many gaming companies sponsor visas for qualified candidates. The German esports industry is welcoming to international talent."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Esports Jobs Berlin 🇩🇪 Gaming Careers Europe",
  description: "🚀 Find esports jobs in Berlin. Gaming careers at Riot Games EU, G2 Esports, ESL and major European esports organisations in Europe's esports capital.",
  keywords: "esports jobs berlin, gaming jobs germany, riot games eu jobs, g2 esports careers, esl jobs, lec jobs, european esports jobs",
  alternates: { canonical: "https://mvp.actor/esports-jobs-berlin" },
};

const majorCompanies = [
  { name: "Riot Games EU", focus: "LEC operations & broadcast" },
  { name: "G2 Esports", focus: "Top EU esports org" },
  { name: "ESL FACEIT Group", focus: "World's largest esports co." },
  { name: "MAD Lions", focus: "Spanish esports in Berlin" },
  { name: "Team BDS", focus: "Swiss esports org" },
  { name: "Rogue", focus: "LEC team" },
];

const roleTypes = [
  "Broadcast Producer", "Esports Manager", "Content Creator", "Shoutcaster",
  "Tournament Admin", "Video Editor", "Marketing Manager", "Team Manager",
  "Community Manager", "Social Media", "Event Producer", "Analyst"
];

export default function EsportsJobsBerlin() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 via-transparent to-slate-900" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-yellow-400">Berlin</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esports Jobs Berlin:{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Europe&apos;s Esports Capital</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Berlin is the heart of European esports. Home to the LEC, Riot Games EU, G2 Esports, and ESL,
              the city offers unmatched opportunities in esports broadcast, operations, and content creation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/g2-esports-careers" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                G2 Careers
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Major Esports Companies in Berlin</h2>
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
            <h2 className="text-3xl font-bold text-white mb-8">Types of Esports Roles in Berlin</h2>
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
            <h2 className="text-3xl font-bold text-white mb-8">Why Berlin for Esports?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">The Opportunity</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>LEC broadcast home - year-round production</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>ESL FACEIT Group headquarters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>Multiple LEC teams based here</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>International, English-speaking scene</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>Vibrant gaming startup ecosystem</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">For UK Professionals</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>English widely spoken in esports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>Work visa required post-Brexit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>Companies sponsor skilled workers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>Lower cost of living than London</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>Strong expat community</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Explore Global Esports Jobs</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/g2-esports-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
                <span className="text-white font-medium">G2 Esports Careers</span>
                <p className="text-sm text-slate-400 mt-1">Berlin-based esports org</p>
              </Link>
              <Link href="/esports-jobs-london" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-white font-medium">London Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">UK esports capital</p>
              </Link>
              <Link href="/esports-jobs-los-angeles" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                <span className="text-white font-medium">Los Angeles Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">NA esports hub</p>
              </Link>
              <Link href="/esports-jobs-seoul" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-white font-medium">Seoul Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">World esports capital</p>
              </Link>
              <Link href="/esports-broadcaster-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
                <span className="text-white font-medium">Broadcaster Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Casting and production</p>
              </Link>
              <Link href="/esports-jobs-remote" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-colors">
                <span className="text-white font-medium">Remote Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Work from anywhere</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-yellow-600/20 via-slate-900 to-orange-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Berlin Esports Job</h2>
            <p className="text-slate-300 mb-8">Explore opportunities in Europe&apos;s esports capital.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Post a Job
              </Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
