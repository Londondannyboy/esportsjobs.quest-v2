import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

// Target keywords: "hitmarker alternative", "esportsjobs vs hitmarker", "hitmarker jobs"
export const metadata: Metadata = {
  title: "EsportsJobs.quest vs Hitmarker 2025 | Best Esports Job Board Comparison",
  description: "Compare EsportsJobs.quest vs Hitmarker for finding esports jobs in 2025. See pricing, features, job listings, and which platform is best for UK esports careers.",
  keywords: "hitmarker alternative, esportsjobs vs hitmarker, hitmarker jobs, esports job board comparison, hitmarker review",
  openGraph: {
    title: "EsportsJobs.quest vs Hitmarker 2025 | Esports Job Board Comparison",
    description: "Detailed comparison of EsportsJobs.quest and Hitmarker for esports job seekers and employers.",
    type: "website",
    url: "https://esportsjobs.quest/esportsjobs-quest-vs-hitmarker",
  },
  twitter: {
    card: "summary_large_image",
    title: "EsportsJobs.quest vs Hitmarker 2025",
    description: "Which esports job board is right for you? Full comparison inside.",
  },
  alternates: {
    canonical: "https://esportsjobs.quest/esportsjobs-quest-vs-hitmarker",
  },
};

const comparisonFeatures = [
  {
    feature: "UK Esports Focus",
    esportsjobs: { value: true, detail: "100% UK & European focus" },
    hitmarker: { value: false, detail: "Global, less UK-specific" },
  },
  {
    feature: "Specialist Recruitment Agency",
    esportsjobs: { value: true, detail: "Full recruitment services available" },
    hitmarker: { value: false, detail: "Job board only" },
  },
  {
    feature: "Free Job Posting",
    esportsjobs: { value: true, detail: "Free basic listings" },
    hitmarker: { value: false, detail: "Paid listings only" },
  },
  {
    feature: "Career Guides & Resources",
    esportsjobs: { value: true, detail: "Extensive UK salary guides, career paths" },
    hitmarker: { value: true, detail: "Blog and resources available" },
  },
  {
    feature: "Salary Information",
    esportsjobs: { value: true, detail: "UK-specific salary benchmarks" },
    hitmarker: { value: true, detail: "Some salary data" },
  },
  {
    feature: "Direct Employer Contact",
    esportsjobs: { value: true, detail: "Apply direct to employers" },
    hitmarker: { value: true, detail: "Apply through platform" },
  },
  {
    feature: "Gaming Industry Jobs",
    esportsjobs: { value: true, detail: "Esports + wider gaming" },
    hitmarker: { value: true, detail: "Esports + gaming + adjacent" },
  },
  {
    feature: "Headhunting Services",
    esportsjobs: { value: true, detail: "Executive search available" },
    hitmarker: { value: false, detail: "Not offered" },
  },
  {
    feature: "Entry-Level Focus",
    esportsjobs: { value: true, detail: "Dedicated entry-level section" },
    hitmarker: { value: true, detail: "Entry-level jobs available" },
  },
  {
    feature: "Remote Jobs Filter",
    esportsjobs: { value: true, detail: "Dedicated remote jobs page" },
    hitmarker: { value: true, detail: "Remote filter available" },
  },
];

const platformDetails = {
  esportsjobs: {
    name: "EsportsJobs.quest",
    founded: "2024",
    focus: "UK & European esports recruitment",
    pricing: "Free for job seekers, flexible employer pricing",
    strengths: [
      "Deep UK esports market expertise",
      "Full recruitment agency services",
      "Founder with 20+ years industry experience",
      "Personalised candidate support",
      "UK salary benchmarking data",
      "Free job posting options",
    ],
    considerations: [
      "Newer platform (launched 2024)",
      "Smaller global job volume",
      "UK/Europe focused (less US coverage)",
    ],
    bestFor: "UK-based job seekers, employers wanting recruitment support, those seeking specialist agency services",
  },
  hitmarker: {
    name: "Hitmarker",
    founded: "2017",
    focus: "Global esports and gaming jobs",
    pricing: "Paid job listings, subscription options",
    strengths: [
      "Established platform since 2017",
      "Large global job database",
      "Wide industry coverage",
      "Strong brand recognition",
      "International reach",
      "Active community",
    ],
    considerations: [
      "No recruitment agency services",
      "Less UK-specific focus",
      "Paid listings may limit smaller employers",
    ],
    bestFor: "Global job seekers, large employers with budget, those wanting wide geographic coverage",
  },
};

const faqs = [
  {
    question: "Is Hitmarker free to use?",
    answer: "Hitmarker is free for job seekers to browse and apply for jobs. However, employers typically pay to post job listings on the platform. EsportsJobs.quest offers free basic job posting options for employers as well as free access for job seekers, plus optional recruitment agency services for those wanting more support.",
  },
  {
    question: "Which platform has more UK esports jobs?",
    answer: "EsportsJobs.quest is specifically focused on the UK and European esports market, with dedicated pages for London, Manchester, Birmingham, and other UK cities. While Hitmarker has UK jobs, their global focus means UK-specific roles may be diluted among international listings. For UK job seekers, EsportsJobs.quest offers more targeted local opportunities.",
  },
  {
    question: "What's the best Hitmarker alternative for UK esports jobs?",
    answer: "EsportsJobs.quest is the leading Hitmarker alternative for UK-based esports professionals. Key advantages include: specialist UK focus, free job posting for employers, full recruitment agency services, UK salary guides, and a founder with 20+ years of esports industry experience. Other alternatives include LinkedIn, Indeed, and general gaming job boards.",
  },
  {
    question: "Do I need to pay to apply for jobs on these platforms?",
    answer: "No - both EsportsJobs.quest and Hitmarker are completely free for job seekers. You can browse listings and apply for positions without any cost. The platforms make money from employers who post jobs or use additional services.",
  },
  {
    question: "Which platform is better for entry-level esports jobs?",
    answer: "Both platforms cater to entry-level candidates. EsportsJobs.quest has a dedicated entry-level esports jobs section and career guides specifically for those breaking into the industry. The 'How to Get Into Esports' guide and entry-level job filtering make it particularly useful for newcomers. Hitmarker also lists entry-level positions across their global database.",
  },
  {
    question: "Can employers post jobs for free?",
    answer: "EsportsJobs.quest offers free basic job posting options for employers, making it accessible for smaller esports organisations and startups. Hitmarker primarily operates on a paid model for job postings. For employers on a budget, EsportsJobs.quest provides a more cost-effective entry point.",
  },
  {
    question: "Which platform offers recruitment services?",
    answer: "EsportsJobs.quest is both a job board AND a specialist esports recruitment agency. This means employers can choose to post jobs directly or engage full recruitment services including headhunting, candidate screening, and executive search. Hitmarker is purely a job board platform without recruitment agency services.",
  },
];

export default function ComparisonPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "EsportsJobs.quest vs Hitmarker: Esports Job Board Comparison 2025",
    description: "Comprehensive comparison of EsportsJobs.quest and Hitmarker for esports job seekers and employers.",
    author: {
      "@type": "Person",
      name: "Dan Keegan",
      jobTitle: "Founder, EsportsJobs.quest",
    },
    publisher: {
      "@type": "Organization",
      name: "EsportsJobs.quest",
      url: "https://esportsjobs.quest",
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
              <span className="text-violet-400">EsportsJobs.quest vs Hitmarker</span>
            </nav>

            <div className="max-w-4xl">
              <p className="text-violet-400 font-medium mb-4">Comparison Guide 2025</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                EsportsJobs.quest vs Hitmarker:{" "}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Which Is Best for You?
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Looking for the best esports job board? We compare EsportsJobs.quest and Hitmarker
                across features, pricing, and UK job coverage to help you choose the right platform
                for your esports career or hiring needs.
              </p>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h2 className="text-lg font-semibold text-white mb-4">Quick Summary</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-violet-400 mb-2">Choose EsportsJobs.quest if:</h3>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>You&apos;re focused on UK/European esports jobs</li>
                      <li>You want recruitment agency support</li>
                      <li>You&apos;re an employer wanting free job posting</li>
                      <li>You need UK salary benchmarking</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-cyan-400 mb-2">Choose Hitmarker if:</h3>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>You want global job coverage</li>
                      <li>You prefer an established platform</li>
                      <li>You&apos;re targeting US/international roles</li>
                      <li>You want the largest job database</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Feature Comparison</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              Side-by-side comparison of key features for job seekers and employers.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-4 px-4 text-slate-400 font-medium">Feature</th>
                    <th className="text-center py-4 px-4 text-violet-400 font-medium">EsportsJobs.quest</th>
                    <th className="text-center py-4 px-4 text-cyan-400 font-medium">Hitmarker</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((item) => (
                    <tr key={item.feature} className="border-b border-slate-800">
                      <td className="py-4 px-4 text-white font-medium">{item.feature}</td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex flex-col items-center">
                          <span className={`text-2xl ${item.esportsjobs.value ? "text-emerald-400" : "text-slate-500"}`}>
                            {item.esportsjobs.value ? "✓" : "○"}
                          </span>
                          <span className="text-xs text-slate-400 mt-1">{item.esportsjobs.detail}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex flex-col items-center">
                          <span className={`text-2xl ${item.hitmarker.value ? "text-emerald-400" : "text-slate-500"}`}>
                            {item.hitmarker.value ? "✓" : "○"}
                          </span>
                          <span className="text-xs text-slate-400 mt-1">{item.hitmarker.detail}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Platform Deep Dives */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Platform Deep Dive</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* EsportsJobs.quest */}
              <div className="bg-slate-800/50 rounded-xl p-8 border border-violet-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-violet-600/20 rounded-lg flex items-center justify-center text-2xl">
                    🎮
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{platformDetails.esportsjobs.name}</h3>
                    <p className="text-slate-400 text-sm">Founded {platformDetails.esportsjobs.founded}</p>
                  </div>
                </div>

                <p className="text-slate-300 mb-6">{platformDetails.esportsjobs.focus}</p>

                <div className="mb-6">
                  <h4 className="text-emerald-400 font-semibold mb-3">Strengths</h4>
                  <ul className="space-y-2">
                    {platformDetails.esportsjobs.strengths.map((strength) => (
                      <li key={strength} className="text-slate-300 text-sm flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">✓</span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-amber-400 font-semibold mb-3">Considerations</h4>
                  <ul className="space-y-2">
                    {platformDetails.esportsjobs.considerations.map((item) => (
                      <li key={item} className="text-slate-300 text-sm flex items-start gap-2">
                        <span className="text-amber-400 mt-0.5">○</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-violet-600/10 rounded-lg p-4">
                  <p className="text-sm text-slate-300">
                    <span className="font-semibold text-violet-400">Best for: </span>
                    {platformDetails.esportsjobs.bestFor}
                  </p>
                </div>

                <Link
                  href="/esports-jobs"
                  className="mt-6 block w-full text-center px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-500 transition-colors"
                >
                  Browse Jobs on EsportsJobs.quest
                </Link>
              </div>

              {/* Hitmarker */}
              <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{platformDetails.hitmarker.name}</h3>
                    <p className="text-slate-400 text-sm">Founded {platformDetails.hitmarker.founded}</p>
                  </div>
                </div>

                <p className="text-slate-300 mb-6">{platformDetails.hitmarker.focus}</p>

                <div className="mb-6">
                  <h4 className="text-emerald-400 font-semibold mb-3">Strengths</h4>
                  <ul className="space-y-2">
                    {platformDetails.hitmarker.strengths.map((strength) => (
                      <li key={strength} className="text-slate-300 text-sm flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">✓</span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-amber-400 font-semibold mb-3">Considerations</h4>
                  <ul className="space-y-2">
                    {platformDetails.hitmarker.considerations.map((item) => (
                      <li key={item} className="text-slate-300 text-sm flex items-start gap-2">
                        <span className="text-amber-400 mt-0.5">○</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-cyan-600/10 rounded-lg p-4">
                  <p className="text-sm text-slate-300">
                    <span className="font-semibold text-cyan-400">Best for: </span>
                    {platformDetails.hitmarker.bestFor}
                  </p>
                </div>

                <a
                  href="https://hitmarker.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full text-center px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors"
                >
                  Visit Hitmarker
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Consider EsportsJobs.quest */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Why UK Job Seekers Choose EsportsJobs.quest</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              While Hitmarker is a solid global platform, here&apos;s why UK esports professionals often prefer EsportsJobs.quest.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">🇬🇧</div>
                <h3 className="text-lg font-bold text-white mb-2">UK Market Expertise</h3>
                <p className="text-slate-400 text-sm">
                  We know the UK esports scene inside out. From Excel Esports to Guild, from London to Edinburgh,
                  our local focus means better matches for UK roles.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-lg font-bold text-white mb-2">Recruitment Agency Services</h3>
                <p className="text-slate-400 text-sm">
                  Unlike Hitmarker, we offer full recruitment services. Employers can use our headhunting,
                  screening, and executive search capabilities.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-lg font-bold text-white mb-2">UK Salary Data</h3>
                <p className="text-slate-400 text-sm">
                  Our UK Esports Salary Guide provides accurate GBP salary benchmarks for roles across
                  the industry—essential for negotiations.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="text-lg font-bold text-white mb-2">Career Resources</h3>
                <p className="text-slate-400 text-sm">
                  Extensive guides on how to get into esports, career paths for coaches, analysts,
                  marketers, and broadcasters—all UK-focused.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">🆓</div>
                <h3 className="text-lg font-bold text-white mb-2">Free for Employers</h3>
                <p className="text-slate-400 text-sm">
                  We offer free job posting options, making it accessible for smaller UK esports
                  organisations and startups to find talent.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-4">👨‍💼</div>
                <h3 className="text-lg font-bold text-white mb-2">20+ Years Experience</h3>
                <p className="text-slate-400 text-sm">
                  Founded by Dan Keegan with over 20 years in esports. Real industry connections,
                  not just a tech platform.
                </p>
              </div>
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

        {/* Other Alternatives */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Other Esports Job Board Alternatives</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              Beyond EsportsJobs.quest and Hitmarker, here are other platforms to consider:
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="font-bold text-white mb-2">LinkedIn</h3>
                <p className="text-slate-400 text-sm mb-3">General platform with some esports roles. Good for networking but less specialist.</p>
                <span className="text-xs text-slate-500">Best for: Senior roles, corporate esports</span>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="font-bold text-white mb-2">Indeed</h3>
                <p className="text-slate-400 text-sm mb-3">Large job aggregator. Volume over quality for esports-specific roles.</p>
                <span className="text-xs text-slate-500">Best for: Wide search, entry-level</span>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="font-bold text-white mb-2">Work With Indies</h3>
                <p className="text-slate-400 text-sm mb-3">Focused on indie game development rather than esports specifically.</p>
                <span className="text-xs text-slate-500">Best for: Game dev roles</span>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="font-bold text-white mb-2">Games Jobs Direct</h3>
                <p className="text-slate-400 text-sm mb-3">UK games industry focus but more development than esports.</p>
                <span className="text-xs text-slate-500">Best for: UK game dev</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-violet-600/20 via-slate-900 to-cyan-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Find Your Next Esports Role?
            </h2>
            <p className="text-slate-300 mb-8">
              Whether you choose EsportsJobs.quest, Hitmarker, or both—the important thing is to
              start your search. We&apos;re here to help UK esports professionals find their dream roles.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/esports-jobs"
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
              >
                Browse Esports Jobs
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
              <Link href="/esports-jobs-uk" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Esports Jobs UK</h3>
                <p className="text-slate-400 text-sm">Browse UK esports opportunities.</p>
              </Link>
              <Link href="/esports-salary-guide-uk" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">UK Salary Guide</h3>
                <p className="text-slate-400 text-sm">Esports salary benchmarks.</p>
              </Link>
              <Link href="/how-to-get-into-esports" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">How to Get Into Esports</h3>
                <p className="text-slate-400 text-sm">Career entry guide.</p>
              </Link>
              <Link href="/esports-recruitment-agency" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Recruitment Agency</h3>
                <p className="text-slate-400 text-sm">Full recruitment services.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
