import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";
import { RealJobsSection, getJobStats } from "../components/RealJobsSection";

// Target keyword: "esports jobs uk"
export const metadata: Metadata = {
  title: "Esports Jobs UK 🇬🇧 British Gaming Careers",
  description: "🇬🇧 Esports jobs UK - browse coaching, marketing & production roles at top British gaming organisations. Apply direct to employers. Updated daily.",
  keywords: "esports jobs uk, gaming jobs uk, esports careers uk",
  openGraph: {
    title: "Esports Jobs UK 🇬🇧 British Gaming Careers",
    description: "🇬🇧 Esports jobs UK - browse coaching, marketing & production roles at top British gaming organisations.",
    type: "website",
    url: "https://esportsjobs.quest/esports-jobs-uk",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esports Jobs UK 🇬🇧 British Gaming Careers",
    description: "🇬🇧 Esports jobs UK - browse roles at top British gaming organisations.",
  },
  alternates: {
    canonical: "https://esportsjobs.quest/esports-jobs-uk",
  },
};

const salaryData = [
  { role: "Esports Coach", entry: "£25,000", mid: "£40,000", senior: "£65,000+" },
  { role: "Esports Analyst", entry: "£22,000", mid: "£35,000", senior: "£55,000+" },
  { role: "Esports Marketing Manager", entry: "£28,000", mid: "£45,000", senior: "£70,000+" },
  { role: "Esports Broadcaster", entry: "£20,000", mid: "£38,000", senior: "£60,000+" },
  { role: "Tournament Organiser", entry: "£24,000", mid: "£38,000", senior: "£55,000+" },
  { role: "Content Creator", entry: "£22,000", mid: "£40,000", senior: "£80,000+" },
  { role: "Team Manager", entry: "£26,000", mid: "£42,000", senior: "£65,000+" },
  { role: "Community Manager", entry: "£23,000", mid: "£35,000", senior: "£50,000+" },
];

const topCompanies = [
  {
    name: "Fnatic",
    description: "London-based esports organisation competing in League of Legends, Valorant, CS2 and more.",
    roles: ["Coaches", "Analysts", "Marketing", "Operations"],
    location: "London",
  },
  {
    name: "Excel Esports",
    description: "UK esports organisation with teams in League of Legends (LEC) and Valorant.",
    roles: ["Performance Staff", "Content", "Business Development"],
    location: "London",
  },
  {
    name: "Guild Esports",
    description: "David Beckham-backed esports organisation with teams across multiple titles.",
    roles: ["Marketing", "Partnerships", "Operations"],
    location: "London",
  },
  {
    name: "Wylde Gaming",
    description: "UK-based esports organisation competing in Rocket League, FIFA and mobile esports.",
    roles: ["Social Media", "Content", "Team Management"],
    location: "Manchester",
  },
  {
    name: "British Esports Association",
    description: "National body for esports in the UK, promoting grassroots to professional pathways.",
    roles: ["Education", "Events", "Policy", "Outreach"],
    location: "UK-wide",
  },
  {
    name: "FACEIT",
    description: "Global competitive gaming platform with UK offices, running major esports tournaments.",
    roles: ["Product", "Engineering", "Esports Operations"],
    location: "London",
  },
  {
    name: "Gfinity",
    description: "UK esports and gaming entertainment company operating leagues and events.",
    roles: ["Production", "Broadcasting", "Events"],
    location: "London",
  },
  {
    name: "Team Liquid",
    description: "Global esports organisation with European headquarters in the Netherlands, UK recruitment.",
    roles: ["Performance", "Analytics", "Content"],
    location: "Remote/Europe",
  },
];

const jobCategories = [
  {
    title: "Coaching & Performance",
    icon: "🎯",
    description: "Guide professional teams to victory through strategic coaching, VOD review, and player development.",
    roles: ["Head Coach", "Assistant Coach", "Performance Coach", "Sports Psychologist"],
    avgSalary: "£35,000 - £65,000",
  },
  {
    title: "Data & Analytics",
    icon: "📊",
    description: "Analyse gameplay data, opponent strategies, and performance metrics to give teams a competitive edge.",
    roles: ["Esports Analyst", "Data Scientist", "Performance Analyst", "Scout"],
    avgSalary: "£28,000 - £55,000",
  },
  {
    title: "Marketing & Brand",
    icon: "📢",
    description: "Build esports brands, manage sponsorships, and create marketing campaigns that engage gaming audiences.",
    roles: ["Marketing Manager", "Brand Manager", "Partnerships Manager", "Social Media Manager"],
    avgSalary: "£30,000 - £70,000",
  },
  {
    title: "Content & Broadcasting",
    icon: "🎬",
    description: "Create engaging content and bring esports to life through live broadcasts, streams, and video production.",
    roles: ["Content Creator", "Video Editor", "Shoutcaster", "Producer"],
    avgSalary: "£25,000 - £60,000",
  },
  {
    title: "Events & Operations",
    icon: "🏟️",
    description: "Plan and execute esports tournaments, manage venues, and deliver world-class competitive experiences.",
    roles: ["Tournament Director", "Event Manager", "Operations Manager", "Production Coordinator"],
    avgSalary: "£28,000 - £55,000",
  },
  {
    title: "Business & Management",
    icon: "💼",
    description: "Lead esports organisations, manage teams, and drive business growth in the competitive gaming industry.",
    roles: ["Team Manager", "General Manager", "CEO", "Business Development Manager"],
    avgSalary: "£35,000 - £100,000+",
  },
];

const faqs = [
  {
    question: "Where can I find esports jobs in the UK?",
    answer: "The best places to find UK esports jobs include: specialist esports recruiters like EsportsJobs.quest, company career pages (Fnatic, Excel Esports, Gfinity), LinkedIn with esports-specific searches, Twitter/X where many roles are announced, Discord communities for specific games/organisations, and working with an experienced esports recruiter. London has the most opportunities, but remote roles are increasingly common.",
  },
  {
    question: "What salary can I expect from esports jobs in the UK?",
    answer: "UK esports salaries vary significantly by role and experience. Entry-level positions typically start at £22,000-£28,000, mid-level roles range from £35,000-£45,000, and senior positions can exceed £60,000-£100,000+. Coaches at top organisations earn £30,000-£80,000, while marketing managers make £32,000-£70,000. London salaries are typically 15-20% higher than other UK regions.",
  },
  {
    question: "Who are the top esports employers in the UK?",
    answer: "Leading UK esports employers include: Fnatic (London-based org with teams in multiple titles), Excel Esports (LEC League of Legends team), Guild Esports (David Beckham-backed organisation), FACEIT (competitive gaming platform), Gfinity (esports events and leagues), British Esports Association (national governing body), and Team Liquid's European operations. Game publishers with UK offices like Riot Games and EA also hire for esports roles.",
  },
  {
    question: "Are UK esports jobs remote or office-based?",
    answer: "UK esports jobs offer a mix of remote, hybrid, and office-based arrangements. Content creation, analytics, coaching, and marketing roles often allow remote work. However, roles requiring physical presence—like event operations, broadcast production, and some team management positions—are typically office or venue-based. Since COVID-19, many organisations adopted flexible working, with around 40% of esports roles offering some remote flexibility.",
  },
  {
    question: "Do I need a visa to work in esports in the UK?",
    answer: "International candidates need the right to work in the UK for office-based roles. Post-Brexit, EU citizens require work visas like UK citizens from other countries. The Skilled Worker visa is most common, requiring employer sponsorship and a minimum salary threshold (currently £26,200 or specific role rates). Some top organisations sponsor international talent for specialised positions. Remote roles working for UK companies from abroad may have different requirements.",
  },
];

export default function EsportsJobsUK() {
  const stats = getJobStats();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Esports Jobs UK - Complete Guide 2025",
    description: "Comprehensive guide to finding esports jobs in the UK, including salaries, top companies, and career paths.",
    url: "https://esportsjobs.quest/esports-jobs-uk",
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
        { "@type": "ListItem", position: 1, name: "Home", item: "https://esportsjobs.quest" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs UK", item: "https://esportsjobs.quest/esports-jobs-uk" },
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
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-cyan-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-violet-400">Esports Jobs UK</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Esports Jobs UK: Your Complete Guide to{" "}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Gaming Careers in 2025
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                The UK esports industry is booming, with hundreds of opportunities across coaching, content creation,
                marketing, events, and more. Whether you&apos;re looking for your first esports role or advancing your
                gaming career, this comprehensive guide covers everything you need to know about esports jobs in the UK.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-3xl font-bold text-violet-400">{stats.total}</div>
                  <div className="text-sm text-slate-400">Jobs Listed</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-3xl font-bold text-cyan-400">{stats.uk}</div>
                  <div className="text-sm text-slate-400">UK-Based</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-3xl font-bold text-emerald-400">£35k</div>
                  <div className="text-sm text-slate-400">Avg UK Salary*</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-3xl font-bold text-amber-400">{stats.coaching}</div>
                  <div className="text-sm text-slate-400">Coaching Roles</div>
                </div>
              </div>
              <p className="text-slate-500 text-xs mb-6">*Industry average from Glassdoor. Job counts reflect our current aggregated listings.</p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#jobs"
                  className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
                >
                  Browse All Esports Jobs
                </Link>
                <Link
                  href="/entry-level-esports-jobs-uk"
                  className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-violet-500 transition-all"
                >
                  Entry Level Jobs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6">Quick Navigation</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <a href="#job-categories" className="text-violet-400 hover:text-violet-300 transition-colors">
                  → Types of Esports Jobs
                </a>
                <a href="#salaries" className="text-violet-400 hover:text-violet-300 transition-colors">
                  → UK Salary Guide
                </a>
                <a href="#companies" className="text-violet-400 hover:text-violet-300 transition-colors">
                  → Top Companies Hiring
                </a>
                <a href="#how-to-apply" className="text-violet-400 hover:text-violet-300 transition-colors">
                  → How to Get Hired
                </a>
                <a href="#locations" className="text-violet-400 hover:text-violet-300 transition-colors">
                  → Jobs by Location
                </a>
                <a href="#skills" className="text-violet-400 hover:text-violet-300 transition-colors">
                  → Required Skills
                </a>
                <a href="#career-paths" className="text-violet-400 hover:text-violet-300 transition-colors">
                  → Career Progression
                </a>
                <a href="#faqs" className="text-violet-400 hover:text-violet-300 transition-colors">
                  → FAQs
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* UK Esports Industry Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">The UK Esports Industry in 2025</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-slate-300 mb-6">
                The United Kingdom has emerged as one of Europe&apos;s leading esports markets, with the industry
                experiencing remarkable growth year-on-year. According to the{" "}
                <a href="https://britishesports.org" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300">
                  British Esports Association
                </a>, the UK esports audience has grown to over 10 million viewers, while the broader UK games
                industry employs more than 20,000 people as reported by{" "}
                <a href="https://ukie.org.uk" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300">
                  Ukie
                </a>.
              </p>
              <p className="text-lg text-slate-300 mb-6">
                This growth has created unprecedented demand for esports professionals across all areas—from
                coaches and analysts who help teams compete at the highest level, to marketing specialists
                building brands, content creators engaging audiences, and event organisers delivering
                world-class tournaments.
              </p>
              <p className="text-lg text-slate-300">
                Whether you&apos;re a passionate gamer looking to turn your hobby into a career, a marketing
                professional seeking to work in an exciting industry, or a recent graduate exploring
                opportunities, the UK esports job market offers diverse pathways to success.
              </p>
            </div>
          </div>
        </section>

        {/* Job Categories */}
        <section id="job-categories" className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Types of Esports Jobs in the UK</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              Esports organisations require diverse talent across multiple departments. Here are the main
              career categories available in the UK esports industry.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobCategories.map((category) => (
                <div key={category.title} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-violet-500/50 transition-all">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{category.description}</p>
                  <div className="mb-4">
                    <span className="text-sm text-slate-500">Typical roles:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {category.roles.map((role) => (
                        <span key={role} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-lg">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-emerald-400 font-medium">{category.avgSalary}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/esports-careers"
                className="text-violet-400 hover:text-violet-300 font-medium transition-colors"
              >
                Explore detailed esports career pathways →
              </Link>
            </div>
          </div>
        </section>

        {/* Salary Guide */}
        <section id="salaries" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">UK Esports Salary Guide 2025</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              Esports salaries in the UK vary significantly based on role, experience, and organisation size.
              Here&apos;s what you can expect to earn at different career stages. Data compiled from{" "}
              <a href="https://glassdoor.co.uk" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300">
                Glassdoor
              </a>{" "}
              and industry sources.
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

            <div className="mt-8 p-6 bg-slate-800/30 rounded-xl border border-slate-700">
              <p className="text-slate-400 text-sm">
                <strong className="text-white">Note:</strong> Salaries at top-tier organisations like Fnatic or
                international orgs may be higher. Content creators and professional players can earn significantly
                more through sponsorships, streaming revenue, and tournament winnings.{" "}
                <Link href="/esports-salary-guide-uk" className="text-violet-400 hover:text-violet-300">
                  View our complete salary guide →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Top Companies */}
        <section id="companies" className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Top UK Esports Companies Hiring</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              These leading organisations regularly recruit esports professionals in the UK. From endemic
              esports teams to tournament operators and publishers with UK offices.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {topCompanies.map((company) => (
                <div key={company.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">{company.name}</h3>
                    <span className="px-3 py-1 bg-violet-600/20 text-violet-400 text-sm rounded-full">
                      {company.location}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">{company.description}</p>
                  <div>
                    <span className="text-xs text-slate-500">Hiring for:</span>
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

            <div className="mt-10 text-center">
              <Link
                href="/top-esports-companies-uk"
                className="text-violet-400 hover:text-violet-300 font-medium transition-colors"
              >
                View all 50+ UK esports companies →
              </Link>
            </div>
          </div>
        </section>

        {/* How to Get an Esports Job */}
        <section id="how-to-apply" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">How to Get an Esports Job in the UK</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              Breaking into esports requires a combination of passion, skills, and strategic positioning.
              Follow these steps to increase your chances of landing your dream esports role.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center text-2xl mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Build Your Foundation</h3>
                <p className="text-slate-400 text-sm">
                  Develop expertise in your chosen area—whether that&apos;s deep game knowledge, video editing,
                  data analysis, or marketing. Take relevant courses, earn certifications, and stay current
                  with industry trends.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center text-2xl mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Gain Practical Experience</h3>
                <p className="text-slate-400 text-sm">
                  Volunteer at local tournaments, join university esports teams, coach amateur players, or
                  create content. Real experience is invaluable and demonstrates commitment to potential employers.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center text-2xl mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Build Your Portfolio</h3>
                <p className="text-slate-400 text-sm">
                  Create a portfolio showcasing your work—analysis videos, content samples, event photos,
                  marketing campaigns. Tangible examples of your skills are more compelling than qualifications alone.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center text-2xl mb-4">
                  4
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Network in the Industry</h3>
                <p className="text-slate-400 text-sm">
                  Attend esports events, join Discord communities, engage on Twitter/X and LinkedIn. Many
                  esports jobs are filled through connections. Be genuine, helpful, and professional in your interactions.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center text-2xl mb-4">
                  5
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Apply Strategically</h3>
                <p className="text-slate-400 text-sm">
                  Tailor each application to the specific role and organisation. Research the company, understand
                  their games and culture, and demonstrate how your skills align with their needs.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center text-2xl mb-4">
                  6
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Be Persistent</h3>
                <p className="text-slate-400 text-sm">
                  The esports industry is competitive. Don&apos;t be discouraged by rejections. Keep improving your
                  skills, expanding your network, and applying. Many successful esports professionals faced
                  initial setbacks.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/how-to-get-into-esports"
                className="text-violet-400 hover:text-violet-300 font-medium transition-colors"
              >
                Read our complete guide on breaking into esports →
              </Link>
            </div>
          </div>
        </section>

        {/* Jobs by Location */}
        <section id="locations" className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">UK Esports Jobs by Location</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              While London dominates the UK esports scene, opportunities exist across the country and remotely.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/esports-jobs-london" className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-violet-500/50 transition-all group">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">London</h3>
                <p className="text-slate-400 text-sm mb-3">
                  Home to Fnatic, Excel Esports, Gfinity, and FACEIT. The UK&apos;s esports hub with the most opportunities.
                </p>
                <span className="text-emerald-400 text-sm">200+ active roles</span>
              </Link>

              <Link href="/esports-jobs-manchester" className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-violet-500/50 transition-all group">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">Manchester</h3>
                <p className="text-slate-400 text-sm mb-3">
                  Growing esports scene with organisations like Wylde Gaming and strong university esports programs.
                </p>
                <span className="text-emerald-400 text-sm">50+ active roles</span>
              </Link>

              <Link href="/esports-jobs-remote" className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-violet-500/50 transition-all group">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">Remote UK</h3>
                <p className="text-slate-400 text-sm mb-3">
                  Many roles in content, analytics, and coaching can be done remotely. Work for UK and international orgs.
                </p>
                <span className="text-emerald-400 text-sm">150+ remote roles</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Essential Skills for UK Esports Jobs</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              Beyond gaming knowledge, esports employers look for a range of professional skills.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Technical Skills</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-300">
                    <span className="text-violet-400 mt-1">✓</span>
                    <span><strong>Video Production:</strong> Premier Pro, After Effects, OBS for streaming</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <span className="text-violet-400 mt-1">✓</span>
                    <span><strong>Data Analysis:</strong> Excel, Python, SQL for performance analytics</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <span className="text-violet-400 mt-1">✓</span>
                    <span><strong>Social Media:</strong> Platform expertise, content scheduling, analytics</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <span className="text-violet-400 mt-1">✓</span>
                    <span><strong>Game Knowledge:</strong> Deep understanding of competitive titles and meta</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <span className="text-violet-400 mt-1">✓</span>
                    <span><strong>Broadcast Tools:</strong> vMix, Wirecast, graphics packages</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">Soft Skills</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-300">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span><strong>Communication:</strong> Clear verbal and written skills for team coordination</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span><strong>Project Management:</strong> Ability to manage multiple tasks and deadlines</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span><strong>Adaptability:</strong> Esports moves fast; flexibility is essential</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span><strong>Passion:</strong> Genuine enthusiasm for gaming and esports culture</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span><strong>Networking:</strong> Building and maintaining industry relationships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section id="career-paths" className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Esports Career Progression</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              Most esports careers follow clear progression paths. Here&apos;s what advancement looks like in
              key areas.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-bold text-white mb-4">Coaching Path</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-slate-600 rounded-full" />
                    <span className="text-slate-400 text-sm">Amateur/Volunteer Coach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-slate-500 rounded-full" />
                    <span className="text-slate-300 text-sm">Academy Coach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-violet-500 rounded-full" />
                    <span className="text-slate-300 text-sm">Assistant Coach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-violet-400 rounded-full" />
                    <span className="text-white text-sm font-medium">Head Coach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-cyan-400 text-sm font-medium">Director of Esports</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-bold text-white mb-4">Marketing Path</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-slate-600 rounded-full" />
                    <span className="text-slate-400 text-sm">Marketing Intern</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-slate-500 rounded-full" />
                    <span className="text-slate-300 text-sm">Marketing Coordinator</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-violet-500 rounded-full" />
                    <span className="text-slate-300 text-sm">Marketing Manager</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-violet-400 rounded-full" />
                    <span className="text-white text-sm font-medium">Head of Marketing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-cyan-400 text-sm font-medium">CMO / VP Marketing</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-bold text-white mb-4">Content Path</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-slate-600 rounded-full" />
                    <span className="text-slate-400 text-sm">Content Intern</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-slate-500 rounded-full" />
                    <span className="text-slate-300 text-sm">Junior Video Editor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-violet-500 rounded-full" />
                    <span className="text-slate-300 text-sm">Content Producer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-violet-400 rounded-full" />
                    <span className="text-white text-sm font-medium">Content Manager</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-cyan-400 text-sm font-medium">Creative Director</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/esports-careers"
                className="text-violet-400 hover:text-violet-300 font-medium transition-colors"
              >
                Explore all esports career pathways →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="py-16">
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

        {/* Real Jobs Section */}
        <RealJobsSection
          title="Current UK Esports Jobs"
          subtitle="Real listings aggregated from public sources"
          filter={{ country: "United Kingdom" }}
          limit={6}
          showViewAll={true}
        />

        {/* All Jobs Section */}
        <RealJobsSection
          title="Global Esports Opportunities"
          subtitle="International roles you can apply for"
          limit={6}
          showViewAll={true}
        />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-violet-600/20 via-slate-900 to-cyan-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your UK Esports Career?
            </h2>
            <p className="text-slate-300 mb-8">
              Browse hundreds of esports jobs across the UK. From entry-level positions to senior roles
              at top organisations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#jobs"
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
              >
                Browse All Jobs
              </Link>
              <Link
                href="/esports-recruitment"
                className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-violet-500 transition-all"
              >
                Recruitment Services
              </Link>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Related Guides</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link href="/entry-level-esports-jobs-uk" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Entry Level Esports Jobs</h3>
                <p className="text-slate-400 text-sm">Perfect for those just starting their esports career.</p>
              </Link>
              <Link href="/esports-jobs-london" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Esports Jobs London</h3>
                <p className="text-slate-400 text-sm">Opportunities in the UK&apos;s esports capital.</p>
              </Link>
              <Link href="/gaming-jobs-uk" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Gaming Jobs UK</h3>
                <p className="text-slate-400 text-sm">Broader gaming industry roles in the UK.</p>
              </Link>
              <Link href="/how-to-get-into-esports" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">How to Get Into Esports</h3>
                <p className="text-slate-400 text-sm">Complete guide to breaking into the industry.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
