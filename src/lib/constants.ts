export const SITE_CONFIG = {
  name: "ByteHubble",
  tagline: "DB Intelligence Platform",
  description:
    "ByteHubble is the AI intelligence layer your PostgreSQL stack is missing — combining enterprise knowledge RAG, autonomous DB agents, self-healing incident AI, and world-class database training.",
  url: "https://bytehubble.com",
};

export const NAV_LINKS = {
  solutions: {
    label: "Solutions",
    items: [
      {
        title: "Runbook GPT",
        href: "/solutions/runbook-gpt",
        description: "AI-powered runbook automation for database operations",
      },
      {
        title: "DB Agents",
        href: "/solutions/db-agents",
        description: "Autonomous agents that monitor and manage your databases",
      },
      {
        title: "Incident AI",
        href: "/solutions/incident-ai",
        description: "Self-healing incident detection and resolution",
      },
      {
        title: "Performance Tuning",
        href: "/solutions/performance-tuning",
        description: "AI-driven query optimization and performance analysis",
      },
      {
        title: "Cost Optimization",
        href: "/solutions/cost-optimization",
        description: "Reduce infrastructure costs with intelligent resource management",
      },
    ],
  },
  services: {
    label: "Services",
    items: [
      // SUPPORT Group
      {
        title: "Database Support",
        href: "/services/support",
        description: "24/7 expert database support for mission-critical systems",
        group: "SUPPORT",
      },
      {
        title: "Performance Tuning",
        href: "/services/support#performance",
        description: "Optimize your database performance with expert analysis",
        group: "SUPPORT",
      },
      {
        title: "Incident Response",
        href: "/services/support#incident",
        description: "Rapid incident response to minimize downtime",
        group: "SUPPORT",
      },
      {
        title: "Monitoring & Reliability",
        href: "/services/support#monitoring",
        description: "Proactive monitoring and reliability engineering",
        group: "SUPPORT",
      },
      // TRAINING Group - Navigate to Training page
      {
        title: "PostgreSQL Mastery",
        href: "/services/training",
        description: "Master PostgreSQL from fundamentals to advanced internals",
        group: "TRAINING",
      },
      {
        title: "DBA Training",
        href: "/services/training#dba",
        description: "Professional database administration certification program",
        group: "TRAINING",
      },
      {
        title: "AI/ML for Engineers",
        href: "/services/training#ai-ml",
        description: "Applied AI and ML techniques for infrastructure engineers",
        group: "TRAINING",
      },
      {
        title: "SRE Training",
        href: "/services/training#sre",
        description: "Site reliability engineering for database platforms",
        group: "TRAINING",
      },
      {
        title: "Enterprise Training",
        href: "/services/training#enterprise",
        description: "Custom training programs for enterprise teams",
        group: "TRAINING",
      },
      // Service Offerings
      {
        title: "Data Migration",
        href: "/services#migration",
        description: "Seamless migration services with zero downtime",
        group: "SERVICES",
      },
      {
        title: "Database Optimization",
        href: "/services#optimization",
        description: "Comprehensive database optimization services",
        group: "SERVICES",
      },
      {
        title: "Cloud Architecture",
        href: "/services#cloud",
        description: "Design and implement scalable cloud architectures",
        group: "SERVICES",
      },
      {
        title: "DevOps Automation",
        href: "/services#devops",
        description: "Automate your database operations with DevOps practices",
        group: "SERVICES",
      },
      {
        title: "Cost Optimization",
        href: "/services#cost",
        description: "Reduce infrastructure costs with intelligent optimization",
        group: "SERVICES",
      },
    ],
  },
  resources: {
    label: "Resources",
    items: [
      {
        title: "Intelligence Hub",
        href: "/resources/intelligence-hub",
        description: "Research, whitepapers, and industry analysis",
      },
      {
        title: "Blog",
        href: "/blog",
        description: "Latest insights on database management and AI",
      },
      {
        title: "Documentation",
        href: "/docs",
        description: "Technical documentation and API references",
      },
    ],
  },
};

export const PLATFORM_FEATURES = [
  {
    title: "Runbook GPT",
    description:
      "Transform your operational runbooks into intelligent, executable workflows. AI understands your procedures and executes them autonomously.",
    icon: "book",
  },
  {
    title: "DB Agents",
    description:
      "Deploy autonomous AI agents that continuously monitor, optimize, and manage your PostgreSQL databases around the clock.",
    icon: "cpu",
  },
  {
    title: "Incident AI",
    description:
      "Self-healing incident detection and resolution. Identify issues before they impact users and resolve them automatically.",
    icon: "shield",
  },
  {
    title: "Training Academy",
    description:
      "World-class PostgreSQL and database engineering training programs designed for teams building at scale.",
    icon: "graduation",
  },
];

export const POSTGRES_FEATURES = [
  {
    title: "Automated Query Optimization",
    description:
      "AI analyzes slow queries, suggests index strategies, and automatically tunes your PostgreSQL configuration for peak performance.",
  },
  {
    title: "Intelligent Vacuum Management",
    description:
      "Smart autovacuum tuning that adapts to your workload patterns, preventing table bloat and maintaining query speed.",
  },
  {
    title: "Replication Monitoring",
    description:
      "Real-time monitoring of streaming replication lag, automatic failover detection, and replica health assessment.",
  },
  {
    title: "Connection Pooling Intelligence",
    description:
      "Dynamic connection pool management that scales based on traffic patterns and prevents connection exhaustion.",
  },
  {
    title: "Backup & Recovery Automation",
    description:
      "Automated backup scheduling, point-in-time recovery testing, and disaster recovery validation.",
  },
  {
    title: "Security & Compliance",
    description:
      "Continuous security auditing, role-based access analysis, and compliance reporting for your database infrastructure.",
  },
];

export const TRAINING_PROGRAMS = [
  {
    title: "PostgreSQL Mastery",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    description:
      "Comprehensive PostgreSQL training covering internals, performance tuning, replication, and production operations.",
    topics: ["Core Architecture", "Query Optimization", "Replication", "Security"],
  },
  {
    title: "DBA Training",
    duration: "8 weeks",
    level: "Intermediate",
    description:
      "Professional DBA certification program covering day-to-day operations, monitoring, backup, and disaster recovery.",
    topics: ["Administration", "Monitoring", "Backup & Recovery", "Troubleshooting"],
  },
  {
    title: "AI-ML for Engineers",
    duration: "10 weeks",
    level: "Intermediate to Advanced",
    description:
      "Learn to apply AI and machine learning techniques to database operations and infrastructure management.",
    topics: ["ML Fundamentals", "Anomaly Detection", "Predictive Scaling", "NLP for Ops"],
  },
  {
    title: "SRE Training",
    duration: "6 weeks",
    level: "Advanced",
    description:
      "Site reliability engineering principles applied to database platforms. Build resilient, self-healing systems.",
    topics: ["SLOs & SLIs", "Incident Response", "Chaos Engineering", "Observability"],
  },
];

export const BLOG_POSTS = [
  {
    title: "Why AI Agents Are the Future of Database Operations",
    excerpt:
      "Explore how autonomous AI agents are transforming the way teams manage PostgreSQL at scale.",
    category: "AI & Databases",
    date: "2026-03-01",
    readTime: "8 min read",
    slug: "ai-agents-future-database-operations",
  },
  {
    title: "PostgreSQL 17: What DBAs Need to Know",
    excerpt:
      "A deep dive into the latest PostgreSQL release and its impact on enterprise database management.",
    category: "PostgreSQL",
    date: "2026-02-20",
    readTime: "12 min read",
    slug: "postgresql-17-dba-guide",
  },
  {
    title: "Building Self-Healing Database Infrastructure",
    excerpt:
      "Learn how to implement automated incident detection and resolution for your database stack.",
    category: "Infrastructure",
    date: "2026-02-15",
    readTime: "10 min read",
    slug: "self-healing-database-infrastructure",
  },
];
