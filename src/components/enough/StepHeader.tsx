interface StepHeaderProps {
  label: string;
  title: string;
  description: string;
}

export default function StepHeader({
  label,
  title,
  description,
}: StepHeaderProps) {
  return (
    <div>
      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
        {label}
      </span>
      <h2 className="mt-2 font-serif text-3xl font-light text-ink sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-ink-muted">
        {description}
      </p>
    </div>
  );
}
