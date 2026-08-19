import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedReveal from "@/components/shared/AnimatedReveal";
import Button from "@/components/shared/Button";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "About MATCO",
  description:
    "MATCO is a construction and architectural solutions company based in Sanaiya, Sultanate of Oman, delivering integrated construction, interior, carpentry, aluminium & UPVC, and steel fabrication work.",
};

const WHY_MATCO = [
  "Quality Craftsmanship",
  "Attention to Detail",
  "Integrated Solutions",
  "Reliable Execution",
  "Customer Focus",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[60vh] flex-col justify-end overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/entrance-doors/cover.jpg"
            alt="MATCO custom craftsmanship"
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
              About MATCO
            </span>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <h1 className="max-w-2xl text-[clamp(2.25rem,5.5vw,4.5rem)] font-semibold leading-[1.05] text-inverse">
              Built on Craftsmanship.
              <br />
              <span className="text-maroon">Driven by Precision.</span>
            </h1>
          </AnimatedReveal>
        </div>
      </section>

      <section className="border-t border-line bg-bg-primary py-24">
        <div className="container-app grid gap-12 lg:grid-cols-2 lg:items-center">
          <AnimatedReveal className="relative aspect-[4/3] overflow-hidden border border-line">
            <Image
              src="/images/projects/private-majlis/cover.jpg"
              alt="MATCO interior craftsmanship"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </AnimatedReveal>

          <AnimatedReveal delay={0.1} className="flex flex-col gap-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Who We Are
            </span>
            <h2 className="text-2xl font-semibold text-text-primary sm:text-3xl">
              An integrated construction &amp; architectural solutions company
            </h2>
            <p className="text-base leading-relaxed text-text-secondary">
              MATCO brings together construction, interior &amp; exterior
              work, carpentry, aluminium &amp; UPVC, and steel fabrication
              under one coordinated team — so a project moves from concept to
              completion without being split across disconnected contractors.
            </p>
            <p className="text-base leading-relaxed text-text-secondary">
              Our approach is built around precision and craftsmanship at
              every stage, whether we&apos;re framing a structure, fitting a
              custom kitchen, or fabricating a steel gate.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      <section className="border-t border-line bg-bg-secondary py-24">
        <div className="container-app">
          <AnimatedReveal>
            <SectionHeading eyebrow="What We Do" heading="Five Core Capabilities." />
          </AnimatedReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service, i) => (
              <AnimatedReveal key={service.slug} delay={i * 0.06}>
                <div className="flex h-full flex-col gap-3 border border-line bg-surface p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    0{i + 1}
                  </span>
                  <h3 className="text-base font-semibold text-text-primary">
                    {service.name}
                  </h3>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-bg-primary py-24">
        <div className="container-app">
          <AnimatedReveal>
            <SectionHeading eyebrow="Why MATCO" heading="What We Stand For." />
          </AnimatedReveal>

          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_MATCO.map((item, i) => (
              <AnimatedReveal key={item} delay={i * 0.05}>
                <li className="flex items-center gap-4 border-b border-line pb-5">
                  <span className="text-sm font-semibold text-gold">0{i + 1}</span>
                  <span className="text-base text-text-primary">{item}</span>
                </li>
              </AnimatedReveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-line py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/services/building-construction.jpg"
            alt="MATCO construction work"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-overlay/80" />
        </div>

        <div className="container-app relative z-10 flex flex-col items-start gap-6">
          <AnimatedReveal>
            <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              <span className="h-px w-8 bg-gold" />
              Let&apos;s Build Something Great.
            </span>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight text-inverse sm:text-4xl">
              Ready to start your project with MATCO?
            </h2>
          </AnimatedReveal>
          <AnimatedReveal delay={0.2}>
            <Button href="/contact" variant="primary" size="lg">
              Start Your Project
            </Button>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}