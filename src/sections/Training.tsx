import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { TRAINING_PROGRAMS } from "@/lib/constants";

export default function Training() {
  return (
    <section className="pt-24 pb-20 lg:pt-28 lg:pb-28">
      <Container>
        <SectionHeading
          label="Training Academy"
          title="World-Class Database Training"
          description="Upskill your team with industry-leading training programs designed by PostgreSQL experts and senior database engineers."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TRAINING_PROGRAMS.map((program, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Duration & Level badges */}
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/5 text-xs font-semibold text-primary">
                  {program.duration}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-xs font-semibold text-accent">
                  {program.level}
                </span>
              </div>

              <h3 className="text-xl font-bold text-dark-accent mb-3">
                {program.title}
              </h3>
              <p className="text-dark-accent/60 leading-relaxed mb-6">
                {program.description}
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-2 mb-6">
                {program.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 rounded-lg bg-background text-xs font-medium text-dark-accent/70"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <Button href="/services/training" variant="ghost" size="sm">
                View Curriculum →
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/services/training#enterprise" variant="outline">
            Request Enterprise Training
          </Button>
        </div>
      </Container>
    </section>
  );
}
