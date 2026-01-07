import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

// Target keywords: "haptic recruit alternative", "haptic alternative esports", "gaming recruitment vs esports"
export const metadata: Metadata = {
  title: "Haptic Recruit Alternative for Esports Jobs 2025 | EsportsJobs.quest",
  description: "Looking for esports-specific recruitment? Haptic Recruit excels at gaming studio roles. For dedicated esports positions, discover how EsportsJobs.quest complements your search.",
  keywords: "haptic recruit alternative, haptic alternative, gaming recruitment agency, esports recruitment, haptic recruit review",
  openGraph: {
    title: "Haptic Recruit Alternative for Esports Jobs 2025",
    description: "Compare Haptic Recruit and EsportsJobs.quest for gaming and esports careers.",
    type: "website",
    url: "https://esportsjobs.quest/haptic-recruit-alternative",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haptic Recruit Alternative for Esports Jobs 2025",
    description: "Find the right platform for your esports career.",
  },
  alternates: {
    canonical: "https://esportsjobs.quest/haptic-recruit-alternative",
  },
};

const comparisonFeatures = [
  {
    feature: "Primary Focus",
    esportsjobs: { value: true, detail: "Esports organisations & competitive gaming" },
    haptic: { value: true, detail: "Game development studios" },
  },
  {
    feature: "Esports-Specific Roles",
    esportsjobs: { value: true, detail: "Coaches, analysts, casters, team ops" },
    haptic: { value: false, detail: "Limited esports focus" },
  },
  {
    feature: "Game Dev Roles",
    esportsjobs: { value: false, detail: "Not primary focus" },
    haptic: { value: true, detail: "Art, animation, programming, design" },
  },
  {
    feature: "UK Market Focus",
    esportsjobs: { value: true, detail: "UK & European esports specialist" },
    haptic: { value: true, detail: "UK & European gaming studios" },
  },
  {
    feature: "Free Job Browsing",
    esportsjobs: { value: true, detail: "100% free for candidates" },
    haptic: { value: true, detail: "Free for candidates" },
  },
  {
    feature: "Recruitment Agency Services",
    esportsjobs: { value: true, detail: "Full recruitment & headhunting" },
    haptic: { value: true, detail: "Talent search & placement" },
  },
  {
    feature: "Tournament/Event Roles",
    esportsjobs: { value: true, detail: "Event producers, broadcast talent" },
    haptic: { value: false, detail: "Not primary focus" },
  },
  {
    feature: "Salary Guides",
    esportsjobs: { value: true, detail: "UK esports salary benchmarks" },
    haptic: { value: false, detail: "Not available" },
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
  haptic: {
    name: "Haptic Recruit",
    founded: "Established gaming recruitment agency",
    focus: "Game development studios across UK and Europe",
    strengths: [
      "Deep relationships with AAA and indie studios",
      "Specialist consultants across art, animation, design",
      "Strong network including Hello Games, Moon Studios, Deck Nine",
      "Programming, production, and QA expertise",
      "People-first recruitment approach",
      "Full-service talent search and placement",
    ],
    bestFor: "Game developers, artists, animators, programmers, and designers seeking studio roles",
  },
};

const faqs = [
  {
    question: "What's the difference between Haptic Recruit and EsportsJobs.quest?",
    answer: "Haptic Recruit specialises in game development studio recruitment—placing artists, animators, programmers, and designers at gaming studios. EsportsJobs.quest focuses on the competitive esports industry—roles at esports organisations, tournament operators, and broadcast companies. Both serve the gaming industry but in different sectors.",
  },
  {
    question: "Should I use both platforms?",
    answer: "If your skills span both game development and esports, absolutely. Many professionals work in both sectors at different points in their career. A producer might work on game launches and esports broadcasts. Using both platforms maximises your opportunities.",
  },
  {
    question: "Which platform is better for esports coaching or analyst roles?",
    answer: "EsportsJobs.quest is specifically focused on competitive esports roles including coaches, analysts, performance managers, and team operations. These roles are our core focus, whereas Haptic Recruit specialises in game development positions.",
  },
  {
    question: "Is Haptic Recruit free for job seekers?",
    answer: "Yes, both platforms are free for candidates. Haptic Recruit operates as a recruitment agency connecting talent with studios, while EsportsJobs.quest is both a job board and recruitment agency focused on esports.",
  },
  {
    question: "Which has more UK jobs?",
    answer: "Both have strong UK presence. Haptic Recruit has extensive relationships with UK and European game studios. EsportsJobs.quest focuses on UK esports organisations, tournament operators, and broadcast companies. The best choice depends on whether you want game development or esports roles.",
  },
];

export default function HapticAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Haptic Recruit Alternative for Esports Jobs 2025",
    description: "Compare Haptic Recruit and EsportsJobs.quest for gaming and esports careers.",
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
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-emerald-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-violet-400">Haptic Recruit Alternative</span>
            </nav>

            <div className="max-w-4xl">
              <p className="text-violet-400 font-medium mb-4">Comparison Guide 2025</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Haptic Recruit Alternative for{" "}
                <span className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
                  Esports Roles
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Haptic Recruit has built an excellent reputation in UK and European gaming recruitment,
                with deep relationships at studios like Hello Games, Moon Studios, and Deck Nine.
                If you&apos;re looking for a role at a game studio, Haptic is a strong choice.
                But if your career goals are specifically in <strong className="text-white">esports</strong>—working
                with competitive teams, tournament organisers, or broadcasters—you might benefit from
                a more specialised platform.
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
                    <h3 className="font-medium text-emerald-400 mb-2">Choose Haptic Recruit for:</h3>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>Game development studio roles</li>
                      <li>Art, animation, 3D artists</li>
                      <li>Programming & engineering</li>
                      <li>Game design & production</li>
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
              Different platforms for different career paths in gaming.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-4 px-4 text-slate-400 font-medium">Feature</th>
                    <th className="text-center py-4 px-4 text-violet-400 font-medium">EsportsJobs.quest</th>
                    <th className="text-center py-4 px-4 text-emerald-400 font-medium">Haptic Recruit</th>
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
                          <span className={`text-2xl ${item.haptic.value ? "text-emerald-400" : "text-slate-500"}`}>
                            {item.haptic.value ? "✓" : "○"}
                          </span>
                          <span className="text-xs text-slate-400 mt-1">{item.haptic.detail}</span>
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

              {/* Haptic Recruit */}
              <div className="bg-slate-800/50 rounded-xl p-8 border border-emerald-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center text-2xl">
                    🎨
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{platformDetails.haptic.name}</h3>
                    <p className="text-slate-400 text-sm">{platformDetails.haptic.founded}</p>
                  </div>
                </div>

                <p className="text-slate-300 mb-6">{platformDetails.haptic.focus}</p>

                <div className="mb-6">
                  <h4 className="text-emerald-400 font-semibold mb-3">Strengths</h4>
                  <ul className="space-y-2">
                    {platformDetails.haptic.strengths.map((strength) => (
                      <li key={strength} className="text-slate-300 text-sm flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">✓</span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-emerald-600/10 rounded-lg p-4">
                  <p className="text-sm text-slate-300">
                    <span className="font-semibold text-emerald-400">Best for: </span>
                    {platformDetails.haptic.bestFor}
                  </p>
                </div>

                <a
                  href="https://www.wearehaptic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full text-center px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors"
                >
                  Visit Haptic Recruit
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Using Both Section */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Using Both Platforms</h2>
            <div className="max-w-4xl">
              <p className="text-slate-300 text-lg mb-6">
                Many esports professionals have skills that cross both worlds. A producer might work on
                game launches <em>and</em> esports broadcasts. A community manager might support a studio
                <em> and</em> an esports org.
              </p>
              <p className="text-slate-400 mb-8">
                There&apos;s no reason not to use Haptic for studio opportunities and EsportsJobs.quest
                for esports-specific roles. The industries overlap, and covering both maximises your options.
              </p>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Roles That Span Both Sectors</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-slate-300 text-sm">
                    <span className="text-violet-400 font-medium">Producer</span>
                    <p className="text-slate-400 mt-1">Game launches → Esports broadcasts</p>
                  </div>
                  <div className="text-slate-300 text-sm">
                    <span className="text-violet-400 font-medium">Community Manager</span>
                    <p className="text-slate-400 mt-1">Studio community → Org community</p>
                  </div>
                  <div className="text-slate-300 text-sm">
                    <span className="text-violet-400 font-medium">Marketing</span>
                    <p className="text-slate-400 mt-1">Game marketing → Esports marketing</p>
                  </div>
                </div>
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-violet-600/20 via-slate-900 to-emerald-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Looking for Esports Roles Specifically?
            </h2>
            <p className="text-slate-300 mb-8">
              Browse dedicated esports roles—coaching, broadcast, events, org operations, and more.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/esports-jobs"
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-emerald-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
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
              <Link href="/esportsjobs-quest-vs-hitmarker" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">vs Hitmarker</h3>
                <p className="text-slate-400 text-sm">Compare with Hitmarker.</p>
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
