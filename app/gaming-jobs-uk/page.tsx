import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

// Target keyword: "gaming jobs uk"
export const metadata: Metadata = {
  title: "Gaming Jobs UK 🎮 All Gaming Careers",
  description: "🕹️ Gaming jobs UK - development, QA testing, esports & streaming roles. Browse positions at top UK gaming companies. Apply direct to employers.",
  keywords: "gaming jobs uk, gaming industry jobs, game developer jobs uk",
  openGraph: {
    title: "Gaming Jobs UK 🎮 All Gaming Careers",
    description: "🕹️ Gaming jobs UK - development, QA testing, esports & streaming roles.",
    type: "website",
    url: "https://mvp.actor/gaming-jobs-uk",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaming Jobs UK 🎮 All Gaming Careers",
    description: "🕹️ Gaming jobs UK - development, QA testing, esports & streaming roles.",
  },
  alternates: {
    canonical: "https://mvp.actor/gaming-jobs-uk",
  },
};

const gamingCategories = [
  {
    title: "Game Development",
    icon: "🎮",
    description: "Build the games people love. From programming and design to art and animation.",
    roles: ["Game Programmer", "Game Designer", "Technical Artist", "Level Designer", "UI/UX Designer"],
    avgSalary: "£35,000 - £75,000",
    link: "/game-developer-jobs-uk",
  },
  {
    title: "Quality Assurance",
    icon: "🔍",
    description: "Test games before release, find bugs, and ensure quality gaming experiences.",
    roles: ["QA Tester", "QA Lead", "Automation Tester", "Compliance Tester", "Localisation QA"],
    avgSalary: "£22,000 - £45,000",
    link: "/gaming-tester-jobs-uk",
  },
  {
    title: "Esports & Competitive",
    icon: "🏆",
    description: "Work in competitive gaming—coaching teams, running tournaments, or broadcasting matches.",
    roles: ["Esports Coach", "Tournament Organiser", "Caster", "Analyst", "Team Manager"],
    avgSalary: "£25,000 - £65,000",
    link: "/esports-jobs-uk",
  },
  {
    title: "Content & Streaming",
    icon: "📺",
    description: "Create gaming content for YouTube, Twitch, and social media platforms.",
    roles: ["Content Creator", "Video Editor", "Stream Producer", "Social Media Manager", "Influencer Manager"],
    avgSalary: "£25,000 - £55,000",
    link: "/esports-careers",
  },
  {
    title: "Publishing & Marketing",
    icon: "📢",
    description: "Bring games to market through marketing, PR, and community management.",
    roles: ["Games Marketing Manager", "Community Manager", "PR Manager", "Brand Manager", "User Acquisition"],
    avgSalary: "£30,000 - £70,000",
    link: "/gaming-industry-jobs-uk",
  },
  {
    title: "Business & Operations",
    icon: "💼",
    description: "Keep gaming companies running through HR, finance, legal, and operational roles.",
    roles: ["Producer", "Product Manager", "HR Manager", "Finance Manager", "Operations Director"],
    avgSalary: "£35,000 - £90,000",
    link: "/gaming-industry-jobs-uk",
  },
];

const salaryData = [
  { role: "Junior Game Developer", entry: "£25,000", mid: "£40,000", senior: "£60,000+" },
  { role: "Senior Game Programmer", entry: "£45,000", mid: "£60,000", senior: "£85,000+" },
  { role: "Game Designer", entry: "£28,000", mid: "£42,000", senior: "£65,000+" },
  { role: "QA Tester", entry: "£22,000", mid: "£30,000", senior: "£45,000+" },
  { role: "3D Artist", entry: "£26,000", mid: "£40,000", senior: "£60,000+" },
  { role: "Game Producer", entry: "£35,000", mid: "£50,000", senior: "£80,000+" },
  { role: "Community Manager", entry: "£24,000", mid: "£35,000", senior: "£50,000+" },
  { role: "Games Marketing Manager", entry: "£30,000", mid: "£45,000", senior: "£70,000+" },
];

const topCompanies = [
  {
    name: "Rockstar Games",
    description: "Creators of GTA and Red Dead Redemption. Major UK studios in Edinburgh and Lincoln.",
    roles: ["Development", "Art", "QA", "Audio"],
    location: "Edinburgh / Lincoln",
  },
  {
    name: "Creative Assembly",
    description: "SEGA-owned studio behind Total War series. One of UK's largest developers.",
    roles: ["Programming", "Design", "Art", "Production"],
    location: "Horsham / Sofia",
  },
  {
    name: "Playground Games",
    description: "Xbox-owned studio creating Forza Horizon. One of UK's premier racing game developers.",
    roles: ["Engineering", "Art", "Design", "QA"],
    location: "Leamington Spa",
  },
  {
    name: "Rare",
    description: "Xbox Game Studios developer behind Sea of Thieves and Everwild.",
    roles: ["Engineering", "Design", "Art", "Audio"],
    location: "Twycross",
  },
  {
    name: "Sports Interactive",
    description: "Creators of Football Manager. SEGA-owned sports simulation specialists.",
    roles: ["Development", "Research", "QA", "Art"],
    location: "London",
  },
  {
    name: "Sumo Digital",
    description: "Major UK developer with studios across Sheffield, Nottingham, Newcastle and more.",
    roles: ["Programming", "Art", "Design", "Production"],
    location: "Multiple UK",
  },
  {
    name: "Rebellion",
    description: "Independent developer and publisher. Creators of Sniper Elite and 2000 AD comics.",
    roles: ["Development", "Art", "Publishing", "Comics"],
    location: "Oxford",
  },
  {
    name: "Team17",
    description: "Games label and developer. Creators of Worms and publisher of indie hits.",
    roles: ["Development", "Publishing", "Marketing", "QA"],
    location: "Wakefield",
  },
];

const ukHubs = [
  {
    city: "London",
    description: "UK's gaming capital with publishers, studios, and esports organisations.",
    companies: "SEGA, Sports Interactive, Splash Damage, EA",
    jobs: "300+",
  },
  {
    city: "Leamington Spa",
    description: "Silicon Spa - high concentration of studios in this gaming cluster.",
    companies: "Playground Games, Codemasters, Jagex, Ubisoft",
    jobs: "100+",
  },
  {
    city: "Guildford",
    description: "Historic gaming hub with major publishers and indie studios.",
    companies: "EA, Criterion, Hello Games, Supermassive",
    jobs: "100+",
  },
  {
    city: "Edinburgh",
    description: "Scottish gaming stronghold with Rockstar North leading the way.",
    companies: "Rockstar North, 4J Studios, Outplay",
    jobs: "80+",
  },
  {
    city: "Brighton",
    description: "Creative indie hub with diverse game development community.",
    companies: "The Chinese Room, Lab Zero, Radian Arc",
    jobs: "50+",
  },
  {
    city: "Dundee",
    description: "Home of GTA's origins and Abertay University's games courses.",
    companies: "Ninja Kiwi, Outright Games, Hyper Luminal",
    jobs: "40+",
  },
];

const faqs = [
  {
    question: "What's the difference between gaming jobs and esports jobs in the UK?",
    answer: "Gaming jobs focus on creating games—developers, artists, designers, QA testers at studios like Rockstar, Rare, or Creative Assembly. Esports jobs center on competitive gaming—coaches, tournament organisers, casters, team managers at organisations like Fnatic or Excel Esports. Some overlap exists in marketing, community management, and content roles. Gaming has more technical/creative positions, while esports emphasises performance, events, and broadcasting.",
  },
  {
    question: "Is game development different from esports careers?",
    answer: "Yes, very different. Game development creates the games people play—programming, art, design, sound, production. It's highly technical and creative, requiring skills in engines like Unity/Unreal, programming languages, or 3D modeling. Esports focuses on the competitive side—running tournaments, coaching teams, broadcasting matches, managing players. Game developers might work on an esports title, but their role differs entirely from esports operations staff.",
  },
  {
    question: "What are the top gaming companies hiring in the UK?",
    answer: "Major UK gaming employers include: Rockstar Games (GTA, Red Dead), Creative Assembly (Total War), Playground Games (Forza Horizon), Rare (Sea of Thieves), Sports Interactive (Football Manager), Sumo Digital, Rebellion, Team17, Codemasters, and Jagex. Publishers with UK offices include EA, SEGA, Ubisoft, and Microsoft Studios. The UK has 500+ games companies employing over 20,000 people.",
  },
  {
    question: "What skills do I need for UK gaming jobs?",
    answer: "Skills vary by role: Programmers need C++, C#, Unity, or Unreal Engine. Artists require 3D modeling (Maya, Blender), texturing (Substance), and art fundamentals. Designers need game design theory, level design tools, and prototyping skills. QA testers need attention to detail and bug reporting. Marketing roles require digital marketing, community management, and analytics. Soft skills like teamwork, communication, and problem-solving are essential across all roles.",
  },
  {
    question: "What career paths exist in UK gaming?",
    answer: "Gaming careers span multiple disciplines: Development (programmer → senior → lead → technical director), Art (junior artist → senior → art director), Design (designer → lead → creative director), Production (coordinator → producer → executive producer), QA (tester → lead → QA manager), Marketing (coordinator → manager → marketing director), and Business (various paths to studio leadership). Each path typically takes 5-10 years to reach senior positions.",
  },
];

export default function GamingJobsUK() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Gaming Jobs UK - Find Your Dream Role 2025",
    description: "Comprehensive guide to finding gaming jobs in the UK, including salaries, top studios, and career paths.",
    url: "https://mvp.actor/gaming-jobs-uk",
    mainEntity: {
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
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mvp.actor" },
        { "@type": "ListItem", position: 2, name: "Gaming Jobs UK", item: "https://mvp.actor/gaming-jobs-uk" },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-transparent to-violet-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-emerald-400">Gaming Jobs UK</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Gaming Jobs UK: Find Your{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">
                  Dream Role in 2025
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                The UK is one of the world&apos;s leading games markets, home to legendary studios like Rockstar,
                Rare, and Playground Games. From AAA development to indie creation, esports to streaming,
                discover your perfect gaming career in the UK.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-3xl font-bold text-emerald-400">1,000+</div>
                  <div className="text-sm text-slate-400">Active Roles</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-3xl font-bold text-violet-400">500+</div>
                  <div className="text-sm text-slate-400">UK Studios</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-3xl font-bold text-cyan-400">£42k</div>
                  <div className="text-sm text-slate-400">Average Salary</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-3xl font-bold text-amber-400">20,000+</div>
                  <div className="text-sm text-slate-400">UK Employees</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#jobs"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
                >
                  Browse All Gaming Jobs
                </Link>
                <Link
                  href="/gaming-tester-jobs-uk"
                  className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-emerald-500 transition-all"
                >
                  QA Tester Jobs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* UK Games Industry Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">The UK Games Industry in 2025</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-slate-300 mb-6">
                The United Kingdom is Europe&apos;s largest games market and the sixth-largest globally. According to{" "}
                <a href="https://ukie.org.uk" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">
                  Ukie
                </a>, the UK games industry generates over £7 billion in revenue annually, employing more than
                20,000 people across 500+ games companies. The sector continues to grow, with{" "}
                <a href="https://tiga.org" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">
                  TIGA
                </a> reporting consistent year-on-year employment increases.
              </p>
              <p className="text-lg text-slate-300 mb-6">
                From the world-famous Rockstar North in Edinburgh (creators of Grand Theft Auto) to the
                award-winning Playground Games in Leamington Spa (Forza Horizon), the UK produces some
                of the world&apos;s most beloved games. The industry spans AAA development, indie studios,
                mobile gaming, esports organisations, and games services companies.
              </p>
              <p className="text-lg text-slate-300">
                Major investments continue to flow into UK gaming, with global publishers like Microsoft,
                Sony, and SEGA maintaining significant UK presence. The UK&apos;s Video Games Tax Relief (VGTR)
                makes it an attractive location for development, while world-class universities produce
                a steady pipeline of talented graduates.
              </p>
            </div>
          </div>
        </section>

        {/* Gaming Categories */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Types of Gaming Jobs in the UK</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              The gaming industry offers diverse career paths beyond just making games. Explore the
              different sectors where you can build a gaming career.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gamingCategories.map((category) => (
                <Link key={category.title} href={category.link} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-all group">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{category.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{category.description}</p>
                  <div className="mb-4">
                    <span className="text-sm text-slate-500">Example roles:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {category.roles.slice(0, 3).map((role) => (
                        <span key={role} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-lg">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-emerald-400 font-medium">{category.avgSalary}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Salary Guide */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">UK Gaming Industry Salary Guide 2025</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              Gaming salaries in the UK vary by role, experience, and company size. Here&apos;s what you
              can expect across different career levels. Data from{" "}
              <a href="https://gamesindustry.biz" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">
                GamesIndustry.biz
              </a> salary surveys.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-slate-800/50 rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-800 border-b border-slate-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Role</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Entry Level</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Mid Level</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Senior Level</th>
                  </tr>
                </thead>
                <tbody>
                  {salaryData.map((row, index) => (
                    <tr key={row.role} className={index % 2 === 0 ? "bg-slate-800/30" : "bg-slate-800/10"}>
                      <td className="px-6 py-4 text-slate-300 font-medium">{row.role}</td>
                      <td className="px-6 py-4 text-slate-400">{row.entry}</td>
                      <td className="px-6 py-4 text-slate-400">{row.mid}</td>
                      <td className="px-6 py-4 text-emerald-400 font-medium">{row.senior}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Top Companies */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Top UK Gaming Companies Hiring</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              From AAA studios to innovative indies, these UK gaming companies regularly recruit talent
              across all disciplines.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {topCompanies.map((company) => (
                <div key={company.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">{company.name}</h3>
                    <span className="px-3 py-1 bg-emerald-600/20 text-emerald-400 text-sm rounded-full">
                      {company.location}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">{company.description}</p>
                  <div>
                    <span className="text-xs text-slate-500">Departments:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {company.roles.map((role) => (
                        <span key={role} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UK Gaming Hubs */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">UK Gaming Hubs</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              Gaming jobs are concentrated in several key locations across the UK. Here&apos;s where
              to find the most opportunities.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ukHubs.map((hub) => (
                <div key={hub.city} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">{hub.city}</h3>
                    <span className="text-emerald-400 font-semibold">{hub.jobs}</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-3">{hub.description}</p>
                  <p className="text-xs text-slate-500">
                    <strong>Notable:</strong> {hub.companies}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/gaming-jobs-london"
                className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              >
                Explore London gaming jobs →
              </Link>
            </div>
          </div>
        </section>

        {/* How to Get In */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">How to Get a Gaming Job in the UK</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              Breaking into gaming requires strategy, skills, and persistence. Here&apos;s your roadmap.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center text-2xl mb-4">1</div>
                <h3 className="text-lg font-bold text-white mb-2">Build Your Skills</h3>
                <p className="text-slate-400 text-sm">
                  Learn industry tools: Unity, Unreal, Maya, Photoshop. Take courses, follow tutorials,
                  and practice constantly.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center text-2xl mb-4">2</div>
                <h3 className="text-lg font-bold text-white mb-2">Create a Portfolio</h3>
                <p className="text-slate-400 text-sm">
                  Build games, mods, art, or code samples. Participate in game jams. Quality matters
                  more than quantity.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center text-2xl mb-4">3</div>
                <h3 className="text-lg font-bold text-white mb-2">Network & Connect</h3>
                <p className="text-slate-400 text-sm">
                  Attend events like EGX, Develop Brighton, and local meetups. Join online communities.
                  Connect on LinkedIn.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center text-2xl mb-4">4</div>
                <h3 className="text-lg font-bold text-white mb-2">Apply Strategically</h3>
                <p className="text-slate-400 text-sm">
                  Tailor applications to each studio. Research their games. Show passion. Consider QA
                  or internships as entry points.
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600/20 via-slate-900 to-violet-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Launch Your Gaming Career?
            </h2>
            <p className="text-slate-300 mb-8">
              Browse hundreds of gaming jobs across the UK. From entry-level QA to senior development roles.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#jobs"
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
              >
                Browse All Jobs
              </Link>
              <Link
                href="/esports-jobs-uk"
                className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-emerald-500 transition-all"
              >
                Esports Jobs
              </Link>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Related Guides</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link href="/gaming-tester-jobs-uk" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-emerald-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Gaming Tester Jobs</h3>
                <p className="text-slate-400 text-sm">QA testing roles to break into gaming.</p>
              </Link>
              <Link href="/esports-jobs-uk" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-emerald-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Esports Jobs UK</h3>
                <p className="text-slate-400 text-sm">Competitive gaming career opportunities.</p>
              </Link>
              <Link href="/gaming-industry-jobs-uk" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-emerald-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Gaming Industry Jobs</h3>
                <p className="text-slate-400 text-sm">All roles across the gaming sector.</p>
              </Link>
              <Link href="/how-to-get-into-esports" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-emerald-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">How to Get Into Esports</h3>
                <p className="text-slate-400 text-sm">Complete guide to starting your career.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
