import PullQuote from '@/components/shared/PullQuote';

const PULL_QUOTE_TEXT =
  'What if the goal isn\u2019t more transactions \u2014 but better ones?';

export default function PhilosophySection() {
  return (
    <section className="bg-cream px-6 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-4">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
              The Problem
            </span>
          </div>

          <div className="lg:col-span-8">
            <h2 className="font-serif text-3xl font-light leading-tight text-ink sm:text-4xl lg:text-5xl">
              The industry measures success in volume.
              <br />
              <span className="text-ink-muted">
                We measure it in margin.
              </span>
            </h2>

            <p className="mt-12 max-w-2xl font-sans text-base leading-relaxed text-ink-muted sm:text-lg">
              More leads. More closings. More hustle. The conventional
              playbook says growth means doing more. But the agents who
              last — the ones who still love this work a decade in — they
              figured out something different.
            </p>

            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-ink-muted sm:text-lg">
              They found their number. They protected their time. They
              built practices with breathing room. These tools exist
              because that kind of work deserves better support than
              another CRM upsell.
            </p>
          </div>
        </div>

        <PullQuote quote={PULL_QUOTE_TEXT} />
      </div>
    </section>
  );
}
