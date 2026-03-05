import Link from 'next/link';

const FOOTER_LINKS = [
  { href: '/audit', label: 'Margin Audit' },
  { href: '/enough', label: 'Enough Calculator' },
  { href: '/true-cost', label: 'True Cost' },
  { href: '/expectations', label: 'Expectations' },
  { href: '/board', label: 'Board' },
  { href: '/boundaries', label: 'Boundaries' },
  { href: '/conversations', label: 'Conversations' },
  { href: '/templates', label: 'Templates' },
] as const;

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink px-6 py-16 sm:px-8 sm:py-24 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <BrandColumn year={year} />
          <NavColumn />
        </div>

        <PrivacyBar year={year} />
      </div>
    </footer>
  );
}

function BrandColumn({ year }: { year: number }) {
  return (
    <div className="lg:col-span-5">
      <Link
        href="/"
        className="group font-serif text-[20px] font-light tracking-[0.15em] text-cream/80 transition-colors duration-200 hover:text-cream focus:outline-hidden focus:ring-2 focus:ring-candid/30"
      >
        THE <span className="text-candid transition-colors duration-200 group-hover:text-cream">CANDID</span> AGENT
      </Link>

      <p className="mt-8 font-serif text-2xl font-light italic leading-relaxed text-cream/40 sm:text-3xl">
        Protect your margin.
      </p>

      <p className="mt-6 max-w-sm font-sans text-sm leading-relaxed text-cream/30">
        Tools for agents who measure success not by how much they
        close — but by how well they live.
      </p>
    </div>
  );
}

function NavColumn() {
  return (
    <div className="lg:col-span-7">
      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
        Tools
      </span>

      <nav aria-label="Footer navigation" className="mt-6 grid gap-x-12 gap-y-3 sm:grid-cols-2">
        {FOOTER_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-sans text-sm text-cream/50 transition-colors duration-200 hover:text-cream focus:outline-hidden focus:ring-2 focus:ring-candid/30"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

function PrivacyBar({ year }: { year: number }) {
  return (
    <div className="mt-16 border-t border-cream/10 pt-8 sm:mt-24">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-sans text-xs text-cream/20">
          &copy; {year} The Candid Agent
        </p>

        <p className="font-sans text-[10px] text-cream/20">
          Your data stays on your device. Nothing is sent to a server.
        </p>
      </div>
    </div>
  );
}
