# EsportsJobs.quest V2 - Moonshot Restart Brief

## Mission
Transform esportsjobs.quest into a state-of-the-art gaming industry job platform with:
1. Interactive Three.js Esports Arena hero (3D stadium, crowd, stage lighting)
2. Voice-enabled AI agent with 3D animated character
3. AG-UI/CopilotKit side panel with dynamic job cards

---

## PHASE 1: COMPLETE ✅

**Backend Agent on Railway**
- URL: `https://esports-v2-agent-production.up.railway.app`
- Auth: `Bearer esports-clm-secret-2025`

**Working Endpoints:**
- `GET /health` → `{"status":"ok","agent":"esports-jobs"}`
- `GET /copilotkit/` → Returns 4 actions (search_jobs, lookup_company, get_job_categories, get_job_countries)
- `POST /chat/completions` → OpenAI-compatible SSE for Hume CLM

**Data Available:**
- 11 esports jobs (Logitech, Team Liquid, Octagon, Garena, etc.)
- 10 company profiles (Team Liquid, Riot Games, Fnatic, Cloud9, G2, 100 Thieves, Logitech, Octagon, Garena, GCU)

---

## PHASE 2: CopilotKit Frontend (START HERE)

### Step 1: Create Next.js App
```bash
cd /Users/dankeegan/esportsjobs.quest-v2
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
```

### Step 2: Install Dependencies
```bash
npm install @copilotkit/react-core @copilotkit/react-ui @copilotkit/runtime
```

### Step 3: Create Files

**`app/api/copilotkit/route.ts`**
```typescript
import {
  CopilotRuntime,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { NextRequest } from "next/server";

const runtime = new CopilotRuntime({
  remoteEndpoints: [
    {
      url: "https://esports-v2-agent-production.up.railway.app/copilotkit",
    },
  ],
});

export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    endpoint: "/api/copilotkit",
  });
  return handleRequest(req);
};
```

**`app/providers/CopilotProvider.tsx`**
```typescript
"use client";
import { CopilotKit } from "@copilotkit/react-core";
import { ReactNode } from "react";

export function CopilotProvider({ children }: { children: ReactNode }) {
  return (
    <CopilotKit runtimeUrl="/api/copilotkit">
      {children}
    </CopilotKit>
  );
}
```

**`app/layout.tsx`**
```typescript
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CopilotProvider } from "./providers/CopilotProvider";
import "@copilotkit/react-ui/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EsportsJobs.quest - Find Your Career in Gaming",
  description: "AI-powered esports job search platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CopilotProvider>{children}</CopilotProvider>
      </body>
    </html>
  );
}
```

**`app/page.tsx`**
```typescript
"use client";
import { CopilotSidebar } from "@copilotkit/react-ui";

export default function Home() {
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
          </div>
        </section>
      </main>
    </CopilotSidebar>
  );
}
```

**`tailwind.config.ts`** - Add neon color scheme:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: "#00f0ff",
          purple: "#b026ff",
          pink: "#ff2d95",
        },
      },
    },
  },
  plugins: [],
};
export default config;
```

### Step 4: Deploy to Vercel
```bash
git add . && git commit -m "Add CopilotKit frontend" && git push
# Vercel auto-deploys from GitHub
```

### Step 5: Test
- Open Vercel URL
- Sidebar should open automatically
- Type "Find me marketing jobs" → Should return real jobs from Railway backend
- Type "Tell me about Team Liquid" → Should return company info

---

## PHASE 3: Three.js Esports Arena Hero

### Install
```bash
npm install three @react-three/fiber @react-three/drei @react-three/postprocessing
```

### Create Files

**`app/components/GameHero/index.tsx`**
```typescript
"use client";
import dynamic from "next/dynamic";
import { Suspense, useState, useEffect } from "react";

const GameHeroCanvas = dynamic(() => import("./GameHeroCanvas"), { ssr: false });

function HeroFallback() {
  return (
    <div className="h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
      <h1 className="text-6xl font-bold text-white">EsportsJobs.quest</h1>
    </div>
  );
}

export function GameHero() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (isMobile) return <HeroFallback />;

  return (
    <Suspense fallback={<HeroFallback />}>
      <GameHeroCanvas />
    </Suspense>
  );
}
```

**`app/components/GameHero/GameHeroCanvas.tsx`**
```typescript
"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { EsportsArena } from "./EsportsArena";

export default function GameHeroCanvas() {
  return (
    <div className="h-screen w-full">
      <Canvas shadows frameloop="demand" dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 5, 20]} fov={60} />
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 10, 0]} intensity={1} color="#00f0ff" />
        <pointLight position={[-10, 5, 5]} intensity={0.5} color="#b026ff" />
        <pointLight position={[10, 5, 5]} intensity={0.5} color="#ff2d95" />

        <EsportsArena />

        <EffectComposer>
          <Bloom luminanceThreshold={0.2} intensity={1.5} />
        </EffectComposer>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
```

**`app/components/GameHero/EsportsArena.tsx`**
```typescript
"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Cylinder, Ring, Text } from "@react-three/drei";
import * as THREE from "three";

export function EsportsArena() {
  const stageRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (stageRef.current) {
      stageRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group ref={stageRef}>
      {/* Main Stage Platform */}
      <Cylinder args={[8, 10, 1, 32]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
      </Cylinder>

      {/* Neon Ring */}
      <Ring args={[9, 9.5, 64]} position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#00f0ff" />
      </Ring>

      {/* LED Screens */}
      {[0, 1, 2, 3, 4].map((i) => (
        <Box
          key={i}
          args={[4, 2.5, 0.1]}
          position={[
            Math.cos((i * Math.PI * 2) / 5) * 12,
            4,
            Math.sin((i * Math.PI * 2) / 5) * 12,
          ]}
          rotation={[0, -(i * Math.PI * 2) / 5 + Math.PI, 0]}
        >
          <meshStandardMaterial color="#b026ff" emissive="#b026ff" emissiveIntensity={0.5} />
        </Box>
      ))}

      {/* Center Text */}
      <Text
        position={[0, 3, 0]}
        fontSize={1.5}
        color="#00f0ff"
        anchorX="center"
        anchorY="middle"
      >
        ESPORTS JOBS
      </Text>

      {/* Crowd Particles - simplified */}
      {Array.from({ length: 100 }).map((_, i) => (
        <Box
          key={i}
          args={[0.3, 0.6, 0.3]}
          position={[
            (Math.random() - 0.5) * 30,
            0.3,
            (Math.random() - 0.5) * 30 - 15,
          ]}
        >
          <meshStandardMaterial color={Math.random() > 0.5 ? "#00f0ff" : "#b026ff"} />
        </Box>
      ))}
    </group>
  );
}
```

### Update `app/page.tsx` to include hero:
```typescript
"use client";
import { CopilotSidebar } from "@copilotkit/react-ui";
import { GameHero } from "./components/GameHero";

export default function Home() {
  return (
    <CopilotSidebar defaultOpen={true} /* ... same config ... */>
      <main>
        <GameHero />
      </main>
    </CopilotSidebar>
  );
}
```

---

## PHASE 4: Hume Voice Integration

### Get Credentials
1. Go to https://platform.hume.ai
2. Create EVI configuration
3. Set CLM URL: `https://esports-v2-agent-production.up.railway.app/chat/completions`
4. Set CLM auth: `Bearer esports-clm-secret-2025`
5. Copy API Key, Secret Key, Config ID

### Install
```bash
npm install hume @humeai/voice-react
```

### Environment Variables (Vercel)
```
HUME_API_KEY=xxx
HUME_SECRET_KEY=xxx
NEXT_PUBLIC_HUME_CONFIG_ID=xxx
```

### Create Files

**`app/api/hume-token/route.ts`**
```typescript
import { fetchAccessToken } from "hume";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const accessToken = await fetchAccessToken({
      apiKey: process.env.HUME_API_KEY!,
      secretKey: process.env.HUME_SECRET_KEY!,
    });
    return NextResponse.json({ accessToken });
  } catch (error) {
    return NextResponse.json({ error: "Failed to get token" }, { status: 500 });
  }
}
```

**`app/components/VoiceProvider.tsx`**
```typescript
"use client";
import { VoiceProvider as HumeVoiceProvider } from "@humeai/voice-react";
import { useEffect, useState } from "react";

export function VoiceProvider({ children }: { children: React.ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/hume-token")
      .then((res) => res.json())
      .then((data) => setAccessToken(data.accessToken));
  }, []);

  if (!accessToken) return <>{children}</>;

  return (
    <HumeVoiceProvider
      auth={{ type: "accessToken", value: accessToken }}
      configId={process.env.NEXT_PUBLIC_HUME_CONFIG_ID}
    >
      {children}
    </HumeVoiceProvider>
  );
}
```

**`app/components/VoiceButton.tsx`**
```typescript
"use client";
import { useVoice } from "@humeai/voice-react";

export function VoiceButton() {
  const { connect, disconnect, status } = useVoice();
  const isConnected = status.value === "connected";

  return (
    <button
      onClick={isConnected ? disconnect : connect}
      className={`p-4 rounded-full ${
        isConnected ? "bg-red-500" : "bg-cyan-500"
      } text-white font-bold`}
    >
      {isConnected ? "Stop" : "Talk"}
    </button>
  );
}
```

### Update layout.tsx to wrap with VoiceProvider

---

## PHASE 5: 3D Avatar

### Get Model
- Ready Player Me: https://readyplayer.me (free GLB export)
- Or use Mixamo for animations

### Install
```bash
npm install @react-three/gltf
```

### Create Files

**`app/components/Avatar/AvatarModel.tsx`**
```typescript
"use client";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function AvatarModel({ speaking = false }) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/avatar.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (speaking) {
      actions["Talking"]?.play();
    } else {
      actions["Idle"]?.play();
    }
  }, [speaking, actions]);

  return <primitive ref={group} object={scene} scale={2} position={[0, -2, 0]} />;
}
```

### Connect to Hume expressions for lip sync

---

## ENVIRONMENT VARIABLES SUMMARY

### Railway (Already Set)
```
CLM_AUTH_SECRET=esports-clm-secret-2025
```

### Vercel (Set These)
```
HUME_API_KEY=xxx
HUME_SECRET_KEY=xxx
NEXT_PUBLIC_HUME_CONFIG_ID=xxx
```

---

## FILE STRUCTURE (Final)

```
esportsjobs.quest-v2/
├── agent/                          # ✅ Phase 1 - Railway
│   ├── main.py
│   ├── requirements.txt
│   ├── tools/
│   │   ├── job_search.py
│   │   └── company_lookup.py
│   └── railway.json
│
├── app/                            # Phases 2-5 - Vercel
│   ├── api/
│   │   ├── copilotkit/route.ts    # Phase 2
│   │   └── hume-token/route.ts    # Phase 4
│   ├── components/
│   │   ├── GameHero/              # Phase 3
│   │   │   ├── index.tsx
│   │   │   ├── GameHeroCanvas.tsx
│   │   │   └── EsportsArena.tsx
│   │   ├── VoiceProvider.tsx      # Phase 4
│   │   ├── VoiceButton.tsx        # Phase 4
│   │   └── Avatar/                # Phase 5
│   │       └── AvatarModel.tsx
│   ├── providers/
│   │   └── CopilotProvider.tsx    # Phase 2
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── public/
│   └── avatar.glb                 # Phase 5
│
├── package.json
├── tailwind.config.ts
├── next.config.ts
├── cloud.md
└── MOONSHOT_RESTART.md
```

---

## QUICK TEST COMMANDS

```bash
# Backend health
curl https://esports-v2-agent-production.up.railway.app/health

# Backend chat
curl -X POST https://esports-v2-agent-production.up.railway.app/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer esports-clm-secret-2025" \
  -d '{"messages":[{"role":"user","content":"Find marketing jobs"}],"stream":false}'

# CopilotKit actions list
curl https://esports-v2-agent-production.up.railway.app/copilotkit/
```

---

## RESTART PROMPT FOR NEW SESSION

```
You are continuing the esportsjobs.quest-v2 rebuild.

COMPLETED:
- Phase 1: Backend agent on Railway (https://esports-v2-agent-production.up.railway.app)
- Auth: Bearer esports-clm-secret-2025
- 4 working actions: search_jobs, lookup_company, get_job_categories, get_job_countries

START NOW:
- Phase 2: CopilotKit Frontend

REPO: /Users/dankeegan/esportsjobs.quest-v2
GITHUB: https://github.com/Londondannyboy/esportsjobs.quest-v2

Read MOONSHOT_RESTART.md for complete implementation details.
Execute Phase 2 step by step. Create Next.js app, install CopilotKit, create the exact files specified.
Deploy to Vercel when Phase 2 complete, then continue to Phase 3 (Three.js).
```

---

*This document contains everything needed to continue the build from any point.*
