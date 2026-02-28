'use client';

interface EducationCalloutProps {
  children: string;
}

export default function EducationCallout({ children }: EducationCalloutProps) {
  return (
    <div className="border-l-2 border-candid bg-highlight px-5 py-4">
      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
        The Candid Perspective
      </span>
      <p className="mt-2 font-sans text-sm leading-relaxed text-ink-muted">
        {children}
      </p>
    </div>
  );
}
