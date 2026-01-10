import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";
import { MUX_VIDEOS, getMuxStreamUrl, getMuxThumbnailUrl } from "../../lib/mux-config";

// Target keywords: "esports agency", "esports agencies", "leading esports agencies"
export const metadata: Metadata = {
  title: "Esports Agency UK | Leading Gaming Industry Specialists",
  description: "Looking for an esports agency? We connect gaming talent with leading organisations. Recruitment, talent management & industry expertise. Trusted by Emmy-winning studios.",
  keywords: "esports agency, esports agencies, leading esports agencies, specialist esports agency, gaming agency",
  openGraph: {
    title: "Esports Agency UK | Leading Gaming Industry Specialists",
    description: "Looking for an esports agency? We connect gaming talent with leading organisations across gaming and esports.",
    type: "website",
    url: "https://mvp.actor/esports-agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esports Agency UK | Leading Gaming Industry Specialists",
    description: "Looking for an esports agency? We connect gaming talent with leading organisations.",
  },
  alternates: {
    canonical: "https://mvp.actor/esports-agency",
  },
};

const agencyTypes = [
  {
    type: "Esports Recruitment Agency",
    description: "Connects talent with job opportunities at esports organisations, publishers, and gaming companies. Fills permanent and contract roles across all departments.",
    whatWeDo: "This is our primary focus. We recruit for esports organisations, tournament operators, publishers, and gaming brands.",
    icon: "🎯",
    link: "/esports-recruitment-agency",
  },
  {
    type: "Esports Talent Agency",
    description: "Represents professional players, content creators, and broadcast talent. Negotiates contracts, sponsorships, and manages careers on behalf of talent.",
    whatWeDo: "We work alongside talent agencies, helping them find operational staff and connecting their talent with employment opportunities.",
    icon: "⭐",
    link: "/esports-talent-agency",
  },
  {
    type: "Esports Marketing Agency",
    description: "Creates marketing campaigns, brand activations, and sponsorship strategies for brands wanting to enter or expand in esports.",
    whatWeDo: "We recruit marketing professionals for these agencies and their clients, from social media managers to partnership directors.",
    icon: "📈",
    link: "/esports-marketing-careers",
  },
  {
    type: "Esports Production Agency",
    description: "Delivers broadcast production, live event management, and content creation for esports tournaments and gaming events.",
    whatWeDo: "We partner with leading production agencies like 1UP Productions to help them find exceptional production talent.",
    icon: "🎬",
    link: "https://www.1upproductions.com/",
  },
];

const whyChooseUs = [
  {
    title: "Esports-Focused Expertise",
    description: "Unlike general agencies, we focus 100% on esports and gaming. We understand the industry, the culture, and what makes great hires.",
    icon: "🎮",
  },
  {
    title: "Award-Winning Partners",
    description: "We work with Emmy and BAFTA-winning production companies and leading esports organisations across the UK and Europe.",
    icon: "🏆",
  },
  {
    title: "20+ Years Experience",
    description: "Our founder brings over two decades of video games and esports industry experience to every client engagement.",
    icon: "📅",
  },
  {
    title: "Full Industry Coverage",
    description: "From pro players to marketing directors, tournament staff to content creators—we cover every role in the esports ecosystem.",
    icon: "🌐",
  },
];

const clientTypes = [
  { name: "Esports Organisations", examples: "Team Liquid, Fnatic, G2, Cloud9" },
  { name: "Game Publishers", examples: "Riot Games, Blizzard, EA, Ubisoft" },
  { name: "Tournament Operators", examples: "ESL, BLAST, PGL, WePlay" },
  { name: "Production Companies", examples: "1UP Productions, Freaks 4U" },
  { name: "Gaming Brands", examples: "Razer, Logitech, Red Bull, HyperX" },
  { name: "Streaming Platforms", examples: "Twitch, YouTube Gaming, Kick" },
];

const faqs = [
  {
    question: "What is an esports agency?",
    answer: "An esports agency is a specialist company providing services to the competitive gaming industry. This can include talent representation (managing pro players and creators), recruitment (filling jobs at esports companies), marketing (brand campaigns and sponsorships), or production (broadcast and events). Unlike traditional agencies, esports agencies understand gaming culture, competitive titles, and the unique dynamics of the industry.",
  },
  {
    question: "What types of esports agencies exist?",
    answer: "The main types are: Talent Agencies (represent players, streamers, casters), Recruitment Agencies (fill job vacancies), Marketing Agencies (brand campaigns and activations), Production Agencies (broadcast and event production), and Management Companies (full-service player/team management). Some agencies offer multiple services, while specialists focus on one area. We're primarily a recruitment agency but work closely with production and talent agencies.",
  },
  {
    question: "How do I choose the right esports agency?",
    answer: "Consider: What service do you need? (recruitment, talent rep, marketing, production), Does the agency specialise in esports or is gaming a sideline?, What's their track record with clients similar to you?, Do they understand your specific game/scene?, What are their fees and contract terms? For recruitment, look at placement success rates and retention. For talent, check their roster and deal history. Always ask for references and case studies.",
  },
  {
    question: "Are esports agencies only for pro players?",
    answer: "No! While talent agencies focus on players and creators, the esports industry employs thousands of non-playing professionals. Recruitment agencies like ours fill roles in: coaching and analysis, event management, marketing and partnerships, content production, community management, operations and HR, finance and legal. You don't need to be a pro gamer to build a career in esports.",
  },
  {
    question: "What's the difference between an esports agency and esports recruitment agency?",
    answer: "'Esports agency' is a broad term covering any specialist agency in gaming. An 'esports recruitment agency' specifically focuses on filling job vacancies—matching candidates with employers. We're an esports recruitment agency, meaning we help companies find staff and help professionals find jobs. We don't represent players for sponsorship deals or negotiate tournament appearances—that's what talent agencies do.",
  },
  {
    question: "Do esports agencies charge candidates fees?",
    answer: "Legitimate recruitment agencies never charge candidates. Our fees are paid by employers when we successfully place someone. If an agency asks you to pay upfront for job placement, that's a red flag. Talent agencies representing players typically take a percentage (10-20%) of deals they negotiate on your behalf, similar to sports or entertainment agents.",
  },
];

export default function EsportsAgency() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Esports Agency UK",
        description: "Leading esports agency providing recruitment, talent connection, and industry expertise for the gaming industry.",
        url: "https://mvp.actor/esports-agency",
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
              poster={getMuxThumbnailUrl(MUX_VIDEOS.GAMING, 1)}
              className="w-full h-full object-cover"
            >
              <source src={getMuxStreamUrl(MUX_VIDEOS.GAMING)} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-cyan-400">Esports Agency</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
                Leading{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Esports Agency
                </span>
                <br />in the UK
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Looking for an <strong className="text-white">esports agency</strong> that truly understands gaming?
                We&apos;re specialists in esports recruitment, connecting exceptional talent with industry-leading
                organisations. Trusted by Emmy-winning production companies and top esports teams.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:opacity-90 transition-all"
                >
                  Work With Us
                </Link>
                <Link
                  href="/esports-recruitment-agency"
                  className="px-8 py-4 bg-slate-800/80 text-white font-semibold rounded-xl border border-slate-600 hover:border-cyan-500 transition-all backdrop-blur-sm"
                >
                  Our Recruitment Services
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 text-sm font-bold rounded-full border border-yellow-500/30">
                  Partner: 4x Emmy Winner
                </span>
                <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 text-sm font-bold rounded-full border border-cyan-500/30">
                  20+ Years Industry Experience
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* What Type of Esports Agency? */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Types of <span className="text-cyan-400">Esports Agencies</span>
            </h2>
            <p className="text-slate-400 mb-12 max-w-3xl">
              &ldquo;Esports agency&rdquo; can mean different things. Here&apos;s how we fit into the ecosystem.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {agencyTypes.map((agency) => (
                <div key={agency.type} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{agency.icon}</span>
                    <h3 className="text-xl font-bold text-white">{agency.type}</h3>
                  </div>
                  <p className="text-slate-400 mb-4">{agency.description}</p>
                  <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 mb-4">
                    <p className="text-cyan-400 text-sm font-medium">What We Do:</p>
                    <p className="text-slate-300 text-sm">{agency.whatWeDo}</p>
                  </div>
                  {agency.link.startsWith("/") ? (
                    <Link href={agency.link} className="text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                      Learn More →
                    </Link>
                  ) : (
                    <a href={agency.link} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 font-medium text-sm">
                      Visit Partner →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Agency */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our <span className="text-purple-400">Esports Agency</span>?
            </h2>
            <p className="text-slate-400 mb-12 max-w-3xl">
              What sets us apart from other agencies in the gaming space.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">
              Who Our <span className="text-cyan-400">Esports Agency</span> Works With
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clientTypes.map((client) => (
                <div key={client.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-2">{client.name}</h3>
                  <p className="text-slate-500 text-sm">Examples: {client.examples}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 1UP Partnership Feature */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-slate-800/50 rounded-2xl p-8 border border-purple-500/30">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0 text-center">
                  <div className="text-5xl font-black text-white mb-2">1UP</div>
                  <div className="text-xl text-purple-400 font-medium">PRODUCTIONS</div>
                  <div className="flex flex-col gap-2 mt-4">
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-bold rounded-full">4x Emmy</span>
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full">BAFTA</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">Featured Partner: Award-Winning Esports Production Agency</h3>
                  <p className="text-slate-300 mb-4">
                    We work with <a href="https://www.1upproductions.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 font-semibold">1UP Productions</a>, one of the world&apos;s leading esports production agencies. Our founder provides go-to-market strategy and business development support, helping amplify their award-winning capabilities into new markets.
                  </p>
                  <p className="text-slate-400 text-sm mb-4">
                    Their clients include Disney, Netflix, Microsoft, McLaren, Red Bull, and PlayStation. Projects include LEC Finals 2024 and Wild Rift Icons 2022.
                  </p>
                  <a href="https://www.1upproductions.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium">
                    Visit 1UP Productions →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Esports Agency FAQs</h2>

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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 via-slate-900 to-purple-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Work With a Specialist Esports Agency?
            </h2>
            <p className="text-slate-300 mb-8">
              Whether you&apos;re hiring talent, looking for your next role, or need industry expertise—we&apos;re here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:opacity-90 transition-all"
              >
                Get in Touch
              </Link>
              <Link
                href="/esports-jobs"
                className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-cyan-500 transition-all"
              >
                Browse Esports Jobs
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
                <h3 className="font-semibold text-white mb-2">Recruitment Agency</h3>
                <p className="text-slate-400 text-sm">Our specialist recruitment services.</p>
              </Link>
              <Link href="/esports-talent-agency" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Talent Agency Guide</h3>
                <p className="text-slate-400 text-sm">Understanding talent representation.</p>
              </Link>
              <Link href="/gaming-recruitment-agency" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Gaming Recruitment</h3>
                <p className="text-slate-400 text-sm">Broader gaming industry hiring.</p>
              </Link>
              <Link href="/esports-jobs-uk" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Esports Jobs UK</h3>
                <p className="text-slate-400 text-sm">Current opportunities.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
