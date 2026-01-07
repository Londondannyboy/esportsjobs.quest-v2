import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://esportsjobs.quest/esports-internships",
      url: "https://esportsjobs.quest/esports-internships",
      name: "Esports Internships | Gaming Industry Placements",
      description: "Find esports internships at Riot Games, publishers, and esports organisations. Start your gaming career with hands-on industry experience.",
      isPartOf: { "@id": "https://esportsjobs.quest/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://esportsjobs.quest" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://esportsjobs.quest/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "Internships", item: "https://esportsjobs.quest/esports-internships" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What esports internships are available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Esports internships are available in marketing, content creation, event operations, community management, business development, broadcast production, and data analytics. Major publishers like Riot Games, EA, and Activision Blizzard run formal internship programmes, while esports organisations offer more varied opportunities."
          }
        },
        {
          "@type": "Question",
          name: "Are esports internships paid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Publisher internships (Riot, EA, Activision Blizzard) are typically well-paid, often £1,500-2,500/month or more. Esports organisation internships vary - some are paid, some offer stipends, and some are unpaid but provide significant experience. Always clarify compensation before accepting."
          }
        },
        {
          "@type": "Question",
          name: "How do I get an esports internship?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Apply directly to publisher career pages during their internship seasons (usually spring for summer programmes). For esports orgs, reach out directly or look for posted opportunities. Having relevant experience (university societies, tournament organisation, content creation) significantly improves your chances."
          }
        },
        {
          "@type": "Question",
          name: "Do esports internships lead to full-time jobs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, internships are a primary pipeline for entry-level esports hiring. Publishers often convert high-performing interns to full-time roles. Even if not converted, the experience and connections make you a strong candidate elsewhere. Treat every internship as an extended interview."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Esports Internships | Gaming Industry Placements 2025",
  description: "🚀 Find esports internships at Riot Games, publishers, and esports orgs. Start your gaming career with hands-on industry experience and mentorship.",
  keywords: "esports internships, gaming internships, riot games internship, esports work experience, gaming industry placements, esports graduate jobs",
  alternates: { canonical: "https://esportsjobs.quest/esports-internships" },
};

const publisherInternships = [
  { company: "Riot Games", location: "LA, Dublin, Singapore", pay: "Well paid", duration: "10-12 weeks summer" },
  { company: "EA", location: "Various global", pay: "Paid", duration: "Summer/Year-round" },
  { company: "Activision Blizzard", location: "LA, Austin, London", pay: "Paid", duration: "Summer programmes" },
  { company: "Epic Games", location: "Cary NC, London", pay: "Paid", duration: "Summer/Co-op" },
  { company: "Ubisoft", location: "Paris, Montreal, Global", pay: "Paid", duration: "6 months typical" },
  { company: "Valve", location: "Bellevue, WA", pay: "Very competitive", duration: "Rolling applications" },
];

const internshipTypes = [
  { type: "Marketing Intern", description: "Campaign execution, social media, content planning" },
  { type: "Esports Operations Intern", description: "Tournament support, logistics, player relations" },
  { type: "Content Creation Intern", description: "Video production, graphics, written content" },
  { type: "Community Intern", description: "Moderation, engagement, community programmes" },
  { type: "Business Development Intern", description: "Partnership research, sponsorship support" },
  { type: "Data/Analytics Intern", description: "Performance tracking, insights, reporting" },
  { type: "Broadcast Production Intern", description: "Live production, technical operations" },
  { type: "Events Intern", description: "On-site event support and coordination" },
];

const timeline = [
  { month: "September - November", activity: "Research companies and prepare applications" },
  { month: "December - February", activity: "Apply to summer internship programmes" },
  { month: "February - April", activity: "Interview processes and offers" },
  { month: "May - August", activity: "Summer internship programmes run" },
  { month: "August - September", activity: "Return offers and networking for full-time" },
];

const tips = [
  "Start building relevant experience now (university esports, content, tournaments)",
  "Follow companies on LinkedIn and enable job alerts",
  "Tailor your CV for each application",
  "Research the company thoroughly before interviews",
  "Prepare specific examples of relevant work",
  "Network at events and online communities",
  "Consider relocating for the best opportunities",
  "Apply broadly - competition is fierce",
];

export default function EsportsInternships() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-transparent to-yellow-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-orange-400">Internships</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esports Internships:{" "}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Launch Your Career</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Internships are the best way to break into esports. Gain hands-on experience at publishers
              like Riot Games and EA, or esports organisations building the competitive gaming industry.
              Many full-time hires started as interns.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/full-time-esports-jobs" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Full-Time Jobs
              </Link>
            </div>
          </div>
        </section>

        {/* Why Internships */}
        <section className="py-12 bg-gradient-to-r from-orange-900/30 via-slate-900 to-yellow-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-black text-orange-400 mb-1">70%+</div>
                <div className="text-slate-400 text-sm">Of interns receive return offers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-orange-400 mb-1">10-12</div>
                <div className="text-slate-400 text-sm">Weeks typical duration</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-orange-400 mb-1">Paid</div>
                <div className="text-slate-400 text-sm">At major publishers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-orange-400 mb-1">Entry</div>
                <div className="text-slate-400 text-sm">Point to full-time careers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Publisher Internships */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Major Publisher Internships</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {publisherInternships.map((item) => (
                <div key={item.company} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{item.company}</h3>
                  <p className="text-xs text-orange-400">{item.location}</p>
                  <div className="flex justify-between mt-2 text-sm">
                    <span className="text-slate-400">{item.pay}</span>
                    <span className="text-slate-500">{item.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Internships */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Types of Esports Internships</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {internshipTypes.map((item) => (
                <div key={item.type} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{item.type}</h3>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Timeline */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Internship Application Timeline</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={item.month} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{item.month}</h3>
                      <p className="text-slate-400 text-sm">{item.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">How to Land an Esports Internship</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Application Tips</h3>
                <ul className="space-y-3 text-slate-300">
                  {tips.slice(0, 4).map((tip) => (
                    <li key={tip} className="flex items-start gap-3">
                      <span className="text-orange-400 mt-1">✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Standing Out</h3>
                <ul className="space-y-3 text-slate-300">
                  {tips.slice(4).map((tip) => (
                    <li key={tip} className="flex items-start gap-3">
                      <span className="text-yellow-400 mt-1">✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Gain */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">What You&apos;ll Gain</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-500/30">
                <h3 className="text-xl font-bold text-white mb-3">Real Experience</h3>
                <p className="text-slate-400 text-sm">
                  Work on actual projects that impact players. Build a portfolio of professional work
                  that sets you apart from other candidates.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-500/30">
                <h3 className="text-xl font-bold text-white mb-3">Industry Network</h3>
                <p className="text-slate-400 text-sm">
                  Connect with professionals who can help your career for years to come. Many jobs
                  are filled through referrals from former colleagues.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-500/30">
                <h3 className="text-xl font-bold text-white mb-3">Career Clarity</h3>
                <p className="text-slate-400 text-sm">
                  Understand what esports careers actually involve. Discover which path suits you
                  best before committing to a full-time role.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Other Job Types */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Explore Other Job Types</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/full-time-esports-jobs" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-colors">
                <span className="text-white font-medium">Full-Time Jobs</span>
                <p className="text-slate-400 text-sm mt-1">Permanent positions</p>
              </Link>
              <Link href="/part-time-esports-jobs" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                <span className="text-white font-medium">Part-Time Jobs</span>
                <p className="text-slate-400 text-sm mt-1">Flexible work</p>
              </Link>
              <Link href="/esports-jobs-remote" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-white font-medium">Remote Jobs</span>
                <p className="text-slate-400 text-sm mt-1">Work from anywhere</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-orange-600/20 via-slate-900 to-yellow-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Esports Internship</h2>
            <p className="text-slate-300 mb-8">Browse internship opportunities and start your gaming career.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-salary-guide-usa" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Salary Guide
              </Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
