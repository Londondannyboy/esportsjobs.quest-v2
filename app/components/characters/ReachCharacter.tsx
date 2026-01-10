'use client';

import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { CharacterSection, ProfileItem } from '../CharacterSection';
import { CHARACTERS, getCharacterCompletion, getCompletionMessage, type ProfileItems } from '@/lib/character-config';

const ReachNetworkGraph = dynamic(
  () => import('../graphs').then(mod => mod.ReachNetworkGraph),
  { ssr: false }
);

interface SavedJob {
  id: string;
  title: string;
  company: string;
  matchScore?: number;
}

interface Connection {
  id: string;
  name: string;
  type: 'seeker' | 'coach' | 'recruiter';
  avatar?: string;
}

interface ReachCharacterProps {
  profileItems: ProfileItems;
  savedJobs?: SavedJob[];
  savedJobsCount?: number;
  assessmentsCount?: number;
  connections?: Connection[];
  unreadMessages?: number;
}

const REACH_CONFIG = CHARACTERS.find(c => c.name === 'Reach')!;

type ReachTab = 'network' | 'messages' | 'coaches';

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
        active
          ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
          : 'text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/10'
      }`}
    >
      {children}
    </button>
  );
}

export function ReachCharacter({
  profileItems,
  savedJobs = [],
  savedJobsCount,
  assessmentsCount = 0,
  connections = [],
  unreadMessages = 0,
}: ReachCharacterProps) {
  const [activeTab, setActiveTab] = useState<ReachTab>('network');

  // Use provided count or derive from savedJobs array
  const jobsCount = savedJobsCount ?? savedJobs.length;
  const completion = getCharacterCompletion(REACH_CONFIG, profileItems);

  const visibility = profileItems.network_visibility?.[0];

  return (
    <CharacterSection
      id="character-reach"
      name="Reach"
      title={REACH_CONFIG.title}
      subtitle={REACH_CONFIG.subtitle}
      icon={REACH_CONFIG.icon}
      animation={REACH_CONFIG.animation}
      color={REACH_CONFIG.color}
      gradient={REACH_CONFIG.gradient}
      isComplete={completion.isComplete}
      completionPercent={completion.percent}
      stage={completion.stage.name}
    >
      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6">
        <TabButton active={activeTab === 'network'} onClick={() => setActiveTab('network')}>
          My Network
        </TabButton>
        <TabButton active={activeTab === 'messages'} onClick={() => setActiveTab('messages')}>
          Messages
          {unreadMessages > 0 && (
            <span className="ml-2 px-2 py-0.5 text-xs bg-red-500 text-white rounded-full">
              {unreadMessages}
            </span>
          )}
        </TabButton>
        <TabButton active={activeTab === 'coaches'} onClick={() => setActiveTab('coaches')}>
          Find Coaches
        </TabButton>
      </div>

      {/* Network Tab */}
      {activeTab === 'network' && (
        <div className="space-y-4">
          {/* Network Graph - shows reach with saved jobs and assessments */}
          {(savedJobs.length > 0 || assessmentsCount > 0) && (
            <ReachNetworkGraph
              savedJobs={savedJobs}
              assessmentsCount={assessmentsCount}
              className="mb-4"
            />
          )}

          {/* Connections Summary */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50">
            <div>
              <div className="text-sm text-gray-500">Connections</div>
              <div className="text-2xl font-bold" style={{ color: REACH_CONFIG.color }}>
                {connections.length}
              </div>
            </div>
            {connections.length === 0 && (
              <div className="text-xs text-gray-500">
                Connect with coaches & recruiters
              </div>
            )}
          </div>

          {/* Saved Jobs */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50">
            <div>
              <div className="text-sm text-gray-500">Saved Jobs</div>
              <div className="text-2xl font-bold" style={{ color: REACH_CONFIG.color }}>
                {jobsCount}
              </div>
            </div>
            <Link
              href="/esports-jobs"
              className="text-sm px-4 py-2 rounded-lg bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 transition-colors"
            >
              Browse Jobs
            </Link>
          </div>

          {/* Assessments */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50">
            <div>
              <div className="text-sm text-gray-500">Job Assessments</div>
              <div className="text-2xl font-bold" style={{ color: REACH_CONFIG.color }}>
                {assessmentsCount}
              </div>
            </div>
            <div className="text-xs text-gray-500">
              Use &ldquo;Assess My Fit&rdquo; on job pages
            </div>
          </div>

          {/* Visibility */}
          <ProfileItem
            label="Profile Visibility"
            value={visibility?.value || 'Private'}
            color={REACH_CONFIG.color}
          />
        </div>
      )}

      {/* Messages Tab */}
      {activeTab === 'messages' && (
        <div className="space-y-4">
          <div className="p-6 rounded-lg bg-gray-800/30 border border-gray-700 text-center">
            <div className="text-3xl mb-2">💬</div>
            <div className="text-gray-400 mb-4">
              {unreadMessages > 0
                ? `You have ${unreadMessages} unread message${unreadMessages > 1 ? 's' : ''}`
                : 'No messages yet'}
            </div>
            <p className="text-sm text-gray-500">
              Connect with coaches and recruiters to start conversations
            </p>
          </div>
        </div>
      )}

      {/* Coaches Tab */}
      {activeTab === 'coaches' && (
        <div className="space-y-4">
          <div className="p-6 rounded-lg bg-gray-800/30 border border-gray-700 text-center">
            <div className="text-3xl mb-2">🧭</div>
            <div className="text-gray-400 mb-4">Career Coaches</div>
            <p className="text-sm text-gray-500 mb-4">
              Connect with verified career coaches for personalized guidance
            </p>
            <div className="text-xs text-yellow-400">
              Coming soon...
            </div>
          </div>
        </div>
      )}

      {/* CTA to expand reach */}
      <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30">
        <div className="text-sm text-yellow-400 mb-2">
          Expand your reach
        </div>
        <div className="text-xs text-gray-400">
          Connect with career coaches, save interesting jobs, and assess your fit to grow your professional network.
        </div>
      </div>

      {completion.isComplete && (
        <div className="mt-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
          <div className="text-sm text-yellow-400">
            {getCompletionMessage('Reach')}
          </div>
        </div>
      )}
    </CharacterSection>
  );
}
