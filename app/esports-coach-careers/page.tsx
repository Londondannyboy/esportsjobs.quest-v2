import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";
import { RealJobsSection, getJobStats } from "../components/RealJobsSection";

// Target keyword: "esports coach jobs"
export const metadata: Metadata = {
  title: "Esports Coach Jobs 🏆 Coaching Careers",
  description: "🎮 Esports coach jobs at top gaming organisations. Coaching careers guide with salary data, qualifications needed and how to become an esports coach.",
  keywords: "esports coach jobs, esports coaching careers",
  alternates: { canonical: "https://mvp.actor/esports-coach-careers" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mvp.actor/esports-coach-careers",
      "url": "https://mvp.actor/esports-coach-careers",
      "name": "Esports Coach Careers | Coaching Jobs Guide",
      "description": "Become an esports coach in the UK. Guide to coaching careers, salaries, qualifications and how to break into professional esports coaching.",
      "isPartOf": {
        "@id": "https://mvp.actor/#website"
      },
      "breadcrumb": {
        "@id": "https://mvp.actor/esports-coach-careers#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mvp.actor/esports-coach-careers#breadcrumb",
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
          "name": "Esports Careers",
          "item": "https://mvp.actor/esports-careers"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Coaching",
          "item": "https://mvp.actor/esports-coach-careers"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I become an esports coach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start by building deep expertise in a specific game, then gain experience coaching amateur teams or creating educational content. Many coaches begin as volunteer coaches for community teams, then progress to academy coaching roles. Key steps include: mastering game mechanics and strategy, developing communication and leadership skills, building a portfolio of coaching results, and networking within the esports community."
          }
        },
        {
          "@type": "Question",
          "name": "What skills do I need to become an esports coach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Essential skills for esports coaching include deep game knowledge, strategic thinking, strong communication abilities, leadership and team management, data analysis skills, emotional intelligence, VOD (video on demand) review capabilities, and player development expertise. Coaches must understand both individual player psychology and team dynamics while staying current with meta changes and competitive trends."
          }
        },
        {
          "@type": "Question",
          "name": "What is the salary range for esports coaches in the UK?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "UK esports coach salaries vary by level: Volunteer/entry-level coaches may earn unpaid to £500/month, Academy coaches earn £22,000-£30,000, Assistant coaches earn £30,000-£45,000, Head coaches earn £45,000-£80,000, and Directors of Esports can earn £70,000-£120,000+. Salaries depend on the organisation tier, game title, and coach's track record."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need coaching certifications to work in esports?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Formal certifications are not required for esports coaching, as the industry values proven results and game knowledge over traditional qualifications. However, certifications in sports psychology, team management, or specific coaching methodologies can be beneficial. What matters most is your track record of developing players, understanding of the game at a competitive level, and ability to demonstrate coaching success through team results and player improvement."
          }
        },
        {
          "@type": "Question",
          "name": "Can I work as a remote esports coach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, many esports coaching roles can be done remotely, especially for online-only games and during the regular season. Remote coaches use video conferencing, VOD review tools, and online collaboration platforms to work with teams. However, some positions may require in-person attendance for boot camps, major tournaments, or LAN events. Remote opportunities are particularly common for analyst roles, VOD review specialists, and coaches working with online-only teams."
          }
        }
      ]
    }
  ]
};

const progression = [
  { level: "Volunteer Coach", salary: "Unpaid - £500/mo", description: "Coach amateur teams, build experience" },
  { level: "Academy Coach", salary: "£22,000 - £30,000", description: "Develop young talent in org academies" },
  { level: "Assistant Coach", salary: "£30,000 - £45,000", description: "Support head coach, specialize in areas" },
  { level: "Head Coach", salary: "£45,000 - £80,000", description: "Lead strategic direction, manage staff" },
  { level: "Director of Esports", salary: "£70,000 - £120,000+", description: "Oversee multiple teams and coaches" },
];

const skills = ["Deep game knowledge", "Strategic thinking", "Communication", "Leadership", "Data analysis", "Emotional intelligence", "VOD review skills", "Player development"];

export default function EsportsCoachCareers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-transparent to-violet-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-careers" className="hover:text-white">Esports Careers</Link>
              <span className="mx-2">/</span>
              <span className="text-orange-400">Coaching</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esports Coach Careers:{" "}
              <span className="bg-gradient-to-r from-orange-400 to-violet-400 bg-clip-text text-transparent">Guide Teams to Victory</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Esports coaches guide professional teams through strategy, player development, and competitive preparation.
              Learn how to build your coaching career in the UK esports industry.
            </p>
            <Link href="/esports-jobs-uk" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-violet-600 text-white font-semibold rounded-xl inline-block">
              Browse Coaching Jobs
            </Link>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Career Progression</h2>
            <div className="space-y-4">
              {progression.map((level, idx) => (
                <div key={level.level} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 flex items-center gap-6">
                  <div className="w-10 h-10 bg-orange-600/20 rounded-full flex items-center justify-center text-orange-400 font-bold">{idx + 1}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-white">{level.level}</h3>
                      <span className="text-emerald-400">{level.salary}</span>
                    </div>
                    <p className="text-slate-400 text-sm">{level.description}</p>
                  </div>
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
                  <span className="text-slate-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Coaching Jobs */}
        <RealJobsSection
          title="Current Esports Coaching Jobs"
          subtitle="Real coaching positions we've aggregated from public sources"
          filter={{ category: "coaching" }}
          limit={6}
          showViewAll={true}
        />

        <section className="py-20 bg-gradient-to-r from-orange-600/20 via-slate-900 to-violet-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Start Your Coaching Career</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-violet-600 text-white font-semibold rounded-xl">All Jobs</Link>
              <Link href="/esports-careers" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">All Careers</Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
