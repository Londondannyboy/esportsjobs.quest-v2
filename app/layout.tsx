import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { CopilotProvider } from "./providers/CopilotProvider";
import { GlobalCopilotUI } from "./components/GlobalCopilotUI";
import { HlsVideoInit } from "./components/HlsVideoInit";
import "@copilotkit/react-ui/styles.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// Site-wide schema - page-specific schemas (FAQPage, BreadcrumbList) are in individual pages
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://mvp.actor/#website",
      name: "MVP Actor",
      alternateName: ["MVP Actor", "Go MVP Quest"],
      url: "https://mvp.actor",
      description: "AI-powered career platform for gaming and esports professionals. Build your profile, connect with coaches, and find your perfect role in the industry.",
      publisher: {
        "@id": "https://mvp.actor/#organization"
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://mvp.actor/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://mvp.actor/#organization",
      name: "MVP Actor",
      alternateName: ["MVP Actor", "Go MVP Quest"],
      url: "https://mvp.actor",
      logo: {
        "@type": "ImageObject",
        "@id": "https://mvp.actor/#logo",
        url: "https://mvp.actor/web-app-manifest-512x512.png",
        contentUrl: "https://mvp.actor/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        caption: "MVP Actor"
      },
      image: {
        "@id": "https://mvp.actor/#logo"
      },
      description: "AI-powered career platform helping gaming and esports professionals build their profile, connect with coaches, and land their dream roles.",
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Australia" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "Germany" }
      ],
      knowsAbout: [
        "Career Development",
        "Gaming Jobs",
        "Esports Careers",
        "Career Coaching",
        "Professional Networking",
        "AI Career Guidance",
        "Job Matching"
      ],
      founder: {
        "@id": "https://mvp.actor/#dankeegan"
      },
      employee: {
        "@id": "https://mvp.actor/#dankeegan"
      },
    },
    {
      "@type": "Person",
      "@id": "https://mvp.actor/#dankeegan",
      name: "Dan Keegan",
      jobTitle: "Founder",
      description: "Esports and video games industry professional with over 20 years of experience in competitive gaming, esports operations, and talent acquisition.",
      image: {
        "@type": "ImageObject",
        url: "https://mvp.actor/dan-keegan.webp",
        width: 400,
        height: 400
      },
      worksFor: {
        "@id": "https://mvp.actor/#organization"
      },
      knowsAbout: [
        "Esports",
        "Video Games Industry",
        "Career Development",
        "Gaming Careers",
        "Competitive Gaming",
        "Talent Acquisition"
      ],
      expertise: "20+ years in video games and esports industry"
    },
  ],
};

export const metadata: Metadata = {
  title: "MVP Actor | AI Career Platform for Gaming & Esports",
  description:
    "Build your gaming career with AI. MVP Actor helps you discover your strengths, connect with coaches, and find your perfect role in esports and gaming. Your career journey starts here.",
  authors: [{ name: "Dan Keegan", url: "https://mvp.actor" }],
  keywords: [
    "gaming careers",
    "esports jobs",
    "career coaching",
    "AI career platform",
    "gaming job board",
    "esports careers",
    "career development",
    "gaming industry",
    "professional networking",
    "career guidance",
    "job matching",
    "gaming recruitment",
  ],
  robots: "index, follow",
  openGraph: {
    title: "MVP Actor | AI Career Platform for Gaming & Esports",
    description:
      "Build your gaming career with AI. Discover your strengths, connect with coaches, and find your perfect role in esports and gaming.",
    siteName: "MVP Actor",
    locale: "en",
    images: [
      {
        url: "https://mvp.actor/og-image.png",
        width: 1200,
        height: 630,
        alt: "MVP Actor - AI Career Platform for Gaming & Esports",
        type: "image/png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP Actor | AI Career Platform for Gaming & Esports",
    description:
      "Build your gaming career with AI. Discover your strengths, connect with coaches, and find your perfect role.",
    images: ["https://mvp.actor/og-image.png"],
  },
  appleWebApp: {
    title: "MVP Actor",
  },
  alternates: {
    canonical: "https://mvp.actor",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Critical preconnects - establish early connections */}
        <link rel="preconnect" href="https://image.mux.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://stream.mux.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://image.mux.com" />
        <link rel="dns-prefetch" href="https://stream.mux.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {/* Google Analytics - deferred to reduce TBT */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YZQVYF6Q3C"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YZQVYF6Q3C');
          `}
        </Script>
        <CopilotProvider>
          {children}
          <GlobalCopilotUI />
        </CopilotProvider>
        {/* Initialize HLS.js for Mux video streaming */}
        <HlsVideoInit />
      </body>
    </html>
  );
}
