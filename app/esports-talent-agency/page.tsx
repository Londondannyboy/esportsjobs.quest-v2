import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";
import { MUX_VIDEOS, getMuxStreamUrl, getMuxThumbnailUrl } from "../../lib/mux-config";

// Target keywords: "esports talent agency", "gaming talent agency", "esports talent management"
export const metadata: Metadata = {
  title: "Esports Talent Agency Guide | Player & Creator Representation",
  description: "Complete guide to esports talent agencies. Learn how talent agencies represent pro players, streamers & creators. Plus recruitment services for gaming careers.",
  keywords: "esports talent agency, gaming talent agency, esports talent management, pro player representation, esports agents",
  openGraph: {
    title: "Esports Talent Agency Guide | Player & Creator Representation",
    description: "Complete guide to esports talent agencies. Learn how talent agencies work for pro players, streamers & creators.",
    type: "website",
    url: "https://mvp.actor/esports-talent-agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esports Talent Agency Guide | Player & Creator Representation",
    description: "Complete guide to esports talent agencies for pro players, streamers & creators.",
  },
  alternates: {
    canonical: "https://mvp.actor/esports-talent-agency",
  },
};

const talentAgencyServices = [
  {
    service: "Contract Negotiation",
    description: "Talent agencies negotiate player contracts with esports organisations, ensuring fair salaries, bonuses, and terms.",
    icon: "📝",
  },
  {
    service: "Sponsorship Deals",
    description: "Securing brand partnerships and sponsorships for players and creators, from gaming peripherals to lifestyle brands.",
    icon: "🤝",
  },
  {
    service: "Career Management",
    description: "Long-term career planning, team placement, and strategic moves to maximise earning potential and longevity.",
    icon: "📈",
  },
  {
    service: "Brand Building",
    description: "Developing personal brands, social media presence, and public image for talent beyond just competitive play.",
    icon: "⭐",
  },
  {
    service: "Legal Protection",
    description: "Contract review, intellectual property protection, and legal support for complex esports agreements.",
    icon: "⚖️",
  },
  {
    service: "Media & PR",
    description: "Managing media appearances, interviews, and public relations to build positive profiles.",
    icon: "📺",
  },
];

const topTalentAgencies = [
  {
    name: "Loaded",
    focus: "Pro players and content creators across all major titles",
    notable: "Represent some of the biggest names in streaming and competitive gaming",
  },
  {
    name: "Evolved",
    focus: "Gaming talent management and influencer representation",
    notable: "Strong presence in content creation and streaming space",
  },
  {
    name: "UTA (United Talent Agency)",
    focus: "Traditional entertainment agency with esports division",
    notable: "Hollywood-level representation for top esports talent",
  },
  {
    name: "CAA (Creative Artists Agency)",
    focus: "Major entertainment agency representing esports professionals",
    notable: "Bring traditional sports/entertainment expertise to gaming",
  },
  {
    name: "WME (William Morris Endeavor)",
    focus: "Global talent agency with gaming and esports clients",
    notable: "Connected to major media and entertainment opportunities",
  },
];

const talentVsRecruitment = [
  {
    aspect: "Who They Represent",
    talentAgency: "Pro players, streamers, casters, content creators",
    recruitmentAgency: "Job-seeking professionals (coaches, managers, marketers, etc.)",
  },
  {
    aspect: "Revenue Model",
    talentAgency: "10-20% commission on deals they negotiate",
    recruitmentAgency: "Fee paid by employer on successful placement",
  },
  {
    aspect: "Services",
    talentAgency: "Contract negotiation, sponsorships, brand deals, career management",
    recruitmentAgency: "Job matching, CV support, interview prep, salary negotiation",
  },
  {
    aspect: "Relationship Duration",
    talentAgency: "Long-term (years) exclusive representation",
    recruitmentAgency: "Project-based until placement is made",
  },
  {
    aspect: "Client Payment",
    talentAgency: "Talent pays commission from earnings",
    recruitmentAgency: "Candidates never pay (employer covers fees)",
  },
];

const whenYouNeed = [
  {
    title: "You Need a TALENT Agency If...",
    items: [
      "You're a pro player seeking team contracts",
      "You're a streamer/creator wanting sponsorship deals",
      "You need help negotiating tournament appearances",
      "You want someone to manage your brand partnerships",
      "You're a broadcast talent seeking representation",
    ],
    color: "purple",
  },
  {
    title: "You Need a RECRUITMENT Agency If...",
    items: [
      "You're looking for a job at an esports company",
      "You want to work in esports operations, marketing, or management",
      "You're an employer needing to hire esports staff",
      "You want career guidance for non-playing roles",
      "You're transitioning into esports from another industry",
    ],
    color: "cyan",
  },
];

const faqs = [
  {
    question: "What is an esports talent agency?",
    answer: "An esports talent agency represents professional players, content creators, streamers, and broadcast talent. They negotiate contracts with teams, secure sponsorship deals, manage careers, and handle business affairs so talent can focus on competing and creating. Think of them like sports agents but for esports—they take a commission (typically 10-20%) of deals they secure in exchange for their services and industry connections.",
  },
  {
    question: "How is a talent agency different from a recruitment agency?",
    answer: "Talent agencies represent individual players/creators and take commission from their earnings. They negotiate team contracts and sponsorships. Recruitment agencies fill job vacancies at companies—matching candidates with employers. Recruitment is free for candidates (employers pay the fee). You'd use a talent agency if you're a pro player; a recruitment agency if you're seeking a job in esports operations, marketing, etc.",
  },
  {
    question: "Do I need an agent to go pro in esports?",
    answer: "Not necessarily at the start. Many players secure their first team contracts directly. However, as you progress to tier-1 organisations with complex contracts, salary negotiations, and sponsorship opportunities, having representation becomes valuable. Agents understand market rates, contract pitfalls, and have relationships that can open doors. Most top-tier pros have representation for good reason.",
  },
  {
    question: "How do esports talent agents get paid?",
    answer: "Talent agents typically take 10-20% commission on deals they negotiate. If they secure you a £100,000 team contract, they might take £10,000-£20,000. For sponsorship deals, the commission might be higher (15-25%). Legitimate agents only get paid when you get paid—be wary of anyone asking for upfront fees. The commission is their incentive to negotiate the best deals possible.",
  },
  {
    question: "What should I look for in an esports talent agency?",
    answer: "Key factors: Track record (who have they represented? what deals have they closed?), Industry connections (relationships with teams, brands, tournament operators), Expertise in your game/region, Contract terms (commission rates, exclusivity, termination clauses), Communication style (how responsive and transparent are they?), and Additional services (do they offer brand building, content support, legal help?). Always speak with current/former clients before signing.",
  },
  {
    question: "Can recruitment agencies help with esports careers if I'm not a pro player?",
    answer: "Absolutely! That's exactly what we do. Most esports careers are non-playing roles: coaches, analysts, managers, marketers, event staff, producers, community managers, and more. Recruitment agencies like ours help you find these opportunities, prepare for interviews, and negotiate salaries. You don't need to be a pro to build an amazing career in esports.",
  },
];

export default function EsportsTalentAgency() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Esports Talent Agency Guide",
        description: "Complete guide to esports talent agencies, player representation, and how they differ from recruitment agencies.",
        url: "https://mvp.actor/esports-talent-agency",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />

      <main>
        {/* Hero Section with Video Background */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster={getMuxThumbnailUrl(MUX_VIDEOS.ESPORTS_1, 3)}
              className="w-full h-full object-cover"
            >
              <source src={getMuxStreamUrl(MUX_VIDEOS.ESPORTS_1)} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/esports-agency" className="hover:text-white transition-colors">Esports Agency</Link>
              <span className="mx-2">/</span>
              <span className="text-purple-400">Talent Agency</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Esports Talent Agency
                </span>
                <br />Guide & Resources
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Everything you need to know about <strong className="text-white">esports talent agencies</strong>—how they
                represent pro players, streamers, and creators. Plus, learn how our recruitment services help with
                non-playing esports careers.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="#talent-vs-recruitment"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:opacity-90 transition-all"
                >
                  Talent vs Recruitment
                </Link>
                <Link
                  href="/esports-careers"
                  className="px-8 py-4 bg-slate-800/80 text-white font-semibold rounded-xl border border-slate-600 hover:border-purple-500 transition-all backdrop-blur-sm"
                >
                  Explore Esports Careers
                </Link>
              </div>

              <p className="text-slate-400 text-sm">
                <strong className="text-purple-400">Note:</strong> We&apos;re a recruitment agency, not a talent agency.
                We help with jobs, not player contracts. This guide explains the difference.
              </p>
            </div>
          </div>
        </section>

        {/* What Talent Agencies Do */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What <span className="text-purple-400">Esports Talent Agencies</span> Do
            </h2>
            <p className="text-slate-400 mb-12 max-w-3xl">
              Talent agencies represent players and creators, handling the business side so they can focus on competing and creating.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {talentAgencyServices.map((service) => (
                <div key={service.service} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.service}</h3>
                  <p className="text-slate-400 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Talent vs Recruitment Comparison */}
        <section id="talent-vs-recruitment" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Talent Agency <span className="text-cyan-400">vs</span> Recruitment Agency
            </h2>
            <p className="text-slate-400 mb-12 max-w-3xl">
              These serve different purposes. Here&apos;s a clear comparison to help you understand which you need.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-slate-800/50 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-700/50">
                    <th className="text-left p-4 text-slate-300 font-semibold">Aspect</th>
                    <th className="text-left p-4 text-purple-400 font-semibold">Talent Agency</th>
                    <th className="text-left p-4 text-cyan-400 font-semibold">Recruitment Agency (Us)</th>
                  </tr>
                </thead>
                <tbody>
                  {talentVsRecruitment.map((row, index) => (
                    <tr key={row.aspect} className={index % 2 === 0 ? "bg-slate-800/30" : ""}>
                      <td className="p-4 text-white font-medium">{row.aspect}</td>
                      <td className="p-4 text-slate-300">{row.talentAgency}</td>
                      <td className="p-4 text-slate-300">{row.recruitmentAgency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* When You Need Each */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Which Do You Need?</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {whenYouNeed.map((column) => (
                <div
                  key={column.title}
                  className={`bg-slate-800/50 rounded-2xl p-8 border ${
                    column.color === "purple" ? "border-purple-500/50" : "border-cyan-500/50"
                  }`}
                >
                  <h3 className={`text-xl font-bold mb-6 ${
                    column.color === "purple" ? "text-purple-400" : "text-cyan-400"
                  }`}>
                    {column.title}
                  </h3>
                  <ul className="space-y-3">
                    {column.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-300">
                        <span className={column.color === "purple" ? "text-purple-400" : "text-cyan-400"}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {column.color === "cyan" && (
                    <Link
                      href="/contact"
                      className="inline-block mt-6 px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
                    >
                      That&apos;s Me — Get Help →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notable Talent Agencies */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Notable <span className="text-purple-400">Esports Talent Agencies</span>
            </h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              If you&apos;re a pro player or top creator looking for representation, these are some established agencies in the space.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topTalentAgencies.map((agency) => (
                <div key={agency.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-2">{agency.name}</h3>
                  <p className="text-slate-400 text-sm mb-2">{agency.focus}</p>
                  <p className="text-purple-400 text-sm">{agency.notable}</p>
                </div>
              ))}
            </div>

            <p className="text-slate-500 text-sm mt-8 text-center">
              Note: We are not affiliated with these agencies. This is informational only.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Esports Talent Agency FAQs</h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-800/80 transition-colors">
                    <span className="font-bold text-white pr-4">{faq.question}</span>
                    <span className="text-purple-400 text-2xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-400">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - We're a Recruitment Agency */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 via-slate-900 to-purple-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Looking for an Esports Job (Not Player Representation)?
            </h2>
            <p className="text-slate-300 mb-8">
              We&apos;re an esports recruitment agency—we help people find jobs in gaming and help companies hire talent.
              If you want to work in esports (but not as a pro player), we can help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/esports-jobs"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:opacity-90 transition-all"
              >
                Browse Esports Jobs
              </Link>
              <Link
                href="/esports-recruitment-agency"
                className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-cyan-500 transition-all"
              >
                Our Recruitment Services
              </Link>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Explore More</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link href="/esports-agency" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-purple-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Esports Agency Overview</h3>
                <p className="text-slate-400 text-sm">All types of esports agencies explained.</p>
              </Link>
              <Link href="/esports-careers" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-purple-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Career Pathways</h3>
                <p className="text-slate-400 text-sm">Explore non-playing esports careers.</p>
              </Link>
              <Link href="/esports-broadcaster-careers" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-purple-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Broadcaster Careers</h3>
                <p className="text-slate-400 text-sm">Casters, hosts, and on-air talent.</p>
              </Link>
              <Link href="/how-to-get-into-esports" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-purple-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">How to Get Into Esports</h3>
                <p className="text-slate-400 text-sm">Start your esports career journey.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
