type ProcessStepProps = {
  number: string;
  title: string;
  isLast?: boolean;
};

export default function ProcessStep({
  number,
  title,
  isLast,
}: ProcessStepProps) {
  return (
    <div className="relative flex gap-6 pb-10 last:pb-0">
      <div className="flex flex-col items-center">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold text-sm font-semibold text-gold">
          {number}
        </span>
        {!isLast && <span className="mt-2 w-px flex-1 bg-line" />}
      </div>
      <span className="pt-3 text-lg font-medium text-text-primary">
        {title}
      </span>
    </div>
  );
}