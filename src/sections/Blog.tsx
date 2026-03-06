import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { BLOG_POSTS } from "@/lib/constants";

export default function Blog() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeading
          label="Intelligence Hub"
          title="Insights & Research"
          description="Stay ahead with the latest research, best practices, and thought leadership in database engineering and AI operations."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {BLOG_POSTS.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-gray-100 bg-background hover:bg-white hover:shadow-lg hover:border-transparent transition-all duration-300 overflow-hidden"
            >
              {/* Placeholder image area */}
              <div className="h-48 bg-brand-gradient opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg className="w-12 h-12 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-accent">
                    {post.category}
                  </span>
                  <span className="text-xs text-dark-accent/40">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-dark-accent mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-dark-accent/60 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-4 text-sm font-semibold text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/blog" variant="outline">
            View All Articles
          </Button>
        </div>
      </Container>
    </section>
  );
}
