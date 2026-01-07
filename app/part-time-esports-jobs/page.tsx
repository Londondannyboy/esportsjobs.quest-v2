import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://esportsjobs.quest/part-time-esports-jobs",
      url: "https://esportsjobs.quest/part-time-esports-jobs",
      name: "Part-Time Esports Jobs | Flexible Gaming Work",
      description: "Find part-time esports jobs with flexible hours. Freelance and contract gaming roles for students and professionals.",
      isPartOf: { "@id": "https://esportsjobs.quest/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://esportsjobs.quest" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://esportsjobs.quest/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "Part-Time", item: "https://esportsjobs.quest/part-time-esports-jobs" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What part-time esports jobs are available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Part-time esports roles include event staff, tournament admins, content creators, social media managers, community moderators, shoutcasters for smaller events, coaches, and freelance video editors. Many of these can be done remotely with flexible hours."
          }
        },
        {
          "@type": "Question",
          name: "Can part-time esports work lead to full-time jobs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, many full-time esports professionals started part-time. Part-time roles let you build industry experience, develop a network, and prove your skills. Organisations often promote successful part-time staff or contractors to permanent positions when headcount allows."
          }
        },
        {
          "@type": "Question",
          name: "How much do part-time esports jobs pay?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Part-time esports pay varies widely. Event staff might earn £10-15/hour, while specialised roles like casting or coaching can command £50-200+ per session or day. Freelance rates for content creation depend heavily on experience and portfolio quality."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Part-Time Esports Jobs | Flexible Gaming Work",
  description: "🚀 Find part-time esports jobs with flexible hours. Freelance gaming work, weekend events, and contract positions in the esports industry.",
  keywords: "part time esports jobs, freelance gaming jobs, esports contract work, flexible esports careers, weekend esports jobs, esports side hustle",
  alternates: { canonical: "https://esportsjobs.quest/part-time-esports-jobs" },
};

const partTimeRoles = [
  { role: "Event Staff", pay: "£10 - £15/hour", description: "On-site support at tournaments and events" },
  { role: "Tournament Admin", pay: "£12 - £20/hour", description: "Run brackets, manage matches online" },
  { role: "Community Moderator", pay: "£10 - £18/hour", description: "Moderate Discord, forums, chat" },
  { role: "Content Creator", pay: "Varies widely", description: "Freelance video, graphics, writing" },
  { role: "Social Media Manager", pay: "£15 - £25/hour", description: "Part-time social media support" },
  { role: "Shoutcaster", pay: "£50 - £200/event", description: "Cast smaller tournaments and leagues" },
  { role: "Coach", pay: "£20 - £100/hour", description: "Individual or team coaching sessions" },
  { role: "Video Editor", pay: "£15 - £40/hour", description: "Freelance highlights and content editing" },
];

const idealFor = [
  { group: "Students", description: "Build experience while studying, flexible around classes" },
  { group: "Career Changers", description: "Test the industry before committing full-time" },
  { group: "Side Hustlers", description: "Earn extra income from your gaming passion" },
  { group: "Parents", description: "Flexible work that fits around family life" },
  { group: "Full-Time Workers", description: "Weekend and evening esports work" },
  { group: "Aspiring Pros", description: "Income while pursuing competitive gaming" },
];

const whereToFind = [
  { source: "Local LAN Events", description: "Volunteer or paid staff positions" },
  { source: "Online Tournaments", description: "Admin and moderation roles" },
  { source: "Esports Orgs", description: "Part-time and contract positions" },
  { source: "Gaming Cafes", description: "Event hosting and management" },
  { source: "Freelance Platforms", description: "Fiverr, Upwork for esports services" },
  { source: "Direct Outreach", description: "Reach out to orgs and content creators" },
];

export default function PartTimeEsportsJobs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-pink-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-purple-400">Part-Time</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Part-Time Esports Jobs:{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Flexible Gaming Work</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Part-time esports work offers flexibility to build industry experience while studying,
              working another job, or pursuing competitive gaming. From weekend events to remote
              freelance work, find flexible opportunities in gaming.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/full-time-esports-jobs" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Full-Time Jobs
              </Link>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-12 bg-gradient-to-r from-purple-900/30 via-slate-900 to-pink-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Part-Time Is Ideal For</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {idealFor.map((item) => (
                <div key={item.group} className="bg-slate-800/50 rounded-xl p-4 border border-purple-500/30 text-center">
                  <h3 className="text-lg font-bold text-white">{item.group}</h3>
                  <p className="text-xs text-slate-400 mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part-Time Roles */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Common Part-Time Esports Roles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {partTimeRoles.map((item) => (
                <div key={item.role} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{item.role}</h3>
                  <p className="text-xs text-purple-400 mb-2">{item.pay}</p>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where to Find */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Where to Find Part-Time Work</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whereToFind.map((item) => (
                <div key={item.source} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{item.source}</h3>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits vs Challenges */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Part-Time Pros & Cons</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4 text-purple-400">Benefits</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Flexibility to work around other commitments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Build experience and industry network</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Test if esports is the right career for you</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Often leads to full-time opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Work on exciting events and projects</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4 text-pink-400">Considerations</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Less job security than permanent roles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Usually no benefits (health, pension)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Income can be irregular</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Weekend/evening work common for events</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>May need to manage multiple clients/gigs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Path to Full-Time */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">From Part-Time to Full-Time</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">1</div>
                  <h3 className="text-white font-semibold mb-1">Start Small</h3>
                  <p className="text-slate-400 text-sm">Volunteer or take entry-level part-time roles</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">2</div>
                  <h3 className="text-white font-semibold mb-1">Build Network</h3>
                  <p className="text-slate-400 text-sm">Connect with industry professionals at events</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
                  <h3 className="text-white font-semibold mb-1">Prove Value</h3>
                  <p className="text-slate-400 text-sm">Consistently deliver quality work and reliability</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">4</div>
                  <h3 className="text-white font-semibold mb-1">Go Full-Time</h3>
                  <p className="text-slate-400 text-sm">Transition when the right opportunity appears</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Job Types */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Explore Other Job Types</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/full-time-esports-jobs" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-colors">
                <span className="text-white font-medium">Full-Time Jobs</span>
                <p className="text-slate-400 text-sm mt-1">Permanent positions</p>
              </Link>
              <Link href="/esports-internships" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-colors">
                <span className="text-white font-medium">Internships</span>
                <p className="text-slate-400 text-sm mt-1">Entry-level programmes</p>
              </Link>
              <Link href="/esports-jobs-remote" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-white font-medium">Remote Jobs</span>
                <p className="text-slate-400 text-sm mt-1">Work from anywhere</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-purple-600/20 via-slate-900 to-pink-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Part-Time Esports Work</h2>
            <p className="text-slate-300 mb-8">Browse flexible esports opportunities that fit your schedule.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-internships" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Internships
              </Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
