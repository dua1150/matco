import AnimatedReveal from "@/components/shared/AnimatedReveal";
import { processSteps } from "@/data/process";

export default function ProcessTimeline() {
  return (
    <div className="flex flex-col">
      {processSteps.map((step, i) => (
        <AnimatedReveal key={step.number} delay={i * 0.06}>
          <div className="relative flex gap-6 border-b border-line py-10 last:border-b-0 sm:gap-10">
            <div className="flex flex-col items-center">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-gold text-base font-semibold text-gold sm:h-16 sm:w-16 sm:text-lg">
                {step.number}
              </span>
              {i !== processSteps.length - 1 && (
                <span className="mt-2 hidden w-px flex-1 bg-line sm:block" />
              )}
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <h3 className="text-xl font-semibold text-text-primary sm:text-2xl">
                {step.title}
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-text-secondary sm:text-base">
                {step.description}
              </p>
            </div>
          </div>
        </AnimatedReveal>
      ))}
    </div>
  );
}