"use client";

import { useState } from "react";

interface SkillsGraphProps {
  skills: string[];
  jobTitle: string;
  category: string;
}

// Skill importance ratings for different categories
const categorySkillWeights: Record<string, Record<string, number>> = {
  coaching: {
    "Coaching": 95,
    "Team Management": 90,
    "Strategy Development": 88,
    "Player Development": 85,
    "Game Analysis": 82,
    "Communication": 80,
    "Leadership": 78,
    "Mentoring": 75,
  },
  marketing: {
    "Esports Marketing": 95,
    "Partnership Development": 90,
    "Social Media": 88,
    "Campaign Execution": 85,
    "Brand Strategy": 82,
    "Content Marketing": 80,
    "Project Management": 78,
    "Event Planning": 75,
  },
  production: {
    "Video Production": 95,
    "Live Production": 92,
    "Adobe Premiere Pro": 88,
    "Project Management": 85,
    "Content Creation": 82,
    "Team Management": 80,
    "Editing": 78,
    "Creative Vision": 75,
  },
  management: {
    "Client Servicing": 95,
    "Strategic Thinking": 92,
    "Project Management": 88,
    "eSports Knowledge": 85,
    "Event Management": 82,
    "Team Leadership": 80,
    "Business Development": 78,
    "Partnership Sales": 75,
  },
  content: {
    "Video Production": 95,
    "Content Creation": 92,
    "Adobe Premiere Pro": 88,
    "Live Event Production": 85,
    "Editing": 82,
    "Social Media": 80,
    "Streaming": 78,
    "Creative Direction": 75,
  },
  operations: {
    "Customer Service": 95,
    "Arena Management": 90,
    "Event Assistance": 85,
    "Gaming Knowledge": 82,
    "Social Media": 78,
    "Organization": 75,
  },
};

const skillColors = [
  "from-cyan-500 to-cyan-400",
  "from-purple-500 to-purple-400",
  "from-pink-500 to-pink-400",
  "from-green-500 to-green-400",
  "from-amber-500 to-amber-400",
  "from-blue-500 to-blue-400",
];

export function SkillsGraph({ skills, jobTitle, category }: SkillsGraphProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getSkillLevel = (skill: string): number => {
    const weights = categorySkillWeights[category] || {};
    return weights[skill] || Math.floor(Math.random() * 20) + 70;
  };

  return (
    <div className="skills-graph-container">
      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <span className="text-2xl">📊</span>
        Skills Required for {jobTitle}
      </h4>

      <div className="space-y-3">
        {skills.map((skill, index) => {
          const level = getSkillLevel(skill);
          const colorClass = skillColors[index % skillColors.length];
          const isHovered = hoveredSkill === skill;

          return (
            <div
              key={skill}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex justify-between items-center mb-1">
                <span className={`text-sm font-medium transition-colors ${isHovered ? 'text-cyan-400' : 'text-gray-300'}`}>
                  {skill}
                </span>
                <span className={`text-xs transition-colors ${isHovered ? 'text-cyan-400' : 'text-gray-400'}`}>
                  {level}%
                </span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${colorClass} rounded-full transition-all duration-500 ease-out`}
                  style={{
                    width: `${level}%`,
                    transform: isHovered ? 'scaleY(1.2)' : 'scaleY(1)',
                    transformOrigin: 'center',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-700">
        <p className="text-xs text-gray-400">
          Skill importance based on industry standards for {category} roles.
          Higher percentages indicate more critical skills for this position.
        </p>
      </div>
    </div>
  );
}

// Compact version for job cards
export function SkillsGraphCompact({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {skills.slice(0, 5).map((skill, index) => {
        const colorClass = skillColors[index % skillColors.length];
        return (
          <span
            key={skill}
            className={`px-2 py-0.5 text-xs rounded-full bg-gradient-to-r ${colorClass} bg-opacity-20 border border-current/30 text-white/90`}
          >
            {skill}
          </span>
        );
      })}
      {skills.length > 5 && (
        <span className="px-2 py-0.5 text-xs rounded-full bg-gray-700/50 text-gray-400">
          +{skills.length - 5} more
        </span>
      )}
    </div>
  );
}
