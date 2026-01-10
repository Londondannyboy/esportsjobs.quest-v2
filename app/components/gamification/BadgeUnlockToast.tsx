'use client';

import { useEffect, useState } from 'react';
import { Achievement } from '@/lib/gamification';

interface BadgeUnlockToastProps {
  achievement: Achievement;
  onClose: () => void;
  duration?: number;
}

const RARITY_STYLES = {
  common: {
    bg: 'from-gray-600 to-gray-800',
    border: 'border-gray-500',
    glow: '',
  },
  uncommon: {
    bg: 'from-green-600 to-green-800',
    border: 'border-green-500',
    glow: 'shadow-[0_0_30px_rgba(34,197,94,0.4)]',
  },
  rare: {
    bg: 'from-blue-600 to-blue-800',
    border: 'border-blue-500',
    glow: 'shadow-[0_0_40px_rgba(59,130,246,0.5)]',
  },
  epic: {
    bg: 'from-amber-600 to-amber-800',
    border: 'border-amber-500',
    glow: 'shadow-[0_0_50px_rgba(245,158,11,0.5)]',
  },
  legendary: {
    bg: 'from-yellow-500 to-amber-600',
    border: 'border-yellow-400',
    glow: 'shadow-[0_0_60px_rgba(255,215,0,0.6)]',
  },
};

export function BadgeUnlockToast({
  achievement,
  onClose,
  duration = 5000,
}: BadgeUnlockToastProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const style = RARITY_STYLES[achievement.rarity];

  useEffect(() => {
    // Animate in
    requestAnimationFrame(() => setIsVisible(true));

    // Auto close
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`
        fixed top-4 right-4 z-50
        transform transition-all duration-300 ease-out
        ${isVisible && !isExiting ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}
    >
      <div
        className={`
          relative overflow-hidden
          bg-gradient-to-r ${style.bg}
          border-2 ${style.border}
          rounded-xl p-4 pr-12
          ${style.glow}
          min-w-[300px] max-w-[400px]
        `}
      >
        {/* Shine animation */}
        <div className="absolute inset-0 animate-shine pointer-events-none">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{ transform: 'translateX(-100%)' }}
          />
        </div>

        {/* Content */}
        <div className="flex items-center gap-4 relative z-10">
          {/* Icon */}
          <div className="text-4xl animate-bounce-slow">
            {achievement.icon}
          </div>

          {/* Text */}
          <div className="flex-1">
            <div className="text-xs uppercase tracking-wider text-white/70 mb-1">
              Achievement Unlocked!
            </div>
            <div className="text-lg font-bold text-white">
              {achievement.name}
            </div>
            <div className="text-sm text-white/80">
              {achievement.description}
            </div>
          </div>
        </div>

        {/* Rarity badge */}
        <div
          className="absolute top-2 right-10 text-xs uppercase tracking-wider px-2 py-0.5 rounded-full"
          style={{
            backgroundColor: `${achievement.color}30`,
            color: achievement.color,
          }}
        >
          {achievement.rarity}
        </div>

        {/* Close button */}
        <button
          onClick={() => {
            setIsExiting(true);
            setTimeout(onClose, 300);
          }}
          className="absolute top-2 right-2 text-white/60 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// Container component to manage multiple toasts
interface ToastContainerProps {
  toasts: { id: string; achievement: Achievement }[];
  onRemove: (id: string) => void;
}

export function BadgeUnlockToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast, index) => (
        <div
          key={toast.id}
          style={{ transform: `translateY(${index * 10}px)` }}
        >
          <BadgeUnlockToast
            achievement={toast.achievement}
            onClose={() => onRemove(toast.id)}
          />
        </div>
      ))}
    </div>
  );
}
