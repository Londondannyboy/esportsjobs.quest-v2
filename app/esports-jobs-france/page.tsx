import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

export const metadata: Metadata = {
  title: "Esports Jobs France 🇫🇷 Gaming Careers in Paris",
  description: "🚀 Find esports jobs in France. Gaming careers at Ubisoft, Team Vitality, Karmine Corp. Paris esports opportunities.",
  keywords: "esports jobs france, gaming jobs paris, team vitality jobs, karmine corp careers, ubisoft esports jobs",
  alternates: { canonical: "https://mvp.actor/esports-jobs-france" },
};

const majorCompanies = [
  { name: "Ubisoft", location: "Paris/Montreuil", focus: "Game publisher, Rainbow Six esports" },
  { name: "Team Vitality", location: "Paris", focus: "Major European esports org" },
  { name: "Karmine Corp", location: "France", focus: "Rising French esports powerhouse" },
  { name: "GamersOrigin", location: "Paris", focus: "French esports org" },
  { name: "ZQSD Productions", location: "Paris", focus: "Esports broadcast production" },
  { name: "Webedia Gaming", location: "Paris", focus: "Gaming media, Millenium" },
];

const roleTypes = [
  "Esports Manager", "Broadcast Producer", "Content Creator", "Marketing Manager",
  "Community Manager", "Video Editor", "Shoutcaster", "Tournament Organiser",
  "Team Manager", "Social Media Manager", "Business Development", "Event Coordinator"
];

export default function EsportsJobsFrance() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-slate-950/80 to-red-600/30" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-jobs" className="hover:text-white">Esports Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-blue-400">France</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">🇫🇷</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Esports Jobs France:{" "}
                <span className="bg-gradient-to-r from-blue-400 via-white to-red-400 bg-clip-text text-transparent">Passion & Excellence</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              France has one of Europe&apos;s most passionate esports communities. Home to Team Vitality,
              the phenomenon of Karmine Corp, and Ubisoft, France offers exciting opportunities in
              competitive gaming and game development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold rounded-xl">
                Browse All Jobs
              </Link>
              <Link href="/esports-jobs-germany" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Germany Jobs
              </Link>
              <Link href="/esports-recruitment-agency" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700 hover:border-blue-500/50">
                Recruitment Services
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">French Gaming & Esports Companies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {majorCompanies.map((company) => (
                <div key={company.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h3 className="text-lg font-bold text-white">{company.name}</h3>
                  <p className="text-xs text-blue-400">{company.location}</p>
                  <p className="text-sm text-slate-400 mt-1">{company.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">French Esports Scene</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">What Makes France Unique</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Passionate fan culture (Karmine Corp phenomenon)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Strong League of Legends scene (LFL)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Ubisoft headquarters for Rainbow Six</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Growing government support for esports</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Language Considerations</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>French language skills valuable for local orgs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>English common at international companies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>French broadcast/content roles require French</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>EU citizens: No visa required</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Types of French Esports Roles</h2>
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
              <Link href="/esports-jobs-germany" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-colors">
                <span className="text-2xl">🇩🇪</span>
                <span className="text-white font-medium ml-2">Germany</span>
              </Link>
              <Link href="/esports-jobs-spain" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-red-500/50 transition-colors">
                <span className="text-2xl">🇪🇸</span>
                <span className="text-white font-medium ml-2">Spain</span>
              </Link>
              <Link href="/esports-jobs-uk" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-2xl">🇬🇧</span>
                <span className="text-white font-medium ml-2">UK</span>
              </Link>
              <Link href="/esports-jobs-sweden" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <span className="text-2xl">🇸🇪</span>
                <span className="text-white font-medium ml-2">Sweden</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-600/20 via-slate-900 to-red-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your French Esports Job</h2>
            <p className="text-slate-300 mb-8">Browse esports and gaming opportunities in France.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold rounded-xl">
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
