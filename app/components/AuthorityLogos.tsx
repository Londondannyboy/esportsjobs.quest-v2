import Link from 'next/link'

interface AuthorityLogosProps {
  className?: string
  variant?: 'full' | 'compact' | 'inline'
}

// Companies/orgs we work with or aggregate jobs from
const partnerLogos = [
  { name: 'Riot Games', href: 'https://www.riotgames.com' },
  { name: 'ESL', href: 'https://www.eslgaming.com' },
  { name: 'Team Liquid', href: 'https://www.teamliquid.com' },
  { name: 'Red Bull', href: 'https://www.redbull.com' },
  { name: 'Logitech', href: 'https://www.logitech.com' },
  { name: 'Razer', href: 'https://www.razer.com' },
]

// Industry bodies for E-E-A-T authority
const industryBodies = [
  { name: 'British Esports', href: 'https://britishesports.org', description: 'National body for esports in UK' },
  { name: 'ESIC', href: 'https://esic.gg', description: 'Esports Integrity Commission' },
  { name: 'UKIE', href: 'https://ukie.org.uk', description: 'UK games industry trade body' },
]

/**
 * Full authority section with logos and industry partnerships
 */
export function AuthorityLogos({ className = '', variant = 'full' }: AuthorityLogosProps) {
  if (variant === 'inline') {
    return (
      <div className={`flex flex-wrap justify-center items-center gap-8 md:gap-12 ${className}`}>
        {partnerLogos.map((company) => (
          <a
            key={company.name}
            href={company.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl font-bold text-gray-500 hover:text-cyan-400 transition-colors"
          >
            {company.name}
          </a>
        ))}
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div className={`bg-gray-900/50 rounded-xl border border-gray-700 p-5 ${className}`}>
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 text-center">
          Organisations with Esports Jobs
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {partnerLogos.slice(0, 4).map((company) => (
            <span key={company.name} className="text-sm font-medium text-gray-500">
              {company.name}
            </span>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section className={`py-16 bg-[#0d0d15] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Companies with jobs */}
        <div className="text-center mb-12">
          <p className="text-gray-400 uppercase tracking-wider text-sm mb-8">
            Organisations with current esports jobs (we aggregate public listings)
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partnerLogos.map((company) => (
              <a
                key={company.name}
                href={company.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-gray-500 hover:text-cyan-400 transition-colors"
              >
                {company.name}
              </a>
            ))}
          </div>
        </div>

        {/* Industry Bodies - E-E-A-T Authority */}
        <div className="border-t border-gray-800 pt-12">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white mb-2">
              Trusted Industry Sources
            </h3>
            <p className="text-gray-400 text-sm">
              We reference and link to authoritative esports organisations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {industryBodies.map((body) => (
              <a
                key={body.name}
                href={body.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all text-center group"
              >
                <h4 className="font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {body.name}
                </h4>
                <p className="text-gray-400 text-sm">{body.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Client showcase section - highlights major partnership
 */
export function ClientShowcase({ className = '' }: { className?: string }) {
  return (
    <section className={`py-20 bg-[#0a0a0f] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by <span className="text-purple-400">Award-Winning Studios</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We partner with industry-leading esports and gaming production companies.
          </p>
        </div>

        {/* 1UP Productions Feature */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/80 to-purple-900/30 rounded-2xl p-8 border border-purple-500/30">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Logo/Brand */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <a
                  href="https://www.1upproductions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <div className="text-5xl font-black text-white mb-2 hover:text-purple-400 transition-colors">
                    1UP
                  </div>
                  <div className="text-xl text-purple-400 font-medium">PRODUCTIONS</div>
                </a>

                {/* Awards */}
                <div className="flex flex-col gap-2 mt-6">
                  <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 text-sm font-bold rounded-full border border-yellow-500/30 text-center">
                    4x Emmy Awards
                  </span>
                  <span className="px-4 py-2 bg-amber-500/20 text-amber-400 text-sm font-bold rounded-full border border-amber-500/30 text-center">
                    BAFTA Winner
                  </span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 text-sm font-bold rounded-full border border-cyan-500/30 text-center">
                    3x RTS Awards
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">
                  <a
                    href="https://www.1upproductions.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors"
                  >
                    1UP Productions — Award-Winning Esports Production Agency
                  </a>
                </h3>

                <p className="text-lg text-gray-300 mb-4">
                  <a href="https://www.1upproductions.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 font-semibold">1UP Productions</a> is one of the world's leading esports production agencies, delivering extraordinary live experiences and branded content for the biggest names in gaming and entertainment.
                </p>

                {/* Clients */}
                <div className="flex flex-wrap items-center gap-3 text-sm mb-6 p-4 bg-black/30 rounded-lg">
                  <span className="text-gray-400 font-medium">Trusted by:</span>
                  <span className="text-white font-semibold">Disney</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-white font-semibold">Netflix</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-white font-semibold">Microsoft</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-white font-semibold">McLaren</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-white font-semibold">Red Bull</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-white font-semibold">PlayStation</span>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <a
                    href="https://www.1upproductions.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-all"
                  >
                    Visit 1UP Productions
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-400 mb-4">Looking to hire esports talent for your organisation?</p>
          <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-purple-500 text-purple-400 hover:bg-purple-500/20 font-bold py-3 px-8 rounded-lg transition-all">
            Partner With Us
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
