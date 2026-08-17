import type { Metadata } from "next";
import { Suspense } from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedReveal from "@/components/shared/AnimatedReveal";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore MATCO's portfolio of construction, interior, carpentry, aluminium & UPVC, and steel fabrication projects in Sultanate of Oman.",
};

export default function ProjectsPage() {
  return (
    <section className="bg-bg-primary pb-24 pt-40">
      <div className="container-app">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Our Portfolio"
            heading="Built With Precision."
            description="A showcase of MATCO's work across construction, interior, carpentry, aluminium & UPVC, and steel fabrication."
          />
        </AnimatedReveal>

        <div className="mt-12">
          <Suspense fallback={null}>
            <ProjectGrid projects={projects} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}