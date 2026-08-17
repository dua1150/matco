"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedReveal from "@/components/shared/AnimatedReveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const goTo = (next: number) => {
    setIndex((next + testimonials.length) % testimonials.length);
  };

  return (
    <section className="border-t border-line bg-bg-secondary py-24">
      <div className="container-app">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="What Our Clients Say"
            heading="Client Testimonials"
            align="center"
            className="mx-auto"
          />
        </AnimatedReveal>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center gap-6 text-center"
              >
                <span className="text-4xl text-gold">&ldquo;</span>
                <p className="text-lg leading-relaxed text-text-primary sm:text-xl">
                  {current.quote}
                </p>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm font-semibold text-text-primary">
                    {current.name}
                  </span>
                  <span className="text-xs text-text-secondary">
                    {current.role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center border border-line text-text-primary transition-colors hover:border-gold hover:text-gold"
            >
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-1.5 w-6 transition-colors ${
                    i === index ? "bg-gold" : "bg-line"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center border border-line text-text-primary transition-colors hover:border-gold hover:text-gold"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}