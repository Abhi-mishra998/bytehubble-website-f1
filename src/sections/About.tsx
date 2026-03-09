"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";

// Animated counter component with enhanced styling
function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  inView,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration, inView]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

// Floating background element component
function FloatingNode({ 
  delay, 
  size = 60,
  position 
}: { 
  delay: number; 
  size?: number;
  position: { top?: string; bottom?: string; left?: string; right?: string };
}) {
  return (
    <motion.div
      className="absolute rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-xl"
      style={{
        width: size,
        height: size,
        ...position,
      }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

// Animated connection line component
function ConnectionLine({ 
  start, 
  end,
  delay 
}: { 
  start: { x: number; y: number };
  end: { x: number; y: number };
  delay?: number;
}) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
      <motion.path
        d={`M ${start.x} ${start.y} Q ${(start.x + end.x) / 2} ${(start.y + end.y) / 2 - 30} ${end.x} ${end.y}`}
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        strokeDasharray="8 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{
          duration: 2,
          delay: delay || 0,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2E2A8F" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#2AC7D6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#2E2A8F" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Pulsing dot for decorative elements
function PulsingDot({ 
  size = 8,
  position 
}: { 
  size?: number;
  position: { top?: string; bottom?: string; left?: string; right?: string };
}) {
  return (
    <motion.div
      className="absolute rounded-full bg-accent"
      style={{
        width: size,
        height: size,
        ...position,
      }}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Platform feature icons with enhanced styling
const platformIcons = {
  shield: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  cpu: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  chart: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  book: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
};

// Platform features data
const platformFeatures = [
  {
    title: "Incident & HA AI",
    description:
      "Autonomous incident triage and high-availability orchestration for mission-critical PostgreSQL infrastructure.",
    capabilities: [
      "AI root cause analysis across 200+ signals",
      "Automated failover in seconds",
      "Replication lag self-healing",
      "Incident remediation automation",
    ],
    icon: "shield",
  },
  {
    title: "Query & Index Intelligence AI",
    description:
      "AI-driven query performance optimization and automated index lifecycle management.",
    capabilities: [
      "Real-time slow query detection",
      "LLM powered EXPLAIN plan analysis",
      "HypoPG index simulation",
      "Automatic index optimization",
    ],
    icon: "cpu",
  },
  {
    title: "Capacity & FinOps AI",
    description:
      "Predict infrastructure growth and continuously optimize database performance and cloud costs.",
    capabilities: [
      "90-day storage forecasting",
      "AI-driven disaster recovery orchestration",
      "Storage tiering automation",
      "Cost optimization intelligence",
    ],
    icon: "chart",
  },
  {
    title: "Runbook GPT & Security AI",
    description:
      "Enterprise operational intelligence and security automation.",
    capabilities: [
      "RAG powered runbook assistant",
      "Incident knowledge retrieval",
      "PII exfiltration detection",
      "Automated compliance monitoring",
    ],
    icon: "book",
  },
];

// Cloud providers
const cloudProviders = [
  "AWS RDS / Aurora",
  "Azure PostgreSQL",
  "Google Cloud SQL",
  "Oracle Cloud",
  "Kubernetes",
  "Patroni",
  "Prometheus",
  "Terraform",
  "LangChain",
];

// Customer success stories
const customers = [
  {
    name: "Paycio",
    industry: "FinTech Payments",
    results: [
      "99.99% database uptime",
      "Automated incident triage",
      "PCI-DSS audit trails",
    ],
  },
  {
    name: "LowTouch AI",
    industry: "AI Infrastructure",
    results: [
      "60% cloud cost reduction",
      "Enterprise RAG architecture",
      "Production vector database platform",
    ],
  },
  {
    name: "ChatBucket",
    industry: "Conversational AI",
    results: [
      "10× retrieval latency improvement",
      "Unified relational + vector architecture",
      "Production LLM infrastructure",
    ],
  },
];

// Metrics data
const metrics = [
  { value: 3, suffix: " min", label: "P1 Incident MTTR" },
  { value: 8, suffix: " sec", label: "Automated Failover" },
  { value: 41, suffix: "%", label: "Cloud DB Cost Reduction" },
  { value: 90, suffix: " sec", label: "Security Threat Detection" },
  { value: 95, suffix: "%", label: "DBA On-Call Reduction" },
  { value: 53, suffix: " min", label: "Disaster Recovery RTO" },
];

// Animation variants with proper typing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);
  const customersRef = useRef<HTMLDivElement>(null);

  const metricsInView = useInView(metricsRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const cloudInView = useInView(cloudRef, { once: true, margin: "-100px" });
  const customersInView = useInView(customersRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating nodes */}
        <FloatingNode delay={0} size={80} position={{ top: "10%", left: "5%" }} />
        <FloatingNode delay={1} size={60} position={{ top: "20%", right: "10%" }} />
        <FloatingNode delay={2} size={100} position={{ bottom: "30%", left: "10%" }} />
        <FloatingNode delay={0.5} size={50} position={{ bottom: "20%", right: "5%" }} />
        <FloatingNode delay={1.5} size={70} position={{ top: "40%", left: "2%" }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        
        {/* Radial gradient overlays */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20 relative"
        >
          {/* Decorative elements */}
          <motion.div
            className="absolute -top-12 left-1/2 -translate-x-1/2 w-20 h-20"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-full h-full border-2 border-dashed border-primary/20 rounded-full" />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-4"
          >
            About ByteHubble
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-accent mb-6"
          >
            Autonomous PostgreSQL
            <span className="block text-brand-gradient mt-2">Intelligence Platform</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto text-gray-600 leading-relaxed text-lg md:text-xl"
          >
            ByteHubble is an AI-native database intelligence platform designed to
            transform how enterprises operate PostgreSQL at scale. Our platform
            combines autonomous AI agents, deep PostgreSQL expertise, and
            cloud-agnostic architecture to deliver self-healing infrastructure,
            predictable performance, and optimized cloud costs.
          </motion.p>
        </motion.div>

        {/* Metrics Grid with enhanced styling */}
        <motion.div
          ref={metricsRef}
          variants={containerVariants}
          initial="hidden"
          animate={metricsInView ? "visible" : "hidden"}
          className="mb-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="relative group"
              >
                {/* Glassmorphism card */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/80 via-white/60 to-white/40 backdrop-blur-sm border border-white/20 shadow-lg group-hover:shadow-xl group-hover:border-accent/30 transition-all duration-500" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-6 lg:p-8">
                  {/* Animated indicator line */}
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "75%" }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 tracking-tight">
                    <AnimatedCounter
                      value={metric.value}
                      suffix={metric.suffix}
                      duration={2}
                      inView={metricsInView}
                    />
                  </p>
                  <p className="text-xs md:text-sm font-medium text-gray-600 leading-tight">
                    {metric.label}
                  </p>
                </div>
                
                {/* Corner accents */}
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-primary/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-primary/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Platform Overview with enhanced cards */}
        <motion.div
          ref={featuresRef}
          initial={{ opacity: 0, y: 40 }}
          animate={featuresInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionHeading
              title="The Autonomous PostgreSQL Intelligence Platform"
              description="Four AI-powered systems working together to automate, optimize, and secure enterprise PostgreSQL operations."
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={featuresInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 * index + 0.3,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.03, y: -8 }}
                className="group relative"
              >
                {/* Enhanced card with gradient border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <div className="absolute inset-[1px] rounded-3xl bg-white" />
                
                <div className="relative p-7 lg:p-8 h-full">
                  {/* Icon with animated background */}
                  <motion.div
                    className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
                    <div className="text-white relative z-10">
                      {platformIcons[feature.icon as keyof typeof platformIcons]}
                    </div>
                    {/* Pulsing ring */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-white/30"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-dark-accent mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2.5">
                    {feature.capabilities.map((capability, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={featuresInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.1 * index + 0.5 + 0.1 * idx 
                        }}
                        className="flex items-start gap-2.5 text-xs md:text-sm text-gray-500"
                      >
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-accent"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span>{capability}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cloud-Agnostic Architecture with enhanced styling */}
        <motion.div
          ref={cloudRef}
          initial={{ opacity: 0, y: 40 }}
          animate={cloudInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={cloudInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionHeading
              title="Cloud-Agnostic Architecture"
              description="ByteHubble's intelligence layer works across all major cloud providers and PostgreSQL deployment environments."
            />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
            {cloudProviders.map((provider, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={cloudInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.05 * index + 0.3,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="group"
              >
                <div className="relative p-4 lg:p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex items-center justify-center">
                    <span className="text-sm md:text-base font-semibold text-dark-accent text-center leading-tight">
                      {provider}
                    </span>
                  </div>
                  
                  {/* Animated corner indicator */}
                  <motion.div
                    className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-accent"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Customer Success Stories with enhanced cards */}
        <motion.div
          ref={customersRef}
          initial={{ opacity: 0, y: 40 }}
          animate={customersInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={customersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionHeading
              title="Trusted by Data-Driven Companies"
              description="Leading enterprises rely on ByteHubble to power their mission-critical database infrastructure."
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {customers.map((customer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={customersInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 * index + 0.3,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                {/* Card background with gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white via-white to-gray-50 border border-gray-100 shadow-md group-hover:shadow-xl transition-all duration-500" />
                
                {/* Top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary rounded-t-3xl" />
                
                <div className="relative p-7 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    {/* Animated icon */}
                    <motion.div
                      className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </motion.div>
                    
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-dark-accent">
                        {customer.name}
                      </h3>
                      <p className="text-sm text-accent font-medium">
                        {customer.industry}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    {customer.results.map((result, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={customersInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.1 * index + 0.5 + 0.1 * idx 
                        }}
                        className="flex items-start gap-3"
                      >
                        <motion.div
                          className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5"
                          whileHover={{ scale: 1.1 }}
                        >
                          <svg
                            className="w-3.5 h-3.5 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </motion.div>
                        <span className="text-sm text-gray-600 leading-relaxed">{result}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Decorative corner elements */}
                <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-primary/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-primary/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}

