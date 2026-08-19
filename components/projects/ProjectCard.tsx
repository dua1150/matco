import Image from "next/image";
import Link from "next/link";
import { Project, CATEGORY_LABELS } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  sizes?: string;
};

export default function ProjectCard({
  project,
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex h-full min-h-[260px] flex-col justify-end overflow-hidden border border-line"
    >
      <Image
        src={project.coverImage.src}
        alt={project.coverImage.alt}
        fill
        sizes={sizes}
        quality={90}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-overlay via-overlay/40 to-transparent" />

      <div className="relative z-10 flex flex-col gap-1 p-5">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
          {project.category.map((c) => CATEGORY_LABELS[c]).join(" · ")}
        </span>
        <h3 className="text-lg font-semibold text-inverse">
          {project.name}
        </h3>
        <span className="text-xs text-inverse-muted">{project.location}</span>
      </div>

      <span
        aria-hidden
        className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center border border-inverse/30 text-inverse opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        →
      </span>
    </Link>
  );
}