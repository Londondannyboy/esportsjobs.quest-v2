'use client';

import dynamic from 'next/dynamic';
import { CharacterSection, ProfileItem, SkillsDisplay } from '../CharacterSection';
import { CHARACTERS, getCharacterCompletion, getCompletionMessage, type ProfileItems } from '@/lib/character-config';

// Lazy load the skills graph for Repo (moved from Trinity)
const RepoSkillsGraph = dynamic(
  () => import('../graphs').then(mod => mod.TrinitySkillsGraph),
  { ssr: false }
);

interface RepoCharacterProps {
  profileItems: ProfileItems;
}

const REPO_CONFIG = CHARACTERS.find(c => c.name === 'Repo')!;

export function RepoCharacter({ profileItems }: RepoCharacterProps) {
  const completion = getCharacterCompletion(REPO_CONFIG, profileItems);

  const location = profileItems.location?.[0];
  const role = profileItems.role?.[0];
  const skills = profileItems.skill || [];
  const minSkills = REPO_CONFIG.minItems?.skill || 3;

  return (
    <CharacterSection
      id="character-repo"
      name="Repo"
      title={REPO_CONFIG.title}
      subtitle={REPO_CONFIG.subtitle}
      icon={REPO_CONFIG.icon}
      animation={REPO_CONFIG.animation}
      color={REPO_CONFIG.color}
      gradient={REPO_CONFIG.gradient}
      isComplete={completion.isComplete}
      completionPercent={completion.percent}
      stage={completion.stage.name}
    >
      <ProfileItem
        label="Location"
        value={location?.value}
        color={REPO_CONFIG.color}
        isComplete={!!location}
      />

      {location?.metadata?.remote_ok === true && (
        <div className="ml-5 text-sm text-green-400">Remote OK</div>
      )}

      <ProfileItem
        label="Target Role"
        value={role?.value}
        color={REPO_CONFIG.color}
        isComplete={!!role}
      />

      {/* Skills Graph - now part of Repo (Foundation) */}
      {skills.length > 0 && (
        <div className="mt-4">
          <RepoSkillsGraph
            skills={skills}
            careerGoal={role?.value}
            className="mb-4"
          />
        </div>
      )}

      <SkillsDisplay
        skills={skills}
        color={REPO_CONFIG.color}
        minRequired={minSkills}
      />

      {!completion.isComplete && completion.missing.length > 0 && (
        <div className="mt-4 p-3 rounded-lg bg-gray-800/50 border border-gray-700">
          <div className="text-sm text-gray-400">
            <span className="text-yellow-400">To complete Repo:</span>{' '}
            Add your {completion.missing.join(' and ')}
          </div>
        </div>
      )}

      {completion.isComplete && (
        <div className="mt-4 p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
          <div className="text-sm text-cyan-400">
            {getCompletionMessage('Repo')}
          </div>
        </div>
      )}
    </CharacterSection>
  );
}
