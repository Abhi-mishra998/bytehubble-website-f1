"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
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

export default function PartnersMarquee() {
  const {
    containerRef,
    duplicatedItems,
    handleMouseEnter,
    handleMouseLeave,
    animationStyle,
    animationTransition,
  } = useMarquee(partners, { duration: 20 });

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">
            Trusted By
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2E2A8F]">
            Our Clients & Partners
          </h2>
        </div>
      </Container>

      <div
        ref={containerRef}
        className="w-full overflow-hidden py-6"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="flex items-center gap-12 sm:gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={animationTransition}
          style={animationStyle}
        >
          {duplicatedItems.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center h-16 sm:h-20 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                background: "white",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                minWidth: "160px",
              }}
            >
              <Image
                src={logoMap[partner.logo]}
                alt={partner.name}
                className="max-h-10 sm:max-h-12 w-auto object-contain"
                style={{ filter: partner.logo === "lowtouch" ? "brightness(0)" : "none" }}
                unoptimized
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

