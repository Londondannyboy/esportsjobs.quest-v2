import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mvp.actor/cloud9-careers",
      url: "https://mvp.actor/cloud9-careers",
      name: "Cloud9 Careers & Jobs | Work at Cloud9",
      description: "Find jobs at Cloud9, North America's premier esports organisation. Careers in esports, content, marketing, and operations in Los Angeles.",
      isPartOf: { "@id": "https://mvp.actor/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mvp.actor" },
        { "@type": "ListItem", position: 2, name: "Top Companies", item: "https://mvp.actor/top-esports-companies-uk" },
        { "@type": "ListItem", position: 3, name: "Cloud9", item: "https://mvp.actor/cloud9-careers" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is it like working at Cloud9?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cloud9 is known for its player-first culture and commitment to developing talent. As one of North America's most successful esports organisations, C9 maintains a professional yet approachable environment. The Los Angeles headquarters offers a blend of competitive intensity and creative innovation."
          }
        },
        {
          "@type": "Question",
          name: "What roles are available at Cloud9?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cloud9 hires across Esports Operations (coaches, analysts, team managers, performance coaches), Content & Media (video production, social media, streaming, design), Marketing & Partnerships (brand management, sponsorships, events), Business Operations (finance, HR, legal), and their Champion's Queue training initiatives."
          }
        },
        {
          "@type": "Question",
          name: "Where is Cloud9 located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cloud9 is headquartered in Los Angeles, California, USA. They have state-of-the-art training facilities for their teams. While many roles require LA presence, some positions offer remote work opportunities depending on the department and role requirements."
          }
        },
        {
          "@type": "Question",
          name: "How do I apply for a job at Cloud9?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Visit Cloud9's official careers page for current openings. C9 values candidates who demonstrate passion for esports, professional skills, and alignment with their player-development philosophy. Highlighting any experience with gaming communities or competitive environments will strengthen your application."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Cloud9 Careers ☁️ Work at Cloud9",
  description: "🎮 Cloud9 careers - jobs at North America's premier esports org. Coaching, content, marketing & operations roles in Los Angeles.",
  keywords: "cloud9 careers, cloud9 jobs, work at cloud9, c9 jobs, cloud9 esports jobs",
  alternates: { canonical: "https://mvp.actor/cloud9-careers" },
};

const departments = [
  { name: "Esports Operations", roles: ["Coaches", "Analysts", "Team Managers", "Performance Coaches"] },
  { name: "Content & Media", roles: ["Video Producers", "Social Media", "Streaming", "Design"] },
  { name: "Marketing & Partnerships", roles: ["Brand Management", "Sponsorships", "Events", "Community"] },
  { name: "Business Operations", roles: ["Finance", "HR", "Legal", "Operations"] },
  { name: "Player Development", roles: ["Academy Staff", "Scouts", "Training Coordinators"] },
];

const facts = [
  { label: "Founded", value: "2013" },
  { label: "Headquarters", value: "Los Angeles, USA" },
  { label: "Employees", value: "150+" },
  { label: "Games", value: "LoL, Valorant, CS2" },
  { label: "Championships", value: "30+" },
  { label: "Social Following", value: "8M+" },
];

export default function Cloud9Careers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-transparent to-slate-900" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/top-esports-companies-uk" className="hover:text-white">Top Companies</Link>
              <span className="mx-2">/</span>
              <span className="text-cyan-400">Cloud9</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cloud9 Careers:{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Join C9</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Cloud9 is North America&apos;s premier esports organisation, known for developing world-class talent
              and building championship teams. With a player-first philosophy and innovative approach,
              C9 offers exciting career opportunities across esports and entertainment.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://cloud9.gg/careers" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl inline-block">
                Cloud9 Careers
              </a>
              <Link href="/esports-jobs" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                All Esports Jobs
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Cloud9 at a Glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {facts.map((fact) => (
                <div key={fact.label} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
                  <div className="text-xl font-bold text-cyan-400">{fact.value}</div>
                  <div className="text-sm text-slate-400">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Departments at Cloud9</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept) => (
                <div key={dept.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-3">{dept.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {dept.roles.map((role) => (
                      <span key={role} className="px-2 py-1 bg-cyan-600/20 text-cyan-400 text-xs rounded">{role}</span>
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
              <Link href="/team-liquid-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-white font-medium">Team Liquid Careers</span>
                <p className="text-sm text-slate-400 mt-1">Join the winningest org in esports</p>
              </Link>
              <Link href="/g2-esports-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
                <span className="text-white font-medium">G2 Esports Careers</span>
                <p className="text-sm text-slate-400 mt-1">Join the #G2ARMY in Berlin</p>
              </Link>
              <Link href="/excel-esports-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
                <span className="text-white font-medium">Excel Esports Careers</span>
                <p className="text-sm text-slate-400 mt-1">UK-based esports organisation</p>
              </Link>
              <Link href="/esports-coach-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                <span className="text-white font-medium">Esports Coach Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Coaching roles across all games</p>
              </Link>
              <Link href="/esports-analyst-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-pink-500/50 transition-colors">
                <span className="text-white font-medium">Esports Analyst Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Data and performance analysis</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-cyan-600/20 via-slate-900 to-blue-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Apply to Cloud9</h2>
            <p className="text-slate-300 mb-8">Check Cloud9&apos;s official careers page for current openings.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://cloud9.gg/careers" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl">
                Cloud9 Careers
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
