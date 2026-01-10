'use client';

import { CharacterSection, ProfileItem } from '../CharacterSection';
import { CHARACTERS, getCharacterCompletion, getCompletionMessage, type ProfileItems } from '@/lib/character-config';

interface TrinityCharacterProps {
  profileItems: ProfileItems;
}

const TRINITY_CONFIG = CHARACTERS.find(c => c.name === 'Trinity')!;

export function TrinityCharacter({ profileItems }: TrinityCharacterProps) {
  const completion = getCharacterCompletion(TRINITY_CONFIG, profileItems);

  // Trinity now focuses on Soul/Purpose instead of skills
  const careerMission = profileItems.career_mission?.[0];
  const values = profileItems.values || [];
  const longTermVision = profileItems.long_term_vision?.[0];

  // Legacy fallback: if user has career_goal, show it as mission
  const displayMission = careerMission?.value || profileItems.career_goal?.[0]?.value;

  return (
    <CharacterSection
      id="character-trinity"
      name="Trinity"
      title={TRINITY_CONFIG.title}
      subtitle={TRINITY_CONFIG.subtitle}
      icon={TRINITY_CONFIG.icon}
      animation={TRINITY_CONFIG.animation}
      color={TRINITY_CONFIG.color}
      gradient={TRINITY_CONFIG.gradient}
      isComplete={completion.isComplete}
      completionPercent={completion.percent}
      stage={completion.stage.name}
    >
      {/* Career Mission - The "Why" */}
      <ProfileItem
        label="Your Mission (Why)"
        value={displayMission}
        color={TRINITY_CONFIG.color}
        isComplete={!!displayMission}
      />

      {/* Values */}
      {values.length > 0 && (
        <div className="mt-4">
          <div className="text-sm text-gray-500 mb-2">Your Values</div>
          <div className="flex flex-wrap gap-2">
            {values.map((value, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-full border"
                style={{
                  backgroundColor: `${TRINITY_CONFIG.color}20`,
                  borderColor: `${TRINITY_CONFIG.color}50`,
                  color: TRINITY_CONFIG.color,
                }}
              >
                {value.value}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Long Term Vision */}
      <ProfileItem
        label="Long Term Vision"
        value={longTermVision?.value}
        color={TRINITY_CONFIG.color}
        isComplete={!!longTermVision}
      />

      {/* Soul-searching prompt when incomplete */}
      {!completion.isComplete && (
        <div className="mt-4 p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
          <div className="text-sm text-gray-400 mb-2">
            <span className="text-purple-400 font-medium">To awaken Trinity:</span>
          </div>
          <div className="text-gray-300 italic">
            Tell me your &ldquo;why&rdquo; - what drives you in your career?
          </div>
        </div>
      )}

      {completion.isComplete && (
        <div className="mt-4 p-3 rounded-lg bg-purple-500/10 border border-purple-500/30">
          <div className="text-sm text-purple-400">
            {getCompletionMessage('Trinity')}
          </div>
        </div>
      )}
    </CharacterSection>
  );
}
