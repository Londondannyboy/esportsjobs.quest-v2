import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";
import { esportsJobs } from "../../lib/jobs-data";

// Target keyword: "esports recruitment agency"
export const metadata: Metadata = {
  title: "Esports Recruitment Agency 🎮 UK Gaming Recruiters Guide",
  description: "Find the best esports recruitment agencies in the UK. Compare specialist gaming recruiters, plus search 100s of esports jobs aggregated from top employers.",
  keywords: "esports recruitment agency, gaming recruitment agency, esports recruiters UK",
  openGraph: {
    title: "Esports Recruitment Agency 🎮 UK Gaming Recruiters Guide",
    description: "Find the best esports recruitment agencies in the UK. Compare specialist gaming recruiters.",
    type: "website",
    url: "https://mvp.actor/esports-recruitment-agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esports Recruitment Agency 🎮 UK Gaming Recruiters Guide",
    description: "Find the best esports recruitment agencies in the UK.",
  },
  alternates: {
    canonical: "https://mvp.actor/esports-recruitment-agency",
  },
};

// Real UK esports/gaming recruitment agencies
const agencies = [
  {
    name: "Aardvark Swift",
    website: "https://www.aswift.com",
    description: "One of the longest-established games recruitment agencies in the UK. Specialists in game development roles from indie to AAA studios.",
    specialisms: ["Game Development", "Art & Animation", "Programming", "Production"],
    founded: "1989",
  },
  {
    name: "Amiqus",
    website: "https://www.amiqus.com",
    description: "Games industry recruitment specialists connecting talent with studios across the UK and Europe. Known for senior and leadership placements.",
    specialisms: ["Executive Search", "Studio Leadership", "Production", "Development"],
    founded: "2006",
  },
  {
    name: "InGame Recruitment",
    website: "https://www.ingamerecruitment.com",
    description: "Specialist games recruitment agency and consultancy working with indie start-ups to major publishers.",
    specialisms: ["Game Development", "Publishing", "QA", "Production"],
    founded: "2015",
  },
  {
    name: "Haptic Recruit",
    website: "https://www.wearehaptic.com",
    description: "Gaming recruitment agency focused on connecting talent with opportunities across the UK and European games industry.",
    specialisms: ["Game Development", "Publishing", "Marketing", "Operations"],
    founded: "2018",
  },
  {
    name: "8Bit Recruitment",
    website: "https://8bitplay.com",
    description: "International gamedev recruitment partner linking studios to exceptional talent across all game development sectors.",
    specialisms: ["Game Development", "Art", "Programming", "Game Design"],
    founded: "2016",
  },
  {
    name: "Datascope Recruitment",
    website: "https://datascope.co.uk",
    description: "UK's leading boutique recruitment consultancy for game jobs, online and mobile technology sectors.",
    specialisms: ["Mobile Games", "Online Games", "Tech", "Product"],
    founded: "2001",
  },
];

// Honest FAQs about esports recruitment
const faqs = [
  {
    question: "What does an esports recruitment agency do?",
    answer: "An esports recruitment agency connects gaming and esports companies with qualified candidates. They handle sourcing, screening, and shortlisting talent for roles like coaches, analysts, marketing managers, and operations staff. Agencies charge employers a fee (typically 15-25% of first-year salary) upon successful placement. Candidates use agencies for free.",
  },
  {
    question: "Should I use a recruitment agency or apply directly?",
    answer: "Both approaches have merit. Agencies can access unadvertised roles and advocate on your behalf, but direct applications show initiative. For senior roles, agencies often have exclusive mandates. For entry-level positions, direct applications and job boards like ours may be more effective. Many job seekers use both strategies.",
  },
  {
    question: "What's the difference between gaming and esports recruitment?",
    answer: "Gaming recruitment typically focuses on game development roles (programmers, artists, designers, producers). Esports recruitment focuses on competitive gaming roles (coaches, analysts, team managers, broadcast talent, event staff). Some agencies cover both, while others specialise. The skills and networks differ significantly between the two.",
  },
  {
    question: "How do I choose the right recruitment agency?",
    answer: "Look for agencies that specialise in your area (esports vs game dev), have a track record with companies you'd want to work for, and communicate well. Check their job listings to see if they work with relevant employers. Read reviews on Glassdoor. A good recruiter will understand your career goals, not just push any role.",
  },
  {
    question: "What is EsportsJobs.quest?",
    answer: "We're a job search platform, not a recruitment agency. We aggregate esports and gaming job listings from company career pages, LinkedIn, and other sources into one searchable database. It's free to use. We don't charge fees or make placements—we simply help you find and apply to jobs directly with employers.",
  },
];

export default function EsportsRecruitmentAgency() {
  // Honest schema - we're a website/resource, not an agency
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Guide to Esports Recruitment Agencies in the UK",
    description: "Compare specialist esports and gaming recruitment agencies in the UK",
    author: {
      "@type": "Organization",
      name: "EsportsJobs.quest",
    },
    publisher: {
      "@type": "Organization",
      name: "EsportsJobs.quest",
      url: "https://mvp.actor",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-cyan-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-violet-400">Esports Recruitment Agencies</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Find an{" "}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Esports Recruitment Agency
                </span>
                {" "}in the UK
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Looking for specialist gaming recruiters? Below we&apos;ve listed established
                esports and gaming recruitment agencies operating in the UK. Or search our
                job board for opportunities you can apply to directly.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/esports-jobs-uk"
                  className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
                >
                  Search Esports Jobs
                </Link>
                <a
                  href="#agencies"
                  className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-violet-500 transition-all"
                >
                  View Recruitment Agencies
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are - Authentic Story */}
        <section className="py-12 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Who We Are</h2>
                <p className="text-slate-300 mb-4">
                  We&apos;re not a traditional recruitment agency—we&apos;re a job search platform built by people
                  from the esports industry. We know the scene because we&apos;ve worked in it.
                </p>
                <p className="text-slate-300 mb-4">
                  Like Indeed or LinkedIn Jobs, we aggregate esports and gaming opportunities from company
                  career pages, job boards, and other sources into one searchable place. You apply directly
                  to employers—we&apos;re just making it easier to find the roles.
                </p>
                <p className="text-slate-300">
                  We&apos;re starting fresh and building something useful for the community. If you&apos;d prefer
                  working with a traditional recruiter, we&apos;ve listed some established agencies below.
                </p>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">What We Offer</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-violet-400 mt-1">🎮</span>
                    <span>Industry knowledge—we understand esports roles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-violet-400 mt-1">🔍</span>
                    <span>Aggregated jobs from multiple sources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-violet-400 mt-1">💸</span>
                    <span>Completely free for job seekers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-violet-400 mt-1">🔗</span>
                    <span>Direct applications to employers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Featured Esports Jobs</h2>
                <p className="text-slate-400">Real opportunities from top employers—apply directly</p>
              </div>
              <Link
                href="/esports-jobs-uk"
                className="text-violet-400 hover:text-violet-300 font-medium hidden md:block"
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
                  className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-violet-500/50 transition-all group"
                >
                  <div className="relative h-32">
                    <Image
                      src={job.heroImage}
                      alt={job.heroImageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                    <span className="absolute bottom-2 left-3 px-2 py-1 bg-violet-600/90 text-white text-xs rounded">
                      {job.type}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white mb-1 group-hover:text-violet-400 transition-colors line-clamp-1">
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
                className="inline-block px-6 py-3 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors"
              >
                View All Esports Jobs
              </Link>
            </div>
          </div>
        </section>

        {/* Recruitment Agencies Directory */}
        <section id="agencies" className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Prefer a Traditional Recruiter?</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              If you&apos;d rather work with a dedicated recruiter who can advocate for you, here are
              established UK gaming and esports recruitment agencies. They work on behalf of employers
              and charge fees upon successful placement (free for candidates).
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agencies.map((agency) => (
                <div key={agency.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-violet-500/50 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{agency.name}</h3>
                    <span className="text-xs text-slate-500">Est. {agency.founded}</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">{agency.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {agency.specialisms.map((spec) => (
                      <span key={spec} className="px-2 py-1 bg-violet-600/20 text-violet-400 text-xs rounded">
                        {spec}
                      </span>
                    ))}
                  </div>
                  <a
                    href={agency.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1"
                  >
                    Visit Website →
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-slate-500 text-sm">
              <p>Know an agency we should add? <Link href="/contact" className="text-violet-400 hover:underline">Let us know</Link></p>
            </div>
          </div>
        </section>

        {/* Agency vs Job Board Comparison */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Recruitment Agency vs Job Board</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🤝</span> Using a Recruitment Agency
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Access to unadvertised roles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>CV and interview coaching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Salary negotiation support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Insider knowledge of companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500 mt-1">−</span>
                    <span className="text-slate-400">Limited to agency&apos;s client companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500 mt-1">−</span>
                    <span className="text-slate-400">Recruiter may push unsuitable roles</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-500/50">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔍</span> Using a Job Board (Like Ours)
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
                    <span>No middleman in the process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Completely free to use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500 mt-1">−</span>
                    <span className="text-slate-400">No personalised career advice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500 mt-1">−</span>
                    <span className="text-slate-400">You handle applications yourself</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-slate-400 mb-4">Many job seekers use both approaches—there&apos;s no wrong answer.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Frequently Asked Questions</h2>

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
        <section className="py-20 bg-gradient-to-r from-violet-600/20 via-slate-900 to-cyan-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Search Esports Jobs Now
            </h2>
            <p className="text-slate-300 mb-8">
              Browse hundreds of esports and gaming jobs from top employers across the UK.
              Updated daily from company career pages and job boards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/esports-jobs-uk"
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
              >
                Browse UK Esports Jobs
              </Link>
              <Link
                href="/esports-jobs-remote"
                className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-violet-500 transition-all"
              >
                Remote Esports Jobs
              </Link>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Explore More</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link href="/esports-jobs-uk" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Esports Jobs UK</h3>
                <p className="text-slate-400 text-sm">Browse all UK esports vacancies.</p>
              </Link>
              <Link href="/gaming-jobs-uk" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Gaming Jobs UK</h3>
                <p className="text-slate-400 text-sm">Game development and studio roles.</p>
              </Link>
              <Link href="/esports-careers" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Career Pathways</h3>
                <p className="text-slate-400 text-sm">Explore esports career options.</p>
              </Link>
              <Link href="/esports-salary-guide-uk" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
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
