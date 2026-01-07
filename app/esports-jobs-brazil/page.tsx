import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

export const metadata: Metadata = {
  title: "Esports Jobs Brazil 🇧🇷 Gaming Careers in São Paulo",
  description: "🚀 Find esports jobs in Brazil. Gaming careers at LOUD, FURIA, MIBR. São Paulo esports opportunities in Latin America's biggest market.",
  keywords: "esports jobs brazil, gaming jobs são paulo, loud esports careers, furia jobs, brazilian esports jobs, cblol jobs",
  alternates: { canonical: "https://esportsjobs.quest/esports-jobs-brazil" },
};

const majorCompanies = [
  { name: "LOUD", location: "São Paulo", focus: "Massive Brazilian org, Valorant champions" },
  { name: "FURIA", location: "São Paulo", focus: "CS2, Valorant, multi-game" },
  { name: "MIBR", location: "São Paulo", focus: "Legendary CS org, multi-game" },
  { name: "paiN Gaming", location: "São Paulo", focus: "Historic Brazilian org" },
  { name: "RED Canids", location: "São Paulo", focus: "CBLOL team" },
  { name: "INTZ", location: "São Paulo", focus: "Multi-game esports org" },
  { name: "Riot Games Brazil", location: "São Paulo", focus: "CBLOL, Valorant Challengers" },
  { name: "Gamers Club", location: "Brazil", focus: "CS2 platform, matchmaking" },
];

const roleTypes = [
  "Esports Manager", "Content Creator", "Marketing Manager", "Community Manager",
  "Broadcast Producer", "Shoutcaster", "Video Editor", "Social Media Manager",
  "Team Manager", "Tournament Organiser", "Business Development", "Analyst"
];

export default function EsportsJobsBrazil() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 via-slate-950/80 to-blue-600/30" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-green-400">Brazil</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">🇧🇷</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Esports Jobs Brazil:{" "}
                <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent">Latin America&apos;s Giant</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Brazil is Latin America&apos;s largest esports market with some of the world&apos;s most
              passionate fans. Home to LOUD (Valorant world champions), FURIA, and a legendary CS scene,
              Brazil offers unique opportunities in a rapidly growing market.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-green-600 to-yellow-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-jobs-usa" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                USA Jobs
              </Link>
              <Link href="/esports-recruitment-agency" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700 hover:border-green-500/50">
                Recruitment Services
              </Link>
            </div>
          </div>
        </section>

        {/* Why Brazil */}
        <section className="py-12 bg-gradient-to-r from-green-900/30 via-slate-900 to-yellow-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-black text-green-400 mb-1">LOUD</div>
                <div className="text-slate-400 text-sm">Valorant World Champions</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-green-400 mb-1">CBLOL</div>
                <div className="text-slate-400 text-sm">Top LoL league</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-green-400 mb-1">CS Legacy</div>
                <div className="text-slate-400 text-sm">Historic scene</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-green-400 mb-1">200M+</div>
                <div className="text-slate-400 text-sm">Population</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Brazilian Esports Organisations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {majorCompanies.map((company) => (
                <div key={company.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{company.name}</h3>
                  <p className="text-xs text-green-400">{company.location}</p>
                  <p className="text-sm text-slate-400 mt-1">{company.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">The Brazilian Esports Scene</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">What Makes Brazil Unique</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Most passionate esports fanbase in the world</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>LOUD: Valorant champions with massive following</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Strong CS2 heritage (FURIA, MIBR)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Massive content creator ecosystem</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Working in Brazil</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Portuguese language essential for local roles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>São Paulo is the esports hub</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Lower salaries but lower cost of living</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Growing investment and professionalisation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Types of Brazilian Esports Roles</h2>
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
            <h2 className="text-2xl font-bold text-white mb-6">Explore Other Americas Markets</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link href="/esports-jobs-usa" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-2xl">🇺🇸</span>
                <span className="text-white font-medium ml-2">USA</span>
              </Link>
              <Link href="/esports-jobs-canada" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
                <span className="text-2xl">🇨🇦</span>
                <span className="text-white font-medium ml-2">Canada</span>
              </Link>
              <Link href="/esports-jobs-los-angeles" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                <span className="text-white font-medium">Los Angeles</span>
                <p className="text-slate-400 text-xs">NA esports capital</p>
              </Link>
              <Link href="/esports-jobs-spain" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
                <span className="text-2xl">🇪🇸</span>
                <span className="text-white font-medium ml-2">Spain</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-green-600/20 via-slate-900 to-yellow-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Brazilian Esports Job</h2>
            <p className="text-slate-300 mb-8">Browse esports opportunities in Latin America&apos;s biggest market.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-green-600 to-yellow-600 text-white font-semibold rounded-xl">
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
