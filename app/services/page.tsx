import type { Metadata } from "next";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedReveal from "@/components/shared/AnimatedReveal";
import Button from "@/components/shared/Button";
import ServiceSection from "@/components/services/ServiceSection";
import { services, ServiceSlug } from "@/data/services";

export const metadata: Metadata = {
  title: "Construction & Architectural Services",
  description:
    "MATCO's core services in Sultanate of Oman: Interior & Exterior, Building Construction, Carpentry, Aluminium & UPVC, and Steel & Fabrication.",
};

const PROJECT_LINKS: Record<ServiceSlug, string> = {
  "interior-exterior": "/projects",
  "building-construction": "/projects?category=building-construction",
  carpentry: "/projects?category=carpentry",
  "aluminium-upvc": "/projects?category=aluminium-upvc",
  "steel-fabrication": "/projects?category=steel-fabrication",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-bg-primary pb-8 pt-40">
        <div className="container-app">
          <AnimatedReveal>
            <SectionHeading
              eyebrow="What We Do"
              heading="Complete Solutions. Built Around You."
              description="Five core capabilities delivered by one coordinated team — from first sketch to final finish."
            />
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-bg-primary pb-12">
        <div className="container-app">
          {services.map((service, i) => (
            <ServiceSection
              key={service.slug}
              service={service}
              index={i}
              projectsHref={PROJECT_LINKS[service.slug]}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-bg-secondary py-24">
        <div className="container-app flex flex-col items-start gap-6">
          <AnimatedReveal>
            <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              <span className="h-px w-8 bg-gold" />
              Ready to Build?
            </span>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
              Let&apos;s bring your project to life.
            </h2>
          </AnimatedReveal>
          <AnimatedReveal delay={0.2}>
            <div className="flex flex-wrap gap-4">
              <Button href="/projects" variant="secondary" size="lg">
                View Our Projects
              </Button>
              <Button href="/contact" variant="primary" size="lg">
                Get a Quote
              </Button>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}