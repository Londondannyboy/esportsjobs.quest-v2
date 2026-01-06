import {
  CopilotRuntime,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { NextRequest } from "next/server";

function getRuntime() {
  return new CopilotRuntime({
    remoteEndpoints: [
      {
        url: "https://esports-v2-agent-production.up.railway.app/copilotkit",
      },
    ],
  });
}

export const POST = async (req: NextRequest) => {
  const runtime = getRuntime();
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    endpoint: "/api/copilotkit",
  });
  return handleRequest(req);
};

export const GET = async (req: NextRequest) => {
  const runtime = getRuntime();
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    endpoint: "/api/copilotkit",
  });
  return handleRequest(req);
};
