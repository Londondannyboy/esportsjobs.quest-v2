import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post Esports Jobs | Hire Gaming Professionals | Esports Jobs",
  description:
    "Post your esports job and reach thousands of qualified gaming professionals. Find coaches, content creators, tournament organisers, and esports talent for your organisation.",
  keywords: [
    "post esports jobs",
    "hire esports talent",
    "esports recruitment",
    "gaming job posting",
    "esports hiring",
  ],
  openGraph: {
    title: "Post Esports Jobs | Hire Gaming Professionals",
    description:
      "Post your esports job and reach thousands of qualified gaming professionals.",
    url: "https://mvp.actor/contact",
  },
  alternates: {
    canonical: "https://mvp.actor/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
