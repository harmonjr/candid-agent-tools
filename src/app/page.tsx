import Link from 'next/link';
import SiteHeader from '@/components/audit/SiteHeader';
import SiteFooter from '@/components/audit/SiteFooter';

const TOOLS = [
  {
    href: '/audit',
    label: 'Free Assessment',
    title: 'The Margin Practice Audit',
    description:
      'A 5-minute self-assessment that looks at three dimensions of your practice: financial margin, time margin, and client load. No judgment. Just an honest mirror.',
    cta: 'Take the Audit',
  },
  {
    href: '/boundaries',
    label: 'Free Tool',
    title: 'Communication Hours Template',
    description:
      'Define your working hours, generate professional auto-responders, and get scripts for setting client expectations from day one. Because the best agents protect their energy.',
    cta: 'Build My Boundaries',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main className="flex flex-col items-center px-6 py-20 sm:py-28">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
          Agent Tools
        </span>

        <h1 className="mt-4 max-w-2xl text-center font-serif text-4xl font-light leading-tight text-ink sm:text-5xl lg:text-6xl">
          Tools for agents who want to thrive
        </h1>

        <p className="mt-6 max-w-xl text-center font-sans text-base leading-relaxed text-ink-muted sm:text-lg">
          You help clients protect their biggest investment. These free tools
          help you protect yours — your time, your money, and your capacity
          to show up and do your best work.
        </p>

        <div className="mt-16 grid w-full max-w-3xl gap-6 sm:grid-cols-2">
          {TOOLS.map((tool) => (
            <ToolCard key={tool.href} {...tool} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function ToolCard({
  href,
  label,
  title,
  description,
  cta,
}: (typeof TOOLS)[number]) {
  return (
    <div className="border-t-2 border-candid bg-white px-6 py-8 transition-colors duration-200 hover:bg-highlight">
      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
        {label}
      </span>
      <h2 className="mt-3 font-serif text-2xl font-light text-ink">
        {title}
      </h2>
      <p className="mt-3 font-sans text-sm leading-relaxed text-ink-muted">
        {description}
      </p>
      <Link
        href={href}
        className="mt-6 inline-block bg-accent px-6 py-3 font-sans text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-hover focus:outline-hidden focus:ring-2 focus:ring-accent/20"
      >
        {cta}
      </Link>
    </div>
  );
}
