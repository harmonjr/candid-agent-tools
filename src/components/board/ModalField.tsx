export const INPUT_CLASS =
  'w-full border border-border bg-white px-4 py-3 font-sans text-sm text-ink placeholder:text-ink-muted/50 transition-colors duration-200 focus:border-candid/50 focus:outline-hidden focus:ring-2 focus:ring-accent/20';

const LABEL_CLASS =
  'font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid';

interface ModalFieldProps {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}

export default function ModalField({ label, htmlFor, children }: ModalFieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className={LABEL_CLASS}>
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}
