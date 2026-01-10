import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mvp.actor/esports-jobs-birmingham",
      url: "https://mvp.actor/esports-jobs-birmingham",
      name: "Esports Jobs Birmingham | Gaming Careers in Birmingham",
      description: "Find esports jobs in Birmingham. Gaming careers, esports roles, and video game industry opportunities in the Birmingham and Midlands area.",
      isPartOf: { "@id": "https://mvp.actor/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mvp.actor" },
        { "@type": "ListItem", position: 2, name: "UK Esports Jobs", item: "https://mvp.actor/esports-jobs-uk" },
        { "@type": "ListItem", position: 3, name: "Birmingham", item: "https://mvp.actor/esports-jobs-birmingham" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are there esports jobs in Birmingham?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Birmingham has a developing esports scene. The NEC Birmingham hosts major gaming events like Insomnia Gaming Festival. The city has game studios, esports venues, and growing demand for gaming professionals in content, events, and community roles."
          }
        },
        {
          "@type": "Question",
          name: "What esports events happen in Birmingham?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Birmingham's NEC hosts Insomnia Gaming Festival, one of the UK's largest gaming events. The city also hosts smaller esports tournaments and gaming meetups. These events create opportunities for event staff, production crews, and gaming professionals."
          }
        },
        {
          "@type": "Question",
          name: "What types of esports jobs are available in Birmingham?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Birmingham offers esports roles in event management, content creation, community management, and gaming marketing. The city's central location makes it ideal for UK-wide event roles. Many positions also offer remote working options."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Esports Jobs Birmingham 🎮 Gaming Careers Midlands",
  description: "🚀 Find esports jobs in Birmingham. Gaming careers, esports roles, and video game industry opportunities in Birmingham and the Midlands.",
  keywords: "esports jobs birmingham, gaming jobs birmingham, esports careers midlands, video game jobs birmingham, insomnia gaming jobs",
  alternates: { canonical: "https://mvp.actor/esports-jobs-birmingham" },
};

const roleTypes = [
  "Event Manager", "Content Creator", "Community Manager", "Production Crew",
  "Social Media Manager", "Video Editor", "Marketing Manager", "Venue Staff",
  "Tournament Organiser", "Broadcast Producer", "Streamer", "Brand Ambassador"
];

export default function EsportsJobsBirmingham() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-slate-900" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs-uk" className="hover:text-white">UK Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-purple-400">Birmingham</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esports Jobs Birmingham:{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Gaming Careers in the Midlands</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Find esports and gaming jobs in Birmingham. Home to major gaming events like Insomnia at the NEC,
              Birmingham offers unique opportunities in esports events, content, and gaming industry roles.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-jobs-uk" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                All UK Jobs
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Types of Esports Roles in Birmingham</h2>
            <div className="flex flex-wrap gap-3">
              {roleTypes.map((role) => (
                <span key={role} className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Birmingham&apos;s Gaming Scene</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Why Birmingham?</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Home to Insomnia Gaming Festival at NEC</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Central UK location - ideal for events</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Growing esports venue scene</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Strong university gaming communities</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Events Focus</h3>
                <p className="text-slate-300 mb-4">
                  Birmingham&apos;s strength is in events. The NEC hosts major gaming conventions creating seasonal
                  demand for event staff, production crews, and gaming professionals. Build experience through
                  volunteering at local events.
                </p>
                <Link href="/how-to-get-into-esports" className="text-purple-400 hover:underline">
                  Learn how to start your esports career →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Explore More UK Esports Jobs</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/esports-jobs-london" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-white font-medium">London Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">UK&apos;s esports capital</p>
              </Link>
              <Link href="/esports-jobs-manchester" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
                <span className="text-white font-medium">Manchester Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">North West opportunities</p>
              </Link>
              <Link href="/esports-jobs-leeds" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
                <span className="text-white font-medium">Leeds Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Yorkshire gaming careers</p>
              </Link>
              <Link href="/esports-jobs-remote" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-white font-medium">Remote Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Work from anywhere</p>
              </Link>
              <Link href="/esports-broadcaster-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-colors">
                <span className="text-white font-medium">Broadcaster Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Casting and production</p>
              </Link>
              <Link href="/esports-jobs-uk" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                <span className="text-white font-medium">All UK Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Browse all UK opportunities</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-purple-600/20 via-slate-900 to-pink-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Birmingham Esports Job</h2>
            <p className="text-slate-300 mb-8">Browse the latest esports and gaming opportunities.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Post a Job
              </Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
