import Link from "next/link";
import { esportsJobs, EsportsJob } from "../../lib/jobs-data";

interface JobEmbedProps {
  category?: EsportsJob["category"];
  limit?: number;
  title?: string;
  showViewAll?: boolean;
}

// Get jobs by category or return featured jobs
function getRelevantJobs(category?: EsportsJob["category"], limit: number = 3): EsportsJob[] {
  if (category) {
    const categoryJobs = esportsJobs.filter((job) => job.category === category);
    return categoryJobs.length > 0 ? categoryJobs.slice(0, limit) : esportsJobs.slice(0, limit);
  }
  return esportsJobs.slice(0, limit);
}

export function JobEmbed({ category, limit = 3, title, showViewAll = true }: JobEmbedProps) {
  const jobs = getRelevantJobs(category, limit);
  const defaultTitle = category
    ? `Current ${category.charAt(0).toUpperCase() + category.slice(1)} Jobs Hiring Now`
    : "Esports Jobs Hiring Now";

  return (
    <div className="my-8 bg-gradient-to-r from-violet-900/20 to-cyan-900/20 rounded-2xl p-6 border border-violet-500/30">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white">{title || defaultTitle}</h3>
        {showViewAll && (
          <Link
            href="/esports-jobs"
            className="text-sm text-violet-400 hover:text-violet-300 transition-colors"
          >
            View all jobs →
          </Link>
        )}
      </div>

      <div className="grid gap-4">
        {jobs.map((job) => (
          <Link
            key={job.id}
            href={`/job/${job.id}`}
            className="flex items-center gap-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={job.heroImage}
                alt={job.company}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-white group-hover:text-violet-400 transition-colors truncate">
                {job.title}
              </h4>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span>{job.company}</span>
                <span>•</span>
                <span>{job.location}</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs font-medium rounded-full">
                {job.type}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-700">
        <p className="text-sm text-slate-400">
          These positions are actively hiring. Apply directly through our job board.
        </p>
      </div>
    </div>
  );
}

// Compact version for inline embedding
export function JobEmbedCompact({ category, limit = 2 }: { category?: EsportsJob["category"]; limit?: number }) {
  const jobs = getRelevantJobs(category, limit);

  return (
    <div className="my-6 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
      <p className="text-sm font-medium text-violet-400 mb-3">Related jobs hiring now:</p>
      <div className="space-y-2">
        {jobs.map((job) => (
          <Link
            key={job.id}
            href={`/job/${job.id}`}
            className="flex items-center justify-between text-sm hover:bg-slate-700/50 rounded-lg p-2 -mx-2 transition-colors"
          >
            <span className="text-white">{job.title}</span>
            <span className="text-slate-400">{job.company}</span>
          </Link>
        ))}
      </div>
      <Link
        href="/esports-jobs"
        className="block mt-3 text-xs text-violet-400 hover:text-violet-300"
      >
        Browse all esports jobs →
      </Link>
    </div>
  );
}

// Entry level specific embed
export function EntryLevelJobEmbed({ limit = 3 }: { limit?: number }) {
  // Filter for intern/entry-level positions
  const entryLevelJobs = esportsJobs.filter(
    (job) => job.type === "Intern" || job.title.toLowerCase().includes("junior") || job.title.toLowerCase().includes("assistant")
  );
  const jobs = entryLevelJobs.length > 0 ? entryLevelJobs.slice(0, limit) : esportsJobs.slice(0, limit);

  return (
    <div className="my-8 bg-gradient-to-r from-green-900/20 to-cyan-900/20 rounded-2xl p-6 border border-green-500/30">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white">Entry-Level Esports Jobs</h3>
        <Link
          href="/entry-level-esports-jobs-uk"
          className="text-sm text-green-400 hover:text-green-300 transition-colors"
        >
          View all entry-level →
        </Link>
      </div>

      <div className="grid gap-4">
        {jobs.map((job) => (
          <Link
            key={job.id}
            href={`/job/${job.id}`}
            className="flex items-center gap-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-green-500/50 transition-all group"
          >
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-white group-hover:text-green-400 transition-colors">
                {job.title}
              </h4>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span>{job.company}</span>
                <span>•</span>
                <span>{job.location}</span>
              </div>
            </div>
            <span className="px-3 py-1 bg-green-600/20 text-green-400 text-xs font-medium rounded-full">
              {job.type}
            </span>
          </Link>
        ))}
      </div>

      <p className="mt-4 text-sm text-slate-400">
        Perfect for those starting their esports career. No extensive experience required.
      </p>
    </div>
  );
}
