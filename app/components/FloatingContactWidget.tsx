'use client'

import Link from 'next/link'

/**
 * Floating contact widget - persistent CTA button in bottom right corner
 * Esports themed with neon glow effects
 * Links to contact/booking page
 */
export function FloatingContactWidget() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us about esports recruitment"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />

      {/* Button */}
      <div className="relative bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-bold text-sm">
        {/* Chat/controller icon */}
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="hidden sm:inline">Hire Talent</span>
        <span className="sm:hidden">Hire</span>
      </div>
    </Link>
  )
}

/**
 * Alternative: Floating widget that opens booking popup
 * Uses direct Calendly link instead of contact page
 */
export function FloatingBookingWidget() {
  return (
    <a
      href="https://calendly.com/firstquest/quest"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Book a call with our esports recruitment team"
    >
      {/* Animated pulse ring */}
      <div className="absolute inset-0 bg-cyan-500 rounded-full animate-ping opacity-20" />

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />

      {/* Button */}
      <div className="relative bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-bold text-sm group-hover:scale-105">
        {/* Calendar icon */}
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="hidden sm:inline">Book a Call</span>
        <span className="sm:hidden">Book</span>
      </div>
    </a>
  )
}
