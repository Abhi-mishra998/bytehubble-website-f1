"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { useConsultationModal } from "@/context/ConsultationModalContext";
import chatbucket from "@/assets/partners/chatbucket.png";
import ascenthome from "@/assets/partners/ascent-home.png";
import infospoke from "@/assets/partners/inforspoke.png";
import opensourcedb from "@/assets/partners/opensourcedb.png";
import paycio from "@/assets/partners/paycio.png";
import lowtouch from "@/assets/partners/lowtouch.ai.png";
import tentacletech from "@/assets/partners/tentacle-tech.png";
import { useMarquee } from "@/hooks/useMarquee";

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { name: "ChatBucket", logo: "chatbucket" },
  { name: "Ascent Home", logo: "ascenthome" },
  { name: "Infospoke", logo: "infospoke" },
  { name: "OpenSourceDB", logo: "opensourcedb" },
  { name: "Paycio", logo: "paycio" },
  { name: "Low Touch.ai", logo: "lowtouch" },
  { name: "Tentacle Tech", logo: "tentacletech" },
];

// Map logo names to actual imports
const logoMap: Record<string, typeof chatbucket> = {
  chatbucket,
  ascenthome,
  infospoke,
  opensourcedb,
  paycio,
  lowtouch,
  tentacletech,
};

export default function Hero() {
  const { openModal } = useConsultationModal();
  const {
    containerRef,
    duplicatedItems,
    handleMouseEnter,
    handleMouseLeave,
    animationStyle,
    animationTransition,
  } = useMarquee(partners, { duration: 20 });

  return (
    <section className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl translate-y-1/2 -translate-x-1/3" />

      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-dark-accent sm:text-5xl lg:text-6xl xl:text-7xl animate-fade-up delay-100">
            AI Agents That Run{" "}
            <span className="text-brand-gradient">Your Databases</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg text-dark-accent/70 leading-relaxed max-w-2xl mx-auto sm:text-xl animate-fade-up delay-200">
            ByteHubble is the AI intelligence layer your PostgreSQL stack is
            missing combining enterprise knowledge RAG, autonomous DB agents,
            self-healing incident AI, and world-class database training.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <button
              onClick={openModal}
              className="px-8 py-4 text-lg font-semibold text-white bg-brand-gradient rounded-lg shadow-lg shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </Container>

      {/* Trusted By - Our Clients & Partners */}
      <div className="mt-12">
        <div className="text-center mb-6">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">
            Trusted By
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2E2A8F]">
            Our Clients & Partners
          </h2>
        </div>

        <div
          ref={containerRef}
          className="w-full overflow-hidden py-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="flex items-center gap-8 sm:gap-12 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={animationTransition}
            style={animationStyle}
          >
            {duplicatedItems.map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex-shrink-0 flex items-center justify-center h-12 sm:h-14 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:scale-105"
                style={{
                  background: "white",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
                  minWidth: "120px",
                }}
              >
                <Image
                  src={logoMap[partner.logo]}
                  alt={partner.name}
                  className="max-h-8 sm:max-h-10 w-auto object-contain"
                  style={{ filter: partner.logo === "lowtouch" ? "brightness(0)" : "none" }}
                  unoptimized
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

