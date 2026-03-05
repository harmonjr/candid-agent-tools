import Link from 'next/link';

export default function ManifestoHero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between bg-ink px-6 py-16 sm:px-8 lg:px-16">
      <div className="flex-1" />

      <div className="max-w-5xl">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
          The Candid Agent
        </span>

        <h1 className="mt-6 font-serif text-5xl font-light leading-[1.1] text-cream sm:text-7xl lg:text-8xl xl:text-9xl">
          Tools for agents
          <br />
          who want to
          <br />
          <em className="text-candid">thrive.</em>
        </h1>
      </div>

      <div className="mt-24 flex items-end justify-between sm:mt-32">
        <p className="max-w-md font-sans text-sm leading-relaxed text-cream/60 sm:text-base">
          You help clients protect their biggest investment. These free tools
          help you protect yours — your time, your money, and your capacity
          to show up and do your best work.
        </p>

        <Link
          href="#tools"
          className="flex flex-col items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid transition-colors duration-200 hover:text-cream focus:outline-hidden focus:ring-2 focus:ring-candid/30"
          aria-label="Scroll to tools"
        >
          <span className="hidden sm:inline">Explore the tools</span>
          <svg
            className="h-5 w-5 motion-safe:animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="square" strokeLinejoin="miter" d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
