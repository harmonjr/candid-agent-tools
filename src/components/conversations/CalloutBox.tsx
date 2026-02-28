'use client';

type CalloutVariant = 'warning' | 'consequence';

interface CalloutBoxProps {
  variant: CalloutVariant;
  label: string;
  children: string;
}

const VARIANT_STYLES: Record<CalloutVariant, string> = {
  warning: 'bg-highlight border-l-2 border-candid',
  consequence: 'bg-cream-alt border-l-2 border-ink-muted/30',
};

const LABEL_STYLES: Record<CalloutVariant, string> = {
  warning: 'text-candid',
  consequence: 'text-ink-muted',
};

export default function CalloutBox({
  variant,
  label,
  children,
}: CalloutBoxProps) {
  return (
    <div className={`px-5 py-4 ${VARIANT_STYLES[variant]}`}>
      <span
        className={`font-sans text-[11px] font-semibold uppercase tracking-[0.2em] ${LABEL_STYLES[variant]}`}
      >
        {label}
      </span>
      <p className="mt-2 font-sans text-sm leading-relaxed text-ink-muted">
        {children}
      </p>
    </div>
  );
}
