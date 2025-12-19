import { Project, Experience, Education, Skill, Certificate, Contact } from '@/types';

export const personalInfo = {
  name: "Sadman Sakib",
  tagline: "Building scalable applications with modern technologies",
  bio: "I'm a Software Developer with 2+ years of hands-on experience in building scalable web & mobile applications using Next.js, React Native, TypeScript, PostgreSQL, Docker, GitHub Actions, VPS etc. My focus is on delivering clean code, scalable architecture, and seamless user experience across platforms.",
  location: "Rajshahi, Bangladesh",
  openToWork: true
};

export const contact: Contact = {
  email: "sadman30102001sakib@gmail.com",
  location: "Rajshahi, Bangladesh",
  github: "https://github.com/SADMAN30102001SAKIB",
  linkedin: "https://www.linkedin.com/in/sadmansakib30102001"
};

export const projects: Project[] = [
    {
    id: "digital-circuit-simulator",
    title: "Digital Circuit Simulator (Qt Desktop App)",
    description: "Modern, professional digital logic circuit simulator with real-time simulation, drag-and-drop canvas, and scalable truth-table generation.",
    fullDescription: "A modern desktop digital circuit simulator built with PySide6 (Qt for Python), designed to feel native, fast, and production-grade. Features a QGraphicsScene-based canvas with smooth pan/zoom, real-time logic simulation, modular component architecture, and a carefully engineered truth-table system capable of handling very large input spaces without memory blowups. Distributed as a standalone Windows executable with no Python dependency.",
    technologies: [
      "Python",
      "PySide6 (Qt)",
      "YAML",
    ],
    category: "System Development",
    featured: false,
    githubUrl: "https://github.com/SADMAN30102001SAKIB/digital-circuit-simulator",
    additionalLinks: [
      {
        name: "Download EXE",
        url: "https://github.com/SADMAN30102001SAKIB/digital-circuit-simulator/releases/download/v3.0/CircuitPlaygroundProV3.0.exe"
      }
    ],
    startDate: "2025-12",
    endDate: "2025-12",
    status: "Completed",
    highlights: [
      "QGraphicsScene-based canvas with anti-aliased rendering, pan & zoom",
      "Real-time digital logic simulation with inputs, outputs, and wire routing",
      "Dockable component library and dynamic property panels",
      "Undo/Redo system with 50-step history",
      "Circuit persistence using YAML with stable UID mapping",
      "Standalone Windows executable built with PyInstaller (no Python required)",
      "Model-based truth-table generation (QAbstractTableModel) for large circuits",
      "Fixed massive memory spikes in large truth tables (~800MB → ~45MB RSS)",
      "Safe export pipeline with cancelable chunked CSV generation",
      "Clean separation of core logic, simulator engine, and Qt UI layer"
    ]
  },
  {
    id: "algoloom",
    title: "AlgoLoom (AI-Powered Coding Platform)",
    description: "LeetCode-style competitive programming platform with AI-powered hints, real-time code execution, gamification system, and global leaderboard.",
    fullDescription: "AlgoLoom is a modern algorithmic problem-solving platform that blends competitive programming with AI mentorship. Features real-time code execution via Judge0, progressive AI hints powered by Gemini, XP-based leveling system, achievements, streaks, and a comprehensive admin panel. Built with ~10K lines of TypeScript.",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "NextAuth.js v5", "Judge0 API", "Google Gemini", "Monaco Editor", "Resend", "Vercel"],
    category: "Web Development",
    featured: true,
    liveUrl: "https://algoloom.sadman.me",
    githubUrl: "https://github.com/SADMAN30102001SAKIB/algoloom",
    startDate: "2025-10",
    status: "Ongoing",
    highlights: [
      "AI-powered progressive hints via Gemini (non-spoiler guidance)",
      "Real-time code execution with Judge0 (Python, C++, Java, JS)",
      "Monaco Editor with IntelliSense and auto-formatting",
      "Gamification: XP, levels, streaks, achievements, global leaderboard",
      "30+ curated problems with difficulty tiers and company tags",
      "Email verification + OAuth (Google/GitHub) authentication",
      "User profiles with activity heatmap and submission history",
      "Admin panel for problem/user management and moderation",
      "Rate limiting and role-based access control",
      "ISR and Server Components for optimized performance"
    ]
  },
  {
    id: "static-site-builder",
    title: "Static Site Builder",
    description: "Comprehensive drag-and-drop website builder with professional tools for creating static websites without coding. Features template marketplace, custom domains, and Stripe billing.",
    fullDescription: "A modern, feature-rich platform that empowers users to create professional static websites through an intuitive drag-and-drop interface. Built with Next.js and deployed on Vercel, it combines ease of use with enterprise-grade features including custom domain management, template sharing marketplace, integrated Stripe billing for premium usage, and PWA capabilities with offline support.",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "NextAuth.js", "Stripe", "Vercel", "React DnD", "Zustand", "Service Worker"],
    category: "Web Development",
    featured: true,
    liveUrl: "https://staticsitebuilder.sadman.me",
    githubUrl: "https://github.com/SADMAN30102001SAKIB/static-site-builder",
    startDate: "2025-06",
    endDate: "2025-09",
    status: "Completed",
    highlights: [
      "Comprehensive drag-and-drop builder with 15+ component types",
      "Template marketplace with community sharing and one-click forking",
      "Custom domain integration with automatic SSL provisioning",
      "Stripe-powered billing system with FREE/PRO tiers",
      "Multi-page management with SEO optimization",
      "Real-time preview and component hierarchy system",
      "Progressive Web App with offline capabilities",
      "Vercel DNS integration for custom domains",
      "Advanced authentication with NextAuth.js",
      "Edge middleware for performance optimization"
    ]
  },
  {
    id: "disposable-browser-service",
    title: "Disposable Browser Service",
    description: "Production-ready disposable browser service that creates isolated, ephemeral browser sessions using Docker containers with Redis-based session management for multi-backend scaling.",
    fullDescription: "A production-ready disposable browser service that creates isolated, ephemeral browser sessions using Docker containers. Each user gets their own secure browser environment that's automatically destroyed when they're done. Version 2.0 introduces Redis-based session management for proper multi-backend scaling with enhanced load balancing and consistent session data across all backend replicas.",
    technologies: ["Node.js", "Express.js", "Docker", "Redis", "Traefik", "Ubuntu", "Chrome", "VNC", "Xvfb", "WebSocket"],
    category: "System Development",
    featured: true,
    githubUrl: "https://github.com/SADMAN30102001SAKIB/disposable-browser-service",
    startDate: "2025-08",
    endDate: "2025-09",
    status: "Completed",
    highlights: [
      "Isolated browser sessions with automatic container destruction",
      "Redis-based session management for horizontal scaling",
      "Traefik load balancer with round-robin routing",
      "Docker container orchestration with resource limits",
      "VNC + noVNC WebSocket proxy for browser access",
      "Port allocation system preventing conflicts across replicas",
      "Comprehensive API with health monitoring and statistics",
      "Security features: non-root containers, CORS protection, session timeouts",
      "Performance: ~512MB RAM per session, 2-5s startup time",
      "Auto-scaling architecture supporting 1000+ concurrent sessions"
    ]
  },
  {
    id: "ruet-result-system",
    title: "RUET Undergraduate Result Management System",
    description: "Fully reengineered RUET's legacy result management system into a modern, scalable web platform using Next.js and PostgreSQL.",
    fullDescription: "Fully reengineered RUET's legacy result management system into a modern, scalable web platform using Next.js and PostgreSQL — built from the ground up to handle everything from student enrollment to automated SGPA/CGPA calculation. Around 20K lines of code, built from scratch for fun and turned into a full-blown academic engine.",
    technologies: ["Next.js 15", "TypeScript", "PostgreSQL", "CSS Modules", "Vercel", "Session Auth", "RBAC"],
    category: "Web Development",
    featured: false,
    liveUrl: "https://ruet-ugrms.sadman.me",
    githubUrl: "https://github.com/SADMAN30102001SAKIB/ruet-undergraduate-result-management-system",
    startDate: "2025-05",
    endDate: "2025-07",
    status: "Completed",
    highlights: [
      "Admin portal to manage students, departments, courses, and publish results",
      "Student portal with course registration and CGPA tracking",
      "Automated SGPA/CGPA calculation (credit-weighted, grade-letter mapped)",
      "Role-Based Access Control (Admin/Student)",
      "Session-based auth with secure cookies",
      "Middleware for route protection",
      "Responsive UI with custom shadcn/ui-like components"
    ]
  },
  {
    id: "nexus-future-fund",
    title: "Nexus Future Fund (Investment Platform)",
    description: "Cutting-edge crypto-based hedge fund platform designed to deliver high monthly ROI through risk-managed, algorithmic trading.",
    fullDescription: "Nexus Future Fund is a cutting-edge, crypto-based hedge fund platform designed to deliver high monthly return of investment through risk-managed, algorithmic trading. I led the full-stack development of the platform, which combines Next.js, Appwrite, PWA, Discord BOT, TypeScript and a custom internal trade automation system.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Appwrite", "PWA", "Discord API", "Python", "MQL5", "MetaTrader", "VPS"],
    category: "Web Development",
    featured: false,
    liveUrl: "https://nexusfuturefund.sadman.me",
    githubUrl: "https://github.com/SADMAN30102001SAKIB/nexus-future-fund",
    additionalLinks: [
      {
        name: "Trading Signal Tool",
        url: "https://nffsignal.sadman.me"
      },
      {
        name: "Discord Signal Sender",
        url: "https://github.com/SADMAN30102001SAKIB/discord-trading-signal-sender"
      },
      {
        name: "Discord Auth Bot",
        url: "https://github.com/SADMAN30102001SAKIB/discord-auth-bot"
      },
      {
        name: "Discord Auth Server",
        url: "https://github.com/SADMAN30102001SAKIB/discord-auth-server"
      }
    ],
    startDate: "2024-10",
    endDate: "2025-01",
    status: "Completed",
    highlights: [
      "Secure user dashboards with wallet tracking and performance analytics",
      "Full PWA support with installability and offline capabilities",
      "Appwrite-based backend for auth and database",
      "Multi-tiered route system for blogs, guides, policies, and onboarding",
      "Real-time trade replication for 50+ MT5 slave accounts",
      "Enterprise-grade code structuring, versioning, and environment isolation"
    ]
  },
  {
    id: "omrelite",
    title: "OMRElite (Computer Vision Mobile App)",
    description: "Mobile app for evaluating OMR/Bubble Sheet based exams using computer vision to reduce tedious manual evaluation.",
    fullDescription: "OMRElite is a computer vision mobile app designed to reduce the tedious process of evaluating OMR Sheets by hand, which is time consuming and might lead to wrong evaluations. The app can evaluate papers in minutes with computer vision.",
    technologies: ["React Native", "Android Studio", "Python", "OpenCV", "Flask", "Computer Vision"],
    category: "Mobile Development",
    featured: true,
    videoUrl: "https://youtu.be/AUjXJHea0jA",
    githubUrl: "https://github.com/SADMAN30102001SAKIB/OMRElite",
    additionalLinks: [
      {
        name: "Download APK",
        url: "https://github.com/SADMAN30102001SAKIB/omrelite/releases/download/apk/OMRElite-v1.0.apk"
      }
    ],
    startDate: "2024-03",
    endDate: "2024-05",
    status: "Completed",
    highlights: [
      "Creating customizable OMR Sheets (PDF generation for examination)",
      "Evaluating papers with mobile camera using computer vision",
      "Generating customizable reports (PDF or CSV via email)",
      "Automatic PDF re-generation with 1-click",
      "Manual correction for student ID/set mistakes",
      "Individual and overall exam analysis",
      "Search and filter by name/ID/set"
    ]
  },
  {
    id: "multiplayer-snake",
    title: "Multiplayer Snake Game",
    description: "CLI-based multiplayer snake game built with OOP paradigm for local multiplayer gaming.",
    fullDescription: "A really fun CLI-based game made with Object-Oriented Programming paradigm that you can play with your friend on the same computer.",
    technologies: ["C++", "OOP"],
    category: "Game Development",
    featured: true,
    githubUrl: "https://github.com/SADMAN30102001SAKIB/cli-based-multiplayer-snake",
    additionalLinks: [
      {
        name: "Download EXE",
        url: "https://github.com/SADMAN30102001SAKIB/cli-based-multiplayer-snake/releases/download/executable/snake.exe"
      }
    ],
    startDate: "2023-12",
    endDate: "2023-12",
    status: "Completed",
    highlights: [
      "CLI-based multiplayer gameplay",
      "Object-Oriented Programming design",
      "Local multiplayer support",
      "Real-time game mechanics"
    ]
  },
  {
    id: "mycash",
    title: "MyCash (Money Transaction)",
    description: "BKash-like CLI based money transaction app built with Object-Oriented Programming paradigm.",
    fullDescription: "A CLI-based money transaction application similar to BKash, built using Object-Oriented Programming principles.",
    technologies: ["C++", "OOP"],
    category: "System Development",
    featured: false,
    githubUrl: "https://github.com/SADMAN30102001SAKIB/myCash",
    startDate: "2023-11",
    endDate: "2023-11",
    status: "Completed",
    highlights: [
      "Money transfer functionality",
      "Account management system",
      "Transaction history",
      "CLI-based interface"
    ]
  },
  {
    id: "ode-solver",
    title: "Ordinary Differential Equations Solver",
    description: "Web app that solves ordinary differential equations with mathematical expression rendering.",
    fullDescription: "A web application that solves ordinary differential equations (general + particular solutions) just by writing the ODE. Uses KaTeX for displaying math expressions and SymPy for solving equations.",
    technologies: ["JavaScript", "Python", "Flask", "KaTeX", "SymPy", "LaTeX"],
    category: "Web Development",
    featured: true,
    liveUrl: "https://odesolver.sadman.me",
    githubUrl: "https://github.com/SADMAN30102001SAKIB/ordinary-differential-equation-solver-client",
    additionalLinks: [
      {
        name: "Backend Repository",
        url: "https://github.com/SADMAN30102001SAKIB/ordinary-differential-equation-solver-server"
      }
    ],
    startDate: "2023-10",
    endDate: "2023-10",
    status: "Completed",
    highlights: [
      "Mathematical expression parsing and solving",
      "LaTeX rendering with KaTeX",
      "SymPy integration for equation solving",
      "String manipulation for ODE processing"
    ]
  },
  {
    id: "student-record-system",
    title: "Student Record Management System",
    description: "My first project in C language with comprehensive student data management features.",
    fullDescription: "My first project in C programming language. Features student adding, deleting, updating, displaying, sorting via ID/Name/GPA (merge sort) and searching by ID/Name/GPA with data saving functionality.",
    technologies: ["C"],
    category: "System Development",
    featured: false,
    githubUrl: "https://github.com/SADMAN30102001SAKIB/student-record-management-system",
    startDate: "2023-05",
    endDate: "2023-05",
    status: "Completed",
    highlights: [
      "CRUD operations for student records",
      "Merge sort implementation for sorting",
      "Search functionality by multiple criteria",
      "Data persistence and file handling"
    ]
  },
  {
    id: "coverpage-builder",
    title: "CoverPage PDF Builder",
    description: "Automation tool that generates cover pages for university assignments and lab reports.",
    fullDescription: "An automation tool that generates cover pages for assignments and lab reports for my university. Streamlines the process of creating standardized cover pages.",
    technologies: ["PHP", "MySQL", "JavaScript"],
    category: "Web Development",
    featured: false,
    liveUrl: "https://cse-coverpage.netlify.app/",
    githubUrl: "https://github.com/SADMAN30102001SAKIB/coverpage-builder",
    startDate: "2023-04",
    endDate: "2023-04",
    status: "Completed",
    highlights: [
      "Automated PDF generation",
      "University-specific templates",
      "Dynamic form handling",
      "Database integration for templates"
    ]
  },
  {
    id: "mobile-controlled-car",
    title: "Mobile Controlled Car",
    description: "ESP8266-based web app for controlling a mobile car through web interface.",
    fullDescription: "A web application for the ESP8266 microcontroller for my mobile controlled car project. Built with embedded C++, HTML, CSS, and JavaScript for wireless car control.",
    technologies: ["C++", "JavaScript", "HTML", "CSS", "ESP8266", "Robotics"],
    category: "Other",
    featured: true,
    videoUrl: "https://youtu.be/-NgneH3xZGs",
    githubUrl: "https://github.com/SADMAN30102001SAKIB/esp8266server-webapp-for-mobile-controlled-car",
    startDate: "2022-11",
    endDate: "2022-12",
    status: "Completed",
    highlights: [
      "ESP8266 microcontroller integration",
      "Web-based remote control interface",
      "Real-time wireless communication",
      "Hardware-software integration"
    ]
  },
  {
    id: "snake-mania",
    title: "Snake Mania (Web Based Game)",
    description: "Classic snake game built for web browsers, inspired by educational content.",
    fullDescription: "A web-based implementation of the classic Snake game, made back in 2020 and inspired by CodeWithHarry YouTube channel tutorials.",
    technologies: ["JavaScript", "HTML", "CSS"],
    category: "Game Development",
    featured: false,
    liveUrl: "https://sadman30102001sakib.github.io/snakeMania/",
    githubUrl: "https://github.com/SADMAN30102001SAKIB/snakeMania",
    startDate: "2020-01",
    endDate: "2020-01",
    status: "Completed",
    highlights: [
      "Classic snake game mechanics",
      "Browser-based gameplay",
      "Score tracking system",
      "Responsive design"
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: "nexus-cofounder",
    title: "Co-Founder & Tech Lead",
    company: "Nexus Future Fund",
    type: "Co-Founder",
    location: "Rajshahi, Bangladesh (Hybrid)",
    startDate: "2024-09",
    endDate: "2025-02",
    current: false,
    description: "Co-founded and led the full-stack development of a cutting-edge crypto-based hedge fund platform designed to deliver high monthly ROI through risk-managed, algorithmic trading.",
    technologies: ["Next.js", "TypeScript", "Appwrite", "PWA", "Discord API", "Python", "MQL5", "MetaTrader", "VPS"],
    achievements: [
      "Led full-stack development from conception to deployment",
      "Built secure user dashboards with wallet tracking and performance analytics",
      "Implemented real-time trade replication for 50+ MT5 slave accounts",
      "Developed Discord bot integration for trading signals"
    ],
    websiteUrl: "https://nexusfuturefund.sadman.me"
  }
];

export const education: Education[] = [
  {
    id: "ruet-cse",
    degree: "B.Sc. Engineering in Computer Science & Engineering",
    institution: "Rajshahi University of Engineering & Technology (RUET)",
    location: "Rajshahi, Bangladesh",
    startDate: "2022-12",
    endDate: "2026",
    current: true,
    description: "Pursuing Bachelor's degree in Computer Science and Engineering with focus on software development, algorithms, and system design.",
    relevant_courses: [
      "Structured Programming",
      "Computer Fundamentals and Ethics",
      "Data Structure",
      "Competitive Programming",
      "Object Oriented Programming",
      "Algorithm Analysis and Design",
      "Technical Writing and Presentation",
      "Discrete Mathematics",
      "Software Development Project I",
      "Digital Logic Design",
      "Numerical Methods",
      "Microprocessors, Microcontrollers & Assembly Language",
      "Database Systems",
      "Web Based Application Project",
      "Theory of Computation",
      "Computer Interfacing and Embedded Systems",
      "Computer Architecture",
      "Applied Statistics and Queuing Theory",
      "Operating Systems",
      "Software Development Project II",
      "Data Communication",
      "Software Engineering",
      "Artificial Intelligence",
      "Digital Signal Processing"
    ]
  },
  {
    id: "shibganj-hsc",
    degree: "Higher Secondary Certificate",
    institution: "Shibganj Degree College",
    location: "Shibganj, Bangladesh",
    startDate: "2019",
    endDate: "2021",
    current: false,
    description: "Completed Higher Secondary education with focus on Science group."
  },
  {
    id: "thakurgaon-ssc",
    degree: "Secondary School Certificate",
    institution: "Thakurgaon Govt. Boys' High School",
    location: "Thakurgaon, Bangladesh",
    startDate: "2011",
    endDate: "2019",
    current: false,
    description: "Completed Secondary School education with strong foundation in science and mathematics."
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "TypeScript", category: "Frontend", proficiency: 5, yearsOfExperience: 2, projects: ["algoloom", "static-site-builder", "ruet-result-system", "nexus-future-fund"] },
  { name: "Next.js", category: "Frontend", proficiency: 5, yearsOfExperience: 2, projects: ["algoloom", "static-site-builder", "ruet-result-system", "nexus-future-fund"] },
  { name: "React Native", category: "Mobile", proficiency: 4, yearsOfExperience: 1, projects: ["omrelite"] },
  { name: "Android Studio", category: "Mobile", proficiency: 4, yearsOfExperience: 1, projects: ["omrelite"] },
  { name: "Tailwind CSS", category: "Frontend", proficiency: 5, yearsOfExperience: 2, projects: ["algoloom", "static-site-builder", "nexus-future-fund"] },
  { name: "CSS", category: "Frontend", proficiency: 4, yearsOfExperience: 3, projects: ["ruet-result-system", "mobile-controlled-car", "snake-mania"] },
  
  // Backend
  { name: "Node.js", category: "Backend", proficiency: 5, yearsOfExperience: 2, projects: ["disposable-browser-service"] },
  { name: "Express.js", category: "Backend", proficiency: 5, yearsOfExperience: 2, projects: ["disposable-browser-service"] },
  { name: "Flask", category: "Backend", proficiency: 4, yearsOfExperience: 1, projects: ["omrelite", "ode-solver"] },
  { name: "FastAPI", category: "Backend", proficiency: 3, yearsOfExperience: 1, projects: [] },
  { name: "Django", category: "Backend", proficiency: 3, yearsOfExperience: 1, projects: [] },
  
  // Database
  { name: "PostgreSQL", category: "Database", proficiency: 5, yearsOfExperience: 2, projects: ["algoloom", "static-site-builder", "ruet-result-system"] },
  { name: "Prisma", category: "Database", proficiency: 5, yearsOfExperience: 1, projects: ["algoloom", "static-site-builder"] },
  { name: "MongoDB", category: "Database", proficiency: 4, yearsOfExperience: 2, projects: [] },
  { name: "Redis", category: "Database", proficiency: 4, yearsOfExperience: 1, projects: ["disposable-browser-service"] },
  { name: "MySQL", category: "Database", proficiency: 3, yearsOfExperience: 2, projects: ["coverpage-builder"] },
  { name: "SQLite", category: "Database", proficiency: 3, yearsOfExperience: 2, projects: [] },
  
  // DevOps & Tools
  { name: "Docker", category: "DevOps", proficiency: 5, yearsOfExperience: 1, projects: ["disposable-browser-service"] },
  { name: "Git", category: "Tools", proficiency: 5, yearsOfExperience: 3, projects: [] },
  { name: "CI/CD", category: "DevOps", proficiency: 3, yearsOfExperience: 1, projects: [] },
  { name: "Nginx", category: "DevOps", proficiency: 3, yearsOfExperience: 1, projects: [] },
  { name: "Traefik", category: "DevOps", proficiency: 4, yearsOfExperience: 1, projects: ["disposable-browser-service"] },
  { name: "VPS", category: "DevOps", proficiency: 4, yearsOfExperience: 1, projects: ["nexus-future-fund"] },
  { name: "Cloudflare", category: "DevOps", proficiency: 4, yearsOfExperience: 1, projects: [] },
  { name: "pnpm", category: "Tools", proficiency: 5, yearsOfExperience: 2, projects: [] },
  { name: "VS Code", category: "Tools", proficiency: 5, yearsOfExperience: 4, projects: [] },
  { name: "Postman", category: "Tools", proficiency: 4, yearsOfExperience: 2, projects: [] },
  { name: "ESLint", category: "Tools", proficiency: 4, yearsOfExperience: 2, projects: [] },
  { name: "Prettier", category: "Tools", proficiency: 4, yearsOfExperience: 2, projects: [] },
  { name: "GitHub Copilot", category: "Tools", proficiency: 5, yearsOfExperience: 1, projects: [] },
  { name: "WSL", category: "Tools", proficiency: 4, yearsOfExperience: 2, projects: [] },
  { name: "YAML", category: "Tools", proficiency: 4, yearsOfExperience: 2, projects: ["digital-circuit-simulator"] },
  
  // Programming Languages
  { name: "C++", category: "Language", proficiency: 4, yearsOfExperience: 3, projects: ["multiplayer-snake", "mycash", "mobile-controlled-car"] },
  { name: "C", category: "Language", proficiency: 3, yearsOfExperience: 2, projects: ["student-record-system"] },
  { name: "JavaScript", category: "Language", proficiency: 5, yearsOfExperience: 3, projects: ["algoloom", "static-site-builder", "ode-solver", "coverpage-builder", "snake-mania", "mobile-controlled-car", "disposable-browser-service"] },
  { name: "Python", category: "Language", proficiency: 4, yearsOfExperience: 2, projects: ["digital-circuit-simulator", "nexus-future-fund", "omrelite", "ode-solver"] },
  { name: "PHP", category: "Language", proficiency: 3, yearsOfExperience: 1, projects: ["coverpage-builder"] },
  
  // Specialized
  { name: "OpenCV", category: "Other", proficiency: 3, yearsOfExperience: 1, projects: ["omrelite"] },
  { name: "MQL5", category: "Other", proficiency: 3, yearsOfExperience: 1, projects: ["nexus-future-fund"] },
  { name: "Discord API", category: "Other", proficiency: 4, yearsOfExperience: 1, projects: ["nexus-future-fund"] },
  { name: "Stripe API", category: "Other", proficiency: 4, yearsOfExperience: 1, projects: ["static-site-builder"] },
  { name: "NextAuth.js", category: "Backend", proficiency: 5, yearsOfExperience: 1, projects: ["algoloom", "static-site-builder"] },
  { name: "Zustand", category: "Frontend", proficiency: 4, yearsOfExperience: 1, projects: ["static-site-builder"] },
  { name: "React DnD", category: "Frontend", proficiency: 4, yearsOfExperience: 1, projects: ["static-site-builder"] },
  { name: "WebSocket", category: "Backend", proficiency: 4, yearsOfExperience: 1, projects: ["disposable-browser-service"] },
  { name: "GraphQL", category: "Backend", proficiency: 3, yearsOfExperience: 1, projects: [] },
  { name: "gRPC", category: "Backend", proficiency: 3, yearsOfExperience: 1, projects: [] },
  { name: "Judge0 API", category: "Other", proficiency: 4, yearsOfExperience: 1, projects: ["algoloom"] },
  { name: "Google Gemini", category: "Other", proficiency: 4, yearsOfExperience: 1, projects: ["algoloom"] },
  { name: "Monaco Editor", category: "Frontend", proficiency: 4, yearsOfExperience: 1, projects: ["algoloom"] },
  { name: "Resend", category: "Other", proficiency: 4, yearsOfExperience: 1, projects: ["algoloom"] },
  { name: "HTML", category: "Frontend", proficiency: 5, yearsOfExperience: 4, projects: ["mobile-controlled-car", "snake-mania"] },
  { name: "Appwrite", category: "Backend", proficiency: 4, yearsOfExperience: 1, projects: ["nexus-future-fund"] },
  { name: "PWA", category: "Frontend", proficiency: 4, yearsOfExperience: 1, projects: ["nexus-future-fund", "static-site-builder"] },
  { name: "Vercel", category: "DevOps", proficiency: 5, yearsOfExperience: 2, projects: ["algoloom", "static-site-builder", "ruet-result-system"] },
  { name: "ESP8266", category: "Other", proficiency: 3, yearsOfExperience: 1, projects: ["mobile-controlled-car"] },
  { name: "SymPy", category: "Other", proficiency: 3, yearsOfExperience: 1, projects: ["ode-solver"] },
  { name: "KaTeX", category: "Frontend", proficiency: 3, yearsOfExperience: 1, projects: ["ode-solver"] },
  { name: "PySide6 (Qt)", category: "Frontend", proficiency: 3, yearsOfExperience: 1, projects: ["digital-circuit-simulator"] },
];

export const certificates: Certificate[] = [
  {
    id: "solvio-ai-hackathon",
    name: "Top 100 Teams - Solvio AI Hackathon 2025",
    issuer: "Sheba Platform Limited",
    date: "2025-11",
    description: "Selected among the Top 100 teams (out of 800) for outstanding performance and innovation in the Solvio AI Hackathon 2025, Bangladesh's largest AI-focused hackathon. Recognized for proposing a high-impact solution for EdTech platforms in Bangladesh under tight deadlines as part of Team ProspectLab. Our product was 'OMRElite: A Computer Vision Mobile App for Evaluating OMR Sheets'.",
    imageUrl: "/certificates/solvio-hackathon.jpg"
  },
  {
    id: "100xdevs-fullstack",
    name: "0-100 Full Stack Web Development",
    issuer: "100xDevs",
    date: "2025-08",
    credentialId: "5CLSDC5H",
    credentialUrl: "https://app.100xdevs.com/certificate/verify/5CLSDC5H",
    skills: [
      "Next.js", "React.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", 
      "Docker", "Kubernetes", "WebSocket", "GraphQL", "gRPC", "Redis", 
      "OpenAPI Specification", "Testing", "CI/CD"
    ]
  }
];
