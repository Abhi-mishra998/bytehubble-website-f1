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
        href: "/blog",
        description: "AI-powered runbook automation for database operations",
      },
      {
        title: "DB Agents",
        href: "/blog",
        description: "Autonomous agents that monitor and manage your databases",
      },
      {
        title: "Incident AI",
        href: "/blog",
        description: "Self-healing incident detection and resolution",
      },
      {
        title: "Performance Tuning",
        href: "/services/support",
        description: "AI-driven query optimization and performance analysis",
      },
      {
        title: "Cost Optimization",
        href: "/services",
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
        href: "/blog",
        description: "Research, whitepapers, and industry analysis",
      },
      {
        title: "Blog",
        href: "/blog",
        description: "Latest insights on database management and AI",
      },
      {
        title: "Documentation",
        href: "/blog",
        description: "Technical documentation and API references",
      },
    ],
  },
};

export const PLATFORM_FEATURES = [
  {
    title: "Incident & HA AI",
    description:
      "Autonomous incident triage and high-availability orchestration for mission-critical PostgreSQL systems.",
    icon: "shield",
    href: "/blog",
  },
  {
    title: "Query & Index Intelligence AI",
    description:
      "AI-driven query performance optimization and automated index lifecycle management.",
    icon: "cpu",
    href: "/services/support",
  },
  {
    title: "Capacity & FinOps AI",
    description:
      "Predict database growth, orchestrate disaster recovery, and continuously optimize infrastructure costs.",
    icon: "chart",
    href: "/services",
  },
  {
    title: "Runbook GPT & Security AI",
    description:
      "Enterprise knowledge intelligence and security automation for PostgreSQL operations.",
    icon: "book",
    href: "/blog",
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
    title: "PostgreSQL Is Not What You Think",
    excerpt:
      "A deep exploration of PostgreSQL internals including MVCC snapshots, WAL-based CDC, JIT compilation, and vector search architecture.",
    category: "Database Engineering",
    date: "2026-03-10",
    readTime: "8 min read",
    slug: "postgresql-deep-dive",
    image: "/blog/blog1.png",
  },
  {
    title: "Understanding PostgreSQL MVCC Internals",
    excerpt:
      "Learn how PostgreSQL implements multi-version concurrency control and snapshot isolation under the hood.",
    category: "Database Internals",
    date: "2026-03-08",
    readTime: "6 min read",
    slug: "postgres-mvcc-explained",
    image: "/blog/blog2.png",
  },
  {
    title: "PostgreSQL as AI Infrastructure",
    excerpt:
      "Using PostgreSQL, pgvector, and relational architecture to power modern AI pipelines and RAG systems.",
    category: "AI Engineering",
    date: "2026-03-05",
    readTime: "7 min read",
    slug: "postgres-ai-infrastructure",
    image: "/blog/blog3.png",
  },
];
