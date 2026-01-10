import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

export const metadata: Metadata = {
  title: "Esports Jobs Japan 🇯🇵 Gaming Careers in Tokyo",
  description: "🚀 Find esports jobs in Japan. Gaming careers at Sony, Nintendo, Capcom, and Japanese esports organisations. Tokyo gaming opportunities.",
  keywords: "esports jobs japan, gaming jobs tokyo, japanese esports careers, sony gaming jobs, capcom careers",
  alternates: { canonical: "https://mvp.actor/esports-jobs-japan" },
};

const majorCompanies = [
  { name: "Sony Interactive", location: "Tokyo", focus: "PlayStation, EVO acquisition" },
  { name: "Nintendo", location: "Kyoto", focus: "Smash Bros, Splatoon esports" },
  { name: "Capcom", location: "Osaka", focus: "Street Fighter, FGC" },
  { name: "Bandai Namco", location: "Tokyo", focus: "Tekken, Dragon Ball FighterZ" },
  { name: "ZETA DIVISION", location: "Tokyo", focus: "Major Japanese esports org" },
  { name: "DetonatioN Gaming", location: "Tokyo", focus: "Multi-game esports org" },
  { name: "Sengoku Gaming", location: "Tokyo", focus: "Valorant, LoL" },
  { name: "Crazy Raccoon", location: "Tokyo", focus: "Fortnite, content creators" },
];

const roleTypes = [
  "Game Developer", "Esports Producer", "Tournament Organiser", "Community Manager",
  "Localisation Specialist", "Marketing Manager", "Content Creator", "Shoutcaster",
  "Team Manager", "Event Coordinator", "Video Producer", "Business Development"
];

export default function EsportsJobsJapan() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 via-slate-950/80 to-white/10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-red-400">Japan</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">🇯🇵</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Esports Jobs Japan:{" "}
                <span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">Gaming&apos;s Birthplace</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Japan is the birthplace of competitive gaming and the fighting game community.
              Home to Sony, Nintendo, Capcom, and a unique esports culture, Japan offers
              opportunities at legendary publishers and growing esports organisations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-red-600 to-white text-black font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-jobs-seoul" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Korea Jobs
              </Link>
              <Link href="/esports-recruitment-agency" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700 hover:border-red-500/50">
                Recruitment Services
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Japanese Gaming Companies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {majorCompanies.map((company) => (
                <div key={company.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{company.name}</h3>
                  <p className="text-xs text-red-400">{company.location}</p>
                  <p className="text-sm text-slate-400 mt-1">{company.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Japanese Esports Landscape</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Japan&apos;s Unique Position</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Fighting Game Community (FGC) heartland</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Sony owns EVO - world&apos;s biggest FGC event</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Growing Valorant and LoL scenes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Unique mobile gaming market</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Working in Japan</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-white mt-1">•</span>
                    <span>Japanese language often required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white mt-1">•</span>
                    <span>Work visa sponsorship available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white mt-1">•</span>
                    <span>Unique work culture considerations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white mt-1">•</span>
                    <span>English roles at international companies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Types of Japanese Gaming Roles</h2>
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
            <h2 className="text-2xl font-bold text-white mb-6">Explore Asian Markets</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link href="/esports-jobs-seoul" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-2xl">🇰🇷</span>
                <span className="text-white font-medium ml-2">Korea</span>
              </Link>
              <Link href="/esports-jobs-singapore" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
                <span className="text-2xl">🇸🇬</span>
                <span className="text-white font-medium ml-2">Singapore</span>
              </Link>
              <Link href="/esports-jobs-australia" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
                <span className="text-2xl">🇦🇺</span>
                <span className="text-white font-medium ml-2">Australia</span>
              </Link>
              <Link href="/esports-jobs-usa" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-2xl">🇺🇸</span>
                <span className="text-white font-medium ml-2">USA</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-red-600/20 via-slate-900 to-white/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Japanese Gaming Job</h2>
            <p className="text-slate-300 mb-8">Browse gaming and esports opportunities in Japan.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-jobs-remote" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Remote Jobs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
