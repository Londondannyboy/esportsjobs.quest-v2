import { MetadataRoute } from "next";
import { newsArticles } from "../lib/news-data";
import { esportsJobs } from "../lib/jobs-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mvp.actor";
  const now = new Date();

  // Define all pages with their priorities and change frequencies
  // Excluded: api, components, and any test/draft pages
  const pages: MetadataRoute.Sitemap = [
    // Homepage - highest priority
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },

    // Jobs board - high priority, updates frequently
    {
      url: `${baseUrl}/esports-jobs`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },

    // Individual Job Listings - dynamically generated
    ...esportsJobs.map((job) => ({
      url: `${baseUrl}/job/${job.id}`,
      lastModified: new Date(job.postedDate),
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),

    // P1 Pillar Pages - high priority
    {
      url: `${baseUrl}/esports-jobs-uk`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gaming-jobs-uk`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/esports-careers`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/esports-recruitment`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/esports-recruiting`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/esports-recruitment-agency`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/esports-agency`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/esports-talent-agency`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gaming-recruitment-agency`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },

    // P2 Pages - medium-high priority
    {
      url: `${baseUrl}/entry-level-esports-jobs-uk`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/esports-jobs-london`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/esports-jobs-remote`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gaming-industry-jobs-uk`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gaming-tester-jobs-uk`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-to-get-into-esports`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/esports-lecturer-jobs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },

    // P3 Pages - medium priority (career guides)
    {
      url: `${baseUrl}/esports-coach-careers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/esports-marketing-careers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/esports-analyst-careers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/esports-broadcaster-careers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/esports-salary-guide-uk`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/top-esports-companies-uk`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/game-industry-recruiters`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Company Career Pages - organization-specific job info
    {
      url: `${baseUrl}/fnatic-careers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/team-liquid-careers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/g2-esports-careers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cloud9-careers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/excel-esports-careers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guild-esports-careers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/british-esports-jobs`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    },

    // News Section - builds topical authority
    {
      url: `${baseUrl}/esports-news`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.85,
    },

    // Individual News Articles
    ...newsArticles.map((article) => ({
      url: `${baseUrl}/esports-news/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Glossary - programmatic SEO for definitions
    {
      url: `${baseUrl}/esports-glossary`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },

    // Competitor Comparison Pages - target competitor keywords
    {
      url: `${baseUrl}/esportsjobs-quest-vs-hitmarker`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },

    // UK City Pages - location-based job searches
    {
      url: `${baseUrl}/esports-jobs-manchester`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/esports-jobs-birmingham`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/esports-jobs-leeds`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/esports-jobs-edinburgh`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },

    // Global Esports Hub Pages - international job markets
    {
      url: `${baseUrl}/esports-jobs-singapore`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/esports-jobs-los-angeles`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/esports-jobs-berlin`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/esports-jobs-seoul`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/esports-jobs-sydney`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // USA Location Pages
    {
      url: `${baseUrl}/esports-jobs-usa`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/esports-jobs-new-york`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/esports-jobs-seattle`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/esports-jobs-austin`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // International Location Pages
    {
      url: `${baseUrl}/esports-jobs-australia`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/esports-jobs-canada`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/esports-jobs-germany`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // Middle East Location Pages
    {
      url: `${baseUrl}/esports-jobs-dubai`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/esports-jobs-saudi-arabia`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // European Location Pages
    {
      url: `${baseUrl}/esports-jobs-sweden`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/esports-jobs-france`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/esports-jobs-spain`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // Asia-Pacific Location Pages
    {
      url: `${baseUrl}/esports-jobs-japan`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // Latin America Location Pages
    {
      url: `${baseUrl}/esports-jobs-brazil`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // Game-Specific Job Pages
    {
      url: `${baseUrl}/league-of-legends-jobs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/valorant-jobs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/counter-strike-jobs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/fortnite-jobs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },

    // Intent-Specific Job Pages
    {
      url: `${baseUrl}/full-time-esports-jobs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/part-time-esports-jobs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/esports-internships`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },

    // Salary Guides
    {
      url: `${baseUrl}/esports-salary-guide-usa`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/esports-salary-guide-germany`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/esports-salary-guide-australia`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // UK Recruitment Agencies
    {
      url: `${baseUrl}/uk-esports-recruitment-agencies`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },

    // Competitor Alternative Pages
    {
      url: `${baseUrl}/aardvark-swift-alternative`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${baseUrl}/haptic-recruit-alternative`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    },

    // Utility pages - lowest priority
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return pages;
}
