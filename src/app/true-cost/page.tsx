import SiteHeader from '@/components/audit/SiteHeader';
import TrueCostWizard from '@/components/true-cost/TrueCostWizard';
import SiteFooter from '@/components/audit/SiteFooter';

export const metadata = {
  title: 'True Cost Calculator | The Candid Agent',
  description:
    'See the real monthly cost of homeownership — far beyond the mortgage payment. Built for agents to use with clients during conversations.',
};

export default function TrueCostPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <TrueCostHero />
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <TrueCostWizard />
      </main>
      <SiteFooter />
    </div>
  );
}

function TrueCostHero() {
  return (
    <section className="bg-ink px-6 py-24 sm:px-8 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-7">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
              Free Tool
            </span>
            <h1 className="mt-8 font-serif text-5xl font-light leading-[1.1] text-cream sm:text-6xl lg:text-7xl">
              The True Cost
              <br />
              <em className="text-candid">Calculator</em>
            </h1>
          </div>

          <div className="flex flex-col justify-end lg:col-span-5">
            <p className="max-w-md font-sans text-base leading-relaxed text-cream/60 sm:text-lg">
              Most calculators stop at principal and interest. This one
              shows your client what homeownership actually costs — every
              month, every dollar, no surprises.
            </p>
            <p className="mt-4 font-sans text-xs text-cream/40">
              Free. No sign-up required. Everything stays on your device.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
