import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";
import { RealJobsSection } from "../components/RealJobsSection";

// Target keyword: "game industry recruiters"
export const metadata: Metadata = {
  title: "Game Industry Recruiters 🎯 Top Agencies",
  description: "🎮 Game industry recruiters - compare top gaming & esports recruitment agencies. Find specialist headhunters for studios and esports organisations.",
  keywords: "game industry recruiters, gaming recruiters, esports recruiters",
  openGraph: {
    title: "Game Industry Recruiters 🎯 Top Agencies",
    description: "🎮 Game industry recruiters - compare top gaming & esports recruitment agencies.",
    type: "website",
    url: "https://mvp.actor/game-industry-recruiters",
  },
  twitter: {
    card: "summary_large_image",
    title: "Game Industry Recruiters 🎯 Top Agencies",
    description: "🎮 Game industry recruiters - compare top gaming & esports recruitment agencies.",
  },
  alternates: {
    canonical: "https://mvp.actor/game-industry-recruiters",
  },
};

const recruiters = [
  {
    name: "Aardvark Swift",
    specialty: "Game Development",
    description: "UK's longest-established video games recruitment agency, placing talent at studios like Rockstar, EA, and Ubisoft since 1989.",
    location: "UK",
    website: "https://www.aardvarkswift.com",
    roles: ["Programmers", "Artists", "Designers", "Producers", "QA"],
  },
  {
    name: "InGame Careers",
    specialty: "Gaming & Esports",
    description: "Specialist gaming and esports recruitment agency connecting talent with game studios, publishers, and esports organisations.",
    location: "UK",
    website: "https://ingamerecruitment.com",
    roles: ["Esports", "Marketing", "Development", "Publishing"],
  },
  {
    name: "OPM Jobs",
    specialty: "Game Development",
    description: "International games industry recruitment agency with offices in the UK and Canada, specialising in AAA studio placements.",
    location: "UK/Canada",
    website: "https://opmjobs.com",
    roles: ["Technical Art", "Engineering", "Design", "Production"],
  },
  {
    name: "Amiqus",
    specialty: "Games & Interactive",
    description: "Creative industries recruitment consultancy with a dedicated games division, working with studios across the UK and Europe.",
    location: "UK",
    website: "https://amiqus.com",
    roles: ["Creative", "Technical", "Leadership", "Publishing"],
  },
  {
    name: "Datascope Recruitment",
    specialty: "Games Technology",
    description: "Technology recruitment specialist with gaming expertise, placing developers and engineers at game studios and gaming tech companies.",
    location: "UK",
    website: "https://datascope.co.uk",
    roles: ["Engineers", "Developers", "Data Scientists", "DevOps"],
  },
  {
    name: "Creative Assembly Talent",
    specialty: "Game Studios",
    description: "Internal talent acquisition for Creative Assembly (Total War, Alien: Isolation), one of Europe's largest game developers.",
    location: "UK",
    website: "https://www.creative-assembly.com/careers",
    roles: ["All Game Dev Roles", "Publishing", "Marketing"],
  },
  {
    name: "Games Jobs Direct",
    specialty: "Game Industry Jobs",
    description: "Job board and recruitment service focused exclusively on the video games industry, listing opportunities globally.",
    location: "Global",
    website: "https://gamesjobsdirect.com",
    roles: ["All Disciplines", "All Levels"],
  },
  {
    name: "Hitmarker",
    specialty: "Gaming & Esports",
    description: "Modern gaming and esports job platform connecting professionals with opportunities at game companies and esports organisations.",
    location: "Global",
    website: "https://hitmarker.net",
    roles: ["Esports", "Streaming", "Content", "Development"],
  },
];

const esportsRecruiters = [
  {
    name: "Esports Jobs Quest",
    description: "Free esports job aggregator pulling listings from LinkedIn, company sites, and job boards. Browse and apply direct to employers.",
    focus: "Esports & Gaming Careers",
    link: "/",
  },
  {
    name: "Hitmarker",
    description: "Dedicated gaming and esports jobs platform with listings from orgs like Team Liquid, Cloud9, and Fnatic.",
    focus: "Esports Organisations",
    link: "https://hitmarker.net",
  },
  {
    name: "InGame Careers",
    description: "UK-based esports recruitment agency working with gaming companies and esports organisations.",
    focus: "UK Esports & Gaming",
    link: "https://ingamerecruitment.com",
  },
];

const faqs = [
  {
    question: "What do game industry recruiters do?",
    answer: "Game industry recruiters connect talented professionals with job opportunities at video game studios, publishers, esports organisations, and gaming companies. They source candidates, screen applications, coordinate interviews, and help negotiate offers. Recruiters can be in-house (working for one company) or agency-based (working with multiple clients). They specialise in gaming-specific roles like game designers, programmers, artists, producers, and esports professionals.",
  },
  {
    question: "How do I find a good gaming recruiter?",
    answer: "To find a good gaming recruiter: 1) Look for specialists who focus on games/esports rather than general tech recruiters. 2) Check their track record—do they work with studios you'd want to join? 3) Read reviews from candidates they've placed. 4) Engage with recruiters active on LinkedIn and games industry events. 5) Ask for referrals from people already working in gaming. The best recruiters understand game development pipelines and can advocate effectively for your skills.",
  },
  {
    question: "Do game industry recruiters charge candidates fees?",
    answer: "Legitimate game industry recruiters do not charge candidates fees. Recruiters are paid by the hiring company (typically 15-25% of the candidate's first-year salary) when they successfully place someone. If a recruiter asks you for money, that's a major red flag. You should never pay to be considered for a job or to have your CV distributed to game studios.",
  },
  {
    question: "What's the difference between game recruiters and esports recruiters?",
    answer: "Game recruiters typically focus on video game development roles: programmers, artists, designers, producers, and QA at studios and publishers. Esports recruiters specialise in competitive gaming organisations and roles like coaches, analysts, content creators, marketing managers, and event organisers. Some agencies like InGame Careers and Hitmarker cover both, while others specialise in one area. The skill sets and company cultures differ significantly between game development and esports.",
  },
  {
    question: "Should I use a recruiter or apply directly to game companies?",
    answer: "Both approaches have merit. Recruiters can: provide access to unlisted roles, advocate for your candidacy, help with salary negotiations, and offer market insights. Direct applications work well when: you have a strong portfolio/network, the company has a clear application process, or you're targeting a specific studio. Many successful candidates use both—working with trusted recruiters while also applying directly to dream companies. Don't rely solely on recruiters; build your own network too.",
  },
  {
    question: "How long does it take to get a gaming job through a recruiter?",
    answer: "Timelines vary significantly. If a recruiter has an active role matching your skills, you could interview within days and receive an offer within 2-4 weeks. However, if they're building relationships or waiting for suitable roles, it could take months. Game studio hiring often involves multiple interview rounds, portfolio reviews, and sometimes test projects, extending timelines to 4-8 weeks from first contact to offer. Be patient but stay proactive in your job search.",
  },
  {
    question: "What information should I share with a game recruiter?",
    answer: "Share: your updated CV/resume, portfolio (essential for art/design roles), LinkedIn profile, salary expectations, location preferences (remote/relocate), visa status if relevant, and what type of games/companies interest you. Be honest about your experience level and career goals. Don't share: sensitive personal information, current employer's confidential projects, or information you wouldn't want shared with potential employers. A good recruiter will respect confidentiality.",
  },
  {
    question: "Are there recruiters who specialise in remote gaming jobs?",
    answer: "Yes, many recruiters now specialise in or include remote gaming roles. Since the pandemic, major studios like Riot Games, Blizzard, and many indie developers offer remote positions. Platforms like Hitmarker and We Work Remotely list remote gaming jobs. When working with recruiters, specify your remote work preferences upfront. Note that some roles (live ops, certain production roles) may require occasional on-site presence even for primarily remote positions.",
  },
];

const whyUseRecruiters = [
  {
    title: "Access Hidden Jobs",
    description: "Many gaming roles are filled before being publicly posted. Recruiters have relationships with studios and can put you forward for unlisted opportunities.",
    icon: "🔓",
  },
  {
    title: "Industry Expertise",
    description: "Specialist gaming recruiters understand the industry, from game dev pipelines to esports org structures. They can position your skills effectively.",
    icon: "🎮",
  },
  {
    title: "Salary Negotiation",
    description: "Recruiters know market rates and can negotiate on your behalf, often securing better compensation than you'd get negotiating alone.",
    icon: "💰",
  },
  {
    title: "Interview Preparation",
    description: "Good recruiters prep you for interviews, share insights about the company culture, and help you avoid common pitfalls.",
    icon: "📋",
  },
];

export default function GameIndustryRecruiters() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://mvp.actor/game-industry-recruiters#webpage",
        url: "https://mvp.actor/game-industry-recruiters",
        name: "Game Industry Recruiters | Top Gaming & Esports Recruitment Agencies",
        description: "Find the best game industry recruiters and gaming recruitment agencies for your career.",
        isPartOf: { "@id": "https://mvp.actor/#website" },
        breadcrumb: { "@id": "https://mvp.actor/game-industry-recruiters#breadcrumb" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://mvp.actor/game-industry-recruiters#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://mvp.actor" },
          { "@type": "ListItem", position: 2, name: "Game Industry Recruiters", item: "https://mvp.actor/game-industry-recruiters" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-transparent to-cyan-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-emerald-400">Game Industry Recruiters</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Game Industry Recruiters
                </span>
                {" "}— Find Gaming & Esports Recruitment Agencies
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Looking for <strong>game industry recruiters</strong> to help you land your dream gaming job?
                We&apos;ve compiled the top <strong>gaming recruitment agencies</strong> and <strong>esports recruiters</strong>
                who specialise in placing talent at game studios, publishers, and esports organisations worldwide.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#jobs"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
                >
                  Browse Jobs Directly
                </Link>
                <a
                  href="#recruiters"
                  className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-emerald-500 transition-all"
                >
                  View Recruiters List
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What are Game Industry Recruiters */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">What Are Game Industry Recruiters?</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-slate-300 mb-6">
                <strong>Game industry recruiters</strong> are specialist professionals who connect talented individuals
                with career opportunities in video games and esports. Unlike general recruiters, they understand the
                unique requirements of gaming roles—from technical art pipelines to esports team dynamics.
              </p>
              <p className="text-lg text-slate-300 mb-6">
                The gaming industry employs over 200,000 people worldwide according to{" "}
                <a href="https://ukie.org.uk" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">
                  UKIE
                </a>, with demand for talent consistently outpacing supply. This has created a thriving ecosystem
                of specialist <strong>gaming recruiters</strong> who help studios find the right people and help
                professionals navigate career opportunities.
              </p>
              <p className="text-lg text-slate-300">
                Whether you&apos;re a game developer, artist, designer, or esports professional, working with the right
                recruiter can accelerate your career. Below, we list the top <strong>game industry recruitment agencies</strong>
                along with tips for working with them effectively.
              </p>
            </div>
          </div>
        </section>

        {/* Why Use Game Recruiters */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Why Use Game Industry Recruiters?</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              Working with specialist gaming recruiters offers several advantages over applying directly.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUseRecruiters.map((item) => (
                <div key={item.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Game Industry Recruiters */}
        <section id="recruiters" className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Top Game Industry Recruiters & Agencies</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              These specialist recruiters and agencies focus on video game development and publishing roles.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {recruiters.map((recruiter) => (
                <div key={recruiter.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">{recruiter.name}</h3>
                    <span className="px-3 py-1 bg-emerald-600/20 text-emerald-400 text-sm rounded-full">
                      {recruiter.location}
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs mb-2">{recruiter.specialty}</p>
                  <p className="text-slate-400 text-sm mb-4">{recruiter.description}</p>
                  <div className="mb-4">
                    <span className="text-xs text-slate-500">Specialises in:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {recruiter.roles.map((role) => (
                        <span key={role} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={recruiter.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 text-sm font-medium"
                  >
                    Visit Website →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Esports-Specific Recruiters */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Esports Recruiters & Job Platforms</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              For esports-specific roles at organisations like Fnatic, Team Liquid, and Cloud9, these platforms specialise
              in competitive gaming careers.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {esportsRecruiters.map((recruiter) => (
                <div key={recruiter.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-all">
                  <h3 className="text-xl font-bold text-white mb-2">{recruiter.name}</h3>
                  <p className="text-emerald-400 text-xs mb-3">{recruiter.focus}</p>
                  <p className="text-slate-400 text-sm mb-4">{recruiter.description}</p>
                  {recruiter.link.startsWith("/") ? (
                    <Link href={recruiter.link} className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
                      Browse Jobs →
                    </Link>
                  ) : (
                    <a href={recruiter.link} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
                      Visit Website →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Work with Game Recruiters */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">How to Work with Game Industry Recruiters</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              Maximise your chances of success when working with gaming recruiters.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center text-2xl text-emerald-400 font-bold mb-4">1</div>
                <h3 className="text-lg font-bold text-white mb-2">Polish Your Portfolio</h3>
                <p className="text-slate-400 text-sm">
                  For creative roles, your portfolio matters more than your CV. Ensure it showcases your best, most relevant work
                  before approaching recruiters.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center text-2xl text-emerald-400 font-bold mb-4">2</div>
                <h3 className="text-lg font-bold text-white mb-2">Be Specific About Goals</h3>
                <p className="text-slate-400 text-sm">
                  Tell recruiters exactly what you&apos;re looking for: game genres, studio sizes, role types, location preferences,
                  and salary expectations.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center text-2xl text-emerald-400 font-bold mb-4">3</div>
                <h3 className="text-lg font-bold text-white mb-2">Maintain Communication</h3>
                <p className="text-slate-400 text-sm">
                  Respond promptly to recruiter messages. Let them know if your situation changes or if you&apos;ve accepted
                  another role. Good relationships lead to future opportunities.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center text-2xl text-emerald-400 font-bold mb-4">4</div>
                <h3 className="text-lg font-bold text-white mb-2">Don&apos;t Be Exclusive</h3>
                <p className="text-slate-400 text-sm">
                  Work with multiple recruiters and apply directly too. Just be transparent about where you&apos;ve already
                  been submitted to avoid duplicate applications.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center text-2xl text-emerald-400 font-bold mb-4">5</div>
                <h3 className="text-lg font-bold text-white mb-2">Ask Questions</h3>
                <p className="text-slate-400 text-sm">
                  Good recruiters can share insights about company culture, interview processes, and what hiring managers
                  are really looking for. Use them as a resource.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center text-2xl text-emerald-400 font-bold mb-4">6</div>
                <h3 className="text-lg font-bold text-white mb-2">Follow Up After Placement</h3>
                <p className="text-slate-400 text-sm">
                  If a recruiter places you, stay in touch. They can help with future career moves, and you might be able
                  to refer colleagues to them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Game Industry Recruiters FAQ</h2>

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

        {/* Alternative: Browse Jobs Directly */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Skip the Recruiter: Browse Jobs Directly</h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Don&apos;t want to wait for a recruiter? We aggregate esports and gaming jobs from LinkedIn, company career pages,
              and job boards. Browse listings and apply directly to employers.
            </p>
            <Link
              href="/#jobs"
              className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
            >
              Browse All Gaming & Esports Jobs
            </Link>
          </div>
        </section>

        {/* Real Jobs Section */}
        <RealJobsSection
          title="Current Gaming & Esports Jobs"
          subtitle="Apply directly — no recruiter needed"
          limit={6}
          showViewAll={true}
        />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600/20 via-slate-900 to-cyan-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Find Your Gaming Career
            </h2>
            <p className="text-slate-300 mb-8">
              Whether you work with game industry recruiters or apply directly, the gaming industry offers
              incredible career opportunities. Start your search today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/esports-jobs"
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
              >
                Browse Esports Jobs
              </Link>
              <Link
                href="/gaming-jobs-uk"
                className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-emerald-500 transition-all"
              >
                Gaming Jobs UK
              </Link>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Related Guides</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link href="/esports-jobs" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-emerald-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Esports Jobs</h3>
                <p className="text-slate-400 text-sm">Browse all esports opportunities worldwide.</p>
              </Link>
              <Link href="/esports-recruitment" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-emerald-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Esports Recruitment</h3>
                <p className="text-slate-400 text-sm">Our recruitment services for employers.</p>
              </Link>
              <Link href="/how-to-get-into-esports" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-emerald-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">How to Get Into Esports</h3>
                <p className="text-slate-400 text-sm">Complete guide to breaking into gaming.</p>
              </Link>
              <Link href="/esports-salary-guide-uk" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-emerald-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Salary Guide</h3>
                <p className="text-slate-400 text-sm">What gaming jobs pay in the UK.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
