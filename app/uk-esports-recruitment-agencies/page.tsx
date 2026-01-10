import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";
import { JobEmbed } from "../components/JobEmbed";

// Target keywords: "esports recruitment agencies uk", "gaming recruitment agencies", "esports job boards"
export const metadata: Metadata = {
  title: "UK Esports Recruitment Agencies & Job Boards Compared 2025",
  description: "Complete guide to UK esports recruitment agencies and job boards. Compare Hitmarker, EsportsJobs.quest, InGame Recruitment, and more to find gaming jobs.",
  keywords: "esports recruitment agencies uk, gaming recruitment agencies, esports job boards, hitmarker, esports jobs uk, gaming recruiters uk",
  openGraph: {
    title: "UK Esports Recruitment Agencies & Job Boards Compared 2025",
    description: "Compare UK esports recruitment agencies and job boards to find your next gaming career opportunity.",
    type: "website",
    url: "https://mvp.actor/uk-esports-recruitment-agencies",
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Esports Recruitment Agencies Compared 2025",
    description: "Find the best UK esports recruitment agencies and job boards.",
  },
  alternates: {
    canonical: "https://mvp.actor/uk-esports-recruitment-agencies",
  },
};

// Comprehensive list of UK esports/gaming recruitment options
const recruitmentOptions = {
  specialist: [
    {
      name: "EsportsJobs.quest",
      type: "Job Board + Recruitment Agency",
      url: "https://mvp.actor",
      focus: "UK & European esports careers",
      description: "Specialist UK esports recruitment with both job board and full agency services. Run by industry professionals with 20+ years experience.",
      ukFocus: true,
      freeJobSeekers: true,
      freeEmployers: true,
      recruitmentServices: true,
      strengths: [
        "100% esports/gaming focused",
        "Full recruitment agency services available",
        "UK salary benchmarking data",
        "Free job posting for employers",
        "Career guides and resources",
      ],
      bestFor: "UK job seekers, employers wanting recruitment support",
    },
    {
      name: "Hitmarker",
      type: "Job Board",
      url: "https://hitmarker.net",
      focus: "Global esports and gaming jobs",
      description: "Established global esports job board with large database of gaming industry positions worldwide.",
      ukFocus: false,
      freeJobSeekers: true,
      freeEmployers: false,
      recruitmentServices: false,
      strengths: [
        "Large global job database",
        "Established since 2017",
        "Wide industry coverage",
        "International opportunities",
        "Gaming CV builder",
      ],
      bestFor: "Global job seekers, large employers with budget",
    },
  ],
  gamingRecruiters: [
    {
      name: "InGame Recruitment",
      type: "Recruitment Agency",
      url: "https://ingamerecruitment.com",
      focus: "Games industry recruitment",
      description: "Specialist games industry agency placing candidates in art, design, programming, production, marketing and analytics roles.",
      ukFocus: true,
      strengths: [
        "Deep games industry expertise",
        "AAA to indie coverage",
        "Global studio placements",
        "Technical and creative roles",
      ],
      bestFor: "Game development roles, studio positions",
    },
    {
      name: "Datascope Recruitment",
      type: "Recruitment Agency",
      url: "https://datascope.co.uk",
      focus: "Games industry boutique consultancy",
      description: "Long-running UK boutique consultancy for games roles across design, production, commercial, QA and programming.",
      ukFocus: true,
      strengths: [
        "Established UK presence",
        "QA and testing specialists",
        "Mobile and online games",
        "Commercial roles",
      ],
      bestFor: "QA, production, and commercial games roles",
    },
    {
      name: "Amiqus",
      type: "Recruitment Agency",
      url: "https://amiqus.com",
      focus: "Interactive entertainment recruitment",
      description: "UK and Europe-focused games recruitment connecting candidates with studios and interactive entertainment companies.",
      ukFocus: true,
      strengths: [
        "UK and European coverage",
        "Interactive entertainment focus",
        "Strong studio relationships",
        "Senior and leadership roles",
      ],
      bestFor: "Senior game dev positions, European opportunities",
    },
  ],
  talentAgencies: [
    {
      name: "Prodigy Agency",
      type: "Talent Representation",
      url: "https://prodigy-agency.gg",
      focus: "Esports player and talent management",
      description: "Player representation agency handling contracts, sponsorships, PR and career management for established pro players and on-air talent.",
      ukFocus: false,
      strengths: [
        "Top-tier player representation",
        "Contract negotiation",
        "Sponsorship deals",
        "Career management",
      ],
      bestFor: "Established pro players and on-air talent",
    },
    {
      name: "Loaded",
      type: "Talent Management",
      url: "https://loaded.gg",
      focus: "Content creator and player management",
      description: "Talent management for content creators and esports professionals, focusing on brand partnerships and career growth.",
      ukFocus: false,
      strengths: [
        "Content creator focus",
        "Brand partnerships",
        "International reach",
        "Full-service management",
      ],
      bestFor: "Content creators, streamers, established talent",
    },
  ],
  generalPlatforms: [
    {
      name: "LinkedIn",
      type: "General Job Platform",
      url: "https://linkedin.com/jobs",
      focus: "Professional networking and jobs",
      description: "General professional platform with some esports roles, particularly business and corporate positions.",
      ukFocus: false,
      strengths: [
        "Large user base",
        "Professional networking",
        "Corporate esports roles",
        "Direct company applications",
      ],
      bestFor: "Senior business roles, corporate esports divisions",
    },
    {
      name: "Indeed",
      type: "Job Aggregator",
      url: "https://indeed.co.uk",
      focus: "General job aggregation",
      description: "Large job aggregator that includes some esports listings, though not specialist.",
      ukFocus: true,
      strengths: [
        "High volume of listings",
        "Easy to search",
        "Salary information",
        "Company reviews",
      ],
      bestFor: "Wide search, entry-level positions",
    },
  ],
  ukSpecific: [
    {
      name: "British Esports Federation",
      type: "Industry Body + Jobs",
      url: "https://britishesports.org",
      focus: "UK esports development",
      description: "National federation highlighting internships, volunteering and junior roles linked to UK events and programmes.",
      ukFocus: true,
      strengths: [
        "Official UK esports body",
        "Grassroots opportunities",
        "Student programmes",
        "Industry connections",
      ],
      bestFor: "Students, graduates, volunteering, grassroots roles",
    },
    {
      name: "Games Jobs Direct",
      type: "Job Board",
      url: "https://gamesjobsdirect.com",
      focus: "UK games industry jobs",
      description: "UK-focused games industry job board, more development than esports but some crossover.",
      ukFocus: true,
      strengths: [
        "UK games focus",
        "Development roles",
        "Studio positions",
        "Regular updates",
      ],
      bestFor: "UK game development roles",
    },
  ],
};

const comparisonTable = [
  { feature: "UK Esports Focus", esportsjobs: true, hitmarker: false, ingame: false },
  { feature: "Free for Job Seekers", esportsjobs: true, hitmarker: true, ingame: true },
  { feature: "Free Job Posting", esportsjobs: true, hitmarker: false, ingame: false },
  { feature: "Recruitment Agency Services", esportsjobs: true, hitmarker: false, ingame: true },
  { feature: "UK Salary Data", esportsjobs: true, hitmarker: false, ingame: false },
  { feature: "Career Guides", esportsjobs: true, hitmarker: true, ingame: false },
  { feature: "Player Representation", esportsjobs: false, hitmarker: false, ingame: false },
  { feature: "Game Dev Roles", esportsjobs: false, hitmarker: true, ingame: true },
];

const faqs = [
  {
    question: "What's the difference between an esports job board and recruitment agency?",
    answer: "Job boards (like Hitmarker) list positions for you to apply to directly. Recruitment agencies (like EsportsJobs.quest's agency services or InGame Recruitment) actively source candidates, screen applications, and present shortlists to employers. Agencies often have access to unadvertised roles and can advocate for candidates during the hiring process.",
  },
  {
    question: "Which esports recruitment agencies are best for UK jobs?",
    answer: "For UK-specific esports roles, EsportsJobs.quest offers both job listings and full recruitment services with deep UK market knowledge. InGame Recruitment and Datascope are excellent for game development positions. British Esports Federation is best for grassroots, student, and entry-level UK opportunities.",
  },
  {
    question: "Do I need to pay to use esports job boards?",
    answer: "No. Job seekers can use platforms like EsportsJobs.quest, Hitmarker, LinkedIn, and Indeed for free. The platforms typically charge employers to post jobs or access premium features. Never pay for job applications.",
  },
  {
    question: "How do esports talent agencies work?",
    answer: "Talent agencies like Prodigy Agency represent established pro players and on-air talent. They negotiate contracts, secure sponsorships, handle PR, and manage careers. They typically take a percentage of earnings. These are for established talent, not entry-level job seekers.",
  },
  {
    question: "Where should I look for entry-level esports jobs in the UK?",
    answer: "Start with EsportsJobs.quest for UK-specific listings, British Esports Federation for grassroots and student opportunities, and company websites/social media of UK organisations like Excel Esports, Guild Esports, and Fnatic. Setting alerts for 'esports' on LinkedIn and Indeed can also surface opportunities.",
  },
  {
    question: "Can recruitment agencies help me get into esports with no experience?",
    answer: "Recruitment agencies typically work with candidates who have some relevant experience. For entry-level, focus on: volunteering at events, building a portfolio, using job boards directly, and networking. Once you have 1-2 years of experience, agencies become more useful for career progression.",
  },
];

export default function UKEsportsRecruitmentAgencies() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "UK Esports Recruitment Agencies & Job Boards Compared 2025",
    description: "Comprehensive guide to UK esports recruitment agencies and gaming job boards.",
    author: {
      "@type": "Organization",
      name: "EsportsJobs.quest",
    },
    publisher: {
      "@type": "Organization",
      name: "EsportsJobs.quest",
      url: "https://mvp.actor",
    },
    datePublished: "2024-12-30",
    dateModified: "2024-12-30",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Browse Jobs" ctaHref="/esports-jobs" />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-cyan-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-recruitment" className="hover:text-white transition-colors">Recruitment</Link>
              <span className="mx-2">/</span>
              <span className="text-violet-400">UK Agencies Compared</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                UK Esports Recruitment Agencies{" "}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Compared 2025
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Complete guide to esports recruitment agencies and job boards for finding gaming industry
                jobs in the UK. Compare specialist esports recruiters, gaming agencies, talent representation,
                and general platforms.
              </p>

              {/* Quick Summary */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h2 className="text-lg font-bold text-white mb-4">Quick Recommendations</h2>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-violet-400 font-bold">→</span>
                    <span><strong className="text-white">UK esports jobs:</strong> EsportsJobs.quest, British Esports Federation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-violet-400 font-bold">→</span>
                    <span><strong className="text-white">Global esports jobs:</strong> Hitmarker, LinkedIn</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-violet-400 font-bold">→</span>
                    <span><strong className="text-white">Game development:</strong> InGame Recruitment, Datascope, Amiqus</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-violet-400 font-bold">→</span>
                    <span><strong className="text-white">Pro player/talent:</strong> Prodigy Agency, Loaded (for established talent only)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Feature Comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-4 px-4 text-slate-400 font-medium">Feature</th>
                    <th className="text-center py-4 px-4 text-violet-400 font-medium">EsportsJobs.quest</th>
                    <th className="text-center py-4 px-4 text-cyan-400 font-medium">Hitmarker</th>
                    <th className="text-center py-4 px-4 text-slate-300 font-medium">InGame Recruitment</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row) => (
                    <tr key={row.feature} className="border-b border-slate-800">
                      <td className="py-4 px-4 text-white">{row.feature}</td>
                      <td className="py-4 px-4 text-center">
                        <span className={row.esportsjobs ? "text-emerald-400 text-xl" : "text-slate-500 text-xl"}>
                          {row.esportsjobs ? "✓" : "○"}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className={row.hitmarker ? "text-emerald-400 text-xl" : "text-slate-500 text-xl"}>
                          {row.hitmarker ? "✓" : "○"}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className={row.ingame ? "text-emerald-400 text-xl" : "text-slate-500 text-xl"}>
                          {row.ingame ? "✓" : "○"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Specialist Esports */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Specialist Esports Job Boards</h2>
            <p className="text-slate-400 mb-8 max-w-3xl">
              Platforms dedicated specifically to esports and gaming industry careers.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {recruitmentOptions.specialist.map((option) => (
                <div key={option.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{option.name}</h3>
                      <span className="text-sm text-violet-400">{option.type}</span>
                    </div>
                    {option.ukFocus && (
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded">UK Focus</span>
                    )}
                  </div>

                  <p className="text-slate-400 text-sm mb-4">{option.description}</p>

                  <div className="mb-4">
                    <span className="text-slate-500 text-sm">Strengths:</span>
                    <ul className="mt-2 space-y-1">
                      {option.strengths.map((s) => (
                        <li key={s} className="text-slate-300 text-sm flex gap-2">
                          <span className="text-emerald-400">✓</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <span className="text-xs text-slate-500">Best for: {option.bestFor}</span>
                    <a
                      href={option.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-violet-400 hover:text-violet-300"
                    >
                      Visit →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Embedded Jobs */}
        <section className="py-8 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <JobEmbed limit={4} title="Current UK Esports Jobs" />
          </div>
        </section>

        {/* Gaming Recruitment Agencies */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Gaming Industry Recruitment Agencies</h2>
            <p className="text-slate-400 mb-8 max-w-3xl">
              Traditional recruitment agencies specialising in games industry placements.
              Better for game development roles than esports-specific positions.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {recruitmentOptions.gamingRecruiters.map((agency) => (
                <div key={agency.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-1">{agency.name}</h3>
                  <span className="text-sm text-cyan-400 block mb-3">{agency.type}</span>
                  <p className="text-slate-400 text-sm mb-4">{agency.description}</p>

                  <ul className="space-y-1 mb-4">
                    {agency.strengths.slice(0, 3).map((s) => (
                      <li key={s} className="text-slate-300 text-xs flex gap-2">
                        <span className="text-emerald-400">•</span>
                        {s}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={agency.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-violet-400 hover:text-violet-300"
                  >
                    Visit {agency.name} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Talent Agencies */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Esports Talent Agencies</h2>
            <p className="text-slate-400 mb-8 max-w-3xl">
              Player and talent representation agencies. These work like sports agents—representing
              established pro players and on-air talent, not entry-level job seekers.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {recruitmentOptions.talentAgencies.map((agency) => (
                <div key={agency.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-1">{agency.name}</h3>
                  <span className="text-sm text-amber-400 block mb-3">{agency.type}</span>
                  <p className="text-slate-400 text-sm mb-4">{agency.description}</p>

                  <ul className="space-y-1 mb-4">
                    {agency.strengths.map((s) => (
                      <li key={s} className="text-slate-300 text-xs flex gap-2">
                        <span className="text-amber-400">•</span>
                        {s}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-amber-500/10 rounded-lg p-3 text-xs text-amber-300">
                    Note: For established pro players and talent only. Not for entry-level job seekers.
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UK-Specific Resources */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">UK-Specific Resources</h2>
            <p className="text-slate-400 mb-8 max-w-3xl">
              Platforms with strong UK focus for esports and gaming careers.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {recruitmentOptions.ukSpecific.map((resource) => (
                <div key={resource.name} className="bg-gradient-to-br from-violet-900/20 to-slate-800/50 rounded-xl p-6 border border-violet-500/30">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">🇬🇧</span>
                    <div>
                      <h3 className="text-lg font-bold text-white">{resource.name}</h3>
                      <span className="text-sm text-violet-400">{resource.type}</span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">{resource.description}</p>

                  <ul className="space-y-1 mb-4">
                    {resource.strengths.map((s) => (
                      <li key={s} className="text-slate-300 text-xs flex gap-2">
                        <span className="text-violet-400">✓</span>
                        {s}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-violet-400 hover:text-violet-300"
                  >
                    Visit →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* General Platforms */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">General Job Platforms</h2>
            <p className="text-slate-400 mb-8 max-w-3xl">
              Mainstream job platforms that sometimes list esports roles. Set alerts for &quot;esports&quot;,
              &quot;gaming&quot;, &quot;broadcast&quot;, or specific game titles.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {recruitmentOptions.generalPlatforms.map((platform) => (
                <div key={platform.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-1">{platform.name}</h3>
                  <span className="text-sm text-slate-400 block mb-3">{platform.type}</span>
                  <p className="text-slate-400 text-sm mb-4">{platform.description}</p>

                  <p className="text-xs text-slate-500">Best for: {platform.bestFor}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-800/80 transition-colors">
                    <span className="font-bold text-white pr-4">{faq.question}</span>
                    <span className="text-violet-400 text-2xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-400">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-violet-600/20 via-slate-900 to-cyan-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Find Your Esports Career?
            </h2>
            <p className="text-slate-300 mb-8">
              Browse current UK esports jobs or get in touch for recruitment support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/esports-jobs-uk"
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold rounded-xl hover:opacity-90 transition-all"
              >
                Browse UK Esports Jobs
              </Link>
              <Link
                href="/esports-recruitment-agency"
                className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-violet-500 transition-all"
              >
                Recruitment Services
              </Link>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Related Resources</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link href="/how-to-get-into-esports" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">How to Get Into Esports</h3>
                <p className="text-slate-400 text-sm">Complete career entry guide.</p>
              </Link>
              <Link href="/esports-salary-guide-uk" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">UK Salary Guide</h3>
                <p className="text-slate-400 text-sm">Esports salary benchmarks.</p>
              </Link>
              <Link href="/esportsjobs-quest-vs-hitmarker" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">vs Hitmarker</h3>
                <p className="text-slate-400 text-sm">Detailed platform comparison.</p>
              </Link>
              <Link href="/top-esports-companies-uk" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Top UK Companies</h3>
                <p className="text-slate-400 text-sm">Who&apos;s hiring in UK esports.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
