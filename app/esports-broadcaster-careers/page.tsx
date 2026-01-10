import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";
import { RealJobsSection } from "../components/RealJobsSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mvp.actor/esports-broadcaster-careers",
      url: "https://mvp.actor/esports-broadcaster-careers",
      name: "Esports Broadcaster Careers | Casting & Hosting Jobs",
      description: "Become an esports broadcaster, caster or host. Guide to broadcast careers, how to start casting, and jobs in esports production.",
      isPartOf: { "@id": "https://mvp.actor/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mvp.actor" },
        { "@type": "ListItem", position: 2, name: "Esports Careers", item: "https://mvp.actor/esports-careers" },
        { "@type": "ListItem", position: 3, name: "Broadcasting", item: "https://mvp.actor/esports-broadcaster-careers" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I become an esports caster?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start by casting amateur matches on your own stream or YouTube. Build a portfolio of VODs demonstrating your style. Network with tournament organisers and offer to cast community events (often unpaid initially). Develop deep game knowledge in 1-2 titles. Practice with a co-caster to develop chemistry. Submit applications to tournament operators like FACEIT, Gfinity, or ESL when opportunities arise. Most casters start locally and build up to larger events."
          }
        },
        {
          "@type": "Question",
          name: "Do I need voice training to be an esports broadcaster?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Formal voice training isn't required but can be beneficial. Key areas to develop: vocal stamina (casting can last hours), clarity and articulation, modulating energy without straining, and developing your unique style. Many successful casters are self-taught through practice. Consider taking broadcasting or public speaking courses. Protect your voice—hydration, warm-ups, and knowing when to rest are essential for longevity."
          }
        },
        {
          "@type": "Question",
          name: "How do I build a casting portfolio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Create a showreel (2-3 minutes) highlighting your best moments—hype plays, analysis, and personality. Include variety: solo and duo casting, play-by-play and analysis. Upload full VODs to YouTube for those who want deeper samples. Cast your own games, community tournaments, or use royalty-free match footage. Update your reel regularly as you improve. Share on social media and tag tournament organisers."
          }
        },
        {
          "@type": "Question",
          name: "Is esports casting freelance or full-time?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most casters start freelance, paid per event (£100-500 for community events, more for larger productions). As you build reputation, you may get regular bookings that provide steadier income. Staff positions exist at tournament operators like ESL, BLAST, and Riot Games—these offer salaries of £28,000-£80,000+ depending on level. Many established casters blend freelance and staff work. Freelancing offers variety but less stability."
          }
        },
        {
          "@type": "Question",
          name: "What are typical earnings for esports broadcasters?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Earnings vary widely: Freelance casters earn £100-500 per community event, £500-2,000 for larger tournaments. Staff casters earn £28,000-£45,000 at entry/mid level, £45,000-£80,000 as lead talent. Top-tier casters at major events can earn significantly more. Desk analysts and hosts earn similar ranges. Broadcast producers earn £35,000-£60,000. Additional income comes from personal streaming, YouTube content, and sponsorships."
          }
        }
      ]
    }
  ]
};

// Target keyword: "esports caster jobs"
export const metadata: Metadata = {
  title: "Esports Caster Jobs 🎙️ Broadcasting Careers",
  description: "🎬 Esports caster jobs and broadcasting careers. From freelance casting to lead talent. Complete guide to becoming an esports broadcaster.",
  keywords: "esports caster jobs, esports broadcaster jobs",
  alternates: { canonical: "https://mvp.actor/esports-broadcaster-careers" },
};

const roles = [
  { title: "Freelance Caster", salary: "£100-500/event", focus: "Cast community and amateur events" },
  { title: "Staff Caster", salary: "£28,000 - £45,000", focus: "Regular casting for org or operator" },
  { title: "Lead Talent", salary: "£45,000 - £80,000", focus: "Main stage casting, major events" },
  { title: "Broadcast Producer", salary: "£35,000 - £60,000", focus: "Direct shows, manage production" },
  { title: "Desk Host/Analyst", salary: "£30,000 - £55,000", focus: "Pre/post show analysis and hosting" },
];

const skills = ["Public speaking", "Quick thinking", "Game knowledge", "Entertaining delivery", "Work under pressure", "Voice control", "Teamwork with co-caster", "Preparation & research"];

export default function EsportsBroadcasterCareers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-violet-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-careers" className="hover:text-white">Esports Careers</Link>
              <span className="mx-2">/</span>
              <span className="text-red-400">Broadcasting</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esports Broadcaster Careers:{" "}
              <span className="bg-gradient-to-r from-red-400 to-violet-400 bg-clip-text text-transparent">Voice of Esports</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              From casting epic moments to hosting major tournaments, broadcasters bring esports to life.
              Discover how to build your career in esports broadcasting.
            </p>
            <Link href="/esports-jobs-uk" className="px-8 py-4 bg-gradient-to-r from-red-600 to-violet-600 text-white font-semibold rounded-xl inline-block">
              Browse Broadcast Jobs
            </Link>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Broadcast Roles & Pay</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles.map((role) => (
                <div key={role.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white">{role.title}</h3>
                    <span className="text-emerald-400 text-sm">{role.salary}</span>
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

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">How to Start Casting</h2>
            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <p className="text-slate-300">1. <strong>Practice constantly</strong> - Cast matches on your own stream or recordings</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <p className="text-slate-300">2. <strong>Start small</strong> - Volunteer for amateur/community tournaments</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <p className="text-slate-300">3. <strong>Build a showreel</strong> - Compile your best casting moments</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <p className="text-slate-300">4. <strong>Network</strong> - Connect with event organisers and other talent</p>
              </div>
            </div>
          </div>
        </section>

        {/* Real Production Jobs - closest match to broadcasting */}
        <RealJobsSection
          title="Production & Content Jobs"
          subtitle="Broadcasting and production roles aggregated from public sources"
          filter={{ category: "production" }}
          limit={6}
          showViewAll={true}
        />

        <section className="py-20 bg-gradient-to-r from-red-600/20 via-slate-900 to-violet-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Start Your Broadcast Career</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-red-600 to-violet-600 text-white font-semibold rounded-xl">All Jobs</Link>
              <Link href="/esports-careers" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">All Careers</Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
