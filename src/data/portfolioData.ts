export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'frontend' | 'fullstack' | 'security' | 'automation';
  githubUrl?: string;
  liveUrl?: string;
  isPrivate?: boolean;
  featured: boolean;
  metrics?: string[];
  highlights: string[];
  architectureOverview?: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  bullets: string[];
  techStack: string[];
}

export const PERSONAL_INFO = {
  name: "HOHA YEVHEN",
  nameRu: "Евгений Гога",
  title: "Full-Stack Engineer",
  subtitle: "React • TypeScript • FastAPI",
  experienceYears: "2.5+",
  location: "Brașov, Romania",
  hometown: "Odesa, Ukraine",
  university: "Odesa National Polytechnic University",
  degree: "Cybersecurity",
  email: "yevhenhoha.dev@gmail.com",
  phone: "+40 755 847 389",
  github: "https://github.com/Eragon1x2",
  linkedin: "https://linkedin.com/in/yevhen-hoha",
  languages: [
    { name: "English", level: "B2 (Professional Working)" },
    { name: "Romanian", level: "B2 (Upper Intermediate)" },
    { name: "Ukrainian", level: "C2 (Native/Bilingual)" }
  ],
  bio: "Full-Stack Engineer with 2.5+ years of experience building secure, high-performance web applications. Specialized in React, TypeScript, and Python (FastAPI). Strong track record in refactoring complex codebases, optimizing performance, and leveraging AI-assisted workflows (Cursor) for rapid delivery."
};

export const PROJECTS: Project[] = [
  {
    id: "guardrail",
    title: "Guardrail — DevSecOps API Vulnerability & Guardrail Scanner",
    description: "High-performance DevSecOps security scanner & automated fuzzing tool inspecting REST APIs and LLM prompts for BOLA, XSS, JWT flaws, and Prompt Injections.",
    longDescription: "High-performance DevSecOps API Vulnerability & Security Scanner. Web application where security engineers or developers input OpenAPI / FastAPI schemas or LLM prompts, and the Python backend (FastAPI + httpx) runs automated fuzzing tests for BOLA flaws, XSS, JWT vulnerabilities, and Prompt Injections, streaming real-time security telemetry over WebSockets.",
    tags: ["FastAPI", "Python", "TypeScript", "React", "DevSecOps", "BOLA & XSS Fuzzing", "WebSockets"],
    category: "security",
    githubUrl: "https://github.com/Eragon1x2/guardrail",
    isPrivate: false,
    featured: true,
    metrics: ["🛡️ Real-Time BOLA & Prompt Fuzzing", "⚡ Sub-15ms Async Inspection", "📊 Live WebSockets Telemetry"],
    highlights: [
      "Automated OpenAPI / FastAPI schema fuzzing for BOLA, XSS, SQLi, and JWT vulnerabilities",
      "Asynchronous Python backend (FastAPI + httpx) featuring custom automated security test engine",
      "Interactive React + TypeScript monitoring dashboard streaming live attack reports via WebSockets",
      "AI Guardrail filter testing LLM prompts for Prompt Injection, system overrides, and data leaks"
    ],
    architectureOverview: [
      "Backend: Async Python (FastAPI + httpx) Fuzzing & Guardrail Inspection Engine",
      "Telemetry: WebSockets real-time streaming to React frontend dashboard",
      "Detection: OWASP Top 10 rule patterns, BOLA access validation, and LLM injection filters"
    ]
  },
  {
    id: "forge-saas-dashboard",
    title: "Forge SaaS Dashboard",
    description: "Interactive SaaS analytics dashboard built with React, TypeScript, Vite, Zustand, and Recharts.",
    longDescription: "Commercial-grade interactive SaaS analytics dashboard featuring real-time data visualization, customizable drag-and-drop widget layouts, granular Zustand state selectors to prevent unnecessary re-renders, and responsive data tables with export capabilities.",
    tags: ["React", "TypeScript", "Vite", "Zustand", "Recharts", "Tailwind CSS"],
    category: "frontend",
    isPrivate: true,
    featured: true,
    metrics: ["⚡ Fast Vite Dev Server", "📊 10+ Interactive Recharts Widgets", "🎨 Custom Modular Component Architecture"],
    highlights: [
      "Modular dashboard widgets with persistent layout state saved in browser storage",
      "Optimized re-renders using granular Zustand state slices and memoized selectors",
      "Responsive data tables with sorting, multi-column filtering, and CSV export",
      "Dark & Light mode themes tailored for high-density SaaS user interfaces"
    ],
    architectureOverview: [
      "State Management: Granular Zustand store slices with atomic selector subscriptions",
      "Data Visualization: Custom Recharts wrappers with responsive container auto-scaling",
      "Performance: React.memo() component boundaries and lazy-loaded chart routes"
    ]
  },
  {
    id: "smartest-one",
    title: "Smartest One",
    description: "Full-Stack web platform powered by FastAPI backend and React frontend.",
    longDescription: "Architected an end-to-end full-stack monorepo web platform showcasing clean REST API design, Pydantic data validation schemas, PostgreSQL persistence with SQLAlchemy async ORM, and React TypeScript frontend integration.",
    tags: ["FastAPI", "Python", "React", "TypeScript", "PostgreSQL", "Monorepo"],
    category: "fullstack",
    isPrivate: true,
    featured: true,
    metrics: ["🚀 Sub-50ms API Latency", "🛡️ Pydantic V2 Strict Schema Validation", "📦 Clean Monorepo Architecture"],
    highlights: [
      "Designed secure RESTful API endpoints with FastAPI and async SQLAlchemy ORM queries",
      "Monorepo architecture with synchronized TypeScript types and Pydantic API schemas",
      "Comprehensive HTTP exception handling, structured JSON logging, and CORS middleware",
      "JWT authentication pipeline with token refresh mechanism and role-based permissions"
    ],
    architectureOverview: [
      "Backend: FastAPI async framework + Pydantic Schema V2 validation",
      "Database: PostgreSQL with Alembic database migrations & Asyncpg driver",
      "Frontend: React TS monorepo integration with custom fetch API client"
    ]
  },
  {
    id: "pointless-app",
    title: "Pointless App",
    description: "Gamified walking app that generates a random destination within a chosen radius. Stop thinking, start walking.",
    longDescription: "An innovative real-world exploration PWA that prompts users to step out of routine by generating randomized geographical micro-adventures within a custom kilometer radius.",
    tags: ["TypeScript", "React", "Geolocation API", "Leaflet/Maps", "PWA"],
    category: "frontend",
    githubUrl: "https://github.com/Eragon1x2/pointless-app",
    isPrivate: false,
    featured: true,
    metrics: ["🗺️ Real-Time GPS Geo-fencing", "🎲 Random Coordinate Generator", "🏆 Gamified Micro-Quests"],
    highlights: [
      "Calculates distance and compass bearing using Haversine formula",
      "Offline-first PWA architecture with Service Worker caching",
      "Gamified streak tracking and walking achievements"
    ]
  },
  {
    id: "cover-letter-generator",
    title: "AI Cover Letter Generator",
    description: "AI-assisted tool tailored to parse job specifications and generate targeted cover letters.",
    longDescription: "Automated candidate application utility leveraging LLM APIs to match applicant skills against job descriptions and produce personalized cover letters.",
    tags: ["Python", "FastAPI", "OpenAI API", "TypeScript", "Tailwind CSS"],
    category: "automation",
    isPrivate: true,
    featured: false,
    metrics: ["⚡ 5-second Generation Time", "🎯 Keywords ATS Matching", "📝 Multiple Tone Customizers"],
    highlights: [
      "Integrates LLM prompt engineering with structured Pydantic output parsing",
      "Export directly to PDF and plain text formats",
      "Preset profiles for different developer tech stacks"
    ]
  },
  {
    id: "indeed-parser",
    title: "Indeed Job Market Parser",
    description: "High-performance Python web scraping utility for job market intelligence.",
    longDescription: "Custom data extraction pipeline designed to crawl job market listings, extract salary ranges, required tech stacks, and remote availability.",
    tags: ["Python", "Asyncio", "Playwright", "Data Extraction"],
    category: "automation",
    githubUrl: "https://github.com/Eragon1x2/indeed-parser",
    isPrivate: false,
    featured: false,
    metrics: ["🕷️ Asynchronous Crawling Pipeline", "📊 Tech Stack Demand Aggregation"],
    highlights: [
      "Built resilient rate-limiting and user-agent rotation logic",
      "Structured output exported to JSON/CSV for data analytics",
      "Normalized skill keywords using regex matcher"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend",
    iconName: "Layout",
    skills: [
      { name: "React", level: 95, highlight: true },
      { name: "TypeScript", level: 92, highlight: true },
      { name: "Next.js", level: 85 },
      { name: "TanStack Query", level: 88 },
      { name: "Redux / Zustand", level: 90, highlight: true },
      { name: "Tailwind CSS", level: 94, highlight: true },
      { name: "SCSS / CSS Modules", level: 86 }
    ]
  },
  {
    category: "Backend & Data",
    iconName: "Server",
    skills: [
      { name: "FastAPI", level: 92, highlight: true },
      { name: "Python", level: 90, highlight: true },
      { name: "Node.js", level: 84 },
      { name: "PostgreSQL", level: 88, highlight: true },
      { name: "Supabase", level: 86 },
      { name: "MongoDB", level: 80 }
    ]
  },
  {
    category: "Security & DevSecOps",
    iconName: "ShieldAlert",
    skills: [
      { name: "DevSecOps & API Fuzzing", level: 95, highlight: true },
      { name: "LLM Red-Teaming & Guardrails", level: 95, highlight: true },
      { name: "XSS & CSP Hardening", level: 95, highlight: true },
      { name: "SQL Injection Patches", level: 92, highlight: true },
      { name: "BOLA & Access Control", level: 90, highlight: true },
      { name: "JWT Hardening", level: 88 }
    ]
  },
  {
    category: "DevOps & Tooling",
    iconName: "Cpu",
    skills: [
      { name: "Vite / Code Splitting", level: 94, highlight: true },
      { name: "Docker", level: 82 },
      { name: "GitHub Actions CI/CD", level: 85 },
      { name: "Webpack / Bun", level: 80 },
      { name: "Git / Linux", level: 90 },
      { name: "Cursor AI", level: 92, highlight: true }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "Jun 2026 – Present",
    role: "Freelance Full-Stack Engineer",
    company: "Independent Consultant",
    location: "Remote",
    type: "Freelance",
    bullets: [
      "Developing end-to-end full-stack web applications, DevSecOps tools, and API microservices for global clients.",
      "Architecting secure REST backends using FastAPI and PostgreSQL, integrated with modern React TypeScript frontends.",
      "Refactoring legacy web codebases, improving application stability, and optimizing page speed & Core Web Vitals.",
      "Providing technical consulting on system architecture, database design, and cloud deployments under tight deadlines."
    ],
    techStack: ["React", "TypeScript", "FastAPI", "Python", "DevSecOps", "PostgreSQL", "Tailwind CSS"]
  },
  {
    period: "Dec 2025 – May 2026",
    role: "Full-Stack Engineer (Contract)",
    company: "Confidential B2B SaaS Startup",
    location: "Remote",
    type: "Contract",
    bullets: [
      "Reduced bundle size by 43% using Vite code-splitting and dynamic imports, improving page load performance and UX.",
      "Architected the refactoring of 3000+ LOC legacy state logic, eliminating persistent frontend race conditions.",
      "Conducted thorough security audits and patched critical vulnerabilities (XSS, SQLi, BOLA, JWT) across the stack.",
      "Designed REST APIs in FastAPI with Pydantic schema validation and optimized database query performance.",
      "Built PWA Service Worker cache invalidation logic and configured CI/CD pipelines with Husky and Dependabot."
    ],
    techStack: ["React", "TypeScript", "FastAPI", "Vite", "Pydantic", "Security Auditing", "PWA"]
  },
  {
    period: "Aug 2024 – Dec 2025",
    role: "Freelance Full-Stack Consultant",
    company: "Independent Developer",
    location: "Remote",
    type: "Freelance",
    bullets: [
      "Developed custom features and Python backend services, integrating third-party APIs under tight deadlines.",
      "Improved Core Web Vitals (LCP, CLS) for client web applications by fixing performance bottlenecks and memory leaks.",
      "Refactored legacy React codebases, restoring stability and drastically reducing technical debt.",
      "Worked directly with clients to translate business requirements into clean technical solutions."
    ],
    techStack: ["React", "Python", "Node.js", "Core Web Vitals", "API Integration"]
  }
];
