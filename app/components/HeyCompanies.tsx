import Image from 'next/image'

interface HeyCompaniesProps {
  className?: string
}

/**
 * "Hey Companies" banner - prominent CTA for hiring esports talent
 * Powerful video background with neon effects and gaming aesthetic
 */
export function HeyCompanies({ className = '' }: HeyCompaniesProps) {
  return (
    <section className={`py-16 md:py-24 relative overflow-hidden ${className}`}>
      {/* Background - Image on mobile, video on desktop for performance */}
      <div className="absolute inset-0 z-0">
        {/* Mobile: Static image */}
        <img
          src="https://image.mux.com/A6OZmZy02Y00K4ZPyHuyfTVXoauVjLhiHlbR2bLqtBywY/thumbnail.webp?time=2&width=800"
          alt=""
          className="md:hidden w-full h-full object-cover"
        />
        {/* Desktop: Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="https://image.mux.com/A6OZmZy02Y00K4ZPyHuyfTVXoauVjLhiHlbR2bLqtBywY/thumbnail.webp?time=2"
          className="hidden md:block w-full h-full object-cover"
        >
          <source src="https://stream.mux.com/A6OZmZy02Y00K4ZPyHuyfTVXoauVjLhiHlbR2bLqtBywY.m3u8" type="application/x-mpegURL" />
        </video>
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-purple-900/80 to-cyan-900/70" />
        {/* Scanlines effect */}
        <div className="absolute inset-0 scanlines opacity-20" />
      </div>

      {/* Animated neon glow effects */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Neon border top and bottom */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Copy + CTA */}
          <div className="text-white">
            {/* Glowing badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-cyan-400/60 bg-cyan-500/10 backdrop-blur-sm">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider">Esports Recruitment Agency</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tight leading-none">
              <span className="block text-white drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">Hey,</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">Gaming Companies!</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Welcome to the place to hire <span className="text-cyan-400 font-bold">esports talent</span>.
              We connect you with <span className="text-purple-400 font-bold">passionate gaming professionals</span>.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 group">
                <span className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center text-lg font-bold shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">✓</span>
                <span className="text-white text-lg">Coaches, Analysts, Content Creators & more</span>
              </div>
              <div className="flex items-center gap-3 group">
                <span className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-lg font-bold shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">✓</span>
                <span className="text-white text-lg">Passionate talent who live and breathe gaming</span>
              </div>
              <div className="flex items-center gap-3 group">
                <span className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center text-lg font-bold shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform">✓</span>
                <span className="text-white text-lg">Free job listings • Industry connections</span>
              </div>
            </div>

            {/* Founder byline with LinkedIn */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/20">
              <Image
                src="/dan-keegan.webp"
                alt="Dan Keegan - Esports Industry Expert"
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover border-2 border-white/50"
              />
              <div>
                <p className="text-cyan-100 text-sm">You'll be working with founder</p>
                <a
                  href="https://www.linkedin.com/in/dankeegan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold hover:underline flex items-center gap-2"
                >
                  Dan Keegan
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Book a Call CTA - Video Background */}
          <a
            href="https://calendly.com/firstquest/quest"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl shadow-2xl overflow-hidden hover:shadow-cyan-500/40 transition-all group border-2 border-cyan-500/50 hover:border-cyan-400 relative"
          >
            {/* Background for Card - Image on mobile, video on desktop */}
            <div className="absolute inset-0 z-0">
              {/* Mobile: Static image */}
              <img
                src="https://image.mux.com/A6OZmZy02Y00K4ZPyHuyfTVXoauVjLhiHlbR2bLqtBywY/thumbnail.webp?time=5&width=600"
                alt=""
                className="md:hidden w-full h-full object-cover"
              />
              {/* Desktop: Video */}
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster="https://image.mux.com/A6OZmZy02Y00K4ZPyHuyfTVXoauVjLhiHlbR2bLqtBywY/thumbnail.webp?time=5"
                className="hidden md:block w-full h-full object-cover"
              >
                <source src="https://stream.mux.com/A6OZmZy02Y00K4ZPyHuyfTVXoauVjLhiHlbR2bLqtBywY.m3u8" type="application/x-mpegURL" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-purple-900/70 to-black/90" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="bg-gradient-to-r from-cyan-500/90 to-purple-500/90 backdrop-blur-sm text-white px-6 py-4">
                <h3 className="font-bold text-xl">Let's Level Up Your Team 🚀</h3>
                <p className="text-cyan-100 text-sm">Pick a time. Tell us your needs. We'll find you great people.</p>
              </div>
              <div className="p-8 text-center">
                {/* Animated Gaming Icon */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />
                  <svg className="w-28 h-28 mx-auto text-cyan-400 relative drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15h.008v.008H9V15zm0 2.25h.008v.008H9v-.008zM9 12h.008v.008H9V12zm2.25 0h.008v.008H11.25V12zm0 2.25h.008v.008H11.25v-.008zm0 2.25h.008v.008H11.25V16.5zm2.25-4.5h.008v.008h-.008V12zm0 2.25h.008v.008h-.008v-.008zM15.75 12h.008v.008h-.008V12z" />
                  </svg>
                </div>
                <p className="text-3xl font-black text-white mb-2 drop-shadow-lg">Let's Chat</p>
                <p className="text-cyan-200 mb-6 text-lg">30-minute discovery call with Dan</p>
                <span className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl group-hover:from-cyan-400 group-hover:to-purple-400 transition-all text-xl shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-400/50 group-hover:scale-105">
                  View Available Times
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <p className="text-xs text-cyan-300 mt-4">Opens Calendly in new tab</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

/**
 * Compact version for sidebars or smaller spaces
 */
export function HeyCompaniesCompact({ className = '' }: HeyCompaniesProps) {
  return (
    <div className={`bg-gradient-to-br from-cyan-600 via-purple-600 to-pink-600 rounded-xl p-6 text-white ${className}`}>
      <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
        🎮 Hiring Esports Talent?
      </h3>
      <p className="text-cyan-100 text-sm mb-4">
        Let's chat about your hiring needs. Free consultation with our esports recruitment experts.
      </p>
      <a
        href="https://calendly.com/firstquest/quest"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center px-4 py-2.5 bg-white text-gray-900 font-bold rounded-lg hover:bg-cyan-50 transition-colors text-sm"
      >
        Book a Call →
      </a>
    </div>
  )
}
