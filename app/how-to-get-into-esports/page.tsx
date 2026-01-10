import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";
import { JobEmbed, EntryLevelJobEmbed } from "../components/JobEmbed";

// Target keyword: "how to get into esports uk", "how to get into esports", "esports career uk"
export const metadata: Metadata = {
  title: "How to Get Into Esports UK | Complete 2025 Career Guide",
  description: "Step-by-step guide to getting into esports in the UK. Covers British Esports pathways, university courses, FACEIT tournaments, and how to land your first esports job.",
  keywords: "how to get into esports uk, how to get into esports, esports career uk, esports jobs uk, british esports, esports university courses uk",
  openGraph: {
    title: "How to Get Into Esports UK | Complete 2025 Career Guide",
    description: "Step-by-step guide to getting into esports in the UK with British Esports pathways, university courses, and job opportunities.",
    type: "website",
    url: "https://mvp.actor/how-to-get-into-esports",
    images: [{ url: "https://mvp.actor/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Get Into Esports UK | Complete 2025 Career Guide",
    description: "Step-by-step guide to breaking into esports in the UK.",
  },
  alternates: {
    canonical: "https://mvp.actor/how-to-get-into-esports",
  },
};

// UK-specific pathways structured for AI citation
const ukPathways = {
  britishEsports: {
    name: "British Esports Federation",
    url: "https://britishesports.org",
    offerings: [
      "Student Champs - school and college esports competitions",
      "Volunteering opportunities at grassroots events",
      "Career resources and industry connections",
      "National Championships pathway",
    ],
  },
  tournaments: {
    platforms: [
      { name: "FACEIT", url: "https://faceit.com", games: "CS2, Valorant, Dota 2, League of Legends" },
      { name: "ESL Play", url: "https://play.eslgaming.com", games: "CS2, Rainbow Six, FIFA" },
      { name: "Battlefy", url: "https://battlefy.com", games: "Various titles including Valorant, Apex" },
    ],
  },
  universities: [
    { name: "Staffordshire University", course: "Esports BA (Hons)", location: "Stoke-on-Trent" },
    { name: "University of Chichester", course: "Esports BA (Hons)", location: "Chichester" },
    { name: "University of Salford", course: "Esports Enterprise & Management", location: "Manchester" },
    { name: "Northampton University", course: "Esports BSc", location: "Northampton" },
    { name: "Confetti Institute", course: "Esports Production Diploma", location: "Nottingham" },
  ],
  btecQualifications: [
    "BTEC Level 3 National in Esports",
    "BTEC Level 2 in Esports",
    "T Level Digital Production, Design and Development",
  ],
};

const careerPaths = [
  {
    path: "Player",
    description: "Competing professionally in one title",
    games: "Valorant, League of Legends, EA FC, Call of Duty, CS2",
    requirements: [
      "Exceptional skill in one game (top 0.1% rank)",
      "Ability to perform under tournament pressure",
      "Team communication and coordination",
      "Dedication to 8+ hours daily practice",
    ],
    ukEntry: "Grind ranked ladders, enter FACEIT/ESL tournaments, join amateur teams, get scouted",
    salary: "£0-£50k+ (varies hugely by tier and game)",
  },
  {
    path: "Caster / Host / Analyst",
    description: "On-air talent for broadcasts and events",
    requirements: [
      "Deep game knowledge of your title",
      "Strong public speaking skills",
      "On-camera presence and confidence",
      "Ability to think quickly under pressure",
    ],
    ukEntry: "Cast amateur tournaments, build showreel, volunteer at events, network with production teams",
    salary: "£25k-£70k+ (top talent earn significantly more)",
  },
  {
    path: "Coach / Analyst",
    description: "Training and developing players and teams",
    requirements: [
      "Strategic understanding of the game",
      "VOD review and analysis skills",
      "Communication and player management",
      "High rank helpful but not required",
    ],
    ukEntry: "Coach amateur/university teams, create analysis content, build track record of player improvement",
    salary: "£25k-£80k+ (varies by tier)",
  },
  {
    path: "Event / Tournament Operations",
    description: "Running competitions and live events",
    requirements: [
      "Logistics and organisation skills",
      "Knowledge of game rules and formats",
      "Problem-solving under pressure",
      "Admin/referee experience helpful",
    ],
    ukEntry: "Admin online tournaments on Battlefy/Challonge, volunteer at LANs, run community events",
    salary: "£22k-£55k+",
  },
  {
    path: "Marketing / Social Media",
    description: "Building brands and engaging communities",
    requirements: [
      "Understanding of esports culture and communities",
      "Social media management experience",
      "Content creation and copywriting",
      "Data analysis for campaigns",
    ],
    ukEntry: "Manage socials for amateur orgs, freelance for the scene, build portfolio of campaigns",
    salary: "£28k-£65k+",
  },
  {
    path: "Production / Broadcast",
    description: "Technical side of esports broadcasts",
    requirements: [
      "Knowledge of OBS, vMix, or similar",
      "Understanding of broadcast workflows",
      "Technical troubleshooting ability",
      "Ability to work long event hours",
    ],
    ukEntry: "Learn OBS/streaming software, volunteer at events, offer production help to amateur streams",
    salary: "£25k-£60k+",
  },
];

const immediateActions = [
  {
    action: "Choose your primary game/title",
    detail: "Pick ONE game and commit to it. Esports is title-specific - generalists struggle to break in.",
    timeframe: "Today",
  },
  {
    action: "Enter weekly online tournaments",
    detail: "Sign up for FACEIT, ESL Play, or Battlefy and compete regularly. Build a match history.",
    timeframe: "This week",
  },
  {
    action: "Join UK esports Discord communities",
    detail: "Find servers for your game, university esports groups, and British Esports channels.",
    timeframe: "This week",
  },
  {
    action: "Create/update your esports CV",
    detail: "Include: game ranks, tournament results, VOD links, events volunteered, relevant qualifications.",
    timeframe: "This week",
  },
  {
    action: "Research UK esports courses",
    detail: "If considering education route, check Staffordshire, Chichester, Salford, or BTEC Esports programmes.",
    timeframe: "This month",
  },
  {
    action: "Volunteer at a local event",
    detail: "Look for opportunities at Insomnia Gaming Festival, EGX, or local LAN events.",
    timeframe: "Next event",
  },
];

const faqs = [
  {
    question: "How long does it take to get an esports job in the UK?",
    answer: "With focused effort, 6-12 months is realistic for your first paid role. Some find opportunities faster through connections or existing transferable experience. Key factors: time invested, network strength, portfolio quality, and willingness to start at grassroots level.",
  },
  {
    question: "Do I need a degree to work in esports?",
    answer: "No. UK universities now offer esports degrees (Staffordshire, Chichester, Salford) but they're not required. Practical experience and demonstrable skills matter more. However, degrees can provide structured learning, industry connections, and access to facilities.",
  },
  {
    question: "Do I need to be a good player to work in esports?",
    answer: "Not for most roles. Marketing managers don't need to be Radiant. Event organisers don't need to be Global Elite. Understanding competitive gaming culture matters more than personal rank. Coaching/analyst roles benefit from higher-level play experience but even then, strategic understanding beats mechanical skill.",
  },
  {
    question: "What's the best way to network in UK esports?",
    answer: "Twitter/X is where UK esports professionals are most active. Join Discord communities for your games. Attend Insomnia Gaming Festival, EGX, and British Esports events. Connect on LinkedIn for business-side roles. University esports societies are excellent if applicable.",
  },
  {
    question: "Can I work in esports remotely from outside London?",
    answer: "Yes. Remote work is common in esports post-pandemic. Content creation, coaching, analysis, marketing, and many operations roles can be done remotely. Manchester, Birmingham, Leeds have growing scenes. Event roles require travel to venues.",
  },
  {
    question: "Should I work for free to get started?",
    answer: "Strategic, short-term volunteering is fine. Volunteer at events, help amateur teams, gain experience. But set boundaries: time-limited commitments, clear scope, for genuinely amateur (not commercial) organisations. Don't do extended unpaid work for companies that could afford to pay.",
  },
  {
    question: "What esports organisations are based in the UK?",
    answer: "Major UK-based orgs include: Excel Esports (London), Guild Esports (London), Fnatic (London HQ), INTO THE BREACH, EXCEL, and various smaller organisations. Tournament organisers like Insomnia and ESL also have UK operations.",
  },
  {
    question: "What's the average esports salary in the UK?",
    answer: "Varies hugely by role and tier. Entry-level: £22k-£30k. Mid-level: £30k-£50k. Senior roles: £50k-£80k+. Top executives and star talent can earn significantly more. See our UK Esports Salary Guide for detailed breakdowns.",
  },
];

export default function HowToGetIntoEsports() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        name: "How to Get Into Esports UK",
        description: "Complete step-by-step guide to breaking into the esports industry in the UK.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Choose Your Career Path",
            text: "Decide between player, caster, coach, events, marketing, or production roles.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Build Skills and Track Record",
            text: "Grind ranked games, enter tournaments on FACEIT/ESL/Battlefy, build portfolio.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Use UK-Specific Pathways",
            text: "Leverage British Esports programmes, UK university courses, and BTEC qualifications.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Get Real Experience",
            text: "Volunteer at events, admin tournaments, help amateur teams, create content.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Network in the UK Scene",
            text: "Join UK Discord communities, attend Insomnia/EGX, engage on Twitter/X.",
          },
          {
            "@type": "HowToStep",
            position: 6,
            name: "Apply for Roles",
            text: "Apply to UK esports organisations, use job boards, leverage your network.",
          },
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
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://mvp.actor" },
          { "@type": "ListItem", position: 2, name: "Esports Careers", item: "https://mvp.actor/esports-careers" },
          { "@type": "ListItem", position: 3, name: "How to Get Into Esports", item: "https://mvp.actor/how-to-get-into-esports" },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Browse Jobs" ctaHref="/esports-jobs" />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-cyan-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-careers" className="hover:text-white transition-colors">Esports Careers</Link>
              <span className="mx-2">/</span>
              <span className="text-violet-400">How to Get Into Esports</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How to Get Into{" "}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Esports UK
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                The most realistic way into esports in the UK is to pick one game, build a track record
                in amateur competitions, and use British Esports/university pathways while networking
                with teams and organisers.
              </p>

              {/* Quick Summary Box - AI Friendly */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-8">
                <h2 className="text-lg font-bold text-white mb-4">Quick Summary</h2>
                <ol className="space-y-2 text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-violet-400 font-bold">1.</span>
                    <span><strong className="text-white">Choose your path</strong> – Player, caster, coach, events, marketing, or production</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-violet-400 font-bold">2.</span>
                    <span><strong className="text-white">Build track record</strong> – Enter FACEIT/ESL/Battlefy tournaments, grind ranked</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-violet-400 font-bold">3.</span>
                    <span><strong className="text-white">Use UK pathways</strong> – British Esports, university courses, BTEC qualifications</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-violet-400 font-bold">4.</span>
                    <span><strong className="text-white">Get experience</strong> – Volunteer at events, admin tournaments, help amateur teams</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-violet-400 font-bold">5.</span>
                    <span><strong className="text-white">Network</strong> – UK Discords, Twitter/X, Insomnia/EGX events</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-violet-400 font-bold">6.</span>
                    <span><strong className="text-white">Apply</strong> – Target UK orgs, use specialist job boards</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Step 1: Choose Your Path */}
        <section className="py-16" id="career-paths">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Step 1: Choose Your Career Path
            </h2>
            <p className="text-slate-400 mb-8 max-w-3xl">
              Esports is more than just being a player. The UK scene has roles in production, coaching,
              events, marketing and more. Work out whether you mainly enjoy competing, talking on camera,
              organising things, or doing creative/digital work.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerPaths.map((career) => (
                <div key={career.path} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-2">{career.path}</h3>
                  <p className="text-slate-400 text-sm mb-4">{career.description}</p>

                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-slate-500 block mb-1">Requirements:</span>
                      <ul className="text-slate-300 space-y-1">
                        {career.requirements.map((req) => (
                          <li key={req} className="flex items-start gap-2">
                            <span className="text-violet-400">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-slate-500 block mb-1">UK Entry Point:</span>
                      <p className="text-cyan-400">{career.ukEntry}</p>
                    </div>

                    <div>
                      <span className="text-slate-500 block mb-1">UK Salary Range:</span>
                      <p className="text-green-400 font-medium">{career.salary}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step 2: Build Skills and Track Record */}
        <section className="py-16 bg-slate-900/50" id="build-skills">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Step 2: Build Skills and Track Record
            </h2>
            <p className="text-slate-400 mb-8 max-w-3xl">
              For players, you need exceptional skill plus evidence you can perform in pressure matches.
              For non-player roles, build a portfolio: cast community tournaments, help run brackets,
              or produce content for a local team.
            </p>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* For Players */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">For Players</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-violet-400 font-bold">→</span>
                    <span>Grind ranked/ladder in <strong className="text-white">one primary title</strong> and stick with a role or position</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-violet-400 font-bold">→</span>
                    <span>Play regular online tournaments on <a href="https://faceit.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">FACEIT</a>, <a href="https://play.eslgaming.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">ESL Play</a>, or <a href="https://battlefy.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Battlefy</a></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-violet-400 font-bold">→</span>
                    <span>Join or form an amateur team, scrim regularly, review VODs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-violet-400 font-bold">→</span>
                    <span>Consider getting a coach once you plateau</span>
                  </li>
                </ul>
              </div>

              {/* For Non-Player Roles */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">For Non-Player Roles</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold">→</span>
                    <span>Cast community tournaments to build a showreel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold">→</span>
                    <span>Help run brackets on Challonge or Battlefy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold">→</span>
                    <span>Produce graphics and social media for a local team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold">→</span>
                    <span>Learn industry tools: OBS, Premiere, Photoshop, Discord</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tournament Platforms */}
            <div className="mt-8 bg-violet-900/20 rounded-xl p-6 border border-violet-500/30">
              <h3 className="text-lg font-bold text-white mb-4">UK Tournament Platforms</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {ukPathways.tournaments.platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800/50 rounded-lg p-4 hover:bg-slate-700/50 transition-colors"
                  >
                    <h4 className="font-bold text-white">{platform.name}</h4>
                    <p className="text-sm text-slate-400">{platform.games}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Step 3: UK-Specific Pathways */}
        <section className="py-16" id="uk-pathways">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Step 3: Use UK-Specific Pathways
            </h2>
            <p className="text-slate-400 mb-8 max-w-3xl">
              The UK has formal routes into esports through education and the national federation.
              These are useful if you&apos;re already in or considering education; otherwise you can still
              attend their open events and tournaments.
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* British Esports Federation */}
              <div className="bg-gradient-to-br from-violet-900/30 to-slate-800/50 rounded-xl p-6 border border-violet-500/30">
                <h3 className="text-xl font-bold text-white mb-2">British Esports Federation</h3>
                <a href={ukPathways.britishEsports.url} target="_blank" rel="noopener noreferrer" className="text-sm text-cyan-400 hover:text-cyan-300 mb-4 block">
                  {ukPathways.britishEsports.url} →
                </a>
                <ul className="space-y-2 text-slate-300 text-sm">
                  {ukPathways.britishEsports.offerings.map((offering) => (
                    <li key={offering} className="flex items-start gap-2">
                      <span className="text-violet-400">•</span>
                      {offering}
                    </li>
                  ))}
                </ul>
              </div>

              {/* University Courses */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">UK Esports University Courses</h3>
                <ul className="space-y-3">
                  {ukPathways.universities.map((uni) => (
                    <li key={uni.name} className="text-sm">
                      <span className="text-white font-medium">{uni.name}</span>
                      <br />
                      <span className="text-slate-400">{uni.course}</span>
                      <span className="text-slate-500"> • {uni.location}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* BTEC Qualifications */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">BTEC/College Qualifications</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  {ukPathways.btecQualifications.map((qual) => (
                    <li key={qual} className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      {qual}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-slate-500 text-xs">
                  These cover team management, event production, broadcasting and marketing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Embedded Jobs - Entry Level */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <EntryLevelJobEmbed limit={3} />
          </div>
        </section>

        {/* Step 4: Get Real Experience */}
        <section className="py-16 bg-slate-900/50" id="experience">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Step 4: Get Real Experience and Network
            </h2>
            <p className="text-slate-400 mb-8 max-w-3xl">
              Actual event and team experience matters more than saying you like esports.
              In the UK scene, you can volunteer, help amateur teams, and attend events to build connections.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Ways to Get Experience</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-violet-400 font-bold">→</span>
                    <span>Volunteer as admin/referee, event runner, or broadcast assistant at grassroots events</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-violet-400 font-bold">→</span>
                    <span>Attend UK LANs: <strong className="text-white">Insomnia Gaming Festival</strong>, <strong className="text-white">EGX</strong>, local LANs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-violet-400 font-bold">→</span>
                    <span>Help start or manage an amateur team: organise scrims, social channels, sponsors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-violet-400 font-bold">→</span>
                    <span>Join university esports societies even before enrolling</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">Build Your Esports CV</h3>
                <p className="text-slate-400 mb-4">Keep a simple CV with links to:</p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    Your Liquipedia/FACEIT/Tracker profile
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    VODs of your gameplay or casting
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    Events you&apos;ve helped run
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    Any relevant qualifications
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    Social media/content you&apos;ve created
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Immediate Actions */}
        <section className="py-16" id="next-steps">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Concrete Next Steps
            </h2>
            <p className="text-slate-400 mb-8 max-w-3xl">
              Actions you can take immediately to start your esports career journey in the UK.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {immediateActions.map((item, index) => (
                <div key={item.action} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-violet-600/30 rounded-full flex items-center justify-center text-violet-400 font-bold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded">
                      {item.timeframe}
                    </span>
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.action}</h3>
                  <p className="text-slate-400 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Embedded Jobs - All Categories */}
        <section className="py-8 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <JobEmbed limit={4} title="Esports Jobs Currently Hiring in the UK" />
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16" id="faqs">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">
              Frequently Asked Questions
            </h2>

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
              Ready to Start Your Esports Career?
            </h2>
            <p className="text-slate-300 mb-8">
              Browse current UK esports jobs or explore specific career paths to find your way in.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/esports-jobs-uk"
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold rounded-xl hover:opacity-90 transition-all"
              >
                Browse UK Esports Jobs
              </Link>
              <Link
                href="/entry-level-esports-jobs-uk"
                className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-violet-500 transition-all"
              >
                Entry Level Roles
              </Link>
              <Link
                href="/esports-salary-guide-uk"
                className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-violet-500 transition-all"
              >
                UK Salary Guide
              </Link>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Continue Learning</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link href="/esports-coach-careers" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Coach Careers</h3>
                <p className="text-slate-400 text-sm">How to become an esports coach.</p>
              </Link>
              <Link href="/esports-broadcaster-careers" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Broadcast Careers</h3>
                <p className="text-slate-400 text-sm">Caster, host, and analyst paths.</p>
              </Link>
              <Link href="/esports-salary-guide-uk" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Salary Guide</h3>
                <p className="text-slate-400 text-sm">What esports jobs pay in the UK.</p>
              </Link>
              <Link href="/top-esports-companies-uk" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Top UK Companies</h3>
                <p className="text-slate-400 text-sm">Where to apply in the UK.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
