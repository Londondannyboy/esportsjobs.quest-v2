import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from '../components/UnifiedHeader'
import { UnifiedFooter } from '../components/UnifiedFooter'
import { CalendlyInline } from '../components/Calendly'

// Mux streaming for optimal video delivery
const MUX_PLAYBACK_ID = 'A6OZmZy02Y00K4ZPyHuyfTVXoauVjLhiHlbR2bLqtBywY'

export const metadata: Metadata = {
  title: 'Book a Call | Esports Recruitment Agency',
  description: 'Schedule a free 30-minute call with our esports recruitment experts. Discuss your hiring needs and discover how we can help you find top gaming talent.',
  openGraph: {
    title: 'Book a Call | Esports Recruitment Agency',
    description: 'Schedule a free 30-minute call with our esports recruitment experts.',
    images: ['https://esportsjobs.quest/og-image.png'],
  },
}

export default function BookPage() {
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

      {/* Hero with Video Background */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={`https://image.mux.com/${MUX_PLAYBACK_ID}/thumbnail.webp?time=3`}
            className="w-full h-full object-cover"
          >
            <source src={`https://stream.mux.com/${MUX_PLAYBACK_ID}.m3u8`} type="application/x-mpegURL" />
          </video>
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 via-purple-900/30 to-pink-900/30" />
          {/* Scanlines effect */}
          <div className="absolute inset-0 scanlines opacity-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-cyan-400/60 bg-cyan-500/10 backdrop-blur-sm">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider">Free Consultation</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tight">
            <span className="text-white drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">Let's</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">Level Up</span>{' '}
            <span className="text-white">Your Team</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute discovery call with our{' '}
            <span className="text-cyan-400 font-bold">esports recruitment experts</span>
          </p>

          {/* Founder Info */}
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/dan-keegan.webp"
              alt="Dan Keegan - Esports Industry Expert"
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover border-2 border-cyan-500/50 shadow-lg shadow-cyan-500/20"
            />
            <div className="text-left">
              <p className="text-gray-400 text-sm">You'll be speaking with</p>
              <p className="text-white font-bold text-lg">Dan Keegan</p>
              <p className="text-cyan-400 text-sm">20+ years in gaming industry</p>
            </div>
          </div>
        </div>

        {/* Neon border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      </section>

      {/* Calendly Section */}
      <section className="py-12 md:py-16 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Pick a Time That Works</h2>
            <p className="text-gray-400">No obligation - just a friendly chat about your esports hiring needs</p>
          </div>

          {/* Calendly Embed Card */}
          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-2xl">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-4">
              <h3 className="text-lg font-bold text-white">Discovery Call with Dan</h3>
              <p className="text-cyan-100 text-sm">30 minutes - discuss your team needs, get industry insights</p>
            </div>

            {/* Calendly Inline Widget */}
            <CalendlyInline height={650} className="bg-gray-900" />
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4">
              <div className="text-2xl mb-2">100%</div>
              <p className="text-gray-400 text-sm">Free - no strings attached</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4">
              <div className="text-2xl mb-2">30 min</div>
              <p className="text-gray-400 text-sm">Quick, focused conversation</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4">
              <div className="text-2xl mb-2">24 hrs</div>
              <p className="text-gray-400 text-sm">Response time guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We'll Discuss */}
      <section className="py-12 md:py-16 bg-[#0d0d15]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-10">What We'll Cover</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Your Hiring Needs',
                desc: 'What roles you need to fill, skills required, team structure'
              },
              {
                icon: '💰',
                title: 'Budget & Timeline',
                desc: 'Understanding your constraints to find the right fit'
              },
              {
                icon: '🎮',
                title: 'Industry Insights',
                desc: 'Current market rates, talent availability, trends'
              },
              {
                icon: '🚀',
                title: 'Next Steps',
                desc: 'How we can help - free listing, recruitment, or managed service'
              }
            ].map((item) => (
              <div key={item.title} className="flex gap-4 bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prefer Email CTA */}
      <section className="py-12 bg-[#0a0a0f]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">Prefer to reach out a different way?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Form
            </Link>
            <a
              href="mailto:hello@esportsjobs.quest"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-700 hover:border-cyan-500 text-white rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5" />
              </svg>
              hello@esportsjobs.quest
            </a>
          </div>
        </div>
      </section>

      <UnifiedFooter activeSite="jobs" />
    </main>
  )
}
