import Link from 'next/link';
import type { Tool } from '@/lib/tool-data';

interface FullWidthToolProps {
  tool: Tool;
}

export default function FullWidthTool({ tool }: FullWidthToolProps) {
  return (
    <div className="group mt-px flex flex-col gap-6 bg-cream-alt p-8 transition-colors duration-200 hover:bg-highlight sm:flex-row sm:items-center sm:justify-between sm:p-10">
      <div className="sm:max-w-lg">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
          {tool.label}
        </span>
        <h3 className="mt-2 font-serif text-2xl font-light text-ink sm:text-3xl">
          {tool.title}
        </h3>
      </div>

      <p className="font-sans text-sm leading-relaxed text-ink-muted sm:max-w-sm sm:text-base">
        {tool.description}
      </p>

      <Link
        href={tool.href}
        className="group/link inline-flex shrink-0 items-center gap-2 font-sans text-sm font-semibold text-ink transition-colors duration-200 hover:text-candid focus:outline-hidden focus:ring-2 focus:ring-accent/20"
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
  );
}
