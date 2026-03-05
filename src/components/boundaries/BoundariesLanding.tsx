'use client';

interface BoundariesLandingProps {
  onStart: () => void;
}

export default function BoundariesLanding({ onStart }: BoundariesLandingProps) {
  return (
    <section className="bg-ink px-6 py-24 sm:px-8 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-7">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
              Free Tool
            </span>

            <h1 className="mt-8 font-serif text-5xl font-light leading-[1.1] text-cream sm:text-6xl lg:text-7xl">
              Communication Hours
              <br />
              <em className="text-candid">Template</em>
            </h1>
          </div>

          <div className="flex flex-col justify-end lg:col-span-5">
            <p className="max-w-md font-sans text-base leading-relaxed text-cream/60 sm:text-lg">
              The best agents do not answer every call at midnight. They set clear
              expectations, protect their energy, and show up fully present
              when it matters most.
            </p>

            <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-cream/40">
              This tool helps you define your working hours and generates
              professional templates you can actually use — auto-responders,
              availability statements, and scripts for setting client
              expectations from day one.
            </p>

            <button
              type="button"
              onClick={onStart}
              className="mt-10 self-start bg-accent px-8 py-4 font-sans text-sm font-semibold text-cream transition-colors duration-200 hover:bg-accent-hover focus:outline-hidden focus:ring-2 focus:ring-accent/20"
            >
              Build My Boundaries
            </button>

            <p className="mt-4 font-sans text-xs text-cream/30">
              Free. No sign-up required. Everything stays on your device.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
