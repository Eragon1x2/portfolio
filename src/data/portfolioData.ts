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
  skills: { name: string; highlight?: boolean }[];
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

export interface HighlightStat {
  value: string;
  label: string;
}

export interface HighlightItem {
  category: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "HOHA YEVHEN",
  nameRu: "Евгений Гога",
  title: "Full-Stack Engineer",
  subtitle: "React · Next.js · TypeScript · FastAPI",
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
    { name: "Ukrainian", level: "Native" }
  ],
  bio: "I build fast, reliable web applications with a focus on performance, security, and maintainable architecture."
};

export const HIGHLIGHT_STATS: HighlightStat[] = [
  { value: "43%", label: "Production bundle reduction" },
  { value: "3,000+ LOC", label: "Legacy code refactored" },
  { value: "2.5+ years", label: "Commercial experience" },
  { value: "Full-Stack", label: "React → FastAPI → PostgreSQL" }
];

export const HIGHLIGHT_ITEMS: HighlightItem[] = [
  {
    category: "Performance",
    description: "Reduced production bundle size by 43% through code splitting, dependency optimization and build configuration."
  },
  {
    category: "Architecture",
    description: "Refactored 3,000+ lines of legacy React code and addressed race conditions affecting application stability."
  },
  {
    category: "Security",
    description: "Identified and addressed common web security issues including XSS, SQL injection, BOLA/IDOR and authentication vulnerabilities."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "pointless-app",
    title: "Pointless App",
    category: "frontend",
    description: "Gamified walking app focused on random destination generation and real-world micro-adventures.",
    longDescription: "An innovative real-world exploration PWA that prompts users to step out of routine by generating randomized geographical destinations within a chosen radius.",
    tags: ["React", "TypeScript", "Geolocation API", "Leaflet", "PWA"],
    githubUrl: "https://github.com/Eragon1x2/pointless-app",
    isPrivate: false,
    featured: true,
    metrics: ["🗺️ Real-Time GPS Geo-fencing", "🎲 Random Radius Generator", "🏆 Gamified Exploration"],
    highlights: [
      "Calculates distance and compass bearing using Haversine formula",
      "Offline-first PWA architecture with Service Worker caching",
      "Gamified streak tracking and walking achievements"
    ]
  },
  {
    id: "guardrail",
    title: "Guardrail",
    category: "security",
    description: "DevSecOps API Security Scanner inspecting REST endpoints for BOLA, XSS, and authentication flaws.",
    longDescription: "High-performance DevSecOps API Vulnerability & Security Scanner. Web application where developers input OpenAPI / FastAPI schemas to run automated fuzzing tests for BOLA flaws, XSS, and JWT vulnerabilities, streaming real-time security telemetry over WebSockets.",
    tags: ["FastAPI", "Python", "TypeScript", "React", "DevSecOps", "WebSockets"],
    githubUrl: "https://github.com/Eragon1x2/guardrail",
    isPrivate: false,
    featured: true,
    metrics: ["🛡️ Real-Time BOLA & Fuzzing", "⚡ Sub-15ms Async Inspection", "📊 Live WebSockets Telemetry"],
    highlights: [
      "Automated OpenAPI / FastAPI schema fuzzing for BOLA, XSS, SQLi, and JWT vulnerabilities",
      "Asynchronous Python backend (FastAPI + httpx) featuring custom automated security test engine",
      "Interactive React + TypeScript monitoring dashboard streaming live attack reports via WebSockets"
    ],
    architectureOverview: [
      "Backend: Async Python (FastAPI + httpx) Fuzzing Inspection Engine",
      "Telemetry: WebSockets real-time streaming to React frontend dashboard",
      "Detection: OWASP Top 10 rule patterns, BOLA access validation, and JWT verification"
    ]
  },
  {
    id: "smartest-one",
    title: "Smartest One",
    category: "fullstack",
    description: "Full-stack web platform combining a modern React frontend with FastAPI REST APIs and PostgreSQL.",
    longDescription: "Architected an end-to-end full-stack monorepo web platform showcasing clean REST API design, Pydantic data validation schemas, PostgreSQL persistence with SQLAlchemy async ORM, and React TypeScript frontend integration.",
    tags: ["FastAPI", "Python", "React", "TypeScript", "PostgreSQL", "Monorepo"],
    isPrivate: true,
    featured: true,
    metrics: ["🚀 Sub-50ms API Latency", "🛡️ Pydantic V2 Schema Validation", "📦 Clean Monorepo Architecture"],
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
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend",
    iconName: "Layout",
    skills: [
      { name: "React", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "TanStack Query", highlight: false },
      { name: "Redux / Zustand", highlight: false },
      { name: "CSS / SCSS / CSS Modules", highlight: false }
    ]
  },
  {
    category: "Backend & Data",
    iconName: "Server",
    skills: [
      { name: "Python", highlight: true },
      { name: "FastAPI", highlight: true },
      { name: "REST APIs", highlight: true },
      { name: "PostgreSQL", highlight: true },
      { name: "Supabase", highlight: false },
      { name: "Node.js", highlight: false },
      { name: "MongoDB", highlight: false }
    ]
  },
  {
    category: "Performance",
    iconName: "Zap",
    skills: [
      { name: "Core Web Vitals", highlight: true },
      { name: "Bundle Optimization", highlight: true },
      { name: "Code Splitting", highlight: true },
      { name: "Caching Strategies", highlight: false },
      { name: "Memory Leak Debugging", highlight: true },
      { name: "Vite Optimization", highlight: false }
    ]
  },
  {
    category: "Security",
    iconName: "ShieldCheck",
    skills: [
      { name: "Web Application Security", highlight: true },
      { name: "XSS", highlight: true },
      { name: "SQL Injection", highlight: true },
      { name: "BOLA / IDOR", highlight: true },
      { name: "JWT & Authentication", highlight: false },
      { name: "API Security", highlight: false }
    ]
  },
  {
    category: "Tools & Infrastructure",
    iconName: "Cpu",
    skills: [
      { name: "Git", highlight: true },
      { name: "Docker", highlight: false },
      { name: "GitHub Actions", highlight: false },
      { name: "Linux", highlight: false },
      { name: "Vite", highlight: false }
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
      "Built and shipped React applications and Python/FastAPI backend services, integrating third-party APIs and business workflows.",
      "Improved Core Web Vitals by identifying and fixing frontend performance bottlenecks, memory leaks, and inefficient rendering.",
      "Refactored legacy React codebases to improve stability, maintainability, and development speed.",
      "Worked directly with clients to translate business requirements into practical technical solutions and deliver features end-to-end."
    ],
    techStack: ["React", "Next.js", "TypeScript", "Python", "FastAPI", "Core Web Vitals", "API Integration"]
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
