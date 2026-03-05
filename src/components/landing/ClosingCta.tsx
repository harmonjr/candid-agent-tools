import Link from 'next/link';

export default function ClosingCta() {
  return (
    <section className="bg-cream px-6 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
          Ready?
        </span>

        <h2 className="mt-6 font-serif text-4xl font-light leading-tight text-ink sm:text-5xl lg:text-6xl">
          Start with the audit.
          <br />
          <span className="text-ink-muted">Five minutes changes the math.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-xl font-sans text-base leading-relaxed text-ink-muted sm:text-lg">
          The Margin Practice Audit gives you an honest snapshot of your
          financial margin, time margin, and client load — and a
          concrete starting point for building the practice you
          actually want.
        </p>

        <Link
          href="/audit"
          className="mt-12 inline-block bg-ink px-10 py-5 font-sans text-sm font-semibold text-cream transition-colors duration-200 hover:bg-accent-hover focus:outline-hidden focus:ring-2 focus:ring-ink/30"
        >
          Take the Margin Practice Audit
        </Link>

        <p className="mt-6 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/60">
          Free &middot; 5 Minutes &middot; No Account Required
        </p>
      </div>
    </section>
  );
}
