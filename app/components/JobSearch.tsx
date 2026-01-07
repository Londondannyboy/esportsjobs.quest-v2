"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface JobSearchProps {
  initialQuery?: string;
  placeholder?: string;
  className?: string;
  size?: "normal" | "large";
}

export function JobSearch({
  initialQuery = "",
  placeholder = "Search esports jobs...",
  className = "",
  size = "large",
}: JobSearchProps) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/jobs?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push("/jobs");
    }
  };

  const inputClass =
    size === "large"
      ? "flex-1 px-6 py-4 rounded-lg bg-gray-900/80 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
      : "flex-1 px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500";

  const buttonClass =
    size === "large"
      ? "bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-black font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105"
      : "bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 px-4 rounded-lg transition-all";

  return (
    <form onSubmit={handleSubmit} className={`max-w-2xl mx-auto ${className}`}>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={inputClass}
        />
        <button type="submit" className={buttonClass}>
          Search Jobs
        </button>
      </div>
    </form>
  );
}

// Popular search links component
export function PopularSearches() {
  const searches = [
    { label: "Coaching", query: "coach" },
    { label: "Marketing", query: "marketing" },
    { label: "Production", query: "production" },
    { label: "Content", query: "content" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-400">
      <span>Popular:</span>
      {searches.map((search, idx) => (
        <span key={search.query}>
          <a
            href={`/jobs?q=${search.query}`}
            className="text-cyan-400 hover:underline"
          >
            {search.label}
          </a>
          {idx < searches.length - 1 && <span className="ml-3">•</span>}
        </span>
      ))}
    </div>
  );
}
