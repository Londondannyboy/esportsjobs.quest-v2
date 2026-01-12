import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";
import { MUX_VIDEOS, getMuxStreamUrl, getMuxThumbnailUrl } from "../../lib/mux-config";

// Target keywords: "esports recruiting", "esport recruiting", "recruiting esports", "esports teams recruiting"
export const metadata: Metadata = {
  title: "Esports Recruiting | Find Gaming Talent & Jobs",
  description: "Expert esports recruiting services connecting gaming talent with top organisations. Whether you're hiring or job hunting, our specialist recruiters can help.",
  keywords: "esports recruiting, esport recruiting, recruiting esports, esports teams recruiting, gaming recruiting, esports headhunters",
  openGraph: {
    title: "Esports Recruiting | Find Gaming Talent & Jobs",
    description: "Expert esports recruiting services connecting gaming talent with top organisations.",
    type: "website",
    url: "https://mvp.actor/esports-recruiting",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esports Recruiting | Find Gaming Talent & Jobs",
    description: "Expert esports recruiting connecting gaming talent with top organisations.",
  },
  alternates: {
    canonical: "https://mvp.actor/esports-recruiting",
  },
};

const recruitingServices = [
  {
    title: "For Employers",
    subtitle: "Esports Teams Recruiting Talent",
    description: "Need to build your roster or hire operations staff? Our esports recruiting specialists help you find the right people.",
    benefits: [
      "Access to passive candidates not on job boards",
      "Pre-screened talent with verified experience",
      "Cultural fit assessment for gaming organisations",
      "Salary benchmarking and market insights",
      "Fast turnaround on shortlists",
    ],
    cta: "Hire Esports Talent",
    ctaLink: "/contact",
    icon: "🏢",
  },
  {
    title: "For Job Seekers",
    subtitle: "Get Recruited for Esports Jobs",
    description: "Looking to break into esports or advance your career? Let our recruiters connect you with opportunities.",
    benefits: [
      "Access to unadvertised positions",
      "CV and interview preparation",
      "Salary negotiation support",
      "Career guidance from industry experts",
      "100% free for candidates",
    ],
    cta: "Browse Esports Jobs",
    ctaLink: "/esports-jobs",
    icon: "👤",
  },
];

const rolesWeRecruit = [
  { category: "Competitive", roles: ["Pro Players", "Coaches", "Analysts", "Team Managers", "Performance Staff"] },
  { category: "Content", roles: ["Content Creators", "Video Producers", "Social Media Managers", "Graphic Designers", "Editors"] },
  { category: "Broadcast", roles: ["Casters", "Hosts", "Observers", "Production Crew", "Technical Directors"] },
  { category: "Operations", roles: ["General Managers", "Operations Directors", "HR Managers", "Finance", "Legal"] },
  { category: "Marketing", roles: ["Marketing Directors", "Partnership Managers", "Brand Managers", "Event Marketers", "PR Specialists"] },
  { category: "Events", roles: ["Tournament Directors", "Event Managers", "Stage Managers", "Logistics", "Venue Operations"] },
];

const recruitingProcess = [
  {
    step: 1,
    title: "Brief & Requirements",
    employer: "Tell us about the role, team culture, and ideal candidate profile.",
    candidate: "Share your experience, goals, and what you're looking for.",
  },
  {
    step: 2,
    title: "Search & Match",
    employer: "We search our network and source candidates matching your needs.",
    candidate: "We match you with relevant opportunities and prepare your application.",
  },
  {
    step: 3,
    title: "Screen & Shortlist",
    employer: "We present a shortlist of pre-vetted, qualified candidates.",
    candidate: "We submit your profile to suitable employers with our recommendation.",
  },
  {
    step: 4,
    title: "Interview & Hire",
    employer: "We coordinate interviews and support through to offer acceptance.",
    candidate: "We prepare you for interviews and help negotiate the best offer.",
  },
];

const whySpecialist = [
  {
    title: "Gaming Industry Expertise",
    description: "Our recruiters come from esports backgrounds. We understand the difference between a MOBA analyst and an FPS coach.",
    icon: "🎮",
  },
  {
    title: "Extensive Network",
    description: "20+ years of industry connections means access to talent and opportunities others can't reach.",
    icon: "🌐",
  },
  {
    title: "Cultural Understanding",
    description: "Esports culture is unique. We assess for passion, community mindset, and gaming knowledge—not just keywords.",
    icon: "💜",
  },
  {
    title: "Speed & Quality",
    description: "Specialisation means faster, better matches. We know where to find talent and can move quickly.",
    icon: "⚡",
  },
];

const faqs = [
  {
    question: "What is esports recruiting?",
    answer: "Esports recruiting is the process of finding and hiring talent for esports organisations, gaming companies, and related businesses. This includes recruiting for competitive roles (players, coaches), operational roles (managers, marketing), and support functions. Specialist esports recruiters understand the industry, have networks within gaming, and can identify candidates with genuine passion and relevant experience.",
  },
  {
    question: "How does esports recruiting differ from regular recruitment?",
    answer: "Esports recruiting requires deep industry knowledge that general recruiters lack. We understand game-specific terminology, the difference between roles at teams vs publishers vs tournament operators, and can assess genuine gaming passion vs. surface-level interest. Our networks include passive candidates active in gaming communities who aren't on LinkedIn. We also understand unique aspects like player contracts, streaming rights, and esports org structures.",
  },
  {
    question: "What roles do esports recruiters fill?",
    answer: "Esports recruiters fill diverse roles: Competitive (players, coaches, analysts), Content (creators, producers, editors), Broadcast (casters, hosts, production), Operations (GMs, HR, finance), Marketing (partnerships, brand, events), and Technical (IT, platform ops). We cover esports organisations, tournament operators, game publishers, streaming platforms, gaming hardware companies, and esports agencies.",
  },
  {
    question: "How much do esports recruiting services cost?",
    answer: "For employers: Typical fees are 15-25% of first-year salary, paid on successful placement. Senior roles and retained searches may be higher. For candidates: Our services are completely free. We're paid by employers, never candidates. If any recruiter asks you to pay, that's a red flag.",
  },
  {
    question: "How long does esports recruiting take?",
    answer: "Timelines vary by role: Junior positions typically 4-6 weeks, mid-level specialists 6-8 weeks, and senior/executive roles 8-12 weeks. Highly specialised roles (specific game expertise, rare skill combinations) may take longer. We provide regular updates throughout the process and can expedite for urgent hires.",
  },
  {
    question: "Do I need esports experience to be recruited?",
    answer: "Not always. While some roles require deep esports knowledge, many positions value transferable skills from adjacent industries. Marketing professionals, event managers, finance specialists, and operations experts from traditional sports, entertainment, or tech can transition into esports. We help candidates position their existing experience for gaming roles.",
  },
];


export default function EsportsRecruiting() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Esports Recruiting Services",
        description: "Specialist esports and gaming recruitment services connecting talent with leading organisations.",
        provider: {
          "@type": "Organization",
          name: "MVP",
          url: "https://mvp.actor",
        },
        serviceType: "Recruitment",
        areaServed: "United Kingdom",
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
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster={getMuxThumbnailUrl(MUX_VIDEOS.ESPORTS_2, 2)}
              className="w-full h-full object-cover"
            >
              <source src={getMuxStreamUrl(MUX_VIDEOS.ESPORTS_2)} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-cyan-400">Esports Recruiting</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Esports Recruiting
                </span>
                <br />Done Right
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Specialist <strong className="text-white">esports recruiting</strong> connecting exceptional gaming talent
                with industry-leading organisations. Whether you&apos;re an esports team recruiting staff or a professional
                seeking opportunities—we&apos;ve got you covered.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:opacity-90 transition-all"
                >
                  Start Recruiting
                </Link>
                <Link
                  href="/esports-jobs"
                  className="px-8 py-4 bg-slate-800/80 text-white font-semibold rounded-xl border border-slate-600 hover:border-cyan-500 transition-all backdrop-blur-sm"
                >
                  View Open Roles
                </Link>
              </div>

              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/30">
                  20+ Years Experience
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full border border-purple-500/30">
                  Esports Specialists
                </span>
                <span className="px-4 py-2 bg-green-500/20 text-green-400 text-sm font-medium rounded-full border border-green-500/30">
                  Free for Candidates
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Two-Column Services */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              How Our <span className="text-cyan-400">Esports Recruiting</span> Helps
            </h2>
            <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-center">
              Whether you&apos;re hiring or job hunting, our specialist recruiters deliver results.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {recruitingServices.map((service) => (
                <div key={service.title} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-cyan-400 font-medium mb-4">{service.subtitle}</p>
                  <p className="text-slate-400 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-slate-300">
                        <span className="text-green-400 mt-1">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.ctaLink}
                    className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all"
                  >
                    {service.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roles We Recruit */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Esports Roles <span className="text-purple-400">We Recruit For</span>
            </h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              Our esports recruiting covers every function across gaming organisations.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rolesWeRecruit.map((cat) => (
                <div key={cat.category} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-4">{cat.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.roles.map((role) => (
                      <span key={role} className="px-3 py-1 bg-purple-600/20 text-purple-400 text-sm rounded-full">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              Our <span className="text-cyan-400">Recruiting Process</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {recruitingProcess.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 bg-cyan-600/20 rounded-full flex items-center justify-center text-2xl font-bold text-cyan-400 mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-white mb-3">{step.title}</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-slate-400"><span className="text-cyan-400">Employers:</span> {step.employer}</p>
                    <p className="text-slate-400"><span className="text-purple-400">Candidates:</span> {step.candidate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Specialist */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose <span className="text-purple-400">Specialist Esports Recruiting</span>?
            </h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              General recruiters don&apos;t understand gaming. Here&apos;s why specialists deliver better results.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whySpecialist.map((item) => (
                <div key={item.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Esports Recruiting FAQs</h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-800/80 transition-colors">
                    <span className="font-bold text-white pr-4">{faq.question}</span>
                    <span className="text-cyan-400 text-2xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-400">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 via-slate-900 to-purple-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Esports Recruiting?
            </h2>
            <p className="text-slate-300 mb-8">
              Whether you&apos;re building a team or looking for your next opportunity, our specialist recruiters are here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:opacity-90 transition-all"
              >
                Get Started
              </Link>
              <Link
                href="/esports-recruitment-agency"
                className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-cyan-500 transition-all"
              >
                Learn About Our Agency
              </Link>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Explore More</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link href="/esports-recruitment-agency" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Our Agency</h3>
                <p className="text-slate-400 text-sm">Full recruitment agency services.</p>
              </Link>
              <Link href="/esports-jobs" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Current Vacancies</h3>
                <p className="text-slate-400 text-sm">Browse live esports jobs.</p>
              </Link>
              <Link href="/esports-careers" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Career Paths</h3>
                <p className="text-slate-400 text-sm">Explore esports career options.</p>
              </Link>
              <Link href="/how-to-get-into-esports" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Getting Started</h3>
                <p className="text-slate-400 text-sm">How to break into esports.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
