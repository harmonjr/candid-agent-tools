import SiteHeader from '@/components/audit/SiteHeader';
import SiteFooter from '@/components/audit/SiteFooter';
import ConversationsLanding from '@/components/conversations/ConversationsLanding';

export const metadata = {
  title: 'Margin Message Framework | The Candid Agent',
  description:
    'Scripts and frameworks for the hard conversations agents need to have with clients about money, budgets, and protection. The Bob Method, packaged.',
};

export default function ConversationsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main>
        <section className="relative bg-ink px-6 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-40">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
              <div className="lg:col-span-7">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
                  Conversation Framework
                </span>
                <h1 className="mt-8 font-serif text-5xl font-light leading-[1.1] text-cream sm:text-6xl lg:text-7xl">
                  The Margin Message
                  <br />
                  <em className="text-candid">Framework</em>
                </h1>
              </div>
              <div className="flex flex-col justify-end lg:col-span-5">
                <p className="max-w-md font-sans text-base leading-relaxed text-cream/60 sm:text-lg">
                  Scripts and frameworks for the hard conversations that define
                  a Candid Agent. The ones most agents avoid — and the ones
                  clients remember forever.
                </p>
              </div>
            </div>
          </div>
        </section>
        <ConversationsLanding />
      </main>
      <SiteFooter />
    </div>
  );
}
