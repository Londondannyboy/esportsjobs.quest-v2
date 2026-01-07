import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://esportsjobs.quest/esports-lecturer-jobs",
      url: "https://esportsjobs.quest/esports-lecturer-jobs",
      name: "Esports Lecturer Jobs UK | Teaching Careers 2025",
      description: "Find esports lecturer jobs at UK universities and colleges. Teach the next generation of esports professionals.",
      isPartOf: { "@id": "https://esportsjobs.quest/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://esportsjobs.quest" },
        { "@type": "ListItem", position: 2, name: "Esports Careers", item: "https://esportsjobs.quest/esports-careers" },
        { "@type": "ListItem", position: 3, name: "Lecturer Jobs", item: "https://esportsjobs.quest/esports-lecturer-jobs" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What qualifications do I need to be an esports lecturer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Requirements vary by institution. University lecturer roles typically require a relevant degree (games, business, media, sports science), ideally a master's or PhD for senior positions, plus a PGCert in Higher Education. Industry experience is highly valued. College/FE roles may accept strong industry experience with relevant qualifications. Associate lecturer positions have lower barriers, accepting industry professionals with demonstrated expertise."
          }
        },
        {
          "@type": "Question",
          name: "What is the difference between university and college esports teaching roles?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "University roles focus on degree-level teaching with research expectations, academic publications, and higher salary ranges (£35,000-£65,000). College/FE positions teach BTEC, diploma, and vocational courses with more practical, industry-focused content. College roles typically have lower academic requirements but value industry expertise highly. Teaching hours are generally higher in FE than universities."
          }
        },
        {
          "@type": "Question",
          name: "What is the salary range for esports lecturers in the UK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UK esports lecturer salaries: Associate Lecturer £28,000-£35,000, Lecturer £35,000-£45,000, Senior Lecturer £45,000-£55,000, Programme Lead £50,000-£65,000. Industry trainers at private providers earn £30,000-£50,000. Salaries follow academic pay scales which are publicly available. Additional income is possible through consultancy, speaking, and industry partnerships."
          }
        },
        {
          "@type": "Question",
          name: "How important is industry experience for esports teaching?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Industry experience is crucial and often valued equally with academic credentials. Students expect lecturers with real-world esports experience—coaching, organisation management, event production, or content creation. Current industry connections help with guest speakers, placements, and keeping curriculum relevant. Many institutions specifically recruit industry professionals transitioning into education."
          }
        },
        {
          "@type": "Question",
          name: "Can I balance esports teaching with industry work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, many esports educators maintain industry involvement alongside teaching. Associate lecturer and part-time positions offer flexibility. Institutions often encourage industry engagement to maintain currency. Some lecturers coach amateur teams, consult for organisations, or create content. This dual involvement benefits students and keeps teaching relevant, though workload management is important."
          }
        }
      ]
    }
  ]
};

// Target keyword: "esports lecturer jobs"
export const metadata: Metadata = {
  title: "Esports Lecturer Jobs 📚 Teaching Careers",
  description: "🎓 Esports lecturer jobs at universities and colleges. Teach the next generation of esports professionals. Academic gaming careers.",
  keywords: "esports lecturer jobs, esports teaching jobs",
  openGraph: {
    title: "Esports Lecturer Jobs 📚 Teaching Careers",
    description: "🎓 Esports lecturer jobs at universities and colleges.",
    type: "website",
    url: "https://esportsjobs.quest/esports-lecturer-jobs",
  },
  alternates: {
    canonical: "https://esportsjobs.quest/esports-lecturer-jobs",
  },
};

const universities = [
  { name: "Staffordshire University", programme: "BA Esports", notes: "One of the first UK esports degrees" },
  { name: "University of Chichester", programme: "BSc Esports", notes: "Strong industry connections" },
  { name: "UCFB", programme: "Esports Management", notes: "Business-focused esports education" },
  { name: "University of Roehampton", programme: "Esports courses", notes: "Growing esports provision" },
  { name: "Solent University", programme: "Esports modules", notes: "Part of games programmes" },
  { name: "Various FE Colleges", programme: "BTEC/Diploma", notes: "Growing provision across UK" },
];

const roles = [
  { title: "Associate Lecturer", salary: "£28,000 - £35,000", requirements: "Industry experience, relevant degree preferred" },
  { title: "Lecturer", salary: "£35,000 - £45,000", requirements: "Teaching experience, industry knowledge, often PGCert" },
  { title: "Senior Lecturer", salary: "£45,000 - £55,000", requirements: "Significant teaching record, research/publications" },
  { title: "Programme Lead", salary: "£50,000 - £65,000", requirements: "Academic leadership, curriculum development" },
  { title: "Industry Trainer", salary: "£30,000 - £50,000", requirements: "Practical industry expertise, training skills" },
];

const skills = [
  "Deep esports industry knowledge and experience",
  "Strong communication and presentation skills",
  "Understanding of competitive gaming and business",
  "Curriculum development capability",
  "Student mentorship and support",
  "Research interests in esports (for university roles)",
];

export default function EsportsLecturerJobs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-transparent to-violet-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-careers" className="hover:text-white">Esports Careers</Link>
              <span className="mx-2">/</span>
              <span className="text-emerald-400">Lecturer Jobs</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esports Lecturer Jobs UK:{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">
                Shape the Future
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              As esports education grows across UK universities and colleges, opportunities for
              lecturers and educators are expanding. Teach the next generation of esports professionals.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div className="text-2xl font-bold text-emerald-400">20+</div>
                <div className="text-sm text-slate-400">UK Institutions</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div className="text-2xl font-bold text-violet-400">£35-55k</div>
                <div className="text-sm text-slate-400">Lecturer Salary</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div className="text-2xl font-bold text-cyan-400">Growing</div>
                <div className="text-sm text-slate-400">Sector</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div className="text-2xl font-bold text-amber-400">Impact</div>
                <div className="text-sm text-slate-400">Industry Shaping</div>
              </div>
            </div>

            <Link href="/#jobs" className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-violet-600 text-white font-semibold rounded-xl inline-block">
              Browse Lecturer Jobs
            </Link>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Academic Career Progression</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles.map((role) => (
                <div key={role.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white">{role.title}</h3>
                    <span className="text-emerald-400 text-sm">{role.salary}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{role.requirements}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">UK Institutions with Esports Programmes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {universities.map((uni) => (
                <div key={uni.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-1">{uni.name}</h3>
                  <p className="text-emerald-400 text-sm mb-2">{uni.programme}</p>
                  <p className="text-slate-400 text-xs">{uni.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Skills for Esports Education</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div key={skill} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span className="text-slate-300 text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-emerald-600/20 via-slate-900 to-violet-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Shape Esports Education</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#jobs" className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-violet-600 text-white font-semibold rounded-xl">
                View Lecturer Jobs
              </Link>
              <Link href="/esports-careers" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                All Career Paths
              </Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
