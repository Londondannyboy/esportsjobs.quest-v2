"use client";
import { CopilotKit } from "@copilotkit/react-core";
import { NeonAuthUIProvider } from "@neondatabase/auth/react/ui";
import { authClient } from "@/app/lib/auth/client";
import { ReactNode } from "react";

export function CopilotProvider({ children }: { children: ReactNode }) {
  return (
    <NeonAuthUIProvider
      authClient={authClient}
      redirectTo="/"
      social={{ providers: ["google"] }}
    >
      <CopilotKit runtimeUrl="/api/copilotkit" agent="esports_agent">
        {children}
      </CopilotKit>
    </NeonAuthUIProvider>
  );
}
