"use client";

import { useState } from "react";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";
import { CalendlyInline } from "../components/Calendly";

// Mux streaming for optimal video delivery
const MUX_PLAYBACK_ID = "A6OZmZy02Y00K4ZPyHuyfTVXoauVjLhiHlbR2bLqtBywY";

const jobTypes = [
  "Pro Player / Athlete",
  "Coach / Analyst",
  "Content Creator / Streamer",
  "Caster / Broadcast Talent",
  "Event / Tournament Organiser",
  "Marketing / Business",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    jobType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          jobType: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Navigation */}
      <div className="sticky top-0 z-50">
        <UnifiedHeader
          activeSite="jobs"
          siteNavItems={JOBS_SITE_NAV_ITEMS}
          ctaLabel="Post a Job"
          ctaHref="/contact"
        />
      </div>

      {/* Hero Section with Video */}
      <section className="relative py-16 md:py-20">
        <div className="absolute inset-0 z-0">
          {/* Mobile: Static image */}
          <img
            src={`https://image.mux.com/${MUX_PLAYBACK_ID}/thumbnail.webp?time=4&width=800`}
            alt=""
            className="md:hidden w-full h-full object-cover opacity-30"
          />
          {/* Desktop: Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={`https://image.mux.com/${MUX_PLAYBACK_ID}/thumbnail.webp?time=4`}
            className="hidden md:block w-full h-full object-cover opacity-30"
          >
            <source src={`https://stream.mux.com/${MUX_PLAYBACK_ID}.m3u8`} type="application/x-mpegURL" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Hire <span className="text-cyan-400">Esports Talent</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with our esports recruitment team. Book a call or submit your job posting below.
          </p>
        </div>
      </section>

      {/* Book a Call Section with Calendly - FIRST */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              <span className="text-cyan-400">Book a Call</span> With Dan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Free 30-minute discovery call. Discuss your hiring needs and get expert advice on building your esports team.
            </p>
          </div>

          {/* Calendly Embed */}
          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-4">
              <h3 className="text-lg font-bold text-white">Book a Discovery Call</h3>
              <p className="text-cyan-100 text-sm">Pick a time that works for you. No obligation, just a friendly chat about esports recruitment.</p>
            </div>
            <CalendlyInline height={650} className="bg-gray-900" />
          </div>

          {/* Founder Info */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <img
              src="/dan-keegan.webp"
              alt="Dan Keegan - Esports Industry Expert"
              className="w-16 h-16 rounded-full object-cover border-2 border-cyan-500/50"
            />
            <div>
              <p className="text-gray-400 text-sm">You'll be speaking with</p>
              <p className="text-white font-bold">Dan Keegan</p>
              <p className="text-cyan-400 text-sm">Founder & 20+ years in gaming</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section - SECOND */}
      <section className="py-12 md:py-16 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Or <span className="text-purple-400">Submit a Job</span> Posting
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tell us about your role and we'll get back to you within 24 hours.
            </p>
          </div>

          {/* Form */}
          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-6">🎮</div>
                <h2 className="text-3xl font-bold text-cyan-400 mb-4">GG! Message Received</h2>
                <p className="text-gray-300 mb-8">
                  Thanks for getting in touch. We will review your job posting
                  and get back to you within 24 hours.
                </p>
                <Link
                  href="/"
                  className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-8 rounded-lg transition-all"
                >
                  Back to Esports Jobs
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company / Organisation *
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      placeholder="Your esports organisation"
                    />
                  </div>
                  <div>
                    <label htmlFor="jobType" className="block text-sm font-medium text-gray-300 mb-2">
                      Job Category
                    </label>
                    <select
                      id="jobType"
                      value={formData.jobType}
                      onChange={(e) => setFormData({ ...formData, jobType: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    >
                      <option value="">Select a category</option>
                      {jobTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Job Details
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                    placeholder="E.g., We're looking for a Valorant Coach for our professional team based in London. The role involves developing strategies, reviewing VODs, and supporting our players in competitions..."
                  />
                </div>

                {status === "error" && (
                  <div className="bg-red-900/50 border border-red-500/50 rounded-lg p-4 text-red-300">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-400 hover:to-purple-300 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Submit Job Posting →"
                  )}
                </button>

                <p className="text-center text-gray-500 text-sm">
                  By submitting this form, you agree to our terms. We will review your posting
                  and contact you about listing options.
                </p>

                <div className="text-center pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">
                    Prefer email? Contact us directly at{" "}
                    <a href="mailto:hello@esportsjobs.quest" className="text-cyan-400 hover:underline">
                      hello@esportsjobs.quest
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-[#0d0d15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">Targeted Reach</h3>
              <p className="text-gray-400">Your <Link href="/" className="text-cyan-400 hover:underline">esports jobs</Link> reach qualified gaming professionals actively seeking opportunities.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Review</h3>
              <p className="text-gray-400">We review all job postings within 24 hours and provide quick turnaround.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-white mb-2">Quality Candidates</h3>
              <p className="text-gray-400">Connect with passionate gaming professionals who understand the esports industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Resources */}
      <section className="py-16 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Esports Industry Resources</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <a href="https://britishesports.org" target="_blank" rel="noopener noreferrer" className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <h3 className="font-bold text-white mb-2">British Esports Federation</h3>
              <p className="text-gray-400 text-sm">The national body for esports in the UK, promoting grassroots competitions and education.</p>
            </a>
            <a href="https://ukie.org.uk" target="_blank" rel="noopener noreferrer" className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <h3 className="font-bold text-white mb-2">UKIE</h3>
              <p className="text-gray-400 text-sm">The UK games industry trade body representing over 2,000 games businesses.</p>
            </a>
            <a href="https://esic.gg" target="_blank" rel="noopener noreferrer" className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <h3 className="font-bold text-white mb-2">ESIC</h3>
              <p className="text-gray-400 text-sm">The Esports Integrity Commission ensuring fair play in competitive gaming.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <UnifiedFooter activeSite="jobs" />
    </main>
  );
}
