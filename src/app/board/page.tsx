import SiteHeader from '@/components/audit/SiteHeader';
import BoardView from '@/components/board/BoardView';
import SiteFooter from '@/components/audit/SiteFooter';

export const metadata = {
  title: 'The Candid Board | The Candid Agent',
  description:
    'A radically simple CRM for agents who serve fewer clients better. One board, five stages, zero complexity.',
};

export default function BoardPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main>
        <section className="relative bg-ink px-6 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-40">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
              <div className="lg:col-span-7">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
                  Client Management
                </span>
                <h1 className="mt-8 font-serif text-5xl font-light leading-[1.1] text-cream sm:text-6xl lg:text-7xl">
                  The Candid
                  <br />
                  <em className="text-candid">Board</em>
                </h1>
              </div>
              <div className="flex flex-col justify-end lg:col-span-5">
                <p className="max-w-md font-sans text-base leading-relaxed text-cream/60 sm:text-lg">
                  A radically simple CRM for agents who serve fewer clients
                  better. One board, five stages, zero complexity.
                </p>
              </div>
            </div>
          </div>
        </section>
        <BoardView />
      </main>
      <SiteFooter />
    </div>
  );
}
