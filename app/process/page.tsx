import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedReveal from "@/components/shared/AnimatedReveal";
import Button from "@/components/shared/Button";
import ProcessTimeline from "@/components/process/ProcessTimeline";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "How MATCO works, from initial consultation through to project completion, for construction and architectural projects in Sultanate of Oman.",
};

const EXPECTATIONS = [
  "Clear communication",
  "Thoughtful planning",
  "Professional execution",
  "Attention to detail",
  "Coordinated project delivery",
];

export default function ProcessPage() {
  return (
    <>
      <section className="relative flex min-h-[55vh] flex-col justify-end overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/al-manarah-office/cover.jpg"
            alt="MATCO project coordination"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-overlay via-overlay/70 to-overlay/30" />
        </div>

        <div className="container-app relative z-10 flex flex-col gap-4 pb-16">
          <AnimatedReveal>
            <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              <span className="h-px w-8 bg-gold" />
              Our Process
            </span>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <h1 className="max-w-2xl text-[clamp(2.25rem,5.5vw,4.5rem)] font-semibold leading-[1.05] text-inverse">
              From First Idea
              <br />
              <span className="text-maroon">to Finished Space.</span>
            </h1>
          </AnimatedReveal>
        </div>
      </section>

      <section className="border-t border-line bg-bg-primary py-24">
        <div className="container-app max-w-3xl">
          <ProcessTimeline />
        </div>
      </section>

      <section className="border-t border-line bg-bg-secondary py-24">
        <div className="container-app">
          <AnimatedReveal>
            <SectionHeading eyebrow="What You Can Expect" heading="Working With MATCO." />
          </AnimatedReveal>

          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXPECTATIONS.map((item, i) => (
              <AnimatedReveal key={item} delay={i * 0.05}>
                <li className="flex items-center gap-4 border-b border-line pb-5">
                  <span className="h-px w-5 bg-gold" />
                  <span className="text-base text-text-primary">{item}</span>
                </li>
              </AnimatedReveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-bg-primary py-24">
        <div className="container-app flex flex-col items-start gap-6">
          <AnimatedReveal>
            <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              <span className="h-px w-8 bg-gold" />
              Have a Project in Mind?
            </span>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
              Let&apos;s talk through your next project.
            </h2>
          </AnimatedReveal>
          <AnimatedReveal delay={0.2}>
            <div className="flex flex-wrap gap-4">
              <Button href="/projects" variant="secondary" size="lg">
                View Projects
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