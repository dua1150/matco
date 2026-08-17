import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedReveal from "@/components/shared/AnimatedReveal";

export default function ServicesSection() {
  return (
    <section className="border-t border-line bg-bg-primary py-16 sm:py-20 lg:py-24">
      <div className="container-app">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="What We Do"
            heading="Complete Solutions. One Trusted Team."
            description="Five core capabilities, delivered with one consistent standard of craftsmanship."
          />
        </AnimatedReveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-flow-dense lg:auto-rows-[240px] lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimatedReveal
              key={service.slug}
              delay={i * 0.06}
              className={`h-full ${
                i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <Link
                href="/services"
                className="group relative flex aspect-[4/5] w-full flex-col justify-end overflow-hidden border border-line sm:aspect-[3/4] lg:aspect-auto lg:h-full lg:min-h-[240px]"
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes={
                    i === 0
                      ? "(min-width: 1024px) 66vw, (min-width: 640px) 50vw, 100vw"
                      : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  }
                  quality={90}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-transparent" />

                <div className="relative z-10 flex flex-col gap-2 p-5 sm:p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-text-primary sm:text-xl lg:text-2xl">
                    {service.name}
                  </h3>
                  <p className="max-w-sm text-sm text-text-secondary">
                    {service.description}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors group-hover:text-gold">
                    Learn More
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}