import type { Metadata } from "next";
import Link from "next/link";
import { UnifiedHeader, JOBS_SITE_NAV_ITEMS } from "../components/UnifiedHeader";
import { UnifiedFooter } from "../components/UnifiedFooter";
import { RealJobsSection } from "../components/RealJobsSection";

// Target keyword: "esports careers"
export const metadata: Metadata = {
  title: "Esports Careers 🚀 Complete Guide",
  description: "🎯 Esports careers guide covering coaching, broadcasting, marketing & management paths. Salary info, requirements & how to break into the industry.",
  keywords: "esports careers, esports career paths, gaming careers",
  openGraph: {
    title: "Esports Careers 🚀 Complete Guide",
    description: "🎯 Esports careers guide covering coaching, broadcasting, marketing & management paths.",
    type: "website",
    url: "https://esportsjobs.quest/esports-careers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esports Careers 🚀 Complete Guide",
    description: "🎯 Esports careers guide covering all paths into the industry.",
  },
  alternates: {
    canonical: "https://esportsjobs.quest/esports-careers",
  },
};

const careerPaths = [
  {
    title: "Competition & Performance",
    icon: "🏆",
    description: "Work directly with professional teams and players to achieve competitive success.",
    careers: [
      {
        role: "Esports Coach",
        description: "Lead teams strategically, develop talent, and guide players to victory.",
        salary: "£30,000 - £80,000",
        requirements: ["Deep game knowledge", "Leadership skills", "Communication", "Strategic thinking"],
        progression: "Assistant Coach → Head Coach → Director of Esports",
        link: "/esports-coach-careers",
      },
      {
        role: "Esports Analyst",
        description: "Analyse gameplay data, scout opponents, and provide tactical insights.",
        salary: "£25,000 - £55,000",
        requirements: ["Data analysis", "Game expertise", "Pattern recognition", "Presentation skills"],
        progression: "Junior Analyst → Senior Analyst → Head of Analytics",
        link: "/esports-analyst-careers",
      },
      {
        role: "Team Manager",
        description: "Handle player welfare, logistics, contracts, and day-to-day team operations.",
        salary: "£28,000 - £60,000",
        requirements: ["Organisation", "People management", "Contract negotiation", "Travel coordination"],
        progression: "Assistant Manager → Team Manager → General Manager",
        link: "/esports-jobs-uk",
      },
      {
        role: "Sports Psychologist",
        description: "Support player mental health, performance psychology, and team dynamics.",
        salary: "£35,000 - £70,000",
        requirements: ["Psychology degree", "Sports psychology certification", "Counselling skills"],
        progression: "Performance Coach → Head of Player Welfare → Director",
        link: "/esports-jobs-uk",
      },
    ],
  },
  {
    title: "Content & Broadcasting",
    icon: "📺",
    description: "Create engaging content and bring esports to audiences worldwide.",
    careers: [
      {
        role: "Esports Broadcaster / Caster",
        description: "Commentate live matches, analyse gameplay, and entertain viewers.",
        salary: "£25,000 - £80,000",
        requirements: ["Public speaking", "Game knowledge", "Quick thinking", "Entertaining delivery"],
        progression: "Amateur Caster → Freelance → Staff Caster → Lead Talent",
        link: "/esports-broadcaster-careers",
      },
      {
        role: "Content Creator",
        description: "Produce videos, streams, and social content for esports audiences.",
        salary: "£25,000 - £100,000+",
        requirements: ["Video editing", "Creativity", "Audience understanding", "Personal brand"],
        progression: "Creator → Signed Creator → Brand Ambassador → Talent Manager",
        link: "/esports-careers",
      },
      {
        role: "Video Producer",
        description: "Create documentary-style content, match highlights, and promotional videos.",
        salary: "£28,000 - £55,000",
        requirements: ["Video production", "Storytelling", "Adobe Creative Suite", "Project management"],
        progression: "Junior Editor → Producer → Creative Director",
        link: "/esports-careers",
      },
      {
        role: "Broadcast Producer",
        description: "Direct live esports broadcasts, coordinate talent, and manage production.",
        salary: "£30,000 - £65,000",
        requirements: ["Live production experience", "Leadership", "Technical knowledge", "Problem-solving"],
        progression: "Production Assistant → Producer → Executive Producer",
        link: "/esports-broadcaster-careers",
      },
    ],
  },
  {
    title: "Marketing & Business",
    icon: "📢",
    description: "Build brands, secure partnerships, and drive business growth in esports.",
    careers: [
      {
        role: "Esports Marketing Manager",
        description: "Develop marketing strategies, run campaigns, and grow brand awareness.",
        salary: "£32,000 - £70,000",
        requirements: ["Marketing experience", "Digital marketing", "Analytics", "Campaign management"],
        progression: "Marketing Coordinator → Manager → Head of Marketing → CMO",
        link: "/esports-marketing-careers",
      },
      {
        role: "Partnerships Manager",
        description: "Secure and manage sponsorships, negotiate deals, and deliver partner value.",
        salary: "£35,000 - £80,000",
        requirements: ["Sales experience", "Relationship building", "Negotiation", "Presentation skills"],
        progression: "Partnerships Executive → Manager → Director of Partnerships",
        link: "/esports-jobs-uk",
      },
      {
        role: "Community Manager",
        description: "Build and engage fan communities across Discord, social media, and events.",
        salary: "£25,000 - £45,000",
        requirements: ["Social media expertise", "Community building", "Content creation", "Moderation"],
        progression: "Community Coordinator → Manager → Head of Community",
        link: "/esports-jobs-uk",
      },
      {
        role: "Business Development",
        description: "Identify growth opportunities, new markets, and strategic partnerships.",
        salary: "£40,000 - £90,000",
        requirements: ["Business acumen", "Industry knowledge", "Strategic thinking", "Networking"],
        progression: "BD Executive → Manager → VP Business Development",
        link: "/esports-jobs-uk",
      },
    ],
  },
  {
    title: "Events & Operations",
    icon: "🏟️",
    description: "Plan and execute esports tournaments and manage organisation operations.",
    careers: [
      {
        role: "Tournament Organiser",
        description: "Plan and run esports competitions from online cups to arena events.",
        salary: "£28,000 - £55,000",
        requirements: ["Event planning", "Logistics", "Problem-solving", "Stakeholder management"],
        progression: "Tournament Admin → Coordinator → Director of Esports",
        link: "/esports-jobs-uk",
      },
      {
        role: "Event Manager",
        description: "Oversee all aspects of live esports events including venues and production.",
        salary: "£32,000 - £65,000",
        requirements: ["Event management", "Budget management", "Vendor coordination", "Team leadership"],
        progression: "Event Coordinator → Manager → Head of Events",
        link: "/esports-jobs-uk",
      },
      {
        role: "Operations Manager",
        description: "Keep esports organisations running smoothly across all departments.",
        salary: "£35,000 - £70,000",
        requirements: ["Operations experience", "Project management", "Process improvement", "Leadership"],
        progression: "Operations Coordinator → Manager → COO",
        link: "/esports-jobs-uk",
      },
      {
        role: "Referee / Admin",
        description: "Officiate matches, enforce rules, and ensure competitive integrity.",
        salary: "£20,000 - £40,000",
        requirements: ["Rule knowledge", "Impartiality", "Attention to detail", "Communication"],
        progression: "Volunteer Admin → Staff Admin → Head Admin → Competitive Operations",
        link: "/esports-jobs-uk",
      },
    ],
  },
  {
    title: "Education & Development",
    icon: "📚",
    description: "Shape the next generation of esports professionals and players.",
    careers: [
      {
        role: "Esports Lecturer",
        description: "Teach esports courses at universities and colleges across the UK.",
        salary: "£30,000 - £55,000",
        requirements: ["Industry experience", "Teaching qualification", "Subject expertise", "Communication"],
        progression: "Associate Lecturer → Lecturer → Senior Lecturer → Programme Lead",
        link: "/esports-lecturer-jobs",
      },
      {
        role: "Youth Esports Coach",
        description: "Coach young players in schools, academies, and youth programmes.",
        salary: "£22,000 - £40,000",
        requirements: ["Coaching skills", "Youth work experience", "DBS check", "Patience"],
        progression: "Volunteer Coach → Staff Coach → Academy Manager",
        link: "/esports-coach-careers",
      },
      {
        role: "Curriculum Developer",
        description: "Design esports education programmes and learning materials.",
        salary: "£28,000 - £50,000",
        requirements: ["Education background", "Industry knowledge", "Curriculum design", "Writing skills"],
        progression: "Content Writer → Developer → Education Director",
        link: "/esports-lecturer-jobs",
      },
    ],
  },
];

const skillsRequired = [
  {
    category: "Technical Skills",
    skills: [
      { name: "Video Editing", tools: "Premier Pro, After Effects, DaVinci Resolve" },
      { name: "Data Analysis", tools: "Excel, Python, Tableau, game-specific tools" },
      { name: "Graphic Design", tools: "Photoshop, Illustrator, Figma" },
      { name: "Live Production", tools: "OBS, vMix, Wirecast, graphics packages" },
      { name: "Social Media", tools: "Platform expertise, scheduling tools, analytics" },
    ],
  },
  {
    category: "Game Knowledge",
    skills: [
      { name: "Competitive Titles", tools: "LoL, Valorant, CS2, Dota 2, Rocket League, FIFA" },
      { name: "Meta Understanding", tools: "Patch notes, strategy forums, pro analysis" },
      { name: "Tournament Formats", tools: "Swiss, double elimination, round robin" },
      { name: "Esports Ecosystem", tools: "Teams, leagues, publishers, stakeholders" },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Communication", tools: "Written, verbal, presentation, cross-cultural" },
      { name: "Project Management", tools: "Asana, Trello, Jira, deadline management" },
      { name: "Networking", tools: "Industry events, Discord, Twitter/X, LinkedIn" },
      { name: "Adaptability", tools: "Fast-paced environment, changing priorities" },
      { name: "Passion", tools: "Genuine enthusiasm for gaming and esports" },
    ],
  },
];

const qualifications = [
  {
    title: "University Degrees",
    description: "Several UK universities offer esports-specific or relevant courses.",
    examples: ["BA Esports (Staffordshire University)", "BSc Esports (University of Chichester)", "Esports Management (UCFB)", "Games Design with Esports"],
    relevance: "Helpful for marketing, management, and education roles. Not always required.",
  },
  {
    title: "Industry Certifications",
    description: "Professional certifications that add value to esports careers.",
    examples: ["Google Analytics Certification", "HubSpot Marketing", "Adobe Certified", "Project Management (PRINCE2, Agile)"],
    relevance: "Valuable for demonstrating specific skills, especially in marketing and production.",
  },
  {
    title: "Coaching Qualifications",
    description: "Formal coaching certifications for esports coaching roles.",
    examples: ["British Esports Coach Certification", "UKCC Coaching Levels", "Sports Psychology Masters", "Performance Coaching Diploma"],
    relevance: "Increasingly valued, especially for roles in education and professional teams.",
  },
  {
    title: "Practical Experience",
    description: "Real-world experience often matters more than formal qualifications.",
    examples: ["Tournament volunteering", "Amateur team coaching", "Content creation portfolio", "University esports society"],
    relevance: "Essential for almost all esports roles. Build experience through any means possible.",
  },
];

const faqs = [
  {
    question: "What career paths are available in esports?",
    answer: "Esports offers diverse career paths: Competition & Performance (coach, analyst, team manager, sports psychologist), Content & Broadcasting (caster, content creator, video producer, broadcast producer), Marketing & Business (marketing manager, partnerships, community manager, business development), Events & Operations (tournament organiser, event manager, referee), and Education (esports lecturer, youth coach, curriculum developer). Each path has distinct progression from entry to senior levels.",
  },
  {
    question: "How do I start an esports career with no experience?",
    answer: "Start by: 1) Choosing your path based on skills/interests, 2) Building relevant skills (video editing, data analysis, marketing), 3) Gaining practical experience (volunteer at tournaments, coach amateur teams, create content), 4) Networking through Discord, Twitter, LinkedIn and events, 5) Creating a portfolio showcasing your work. Entry points include tournament administration, community management, content creation, or QA testing at game companies. Expect 1-2 years to land first paid roles.",
  },
  {
    question: "What transferable skills help in esports careers?",
    answer: "Valuable transferable skills include: traditional sports coaching (methodology applies to esports), digital marketing (social media, campaigns), video production (content demand is high), data analysis (performance tracking), event management (tournaments need this), project management (organising teams/content), communication (essential everywhere), and sales (partnerships roles). Coming from traditional sports, marketing, media, or tech backgrounds provides strong foundations for esports careers.",
  },
  {
    question: "How do you progress in an esports career?",
    answer: "Career progression typically follows: Entry level (intern, coordinator, junior) → Mid level (manager, producer, coach) → Senior level (head of department, director, executive). Timeline is usually 2-3 years per level. Advancement requires: demonstrating results, building industry relationships, developing leadership skills, staying current with industry trends, and often moving between organisations for bigger opportunities. Content creators progress by growing audiences and securing partnerships.",
  },
  {
    question: "Are esports careers stable and sustainable long-term?",
    answer: "Esports careers are increasingly stable as the industry matures and investment grows. The global esports market exceeded $1.5 billion in 2023 with continued growth projected. While individual organisations may face challenges, skills developed (digital marketing, content creation, data analysis, event management) transfer to other industries. Building diverse skills, maintaining networks, and adapting to trends creates long-term career resilience. The industry is professionalising rapidly with better salaries and benefits.",
  },
];

export default function EsportsCareers() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Esports Careers - Complete Pathway Guide 2025",
    description: "Comprehensive guide to esports career paths including coaching, broadcasting, marketing, and management.",
    url: "https://esportsjobs.quest/esports-careers",
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://esportsjobs.quest" },
        { "@type": "ListItem", position: 2, name: "Esports Careers", item: "https://esportsjobs.quest/esports-careers" },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UnifiedHeader activeSite="jobs" siteNavItems={JOBS_SITE_NAV_ITEMS} ctaLabel="Post a Job" ctaHref="/contact" />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-transparent to-violet-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-amber-400">Esports Careers</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Esports Careers: Your Complete{" "}
                <span className="bg-gradient-to-r from-amber-400 to-violet-400 bg-clip-text text-transparent">
                  Pathway Guide
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                From coaching professional teams to broadcasting matches, from marketing esports brands
                to organising tournaments—discover every career path in the esports industry. This
                comprehensive guide covers roles, requirements, salaries, and how to break in.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-3xl font-bold text-amber-400">20+</div>
                  <div className="text-sm text-slate-400">Career Paths</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-3xl font-bold text-violet-400">5</div>
                  <div className="text-sm text-slate-400">Career Categories</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-3xl font-bold text-cyan-400">£25k-100k+</div>
                  <div className="text-sm text-slate-400">Salary Range</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-3xl font-bold text-emerald-400">Growing</div>
                  <div className="text-sm text-slate-400">Industry</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/esports-jobs-uk"
                  className="px-8 py-4 bg-gradient-to-r from-amber-600 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
                >
                  Browse Esports Jobs
                </Link>
                <Link
                  href="/how-to-get-into-esports"
                  className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-amber-500 transition-all"
                >
                  How to Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        {careerPaths.map((path) => (
          <section key={path.title} className="py-16 odd:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl">{path.icon}</span>
                <div>
                  <h2 className="text-3xl font-bold text-white">{path.title}</h2>
                  <p className="text-slate-400">{path.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {path.careers.map((career) => (
                  <Link
                    key={career.role}
                    href={career.link}
                    className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-amber-500/50 transition-all group"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {career.role}
                      </h3>
                      <span className="text-emerald-400 text-sm font-medium">{career.salary}</span>
                    </div>
                    <p className="text-slate-400 text-sm mb-4">{career.description}</p>

                    <div className="mb-4">
                      <span className="text-xs text-slate-500">Key Requirements:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {career.requirements.map((req) => (
                          <span key={req} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-slate-500">
                      <strong>Progression:</strong> {career.progression}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Skills Required */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Skills for Esports Careers</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              Different esports careers require different skill sets. Here&apos;s what you need across
              categories.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {skillsRequired.map((category) => (
                <div key={category.category} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="text-amber-400 font-medium text-sm">{skill.name}</div>
                        <div className="text-slate-400 text-xs">{skill.tools}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Qualifications & Education</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              While formal qualifications aren&apos;t always required, they can strengthen your candidacy
              for certain roles.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {qualifications.map((qual) => (
                <div key={qual.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-2">{qual.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{qual.description}</p>
                  <div className="mb-4">
                    <span className="text-xs text-slate-500">Examples:</span>
                    <ul className="mt-1 space-y-1">
                      {qual.examples.map((ex) => (
                        <li key={ex} className="text-slate-300 text-sm">• {ex}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-amber-400 text-xs">{qual.relevance}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">How to Start Your Esports Career</h2>
            <p className="text-slate-400 mb-10 max-w-3xl">
              Follow this proven pathway to break into the esports industry.
            </p>

            <div className="grid md:grid-cols-5 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                <div className="w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center text-xl font-bold text-amber-400 mx-auto mb-4">1</div>
                <h3 className="font-bold text-white mb-2">Choose Your Path</h3>
                <p className="text-slate-400 text-sm">Identify which career area matches your skills and interests.</p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                <div className="w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center text-xl font-bold text-amber-400 mx-auto mb-4">2</div>
                <h3 className="font-bold text-white mb-2">Build Skills</h3>
                <p className="text-slate-400 text-sm">Develop relevant technical and soft skills for your chosen path.</p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                <div className="w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center text-xl font-bold text-amber-400 mx-auto mb-4">3</div>
                <h3 className="font-bold text-white mb-2">Get Experience</h3>
                <p className="text-slate-400 text-sm">Volunteer, create content, coach amateur teams—start anywhere.</p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                <div className="w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center text-xl font-bold text-amber-400 mx-auto mb-4">4</div>
                <h3 className="font-bold text-white mb-2">Network</h3>
                <p className="text-slate-400 text-sm">Connect with industry professionals through events and online.</p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                <div className="w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center text-xl font-bold text-amber-400 mx-auto mb-4">5</div>
                <h3 className="font-bold text-white mb-2">Apply & Persist</h3>
                <p className="text-slate-400 text-sm">Apply strategically, learn from rejections, and keep improving.</p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/how-to-get-into-esports"
                className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
              >
                Read our complete guide to breaking into esports →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10">Esports Career FAQs</h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-slate-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Jobs Section */}
        <RealJobsSection
          title="Current Esports Opportunities"
          subtitle="Real jobs aggregated from public sources"
          limit={6}
          showViewAll={true}
        />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-amber-600/20 via-slate-900 to-violet-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Esports Career?
            </h2>
            <p className="text-slate-300 mb-8">
              Browse current opportunities and take the first step towards your dream esports job.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/esports-jobs"
                className="px-8 py-4 bg-gradient-to-r from-amber-600 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
              >
                Browse All Jobs
              </Link>
              <Link
                href="/esports-jobs-uk"
                className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-amber-500 transition-all"
              >
                UK Jobs Guide
              </Link>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Explore Career Paths</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link href="/esports-coach-careers" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-amber-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Esports Coaching</h3>
                <p className="text-slate-400 text-sm">Guide teams to competitive success.</p>
              </Link>
              <Link href="/esports-broadcaster-careers" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-amber-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Broadcasting Careers</h3>
                <p className="text-slate-400 text-sm">Bring esports to life through commentary.</p>
              </Link>
              <Link href="/esports-marketing-careers" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-amber-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Esports Marketing</h3>
                <p className="text-slate-400 text-sm">Build brands and engage audiences.</p>
              </Link>
              <Link href="/esports-analyst-careers" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-amber-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Esports Analytics</h3>
                <p className="text-slate-400 text-sm">Data-driven competitive advantage.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <UnifiedFooter activeSite="jobs" />
    </div>
  );
}
