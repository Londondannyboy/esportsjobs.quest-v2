import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://esportsjobs.quest/full-time-esports-jobs",
      url: "https://esportsjobs.quest/full-time-esports-jobs",
      name: "Full-Time Esports Jobs | Permanent Gaming Careers",
      description: "Find full-time esports jobs with benefits, career progression, and job security in the gaming industry.",
      isPartOf: { "@id": "https://esportsjobs.quest/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://esportsjobs.quest" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://esportsjobs.quest/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "Full-Time", item: "https://esportsjobs.quest/full-time-esports-jobs" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What benefits do full-time esports jobs typically include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Full-time esports positions typically include health insurance, pension contributions, paid holiday, professional development budgets, and often perks like gaming equipment, event tickets, and flexible working arrangements. Publisher roles at companies like Riot Games and Valve often have comprehensive benefits packages."
          }
        },
        {
          "@type": "Question",
          name: "What's the average salary for full-time esports jobs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Full-time esports salaries vary significantly by role and location. Entry-level positions start around £25,000-35,000 ($35,000-50,000), mid-level roles £40,000-60,000 ($55,000-85,000), and senior positions £70,000-120,000+ ($95,000-170,000+). Publisher roles and US positions typically pay at the higher end."
          }
        },
        {
          "@type": "Question",
          name: "How competitive are full-time esports positions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Full-time positions are highly competitive, especially at major publishers like Riot, Valve, and Activision Blizzard. Building experience through part-time work, internships, or freelance projects significantly improves your chances. Networking at events and having a portfolio of relevant work is essential."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Full-Time Esports Jobs | Permanent Gaming Careers",
  description: "🚀 Find full-time esports jobs with benefits, career progression, and stability. Permanent positions at publishers, esports orgs, and gaming companies.",
  keywords: "full time esports jobs, permanent gaming jobs, esports careers, gaming industry jobs, esports benefits, gaming career progression",
  alternates: { canonical: "https://esportsjobs.quest/full-time-esports-jobs" },
};

const fullTimeRoles = [
  { role: "Esports Manager", salary: "£45,000 - £75,000", description: "Lead esports programmes, manage teams and budgets" },
  { role: "Marketing Manager", salary: "£40,000 - £70,000", description: "Drive brand awareness and campaign strategy" },
  { role: "Community Manager", salary: "£30,000 - £50,000", description: "Build and engage gaming communities" },
  { role: "Broadcast Producer", salary: "£35,000 - £65,000", description: "Produce live esports broadcasts" },
  { role: "Business Development", salary: "£50,000 - £90,000", description: "Partnerships and revenue growth" },
  { role: "Content Director", salary: "£45,000 - £80,000", description: "Lead content strategy and production" },
  { role: "Tournament Director", salary: "£40,000 - £70,000", description: "Oversee competitive operations" },
  { role: "Head of Esports", salary: "£70,000 - £120,000+", description: "C-suite esports leadership" },
];

const employers = [
  { type: "Game Publishers", examples: "Riot Games, Valve, EA, Activision Blizzard", description: "Largest employers with best benefits packages" },
  { type: "Esports Organisations", examples: "Cloud9, Fnatic, G2, Team Liquid", description: "Team-based roles with competitive culture" },
  { type: "Tournament Organisers", examples: "ESL, BLAST, PGL, WePlay", description: "Event production and operations" },
  { type: "Broadcasters", examples: "Twitch, YouTube Gaming, regional broadcasters", description: "Media and production roles" },
  { type: "Gaming Agencies", examples: "Esports recruitment, marketing agencies", description: "Client-facing esports work" },
  { type: "Endemic Brands", examples: "Logitech, Razer, HyperX, Secretlab", description: "Gaming hardware and peripherals" },
];

const benefits = [
  "Health insurance and dental",
  "Pension/401k contributions",
  "Paid annual leave (20-30 days)",
  "Professional development budget",
  "Gaming equipment allowance",
  "Event tickets and travel",
  "Flexible/hybrid working",
  "Performance bonuses",
];

export default function FullTimeEsportsJobs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-transparent to-cyan-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-emerald-400">Full-Time</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Full-Time Esports Jobs:{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Build Your Career</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Full-time esports positions offer stability, benefits, and long-term career progression.
              From entry-level to executive roles, find permanent positions at publishers, esports
              organisations, and gaming companies worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/part-time-esports-jobs" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Part-Time Jobs
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 bg-gradient-to-r from-emerald-900/30 via-slate-900 to-cyan-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Full-Time Benefits</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {benefits.map((benefit) => (
                <span key={benefit} className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg border border-emerald-500/30">
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Full-Time Roles */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Common Full-Time Esports Roles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {fullTimeRoles.map((item) => (
                <div key={item.role} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{item.role}</h3>
                  <p className="text-xs text-emerald-400 mb-2">{item.salary}</p>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Employers */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Who Hires Full-Time?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {employers.map((employer) => (
                <div key={employer.type} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{employer.type}</h3>
                  <p className="text-xs text-cyan-400 mb-2">{employer.examples}</p>
                  <p className="text-sm text-slate-400">{employer.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Progression */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Full-Time Career Progression</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Typical Career Path</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">1.</span>
                    <span><strong>Entry Level:</strong> Coordinator, Assistant, Junior roles (0-2 years)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">2.</span>
                    <span><strong>Mid Level:</strong> Manager, Specialist roles (2-5 years)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">3.</span>
                    <span><strong>Senior Level:</strong> Senior Manager, Director (5-8 years)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">4.</span>
                    <span><strong>Executive:</strong> Head of, VP, C-Suite (8+ years)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Getting Hired Full-Time</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Build experience through internships or part-time work first</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Network at esports events and industry meetups</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Develop a portfolio of relevant projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Consider relocating for the best opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Other Job Types */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Explore Other Job Types</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/part-time-esports-jobs" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                <span className="text-white font-medium">Part-Time Jobs</span>
                <p className="text-slate-400 text-sm mt-1">Flexible gaming work</p>
              </Link>
              <Link href="/esports-internships" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-colors">
                <span className="text-white font-medium">Internships</span>
                <p className="text-slate-400 text-sm mt-1">Start your career</p>
              </Link>
              <Link href="/esports-jobs-remote" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-white font-medium">Remote Jobs</span>
                <p className="text-slate-400 text-sm mt-1">Work from anywhere</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-emerald-600/20 via-slate-900 to-cyan-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Full-Time Esports Job</h2>
            <p className="text-slate-300 mb-8">Browse permanent esports positions with benefits and career growth.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-salary-guide-usa" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Salary Guide
              </Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
