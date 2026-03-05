import Link from 'next/link';
import PullQuote from '@/components/shared/PullQuote';

const PULL_QUOTE_TEXT =
  'What if the goal isn\u2019t more transactions \u2014 but better ones?';

export default function HomeFeaturedAudit() {
  return (
    <section id="featured" className="bg-cream px-6 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <ContextColumn />
          <DetailColumn />
        </div>

        <PullQuote quote={PULL_QUOTE_TEXT} />
      </div>
    </section>
  );
}

function ContextColumn() {
  return (
    <div className="lg:col-span-4">
      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
        Start Here
      </span>

      <h2 className="mt-6 font-serif text-4xl font-light leading-tight text-ink sm:text-5xl">
        The Margin
        <br />
        Practice Audit
      </h2>

      <p className="mt-6 font-sans text-sm leading-relaxed text-ink-muted">
        Five minutes. Three dimensions. One honest mirror.
      </p>
    </div>
  );
}

function DetailColumn() {
  return (
    <div className="border-t-2 border-candid pt-8 lg:col-span-8 lg:pt-12">
      <p className="max-w-xl font-sans text-base leading-relaxed text-ink-muted sm:text-lg">
        A self-assessment that looks at financial margin, time margin, and
        client load — the three pillars that determine whether your
        practice is sustainable or just busy. No judgment. No upsell.
        Just clarity about where you stand.
      </p>

      <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-12">
        <Link
          href="/audit"
          className="inline-block bg-ink px-8 py-4 font-sans text-sm font-semibold text-cream transition-colors duration-200 hover:bg-accent-hover focus:outline-hidden focus:ring-2 focus:ring-ink/30"
        >
          Take the Audit
        </Link>

        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/60">
          Free &middot; 5 Minutes &middot; No Account Required
        </span>
      </div>
    </div>
  );
}
