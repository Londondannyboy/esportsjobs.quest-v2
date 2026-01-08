'use client';

interface JobMatchCardProps {
  jobId: string;
  jobTitle: string;
  jobCompany: string;
  jobLocation?: string;
  matchScore: number;
  matchedSkills: string[];
  missingSkills: string[];
  bonusSkills: string[];
  recommendation: 'strong_match' | 'good_match' | 'partial_match' | 'stretch';
  recommendationText: string;
  onClose?: () => void;
}

const RECOMMENDATION_CONFIG = {
  strong_match: {
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/20',
    borderColor: 'border-green-500/50',
    icon: '🎯',
    label: 'Strong Match',
  },
  good_match: {
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-500/20',
    borderColor: 'border-cyan-500/50',
    icon: '✅',
    label: 'Good Match',
  },
  partial_match: {
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-500/20',
    borderColor: 'border-yellow-500/50',
    icon: '📊',
    label: 'Partial Match',
  },
  stretch: {
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-500/20',
    borderColor: 'border-red-500/50',
    icon: '🚀',
    label: 'Stretch Role',
  },
};

export function JobMatchCard({
  jobTitle,
  jobCompany,
  jobLocation,
  matchScore,
  matchedSkills,
  missingSkills,
  bonusSkills,
  recommendation,
  recommendationText,
  onClose,
}: JobMatchCardProps) {
  const config = RECOMMENDATION_CONFIG[recommendation];

  return (
    <div className={`rounded-xl border ${config.borderColor} ${config.bgColor} p-6 max-w-md`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-sm text-gray-400 mb-1">Job Assessment</div>
          <h3 className="text-lg font-bold text-white">{jobTitle}</h3>
          <div className="text-sm text-gray-300">{jobCompany}</div>
          {jobLocation && <div className="text-xs text-gray-400">{jobLocation}</div>}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        )}
      </div>

      {/* Score Circle */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-700"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke={`url(#scoreGradient-${recommendation})`}
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={`${(matchScore / 100) * 351.8} 351.8`}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id={`scoreGradient-${recommendation}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={recommendation === 'strong_match' ? '#22c55e' : recommendation === 'good_match' ? '#22d3ee' : recommendation === 'partial_match' ? '#eab308' : '#ef4444'} />
                <stop offset="100%" stopColor={recommendation === 'strong_match' ? '#10b981' : recommendation === 'good_match' ? '#3b82f6' : recommendation === 'partial_match' ? '#f97316' : '#ec4899'} />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-white">{matchScore}%</span>
            <span className="text-xs text-gray-400">Match</span>
          </div>
        </div>
      </div>

      {/* Recommendation Badge */}
      <div className="flex items-center justify-center mb-4">
        <div className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${config.color} text-white font-medium`}>
          <span>{config.icon}</span>
          <span>{config.label}</span>
        </div>
      </div>

      {/* Recommendation Text */}
      <p className="text-center text-gray-300 mb-6">{recommendationText}</p>

      {/* Skills Breakdown */}
      <div className="space-y-4">
        {/* Matched Skills */}
        {matchedSkills.length > 0 && (
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-green-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Matching Skills ({matchedSkills.length})
            </div>
            <div className="flex flex-wrap gap-2">
              {matchedSkills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-green-500/20 border border-green-500/30 rounded-full text-green-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Missing Skills */}
        {missingSkills.length > 0 && (
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-red-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              Skills to Develop ({missingSkills.length})
            </div>
            <div className="flex flex-wrap gap-2">
              {missingSkills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-red-500/20 border border-red-500/30 rounded-full text-red-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Bonus Skills */}
        {bonusSkills.length > 0 && (
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-purple-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              Bonus Skills ({bonusSkills.length})
            </div>
            <div className="flex flex-wrap gap-2">
              {bonusSkills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Inline version for chat messages
export function JobMatchInline({
  matchScore,
  recommendation,
  matchedSkills,
  missingSkills,
}: {
  matchScore: number;
  recommendation: string;
  matchedSkills: string[];
  missingSkills: string[];
}) {
  const config = RECOMMENDATION_CONFIG[recommendation as keyof typeof RECOMMENDATION_CONFIG] || RECOMMENDATION_CONFIG.partial_match;

  return (
    <div className={`rounded-lg border ${config.borderColor} ${config.bgColor} p-4`}>
      <div className="flex items-center gap-4">
        {/* Mini score */}
        <div className="relative w-16 h-16 flex-shrink-0">
          <svg className="w-16 h-16 transform -rotate-90">
            <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-gray-700" />
            <circle
              cx="32" cy="32" r="28"
              stroke={recommendation === 'strong_match' ? '#22c55e' : recommendation === 'good_match' ? '#22d3ee' : recommendation === 'partial_match' ? '#eab308' : '#ef4444'}
              strokeWidth="4"
              fill="transparent"
              strokeDasharray={`${(matchScore / 100) * 175.9} 175.9`}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
            {matchScore}%
          </span>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span>{config.icon}</span>
            <span className="font-medium text-white">{config.label}</span>
          </div>
          <div className="text-xs text-gray-400">
            {matchedSkills.length} matched, {missingSkills.length} to develop
          </div>
        </div>
      </div>
    </div>
  );
}
