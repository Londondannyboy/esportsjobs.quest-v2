"use client";
import { useEffect, useCallback } from "react";
import { CopilotPopup } from "@copilotkit/react-ui";
import { useCoAgent, useRenderToolCall, useCopilotChat } from "@copilotkit/react-core";
import { Role, TextMessage } from "@copilotkit/runtime-client-gql";
import { UserButton, SignedIn, SignedOut } from "@neondatabase/auth/react/ui";
import { authClient } from "@/app/lib/auth/client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";
import { AnimatedJobCardsGrid, JobCardsLoading } from "../components/AnimatedJobCard";

// Dynamic import for Voice (client-side only)
const VoiceInput = dynamic(() => import("../components/VoiceInput").then(mod => ({ default: mod.VoiceInput })), {
  ssr: false,
  loading: () => <div className="w-20 h-20 rounded-full bg-gray-700 animate-pulse" />
});

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

// Page context for AI assistants - EXPLICIT H1 for agent awareness
const PAGE_H1 = "Esports Jobs London: The UK's Esports Capital";
const PAGE_CONTEXT = {
  pageId: "esports-jobs-london",
  pageType: "location-hub",
  location: "London",
  title: "Esports Jobs London - The UK's Esports Capital",
  pageH1: PAGE_H1,
  pageUrl: "/test-london",
  pageDescription: "London is the heart of UK esports. Home to Fnatic, Excel Esports, Gfinity, and FACEIT.",
};

const londonCompanies = [
  { name: "Fnatic", type: "Esports Organisation", roles: "50+", focus: "LoL, Valorant, CS2" },
  { name: "Excel Esports", type: "Esports Organisation", roles: "20+", focus: "LEC, Valorant" },
  { name: "Gfinity", type: "Tournament Operator", roles: "40+", focus: "Events, Broadcasting" },
  { name: "FACEIT", type: "Gaming Platform", roles: "60+", focus: "Platform, Esports Ops" },
  { name: "Sports Interactive", type: "Game Developer", roles: "30+", focus: "Football Manager" },
  { name: "British Esports", type: "Governing Body", roles: "15+", focus: "Education, Policy" },
  { name: "ESL UK", type: "Tournament Operator", roles: "20+", focus: "CS2, Events" },
  { name: "Guild Esports", type: "Esports Organisation", roles: "15+", focus: "Multi-title" },
];

const salaryComparison = [
  { role: "Esports Coach", london: "£35,000 - £70,000", ukAvg: "£30,000 - £60,000" },
  { role: "Marketing Manager", london: "£40,000 - £75,000", ukAvg: "£32,000 - £65,000" },
  { role: "Content Producer", london: "£32,000 - £55,000", ukAvg: "£28,000 - £48,000" },
  { role: "Tournament Organiser", london: "£30,000 - £55,000", ukAvg: "£26,000 - £48,000" },
  { role: "Community Manager", london: "£28,000 - £48,000", ukAvg: "£24,000 - £42,000" },
];

const areas = [
  { area: "Shoreditch/Old Street", description: "Tech hub with many gaming startups and creative agencies" },
  { area: "Soho/Central", description: "Publisher offices and media companies with esports divisions" },
  { area: "Stratford/Olympic Park", description: "Major esports venues and event spaces" },
  { area: "Hammersmith", description: "SEGA and other publisher headquarters" },
  { area: "Twickenham/West", description: "Studio clusters and gaming companies" },
];

export default function TestLondonPage() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const firstName = user?.name?.split(' ')[0] || null;

  const { state, setState } = useCoAgent<AgentState>({
    name: "esports_agent",
    initialState: {
      jobs: [],
      search_query: "",
      user: undefined,
    },
  });

  // Sync user from auth to agent state
  useEffect(() => {
    if (user && (!state?.user || state?.user?.id !== user.id)) {
      setState((prev) => ({
        jobs: prev?.jobs ?? [],
        search_query: prev?.search_query ?? "",
        user: {
          id: user.id,
          name: user.name || undefined,
          firstName: firstName || undefined,
          email: user.email || undefined,
        },
      }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  // Get appendMessage from CopilotKit chat hook
  const { appendMessage } = useCopilotChat();

  // Voice message callback - forwards USER messages to CopilotKit
  const handleVoiceMessage = useCallback((text: string, role?: "user" | "assistant") => {
    console.log(`[Voice -> CopilotKit] ${role}:`, text.slice(0, 50));
    if (role === "user") {
      try {
        const message = new TextMessage({ content: text, role: Role.User });
        appendMessage(message);
      } catch (e) {
        console.error("[Voice] Error appending message:", e);
      }
    }
  }, [appendMessage]);

  // Render animated job cards when search_esports_jobs tool returns results
  useRenderToolCall({
    name: "search_esports_jobs",
    render: ({ result, status }) => {
      if (status === "executing" || status === "inProgress") {
        return <JobCardsLoading />;
      }

      if (status === "complete" && result) {
        const jobs = result.jobs || [];
        if (jobs.length === 0) {
          return (
            <div className="text-center py-8">
              <div className="text-4xl mb-3">🎮</div>
              <p className="text-gray-400">No jobs found matching your criteria.</p>
              <p className="text-cyan-400 text-sm mt-2">Try a different search!</p>
            </div>
          );
        }
        return <AnimatedJobCardsGrid jobs={jobs} query={result.search_query} />;
      }

      return <JobCardsLoading />;
    },
  });

  // PAGE-AWARE CopilotKit instructions - EXPLICIT PAGE CONTEXT
  const agentInstructions = `## PAGE CONTEXT (for agent parsing)
Page URL: ${PAGE_CONTEXT.pageUrl}
Page Type: ${PAGE_CONTEXT.pageType}
Page H1: ${PAGE_H1}
Location Focus: ${PAGE_CONTEXT.location}
Page Description: ${PAGE_CONTEXT.pageDescription}

## CRITICAL: You are on the ESPORTS JOBS LONDON page
IMPORTANT: You are NOT on the main homepage. You are on the LONDON ESPORTS JOBS page.
When asked "what page am I on?" or "where am I?", say: "You're on the ${PAGE_H1} page"

When user asks about jobs, PRIORITIZE LONDON opportunities.
If they say "show me jobs" or "find jobs", search for jobs in London/United Kingdom.
The companies on this page include: Fnatic, Excel Esports, Gfinity, FACEIT, British Esports.

${user ? `## USER INFO
Name: ${firstName || user.name}
Email: ${user.email}
ID: ${user.id}

Greet them by name and be friendly!` : `## GUEST USER
The user is not logged in. Encourage them to sign up for personalized recommendations.`}

## YOUR ROLE
You are an AI assistant for EsportsJobs.quest helping users find esports jobs.
On THIS page, you are specifically focused on LONDON esports opportunities.

## YOUR TOOLS
- search_esports_jobs: Find jobs (use country="United Kingdom" for London jobs)
- lookup_esports_company: Get info on Fnatic, Excel, Gfinity, etc.
- get_categories: List job categories
- get_countries: List available countries

Always use your tools to provide real data! Be enthusiastic about esports careers!`;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Auth Header Bar */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-sm">
                  EJ
                </div>
                <span className="text-white font-bold">EsportsJobs.quest</span>
              </Link>

              {/* Nav Links */}
              <nav className="hidden md:flex items-center gap-6">
                {JOBS_SITE_NAV_ITEMS.map((item, idx) => (
                  <Link key={idx} href={item.href} className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Auth Section */}
              <div className="flex items-center gap-4">
                {isPending ? (
                  <div className="text-gray-400 text-sm">Loading...</div>
                ) : (
                  <>
                    <SignedIn>
                      <div className="flex items-center gap-3">
                        <span className="text-white text-sm hidden sm:block">Hi, {firstName || user?.email}</span>
                        <UserButton />
                      </div>
                    </SignedIn>
                    <SignedOut>
                      <Link
                        href="/auth/sign-in"
                        className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black rounded-lg font-medium text-sm transition-colors"
                      >
                        Sign In
                      </Link>
                    </SignedOut>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>

        <main className="pt-14">
          {/* Hero Section with Voice Widget */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-violet-600/20" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              {/* Breadcrumb */}
              <nav className="text-sm mb-8 text-slate-400">
                <Link href="/" className="hover:text-white">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/esports-jobs-uk" className="hover:text-white">Esports Jobs UK</Link>
                <span className="mx-2">/</span>
                <span className="text-red-400">London</span>
              </nav>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Esports Jobs London:{" "}
                <span className="bg-gradient-to-r from-red-400 to-violet-400 bg-clip-text text-transparent">
                  The UK&apos;s Esports Capital
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl">
                London is the heart of UK esports. Home to Fnatic, Excel Esports, Gfinity, and FACEIT,
                the capital offers more esports opportunities than anywhere else in Britain.
              </p>

              {/* Voice Widget - RIGHT UNDER HEADER/INTRO */}
              <div className="flex flex-col items-center my-12">
                <p className="text-cyan-400 text-sm mb-4 animate-pulse">Talk to our AI to find London esports jobs</p>
                <VoiceInput
                  onMessage={handleVoiceMessage}
                  firstName={firstName}
                  userId={user?.id}
                  email={user?.email}
                  pageContext={PAGE_CONTEXT}
                />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-2xl font-bold text-red-400">200+</div>
                  <div className="text-sm text-slate-400">Active Roles</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-2xl font-bold text-violet-400">30+</div>
                  <div className="text-sm text-slate-400">Companies</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-2xl font-bold text-cyan-400">+15%</div>
                  <div className="text-sm text-slate-400">London Premium</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-2xl font-bold text-amber-400">Hybrid</div>
                  <div className="text-sm text-slate-400">Many Flexible</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/" className="px-8 py-4 bg-gradient-to-r from-red-600 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all">
                  Browse London Jobs
                </Link>
                <Link href="/esports-jobs-remote" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700 hover:border-slate-600 transition-all">
                  Remote Options
                </Link>
              </div>
            </div>
          </section>

          {/* Companies Section */}
          <section className="py-16 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white mb-8">Top London Esports Employers</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {londonCompanies.map((company) => (
                  <div key={company.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-colors">
                    <h3 className="text-lg font-bold text-white mb-2">{company.name}</h3>
                    <p className="text-slate-400 text-sm mb-2">{company.type}</p>
                    <p className="text-xs text-slate-500 mb-2">{company.focus}</p>
                    <span className="text-emerald-400 text-sm">{company.roles} employees</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Salary Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white mb-8">London Esports Salary Guide</h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-slate-800/50 rounded-2xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-800 border-b border-slate-700">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Role</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">London Salary</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">UK Average</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salaryComparison.map((row, idx) => (
                      <tr key={row.role} className={idx % 2 === 0 ? "bg-slate-800/30" : "bg-slate-800/10"}>
                        <td className="px-6 py-4 text-slate-300">{row.role}</td>
                        <td className="px-6 py-4 text-emerald-400">{row.london}</td>
                        <td className="px-6 py-4 text-slate-400">{row.ukAvg}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Gaming Hubs Section */}
          <section className="py-16 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white mb-8">London Gaming Hubs</h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                {areas.map((area) => (
                  <div key={area.area} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <h3 className="font-bold text-white mb-2">{area.area}</h3>
                    <p className="text-slate-400 text-xs">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-red-600/20 via-slate-900 to-violet-600/20">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Find Your London Esports Role</h2>
              <p className="text-slate-300 mb-8">Browse current opportunities in the UK&apos;s esports capital, or ask our AI assistant for personalized recommendations.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/" className="px-8 py-4 bg-gradient-to-r from-red-600 to-violet-600 text-white font-semibold rounded-xl">
                  Browse All Jobs
                </Link>
                <Link href="/esports-jobs-remote" className="px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700">
                  Remote Options
                </Link>
              </div>
            </div>
          </section>
        </main>

        <UnifiedFooter activeSite="jobs" />
      </div>

      {/* CopilotKit Popup - Floating chat widget (page-aware) */}
      <CopilotPopup
        instructions={agentInstructions}
        labels={{
          title: "London Esports Jobs AI",
          initial: firstName
            ? `Hey ${firstName}! You're on the Esports Jobs London page. Looking for roles at Fnatic, Excel, or Gfinity?`
            : "You're on the Esports Jobs London page - the UK's esports capital! How can I help you find your next role?",
        }}
      />
    </>
  );
}
