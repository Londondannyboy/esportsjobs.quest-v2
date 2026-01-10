import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";
import { RealJobsSection } from "../components/RealJobsSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mvp.actor/esports-marketing-careers",
      url: "https://mvp.actor/esports-marketing-careers",
      name: "Esports Marketing Careers | Marketing Jobs Guide",
      description: "Build your esports marketing career. Guide to marketing roles, salaries, and opportunities in UK esports.",
      isPartOf: { "@id": "https://mvp.actor/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mvp.actor" },
        { "@type": "ListItem", position: 2, name: "Esports Careers", item: "https://mvp.actor/esports-careers" },
        { "@type": "ListItem", position: 3, name: "Marketing", item: "https://mvp.actor/esports-marketing-careers" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What marketing roles exist in esports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Esports marketing roles include: Marketing Coordinator (£24-32k, campaign support), Social Media Manager (£28-40k, platform management), Marketing Manager (£38-55k, strategy and campaigns), Partnerships Manager (£40-65k, sponsor relations), Head of Marketing (£55-85k, department leadership), and CMO (£80-150k+, executive marketing). Roles span brand marketing, performance marketing, content marketing, and influencer relations."
          }
        },
        {
          "@type": "Question",
          name: "How is esports marketing different from traditional marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Esports marketing is highly community-driven, digital-first, and authenticity-focused. Unlike traditional marketing, esports audiences are skeptical of corporate messaging and value genuine engagement. Successful esports marketing requires deep gaming culture knowledge, understanding of platforms like Discord and Twitch, ability to work with content creators, and comfort with fast-paced, real-time marketing around match days and events."
          }
        },
        {
          "@type": "Question",
          name: "What skills do I need for esports marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Essential skills include: digital marketing expertise, social media platform mastery (Twitter, TikTok, Discord), content creation ability, analytics and data interpretation, brand strategy understanding, sponsorship activation experience, gaming culture knowledge, and community management. Technical skills in tools like Sprout Social, Google Analytics, and content creation software are valuable."
          }
        },
        {
          "@type": "Question",
          name: "What is the career path in esports marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typical progression: Marketing Coordinator/Assistant (1-2 years) → Marketing Manager (2-4 years) → Senior Marketing Manager (3-5 years) → Head of Marketing (5-8 years) → CMO/VP Marketing (8+ years). Alternatively, specialise in partnerships, content, or community management. Many enter from traditional marketing or gaming community roles. Building a personal brand and portfolio accelerates progression."
          }
        },
        {
          "@type": "Question",
          name: "What salaries can I expect in esports marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UK esports marketing salaries: Marketing Coordinator £24,000-£32,000, Social Media Manager £28,000-£40,000, Marketing Manager £38,000-£55,000, Partnerships Manager £40,000-£65,000, Head of Marketing £55,000-£85,000, CMO £80,000-£150,000+. Salaries at esports organisations may be 10-20% below equivalent roles at larger companies, but offer unique industry experience and faster career progression."
          }
        }
      ]
    }
  ]
};

// Target keyword: "esports marketing jobs"
export const metadata: Metadata = {
  title: "Esports Marketing Jobs 📢 Gaming Marketing",
  description: "🚀 Esports marketing jobs at gaming organisations. Roles from coordinator to CMO, career paths, and how to build your esports marketing career.",
  keywords: "esports marketing jobs, gaming marketing jobs",
  alternates: { canonical: "https://mvp.actor/esports-marketing-careers" },
};

const roles = [
  { title: "Marketing Coordinator", salary: "£24,000 - £32,000", focus: "Campaign support, content coordination" },
  { title: "Social Media Manager", salary: "£28,000 - £40,000", focus: "Platform management, community engagement" },
  { title: "Marketing Manager", salary: "£38,000 - £55,000", focus: "Strategy, campaigns, team leadership" },
  { title: "Partnerships Manager", salary: "£40,000 - £65,000", focus: "Sponsor relations, deal negotiation" },
  { title: "Head of Marketing", salary: "£55,000 - £85,000", focus: "Department leadership, brand strategy" },
  { title: "CMO", salary: "£80,000 - £150,000+", focus: "Executive marketing leadership" },
];

const skills = ["Digital marketing", "Social media expertise", "Content creation", "Analytics", "Brand strategy", "Gaming culture knowledge", "Campaign management", "Sponsorship activation"];

export default function EsportsMarketingCareers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 via-transparent to-violet-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-careers" className="hover:text-white">Esports Careers</Link>
              <span className="mx-2">/</span>
              <span className="text-pink-400">Marketing</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esports Marketing Careers:{" "}
              <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">Build Gaming Brands</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              Marketing in esports means building brands, engaging passionate communities, and driving growth
              for gaming organisations. Discover marketing career opportunities in UK esports.
            </p>
            <Link href="/esports-jobs-uk" className="px-8 py-4 bg-gradient-to-r from-pink-600 to-violet-600 text-white font-semibold rounded-xl inline-block">
              Browse Marketing Jobs
            </Link>
          </div>
        </section>

        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Marketing Roles & Salaries</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles.map((role) => (
                <div key={role.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white">{role.title}</h3>
                    <span className="text-emerald-400 text-sm">{role.salary}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{role.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Key Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div key={skill} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
                  <span className="text-slate-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Marketing Jobs */}
        <RealJobsSection
          title="Current Esports Marketing Jobs"
          subtitle="Real marketing positions we've aggregated from public sources"
          filter={{ category: "marketing" }}
          limit={6}
          showViewAll={true}
        />

        <section className="py-20 bg-gradient-to-r from-pink-600/20 via-slate-900 to-violet-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Launch Your Marketing Career</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/esports-jobs" className="px-8 py-4 bg-gradient-to-r from-pink-600 to-violet-600 text-white font-semibold rounded-xl">All Jobs</Link>
              <Link href="/esports-careers" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">All Careers</Link>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
