import SiteHeader from '@/components/audit/SiteHeader';
import AuditWizard from '@/components/audit/AuditWizard';
import SiteFooter from '@/components/audit/SiteFooter';

export const metadata = {
  title: 'Margin Practice Audit | The Candid Agent',
  description:
    'A free self-assessment for real estate agents. Discover your margin score across financial health, time management, and client load.',
};

export default function AuditPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <AuditHero />
      <div id="audit-top" aria-hidden="true" />
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <AuditWizard />
      </main>
      <SiteFooter />
    </div>
  );
}

function AuditHero() {
  return (
    <section className="bg-ink px-6 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-7">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
              Self-Assessment
            </span>

            <h1 className="mt-8 font-serif text-5xl font-light leading-[1.1] text-cream sm:text-6xl lg:text-7xl">
              The Margin
              <br />
              Practice{' '}
              <em className="text-candid">Audit</em>
            </h1>
          </div>

          <div className="flex flex-col justify-end lg:col-span-5">
            <p className="max-w-md font-sans text-base leading-relaxed text-cream/60 sm:text-lg">
              Three dimensions of your practice. One honest mirror.
              Financial margin, time margin, and client load — scored,
              weighted, and delivered without judgment.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-8">
              <MetaItem label="Cost" value="Free" />
              <MetaItem label="Time" value="5 min" />
              <MetaItem label="Account" value="None" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/40">
        {label}
      </span>
      <span className="mt-1 block font-serif text-xl font-light text-cream">
        {value}
      </span>
    </div>
  );
}
