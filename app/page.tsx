"use client";
import { useEffect, useCallback } from "react";
import { CopilotSidebar } from "@copilotkit/react-ui";
import { useCoAgent, useRenderToolCall, useCopilotChat } from "@copilotkit/react-core";
import { Role, TextMessage } from "@copilotkit/runtime-client-gql";
import { UserButton, SignedIn, SignedOut } from "@neondatabase/auth/react/ui";
import { authClient } from "@/app/lib/auth/client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { AnimatedJobCardsGrid, JobCardsLoading } from "./components/AnimatedJobCard";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "./components/UnifiedHeader";
import { UnifiedFooter } from "./components/UnifiedFooter";

// Dynamic imports for heavy components
const GamerHero = dynamic(() => import("./components/GamerHero").then(mod => ({ default: mod.GamerHero })), {
  ssr: false,
  loading: () => <div className="h-screen bg-gradient-to-b from-gray-900 to-purple-900" />
});

const VoiceInput = dynamic(() => import("./components/VoiceInput").then(mod => ({ default: mod.VoiceInput })), {
  ssr: false,
  loading: () => <div className="w-20 h-20 rounded-full bg-gray-700 animate-pulse" />
});

const AnimatedTagline = dynamic(
  () => import("./components/AnimatedTagline").then(mod => ({ default: mod.AnimatedTagline })),
  { loading: () => <div className="mb-8 h-[60px] sm:h-[72px] md:h-[88px] lg:h-[104px]" /> }
);

const JobSearch = dynamic(
  () => import("./components/JobSearch").then(mod => ({ default: mod.JobSearch })),
  { loading: () => <div className="h-14 bg-gray-800/50 rounded-xl animate-pulse" /> }
);

const PopularSearches = dynamic(
  () => import("./components/JobSearch").then(mod => ({ default: mod.PopularSearches })),
  { loading: () => <div className="h-8" /> }
);

const NewsSection = dynamic(
  () => import("./components/NewsSection").then(mod => ({ default: mod.NewsSection })),
  { loading: () => <div className="h-96 bg-gray-900/50 rounded-2xl animate-pulse" /> }
);

const HeyCompanies = dynamic(
  () => import("./components/HeyCompanies").then(mod => ({ default: mod.HeyCompanies })),
  { loading: () => <div className="h-96 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 animate-pulse" /> }
);

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  url: string;
}

interface UserProfile {
  id?: string;
  name?: string;
  firstName?: string;
  email?: string;
}

interface AgentState {
  jobs: Job[];
  search_query: string;
  user?: UserProfile;
}

// SEO Content
const jobCategories = [
  { icon: "🎮", title: "Pro Players & Athletes", description: "Compete professionally in LoL, Valorant, CS2, Fortnite. Join top esports organisations.", features: ["Competitive Salary", "Team House", "Tournament Travel"] },
  { icon: "🎯", title: "Coaches & Analysts", description: "Guide teams to victory with strategic coaching and data analysis. Develop players.", features: ["Strategic Planning", "Player Development", "Performance Analysis"] },
  { icon: "📹", title: "Content Creators", description: "Create gaming content for YouTube, TikTok, Twitch. Work with esports orgs and brands.", features: ["Video Production", "Live Streaming", "Brand Partnerships"] },
  { icon: "🎙️", title: "Casters & Broadcast", description: "Bring esports to life as a shoutcaster, analyst, or broadcast talent.", features: ["Live Commentary", "Desk Analysis", "Event Hosting"] },
  { icon: "🏟️", title: "Event Organisers", description: "Plan esports tournaments from local LANs to international championships.", features: ["Event Planning", "Venue Management", "Production"] },
  { icon: "📊", title: "Marketing & Business", description: "Drive growth through marketing, partnerships, and business development.", features: ["Partnership Sales", "Social Media", "Brand Strategy"] },
];

const stats = [
  { value: "$1.8B", label: "Global Esports Market" },
  { value: "540M", label: "Global Viewers" },
  { value: "22,000+", label: "Pro Players Worldwide" },
  { value: "100%", label: "Free Job Board" },
];

const companies = ["Logitech", "Team Liquid", "Octagon", "Garena", "Red Bull", "Riot Games", "ESL", "Fnatic"];

// JSON-LD structured data
const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://esportsjobs.quest/#webpage",
      url: "https://esportsjobs.quest",
      name: "Esports Jobs UK | Gaming Job Search Platform",
      description: "Free esports and gaming job board. Search and apply directly to esports jobs.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What types of esports jobs are available?", acceptedAnswer: { "@type": "Answer", text: "Esports jobs include pro players, coaches, analysts, content creators, streamers, tournament organisers, marketing specialists, and team management positions." } },
        { "@type": "Question", name: "How do I get a job in esports?", acceptedAnswer: { "@type": "Answer", text: "Start by building skills through volunteer work, freelance projects, or creating content. Join Discord communities and attend industry events to network." } },
        { "@type": "Question", name: "What is the average salary for esports jobs?", acceptedAnswer: { "@type": "Answer", text: "Entry-level: £20,000-£30,000. Mid-level: £35,000-£60,000. Senior positions and pro players can earn £100,000+." } },
      ],
    },
  ],
};

export default function Home() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const firstName = user?.name?.split(' ')[0] || null;

  const { state, setState } = useCoAgent<AgentState>({
    name: "esports_agent",
    initialState: { jobs: [], search_query: "", user: undefined },
  });

  useEffect(() => {
    if (user && (!state?.user || state?.user?.id !== user.id)) {
      setState((prev) => ({
        jobs: prev?.jobs ?? [],
        search_query: prev?.search_query ?? "",
        user: { id: user.id, name: user.name || undefined, firstName: firstName || undefined, email: user.email || undefined },
      }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  const { appendMessage } = useCopilotChat();

  const handleVoiceMessage = useCallback((text: string, role?: "user" | "assistant") => {
    try {
      const messageRole = role === "user" ? Role.User : Role.Assistant;
      appendMessage(new TextMessage({ content: text, role: messageRole }));
    } catch (e) {
      console.error("[Voice] Error:", e);
    }
  }, [appendMessage]);

  useRenderToolCall({
    name: "search_esports_jobs",
    render: ({ result, status }) => {
      if (status === "executing" || status === "inProgress") return <JobCardsLoading />;
      if (status === "complete" && result) {
        const jobs = result.jobs || [];
        if (jobs.length === 0) return <div className="text-center py-8"><div className="text-4xl mb-3">🎮</div><p className="text-gray-400">No jobs found.</p></div>;
        return <AnimatedJobCardsGrid jobs={jobs} query={result.search_query} />;
      }
      return <JobCardsLoading />;
    },
  });

  const agentInstructions = user
    ? `CRITICAL USER CONTEXT:\n- User Name: ${firstName || user.name}\n- User ID: ${user.id}\n- User Email: ${user.email}\n\nYou are an AI for EsportsJobs.quest. Help find esports careers.\nTools: search_esports_jobs, lookup_esports_company, get_categories, get_countries\nBe enthusiastic about esports! 🎮`
    : `You are an AI for EsportsJobs.quest. Help find esports careers.\nEncourage sign-up for personalized recommendations.\nTools: search_esports_jobs, lookup_esports_company, get_categories, get_countries\nBe enthusiastic! 🎮`;

  return (
    <CopilotSidebar
      defaultOpen={false}
      instructions={agentInstructions}
      labels={{
        title: "Esports Jobs AI",
        initial: firstName ? `🎮 Hey ${firstName}! Ready to level up your esports career?` : "🎮 Find your dream job in esports!",
      }}
    >
      <main className="min-h-screen bg-[#0a0a0f] text-white">
        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }} />

        {/* 3D Hero Section */}
        <section className="h-screen relative overflow-hidden">
          <div className="absolute inset-0"><GamerHero className="w-full h-full" /></div>

          {/* Header */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-sm">EJ</div>
                <span className="text-white font-bold hidden sm:block">EsportsJobs.quest</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                {JOBS_SITE_NAV_ITEMS.map((item, idx) => (
                  <Link key={idx} href={item.href} className="text-sm text-gray-300 hover:text-cyan-400">{item.label}</Link>
                ))}
              </nav>
              <div>
                {isPending ? <div className="text-gray-400 text-sm">Loading...</div> : (
                  <>
                    <SignedIn><div className="flex items-center gap-3"><span className="text-white text-sm hidden sm:block">Hi, {firstName}</span><UserButton /></div></SignedIn>
                    <SignedOut><Link href="/auth/sign-in" className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium">Sign In</Link></SignedOut>
                  </>
                )}
              </div>
            </div>
          </header>

          {/* Hero Content */}
          <div className="relative z-10 h-full flex items-center justify-center pt-16">
            <div className="text-center text-white px-4">
              <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full border border-cyan-400/60 bg-black/50 backdrop-blur-sm">
                <span className="text-2xl font-black text-cyan-400">#1</span>
                <span className="text-white font-medium">Esports Recruitment Agency</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                EsportsJobs.quest
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">Find your career in competitive gaming</p>

              {/* Search */}
              <div className="max-w-2xl mx-auto mb-8">
                <JobSearch size="large" className="mb-4" />
                <PopularSearches />
              </div>

              <p className="text-cyan-400 font-medium animate-pulse">💬 Chat with our AI or talk to the voice assistant below</p>
            </div>
          </div>

          {/* Voice + Scroll */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-6">
            <VoiceInput onMessage={handleVoiceMessage} firstName={firstName} userId={user?.id} email={user?.email} />
            <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-bounce" />
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-12 bg-gradient-to-b from-[#0a0a0f] to-[#0d0d15] border-b border-gray-800/50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-xl md:text-2xl text-gray-300">
              Leading <strong className="text-cyan-400">esports recruiters</strong> connecting gaming talent with top organisations.
              Browse <strong className="text-cyan-400">esports jobs</strong> in pro gaming, coaching, content creation, and management.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-gradient-to-r from-purple-900/50 via-cyan-900/30 to-purple-900/50 border-y border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Job Categories */}
        <section className="py-24 bg-[#0a0a0f]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-black mb-12 text-center">Esports <span className="text-cyan-400">Job Categories</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobCategories.map((cat, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-gray-900/50 border border-gray-700 hover:border-cyan-500/50 transition-colors">
                  <div className="text-4xl mb-4">{cat.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{cat.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.features.map((f, i) => (
                      <span key={i} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Companies */}
        <section className="py-16 bg-[#0d0d15]">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-400 mb-8">Featured Employers</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {companies.map((company, idx) => (
                <span key={idx} className="text-xl font-bold text-gray-500 hover:text-cyan-400 transition-colors">{company}</span>
              ))}
            </div>
          </div>
        </section>

        {/* HeyCompanies CTA */}
        <HeyCompanies />

        {/* News */}
        <NewsSection />

        {/* Quick Links */}
        <section className="py-16 bg-[#0a0a0f]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-black mb-8 text-center">Explore <span className="text-cyan-400">Esports Careers</span></h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { href: "/esports-jobs-london", label: "London Jobs" },
                { href: "/esports-jobs-uk", label: "UK Jobs" },
                { href: "/esports-jobs-remote", label: "Remote Jobs" },
                { href: "/fnatic-careers", label: "Fnatic Careers" },
                { href: "/esports-careers", label: "Career Guide" },
                { href: "/esports-coach-careers", label: "Coaching Careers" },
                { href: "/esports-salary-guide-uk", label: "Salary Guide" },
                { href: "/how-to-get-into-esports", label: "How to Get In" },
              ].map((link, idx) => (
                <Link key={idx} href={link.href} className="p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 text-center text-gray-300 hover:text-cyan-400 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <UnifiedFooter activeSite="jobs" />
      </main>
    </CopilotSidebar>
  );
}
