import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://esportsjobs.quest/esports-jobs-singapore",
      url: "https://esportsjobs.quest/esports-jobs-singapore",
      name: "Esports Jobs Singapore | Gaming Careers in Singapore",
      description: "Find esports jobs in Singapore. Gaming careers at Riot Games SEA, Garena, Razer and esports organisations in Southeast Asia's esports hub.",
      isPartOf: { "@id": "https://esportsjobs.quest/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://esportsjobs.quest" },
        { "@type": "ListItem", position: 2, name: "Esports Jobs", item: "https://esportsjobs.quest/esports-jobs" },
        { "@type": "ListItem", position: 3, name: "Singapore", item: "https://esportsjobs.quest/esports-jobs-singapore" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Singapore good for esports careers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Singapore is Southeast Asia's premier esports hub. Home to Riot Games SEA headquarters, Garena, Razer, and numerous esports organisations. The government actively supports esports, and major tournaments are regularly hosted here. English is widely spoken, making it accessible for international professionals."
          }
        },
        {
          "@type": "Question",
          name: "What esports companies are in Singapore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Singapore hosts major gaming companies including Riot Games Southeast Asia (League of Legends, Valorant), Garena (Free Fire, regional publishing), Razer (gaming hardware HQ), Sea Limited (Shopee, Garena parent), and numerous esports organisations and tournament operators serving the APAC region."
          }
        },
        {
          "@type": "Question",
          name: "What esports jobs are available in Singapore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Singapore offers diverse esports roles: esports operations, game publishing, regional marketing, tournament production, content creation, community management, and business development. Many roles serve the broader SEA/APAC region. Companies seek bilingual candidates (English plus Mandarin, Thai, or Bahasa) for regional positions."
          }
        },
        {
          "@type": "Question",
          name: "Do I need a visa to work in esports in Singapore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, foreign nationals need an Employment Pass to work in Singapore. Tech and gaming companies regularly sponsor skilled workers. Singapore's efficient visa system and English-speaking environment make it attractive for international esports professionals seeking careers in Asia."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Esports Jobs Singapore 🇸🇬 Gaming Careers SEA",
  description: "🚀 Find esports jobs in Singapore. Gaming careers at Riot Games SEA, Garena, Razer and esports organisations in Southeast Asia's esports hub.",
  keywords: "esports jobs singapore, gaming jobs singapore, riot games sea jobs, garena jobs, razer careers, esports careers asia, sea esports jobs",
  alternates: { canonical: "https://esportsjobs.quest/esports-jobs-singapore" },
};

const majorCompanies = [
  { name: "Riot Games SEA", focus: "League of Legends, Valorant publisher" },
  { name: "Garena", focus: "Free Fire, regional game publishing" },
  { name: "Razer", focus: "Gaming hardware HQ" },
  { name: "Sea Limited", focus: "Gaming & e-commerce conglomerate" },
  { name: "ONE Esports", focus: "Esports media & events" },
  { name: "EVOS Esports", focus: "SEA esports organisation" },
];

const roleTypes = [
  "Esports Manager", "Regional Marketing", "Game Publisher", "Tournament Producer",
  "Content Creator", "Community Manager", "Business Development", "Broadcast Producer",
  "Esports Analyst", "Social Media Manager", "Partnerships Manager", "Localization"
];

export default function EsportsJobsSingapore() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-slate-900" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-red-400">Singapore</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esports Jobs Singapore:{" "}
              <span className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">Southeast Asia&apos;s Esports Hub</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Singapore is the esports capital of Southeast Asia. Home to Riot Games SEA, Garena, and Razer HQ,
              the city-state offers world-class gaming careers with English as the business language.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-jobs-remote" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Remote Jobs
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Major Gaming Companies in Singapore</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {majorCompanies.map((company) => (
                <div key={company.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{company.name}</h3>
                  <p className="text-sm text-slate-400">{company.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Types of Esports Roles in Singapore</h2>
            <div className="flex flex-wrap gap-3">
              {roleTypes.map((role) => (
                <span key={role} className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Why Singapore for Esports?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Advantages</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>English is the business language</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Major publishers&apos; SEA headquarters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Government support for esports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Gateway to 700M+ SEA gamers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Excellent infrastructure & connectivity</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Key Skills for Singapore</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>English fluency (required)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Mandarin/SEA languages (advantage)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Understanding of Asian gaming markets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Mobile gaming expertise (huge in SEA)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Regional market knowledge</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Explore Global Esports Jobs</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/esports-jobs-seoul" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-white font-medium">Seoul Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Korea - World esports capital</p>
              </Link>
              <Link href="/esports-jobs-los-angeles" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                <span className="text-white font-medium">Los Angeles Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">NA esports hub</p>
              </Link>
              <Link href="/esports-jobs-berlin" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
                <span className="text-white font-medium">Berlin Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">European esports centre</p>
              </Link>
              <Link href="/esports-jobs-sydney" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-white font-medium">Sydney Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Oceania gaming careers</p>
              </Link>
              <Link href="/esports-jobs-london" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
                <span className="text-white font-medium">London Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">UK esports capital</p>
              </Link>
              <Link href="/esports-jobs-remote" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-colors">
                <span className="text-white font-medium">Remote Esports Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Work from anywhere</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-red-600/20 via-slate-900 to-rose-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Singapore Esports Job</h2>
            <p className="text-slate-300 mb-8">Browse esports and gaming opportunities in Southeast Asia.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold rounded-xl">
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
