import Link from 'next/link';

export default function HomeHero() {
  return (
    <section className="relative bg-ink px-6 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <HeadlineBlock />
          <SupportBlock />
        </div>
      </div>
    </section>
  );
}

function HeadlineBlock() {
  return (
    <div className="lg:col-span-7">
      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
        Agent Tools
      </span>

      <h1 className="mt-8 font-serif text-5xl font-light leading-[1.1] text-cream sm:text-6xl lg:text-7xl">
        Tools for agents
        <br />
        who want to{' '}
        <em className="text-candid">thrive.</em>
      </h1>
    </div>
  );
}

function SupportBlock() {
  return (
    <div className="flex flex-col justify-end lg:col-span-5">
      <p className="max-w-md font-sans text-base leading-relaxed text-cream/60 sm:text-lg">
        You help clients protect their biggest investment. These free tools
        help you protect yours — your time, your money, and your capacity
        to show up and do your best work.
      </p>

      <Link
        href="#featured"
        className="group mt-10 inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid transition-colors duration-200 hover:text-cream focus:outline-hidden focus:ring-2 focus:ring-candid/30"
        aria-label="Scroll to featured tool"
      >
        Start here
        <span
          className="inline-block transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        >
          &rarr;
        </span>
      </Link>
    </div>
  );
}
