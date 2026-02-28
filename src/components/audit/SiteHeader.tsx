import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="border-b border-border bg-cream">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-serif text-xl font-light text-ink transition-colors duration-200 hover:text-candid focus:outline-hidden focus:ring-2 focus:ring-accent/20"
        >
          The Candid Agent
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/audit"
            className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid transition-colors duration-200 hover:text-accent-hover focus:outline-hidden focus:ring-2 focus:ring-accent/20"
          >
            Margin Audit
          </Link>
          <Link
            href="/boundaries"
            className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid transition-colors duration-200 hover:text-accent-hover focus:outline-hidden focus:ring-2 focus:ring-accent/20"
          >
            Boundaries
          </Link>
          <Link
            href="/conversations"
            className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid transition-colors duration-200 hover:text-accent-hover focus:outline-hidden focus:ring-2 focus:ring-accent/20"
          >
            Conversations
          </Link>
          <Link
            href="/templates"
            className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid transition-colors duration-200 hover:text-accent-hover focus:outline-hidden focus:ring-2 focus:ring-accent/20"
          >
            Templates
          </Link>
        </nav>
      </div>
    </header>
  );
}
