import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://esportsjobs.quest/esports-jobs-sydney",
      url: "https://esportsjobs.quest/esports-jobs-sydney",
      name: "Esports Jobs Sydney | Gaming Careers Australia",
      description: "Find esports jobs in Sydney and Australia. Gaming careers at ESL Australia, Chiefs Esports, ORDER and major Oceanic esports organisations.",
      isPartOf: { "@id": "https://esportsjobs.quest/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://esportsjobs.quest" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://esportsjobs.quest/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "Sydney", item: "https://esportsjobs.quest/esports-jobs-sydney" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Australia good for esports careers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Australia has a growing esports scene with Sydney as its hub. The country hosts major tournaments, has professional leagues, and English-speaking organisations make it accessible for international talent. While smaller than NA/EU, the OCE scene offers opportunities with less competition."
          }
        },
        {
          "@type": "Question",
          name: "What esports companies are in Sydney?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sydney hosts ESL Australia operations, Chiefs Esports Club, ORDER, Dire Wolves, and various tournament organisers. Major publishers like Riot Games and Blizzard have Australian offices. The city also has game development studios and gaming media companies."
          }
        },
        {
          "@type": "Question",
          name: "What esports jobs are available in Australia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Australian esports offers roles in tournament production, broadcast, content creation, community management, marketing, and team operations. The timezone makes it suitable for APAC-focused roles. Many positions also cover the broader Oceanic region including New Zealand."
          }
        },
        {
          "@type": "Question",
          name: "Can UK citizens work in esports in Australia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UK citizens can apply for Working Holiday visas (under 31) or skilled worker visas. Australia has reciprocal visa arrangements with the UK. Gaming and esports skills may qualify for skilled migration. The English-speaking environment makes integration straightforward."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Esports Jobs Sydney 🇦🇺 Gaming Careers Australia",
  description: "🚀 Find esports jobs in Sydney and Australia. Gaming careers at ESL Australia, Chiefs Esports, ORDER and major Oceanic esports organisations.",
  keywords: "esports jobs sydney, gaming jobs australia, oce esports jobs, australian esports careers, chiefs esports jobs, order esports",
  alternates: { canonical: "https://esportsjobs.quest/esports-jobs-sydney" },
};

const majorCompanies = [
  { name: "ESL Australia", focus: "Tournament & broadcast" },
  { name: "Chiefs Esports Club", focus: "Top OCE esports org" },
  { name: "ORDER", focus: "Multi-game esports org" },
  { name: "Dire Wolves", focus: "LoL, Valorant teams" },
  { name: "Riot Games OCE", focus: "LoL, Valorant publisher" },
  { name: "Blizzard ANZ", focus: "OW, WoW operations" },
];

const roleTypes = [
  "Tournament Admin", "Broadcast Producer", "Shoutcaster", "Content Creator",
  "Community Manager", "Marketing Manager", "Team Manager", "Video Editor",
  "Social Media Manager", "Event Coordinator", "Analyst", "Coach"
];

export default function EsportsJobsSydney() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-transparent to-slate-900" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-green-400">Sydney</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esports Jobs Sydney:{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Oceania&apos;s Esports Hub</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Sydney is the centre of Australian and Oceanic esports. With English as the native language
              and a growing competitive scene, Australia offers accessible esports careers in the APAC timezone.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-jobs-remote" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Remote Jobs
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Major Esports Companies in Australia</h2>
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
            <h2 className="text-3xl font-bold text-white mb-8">Types of Esports Roles in Sydney</h2>
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
            <h2 className="text-3xl font-bold text-white mb-8">Why Sydney for Esports?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">The Opportunity</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>English-speaking esports scene</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Growing OCE competitive scene</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Less competition than NA/EU</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>APAC timezone coverage roles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Major publisher regional offices</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">For UK Professionals</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Working Holiday visa (under 31)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Skilled worker visa options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>No language barrier</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Similar work culture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Strong UK-Australia ties</span>
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
              <Link href="/esports-jobs-singapore" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
                <span className="text-white font-medium">Singapore Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Southeast Asia hub</p>
              </Link>
              <Link href="/esports-jobs-seoul" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-white font-medium">Seoul Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">World esports capital</p>
              </Link>
              <Link href="/esports-jobs-los-angeles" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                <span className="text-white font-medium">Los Angeles Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">NA esports hub</p>
              </Link>
              <Link href="/esports-jobs-london" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-colors">
                <span className="text-white font-medium">London Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">UK esports capital</p>
              </Link>
              <Link href="/esports-broadcaster-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-white font-medium">Broadcaster Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Casting and production</p>
              </Link>
              <Link href="/esports-jobs-remote" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-colors">
                <span className="text-white font-medium">Remote Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Work from anywhere</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-green-600/20 via-slate-900 to-emerald-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Sydney Esports Job</h2>
            <p className="text-slate-300 mb-8">Explore opportunities in Oceanic esports.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl">
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
