import SiteHeader from '@/components/audit/SiteHeader';
import TemplatesLanding from '@/components/templates/TemplatesLanding';
import SiteFooter from '@/components/audit/SiteFooter';

export const metadata = {
  title: 'Content Templates | The Candid Agent',
  description:
    'Pre-structured content templates for real estate agents. Education-first articles, market updates, buyer guides, and newsletter kits — ready to customize for your market.',
};

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main>
        <section className="relative bg-ink px-6 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-40">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
              <div className="lg:col-span-7">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
                  The Toolkit
                </span>
                <h1 className="mt-8 font-serif text-5xl font-light leading-[1.1] text-cream sm:text-6xl lg:text-7xl">
                  Content
                  <br />
                  <em className="text-candid">Templates</em>
                </h1>
              </div>
              <div className="flex flex-col justify-end lg:col-span-5">
                <p className="max-w-md font-sans text-base leading-relaxed text-cream/60 sm:text-lg">
                  Pre-structured templates designed around The Candid Agent's
                  principles. Copy them, customize for your market, and publish
                  content that educates instead of sells.
                </p>
              </div>
            </div>
          </div>
        </section>
        <TemplatesLanding />
      </main>
      <SiteFooter />
    </div>
  );
}
