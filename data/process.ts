export type ProcessStepData = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStepData[] = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We start by understanding your project — the space, the goals, and the scope of work involved.",
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "Requirements are translated into a clear plan, covering layout, materials, and the services involved.",
  },
  {
    number: "03",
    title: "Estimation",
    description:
      "A detailed estimate is prepared, so costs and timelines are clear before work begins.",
  },
  {
    number: "04",
    title: "Execution",
    description:
      "Our team carries out the work with coordinated scheduling across construction, interior, and fabrication trades.",
  },
  {
    number: "05",
    title: "Quality Inspection",
    description:
      "Every stage of the work is reviewed against the agreed plan and finish standard before moving forward.",
  },
  {
    number: "06",
    title: "Completion",
    description:
      "The finished space is handed over, walked through with you, and ready to use.",
  },
];