import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { projects, CATEGORY_LABELS } from "@/data/projects";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedReveal from "@/components/shared/AnimatedReveal";
import Button from "@/components/shared/Button";
import ProjectGallery from "@/components/projects/ProjectGallery";
import RelatedProjects from "@/components/projects/RelatedProjects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      images: [
        {
          url: project.coverImage.src,
          width: 1200,
          height: 900,
          alt: project.coverImage.alt,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="relative flex min-h-[70vh] flex-col justify-end overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/70 to-bg-primary/20" />
        </div>

        <div className="container-app relative z-10 flex flex-col gap-4 pb-16">
          <AnimatedReveal>
            <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              <span className="h-px w-8 bg-gold" />
              {project.category.map((c) => CATEGORY_LABELS[c]).join(" · ")}
            </span>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <h1 className="max-w-3xl text-[clamp(2rem,5vw,4rem)] font-semibold leading-tight text-text-primary">
              {project.name}
            </h1>
          </AnimatedReveal>
          <AnimatedReveal delay={0.15}>
            <span className="text-sm text-text-secondary">
              {project.location}
            </span>
          </AnimatedReveal>
        </div>
      </section>

      <section className="border-t border-line bg-bg-primary py-20">
        <div className="container-app grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <AnimatedReveal>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Project Overview
              </span>
              <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
                {project.description}
              </p>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <div className="flex flex-col gap-6 border border-line bg-surface p-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-text-secondary">
                  Location
                </span>
                <p className="mt-1 text-text-primary">{project.location}</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-text-secondary">
                  Category
                </span>
                <p className="mt-1 text-text-primary">
                  {project.category.map((c) => CATEGORY_LABELS[c]).join(", ")}
                </p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-text-secondary">
                  Services Provided
                </span>
                <p className="mt-1 text-text-primary">
                  {project.servicesProvided.join(", ")}
                </p>
              </div>
              {project.completionDate && (
                <div>
                  <span className="text-xs uppercase tracking-wider text-text-secondary">
                    Completion
                  </span>
                  <p className="mt-1 text-text-primary">
                    {project.completionDate}
                  </p>
                </div>
              )}
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="border-t border-line bg-bg-secondary py-20">
        <div className="container-app">
          <AnimatedReveal>
            <SectionHeading eyebrow="Project Gallery" heading="A Closer Look." />
          </AnimatedReveal>
          <div className="mt-10">
            <ProjectGallery images={project.images} />
          </div>
        </div>
      </section>

      <RelatedProjects currentSlug={project.slug} categories={project.category} />

      <section className="border-t border-line bg-bg-primary py-24">
        <div className="container-app flex flex-col items-start gap-6">
          <AnimatedReveal>
            <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              <span className="h-px w-8 bg-gold" />
              Have a Similar Project in Mind?
            </span>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
              Let&apos;s bring your vision to life.
            </h2>
          </AnimatedReveal>
          <AnimatedReveal delay={0.2}>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Get a Quote
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Contact Us
              </Button>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}