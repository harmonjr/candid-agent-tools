'use client';

interface BoundariesLandingProps {
  onStart: () => void;
}

export default function BoundariesLanding({ onStart }: BoundariesLandingProps) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
        Free Tool
      </span>

      <h1 className="mt-4 max-w-2xl font-serif text-4xl font-light leading-tight text-ink sm:text-5xl lg:text-6xl">
        Communication Hours Template
      </h1>

      <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-ink-muted sm:text-lg">
        The best agents do not answer every call at midnight. They set clear
        expectations, protect their energy, and show up fully present
        when it matters most.
      </p>

      <p className="mt-4 max-w-lg font-sans text-sm leading-relaxed text-ink-muted">
        This tool helps you define your working hours and generates
        professional templates you can actually use — auto-responders,
        availability statements, and scripts for setting client
        expectations from day one.
      </p>

      <button
        type="button"
        onClick={onStart}
        className="mt-10 bg-accent px-8 py-4 font-sans text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-hover focus:outline-hidden focus:ring-2 focus:ring-accent/20"
      >
        Build My Boundaries
      </button>

      <p className="mt-4 font-sans text-xs text-ink-muted">
        Free. No sign-up required. Everything stays on your device.
      </p>
    </div>
  );
}
