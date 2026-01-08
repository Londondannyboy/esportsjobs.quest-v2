'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

// Lazy load Three.js background
const ThreeBackground = dynamic(
  () => import('./ThreeSidebarBackground').then(mod => mod.ThreeSidebarBackground),
  { ssr: false, loading: () => null }
)

const MUX_HERO_ID = "QeCiSMO9ZeptbSh02kbUCenrNIpwR02X0202Lcxz700HqYvI"

type BackgroundType = 'image' | 'mp4' | 'mux' | 'threejs'

interface CopilotSidebarBackgroundProps {
  type: BackgroundType
}

export function CopilotSidebarBackground({ type }: CopilotSidebarBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Small delay to let sidebar render first
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (videoRef.current && isVisible) {
      videoRef.current.play().catch(() => {})
    }
  }, [isVisible, type])

  if (!isVisible) return null

  return (
    <div className="copilot-sidebar-bg-container">
      {/* Image Background */}
      {type === 'image' && (
        <div
          className="copilot-sidebar-bg-layer"
          style={{
            backgroundImage: `url(https://image.mux.com/${MUX_HERO_ID}/thumbnail.webp?time=2&width=800)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      {/* MP4 Video Background */}
      {type === 'mp4' && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="copilot-sidebar-bg-video"
        >
          <source src={`https://stream.mux.com/${MUX_HERO_ID}/high.mp4`} type="video/mp4" />
        </video>
      )}

      {/* Mux HLS Video Background */}
      {type === 'mux' && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={`https://image.mux.com/${MUX_HERO_ID}/thumbnail.webp?time=2&width=800`}
          className="copilot-sidebar-bg-video"
        >
          <source src={`https://stream.mux.com/${MUX_HERO_ID}.m3u8`} type="application/x-mpegURL" />
        </video>
      )}

      {/* Three.js Background */}
      {type === 'threejs' && (
        <div className="copilot-sidebar-bg-threejs">
          <ThreeBackground />
        </div>
      )}

      {/* Dark overlay for text readability */}
      <div className="copilot-sidebar-bg-overlay" />
    </div>
  )
}
