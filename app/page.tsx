"use client";
import { CopilotSidebar } from "@copilotkit/react-ui";
import { useCoAgent } from "@copilotkit/react-core";

interface AgentState {
  jobs: Array<{
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    url: string;
  }>;
  search_query: string;
}

export default function Home() {
  const { state } = useCoAgent<AgentState>({
    name: "esports_agent",
    initialState: {
      jobs: [],
      search_query: "",
    },
  });

  return (
    <CopilotSidebar
      defaultOpen={true}
      instructions={`You are an AI assistant for EsportsJobs.quest. Help users find esports careers.

Available actions:
- search_jobs: Find jobs by query, category (coaching/marketing/production/management/content/operations), country, or type
- lookup_company: Get info about companies like Team Liquid, Riot Games, Fnatic
- get_job_categories: List all job categories
- get_job_countries: List countries with jobs

Always use these actions to provide real data. Be enthusiastic about esports careers!`}
      labels={{
        title: "Esports Jobs AI",
        initial: "Ready to find your dream job in esports? Ask me anything!",
      }}
    >
      <main className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
        {/* Hero Section - Phase 3 will add Three.js here */}
        <section className="h-screen flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              EsportsJobs.quest
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Find your career in competitive gaming
            </p>
            <p className="text-gray-400">
              Chat with our AI assistant →
            </p>
            {state?.jobs?.length > 0 && (
              <div className="mt-8 text-sm text-cyan-400">
                {state.jobs.length} jobs found
              </div>
            )}
          </div>
        </section>
      </main>
    </CopilotSidebar>
  );
}
