import Link from 'next/link'

interface Article {
  title: string
  href: string
  category?: string
}

interface Guide {
  title: string
  href: string
  icon?: string
}

interface SidebarPanelsProps {
  showPopularArticles?: boolean
  showGuides?: boolean
  showRelatedJobs?: boolean
  showPostJob?: boolean
  popularArticles?: Article[]
  guides?: Guide[]
  relatedJobsHref?: string
  className?: string
}

const defaultArticles: Article[] = [
  { title: 'How to Get Into Esports', href: '/how-to-get-into-esports', category: 'Guide' },
  { title: 'Esports Salary Guide UK', href: '/esports-salary-guide-uk', category: 'Salary' },
  { title: 'Entry Level Esports Jobs', href: '/entry-level-esports-jobs-uk', category: 'Jobs' },
]

const defaultGuides: Guide[] = [
  { title: 'Browse All Jobs', href: '/esports-jobs', icon: '🎮' },
  { title: 'Career Paths', href: '/esports-careers', icon: '🚀' },
  { title: 'Top Companies', href: '/top-esports-companies-uk', icon: '🏢' },
]

export function SidebarPanels({
  showPopularArticles = true,
  showGuides = true,
  showRelatedJobs = false,
  showPostJob = true,
  popularArticles = defaultArticles,
  guides = defaultGuides,
  relatedJobsHref,
  className = "",
}: SidebarPanelsProps) {
  return (
    <div className={`space-y-5 ${className}`}>
      {/* Popular Articles - Esports themed */}
      {showPopularArticles && (
        <div className="bg-gray-900/80 rounded-xl border border-gray-700 p-5">
          <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
            <span className="text-lg">📚</span>
            Popular Guides
          </h3>
          <div className="space-y-3">
            {popularArticles.map((article, index) => (
              <Link
                key={index}
                href={article.href}
                className="block group"
              >
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded bg-gray-800 text-cyan-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors leading-tight">
                      {article.title}
                    </p>
                    {article.category && (
                      <span className="text-xs text-gray-500">{article.category}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Quick Tools - Esports themed */}
      {showGuides && (
        <div className="bg-gray-900/80 rounded-xl border border-gray-700 p-5">
          <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
            <span className="text-lg">⚡</span>
            Quick Links
          </h3>
          <div className="space-y-2">
            {guides.map((guide, index) => (
              <Link
                key={index}
                href={guide.href}
                className="flex items-center gap-2 p-2 rounded-lg bg-gray-800/50 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30 transition-all group"
              >
                <span className="text-base">{guide.icon || '📖'}</span>
                <span className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors">
                  {guide.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Related Jobs - Esports themed */}
      {showRelatedJobs && relatedJobsHref && (
        <Link
          href={relatedJobsHref}
          className="block bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-xl p-5 border border-purple-500/30 hover:border-purple-400/50 transition-all group"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">🎯</span>
            <h3 className="text-base font-bold text-white">More Jobs</h3>
          </div>
          <p className="text-sm text-gray-400 mb-3">
            Browse all esports opportunities
          </p>
          <span className="text-xs font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors flex items-center gap-1">
            View all jobs →
          </span>
        </Link>
      )}

      {/* Post a Job CTA - Esports themed */}
      {showPostJob && (
        <div className="bg-gradient-to-br from-cyan-600 to-purple-600 rounded-xl p-5 text-white border border-cyan-500/30">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">🎮</span>
            <h3 className="text-base font-bold">Hiring Gamers?</h3>
          </div>
          <p className="text-sm text-cyan-100 mb-4">
            Post your esports role and reach passionate gaming talent.
          </p>
          <Link
            href="/contact"
            className="block w-full text-center px-4 py-2.5 bg-white text-gray-900 font-bold rounded-lg hover:bg-cyan-50 transition-colors text-sm"
          >
            Post a Job
          </Link>
        </div>
      )}
    </div>
  )
}
