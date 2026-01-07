"use client";

import { useEffect } from "react";
import { useCoAgent } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import { authClient } from "@/app/lib/auth/client";

interface PageContext {
  pageId: string;
  pageType: "job-listing" | "career-guide" | "salary-guide" | "homepage" | "news" | "contact";
  location?: string;
  category?: string;
  title: string;
}

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
  page?: PageContext;
}

interface Props {
  pageContext: PageContext;
  children: React.ReactNode;
  sidebarDefaultOpen?: boolean;
}

export function PageAwareContent({
  pageContext,
  children,
  sidebarDefaultOpen = false,
}: Props) {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const firstName = user?.name?.split(" ")[0] || null;

  const { state, setState } = useCoAgent<AgentState>({
    name: "esports_agent",
    initialState: {
      jobs: [],
      search_query: "",
      user: undefined,
      page: undefined,
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
        page: prev?.page,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  // Sync page context to agent state
  useEffect(() => {
    if (pageContext.pageId && (!state?.page || state?.page?.pageId !== pageContext.pageId)) {
      console.log("[PageAware] Syncing page context:", pageContext.pageId);
      setState((prev) => ({
        jobs: prev?.jobs ?? [],
        search_query: prev?.search_query ?? "",
        user: prev?.user,
        page: pageContext,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageContext.pageId]);

  // Build page-aware instructions
  const pageInstructions = `
You are an AI assistant for EsportsJobs.quest.

## CURRENT PAGE CONTEXT
The user is viewing: ${pageContext.title}
Page type: ${pageContext.pageType}
${pageContext.location ? `Location focus: ${pageContext.location}` : ""}
${pageContext.category ? `Category focus: ${pageContext.category}` : ""}

When helping with job searches, prioritize results relevant to this page context.
${pageContext.location ? `Default to ${pageContext.location} location when searching for jobs.` : ""}

Use your tools to provide real data! Be enthusiastic about esports careers!
`;

  return (
    <CopilotSidebar
      defaultOpen={sidebarDefaultOpen}
      disableSystemMessage={true}
      instructions={pageInstructions}
      labels={{
        title: "Esports Jobs AI",
        initial: firstName
          ? `Hi ${firstName}! Looking at ${pageContext.location || "esports"} jobs?`
          : `Looking for ${pageContext.location || "esports"} jobs? Ask me anything!`,
      }}
    >
      {children}
    </CopilotSidebar>
  );
}
