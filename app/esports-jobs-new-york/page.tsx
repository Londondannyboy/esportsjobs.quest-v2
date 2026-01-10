import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mvp.actor/esports-jobs-new-york",
      url: "https://mvp.actor/esports-jobs-new-york",
      name: "Esports Jobs New York | Gaming Careers in NYC",
      description: "Find esports jobs in New York City. Gaming careers in media, marketing, and esports organisations in the Big Apple.",
      isPartOf: { "@id": "https://mvp.actor/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mvp.actor" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://mvp.actor/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "USA", item: "https://mvp.actor/esports-jobs-usa" },
        { "@type": "ListItem", position: 4, name: "New York", item: "https://mvp.actor/esports-jobs-new-york" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What esports jobs are available in New York?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "New York offers esports jobs in media, marketing, business development, and content creation. Major media companies, advertising agencies, and esports organisations have NYC presence. The city is strong for business-side roles rather than game development."
          }
        },
        {
          "@type": "Question",
          name: "What esports companies are in New York?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "New York hosts esports media companies, marketing agencies with gaming divisions, and business operations for major organisations. Andbox operates NYXL (Overwatch League) and NYFU (Call of Duty). Take-Two Interactive (2K, Rockstar) has NYC offices."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Esports Jobs New York 🗽 Gaming Careers in NYC",
  description: "🚀 Find esports jobs in New York City. Gaming careers in media, marketing, and esports organisations in NYC.",
  keywords: "esports jobs new york, gaming jobs nyc, esports careers new york, nyxl jobs, esports media jobs",
  alternates: { canonical: "https://mvp.actor/esports-jobs-new-york" },
};

const majorCompanies = [
  { name: "Andbox", focus: "NYXL (OWL), NYFU (CDL)" },
  { name: "Take-Two Interactive", focus: "2K Games, Rockstar Games" },
  { name: "Various Media Companies", focus: "Esports coverage, gaming journalism" },
  { name: "Marketing Agencies", focus: "Gaming & esports campaigns" },
];

const roleTypes = [
  "Marketing Manager", "Business Development", "Content Producer", "Media Relations",
  "Partnership Manager", "Social Media Manager", "Video Producer", "Event Coordinator",
  "Community Manager", "Brand Manager", "Account Executive", "PR Specialist"
];

export default function EsportsJobsNewYork() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-transparent to-blue-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs-usa" className="hover:text-white">USA</Link>
              <span className="mx-2">/</span>
              <span className="text-orange-400">New York</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esports Jobs New York:{" "}
              <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">The Big Apple&apos;s Gaming Scene</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              New York City is a hub for esports media, marketing, and business operations.
              While LA dominates game development, NYC excels in the business side of gaming—media companies,
              advertising agencies, and corporate esports roles.
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
            <h2 className="text-3xl font-bold text-white mb-8">Gaming Companies in New York</h2>
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
            <h2 className="text-3xl font-bold text-white mb-8">Types of NYC Esports Roles</h2>
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
            <h2 className="text-3xl font-bold text-white mb-8">Why New York for Esports?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">NYC Advantages</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">✓</span>
                    <span>Media and advertising hub</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">✓</span>
                    <span>Strong marketing and business roles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">✓</span>
                    <span>Networking opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">✓</span>
                    <span>Brand partnerships and sponsorships</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Considerations</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">○</span>
                    <span>High cost of living</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">○</span>
                    <span>Fewer game dev roles than LA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">○</span>
                    <span>Competitive job market</span>
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
              <Link href="/esports-jobs-seattle" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
                <span className="text-white font-medium">Seattle</span>
                <p className="text-sm text-slate-400 mt-1">Valve HQ, tech hub</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-orange-600/20 via-slate-900 to-blue-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your NYC Esports Job</h2>
            <p className="text-slate-300 mb-8">Browse esports and gaming opportunities in New York.</p>
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
