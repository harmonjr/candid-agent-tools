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
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <TrueCostWizard />
      </main>
      <SiteFooter />
    </div>
  );
}
