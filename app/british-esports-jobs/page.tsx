import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mvp.actor/british-esports-jobs",
      url: "https://mvp.actor/british-esports-jobs",
      name: "British Esports Jobs | Work at British Esports Association",
      description: "Find jobs at British Esports, the national body for esports in the UK. Careers in education, events, policy and esports development.",
      isPartOf: { "@id": "https://mvp.actor/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mvp.actor" },
        { "@type": "ListItem", position: 2, name: "Top Companies UK", item: "https://mvp.actor/top-esports-companies-uk" },
        { "@type": "ListItem", position: 3, name: "British Esports", item: "https://mvp.actor/british-esports-jobs" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does British Esports do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "British Esports is the national body for esports in the UK, established in 2016. It promotes esports, supports education initiatives, runs national championships, and advocates for the industry with government and stakeholders. The organisation works across schools, colleges, and the wider esports ecosystem to develop pathways and standards for UK esports."
          }
        },
        {
          "@type": "Question",
          name: "What types of roles are available at British Esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "British Esports hires across several areas: Education (developing and delivering esports programmes in schools/colleges), Events (organising national championships and community events), Policy & Advocacy (shaping esports policy and industry representation), Membership (supporting member organisations), Marketing & Communications (promoting esports initiatives), and Operations (organisational support). As a non-profit, the team is smaller but roles are impactful."
          }
        },
        {
          "@type": "Question",
          name: "How do I apply for jobs at British Esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Check the British Esports website for current vacancies. As a smaller organisation, roles don't open frequently but offer meaningful impact. Applications should demonstrate passion for UK esports development, relevant skills, and understanding of the educational and policy landscape. Volunteering at British Esports events or participating in their programmes can build connections and visibility."
          }
        },
        {
          "@type": "Question",
          name: "Are there volunteer opportunities at British Esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, British Esports offers volunteer opportunities, particularly around events and championships. Volunteers can help with tournament administration, event operations, and community programmes. This is an excellent way to gain experience, build industry connections, and demonstrate commitment to UK esports. Volunteer roles can sometimes lead to paid positions or valuable references."
          }
        },
        {
          "@type": "Question",
          name: "What are British Esports education initiatives?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "British Esports runs several education initiatives: BTEC qualifications in esports delivered at colleges nationwide, the British Esports Student Championships for schools and colleges, teacher training programmes for esports education, and curriculum resources for schools. They also accredit educational providers and work with universities on esports programmes. Education roles focus on developing and supporting these initiatives."
          }
        }
      ]
    }
  ]
};

// Target keyword: "british esports jobs"
export const metadata: Metadata = {
  title: "British Esports Jobs 🇬🇧 National Body Careers",
  description: "🎮 British Esports jobs - careers at the national body for esports. Education, events, policy & esports development roles.",
  keywords: "british esports jobs, british esports association careers",
  alternates: { canonical: "https://mvp.actor/british-esports-jobs" },
};

const areas = [
  { area: "Education", description: "Develop and deliver esports education programmes in schools and colleges." },
  { area: "Events", description: "Organise national esports championships and community events." },
  { area: "Policy & Advocacy", description: "Shape esports policy and represent the industry." },
  { area: "Membership", description: "Support member organisations and grow the esports community." },
  { area: "Marketing & Comms", description: "Promote esports and British Esports initiatives." },
  { area: "Operations", description: "Keep the organisation running smoothly." },
];

const facts = [
  { label: "Founded", value: "2016" },
  { label: "Type", value: "Non-Profit" },
  { label: "Focus", value: "UK Esports" },
  { label: "Programmes", value: "Education, Events, Policy" },
];

export default function BritishEsportsJobs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-red-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/top-esports-companies-uk" className="hover:text-white">Top Companies</Link>
              <span className="mx-2">/</span>
              <span className="text-blue-400">British Esports</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              British Esports Jobs:{" "}
              <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">Shape UK Esports</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              The British Esports Association is the national body for esports in the UK. Working in
              education, events, and policy, they shape the future of UK esports at grassroots and
              professional levels.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://britishesports.org/careers" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold rounded-xl inline-block">
                British Esports Careers
              </a>
              <Link href="/esports-jobs-uk" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                All Esports Jobs
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">About British Esports</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {facts.map((fact) => (
                <div key={fact.label} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
                  <div className="text-xl font-bold text-blue-400">{fact.value}</div>
                  <div className="text-sm text-slate-400">{fact.label}</div>
                </div>
              ))}
            </div>
            <p className="text-slate-300 max-w-3xl">
              British Esports supports esports at all levels—from school programmes to professional
              championships. They provide qualifications, run national competitions, and advocate
              for the esports industry in the UK.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Career Areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas.map((area) => (
                <div key={area.area} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-2">{area.area}</h3>
                  <p className="text-slate-400 text-sm">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-600/20 via-slate-900 to-red-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join British Esports</h2>
            <p className="text-slate-300 mb-8">Help shape the future of esports in the UK.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://britishesports.org/careers" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold rounded-xl">
                British Esports Careers
              </a>
              <Link href="/esports-lecturer-jobs" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                Esports Education Jobs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
