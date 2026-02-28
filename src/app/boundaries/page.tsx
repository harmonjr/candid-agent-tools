import SiteHeader from '@/components/audit/SiteHeader';
import BoundariesWizard from '@/components/boundaries/BoundariesWizard';
import SiteFooter from '@/components/audit/SiteFooter';

export const metadata = {
  title: 'Communication Hours Template | The Candid Agent',
  description:
    'Set your working hours and generate professional auto-responder templates, availability statements, and client expectation scripts.',
};

export default function BoundariesPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main>
        <BoundariesWizard />
      </main>
      <SiteFooter />
    </div>
  );
}
