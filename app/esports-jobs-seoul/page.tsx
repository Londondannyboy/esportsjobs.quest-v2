import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mvp.actor/esports-jobs-seoul",
      url: "https://mvp.actor/esports-jobs-seoul",
      name: "Esports Jobs Seoul | Gaming Careers in Korea",
      description: "Find esports jobs in Seoul, Korea. Gaming careers at T1, Gen.G, DRX and major Korean esports organisations in the world's esports capital.",
      isPartOf: { "@id": "https://mvp.actor/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mvp.actor" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://mvp.actor/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "Seoul", item: "https://mvp.actor/esports-jobs-seoul" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why is Seoul considered the world capital of esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "South Korea pioneered professional esports, with StarCraft leagues dating to the late 1990s. Seoul hosts the most successful esports teams (T1, Gen.G, DRX), major publishers (Krafton, Nexon, NCSoft), dedicated esports arenas, and a culture where pro gamers are celebrities. Korean teams dominate internationally in LoL, and the country produces world-class talent."
          }
        },
        {
          "@type": "Question",
          name: "What esports companies are in Seoul?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Seoul hosts legendary orgs T1 (Faker's team), Gen.G, DRX, Hanwha Life Esports, plus publishers Krafton (PUBG), Nexon, NCSoft, and Smilegate. Companies like Riot Korea, Blizzard Korea, and numerous streaming platforms operate here. The Korean esports ecosystem is the most developed in the world."
          }
        },
        {
          "@type": "Question",
          name: "Can English speakers work in esports in Seoul?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, but Korean language skills are highly advantageous. Some international-facing roles (global marketing, English broadcast, international partnerships) primarily use English. Companies like Gen.G have strong English operations. Learning Korean significantly expands opportunities. The esports industry is more open to foreigners than traditional Korean industries."
          }
        },
        {
          "@type": "Question",
          name: "What visa do I need for esports work in Korea?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most esports professionals need an E-7 visa (specialised employment). Pro players may qualify for athlete visas. Companies typically sponsor visas for qualified candidates. Korea has become more welcoming to foreign esports talent, though the job market remains competitive."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Esports Jobs Seoul 🇰🇷 Gaming Careers Korea",
  description: "🚀 Find esports jobs in Seoul, Korea. Gaming careers at T1, Gen.G, DRX and major Korean esports organisations in the world's esports capital.",
  keywords: "esports jobs seoul, gaming jobs korea, t1 careers, gen.g jobs, korean esports jobs, lck jobs, esports careers korea",
  alternates: { canonical: "https://mvp.actor/esports-jobs-seoul" },
};

const majorCompanies = [
  { name: "T1", focus: "Legendary esports org (Faker)" },
  { name: "Gen.G", focus: "Global esports company" },
  { name: "DRX", focus: "2022 Worlds champions" },
  { name: "Krafton", focus: "PUBG publisher" },
  { name: "Riot Korea", focus: "LoL Korea operations" },
  { name: "Hanwha Life Esports", focus: "LCK esports team" },
];

const roleTypes = [
  "Esports Coach", "Analyst", "Team Manager", "Player Scout",
  "Broadcast Producer", "Content Creator", "Marketing Manager", "Translator",
  "Game Developer", "Community Manager", "Event Producer", "Data Scientist"
];

export default function EsportsJobsSeoul() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-slate-900" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-blue-400">Seoul</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esports Jobs Seoul:{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">The World Capital of Esports</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Seoul, South Korea is where esports began and remains its global epicentre. Home to T1, Gen.G,
              and the world&apos;s most developed esports infrastructure, Korea offers unparalleled opportunities
              in competitive gaming.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-coach-careers" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Coaching Jobs
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Major Esports Companies in Seoul</h2>
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
            <h2 className="text-3xl font-bold text-white mb-8">Types of Esports Roles in Seoul</h2>
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
            <h2 className="text-3xl font-bold text-white mb-8">Why Seoul for Esports?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">The Opportunity</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>World&apos;s most developed esports ecosystem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Legendary organisations (T1, Gen.G, DRX)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Pro gamers treated as celebrities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Major game publishers HQ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>World-class training infrastructure</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">For English Speakers</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Korean language skills highly valued</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>English broadcast roles available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Global marketing positions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Translation/localisation in demand</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Foreign coaching staff common in LCK</span>
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
              <Link href="/esports-jobs-los-angeles" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                <span className="text-white font-medium">Los Angeles Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">North America esports hub</p>
              </Link>
              <Link href="/esports-jobs-singapore" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
                <span className="text-white font-medium">Singapore Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Southeast Asia hub</p>
              </Link>
              <Link href="/esports-jobs-berlin" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
                <span className="text-white font-medium">Berlin Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">European esports centre</p>
              </Link>
              <Link href="/esports-coach-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-white font-medium">Esports Coach Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Coaching opportunities worldwide</p>
              </Link>
              <Link href="/esports-analyst-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-colors">
                <span className="text-white font-medium">Esports Analyst Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Performance analysis roles</p>
              </Link>
              <Link href="/esports-jobs-remote" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-colors">
                <span className="text-white font-medium">Remote Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Work from anywhere</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-600/20 via-slate-900 to-cyan-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Seoul Esports Job</h2>
            <p className="text-slate-300 mb-8">Explore opportunities in the world&apos;s esports capital.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl">
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
