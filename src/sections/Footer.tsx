import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import companyLogo from "@/assets/company.jpeg";

const footerLinks = {
  solutions: {
    title: "Solutions",
    links: [
      { label: "Runbook GPT", href: "/solutions/runbook-gpt" },
      { label: "DB Agents", href: "/solutions/db-agents" },
      { label: "Incident AI", href: "/solutions/incident-ai" },
      { label: "Performance Tuning", href: "/solutions/performance-tuning" },
      { label: "Cost Optimization", href: "/solutions/cost-optimization" },
    ],
  },
  training: {
    title: "Training",
    links: [
      { label: "PostgreSQL Mastery", href: "/training/postgresql-mastery" },
      { label: "DBA Training", href: "/training/dba" },
      { label: "AI-ML for Engineers", href: "/training/ai-ml" },
      { label: "SRE Training", href: "/training/sre" },
      { label: "Enterprise Training", href: "/training/enterprise" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Intelligence Hub", href: "/resources/intelligence-hub" },
      { label: "Blog", href: "/blog" },
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/docs/api" },
      { label: "Status Page", href: "/status" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-primary/10">
      <Container>
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
              <Link href="/" className="flex items-center gap-0 mb-6">
                <div className="relative w-40 h-12">
                  <Image
                    src={companyLogo}
                    alt="ByteHubble"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </Link>
              <p className="text-sm text-foreground/70 leading-relaxed max-w-xs">
                The AI intelligence layer your PostgreSQL stack is missing.
                Automate, optimize, and transform your database operations.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-5 mt-6">
                {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-foreground/60 hover:text-accent transition-colors text-sm font-medium"
                    aria-label={social}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-foreground mb-5">
                  {section.title}
                </h3>
                <ul className="space-y-3.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-foreground/60 hover:text-accent transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/50">
            © {new Date().getFullYear()} ByteHubble. All rights reserved.
          </p>
          <p className="text-sm text-foreground/50">
            DB Intelligence Platform
          </p>
        </div>
      </Container>
    </footer>
  );
}
