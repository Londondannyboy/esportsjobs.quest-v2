// News article data - easily expandable
// Add new articles here and they'll automatically appear on the news page and generate individual pages

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Full article content in markdown-style paragraphs
  category: string;
  date: string;
  readTime: string;
  image: string;
  source: string;
  sourceUrl: string;
  author: string;
  tags: string[];
}

export const newsArticles: NewsArticle[] = [
  {
    id: "uk-esports-growth-2025",
    slug: "uk-esports-growth-2025",
    title: "UK Esports Industry Set for Major Growth in 2025",
    excerpt: "New report shows UK esports viewership and revenue projected to grow 25% in 2025, creating hundreds of new job opportunities across the sector.",
    content: `The UK esports industry is poised for significant expansion in 2025, according to a new report from the British Esports Federation. The comprehensive study predicts a 25% increase in both viewership and revenue compared to 2024, with particular growth expected in tournament operations, content creation, and corporate esports divisions.

## Key Findings

The report highlights several key growth drivers:

**Tournament Expansion**: Major tournament organisers are increasing their UK-based events, with ESL, BLAST, and domestic operators all announcing expanded calendars for 2025. This directly translates to increased demand for event staff, production crews, and broadcast talent.

**Corporate Investment**: Non-endemic brands continue to enter the space, with automotive, financial services, and FMCG companies all increasing their esports marketing budgets. This creates roles in partnership management, brand activation, and esports marketing.

**Education Sector Growth**: UK universities are expanding their esports programmes, with five new degree courses launching in 2025. This creates demand for esports lecturers, programme managers, and industry liaison roles.

## Job Market Implications

For job seekers, the report suggests the following areas will see the highest growth:

1. **Event Operations** - Tournament directors, event managers, production coordinators
2. **Content & Social** - Content managers, social media specialists, video producers
3. **Commercial** - Partnership managers, sales executives, brand strategists
4. **Broadcast** - Casters, analysts, observers, production staff

The average UK esports salary is also expected to rise by 8-12% as competition for talent intensifies.

## Regional Opportunities

While London remains the hub of UK esports activity, the report notes growing opportunities in Manchester, Birmingham, and Edinburgh as regional scenes develop and organisations seek cost-effective locations for operations.

The British Esports Federation's CEO commented: "2025 represents a pivotal year for UK esports. We're seeing professionalisation across all areas of the industry, which means more stable, well-paying career opportunities for those looking to enter the space."

For job seekers, now is an excellent time to position yourself for these emerging opportunities through skills development and networking within the UK esports community.`,
    category: "Industry",
    date: "2024-12-30",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=600&fit=crop",
    source: "British Esports Federation",
    sourceUrl: "https://britishesports.org",
    author: "EsportsJobs.quest",
    tags: ["UK Esports", "Industry Growth", "Career Opportunities", "2025 Predictions"],
  },
  {
    id: "excel-esports-expansion",
    slug: "excel-esports-expansion",
    title: "Excel Esports Announces Expansion Plans and New Hiring",
    excerpt: "UK-based organisation Excel Esports reveals plans to expand operations, with multiple new positions opening across marketing, operations, and content.",
    content: `Excel Esports, one of the UK's leading esports organisations, has announced significant expansion plans for 2025, including the creation of multiple new roles across their London headquarters.

## Expansion Details

The organisation, which competes in the League of Legends EMEA Championship (LEC), is expanding beyond their core competitive operations to build out their content, commercial, and community divisions.

**New Positions Opening**:
- Head of Content
- Social Media Manager
- Partnership Executive
- Community Manager
- Video Producer
- Graphic Designer

## Why This Matters for UK Esports Careers

Excel Esports represents one of the few UK-headquartered organisations competing at the highest level of European esports. Their expansion signals confidence in the UK market and creates rare opportunities to work for a top-tier organisation without relocating abroad.

The organisation's CEO stated: "We've built a competitive foundation over the past years, and now we're ready to scale our off-server operations. We're looking for passionate individuals who understand esports culture and can help us connect with fans in authentic ways."

## Application Insights

For those interested in applying, Excel has indicated they value:

1. **Esports knowledge** - Understanding of the competitive scene, particularly League of Legends
2. **Cultural fit** - Alignment with their brand values and fan community
3. **Relevant experience** - Prior work in gaming, esports, or adjacent industries
4. **Passion projects** - Personal content creation or community involvement

The roles are expected to be posted on their careers page and major job boards throughout January 2025.

## About Excel Esports

Founded in 2014, Excel Esports is a British esports organisation competing in League of Legends (LEC), Valorant, and Fortnite. Based in London, they operate a state-of-the-art training facility and have established themselves as one of the UK's premier esports brands.

For UK-based esports professionals, this represents a significant opportunity to join a growing organisation with international competitive presence.`,
    category: "Organisations",
    date: "2024-12-28",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=1200&h=600&fit=crop",
    source: "Excel Esports",
    sourceUrl: "https://excelesports.com",
    author: "EsportsJobs.quest",
    tags: ["Excel Esports", "UK Jobs", "Esports Careers", "London"],
  },
  {
    id: "lec-broadcast-talent-2025",
    slug: "lec-broadcast-talent-2025",
    title: "LEC 2025: Broadcast Team Changes and Opportunities",
    excerpt: "The League of Legends EMEA Championship announces broadcast talent updates for 2025 season, signalling opportunities for aspiring casters and analysts.",
    content: `Riot Games has announced updates to the League of Legends EMEA Championship (LEC) broadcast team ahead of the 2025 season, with several departures creating openings for new talent.

## Broadcast Changes

The LEC, Europe's premier League of Legends competition, regularly rotates its on-air talent to keep broadcasts fresh. The 2025 changes include:

- Two caster positions opening due to talent pursuing other opportunities
- One analyst desk role available
- Expanded content team with new presenter positions

## What This Means for Aspiring Broadcast Talent

For those dreaming of a career in esports broadcasting, the LEC represents the pinnacle of European opportunities. These openings, while competitive, provide a clear pathway for talented individuals to reach the top level.

**How to Position Yourself**:

1. **Build a Portfolio** - Create casting demos, analysis videos, and on-camera content
2. **Start Local** - Cast amateur and semi-pro matches to build experience
3. **Network** - Engage with current talent and attend industry events
4. **Develop Game Knowledge** - Deep understanding of League of Legends is essential
5. **Work on Presentation** - Voice coaching, on-camera presence, and impromptu speaking skills

## The Application Process

Riot Games typically announces open applications for broadcast positions through their careers page and social media. Past hires have come from:

- National league broadcasts (UK League, Spanish Superliga, etc.)
- Independent casting and content creation
- Traditional sports broadcasting backgrounds
- Amateur tournament coverage

## UK Perspective

For UK-based talent, the LEC represents an accessible opportunity as broadcasts are conducted in English and the Berlin studio is within easy reach. Several current and former LEC talent have UK backgrounds, demonstrating the pathway is viable.

The LEC 2025 season begins in January, with new talent typically announced in the weeks leading up to the start.`,
    category: "Broadcasting",
    date: "2024-12-26",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=600&fit=crop",
    source: "Riot Games",
    sourceUrl: "https://lolesports.com",
    author: "EsportsJobs.quest",
    tags: ["LEC", "Broadcasting", "Casting", "League of Legends", "Riot Games"],
  },
  {
    id: "esports-university-courses-uk-2025",
    slug: "esports-university-courses-uk-2025",
    title: "UK Universities Expand Esports Degree Programmes for 2025",
    excerpt: "Several UK universities announce new esports management and production courses, creating demand for lecturers and industry professionals.",
    content: `The UK higher education sector continues to embrace esports, with multiple universities announcing new or expanded degree programmes for the 2025/26 academic year.

## New Programmes Announced

**Staffordshire University** - Expanding their established esports programme with a new MSc in Esports Business Management

**University of Chichester** - Launching BA (Hons) Esports Management and Marketing

**Solent University** - Adding esports production modules to their existing media programmes

**Confetti Institute of Creative Technologies** - New esports broadcasting and production diploma

**BIMM University** - Esports event management specialisation within their events degree

## Career Opportunities in Esports Education

This expansion creates two distinct career pathways:

### Academic Roles
- **Esports Lecturers** - Teaching esports-specific modules
- **Programme Leaders** - Managing esports degree programmes
- **Research Fellows** - Conducting esports industry research

### Industry Partnership Roles
- **Industry Liaison Officers** - Connecting students with employers
- **Placement Coordinators** - Managing work experience programmes
- **Guest Lecturers** - Industry professionals sharing expertise

## Requirements for Academic Positions

Universities typically seek candidates with:

1. **Industry Experience** - 3-5+ years working in esports
2. **Academic Qualifications** - Master's degree minimum, PhD preferred for senior roles
3. **Teaching Experience** - Prior lecturing or training delivery
4. **Research Potential** - Published work or research interests
5. **Industry Connections** - Network for student placements and guest speakers

## Why This Matters

The growth of esports education creates a sustainable talent pipeline for the industry while offering stable career options for experienced professionals. Unlike volatile esports organisation roles, academic positions offer:

- Job security and pension schemes
- Regular working hours
- Professional development opportunities
- The chance to shape the next generation of esports professionals

For those considering a transition from industry to academia, now is an excellent time to explore these opportunities.`,
    category: "Education",
    date: "2024-12-24",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop",
    source: "UCAS",
    sourceUrl: "https://ucas.com",
    author: "EsportsJobs.quest",
    tags: ["Education", "University", "Esports Degrees", "Lecturing", "Academia"],
  },
  {
    id: "valorant-champions-tour-emea-2025",
    slug: "valorant-champions-tour-emea-2025",
    title: "VCT EMEA 2025: What It Means for UK Esports Careers",
    excerpt: "Riot Games' Valorant Champions Tour EMEA structure for 2025 brings new opportunities for UK talent in coaching, analysis, and production.",
    content: `Riot Games has revealed the Valorant Champions Tour (VCT) EMEA structure for 2025, with changes that have significant implications for career opportunities in the UK esports scene.

## VCT EMEA 2025 Structure

The 2025 season introduces several changes:

- **Expanded Team Roster** - Two additional partnership slots for EMEA
- **Enhanced Broadcast** - Increased broadcast hours and production value
- **Regional Integration** - Stronger ties between VCT and national leagues

## Career Opportunities

### Team Positions
With roster expansion, partnered teams are increasing their staff:

- **Coaches** - Head coaches and assistant coaches for new rosters
- **Analysts** - Data analysts and VOD reviewers
- **Team Managers** - Operations and logistics coordination
- **Performance Staff** - Sports psychologists and physical trainers

### Production Roles
Enhanced broadcasts require larger crews:

- **Observers** - In-game camera operators
- **Producers** - Broadcast and segment producers
- **Graphics Operators** - Real-time graphics and overlays
- **Technical Directors** - Broadcast technical management

### Content Positions
Increased content output means more opportunities:

- **Content Producers** - Video and social content
- **Writers** - Editorial and storytelling
- **Social Media Managers** - Platform-specific content strategy

## UK-Specific Opportunities

For UK professionals, VCT EMEA offers several advantages:

1. **English-Language Broadcast** - Primary language is English, removing barriers
2. **Geographic Accessibility** - Events held across Europe
3. **UK Team Presence** - UK-based organisations in partnership leagues
4. **Time Zone Alignment** - Broadcasts during UK working hours

## How to Prepare

To position yourself for VCT opportunities:

1. **Master Valorant** - Deep game knowledge is essential
2. **Build Experience** - Work on amateur/semi-pro Valorant events
3. **Create Content** - Demonstrate your skills through public work
4. **Network** - Connect with current VCT professionals
5. **Stay Informed** - Follow VCT news and understand the ecosystem

The VCT 2025 season kicks off in February, with teams finalising staff in the weeks ahead.`,
    category: "Tournaments",
    date: "2024-12-22",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&h=600&fit=crop",
    source: "Riot Games",
    sourceUrl: "https://valorantesports.com",
    author: "EsportsJobs.quest",
    tags: ["Valorant", "VCT", "EMEA", "Riot Games", "Competitive"],
  },
  {
    id: "esports-salaries-rising-uk-2025",
    slug: "esports-salaries-rising-uk-2025",
    title: "Esports Salaries in UK Continue Upward Trend",
    excerpt: "Industry salary data shows esports professionals in the UK seeing 10-15% salary increases year-over-year, with management roles leading growth.",
    content: `New salary data for the UK esports industry shows continued upward pressure on compensation, with professionals seeing 10-15% increases compared to 2024.

## Salary Growth by Role

Based on our research and industry data, here are the current UK esports salary ranges:

### Management & Operations
- **Head of Esports**: £65,000 - £95,000 (+12% YoY)
- **Esports Manager**: £40,000 - £60,000 (+10% YoY)
- **Operations Manager**: £35,000 - £50,000 (+8% YoY)
- **Team Manager**: £30,000 - £45,000 (+10% YoY)

### Commercial & Marketing
- **Partnership Director**: £55,000 - £80,000 (+15% YoY)
- **Marketing Manager**: £38,000 - £55,000 (+12% YoY)
- **Social Media Manager**: £28,000 - £40,000 (+8% YoY)

### Content & Production
- **Head of Content**: £45,000 - £65,000 (+10% YoY)
- **Video Producer**: £30,000 - £45,000 (+8% YoY)
- **Broadcast Producer**: £35,000 - £50,000 (+12% YoY)

### Coaching & Analysis
- **Head Coach**: £45,000 - £80,000 (+15% YoY)
- **Assistant Coach**: £30,000 - £45,000 (+10% YoY)
- **Analyst**: £28,000 - £42,000 (+8% YoY)

## Why Salaries Are Rising

Several factors drive salary growth:

1. **Talent Scarcity** - Experienced esports professionals remain rare
2. **Competition** - Organisations competing for limited talent pool
3. **Professionalisation** - Industry maturing with higher standards
4. **External Investment** - Non-endemic brands bringing corporate budgets
5. **Retention Focus** - Companies paying more to keep key staff

## Regional Variations

London-based roles typically command 15-20% premium over other UK locations. However, remote work has partially flattened this differential, with some organisations offering location-agnostic salaries.

## Negotiation Tips

For those seeking salary increases:

1. **Benchmark** - Use our salary guide to understand market rates
2. **Document Value** - Track your achievements and impact
3. **Time It Right** - Align requests with performance reviews or project completions
4. **Consider Total Compensation** - Equity, bonuses, and benefits matter
5. **Be Prepared to Move** - External offers often drive internal increases

For a complete breakdown, see our [UK Esports Salary Guide](/esports-salary-guide-uk).`,
    category: "Careers",
    date: "2024-12-20",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop",
    source: "EsportsJobs.quest",
    sourceUrl: "https://esportsjobs.quest/esports-salary-guide-uk",
    author: "EsportsJobs.quest",
    tags: ["Salaries", "UK", "Career Development", "Compensation"],
  },
];

// Helper functions
export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: string): NewsArticle[] {
  if (category === "All") return newsArticles;
  return newsArticles.filter((article) => article.category === category);
}

export function getRelatedArticles(currentSlug: string, limit: number = 3): NewsArticle[] {
  const current = getArticleBySlug(currentSlug);
  if (!current) return newsArticles.slice(0, limit);

  return newsArticles
    .filter((article) => article.slug !== currentSlug)
    .filter((article) =>
      article.category === current.category ||
      article.tags.some((tag) => current.tags.includes(tag))
    )
    .slice(0, limit);
}

export function getAllSlugs(): string[] {
  return newsArticles.map((article) => article.slug);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export const newsCategories = [
  "All",
  "Industry",
  "Organisations",
  "Careers",
  "Broadcasting",
  "Tournaments",
  "Education",
];
