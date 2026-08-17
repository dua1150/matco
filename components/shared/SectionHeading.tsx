type SectionHeadingProps = {
  eyebrow: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
        <span className="h-px w-8 bg-gold" />
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold leading-tight text-text-primary sm:text-4xl lg:text-5xl">
        {heading}
      </h2>
      {description && (
        <p className="max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}