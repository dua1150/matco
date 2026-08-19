import Image from "next/image";
import Button from "@/components/shared/Button";
import AnimatedReveal from "@/components/shared/AnimatedReveal";
import StatItem from "@/components/shared/StatItem";

const STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "100+", label: "Projects Completed" },
  { value: "05", label: "Core Services" },
  { value: "100%", label: "Commitment to Quality" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-bg-primary pt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/matco-hero.jpg"
          alt="MATCO architectural craftsmanship"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-overlay via-overlay/70 to-overlay/30" />
        <div className="absolute inset-0 bg-overlay/20" />
      </div>

      <div className="container-app relative z-10 flex flex-col gap-6 pb-20 pt-40">
        <AnimatedReveal>
          <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            <span className="h-px w-8 bg-gold" />
            MATCO Construction &amp; Architectural Solutions
          </span>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <h1 className="max-w-4xl text-[clamp(2.5rem,6.5vw,6rem)] font-semibold leading-[1.03] text-inverse">
            Building Spaces.
            <br />
            <span className="text-maroon">Creating Legacies.</span>
          </h1>
        </AnimatedReveal>

        <AnimatedReveal delay={0.2}>
          <p className="max-w-xl text-base leading-relaxed text-inverse-muted sm:text-lg">
            MATCO delivers complete construction, interior &amp; exterior,
            carpentry, aluminium &amp; UPVC, and steel fabrication solutions
            — built on precision, quality, and craftsmanship.
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.3}>
          <div className="mt-2 flex flex-wrap gap-4">
            <Button href="/projects" variant="primary" size="lg">
              Explore Our Projects
            </Button>
            <Button href="/contact" variant="secondary" tone="inverse" size="lg">
              Get a Quote
            </Button>
          </div>
        </AnimatedReveal>
      </div>

      <AnimatedReveal delay={0.4}>
        <div className="relative z-10 border-t border-line/50 bg-bg-primary">
          <div className="container-app grid grid-cols-2 gap-x-4 gap-y-8 py-8 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-line/60 sm:py-10">
            {STATS.map((stat) => (
              <div key={stat.label} className="px-1 sm:px-8 first:sm:pl-0">
                <StatItem value={stat.value} label={stat.label} />
              </div>
            ))}
          </div>
        </div>
      </AnimatedReveal>
    </section>
  );
}