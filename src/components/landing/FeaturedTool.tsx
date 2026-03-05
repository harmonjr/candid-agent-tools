import Link from 'next/link';

export default function FeaturedTool() {
  return (
    <section className="bg-ink px-6 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <ToolContext />
          <ToolDetails />
        </div>
      </div>
    </section>
  );
}

function ToolContext() {
  return (
    <div className="flex flex-col justify-end lg:col-span-5">
      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
        Start Here
      </span>

      <h2 className="mt-6 font-serif text-4xl font-light leading-tight text-cream sm:text-5xl lg:text-6xl">
        The Margin
        <br />
        Practice Audit
      </h2>

      <p className="mt-8 font-sans text-base leading-relaxed text-cream/60 sm:text-lg">
        Five minutes. Three dimensions. One honest mirror.
      </p>
    </div>
  );
}

function ToolDetails() {
  return (
    <div className="border-t-2 border-candid pt-8 lg:col-span-7 lg:pt-12">
      <p className="max-w-lg font-sans text-base leading-relaxed text-cream/80">
        A self-assessment that looks at financial margin, time margin, and
        client load — the three pillars that determine whether your
        practice is sustainable or just busy. No judgment. No upsell.
        Just clarity about where you stand.
      </p>

      <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-12">
        <Link
          href="/audit"
          className="inline-block bg-candid px-8 py-4 font-sans text-sm font-semibold text-cream transition-colors duration-200 hover:bg-accent-hover focus:outline-hidden focus:ring-2 focus:ring-candid/30"
        >
          Take the Audit
        </Link>

        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/40">
          Free &middot; 5 Minutes &middot; No Account Required
        </span>
      </div>
    </div>
  );
}
