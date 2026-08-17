type StatItemProps = {
  value: string;
  label: string;
};

export default function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-3xl font-semibold leading-none text-text-primary sm:text-4xl">
        {value}
      </span>
      <span className="text-[11px] uppercase tracking-[0.15em] text-text-secondary sm:text-xs">
        {label}
      </span>
    </div>
  );
}