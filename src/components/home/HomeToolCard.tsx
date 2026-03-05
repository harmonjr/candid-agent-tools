import Link from 'next/link';
import type { Tool } from '@/lib/tool-data';

interface HomeToolCardProps {
  tool: Tool;
}

export default function HomeToolCard({ tool }: HomeToolCardProps) {
  return (
    <div className="group flex h-full flex-col bg-cream-alt p-8 transition-colors duration-200 hover:bg-highlight sm:p-10">
      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
        {tool.label}
      </span>

      <h3 className="mt-4 font-serif text-2xl font-light text-ink sm:text-3xl">
        {tool.title}
      </h3>

      <p className="mt-4 font-sans text-sm leading-relaxed text-ink-muted sm:text-base">
        {tool.description}
      </p>

      <div className="mt-auto pt-8">
        <Link
          href={tool.href}
          className="group/link inline-flex items-center gap-2 font-sans text-sm font-semibold text-ink transition-colors duration-200 hover:text-candid focus:outline-hidden focus:ring-2 focus:ring-accent/20"
        >
          {tool.cta}
          <span
            className="inline-block motion-safe:transition-transform motion-safe:duration-200 group-hover/link:translate-x-1"
            aria-hidden="true"
          >
            &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
}
