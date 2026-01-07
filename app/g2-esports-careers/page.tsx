import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://esportsjobs.quest/g2-esports-careers",
      url: "https://esportsjobs.quest/g2-esports-careers",
      name: "G2 Esports Careers & Jobs | Work at G2",
      description: "Find jobs at G2 Esports, Europe's most entertaining esports organisation. Careers in esports, content, marketing, and operations in Berlin.",
      isPartOf: { "@id": "https://esportsjobs.quest/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://esportsjobs.quest" },
        { "@type": "ListItem", position: 2, name: "Top Companies", item: "https://esportsjobs.quest/top-esports-companies-uk" },
        { "@type": "ListItem", position: 3, name: "G2 Esports", item: "https://esportsjobs.quest/g2-esports-careers" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is it like working at G2 Esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "G2 Esports is known for its bold, creative culture that values entertainment as much as competition. Founded by Carlos 'ocelote' Rodriguez, G2 has built a reputation for innovative content and a strong brand identity. The Berlin headquarters offers a dynamic environment where creativity meets competitive excellence."
          }
        },
        {
          "@type": "Question",
          name: "What roles are available at G2 Esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "G2 hires across Esports Performance (coaches, analysts, team managers, sports psychologists), Content & Creative (video producers, editors, social media managers, designers), Marketing & Brand (partnerships, events, community management), and Business Operations (finance, HR, legal, merchandise). Content roles are particularly prominent given G2's entertainment focus."
          }
        },
        {
          "@type": "Question",
          name: "Where is G2 Esports located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "G2 Esports is headquartered in Berlin, Germany. The organisation has become synonymous with European esports excellence. Some roles may offer remote work, while team-facing positions typically require presence in Berlin or at competition venues across Europe."
          }
        },
        {
          "@type": "Question",
          name: "How do I apply for a job at G2 Esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Check G2's official careers page for current openings. G2 values creativity and personality—show how you can contribute to both competitive success and content/brand growth. Demonstrating knowledge of G2's unique culture and content style will help your application stand out."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "G2 Esports Careers 🔴 Work at G2",
  description: "🎮 G2 Esports careers - jobs at Europe's most entertaining esports org. Coaching, content, marketing & operations roles in Berlin.",
  keywords: "g2 esports careers, g2 jobs, work at g2, g2 esports jobs, g2army",
  alternates: { canonical: "https://esportsjobs.quest/g2-esports-careers" },
};

const departments = [
  { name: "Esports Performance", roles: ["Coaches", "Analysts", "Team Managers", "Sports Psychologists"] },
  { name: "Content & Creative", roles: ["Video Producers", "Editors", "Social Media", "Designers"] },
  { name: "Marketing & Brand", roles: ["Partnerships", "Events", "Community", "PR"] },
  { name: "Business Operations", roles: ["Finance", "HR", "Legal", "Merchandise"] },
  { name: "Tech & Product", roles: ["Developers", "Data Engineers", "Product Managers"] },
];

const facts = [
  { label: "Founded", value: "2014" },
  { label: "Headquarters", value: "Berlin, Germany" },
  { label: "Employees", value: "100+" },
  { label: "Games", value: "LoL, Valorant, CS2, R6" },
  { label: "World Titles", value: "Multiple" },
  { label: "Social Following", value: "15M+" },
];

export default function G2EsportsCareers() {
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
              <Link href="/top-esports-companies-uk" className="hover:text-white">Top Companies</Link>
              <span className="mx-2">/</span>
              <span className="text-red-400">G2 Esports</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              G2 Esports Careers:{" "}
              <span className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">Join the #G2ARMY</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              G2 Esports is Europe&apos;s most iconic esports organisation, known for world-class competition
              and industry-leading content. Based in Berlin, G2 combines competitive excellence with
              entertainment to create one of esports&apos; most beloved brands.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://g2esports.com/careers" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold rounded-xl inline-block">
                G2 Esports Careers
              </a>
              <Link href="/esports-jobs" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                All Esports Jobs
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">G2 Esports at a Glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {facts.map((fact) => (
                <div key={fact.label} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
                  <div className="text-xl font-bold text-red-400">{fact.value}</div>
                  <div className="text-sm text-slate-400">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Departments at G2 Esports</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept) => (
                <div key={dept.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-3">{dept.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {dept.roles.map((role) => (
                      <span key={role} className="px-2 py-1 bg-red-600/20 text-red-400 text-xs rounded">{role}</span>
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
              <Link href="/cloud9-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <span className="text-white font-medium">Cloud9 Careers</span>
                <p className="text-sm text-slate-400 mt-1">Work at North America&apos;s top org</p>
              </Link>
              <Link href="/esports-coach-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                <span className="text-white font-medium">Esports Coach Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Coaching roles across all games</p>
              </Link>
              <Link href="/esports-marketing-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-pink-500/50 transition-colors">
                <span className="text-white font-medium">Esports Marketing Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Brand and content opportunities</p>
              </Link>
              <Link href="/esports-broadcaster-careers" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-colors">
                <span className="text-white font-medium">Esports Broadcaster Jobs</span>
                <p className="text-sm text-slate-400 mt-1">Casting and hosting roles</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-red-600/20 via-slate-900 to-rose-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Apply to G2 Esports</h2>
            <p className="text-slate-300 mb-8">Check G2&apos;s official careers page for current openings.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://g2esports.com/careers" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold rounded-xl">
                G2 Esports Careers
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
