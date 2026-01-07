interface CrossLinkBannerProps {
  variant: 'insurance' | 'production' | 'jobs';
}

const CROSS_LINK_CONFIG = {
  insurance: {
    title: 'Need Event Insurance?',
    description: 'Compare esports insurance quotes from UK specialists',
    cta: 'Get Quotes',
    href: 'https://esportsevent.quest',
    gradient: 'from-cyan-900/30 to-purple-900/30',
    border: 'border-cyan-500/20 hover:border-cyan-500/50',
  },
  production: {
    title: 'Need Production Services?',
    description: 'Professional broadcast and event production for esports',
    cta: 'Learn More',
    href: 'https://esportsproduction.quest',
    gradient: 'from-purple-900/30 to-pink-900/30',
    border: 'border-purple-500/20 hover:border-purple-500/50',
  },
  jobs: {
    title: 'Hiring in Esports?',
    description: 'Post jobs to reach gaming industry professionals',
    cta: 'Post a Job',
    href: 'https://esportsjobs.quest/contact',
    gradient: 'from-green-900/30 to-cyan-900/30',
    border: 'border-green-500/20 hover:border-green-500/50',
  },
};

export function CrossLinkBanner({ variant }: CrossLinkBannerProps) {
  const config = CROSS_LINK_CONFIG[variant];

  return (
    <a
      href={config.href}
      className={`
        block p-6 rounded-xl bg-gradient-to-r ${config.gradient}
        border ${config.border} transition-all group
        hover:shadow-lg hover:shadow-cyan-500/10
      `}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
            {config.title}
          </h3>
          <p className="text-sm text-gray-400">{config.description}</p>
        </div>
        <span className="text-cyan-400 font-medium whitespace-nowrap flex items-center gap-1">
          {config.cta}
          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </span>
      </div>
    </a>
  );
}
