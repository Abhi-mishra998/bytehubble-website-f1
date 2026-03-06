import Hero from "@/sections/Hero";
import Problem from "@/sections/Problem";
import PlatformOverview from "@/sections/PlatformOverview";
import PostgresFeatures from "@/sections/PostgresFeatures";
import Training from "@/sections/Training";
import Blog from "@/sections/Blog";
import CTA from "@/sections/CTA";
import Footer from "@/sections/Footer";
import LogoCloud from "@/components/logo-cloud/LogoCloud";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <PlatformOverview />
      <PostgresFeatures />
      <LogoCloud />
      <Training />
      <Blog />
      <NewsletterSection />
      <CTA />
      <Footer />
    </>
  );
}
