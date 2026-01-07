import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";
import { esportsJobs } from "../../lib/jobs-data";

// Target keyword: "esports recruitment"
export const metadata: Metadata = {
  title: "Esports Recruitment 🎮 UK Jobs & Agencies Guide",
  description: "Find esports recruitment opportunities in the UK. Search gaming jobs or discover specialist esports recruiters. Free job search platform for the gaming industry.",
  keywords: "esports recruitment, gaming recruitment, esports jobs UK, esports recruiters",
  openGraph: {
    title: "Esports Recruitment 🎮 UK Jobs & Agencies Guide",
    description: "Find esports recruitment opportunities in the UK. Search gaming jobs or discover specialist recruiters.",
    type: "website",
    url: "https://esportsjobs.quest/esports-recruitment",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esports Recruitment 🎮 UK Jobs & Agencies Guide",
    description: "Find esports recruitment opportunities in the UK.",
  },
  alternates: {
    canonical: "https://esportsjobs.quest/esports-recruitment",
  },
};

// Common esports roles people search for
const roleCategories = [
  {
    category: "Competition & Performance",
    roles: ["Esports Coach", "Analyst", "Team Manager", "Performance Coach", "Scout"],
    icon: "🏆",
  },
  {
    category: "Content & Broadcast",
    roles: ["Content Creator", "Video Producer", "Caster", "Host", "Broadcast Producer"],
    icon: "📺",
  },
  {
    category: "Marketing & Partnerships",
    roles: ["Marketing Manager", "Social Media Manager", "Partnerships Manager", "Community Manager"],
    icon: "📣",
  },
  {
    category: "Events & Operations",
    roles: ["Tournament Director", "Event Manager", "Operations Manager", "Production Manager"],
    icon: "🎬",
  },
  {
    category: "Business & Leadership",
    roles: ["General Manager", "Business Development", "CEO/COO", "Finance Director"],
    icon: "💼",
  },
];

// Real UK agencies for reference
const ukAgencies = [
  { name: "Aardvark Swift", url: "https://www.aswift.com", focus: "Game development" },
  { name: "Amiqus", url: "https://www.amiqus.com", focus: "Games industry" },
  { name: "Haptic Recruit", url: "https://www.wearehaptic.com", focus: "Gaming" },
  { name: "InGame Recruitment", url: "https://www.ingamerecruitment.com", focus: "Games" },
];

const faqs = [
  {
    question: "What is esports recruitment?",
    answer: "Esports recruitment is the process of hiring talent for the competitive gaming industry. This includes roles at esports organisations, tournament operators, game publishers, streaming platforms, and gaming companies. Roles range from coaches and analysts to marketing managers and event producers. The industry has grown significantly, creating demand for both specialist recruiters and job platforms.",
  },
  {
    question: "How do I find esports jobs?",
    answer: "You can find esports jobs through: job search platforms like ours (we aggregate listings from multiple sources), specialist recruitment agencies, company career pages directly, LinkedIn and industry networking, and esports industry events. We recommend using multiple approaches—search job boards for visible opportunities while also networking and considering agencies for senior roles.",
  },
  {
    question: "Should I use a recruitment agency or apply directly?",
    answer: "Both have advantages. Agencies can access unadvertised roles, advocate for you, and provide interview coaching—but they only represent certain companies. Direct applications give you access to all employers and show initiative. For entry-level roles, job boards and direct applications are often more effective. For senior positions, agencies may have exclusive mandates. Many people use both approaches.",
  },
  {
    question: "What is EsportsJobs.quest?",
    answer: "We're a job search platform, not a recruitment agency. We aggregate esports and gaming job listings from company career pages, LinkedIn, and other sources into one searchable database. It's completely free for job seekers. We don't charge fees, make placements, or take commissions—we simply help you find and apply to jobs directly with employers.",
  },
  {
    question: "What skills do esports employers look for?",
    answer: "Common requirements include: industry knowledge (understanding esports culture, games, and ecosystem), relevant experience (even from related fields like sports, events, or media), specific skills for the role (coaching credentials, marketing portfolio, technical abilities), passion for gaming, and professional soft skills. A combination of gaming knowledge and professional capability is valued—portfolio work often matters more than formal qualifications.",
  },
];

export default function EsportsRecruitment() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Esports Recruitment: UK Jobs and Agencies Guide",
    description: "Guide to finding esports recruitment opportunities in the UK",
    author: {
      "@type": "Organization",
      name: "EsportsJobs.quest",
    },
    publisher: {
      "@type": "Organization",
      name: "EsportsJobs.quest",
      url: "https://esportsjobs.quest",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-transparent to-violet-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-cyan-400">Esports Recruitment</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Esports Recruitment
                </span>
                {" "}in the UK
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Looking for esports jobs? Search our database of gaming industry opportunities
                or discover specialist recruiters who can help with your career.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/esports-jobs-uk"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
                >
                  Search Esports Jobs
                </Link>
                <Link
                  href="/esports-recruitment-agency"
                  className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-cyan-500 transition-all"
                >
                  Find a Recruiter
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-12 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-cyan-600/10 border border-cyan-500/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">ℹ️</span>
                <div>
                  <h2 className="text-lg font-semibold text-white mb-2">What We Are</h2>
                  <p className="text-slate-300">
                    <strong>EsportsJobs.quest is a job search platform built by people from the esports industry.</strong> We
                    aggregate job listings from across gaming and esports into one searchable place—like Indeed
                    for gaming jobs. We&apos;re not a recruitment agency: we don&apos;t make placements or charge fees.
                    You apply directly to employers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Latest Esports Jobs</h2>
                <p className="text-slate-400">Real opportunities from top employers</p>
              </div>
              <Link
                href="/esports-jobs-uk"
                className="text-cyan-400 hover:text-cyan-300 font-medium hidden md:block"
              >
                View all jobs →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {esportsJobs.slice(0, 6).map((job) => (
                <a
                  key={job.id}
                  href={job.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="relative h-32">
                    <Image
                      src={job.heroImage}
                      alt={job.heroImageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                    <span className="absolute bottom-2 left-3 px-2 py-1 bg-cyan-600/90 text-white text-xs rounded">
                      {job.type}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors line-clamp-1">
                      {job.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-2">{job.company}</p>
                    <p className="text-slate-500 text-xs">{job.location}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link
                href="/esports-jobs-uk"
                className="inline-block px-6 py-3 bg-cyan-600 text-white font-medium rounded-lg hover:bg-cyan-700 transition-colors"
              >
                View All Esports Jobs
              </Link>
            </div>
          </div>
        </section>

        {/* Role Categories */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Esports Roles by Category</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              The esports industry offers diverse career paths. Here are common role categories
              you&apos;ll find in esports recruitment.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roleCategories.map((cat) => (
                <div key={cat.category} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{cat.icon}</span>
                    <h3 className="text-xl font-bold text-white">{cat.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.roles.map((role) => (
                      <span key={role} className="px-2 py-1 bg-cyan-600/20 text-cyan-400 text-xs rounded">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ways to Find Jobs */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Ways to Find Esports Jobs</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/50">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔍</span> Job Search Platforms (Like Ours)
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>See all available roles in one place</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Apply directly to employers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Free to use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Good for all experience levels</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/esports-jobs-uk"
                    className="text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    Search our job board →
                  </Link>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🤝</span> Recruitment Agencies
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Access to unadvertised roles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Career advice and interview prep</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Salary negotiation support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Best for senior/specialist roles</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/esports-recruitment-agency"
                    className="text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    Find UK agencies →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Agency Reference */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">UK Gaming Recruitment Agencies</h2>
            <p className="text-slate-400 mb-8">
              If you prefer working with a recruiter, here are established UK agencies:
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              {ukAgencies.map((agency) => (
                <a
                  key={agency.name}
                  href={agency.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 hover:border-cyan-500/50 transition-all"
                >
                  <h3 className="font-semibold text-white mb-1">{agency.name}</h3>
                  <p className="text-slate-500 text-sm">{agency.focus}</p>
                </a>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/esports-recruitment-agency" className="text-cyan-400 hover:underline text-sm">
                View full list of agencies →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Esports Recruitment FAQs</h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-slate-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 via-slate-900 to-violet-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Start Your Esports Job Search
            </h2>
            <p className="text-slate-300 mb-8">
              Browse hundreds of esports and gaming jobs from top employers across the UK.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/esports-jobs-uk"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
              >
                Browse Esports Jobs
              </Link>
              <Link
                href="/esports-careers"
                className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-cyan-500 transition-all"
              >
                Explore Career Paths
              </Link>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Related Pages</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link href="/esports-recruitment-agency" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Recruitment Agencies</h3>
                <p className="text-slate-400 text-sm">UK esports recruiters directory.</p>
              </Link>
              <Link href="/esports-jobs-uk" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Esports Jobs UK</h3>
                <p className="text-slate-400 text-sm">Browse all UK esports vacancies.</p>
              </Link>
              <Link href="/esports-careers" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Career Pathways</h3>
                <p className="text-slate-400 text-sm">Explore esports career options.</p>
              </Link>
              <Link href="/esports-salary-guide-uk" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Salary Guide</h3>
                <p className="text-slate-400 text-sm">UK esports salary benchmarks.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
