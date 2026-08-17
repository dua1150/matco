import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedReveal from "@/components/shared/AnimatedReveal";
import ProcessStep from "@/components/home/ProcessStep";

const WHY_MATCO = [
  "Professional Craftsmanship",
  "Quality Materials",
  "Experienced Team",
  "End-to-End Solutions",
  "Reliable Execution",
  "Customer Satisfaction",
];

const PROCESS_STEPS = [
  "Consultation",
  "Planning & Design",
  "Estimation",
  "Execution",
  "Quality Inspection",
  "Completion",
];

export default function WhyChooseProcess() {
  return (
    <section className="border-t border-line bg-bg-primary py-24">
      <div className="container-app grid gap-16 lg:grid-cols-2">
        <div>
          <AnimatedReveal>
            <SectionHeading
              eyebrow="Why MATCO"
              heading="Trusted From Foundation to Finish."
            />
          </AnimatedReveal>

          <ul className="mt-10 flex flex-col gap-5">
            {WHY_MATCO.map((item, i) => (
              <AnimatedReveal key={item} delay={i * 0.05}>
                <li className="flex items-center gap-4 border-b border-line pb-5">
                  <span className="text-sm font-semibold text-gold">
                    0{i + 1}
                  </span>
                  <span className="text-base text-text-primary sm:text-lg">
                    {item}
                  </span>
                </li>
              </AnimatedReveal>
            ))}
          </ul>
        </div>

        <div>
          <AnimatedReveal>
            <SectionHeading eyebrow="Our Process" heading="How We Work." />
          </AnimatedReveal>

          <div className="mt-10">
            {PROCESS_STEPS.map((title, i) => (
              <AnimatedReveal key={title} delay={i * 0.05}>
                <ProcessStep
                  number={`0${i + 1}`}
                  title={title}
                  isLast={i === PROCESS_STEPS.length - 1}
                />
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}