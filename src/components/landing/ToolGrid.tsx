import ToolCard from './ToolCard';
import FullWidthTool from '@/components/shared/FullWidthTool';
import { REMAINING_TOOLS } from '@/lib/tool-data';

export default function ToolGrid() {
  const gridTools = REMAINING_TOOLS.slice(0, 6);
  const lastTool = REMAINING_TOOLS[6];

  return (
    <section id="tools" className="bg-cream px-6 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <GridHeader />

        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {gridTools.map((tool) => (
            <ToolCard key={tool.href} tool={tool} />
          ))}
        </div>

        {lastTool && <FullWidthTool tool={lastTool} />}
      </div>
    </section>
  );
}

function GridHeader() {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-24">
      <div className="lg:col-span-4">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
          The Toolkit
        </span>
      </div>

      <div className="lg:col-span-8">
        <h2 className="font-serif text-3xl font-light leading-tight text-ink sm:text-4xl">
          Seven more tools. All free.
          <br />
          <span className="text-ink-muted">No login. No catch.</span>
        </h2>
      </div>
    </div>
  );
}
