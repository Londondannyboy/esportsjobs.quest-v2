import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

export const metadata: Metadata = {
  title: "Esports Jobs Spain 🇪🇸 Gaming Careers in Madrid & Barcelona",
  description: "🚀 Find esports jobs in Spain. Gaming careers at MAD Lions, Giants Gaming. Madrid and Barcelona esports opportunities.",
  keywords: "esports jobs spain, gaming jobs madrid, esports jobs barcelona, mad lions careers, giants gaming jobs",
  alternates: { canonical: "https://esportsjobs.quest/esports-jobs-spain" },
};

const majorCompanies = [
  { name: "MAD Lions", location: "Madrid", focus: "LEC team, multi-game org" },
  { name: "Giants Gaming", location: "Málaga", focus: "Historic Spanish esports org" },
  { name: "Heretics", location: "Madrid", focus: "VCT EMEA team" },
  { name: "KOI", location: "Spain", focus: "Ibai's esports organisation" },
  { name: "LVP (Liga de Videojuegos)", location: "Barcelona", focus: "Spanish esports league operator" },
  { name: "Movistar Riders", location: "Madrid", focus: "Telefónica-backed esports org" },
];

const roleTypes = [
  "Esports Manager", "Content Creator", "Marketing Manager", "Community Manager",
  "Broadcast Producer", "Video Editor", "Shoutcaster", "Social Media Manager",
  "Team Manager", "Tournament Organiser", "Business Development", "Event Coordinator"
];

export default function EsportsJobsSpain() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511882150382-421056c89033?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 via-slate-950/80 to-yellow-500/30" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-red-400">Spain</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">🇪🇸</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Esports Jobs Spain:{" "}
                <span className="bg-gradient-to-r from-red-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">La Pasión del Gaming</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Spain has a thriving esports scene with passionate fans and growing organisations.
              From MAD Lions in the LEC to KOI&apos;s phenomenon driven by Ibai, Spanish esports
              combines competitive excellence with entertainment culture.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-red-600 to-yellow-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-jobs-france" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                France Jobs
              </Link>
              <Link href="/esports-recruitment-agency" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700 hover:border-red-500/50">
                Recruitment Services
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Spanish Esports Organisations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            <h2 className="text-3xl font-bold text-white mb-8">The Spanish Esports Scene</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">What Makes Spain Unique</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Strong content creator culture (Ibai, TheGrefg)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>LVP - Professional Spanish league structure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>MAD Lions LEC success story</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✓</span>
                    <span>Growing investment from telecoms (Movistar)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Key Cities</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">📍</span>
                    <span><strong>Madrid</strong> - MAD Lions, Heretics, Movistar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">📍</span>
                    <span><strong>Barcelona</strong> - LVP headquarters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">📍</span>
                    <span><strong>Málaga</strong> - Giants Gaming</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">📍</span>
                    <span>Spanish language skills important for local roles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Types of Spanish Esports Roles</h2>
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
            <h2 className="text-2xl font-bold text-white mb-6">Explore Other European Markets</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link href="/esports-jobs-france" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-2xl">🇫🇷</span>
                <span className="text-white font-medium ml-2">France</span>
              </Link>
              <Link href="/esports-jobs-germany" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-colors">
                <span className="text-2xl">🇩🇪</span>
                <span className="text-white font-medium ml-2">Germany</span>
              </Link>
              <Link href="/esports-jobs-uk" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-2xl">🇬🇧</span>
                <span className="text-white font-medium ml-2">UK</span>
              </Link>
              <Link href="/esports-jobs-brazil" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
                <span className="text-2xl">🇧🇷</span>
                <span className="text-white font-medium ml-2">Brazil</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-red-600/20 via-slate-900 to-yellow-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Spanish Esports Job</h2>
            <p className="text-slate-300 mb-8">Browse esports and gaming opportunities in Spain.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-red-600 to-yellow-600 text-white font-semibold rounded-xl">
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
