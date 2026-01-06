import {
  CopilotRuntime,
  ExperimentalEmptyAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { HttpAgent } from "@ag-ui/client";
import { NextRequest } from "next/server";

// Use ExperimentalEmptyAdapter since we're only using one agent
const serviceAdapter = new ExperimentalEmptyAdapter();

// Create the CopilotRuntime instance with HttpAgent for AG-UI protocol
const runtime = new CopilotRuntime({
  agents: {
    esports_agent: new HttpAgent({
      url: "https://esports-v2-agent-production.up.railway.app/copilotkit",
    }),
  },
});

export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter,
    endpoint: "/api/copilotkit",
  });

  return handleRequest(req);
};
