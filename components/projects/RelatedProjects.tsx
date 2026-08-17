import { projects, ProjectCategory } from "@/data/projects";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedReveal from "@/components/shared/AnimatedReveal";
import ProjectCard from "@/components/projects/ProjectCard";

type RelatedProjectsProps = {
  currentSlug: string;
  categories: ProjectCategory[];
};

export default function RelatedProjects({
  currentSlug,
  categories,
}: RelatedProjectsProps) {
  const related = projects
    .filter(
      (p) =>
        p.slug !== currentSlug &&
        p.category.some((c) => categories.includes(c))
    )
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="border-t border-line bg-bg-secondary py-20">
      <div className="container-app">
        <AnimatedReveal>
          <SectionHeading eyebrow="More Projects" heading="Related Work." />
        </AnimatedReveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((project, i) => (
            <AnimatedReveal key={project.slug} delay={i * 0.08} className="h-full">
              <div className="aspect-[4/5]">
                <ProjectCard project={project} />
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}