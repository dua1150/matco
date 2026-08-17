import Image from "next/image";
import Button from "@/components/shared/Button";
import AnimatedReveal from "@/components/shared/AnimatedReveal";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden border-t border-line py-28">
      <div className="absolute inset-0">
        <Image
          src="/images/cta/matco-cta.jpg"
          alt="MATCO craftsmanship"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bg-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-bg-primary/40" />
      </div>

      <div className="container-app relative z-10 flex flex-col items-start gap-6">
        <AnimatedReveal>
          <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Have a Project in Mind?
          </span>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-text-primary sm:text-4xl lg:text-5xl">
            Let&apos;s Build It Together.
          </h2>
        </AnimatedReveal>

        <AnimatedReveal delay={0.2}>
          <div className="mt-2 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Get a Quote
            </Button>
            <Button href="tel:+96897629914" variant="secondary" size="lg">
              Call Now
            </Button>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}