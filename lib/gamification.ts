// Gamification system for the profile experience
// XP, Levels, Achievements, and Character Dialogue

import { ProfileItems, getAllCharacterCompletions, getOverallCompletion, CharacterName } from './character-config';

// ============================================
// XP & LEVEL SYSTEM
// ============================================

export interface XPBreakdown {
  total: number;
  breakdown: {
    category: string;
    xp: number;
    description: string;
  }[];
}

export interface Level {
  level: number;
  title: string;
  minXP: number;
  maxXP: number;
  color: string;
  icon: string;
}

export const LEVELS: Level[] = [
  { level: 1, title: 'Newcomer', minXP: 0, maxXP: 99, color: '#6b7280', icon: '🌱' },
  { level: 2, title: 'Explorer', minXP: 100, maxXP: 249, color: '#22c55e', icon: '🔍' },
  { level: 3, title: 'Contender', minXP: 250, maxXP: 449, color: '#3b82f6', icon: '⚔️' },
  { level: 4, title: 'Challenger', minXP: 450, maxXP: 699, color: '#8b5cf6', icon: '🏆' },
  { level: 5, title: 'Pro Player', minXP: 700, maxXP: 999, color: '#f59e0b', icon: '⭐' },
  { level: 6, title: 'Elite', minXP: 1000, maxXP: 1349, color: '#ef4444', icon: '💎' },
  { level: 7, title: 'Legend', minXP: 1350, maxXP: 1749, color: '#ec4899', icon: '👑' },
  { level: 8, title: 'MVP', minXP: 1750, maxXP: Infinity, color: '#ffd700', icon: '🌟' },
];

export function calculateXP(
  items: ProfileItems,
  savedJobsCount: number = 0,
  assessmentsCount: number = 0
): XPBreakdown {
  const breakdown: XPBreakdown['breakdown'] = [];
  let total = 0;

  // Base XP for having a profile
  breakdown.push({ category: 'Account Created', xp: 50, description: 'Welcome bonus' });
  total += 50;

  // ===== REPO (Foundation) =====
  // Location (50 XP)
  if (items.location && items.location.length > 0) {
    breakdown.push({ category: 'Location Set', xp: 50, description: 'Foundation established' });
    total += 50;
  }

  // Role (75 XP)
  if (items.role && items.role.length > 0) {
    breakdown.push({ category: 'Target Role', xp: 75, description: 'Direction defined' });
    total += 75;
  }

  // Skills - now part of Repo (50 XP each, max 250)
  const skillCount = items.skill?.length || 0;
  if (skillCount > 0) {
    const skillXP = Math.min(skillCount * 50, 250);
    breakdown.push({
      category: 'Skills',
      xp: skillXP,
      description: `${skillCount} skill${skillCount > 1 ? 's' : ''} added`
    });
    total += skillXP;
  }

  // ===== TRINITY (Soul/Purpose) =====
  // Career Mission (100 XP) - new field
  if (items.career_mission && items.career_mission.length > 0) {
    breakdown.push({ category: 'Career Mission', xp: 100, description: 'Purpose discovered' });
    total += 100;
  }

  // Legacy fallback: Career Goal (100 XP)
  if (!items.career_mission && items.career_goal && items.career_goal.length > 0) {
    breakdown.push({ category: 'Career Goal', xp: 100, description: 'Vision articulated' });
    total += 100;
  }

  // Values (25 XP each, max 75)
  const valuesCount = items.values?.length || 0;
  if (valuesCount > 0) {
    const valuesXP = Math.min(valuesCount * 25, 75);
    breakdown.push({
      category: 'Values',
      xp: valuesXP,
      description: `${valuesCount} core value${valuesCount > 1 ? 's' : ''} defined`
    });
    total += valuesXP;
  }

  // Long Term Vision (75 XP)
  if (items.long_term_vision && items.long_term_vision.length > 0) {
    breakdown.push({ category: 'Long Term Vision', xp: 75, description: 'Future envisioned' });
    total += 75;
  }

  // ===== VELO (Journey) =====
  // Experience Years (75 XP)
  if (items.experience_years && items.experience_years.length > 0) {
    breakdown.push({ category: 'Experience', xp: 75, description: 'Journey tracked' });
    total += 75;
  }

  // Career Timeline - new field (25 XP each, max 100)
  const timelineCount = items.career_timeline?.length || 0;
  if (timelineCount > 0) {
    const timelineXP = Math.min(timelineCount * 25, 100);
    breakdown.push({
      category: 'Career Timeline',
      xp: timelineXP,
      description: `${timelineCount} milestone${timelineCount > 1 ? 's' : ''} recorded`
    });
    total += timelineXP;
  }

  // Legacy fallback: Career History
  const historyCount = items.career_history?.length || 0;
  if (historyCount > 0 && timelineCount === 0) {
    const historyXP = Math.min(historyCount * 25, 100);
    breakdown.push({
      category: 'Career History',
      xp: historyXP,
      description: `${historyCount} milestone${historyCount > 1 ? 's' : ''} recorded`
    });
    total += historyXP;
  }

  // Career Context (50 XP)
  if (items.career_context && items.career_context.length > 0) {
    breakdown.push({ category: 'Career Context', xp: 50, description: 'Learnings captured' });
    total += 50;
  }

  // Saved Jobs (20 XP each, max 200)
  if (savedJobsCount > 0) {
    const savedXP = Math.min(savedJobsCount * 20, 200);
    breakdown.push({
      category: 'Saved Jobs',
      xp: savedXP,
      description: `${savedJobsCount} job${savedJobsCount > 1 ? 's' : ''} saved`
    });
    total += savedXP;
  }

  // Assessments (50 XP each, max 250)
  if (assessmentsCount > 0) {
    const assessXP = Math.min(assessmentsCount * 50, 250);
    breakdown.push({
      category: 'Job Assessments',
      xp: assessXP,
      description: `${assessmentsCount} job${assessmentsCount > 1 ? 's' : ''} assessed`
    });
    total += assessXP;
  }

  // Character Completion Bonuses
  const completions = getAllCharacterCompletions(items);
  for (const comp of completions) {
    if (comp.isComplete && comp.name !== 'Reach') { // Reach is always complete
      breakdown.push({
        category: `${comp.name} Complete`,
        xp: 100,
        description: `Character unlocked!`
      });
      total += 100;
    }
  }

  // Full Profile Bonus
  const overall = getOverallCompletion(items);
  if (overall === 100) {
    breakdown.push({ category: 'Full Profile', xp: 200, description: 'All characters unlocked!' });
    total += 200;
  }

  return { total, breakdown };
}

export function getLevel(xp: number): Level {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].minXP) {
      return LEVELS[i];
    }
  }
  return LEVELS[0];
}

export function getXPProgress(xp: number): { current: number; needed: number; percent: number } {
  const level = getLevel(xp);
  const nextLevel = LEVELS.find(l => l.level === level.level + 1);

  if (!nextLevel) {
    return { current: xp - level.minXP, needed: 0, percent: 100 };
  }

  const current = xp - level.minXP;
  const needed = nextLevel.minXP - level.minXP;
  const percent = Math.round((current / needed) * 100);

  return { current, needed, percent };
}

// ============================================
// ACHIEVEMENTS SYSTEM
// ============================================

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  color: string;
  relatedCharacter?: CharacterName; // For badge click navigation
  check: (items: ProfileItems, savedJobsCount: number, assessmentsCount: number) => boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
  // ===== REPO (Foundation) Achievements =====
  {
    id: 'first_steps',
    name: 'First Steps',
    description: 'Set your location',
    icon: '👣',
    rarity: 'common',
    color: '#6b7280',
    relatedCharacter: 'Repo',
    check: (items) => (items.location?.length || 0) > 0,
  },
  {
    id: 'goal_setter',
    name: 'Goal Setter',
    description: 'Define your target role',
    icon: '🎯',
    rarity: 'common',
    color: '#6b7280',
    relatedCharacter: 'Repo',
    check: (items) => (items.role?.length || 0) > 0,
  },
  {
    id: 'skill_collector',
    name: 'Skill Collector',
    description: 'Add 3 skills to your profile',
    icon: '🧩',
    rarity: 'uncommon',
    color: '#22c55e',
    relatedCharacter: 'Repo',
    check: (items) => (items.skill?.length || 0) >= 3,
  },
  {
    id: 'skill_master',
    name: 'Skill Master',
    description: 'Add 5 skills to your profile',
    icon: '🎭',
    rarity: 'rare',
    color: '#3b82f6',
    relatedCharacter: 'Repo',
    check: (items) => (items.skill?.length || 0) >= 5,
  },
  {
    id: 'repo_unlocked',
    name: 'Foundation Solid',
    description: 'Complete the Repo character',
    icon: '🏛️',
    rarity: 'uncommon',
    color: '#22d3ee',
    relatedCharacter: 'Repo',
    check: (items) => {
      const completions = getAllCharacterCompletions(items);
      return completions.find(c => c.name === 'Repo')?.isComplete || false;
    },
  },

  // ===== TRINITY (Soul/Purpose) Achievements =====
  {
    id: 'mission_defined',
    name: 'Mission Defined',
    description: 'Define your career mission',
    icon: '🎯',
    rarity: 'uncommon',
    color: '#a855f7',
    relatedCharacter: 'Trinity',
    check: (items) => (items.career_mission?.length || 0) > 0 || (items.career_goal?.length || 0) > 0,
  },
  {
    id: 'values_set',
    name: 'Values Champion',
    description: 'Define your core values',
    icon: '💎',
    rarity: 'uncommon',
    color: '#a855f7',
    relatedCharacter: 'Trinity',
    check: (items) => (items.values?.length || 0) >= 1,
  },
  {
    id: 'visionary',
    name: 'Visionary',
    description: 'Set your long-term vision',
    icon: '🔮',
    rarity: 'rare',
    color: '#a855f7',
    relatedCharacter: 'Trinity',
    check: (items) => (items.long_term_vision?.length || 0) > 0,
  },
  {
    id: 'trinity_unlocked',
    name: 'Soul Awakened',
    description: 'Complete the Trinity character',
    icon: '🔮',
    rarity: 'rare',
    color: '#a855f7',
    relatedCharacter: 'Trinity',
    check: (items) => {
      const completions = getAllCharacterCompletions(items);
      return completions.find(c => c.name === 'Trinity')?.isComplete || false;
    },
  },

  // ===== VELO (Journey) Achievements =====
  {
    id: 'veteran',
    name: 'Veteran',
    description: 'Have 5+ years experience',
    icon: '🎖️',
    rarity: 'rare',
    color: '#ff00aa',
    relatedCharacter: 'Velo',
    check: (items) => parseInt(items.experience_years?.[0]?.value || '0') >= 5,
  },
  {
    id: 'journey_tracker',
    name: 'Journey Tracker',
    description: 'Add career milestones to your timeline',
    icon: '📍',
    rarity: 'uncommon',
    color: '#ff00aa',
    relatedCharacter: 'Velo',
    check: (items) => (items.career_timeline?.length || items.career_history?.length || 0) >= 2,
  },
  {
    id: 'velo_unlocked',
    name: 'Momentum Building',
    description: 'Complete the Velo character',
    icon: '🚀',
    rarity: 'rare',
    color: '#ff00aa',
    relatedCharacter: 'Velo',
    check: (items) => {
      const completions = getAllCharacterCompletions(items);
      return completions.find(c => c.name === 'Velo')?.isComplete || false;
    },
  },

  // ===== REACH (Network) Achievements =====
  {
    id: 'job_hunter',
    name: 'Job Hunter',
    description: 'Save your first job',
    icon: '📌',
    rarity: 'common',
    color: '#ffd700',
    relatedCharacter: 'Reach',
    check: (_, savedJobsCount) => savedJobsCount >= 1,
  },
  {
    id: 'opportunity_seeker',
    name: 'Opportunity Seeker',
    description: 'Save 5 jobs',
    icon: '🔍',
    rarity: 'uncommon',
    color: '#ffd700',
    relatedCharacter: 'Reach',
    check: (_, savedJobsCount) => savedJobsCount >= 5,
  },

  // ===== Activity Achievements =====
  {
    id: 'strategic_player',
    name: 'Strategic Player',
    description: 'Complete 3 job assessments',
    icon: '📊',
    rarity: 'rare',
    color: '#3b82f6',
    relatedCharacter: 'Reach',
    check: (_, __, assessmentsCount) => assessmentsCount >= 3,
  },
  {
    id: 'market_analyst',
    name: 'Market Analyst',
    description: 'Complete 10 job assessments',
    icon: '📈',
    rarity: 'epic',
    color: '#f59e0b',
    relatedCharacter: 'Reach',
    check: (_, __, assessmentsCount) => assessmentsCount >= 10,
  },

  // ===== Ultimate Achievements =====
  {
    id: 'all_characters',
    name: 'Full Squad',
    description: 'Unlock all 4 characters',
    icon: '👑',
    rarity: 'epic',
    color: '#f59e0b',
    check: (items) => getOverallCompletion(items) === 100,
  },

  // Legendary
  {
    id: 'mvp',
    name: 'MVP',
    description: 'Reach Level 8',
    icon: '🌟',
    rarity: 'legendary',
    color: '#ffd700',
    check: (items, savedJobsCount, assessmentsCount) => {
      const xp = calculateXP(items, savedJobsCount, assessmentsCount).total;
      return getLevel(xp).level >= 8;
    },
  },
];

export function getUnlockedAchievements(
  items: ProfileItems,
  savedJobsCount: number = 0,
  assessmentsCount: number = 0
): Achievement[] {
  return ACHIEVEMENTS.filter(a => a.check(items, savedJobsCount, assessmentsCount));
}

export function getLockedAchievements(
  items: ProfileItems,
  savedJobsCount: number = 0,
  assessmentsCount: number = 0
): Achievement[] {
  return ACHIEVEMENTS.filter(a => !a.check(items, savedJobsCount, assessmentsCount));
}

// ============================================
// CHARACTER DIALOGUE SYSTEM
// ============================================

export interface CharacterDialogue {
  character: CharacterName;
  messages: {
    condition: 'empty' | 'partial' | 'complete' | 'default';
    text: string;
  }[];
}

export const CHARACTER_DIALOGUES: CharacterDialogue[] = [
  {
    character: 'Repo',
    messages: [
      { condition: 'empty', text: "Where are you based? What role do you seek? What skills do you bring? Let's build your foundation!" },
      { condition: 'partial', text: "Good start! Add your location, target role, and at least 3 skills to anchor yourself." },
      { condition: 'complete', text: "🏛️ ANCHORED! Your foundation is SOLID - location, role, and skills all set!" },
      { condition: 'default', text: "I am Repo, guardian of your foundation." },
    ],
  },
  {
    character: 'Trinity',
    messages: [
      { condition: 'empty', text: "What drives you? What's your 'why'? Tell me your career mission to awaken your soul!" },
      { condition: 'partial', text: "Your purpose is emerging. Share your values and vision to reach enlightenment." },
      { condition: 'complete', text: "🔮 ENLIGHTENED! Your purpose is CLEAR - I see your mission, values, and vision!" },
      { condition: 'default', text: "I am Trinity, keeper of your soul." },
    ],
  },
  {
    character: 'Velo',
    messages: [
      { condition: 'empty', text: "How long have you been on your journey? Share your experience and career milestones!" },
      { condition: 'partial', text: "Building momentum! Track your career timeline to show your journey." },
      { condition: 'complete', text: "🚀 FLYING! Your journey is UNSTOPPABLE - experience and timeline mapped!" },
      { condition: 'default', text: "I am Velo, master of your journey." },
    ],
  },
  {
    character: 'Reach',
    messages: [
      { condition: 'empty', text: "Your network is your superpower! Connect with coaches and recruiters to expand your reach." },
      { condition: 'partial', text: "Growing connections! Save jobs, send messages, and build your professional network." },
      { condition: 'complete', text: "🌐 NETWORKED! Your reach extends far - connections, coaches, and opportunities await!" },
      { condition: 'default', text: "I am Reach, architect of your network." },
    ],
  },
];

export function getCharacterDialogue(
  character: CharacterName,
  completionPercent: number,
  isComplete: boolean
): string {
  const dialogue = CHARACTER_DIALOGUES.find(d => d.character === character);
  if (!dialogue) return '';

  let condition: 'empty' | 'partial' | 'complete' | 'default';
  if (isComplete) {
    condition = 'complete';
  } else if (completionPercent === 0) {
    condition = 'empty';
  } else {
    condition = 'partial';
  }

  const message = dialogue.messages.find(m => m.condition === condition);
  return message?.text || dialogue.messages.find(m => m.condition === 'default')?.text || '';
}
