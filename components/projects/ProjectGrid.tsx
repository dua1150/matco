"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Project } from "@/data/projects";
import ProjectFilter, { FILTERS, FilterValue } from "@/components/projects/ProjectFilter";
import ProjectCard from "@/components/projects/ProjectCard";

const TILE_PATTERNS = [
  "lg:col-span-2 lg:row-span-2",
  "",
  "lg:row-span-2",
  "",
  "",
];

const isWideTile = (pattern: string) => pattern.includes("col-span-2");

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const initialFilter: FilterValue =
    categoryParam && FILTERS.some((f) => f.value === categoryParam)
      ? (categoryParam as FilterValue)
      : "all";

  const [active, setActive] = useState<FilterValue>(initialFilter);

  useEffect(() => {
    setActive(initialFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryParam]);

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.category.includes(active));
  }, [projects, active]);

  return (
    <div>
      <ProjectFilter active={active} onChange={setActive} />

      <motion.div
        layout
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-flow-dense lg:auto-rows-[260px] lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => {
            const pattern = TILE_PATTERNS[i % TILE_PATTERNS.length];
            return (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`h-full min-h-[260px] ${pattern}`}
              >
                <ProjectCard
                  project={project}
                  sizes={
                    isWideTile(pattern)
                      ? "(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                      : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  }
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-text-secondary">
          No projects found in this category yet.
        </p>
      )}
    </div>
  );
}