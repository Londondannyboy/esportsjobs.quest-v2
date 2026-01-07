import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://esportsjobs.quest/esports-jobs-austin",
      url: "https://esportsjobs.quest/esports-jobs-austin",
      name: "Esports Jobs Austin | Gaming Careers in Texas",
      description: "Find esports jobs in Austin, Texas. Gaming careers at emerging studios and esports organisations in Texas's tech hub.",
      isPartOf: { "@id": "https://esportsjobs.quest/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://esportsjobs.quest" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://esportsjobs.quest/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "USA", item: "https://esportsjobs.quest/esports-jobs-usa" },
        { "@type": "ListItem", position: 4, name: "Austin", item: "https://esportsjobs.quest/esports-jobs-austin" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why is Austin emerging as a gaming hub?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Austin combines tech industry strength, lower cost of living than California, no state income tax, and a growing gaming community. Major studios and gaming companies have opened Austin offices. The city hosts gaming events and has an active esports community."
          }
        },
        {
          "@type": "Question",
          name: "What gaming companies are in Austin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Austin hosts Rooster Teeth (now part of Warner Bros Discovery), Certain Affinity, Retro Studios (Nintendo), and various gaming startups. Major tech companies with gaming divisions have Austin offices. The city is attracting increasing gaming investment."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Esports Jobs Austin 🤠 Gaming Careers in Texas",
  description: "🚀 Find esports jobs in Austin, Texas. Gaming careers at emerging studios and esports organisations in Texas's growing tech hub.",
  keywords: "esports jobs austin, gaming jobs texas, esports careers austin, rooster teeth jobs, texas gaming jobs",
  alternates: { canonical: "https://esportsjobs.quest/esports-jobs-austin" },
};

const majorCompanies = [
  { name: "Rooster Teeth", focus: "Content, animation, gaming media" },
  { name: "Certain Affinity", focus: "AAA game development" },
  { name: "Retro Studios", focus: "Nintendo development partner" },
  { name: "Various Tech Companies", focus: "Gaming divisions and startups" },
];

const roleTypes = [
  "Game Developer", "Content Creator", "Video Producer", "Community Manager",
  "Marketing Manager", "Social Media Manager", "Animator", "Video Editor",
  "Producer", "QA Tester", "Business Development", "Event Coordinator"
];

const advantages = [
  "No state income tax",
  "Lower cost of living than California",
  "Growing tech and gaming scene",
  "Active gaming community",
  "Major events and conventions",
  "Quality of life",
];

export default function EsportsJobsAustin() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-transparent to-blue-900/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs-usa" className="hover:text-white">USA</Link>
              <span className="mx-2">/</span>
              <span className="text-orange-400">Austin</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esports Jobs Austin:{" "}
              <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Texas&apos;s Emerging Gaming Hub</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Austin is rapidly emerging as a gaming and esports destination. With no state income tax,
              lower cost of living, and a thriving tech scene, Austin offers an attractive alternative
              to California for gaming professionals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-blue-600 text-white font-semibold rounded-xl">
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
            <h2 className="text-3xl font-bold text-white mb-8">Gaming Companies in Austin</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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
            <h2 className="text-3xl font-bold text-white mb-8">Types of Austin Gaming Roles</h2>
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
            <h2 className="text-3xl font-bold text-white mb-8">Why Austin for Gaming?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {advantages.map((advantage) => (
                <div key={advantage} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <span className="text-orange-400 mr-2">✓</span>
                  <span className="text-slate-300">{advantage}</span>
                </div>
              ))}
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
              <Link href="/esports-jobs-seattle" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
                <span className="text-white font-medium">Seattle</span>
                <p className="text-sm text-slate-400 mt-1">Valve HQ, tech hub</p>
              </Link>
              <Link href="/esports-jobs-new-york" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-white font-medium">New York</span>
                <p className="text-sm text-slate-400 mt-1">Media and business</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-orange-600/20 via-slate-900 to-blue-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Austin Gaming Job</h2>
            <p className="text-slate-300 mb-8">Browse esports and gaming opportunities in Texas.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-blue-600 text-white font-semibold rounded-xl">
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
