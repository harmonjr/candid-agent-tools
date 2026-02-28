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
    href: '/enough',
    label: 'Free Calculator',
    title: 'The Enough Calculator',
    description:
      'Reverse-engineer how many closings you actually need per year — starting with the life you want to live, not the income you chase. Most agents are surprised by the number.',
    cta: 'Find My Number',
  },
  {
    href: '/true-cost',
    label: 'Free Calculator',
    title: 'The True Cost Calculator',
    description:
      'Show buyers what a home really costs each month — far beyond the mortgage payment. Maintenance, utilities, commute changes, and the margin check that matters most.',
    cta: 'Calculate True Cost',
  },
  {
    href: '/expectations',
    label: 'Free Guide',
    title: 'Client Expectation Setter',
    description:
      'A first-meeting conversation guide that establishes trust and boundaries upfront. The Bob Method discovery questions, boundary scripts, and pushback responses — customizable to your voice.',
    cta: 'Prepare for the First Meeting',
  },
  {
    href: '/board',
    label: 'Free CRM',
    title: 'The Candid Board',
    description:
      'A radically simple Kanban CRM for agents who serve fewer clients better. Five stages, life context over lead scores, and a margin indicator that tells the truth about your capacity.',
    cta: 'Open Your Board',
  },
  {
    href: '/boundaries',
    label: 'Free Tool',
    title: 'Communication Hours Template',
    description:
      'Define your working hours, generate professional auto-responders, and get scripts for setting client expectations from day one. Because the best agents protect their energy.',
    cta: 'Build My Boundaries',
  },
  {
    href: '/conversations',
    label: 'Free Framework',
    title: 'The Margin Message Framework',
    description:
      'Scripts and frameworks for the hard conversations — about budgets, true costs, and honest advice. The Bob Method, packaged for agents who put people before transactions.',
    cta: 'Browse the Scripts',
  },
  {
    href: '/templates',
    label: 'Free Library',
    title: 'Content Templates',
    description:
      'Pre-structured templates for market updates, buyer education, newsletters, and more. Copy, customize for your market, and publish content that builds trust.',
    cta: 'Browse Templates',
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
