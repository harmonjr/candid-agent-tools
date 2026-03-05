export default function ManifestoSection() {
  return (
    <section className="bg-ink px-6 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
          What We Believe
        </span>

        <div className="mt-16 space-y-16 sm:mt-24 sm:space-y-24">
          {BELIEFS.map((belief) => (
            <BeliefStatement key={belief.headline} {...belief} />
          ))}
        </div>

        <ManifestoFooter />
      </div>
    </section>
  );
}

interface Belief {
  headline: string;
  body: string;
}

const BELIEFS: Belief[] = [
  {
    headline: 'No login walls.',
    body: 'Every tool works the moment you arrive. Your data stays on your device. We have nothing to sell you.',
  },
  {
    headline: 'No upsells.',
    body: 'These tools are free because they should be. Not free-trial free. Not freemium free. Actually free.',
  },
  {
    headline: 'No data harvesting.',
    body: 'We do not collect your information. We do not track your usage. We do not know who you are, and we like it that way.',
  },
];

function BeliefStatement({ headline, body }: Belief) {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-24">
      <h3 className="font-serif text-3xl font-light text-cream sm:text-4xl lg:col-span-5 lg:text-5xl">
        {headline}
      </h3>

      <p className="font-sans text-base leading-relaxed text-cream/60 sm:text-lg lg:col-span-7">
        {body}
      </p>
    </div>
  );
}

function ManifestoFooter() {
  return (
    <div className="mt-24 border-t border-cream/10 pt-12 sm:mt-32">
      <p className="max-w-2xl font-serif text-xl font-light italic leading-relaxed text-cream/40 sm:text-2xl">
        Built for agents who measure success not by how much they
        close — but by how well they live.
      </p>
    </div>
  );
}
