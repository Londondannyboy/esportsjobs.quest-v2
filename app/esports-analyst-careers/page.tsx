import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";
import { RealJobsSection } from "../components/RealJobsSection";

// Target keyword: "esports analyst jobs"
export const metadata: Metadata = {
  title: "Esports Analyst Jobs 📊 Data & Strategy",
  description: "🎯 Esports analyst jobs for data-driven gaming professionals. Career paths, salary guide, required skills and how to break into esports analytics.",
  keywords: "esports analyst jobs, esports data analyst",
  alternates: { canonical: "https://esportsjobs.quest/esports-analyst-careers" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://esportsjobs.quest/esports-analyst-careers",
      "url": "https://esportsjobs.quest/esports-analyst-careers",
      "name": "Esports Analyst Careers | Data & Strategy Jobs",
      "description": "Become an esports analyst. Guide to analyst careers, data analysis in gaming, salaries, and how to break into esports analytics.",
      "isPartOf": {
        "@id": "https://esportsjobs.quest/#website"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does an esports analyst do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Esports analysts provide competitive teams with data-driven insights by analyzing opponent strategies, reviewing VODs (video on demand), identifying patterns in gameplay, and preparing strategic reports. They help coaches and players make informed decisions by breaking down match data, tracking meta changes, and scouting upcoming opponents. Analysts work closely with coaching staff to develop counter-strategies and improve team performance through statistical analysis and game knowledge."
          }
        },
        {
          "@type": "Question",
          "name": "What technical skills do I need to become an esports analyst?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Essential technical skills for esports analysts include data analysis tools like Excel, Python, and SQL for processing match statistics. You need strong pattern recognition abilities, VOD review techniques, and understanding of statistical analysis. Game-specific expertise in titles like League of Legends, Valorant, or CS2 is crucial. Many analysts also use specialized tools for replay analysis, data visualization software, and sometimes machine learning for predictive modeling. Strong presentation skills are important for communicating findings to teams."
          }
        },
        {
          "@type": "Question",
          "name": "What tools do esports analysts use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Esports analysts commonly use Excel and Google Sheets for basic data tracking, Python and R for advanced statistical analysis, and SQL for database queries. Game-specific tools include in-game replay systems, third-party analytics platforms like OP.GG or Mobalytics, and video analysis software. Many teams also use custom-built internal tools for match tracking, player performance metrics, and opponent scouting. Data visualization tools like Tableau or Power BI help present insights clearly to coaching staff and players."
          }
        },
        {
          "@type": "Question",
          "name": "What is the typical career path for an esports analyst?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most esports analysts start as Junior Analysts (£22,000-£30,000) handling data collection and basic VOD review. After gaining experience, they progress to Esports Analyst roles (£28,000-£42,000) focusing on opponent scouting and strategy support. Senior Analysts (£40,000-£55,000) lead analysis efforts and present directly to teams. The highest level is Head of Analytics (£50,000-£75,000), managing entire analytics departments and shaping team strategy at the organizational level. Many analysts start by volunteering for amateur teams or creating public analysis content."
          }
        },
        {
          "@type": "Question",
          "name": "How much do esports analysts earn in the UK?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "UK esports analyst salaries vary by experience level. Junior Analysts typically earn £22,000-£30,000, while mid-level Esports Analysts make £28,000-£42,000. Senior Analysts with proven track records earn £40,000-£55,000. At the top tier, Heads of Analytics can earn £50,000-£75,000 or more at major organizations. Salaries depend on factors like the organization's budget, the game title, team success, and whether it's a full-time or freelance position. Top-tier teams and major tournament organizations typically offer higher compensation packages."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://esportsjobs.quest"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Esports Careers",
          "item": "https://esportsjobs.quest/esports-careers"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Analyst Careers",
          "item": "https://esportsjobs.quest/esports-analyst-careers"
        }
      ]
    }
  ]
};

const roles = [
  { title: "Junior Analyst", salary: "£22,000 - £30,000", focus: "Data collection, basic VOD review" },
  { title: "Esports Analyst", salary: "£28,000 - £42,000", focus: "Opponent scouting, strategy support" },
  { title: "Senior Analyst", salary: "£40,000 - £55,000", focus: "Lead analysis, presentations to team" },
  { title: "Head of Analytics", salary: "£50,000 - £75,000", focus: "Analytics department leadership" },
];

const skills = ["Data analysis (Excel, Python, SQL)", "Game-specific expertise", "Statistical thinking", "Pattern recognition", "Presentation skills", "VOD review techniques", "Communication", "Strategic mindset"];

export default function EsportsAnalystCareers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-violet-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-careers" className="hover:text-white">Esports Careers</Link>
              <span className="mx-2">/</span>
              <span className="text-blue-400">Analyst</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esports Analyst Careers:{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Data-Driven Victory</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Esports analysts provide the competitive edge through data analysis, opponent scouting,
              and strategic insights. Turn your analytical mind into an esports career.
            </p>
            <Link href="/esports-jobs-uk" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-xl inline-block">
              Browse Analyst Jobs
            </Link>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Analyst Career Progression</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {roles.map((role) => (
                <div key={role.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white">{role.title}</h3>
                    <span className="text-emerald-400">{role.salary}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{role.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Essential Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div key={skill} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
                  <span className="text-slate-300 text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Jobs - showing all jobs as we don't have specific analyst category yet */}
        <RealJobsSection
          title="Current Esports Jobs"
          subtitle="Browse available positions - analyst roles will appear as they're posted"
          limit={6}
          showViewAll={true}
        />

        <section className="py-20 bg-gradient-to-r from-blue-600/20 via-slate-900 to-violet-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Start Your Analyst Career</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-xl">All Jobs</Link>
              <Link href="/esports-careers" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">All Careers</Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
