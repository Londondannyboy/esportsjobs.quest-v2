import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mvp.actor/team-liquid-careers",
      url: "https://mvp.actor/team-liquid-careers",
      name: "Team Liquid Careers & Jobs | Work at Team Liquid",
      description: "Find jobs at Team Liquid, one of the world's most successful esports organisations. Careers in esports, content, marketing, and operations.",
      isPartOf: { "@id": "https://mvp.actor/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mvp.actor" },
        { "@type": "ListItem", position: 2, name: "Top Companies", item: "https://mvp.actor/top-esports-companies-uk" },
        { "@type": "ListItem", position: 3, name: "Team Liquid", item: "https://mvp.actor/team-liquid-careers" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is it like working at Team Liquid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Team Liquid is known for its professional, performance-driven culture. As one of the most successful esports organisations globally, they maintain high standards across all departments. The organisation values excellence, innovation, and a deep understanding of competitive gaming. Staff work across teams in League of Legends, Dota 2, CS2, Valorant, and more."
          }
        },
        {
          "@type": "Question",
          name: "What roles are available at Team Liquid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Team Liquid hires across multiple departments: Esports Operations (coaches, analysts, team managers, performance staff), Content & Media (video producers, editors, designers, social media), Marketing & Partnerships (brand managers, sponsorship, events), and Business Operations (finance, HR, legal, IT). They also have roles at their training facilities."
          }
        },
        {
          "@type": "Question",
          name: "Where is Team Liquid located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Team Liquid is headquartered in the Netherlands with significant operations in Los Angeles, USA. They have the Alienware Training Facility in LA, one of the most advanced esports facilities in the world. Some roles are remote, while others require presence at their facilities."
          }
        },
        {
          "@type": "Question",
          name: "How do I apply for a job at Team Liquid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Visit Team Liquid's official careers page for current openings. Tailor your application to show both professional skills and esports knowledge. Team Liquid values candidates who understand competitive gaming culture and can contribute to their winning legacy. Following their social channels can alert you to new opportunities."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Team Liquid Careers 💧 Work at Team Liquid",
  description: "🎮 Team Liquid careers - jobs at one of esports' most successful organisations. Coaching, content, marketing & operations roles available.",
  keywords: "team liquid careers, team liquid jobs, work at team liquid, team liquid esports jobs",
  alternates: { canonical: "https://mvp.actor/team-liquid-careers" },
};

const departments = [
  { name: "Esports Operations", roles: ["Coaches", "Analysts", "Team Managers", "Performance Staff"] },
  { name: "Content & Media", roles: ["Video Producers", "Editors", "Designers", "Social Media"] },
  { name: "Marketing & Partnerships", roles: ["Brand Managers", "Sponsorship", "Events", "Community"] },
  { name: "Business Operations", roles: ["Finance", "HR", "Legal", "IT", "Facilities"] },
  { name: "Liquid+", roles: ["Product Managers", "Developers", "UX Designers"] },
];

const facts = [
  { label: "Founded", value: "2000" },
  { label: "Headquarters", value: "Netherlands" },
  { label: "Employees", value: "200+" },
  { label: "Games", value: "LoL, Dota 2, CS2, Valorant" },
  { label: "Major Titles", value: "40+ Championships" },
  { label: "Training Facility", value: "LA, USA" },
];

export default function TeamLiquidCareers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-slate-900" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/top-esports-companies-uk" className="hover:text-white">Top Companies</Link>
              <span className="mx-2">/</span>
              <span className="text-blue-400">Team Liquid</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Team Liquid Careers:{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Join the Legacy</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Team Liquid is one of the most decorated esports organisations in history, competing at the highest
              level across League of Legends, Dota 2, CS2, Valorant, and more. With world-class facilities and
              a winning culture, Liquid offers exceptional career opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.teamliquid.com/careers" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl inline-block">
                Team Liquid Careers
              </a>
              <Link href="/esports-jobs" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                All Esports Jobs
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Team Liquid at a Glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {facts.map((fact) => (
                <div key={fact.label} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
                  <div className="text-xl font-bold text-blue-400">{fact.value}</div>
                  <div className="text-sm text-slate-400">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Departments at Team Liquid</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept) => (
                <div key={dept.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-3">{dept.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {dept.roles.map((role) => (
                      <span key={role} className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded">{role}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Explore More Esports Careers</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/fnatic-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-colors">
                <span className="text-white font-medium">Fnatic Careers</span>
                <p className="text-sm text-slate-400 mt-1">Jobs at the legendary UK esports org</p>
              </Link>
              <Link href="/g2-esports-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
                <span className="text-white font-medium">G2 Esports Careers</span>
                <p className="text-sm text-slate-400 mt-1">Join the #G2ARMY in Berlin</p>
              </Link>
              <Link href="/cloud9-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-white font-medium">Cloud9 Careers</span>
                <p className="text-sm text-slate-400 mt-1">Work at North America&apos;s top org</p>
              </Link>
              <Link href="/esports-coach-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                <span className="text-white font-medium">Esports Coach Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Coaching roles across all games</p>
              </Link>
              <Link href="/esports-analyst-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
                <span className="text-white font-medium">Esports Analyst Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Data and performance analysis</p>
              </Link>
              <Link href="/esports-marketing-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-pink-500/50 transition-colors">
                <span className="text-white font-medium">Esports Marketing Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Brand and marketing opportunities</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-600/20 via-slate-900 to-cyan-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Apply to Team Liquid</h2>
            <p className="text-slate-300 mb-8">Check Team Liquid&apos;s official careers page for current openings.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.teamliquid.com/careers" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl">
                Team Liquid Careers
              </a>
              <Link href="/esports-jobs" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                All Esports Jobs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
