'use client'

import { useEffect } from 'react'
import Script from 'next/script'

const CALENDLY_URL = 'https://calendly.com/firstquest/quest'

interface CalendlyInlineProps {
  className?: string
  height?: number
}

interface CalendlyPopupLinkProps {
  children: React.ReactNode
  className?: string
}

interface CalendlyBadgeProps {
  text?: string
  color?: string
  textColor?: string
}

/**
 * Inline Calendly widget - embeds the full scheduling interface
 * Use on contact pages or dedicated booking sections
 * Esports themed with cyan accents
 */
export function CalendlyInline({ className = '', height = 700 }: CalendlyInlineProps) {
  return (
    <div className={className} style={{ minWidth: '320px', height: `${height}px` }}>
      <iframe
        src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=0a0a0f&text_color=ffffff&primary_color=06b6d4`}
        width="100%"
        height="100%"
        frameBorder="0"
        loading="lazy"
        title="Schedule a call with our esports recruitment agency"
        style={{ border: 'none', minHeight: `${height}px` }}
      />
    </div>
  )
}

/**
 * Calendly popup link - opens booking modal when clicked
 * Use for CTAs, buttons, and inline links
 */
export function CalendlyPopupLink({ children, className = '' }: CalendlyPopupLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    // @ts-ignore - Calendly is loaded globally
    if (typeof window !== 'undefined' && window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    }
  }

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <a
        href="#"
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>
    </>
  )
}

/**
 * Floating Calendly badge - persistent CTA button in corner
 * Add to layout for site-wide visibility
 * Esports themed with cyan color
 */
export function CalendlyBadge({
  text = "Let's Chat",
  color = '#06b6d4', // cyan-500
  textColor = '#000000'
}: CalendlyBadgeProps) {
  useEffect(() => {
    // Initialize badge widget after component mounts
    const initBadge = () => {
      // @ts-ignore
      if (typeof window !== 'undefined' && window.Calendly) {
        // @ts-ignore
        window.Calendly.initBadgeWidget({
          url: CALENDLY_URL,
          text,
          color,
          textColor,
          branding: false
        })
      }
    }

    // Try immediately, and also after a delay for script loading
    initBadge()
    const timer = setTimeout(initBadge, 1000)

    return () => clearTimeout(timer)
  }, [text, color, textColor])

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-ignore
          if (window.Calendly) {
            // @ts-ignore
            window.Calendly.initBadgeWidget({
              url: CALENDLY_URL,
              text,
              color,
              textColor,
              branding: false
            })
          }
        }}
      />
    </>
  )
}

/**
 * Calendly button - styled button that opens popup
 * Esports themed variants
 */
export function CalendlyButton({
  children,
  className = '',
  variant = 'primary'
}: {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'cyan' | 'purple'
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    // @ts-ignore
    if (typeof window !== 'undefined' && window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    }
  }

  const variants = {
    primary: 'bg-cyan-500 hover:bg-cyan-400 text-black',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-600',
    cyan: 'bg-cyan-500 hover:bg-cyan-400 text-black',
    purple: 'bg-purple-600 hover:bg-purple-500 text-white'
  }

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <button
        onClick={handleClick}
        className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-colors ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    </>
  )
}

// Type declaration for window.Calendly
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
      initBadgeWidget: (options: {
        url: string
        text: string
        color: string
        textColor: string
        branding: boolean
      }) => void
    }
  }
}
