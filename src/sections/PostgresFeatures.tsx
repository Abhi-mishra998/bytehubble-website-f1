import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { POSTGRES_FEATURES } from "@/lib/constants";

export default function PostgresFeatures() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeading
          label="PostgreSQL Intelligence"
          title="Enterprise-Grade PostgreSQL Automation"
          description="Purpose-built AI capabilities for every aspect of PostgreSQL management — from query optimization to disaster recovery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTGRES_FEATURES.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-100 bg-background hover:bg-white hover:shadow-md hover:border-accent/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-dark-accent mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-dark-accent/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
