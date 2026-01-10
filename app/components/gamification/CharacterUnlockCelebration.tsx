'use client';

import { useEffect, useState } from 'react';
import { Confetti } from './Confetti';
import type { CharacterName } from '@/lib/character-config';
import { getCompletionMessage, getCharacterXPReward } from '@/lib/character-config';

interface CharacterUnlockCelebrationProps {
  characterName: CharacterName;
  onComplete: () => void;
}

const CHARACTER_DATA: Record<CharacterName, {
  icon: string;
  color: string;
  gradient: string;
  confettiColors: string[];
}> = {
  Repo: {
    icon: '🏛️',
    color: '#22d3ee',
    gradient: 'from-cyan-500 to-cyan-700',
    confettiColors: ['#22d3ee', '#0891b2', '#06b6d4', '#67e8f9', '#a5f3fc'],
  },
  Trinity: {
    icon: '🔮',
    color: '#a855f7',
    gradient: 'from-purple-500 to-purple-700',
    confettiColors: ['#a855f7', '#9333ea', '#c084fc', '#d8b4fe', '#e9d5ff'],
  },
  Velo: {
    icon: '🚀',
    color: '#ff00aa',
    gradient: 'from-pink-500 to-pink-700',
    confettiColors: ['#ff00aa', '#ec4899', '#f472b6', '#f9a8d4', '#db2777'],
  },
  Reach: {
    icon: '🌐',
    color: '#ffd700',
    gradient: 'from-yellow-500 to-amber-600',
    confettiColors: ['#ffd700', '#f59e0b', '#fbbf24', '#fcd34d', '#fef08a'],
  },
};

export function CharacterUnlockCelebration({
  characterName,
  onComplete,
}: CharacterUnlockCelebrationProps) {
  const [phase, setPhase] = useState<'entering' | 'showing' | 'exiting'>('entering');
  const data = CHARACTER_DATA[characterName];
  const message = getCompletionMessage(characterName);
  const xpReward = getCharacterXPReward(characterName);

  useEffect(() => {
    // Animate in
    const enterTimer = setTimeout(() => setPhase('showing'), 100);

    // Auto close after animation
    const exitTimer = setTimeout(() => {
      setPhase('exiting');
      setTimeout(onComplete, 500);
    }, 4000);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <>
      {/* Confetti */}
      <Confetti active={phase === 'showing'} colors={data.confettiColors} duration={4000} />

      {/* Full screen overlay */}
      <div
        className={`
          fixed inset-0 z-40 flex items-center justify-center
          bg-black/80 backdrop-blur-sm
          transition-opacity duration-500
          ${phase === 'entering' ? 'opacity-0' : phase === 'exiting' ? 'opacity-0' : 'opacity-100'}
        `}
        onClick={onComplete}
      >
        {/* Content card */}
        <div
          className={`
            relative text-center p-8 max-w-md
            transform transition-all duration-500
            ${phase === 'showing' ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Glowing ring */}
          <div
            className="absolute inset-0 rounded-2xl opacity-50 animate-pulse"
            style={{
              background: `radial-gradient(circle at center, ${data.color}40 0%, transparent 70%)`,
              filter: 'blur(20px)',
            }}
          />

          {/* Card content */}
          <div className="relative z-10">
            {/* Character icon */}
            <div
              className="text-8xl mb-4 animate-bounce"
              style={{
                filter: `drop-shadow(0 0 30px ${data.color})`,
              }}
            >
              {data.icon}
            </div>

            {/* Character name */}
            <div
              className={`
                text-3xl font-black uppercase tracking-widest mb-2
                bg-gradient-to-r ${data.gradient} bg-clip-text text-transparent
              `}
            >
              {characterName}
            </div>

            {/* Unlocked text */}
            <div className="text-xl font-bold text-white mb-4">
              CHARACTER UNLOCKED!
            </div>

            {/* Message */}
            <div
              className="text-lg mb-6"
              style={{ color: data.color }}
            >
              {message}
            </div>

            {/* XP reward */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/50">
              <span className="text-yellow-400 font-bold">+{xpReward} XP</span>
            </div>

            {/* Tap to continue */}
            <div className="mt-8 text-sm text-gray-500 animate-pulse">
              Tap anywhere to continue
            </div>
          </div>

          {/* Particles around the icon */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full animate-ping"
                style={{
                  backgroundColor: data.color,
                  top: `${30 + Math.sin(i * Math.PI / 4) * 25}%`,
                  left: `${50 + Math.cos(i * Math.PI / 4) * 25}%`,
                  animationDelay: `${i * 0.2}s`,
                  opacity: 0.6,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// Hook for managing character unlock celebrations
import { useCallback, useRef } from 'react';

export function useCharacterCelebration() {
  const [activeCharacter, setActiveCharacter] = useState<CharacterName | null>(null);
  const queueRef = useRef<CharacterName[]>([]);

  const showCelebration = useCallback((characterName: CharacterName) => {
    if (activeCharacter) {
      // Queue if one is already showing
      queueRef.current.push(characterName);
    } else {
      setActiveCharacter(characterName);
    }
  }, [activeCharacter]);

  const handleComplete = useCallback(() => {
    // Check queue for next celebration
    if (queueRef.current.length > 0) {
      const next = queueRef.current.shift();
      setActiveCharacter(next || null);
    } else {
      setActiveCharacter(null);
    }
  }, []);

  return {
    activeCharacter,
    showCelebration,
    handleComplete,
  };
}
