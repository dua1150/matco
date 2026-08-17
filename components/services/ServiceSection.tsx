import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";
import AnimatedReveal from "@/components/shared/AnimatedReveal";

type ServiceSectionProps = {
  service: Service;
  index: number;
  projectsHref: string;
};

export default function ServiceSection({
  service,
  index,
  projectsHref,
}: ServiceSectionProps) {
  const imageFirst = index % 2 === 0;

  return (
    <div className="grid items-center gap-10 border-t border-line py-16 lg:grid-cols-2 lg:gap-16">
      <AnimatedReveal
        className={`relative aspect-[4/3] overflow-hidden border border-line ${
          imageFirst ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority={index === 0}
          quality={index === 0 ? 90 : 75}
          className="object-cover"
        />
      </AnimatedReveal>

      <AnimatedReveal
        delay={0.1}
        className={`flex flex-col gap-5 ${
          imageFirst ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          0{index + 1}
        </span>
        <h2 className="text-2xl font-semibold text-text-primary sm:text-3xl">
          {service.name}
        </h2>
        <p className="max-w-md text-base leading-relaxed text-text-secondary">
          {service.description}
        </p>

        <ul className="flex flex-col gap-2">
          {service.capabilities.map((capability) => (
            <li
              key={capability}
              className="flex items-center gap-3 text-sm text-text-primary/85"
            >
              <span className="h-px w-5 bg-gold" />
              {capability}
            </li>
          ))}
        </ul>

        <div className="mt-2">
          <Link
            href={projectsHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-gold"
          >
            View Projects
            <span aria-hidden>→</span>
          </Link>
        </div>
      </AnimatedReveal>
    </div>
  );
}