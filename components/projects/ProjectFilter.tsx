"use client";

import { ProjectCategory } from "@/data/projects";

export type FilterValue = ProjectCategory | "all";

export const FILTERS: { label: string; value: FilterValue }[] = [
  { label: "All", value: "all" },
  { label: "Interior", value: "interior" },
  { label: "Exterior", value: "exterior" },
  { label: "Construction", value: "building-construction" },
  { label: "Carpentry", value: "carpentry" },
  { label: "Aluminium & UPVC", value: "aluminium-upvc" },
  { label: "Steel & Fabrication", value: "steel-fabrication" },
];

type ProjectFilterProps = {
  active: FilterValue;
  onChange: (value: FilterValue) => void;
};

export default function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  return (
    <div
      className="-mx-6 overflow-x-auto px-6 sm:mx-0 sm:overflow-visible sm:px-0"
      role="group"
      aria-label="Filter projects by category"
    >
      <div className="flex w-max gap-3 sm:w-full sm:flex-wrap">
        {FILTERS.map((filter) => {
          const isActive = filter.value === active;
          return (
            <button
              key={filter.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(filter.value)}
              className={`whitespace-nowrap border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                isActive
                  ? "border-maroon bg-maroon text-text-primary"
                  : "border-line text-text-secondary hover:border-gold hover:text-gold"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}