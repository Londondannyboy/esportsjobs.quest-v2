import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface UnifiedFooterProps {
  activeSite: 'events' | 'production' | 'jobs' | 'news';
  siteSpecificSections?: FooterSection[];
  showDisclaimer?: boolean;
  disclaimerText?: string;
}

// All pages on esportsjobs.quest for internal linking
const ESPORTS_JOBS_PAGES = {
  jobs: [
    { label: 'All Esports Jobs', href: '/esports-jobs' },
    { label: 'Esports Jobs UK', href: '/esports-jobs-uk' },
    { label: 'Gaming Jobs UK', href: '/gaming-jobs-uk' },
    { label: 'Esports Jobs London', href: '/esports-jobs-london' },
    { label: 'Remote Esports Jobs', href: '/esports-jobs-remote' },
    { label: 'Entry Level Jobs', href: '/entry-level-esports-jobs-uk' },
  ],
  careers: [
    { label: 'Esports Careers Guide', href: '/esports-careers' },
    { label: 'How to Get Into Esports', href: '/how-to-get-into-esports' },
    { label: 'Esports Coach Careers', href: '/esports-coach-careers' },
    { label: 'Esports Marketing Careers', href: '/esports-marketing-careers' },
    { label: 'Esports Analyst Careers', href: '/esports-analyst-careers' },
    { label: 'Esports Broadcaster Careers', href: '/esports-broadcaster-careers' },
  ],
  companies: [
    { label: 'Team Liquid Careers', href: '/team-liquid-careers' },
    { label: 'G2 Esports Careers', href: '/g2-esports-careers' },
    { label: 'Cloud9 Careers', href: '/cloud9-careers' },
    { label: 'Fnatic Careers', href: '/fnatic-careers' },
    { label: 'Excel Esports Careers', href: '/excel-esports-careers' },
    { label: 'Guild Esports Careers', href: '/guild-esports-careers' },
  ],
  locations: [
    { label: 'Jobs in Manchester', href: '/esports-jobs-manchester' },
    { label: 'Jobs in Birmingham', href: '/esports-jobs-birmingham' },
    { label: 'Jobs in Leeds', href: '/esports-jobs-leeds' },
    { label: 'Jobs in Edinburgh', href: '/esports-jobs-edinburgh' },
    { label: 'Jobs in Los Angeles', href: '/esports-jobs-los-angeles' },
    { label: 'Jobs in Berlin', href: '/esports-jobs-berlin' },
  ],
  global: [
    { label: 'Jobs in Singapore', href: '/esports-jobs-singapore' },
    { label: 'Jobs in Seoul', href: '/esports-jobs-seoul' },
    { label: 'Jobs in Sydney', href: '/esports-jobs-sydney' },
    { label: 'Jobs in Dubai', href: '/esports-jobs-dubai' },
    { label: 'Jobs in Saudi Arabia', href: '/esports-jobs-saudi-arabia' },
    { label: 'British Esports Jobs', href: '/british-esports-jobs' },
  ],
  agency: [
    { label: 'Esports Recruitment Agency', href: '/esports-recruitment-agency' },
    { label: 'Esports Recruiting', href: '/esports-recruiting' },
    { label: 'Gaming Recruitment Agency', href: '/gaming-recruitment-agency' },
    { label: 'Esports Agency', href: '/esports-agency' },
    { label: 'Esports Talent Agency', href: '/esports-talent-agency' },
    { label: 'Contact Us', href: '/contact' },
  ],
};

const CROSS_SITE_SECTIONS = [
  {
    title: 'Events & Insurance',
    site: 'events' as const,
    links: [
      { label: 'Esports Insurance', href: 'https://esportsevent.quest' },
      { label: 'Esports Event Insurance', href: 'https://esportsevent.quest/esports-insurance-guide' },
      { label: 'UK Esports Insurance', href: 'https://esportsevent.quest/esports-insurance-uk' },
      { label: 'Get a Quote', href: 'https://esportsevent.quest/contact' },
    ],
  },
  {
    title: 'Production Services',
    site: 'production' as const,
    links: [
      { label: 'Esports Production', href: 'https://esportsproduction.quest' },
      { label: 'Esports Production Agency', href: 'https://esportsproduction.quest/#services' },
      { label: 'Esports Production Company', href: 'https://esportsproduction.quest/esports-production-guide' },
      { label: 'Get a Quote', href: 'https://esportsproduction.quest/contact' },
    ],
  },
  {
    title: 'Jobs & Careers',
    site: 'jobs' as const,
    links: [
      { label: 'Esports Jobs', href: '/esports-jobs' },
      { label: 'Esports Jobs UK', href: '/esports-jobs-uk' },
      { label: 'Gaming Jobs UK', href: '/gaming-jobs-uk' },
      { label: 'Post a Job', href: '/contact' },
    ],
  },
  {
    title: 'News & Insights',
    site: 'news' as const,
    links: [
      { label: 'Esports News', href: 'https://esportsnews.quest' },
      { label: 'Esports Industry Updates', href: 'https://esportsnews.quest/category/industry' },
      { label: 'Esports Event Coverage', href: 'https://esportsnews.quest/category/events' },
      { label: 'Esports Career Advice', href: 'https://esportsnews.quest/category/careers' },
    ],
  },
];

const SITE_CONFIG = {
  events: {
    email: 'hello@esportsevent.quest',
    copyright: 'Esports Event Insurance UK',
  },
  production: {
    email: 'hello@esportsproduction.quest',
    copyright: 'Esports Production UK',
  },
  jobs: {
    email: 'hello@esportsjobs.quest',
    copyright: 'Esports Recruitment Agency Quest',
  },
  news: {
    email: 'hello@esportsnews.quest',
    copyright: 'Esports News UK',
  },
};

export function UnifiedFooter({
  activeSite,
  siteSpecificSections = [],
  showDisclaimer = false,
  disclaimerText,
}: UnifiedFooterProps) {
  const siteConfig = SITE_CONFIG[activeSite];

  return (
    <footer className="bg-[#050508] border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-2xl">
                EQ
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">ESPORTS QUEST</span>
                <span className="text-xs text-cyan-400 uppercase tracking-wider">
                  Events | Production | Jobs | News
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your complete esports services network. Insurance, production, careers, and news for the gaming industry.
            </p>
            <p className="text-gray-400 text-sm">
              Independent research and guidance for tournament organisers, venues, teams, and players.
            </p>
          </div>

          {/* Cross-site navigation columns */}
          {CROSS_SITE_SECTIONS.map((section) => (
            <div key={section.site}>
              <div className={`font-bold mb-4 ${activeSite === section.site ? 'text-cyan-400' : 'text-white'}`} role="heading" aria-level={2}>
                {section.title}
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                {section.links.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith('/') ? (
                      <Link href={link.href} className="hover:text-cyan-400 transition-colors">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="hover:text-cyan-400 transition-colors">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Internal Pages Section - Only for jobs site */}
        {activeSite === 'jobs' && (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8 pt-8 border-t border-gray-800">
              <div>
                <div className="font-bold text-white mb-4" role="heading" aria-level={2}>Esports Jobs</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {ESPORTS_JOBS_PAGES.jobs.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.href} className="hover:text-cyan-400 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-bold text-white mb-4" role="heading" aria-level={2}>Career Guides</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {ESPORTS_JOBS_PAGES.careers.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.href} className="hover:text-cyan-400 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-bold text-white mb-4" role="heading" aria-level={2}>Top Organisations</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {ESPORTS_JOBS_PAGES.companies.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.href} className="hover:text-cyan-400 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-bold text-white mb-4" role="heading" aria-level={2}>Jobs by Location</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {ESPORTS_JOBS_PAGES.locations.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.href} className="hover:text-cyan-400 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-bold text-white mb-4" role="heading" aria-level={2}>Global & Resources</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {ESPORTS_JOBS_PAGES.global.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.href} className="hover:text-cyan-400 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-bold text-white mb-4" role="heading" aria-level={2}>Recruitment</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {ESPORTS_JOBS_PAGES.agency.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.href} className="hover:text-cyan-400 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}

        {/* Site-specific sections if provided */}
        {siteSpecificSections.length > 0 && (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12 pt-8 border-t border-gray-800">
            {siteSpecificSections.map((section, idx) => (
              <div key={idx}>
                <div className="font-bold text-white mb-4" role="heading" aria-level={2}>{section.title}</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link href={link.href} className="hover:text-cyan-400 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Contact info */}
            <div>
              <div className="font-bold text-white mb-4" role="heading" aria-level={2}>Contact</div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>{siteConfig.email}</li>
                <li>London, United Kingdom</li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 px-4 rounded text-sm transition-all"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Legal Disclaimer */}
        {showDisclaimer && disclaimerText && (
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
              <h5 className="font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-yellow-500">Important Disclaimer</span>
              </h5>
              <p className="text-gray-400 text-sm leading-relaxed">
                {disclaimerText}
              </p>
            </div>
          </div>
        )}

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm border-t border-gray-800 pt-8">
          <p>&copy; 2025 {siteConfig.copyright}. Part of the Esports Quest network. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            {' · '}
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            {' · '}
            <a href="#" className="hover:text-gray-400">Cookie Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
