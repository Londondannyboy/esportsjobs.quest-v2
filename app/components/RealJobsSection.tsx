// Server component - no "use client" needed
import Link from "next/link";
import { esportsJobs, EsportsJob } from "../../lib/jobs-data";

interface RealJobsSectionProps {
  title?: string;
  subtitle?: string;
  filter?: {
    category?: EsportsJob["category"];
    country?: string;
    type?: EsportsJob["type"];
  };
  limit?: number;
  showViewAll?: boolean;
}

export function RealJobsSection({
  title = "Current Esports Jobs",
  subtitle,
  filter,
  limit = 6,
  showViewAll = true,
}: RealJobsSectionProps) {
  // Filter jobs based on criteria
  let filteredJobs = [...esportsJobs];

  if (filter?.category) {
    filteredJobs = filteredJobs.filter((job) => job.category === filter.category);
  }
  if (filter?.country) {
    filteredJobs = filteredJobs.filter((job) =>
      job.country.toLowerCase().includes(filter.country!.toLowerCase())
    );
  }
  if (filter?.type) {
    filteredJobs = filteredJobs.filter((job) => job.type === filter.type);
  }

  // Limit results
  const displayJobs = filteredJobs.slice(0, limit);

  if (displayJobs.length === 0) {
    return (
      <section className="py-12 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 text-center">
            <p className="text-slate-400 mb-4">
              No jobs currently match this filter. Check back soon or browse all available positions.
            </p>
            <Link
              href="/esports-jobs"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
            >
              View All Jobs →
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            {subtitle && <p className="text-slate-400 text-sm mt-1">{subtitle}</p>}
          </div>
          <span className="px-3 py-1 bg-green-500/20 border border-green-500/50 text-green-400 text-sm rounded-full">
            {filteredJobs.length} {filteredJobs.length === 1 ? "job" : "jobs"} available
          </span>
        </div>

        {/* Transparency notice */}
        <div className="mb-6 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
          <p className="text-amber-300 text-xs">
            These jobs are aggregated from public sources. Click to apply directly with the employer.
          </p>
        </div>

        <div className="grid gap-4">
          {displayJobs.map((job) => (
            <a
              key={job.id}
              href={job.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all group"
            >
              <div className="flex flex-col md:flex-row">
                {/* Hero Image */}
                <div className="relative w-full md:w-40 h-28 md:h-auto flex-shrink-0">
                  <img
                    src={job.heroImage}
                    alt={job.heroImageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-800/80 md:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent md:hidden" />
                </div>

                {/* Content */}
                <div className="flex-1 p-4 flex flex-col md:flex-row md:items-center gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {job.title}
                      </h3>
                      <span
                        className={`px-2 py-0.5 text-xs rounded border ${
                          job.type === "Full-time"
                            ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-400"
                            : job.type === "Part-time"
                            ? "bg-purple-500/20 border-purple-500/50 text-purple-400"
                            : job.type === "Intern"
                            ? "bg-green-500/20 border-green-500/50 text-green-400"
                            : "bg-amber-500/20 border-amber-500/50 text-amber-400"
                        }`}
                      >
                        {job.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-slate-400 text-sm mb-2">
                      <span className="font-medium text-cyan-400">{job.company}</span>
                      <span>📍 {job.location}</span>
                      {job.salary && <span>💰 {job.salary}</span>}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.slice(0, 3).map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-xs rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center gap-1 bg-cyan-500 text-black font-bold py-2 px-4 rounded text-sm">
                      Apply →
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {showViewAll && filteredJobs.length > limit && (
          <div className="text-center mt-6">
            <Link
              href="/esports-jobs"
              className="inline-flex items-center gap-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/20 font-medium py-2 px-6 rounded-lg transition-all"
            >
              View All {filteredJobs.length} Jobs →
            </Link>
          </div>
        )}

        {showViewAll && filteredJobs.length <= limit && (
          <div className="text-center mt-6">
            <Link
              href="/esports-jobs"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
            >
              Browse All Esports Jobs →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

// Helper to get job counts for stats
export function getJobStats() {
  return {
    total: esportsJobs.length,
    coaching: esportsJobs.filter((j) => j.category === "coaching").length,
    marketing: esportsJobs.filter((j) => j.category === "marketing").length,
    production: esportsJobs.filter((j) => j.category === "production").length,
    management: esportsJobs.filter((j) => j.category === "management").length,
    content: esportsJobs.filter((j) => j.category === "content").length,
    operations: esportsJobs.filter((j) => j.category === "operations").length,
    fullTime: esportsJobs.filter((j) => j.type === "Full-time").length,
    partTime: esportsJobs.filter((j) => j.type === "Part-time").length,
    uk: esportsJobs.filter((j) => j.country === "United Kingdom").length,
    usa: esportsJobs.filter((j) => j.country === "United States").length,
    remote: esportsJobs.filter((j) => j.location.toLowerCase().includes("remote")).length,
  };
}
