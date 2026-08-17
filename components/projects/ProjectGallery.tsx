"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectLightbox from "@/components/projects/ProjectLightbox";
import type { ProjectImage } from "@/data/projects";

const GALLERY_PATTERNS = ["lg:col-span-2", "", "", "lg:col-span-2", ""];

export default function ProjectGallery({ images }: { images: ProjectImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, i) => (
          <button
            key={image.src + i}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`Open image: ${image.alt}`}
            className={`group relative aspect-[4/3] overflow-hidden border border-line ${
              GALLERY_PATTERNS[i % GALLERY_PATTERNS.length]
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <ProjectLightbox
        images={images}
        openIndex={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </>
  );
}