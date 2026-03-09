"use client";

import { motion } from "framer-motion";

const PRIMARY = "#2E2A8F";
const ACCENT = "#2AC7D6";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

// Database Health Card
function HealthCard() {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-white rounded-xl shadow-xl border border-gray-100 p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          Database Health Score
        </h3>
        {/* Blinking status indicator */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </div>
      
      <div className="flex items-baseline gap-2">
        <motion.span
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-5xl font-bold"
          style={{ color: PRIMARY }}
        >
          98
        </motion.span>
        <span className="text-2xl font-semibold text-green-600">%</span>
      </div>
      
      {/* Health bar */}
      <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "98%" }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
        />
      </div>
      
      <p className="mt-3 text-sm text-gray-500">All systems operational</p>
    </motion.div>
  );
}

// Active Queries Card
function QueriesCard() {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-white rounded-xl shadow-xl border border-gray-100 p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          Active Queries
        </h3>
        {/* Animated dot */}
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
      </div>
      
      <div className="flex items-baseline gap-2">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-5xl font-bold"
          style={{ color: PRIMARY }}
        >
          124
        </motion.span>
      </div>
      
      <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="h-4 w-4"
        >
          <svg className="h-4 w-4" style={{ color: ACCENT }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </motion.div>
        <span>AI analyzing query performance</span>
      </div>
    </motion.div>
  );
}

// AI Recommendations Card
function AIRecommendationCard() {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-white rounded-xl shadow-xl border p-6 relative overflow-hidden"
      style={{
        borderColor: `${ACCENT}40`,
        boxShadow: `0 0 20px ${ACCENT}15, 0 10px 40px -10px ${ACCENT}20`,
      }}
    >
      {/* Animated border glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-0 rounded-xl"
        style={{
          border: `1px solid ${ACCENT}`,
        }}
      />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide" style={{ color: PRIMARY }}>
            AI Recommendation
          </h3>
          {/* Pulsing glow icon */}
          <motion.div
            animate={{ 
              boxShadow: [
                `0 0 0 0 ${ACCENT}40`,
                `0 0 0 8px ${ACCENT}00`,
                `0 0 0 0 ${ACCENT}40`,
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-lg"
            style={{ backgroundColor: `${ACCENT}15` }}
          >
            <svg className="w-5 h-5" style={{ color: ACCENT }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="p-4 rounded-lg"
          style={{ backgroundColor: `${ACCENT}08` }}
        >
          <p className="text-lg font-medium" style={{ color: PRIMARY }}>
            "Add index on users.email to reduce query latency by 63%"
          </p>
        </motion.div>
        
        <div className="mt-4 flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 text-sm font-semibold text-white rounded-lg"
            style={{ backgroundColor: PRIMARY }}
          >
            Apply
          </motion.button>
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800">
            Dismiss
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductPreview() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto mt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <HealthCard />
        <QueriesCard />
        <AIRecommendationCard />
      </div>
    </motion.div>
  );
}

