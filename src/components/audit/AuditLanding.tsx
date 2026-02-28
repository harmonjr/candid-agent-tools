'use client';

import Link from 'next/link';

export default function AuditLanding() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
        Free Assessment
      </span>

      <h1 className="mt-4 max-w-2xl font-serif text-4xl font-light leading-tight text-ink sm:text-5xl lg:text-6xl">
        The Margin Practice Audit
      </h1>

      <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-ink-muted sm:text-lg">
        You help clients protect their biggest investment. But who is
        protecting yours — your time, your money, your capacity to
        show up and do your best work?
      </p>

      <p className="mt-4 max-w-lg font-sans text-sm leading-relaxed text-ink-muted">
        This 5-minute self-assessment looks at three dimensions of
        your practice: financial margin, time margin, and client load.
        No judgment. Just an honest mirror.
      </p>

      <Link
        href="/audit"
        className="mt-10 bg-accent px-8 py-4 font-sans text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-hover focus:outline-hidden focus:ring-2 focus:ring-accent/20"
      >
        Start the Audit
      </Link>

      <p className="mt-4 font-sans text-xs text-ink-muted">
        Free. No sign-up required. Your answers stay on your device.
      </p>
    </div>
  );
}
