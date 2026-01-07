'use client';

import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface MuxVideoProps {
  playbackId: string;
  className?: string;
  poster?: string;
  preload?: 'none' | 'metadata' | 'auto';
  'aria-label'?: string;
  title?: string;
}

/**
 * MuxVideo component - handles HLS streaming with autoplay
 * Uses hls.js for Chrome/Firefox/Edge, native HLS for Safari
 * Implements proper autoplay handling per Mux documentation
 */
export function MuxVideo({
  playbackId,
  className = '',
  poster,
  preload = 'none',
  'aria-label': ariaLabel,
  title,
}: MuxVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const src = `https://stream.mux.com/${playbackId}.m3u8`;

    // Check if HLS is supported natively (Safari)
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      attemptAutoplay(video);
    }
    // Use hls.js for other browsers
    else if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        backBufferLength: 90,
      });

      hlsRef.current = hls;
      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        attemptAutoplay(video);
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          console.error('HLS fatal error:', data.type);
          hls.destroy();
        }
      });
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [playbackId]);

  // Attempt autoplay with proper promise handling per Mux docs
  const attemptAutoplay = (video: HTMLVideoElement) => {
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay succeeded
        })
        .catch((error) => {
          // Autoplay was prevented - this is expected in many cases
          // Video will show poster/thumbnail, user can click to play
          console.log('Autoplay prevented:', error.message);
        });
    }
  };

  return (
    <video
      ref={videoRef}
      className={className}
      muted
      loop
      playsInline
      preload={preload}
      poster={poster}
      aria-label={ariaLabel}
      title={title}
    />
  );
}
