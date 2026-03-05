import HomeToolCard from './HomeToolCard';
import FullWidthTool from '@/components/shared/FullWidthTool';
import { ALL_TOOLS } from '@/lib/tool-data';

export default function HomeToolGrid() {
  const gridTools = ALL_TOOLS.slice(1, 7);
  const lastTool = ALL_TOOLS[7];

  return (
    <section className="bg-ink px-6 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <GridHeader />

        <div className="mt-16 grid gap-px bg-ink sm:grid-cols-2 lg:grid-cols-3">
          {gridTools.map((tool) => (
            <HomeToolCard key={tool.href} tool={tool} />
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
        <h2 className="font-serif text-3xl font-light leading-tight text-cream sm:text-4xl">
          Eight tools. All free.
          <br />
          <span className="text-cream/40">No login. No catch.</span>
        </h2>
      </div>
    </div>
  );
}
