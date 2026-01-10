// Character configuration for the 4-character profile experience
// Repo, Trinity, Velo, Reach
// Updated Jan 2025: Skills moved from Trinity to Repo, Trinity now focuses on Soul/Purpose

export type CharacterName = 'Repo' | 'Trinity' | 'Velo' | 'Reach';
export type AnimationType = 'Idle' | 'Walk' | 'Run';

export interface CharacterStage {
  name: string;
  minPercent: number;
}

export interface CharacterConfig {
  name: CharacterName;
  title: string;
  subtitle: string;
  icon: string;
  animation: AnimationType;
  color: string;
  colorRGB: string; // For Three.js
  gradient: string; // CSS gradient
  profileFields: string[];
  requiredFields: string[];
  minItems?: Record<string, number>; // For arrays like skills: { skill: 3 }
  weight: number; // Contribution to overall completion
  stages: CharacterStage[]; // Progress stages for this character
  features?: string[]; // Special features (for Reach)
}

export const CHARACTERS: CharacterConfig[] = [
  {
    name: 'Repo',
    title: 'Your Foundation',
    subtitle: 'Where you stand & what you do',
    icon: '🏛️',
    animation: 'Idle',
    color: '#22d3ee',
    colorRGB: 'rgb(34, 211, 238)',
    gradient: 'from-cyan-500/20 to-cyan-900/20',
    profileFields: ['location', 'role', 'skill'],
    requiredFields: ['location', 'role', 'skill'],
    minItems: { skill: 3 }, // Need at least 3 skills
    weight: 25,
    stages: [
      { name: 'Ungrounded', minPercent: 0 },
      { name: 'Planted', minPercent: 33 },
      { name: 'Rooted', minPercent: 66 },
      { name: 'Anchored', minPercent: 100 },
    ],
  },
  {
    name: 'Trinity',
    title: 'Your Soul',
    subtitle: 'Your purpose & vision',
    icon: '🔮',
    animation: 'Walk',
    color: '#a855f7',
    colorRGB: 'rgb(168, 85, 247)',
    gradient: 'from-purple-500/20 to-purple-900/20',
    profileFields: ['career_mission', 'values', 'long_term_vision'],
    requiredFields: ['career_mission'],
    weight: 25,
    stages: [
      { name: 'Searching', minPercent: 0 },
      { name: 'Awakening', minPercent: 50 },
      { name: 'Enlightened', minPercent: 100 },
    ],
  },
  {
    name: 'Velo',
    title: 'Your Journey',
    subtitle: 'Your experience & story',
    icon: '🚀',
    animation: 'Run',
    color: '#ff00aa',
    colorRGB: 'rgb(255, 0, 170)',
    gradient: 'from-pink-500/20 to-pink-900/20',
    profileFields: ['experience_years', 'career_timeline', 'career_context'],
    requiredFields: ['experience_years', 'career_timeline'],
    weight: 25,
    stages: [
      { name: 'Standing Still', minPercent: 0 },
      { name: 'Walking', minPercent: 33 },
      { name: 'Running', minPercent: 66 },
      { name: 'Flying', minPercent: 100 },
    ],
  },
  {
    name: 'Reach',
    title: 'Your Network',
    subtitle: 'Your connections & coaching',
    icon: '🌐',
    animation: 'Walk',
    color: '#ffd700',
    colorRGB: 'rgb(255, 215, 0)',
    gradient: 'from-yellow-500/20 to-yellow-900/20',
    profileFields: ['connections', 'messages', 'coach'],
    requiredFields: [], // Optional - always "complete"
    weight: 25,
    stages: [
      { name: 'Solo', minPercent: 0 },
      { name: 'Connected', minPercent: 50 },
      { name: 'Networked', minPercent: 100 },
    ],
    features: ['messaging', 'coach_connection', 'recruiter_visibility'],
  },
];

export interface ProfileItems {
  // Repo fields (Foundation)
  skill?: Array<{ value: string; metadata?: Record<string, unknown> }>;
  role?: Array<{ value: string }>;
  location?: Array<{ value: string; metadata?: Record<string, unknown> }>;

  // Trinity fields (Soul/Purpose)
  career_mission?: Array<{ value: string }>;
  values?: Array<{ value: string }>;
  long_term_vision?: Array<{ value: string }>;

  // Velo fields (Journey)
  experience_years?: Array<{ value: string }>;
  career_timeline?: Array<{ value: string; metadata?: Record<string, unknown> }>;
  career_context?: Array<{ value: string }>;

  // Reach fields (Network)
  connections?: Array<{ value: string; metadata?: Record<string, unknown> }>;
  messages?: Array<{ value: string }>;
  coach?: Array<{ value: string }>;

  // Legacy fields (for backwards compatibility)
  career_goal?: Array<{ value: string }>;
  career_history?: Array<{ value: string }>;
  saved_jobs?: Array<{ value: string }>;
  network_visibility?: Array<{ value: string }>;
}

export interface CharacterCompletion {
  name: CharacterName;
  isComplete: boolean;
  percent: number;
  stage: CharacterStage;
  data: Record<string, unknown>;
  missing: string[];
}

/**
 * Get the current stage for a character based on completion percentage
 */
export function getCharacterStage(character: CharacterConfig, percent: number): CharacterStage {
  // Find the highest stage that the percent qualifies for
  let currentStage = character.stages[0];
  for (const stage of character.stages) {
    if (percent >= stage.minPercent) {
      currentStage = stage;
    }
  }
  return currentStage;
}

/**
 * Calculate completion status for a specific character
 */
export function getCharacterCompletion(
  character: CharacterConfig,
  items: ProfileItems
): CharacterCompletion {
  const data: Record<string, unknown> = {};
  const missing: string[] = [];
  let completedRequirements = 0;
  let totalRequirements = character.requiredFields.length;

  // Handle optional characters (like Reach)
  if (totalRequirements === 0) {
    // Collect any data that exists for this character
    for (const field of character.profileFields) {
      const fieldData = items[field as keyof ProfileItems];
      if (fieldData && fieldData.length > 0) {
        data[field] = fieldData;
      }
    }
    const stage = getCharacterStage(character, 100);
    return {
      name: character.name,
      isComplete: true,
      percent: 100,
      stage,
      data,
      missing: [],
    };
  }

  // Check each required field
  for (const field of character.requiredFields) {
    const fieldData = items[field as keyof ProfileItems];
    const minRequired = character.minItems?.[field];

    if (minRequired !== undefined) {
      // Field has a minimum count requirement (e.g., skills need 3)
      const count = fieldData?.length || 0;
      data[field] = fieldData || [];
      data[`${field}Count`] = count;

      if (count >= minRequired) {
        completedRequirements++;
      } else {
        const remaining = minRequired - count;
        const fieldLabel = field.replace(/_/g, ' ');
        missing.push(`${remaining} more ${fieldLabel}${remaining > 1 ? 's' : ''}`);
      }
    } else if (fieldData && fieldData.length > 0) {
      data[field] = fieldData[0]?.value;
      completedRequirements++;
    } else {
      const fieldLabel = field.replace(/_/g, ' ');
      missing.push(fieldLabel);
    }
  }

  // Also collect non-required field data
  for (const field of character.profileFields) {
    if (!character.requiredFields.includes(field)) {
      const fieldData = items[field as keyof ProfileItems];
      if (fieldData && fieldData.length > 0) {
        data[field] = fieldData;
      }
    }
  }

  const percent = Math.round((completedRequirements / totalRequirements) * 100);
  const stage = getCharacterStage(character, percent);

  return {
    name: character.name,
    isComplete: percent === 100,
    percent,
    stage,
    data,
    missing,
  };
}

/**
 * Calculate completion for all characters
 */
export function getAllCharacterCompletions(items: ProfileItems): CharacterCompletion[] {
  return CHARACTERS.map(char => getCharacterCompletion(char, items));
}

/**
 * Calculate overall profile completion percentage
 */
export function getOverallCompletion(items: ProfileItems): number {
  const completions = getAllCharacterCompletions(items);

  let totalWeight = 0;
  let weightedSum = 0;

  for (let i = 0; i < CHARACTERS.length; i++) {
    const weight = CHARACTERS[i].weight;
    totalWeight += weight;
    weightedSum += (completions[i].percent / 100) * weight;
  }

  return Math.round((weightedSum / totalWeight) * 100);
}

/**
 * Get the next incomplete character for onboarding guidance
 */
export function getNextIncompleteCharacter(items: ProfileItems): CharacterConfig | null {
  const completions = getAllCharacterCompletions(items);

  for (let i = 0; i < completions.length; i++) {
    if (!completions[i].isComplete) {
      return CHARACTERS[i];
    }
  }

  return null; // All complete
}

/**
 * Get celebration message when a character is completed
 */
export function getCompletionMessage(character: CharacterName): string {
  const messages: Record<CharacterName, string> = {
    Repo: "🏛️ REPO UNLOCKED! Your foundation is SOLID!",
    Trinity: "🔮 TRINITY AWAKENED! Your purpose is CLEAR!",
    Velo: "🚀 VELO ACTIVATED! Your momentum is UNSTOPPABLE!",
    Reach: "🌐 REACH EXPANDED! You're connected!",
  };
  return messages[character];
}

/**
 * Get XP reward for completing a character
 */
export function getCharacterXPReward(character: CharacterName): number {
  const rewards: Record<CharacterName, number> = {
    Repo: 100,
    Trinity: 100,
    Velo: 100,
    Reach: 50, // Lower since it's always "complete"
  };
  return rewards[character];
}

/**
 * Get all characters complete celebration message
 */
export function getAllCompleteMessage(): string {
  return "🏆 ALL CHARACTERS UNLOCKED! You're ready to find your perfect role!";
}
