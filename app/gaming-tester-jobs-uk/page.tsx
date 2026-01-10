import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mvp.actor/gaming-tester-jobs-uk",
      "url": "https://mvp.actor/gaming-tester-jobs-uk",
      "name": "Gaming Tester Jobs UK | QA Careers Guide 2025",
      "description": "Find gaming tester jobs in the UK. QA testing is the most accessible entry into gaming. Learn requirements, salaries & top companies hiring game testers.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://mvp.actor/#website"
      },
      "breadcrumb": {
        "@id": "https://mvp.actor/gaming-tester-jobs-uk#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mvp.actor/gaming-tester-jobs-uk#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://mvp.actor"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Gaming Jobs UK",
          "item": "https://mvp.actor/gaming-jobs-uk"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Tester Jobs",
          "item": "https://mvp.actor/gaming-tester-jobs-uk"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a gaming QA tester actually do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gaming QA testers play games systematically to find bugs, glitches, and issues before release. You'll write detailed bug reports, test new features, verify fixes, and ensure games work across different platforms and devices. The work involves playing the same sections repeatedly, following test cases, and documenting everything clearly. It's less about playing for fun and more about methodical testing."
          }
        },
        {
          "@type": "Question",
          "name": "What skills do I need to become a game tester?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Key skills include attention to detail, patience, clear written communication for bug reports, and gaming knowledge across genres. You need basic understanding of game development, familiarity with bug tracking tools like Jira, and ability to reproduce issues consistently. No programming is required for entry-level QA, though it helps for senior roles. Strong observational skills and systematic thinking are essential."
          }
        },
        {
          "@type": "Question",
          "name": "What salary can I expect as a game tester in the UK?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Junior QA testers in the UK typically earn £20,000-£26,000. With 1-2 years experience, this rises to £24,000-£32,000. Senior testers earn £32,000-£42,000, QA leads £40,000-£55,000, and QA managers can earn £50,000-£70,000. Automation QA roles command higher salaries (£35,000-£55,000) due to programming requirements. Salaries are higher in London and at major studios."
          }
        },
        {
          "@type": "Question",
          "name": "Can I progress from QA to other gaming careers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, QA is an excellent entry point to other gaming roles. Many developers, producers, and designers started in QA. The role gives you deep understanding of game development, industry connections, and insight into how games are built. Common progressions include QA lead, producer, designer, or community manager. Some testers transition into development by learning programming, or move into project management."
          }
        },
        {
          "@type": "Question",
          "name": "Is the work-life balance good for game testers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Work-life balance varies by company and project phase. During normal development, hours are typically standard 9-6. However, during crunch periods before release, expect longer hours including evenings and weekends. Outsourcing QA companies (Keywords, Pole To Win) often have better work-life balance than in-house studio QA. Contract roles are common, which can mean gaps between projects. Balance improves as you progress to senior roles."
          }
        }
      ]
    }
  ]
};

// Target keyword: "game tester jobs uk"
export const metadata: Metadata = {
  title: "Game Tester Jobs UK 🎮 QA Careers",
  description: "🕹️ Game tester jobs UK - QA testing is the most accessible entry into gaming. Requirements, companies hiring & how to become a game tester.",
  keywords: "game tester jobs uk, gaming tester jobs, game qa jobs",
  openGraph: {
    title: "Game Tester Jobs UK 🎮 QA Careers",
    description: "🕹️ Game tester jobs UK - QA testing is the most accessible entry into gaming.",
    type: "website",
    url: "https://mvp.actor/gaming-tester-jobs-uk",
  },
  alternates: {
    canonical: "https://mvp.actor/gaming-tester-jobs-uk",
  },
};

const qaRoles = [
  { title: "Junior QA Tester", salary: "£20,000 - £26,000", requirements: "Attention to detail, gaming knowledge, basic PC skills" },
  { title: "QA Tester", salary: "£24,000 - £32,000", requirements: "1-2 years experience, bug tracking tools, test case writing" },
  { title: "Senior QA Tester", salary: "£32,000 - £42,000", requirements: "3+ years, mentoring, specialisation (localisation, compliance)" },
  { title: "QA Lead", salary: "£40,000 - £55,000", requirements: "Team management, test planning, stakeholder communication" },
  { title: "QA Manager", salary: "£50,000 - £70,000", requirements: "Department leadership, process development, budgeting" },
  { title: "Automation QA", salary: "£35,000 - £55,000", requirements: "Programming skills, test automation frameworks, CI/CD" },
];

const companies = [
  { name: "Keywords Studios", location: "Multiple UK", focus: "Outsourced QA services" },
  { name: "Pole To Win", location: "London", focus: "QA and localisation" },
  { name: "Rockstar Games", location: "Edinburgh/Lincoln", focus: "In-house AAA QA" },
  { name: "EA", location: "Guildford", focus: "In-house QA for EA titles" },
  { name: "SEGA", location: "London", focus: "QA for European releases" },
  { name: "Sumo Digital", location: "Sheffield/Multiple", focus: "In-house development QA" },
];

const skills = [
  "Attention to detail and patience",
  "Clear written communication for bug reports",
  "Gaming knowledge across genres and platforms",
  "Basic understanding of game development",
  "Familiarity with bug tracking tools (Jira, Mantis)",
  "Ability to reproduce issues consistently",
];

export default function GamingTesterJobsUK() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-transparent to-violet-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/gaming-jobs-uk" className="hover:text-white">Gaming Jobs UK</Link>
              <span className="mx-2">/</span>
              <span className="text-amber-400">Tester Jobs</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Gaming Tester Jobs UK:{" "}
              <span className="bg-gradient-to-r from-amber-400 to-violet-400 bg-clip-text text-transparent">
                Your Entry Into Gaming
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Game QA testing is one of the most accessible entry points into the gaming industry.
              Find game tester jobs across the UK with competitive salaries and clear career progression.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div className="text-2xl font-bold text-amber-400">200+</div>
                <div className="text-sm text-slate-400">QA Roles</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div className="text-2xl font-bold text-violet-400">£22-35k</div>
                <div className="text-sm text-slate-400">Typical Salary</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div className="text-2xl font-bold text-emerald-400">Entry</div>
                <div className="text-sm text-slate-400">Level Accessible</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div className="text-2xl font-bold text-cyan-400">Clear</div>
                <div className="text-sm text-slate-400">Career Path</div>
              </div>
            </div>

            <Link href="/#jobs" className="px-8 py-4 bg-gradient-to-r from-amber-600 to-violet-600 text-white font-semibold rounded-xl inline-block">
              Browse QA Jobs
            </Link>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">QA Career Progression</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qaRoles.map((role) => (
                <div key={role.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white">{role.title}</h3>
                    <span className="text-emerald-400 text-sm">{role.salary}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{role.requirements}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Top QA Employers UK</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companies.map((company) => (
                <div key={company.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-1">{company.name}</h3>
                  <p className="text-amber-400 text-sm mb-2">{company.location}</p>
                  <p className="text-slate-400 text-xs">{company.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Essential Skills for QA</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div key={skill} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 flex items-center gap-3">
                  <span className="text-amber-400">✓</span>
                  <span className="text-slate-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-amber-600/20 via-slate-900 to-violet-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Start Your QA Career</h2>
            <p className="text-slate-300 mb-8">Game testing is your gateway to the gaming industry.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#jobs" className="px-8 py-4 bg-gradient-to-r from-amber-600 to-violet-600 text-white font-semibold rounded-xl">
                Browse QA Jobs
              </Link>
              <Link href="/gaming-jobs-uk" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                All Gaming Jobs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
