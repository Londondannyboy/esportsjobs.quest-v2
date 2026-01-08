'use client'

import { useRef, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { CopilotSidebar } from '@copilotkit/react-ui'

// Dynamic import for Three.js background - only loads when sidebar is open
const ThreeSidebarBackground = dynamic(
  () => import('./ThreeSidebarBackground').then(mod => mod.ThreeSidebarBackground),
  { ssr: false }
)

// Mux video/image IDs
const MUX_HERO_ID = "QeCiSMO9ZeptbSh02kbUCenrNIpwR02X0202Lcxz700HqYvI"

interface EsportsCopilotSidebarProps {
  children: React.ReactNode
  instructions: string
  labels: {
    title: string
    initial: string
  }
  defaultOpen?: boolean
  backgroundType?: 'threejs' | 'video' | 'image' | 'gradient'
}

export function EsportsCopilotSidebar({
  children,
  instructions,
  labels,
  defaultOpen = true,
  backgroundType = 'threejs' // Default to Three.js
}: EsportsCopilotSidebarProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Handle video autoplay
  useEffect(() => {
    if (backgroundType === 'video' && videoRef.current && isOpen) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked, that's ok
      })
    }
  }, [isOpen, backgroundType])

  return (
    <div className="esports-sidebar-wrapper">
      {/* Background Layer - renders behind the sidebar */}
      <div className="esports-sidebar-bg" aria-hidden="true">
        {backgroundType === 'threejs' && isOpen && (
          <ThreeSidebarBackground />
        )}

        {backgroundType === 'video' && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={`https://image.mux.com/${MUX_HERO_ID}/thumbnail.webp?time=2&width=600`}
            className="esports-sidebar-video"
          >
            {/* MP4 fallback - you can add a local MP4 here */}
            <source src={`https://stream.mux.com/${MUX_HERO_ID}/high.mp4`} type="video/mp4" />
          </video>
        )}

        {backgroundType === 'image' && (
          <img
            src={`https://image.mux.com/${MUX_HERO_ID}/thumbnail.webp?time=2&width=600`}
            alt=""
            className="esports-sidebar-image"
          />
        )}

        {backgroundType === 'gradient' && (
          <div className="esports-sidebar-gradient" />
        )}

        {/* Overlay for readability */}
        <div className="esports-sidebar-overlay" />
      </div>

      {/* Actual CopilotKit Sidebar */}
      <CopilotSidebar
        defaultOpen={defaultOpen}
        instructions={instructions}
        labels={labels}
        onSetOpen={setIsOpen}
      >
        {children}
      </CopilotSidebar>
    </div>
  )
}
