import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

// Target keywords: "aardvark swift alternative", "aardvark swift esports", "gaming recruitment agency alternative"
export const metadata: Metadata = {
  title: "Aardvark Swift Alternative for Esports Careers 2025 | EsportsJobs.quest",
  description: "Aardvark Swift has 35+ years in gaming recruitment. For esports-specific roles with orgs, tournaments, and broadcasters, discover how EsportsJobs.quest complements your search.",
  keywords: "aardvark swift alternative, aardvark swift esports, gaming recruitment agency, esports jobs, game industry recruiters",
  openGraph: {
    title: "Aardvark Swift Alternative for Esports Careers 2025",
    description: "Compare Aardvark Swift and EsportsJobs.quest for gaming and esports careers.",
    type: "website",
    url: "https://esportsjobs.quest/aardvark-swift-alternative",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aardvark Swift Alternative for Esports Careers 2025",
    description: "Find the right platform for your esports career.",
  },
  alternates: {
    canonical: "https://esportsjobs.quest/aardvark-swift-alternative",
  },
};

const comparisonFeatures = [
  {
    feature: "Years of Experience",
    esportsjobs: { value: true, detail: "Founded 2024, 20+ years founder experience" },
    aardvark: { value: true, detail: "Founded 1989, 35+ years recruiting" },
  },
  {
    feature: "Primary Focus",
    esportsjobs: { value: true, detail: "Esports orgs & competitive gaming" },
    aardvark: { value: true, detail: "Game development & broader gaming" },
  },
  {
    feature: "Esports-Specific Roles",
    esportsjobs: { value: true, detail: "Coaches, analysts, casters, team ops" },
    aardvark: { value: false, detail: "Limited esports specialisation" },
  },
  {
    feature: "Game Dev Roles",
    esportsjobs: { value: false, detail: "Not primary focus" },
    aardvark: { value: true, detail: "Console, mobile, VFX, toys, licensing" },
  },
  {
    feature: "Geographic Reach",
    esportsjobs: { value: true, detail: "UK & European esports focus" },
    aardvark: { value: true, detail: "UK, Europe, North America" },
  },
  {
    feature: "Free Job Browsing",
    esportsjobs: { value: true, detail: "100% free for candidates" },
    aardvark: { value: true, detail: "Free for candidates" },
  },
  {
    feature: "Headhunting Services",
    esportsjobs: { value: true, detail: "Executive search available" },
    aardvark: { value: true, detail: "Retained search & headhunting" },
  },
  {
    feature: "Talent Development",
    esportsjobs: { value: true, detail: "Career guides & salary data" },
    aardvark: { value: true, detail: "Search For A Star, Rising Star competitions" },
  },
  {
    feature: "Tournament/Event Roles",
    esportsjobs: { value: true, detail: "Event producers, broadcast talent" },
    aardvark: { value: false, detail: "Not primary focus" },
  },
];

const platformDetails = {
  esportsjobs: {
    name: "EsportsJobs.quest",
    founded: "2024",
    focus: "Esports organisations, tournaments, and competitive gaming",
    strengths: [
      "100% esports and competitive gaming focus",
      "Roles at esports orgs, tournament operators, broadcasters",
      "Coaching, analysis, and performance positions",
      "UK esports salary benchmarking data",
      "Event and broadcast production roles",
      "Free job posting for employers",
    ],
    bestFor: "Professionals seeking careers in competitive esports, tournament production, team operations, and broadcast",
  },
  aardvark: {
    name: "Aardvark Swift",
    founded: "1989",
    focus: "Game development across console, mobile, VFX, toys, and licensing",
    strengths: [
      "35+ years of gaming industry recruitment experience",
      "Relationships with studios from Gremlin Graphics to modern AAA",
      "Global reach across UK, Europe, and North America",
      "Search For A Star and Rising Star student competitions",
      "Retained search and executive headhunting",
      "Full spectrum from indie to AAA studios",
    ],
    bestFor: "Game developers, artists, programmers, and designers seeking roles at studios worldwide",
  },
};

const faqs = [
  {
    question: "What's the difference between Aardvark Swift and EsportsJobs.quest?",
    answer: "Aardvark Swift is one of the most established names in gaming recruitment, founded in 1989 with 35+ years of experience placing talent at game development studios. EsportsJobs.quest focuses specifically on competitive esports—roles at esports organisations, tournament operators, and broadcast companies. Both serve gaming but in different sectors.",
  },
  {
    question: "Is Aardvark Swift good for esports jobs?",
    answer: "Aardvark Swift mentions esports among their services, but their primary expertise is in game development recruitment. For esports-specific roles like coaching, team management, broadcast production, or tournament operations, EsportsJobs.quest offers a more focused platform.",
  },
  {
    question: "Should I use both platforms?",
    answer: "The gaming and esports industries are intertwined. Many professionals move between studio work and esports roles. Using Aardvark Swift for game development opportunities and EsportsJobs.quest for esports positions covers the full landscape of gaming careers.",
  },
  {
    question: "Which platform has more experience?",
    answer: "Aardvark Swift has 35+ years of recruitment experience, making them one of the longest-established gaming recruiters. EsportsJobs.quest is newer (2024) but is founded by someone with 20+ years of esports industry experience and focuses exclusively on competitive gaming.",
  },
  {
    question: "Which has better UK coverage?",
    answer: "Both have strong UK presence. Aardvark Swift started in the UK in 1989 and has expanded globally. EsportsJobs.quest focuses specifically on UK and European esports organisations. The best choice depends on whether you want game development or esports roles.",
  },
  {
    question: "What's Search For A Star?",
    answer: "Search For A Star is Aardvark Swift's student competition programme that highlights emerging talent to major studios. It's one of their initiatives to nurture the next generation of game developers—showing their commitment to the industry beyond just recruitment.",
  },
];

export default function AardvarkAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Aardvark Swift Alternative for Esports Careers 2025",
    description: "Compare Aardvark Swift and EsportsJobs.quest for gaming and esports careers.",
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
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-amber-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-violet-400">Aardvark Swift Alternative</span>
            </nav>

            <div className="max-w-4xl">
              <p className="text-violet-400 font-medium mb-4">Comparison Guide 2025</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Aardvark Swift Alternative for{" "}
                <span className="bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">
                  Esports Careers
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Aardvark Swift is one of the most established names in gaming recruitment. Founded in 1989,
                they&apos;ve been placing talent since the early days of the UK games industry—working with
                pioneering studios like Gremlin Graphics, Codemasters, and DMA Design (now Rockstar North).
                For game development careers, their 35+ years of experience and network are hard to beat.
              </p>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h2 className="text-lg font-semibold text-white mb-4">Quick Summary</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-violet-400 mb-2">Choose EsportsJobs.quest for:</h3>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>Esports organisation roles</li>
                      <li>Coaching, analysis, performance</li>
                      <li>Tournament & event production</li>
                      <li>Broadcast & casting opportunities</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-amber-400 mb-2">Choose Aardvark Swift for:</h3>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>Game development studio roles</li>
                      <li>Console, mobile, VFX positions</li>
                      <li>Global studio opportunities</li>
                      <li>Executive & senior roles</li>
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
              Two respected platforms serving different parts of the gaming industry.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-4 px-4 text-slate-400 font-medium">Feature</th>
                    <th className="text-center py-4 px-4 text-violet-400 font-medium">EsportsJobs.quest</th>
                    <th className="text-center py-4 px-4 text-amber-400 font-medium">Aardvark Swift</th>
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
                          <span className={`text-2xl ${item.aardvark.value ? "text-emerald-400" : "text-slate-500"}`}>
                            {item.aardvark.value ? "✓" : "○"}
                          </span>
                          <span className="text-xs text-slate-400 mt-1">{item.aardvark.detail}</span>
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
                  Browse Esports Jobs
                </Link>
              </div>

              {/* Aardvark Swift */}
              <div className="bg-slate-800/50 rounded-xl p-8 border border-amber-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{platformDetails.aardvark.name}</h3>
                    <p className="text-slate-400 text-sm">Founded {platformDetails.aardvark.founded}</p>
                  </div>
                </div>

                <p className="text-slate-300 mb-6">{platformDetails.aardvark.focus}</p>

                <div className="mb-6">
                  <h4 className="text-emerald-400 font-semibold mb-3">Strengths</h4>
                  <ul className="space-y-2">
                    {platformDetails.aardvark.strengths.map((strength) => (
                      <li key={strength} className="text-slate-300 text-sm flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">✓</span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-600/10 rounded-lg p-4">
                  <p className="text-sm text-slate-300">
                    <span className="font-semibold text-amber-400">Best for: </span>
                    {platformDetails.aardvark.bestFor}
                  </p>
                </div>

                <a
                  href="https://www.aswift.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full text-center px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors"
                >
                  Visit Aardvark Swift
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The Esports-Specific Difference */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">The Esports-Specific Difference</h2>
            <div className="max-w-4xl">
              <p className="text-slate-300 text-lg mb-6">
                Esports roles often require a different skill set and industry knowledge than traditional
                game development:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-violet-400 mb-3">Esports-Specific Skills</h3>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>Understanding competitive metas and player performance</li>
                    <li>Experience with live broadcast and event production</li>
                    <li>Knowledge of sponsorship, partnerships, and org economics</li>
                    <li>Community management in high-pressure competitive environments</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-amber-400 mb-3">Game Dev Skills</h3>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>Programming languages and game engines</li>
                    <li>Art, animation, and visual design</li>
                    <li>Game design and level design</li>
                    <li>QA, production management, and studio operations</li>
                  </ul>
                </div>
              </div>

              <p className="text-slate-400">
                EsportsJobs.quest aggregates roles from esports organisations, tournament operators,
                broadcasters, and brands specifically investing in competitive gaming.
              </p>
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
        <section className="py-20 bg-gradient-to-r from-violet-600/20 via-slate-900 to-amber-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Focused on Esports?
            </h2>
            <p className="text-slate-300 mb-8">
              Browse dedicated esports roles—coaching, broadcast, events, org operations, and more.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/esports-jobs"
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-amber-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
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
              <Link href="/haptic-recruit-alternative" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">vs Haptic Recruit</h3>
                <p className="text-slate-400 text-sm">Compare with Haptic.</p>
              </Link>
              <Link href="/game-industry-recruiters" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Game Recruiters</h3>
                <p className="text-slate-400 text-sm">All gaming recruitment agencies.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
