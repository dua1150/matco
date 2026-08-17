import { projects } from "@/data/projects";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedReveal from "@/components/shared/AnimatedReveal";
import Button from "@/components/shared/Button";
import ProjectCard from "@/components/projects/ProjectCard";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="border-t border-line bg-bg-secondary py-24">
      <div className="container-app">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <AnimatedReveal>
            <SectionHeading
              eyebrow="Selected Work"
              heading="Built With Precision."
              description="A glimpse into recent work across construction, interior, and fabrication."
            />
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <Button href="/projects" variant="ghost">
              View All Projects →
            </Button>
          </AnimatedReveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-flow-dense lg:auto-rows-[220px] lg:grid-cols-4">
          {featured.map((project, i) => (
            <AnimatedReveal
              key={project.slug}
              delay={i * 0.08}
              className={`h-full ${
                i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <ProjectCard
                project={project}
                sizes={
                  i === 0
                    ? "(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                    : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                }
              />
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}