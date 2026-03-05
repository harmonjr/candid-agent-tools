import Link from 'next/link';

export default function HomeClosingCta() {
  return (
    <section className="bg-cream px-6 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <PrivacyColumn />
          <CtaColumn />
        </div>
      </div>
    </section>
  );
}

function PrivacyColumn() {
  return (
    <div className="flex flex-col justify-end lg:col-span-5">
      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
        What We Believe
      </span>

      <h2 className="mt-6 font-serif text-3xl font-light leading-tight text-ink sm:text-4xl">
        No login walls.
        <br />
        No upsells.
        <br />
        <span className="text-ink-muted">No data harvesting.</span>
      </h2>

      <p className="mt-8 max-w-md font-sans text-base leading-relaxed text-ink-muted">
        Every tool works the moment you arrive. Your data stays on your
        device. We have nothing to sell you — and we like it that way.
      </p>
    </div>
  );
}

function CtaColumn() {
  return (
    <div className="border-t-2 border-candid pt-8 lg:col-span-7 lg:pt-12">
      <h3 className="font-serif text-3xl font-light text-ink sm:text-4xl lg:text-5xl">
        Start with the audit.
      </h3>

      <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-ink-muted sm:text-lg">
        The Margin Practice Audit gives you an honest snapshot of your
        financial margin, time margin, and client load — and a
        concrete starting point for building the practice you
        actually want.
      </p>

      <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-12">
        <Link
          href="/audit"
          className="inline-block bg-ink px-10 py-5 font-sans text-sm font-semibold text-cream transition-colors duration-200 hover:bg-accent-hover focus:outline-hidden focus:ring-2 focus:ring-ink/30"
        >
          Take the Margin Practice Audit
        </Link>

        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/60">
          Free &middot; 5 Minutes
        </span>
      </div>
    </div>
  );
}
