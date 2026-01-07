"use client";

import dynamic from "next/dynamic";
import { authClient } from "@/app/lib/auth/client";

interface PageContext {
  pageId: string;
  pageType: string;
  location?: string;
  title: string;
}

// Dynamic import for Voice (client-side only)
const VoiceInput = dynamic(
  () => import("./VoiceInput").then((mod) => ({ default: mod.VoiceInput })),
  {
    ssr: false,
    loading: () => (
      <div className="w-16 h-16 rounded-full bg-gray-700/50 animate-pulse" />
    ),
  }
);

interface Props {
  pageContext?: PageContext;
}

export function FloatingVoice({ pageContext }: Props) {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const firstName = user?.name?.split(" ")[0] || null;

  const handleMessage = (text: string, role?: "user" | "assistant") => {
    console.log(`[FloatingVoice] ${role}: ${text.slice(0, 50)}...`);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <VoiceInput
        onMessage={handleMessage}
        firstName={firstName}
        userId={user?.id}
        email={user?.email}
        pageContext={pageContext}
      />
    </div>
  );
}
