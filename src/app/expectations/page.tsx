import SiteHeader from '@/components/audit/SiteHeader';
import SiteFooter from '@/components/audit/SiteFooter';
import ExpectationsLanding from '@/components/expectations/ExpectationsLanding';

export const metadata = {
  title: 'Client Expectation Setter | The Candid Agent',
  description:
    'First-meeting conversation scripts that help real estate agents establish trust, communicate boundaries, and set expectations with new clients. The Bob Method, packaged.',
};

export default function ExpectationsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main>
        <section className="relative bg-ink px-6 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-40">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
              <div className="lg:col-span-7">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
                  First Meeting Guide
                </span>
                <h1 className="mt-8 font-serif text-5xl font-light leading-[1.1] text-cream sm:text-6xl lg:text-7xl">
                  Client Expectation
                  <br />
                  <em className="text-candid">Setter</em>
                </h1>
              </div>
              <div className="flex flex-col justify-end lg:col-span-5">
                <p className="max-w-md font-sans text-base leading-relaxed text-cream/60 sm:text-lg">
                  The first meeting sets the tone for everything. Start the
                  relationship the way Bob did — with the client's life, not
                  the listing sheet.
                </p>
              </div>
            </div>
          </div>
        </section>
        <ExpectationsLanding />
      </main>
      <SiteFooter />
    </div>
  );
}
