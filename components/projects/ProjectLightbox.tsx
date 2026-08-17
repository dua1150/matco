"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { ProjectImage } from "@/data/projects";

type ProjectLightboxProps = {
  images: ProjectImage[];
  openIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function ProjectLightbox({
  images,
  openIndex,
  onClose,
  onNavigate,
}: ProjectLightboxProps) {
  const isOpen = openIndex !== null;
  const total = images.length;
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);

  const goNext = useCallback(() => {
    if (openIndex === null) return;
    onNavigate((openIndex + 1) % total);
  }, [openIndex, total, onNavigate]);

  const goPrev = useCallback(() => {
    if (openIndex === null) return;
    onNavigate((openIndex - 1 + total) % total);
  }, [openIndex, total, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    triggerElementRef.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      triggerElementRef.current?.focus();
    };
  }, [isOpen, goNext, goPrev, onClose]);

  return (
    <AnimatePresence>
      {isOpen && openIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-primary/95 p-4 sm:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Image gallery, image ${openIndex + 1} of ${total}`}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close lightbox"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-line text-text-primary transition-colors hover:border-gold hover:text-gold sm:right-8 sm:top-8"
          >
            ✕
          </button>

          <span className="absolute left-4 top-4 text-xs text-text-secondary sm:left-8 sm:top-8">
            {openIndex + 1} / {total}
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous image"
            className="absolute left-2 flex h-11 w-11 items-center justify-center border border-line text-text-primary transition-colors hover:border-gold hover:text-gold sm:left-6"
          >
            ←
          </button>

          <motion.div
            key={openIndex}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="relative h-[70vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[openIndex].src}
              alt={images[openIndex].alt}
              fill
              sizes="100vw"
              quality={90}
              className="object-contain"
            />
          </motion.div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next image"
            className="absolute right-2 flex h-11 w-11 items-center justify-center border border-line text-text-primary transition-colors hover:border-gold hover:text-gold sm:right-6"
          >
            →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}