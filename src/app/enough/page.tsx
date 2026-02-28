import SiteHeader from '@/components/audit/SiteHeader';
import EnoughWizard from '@/components/enough/EnoughWizard';
import SiteFooter from '@/components/audit/SiteFooter';

export const metadata = {
  title: 'The Enough Calculator | The Candid Agent',
  description:
    'Reverse-engineer how many closings you actually need. Start with the life you want, not the income you chase.',
};

export default function EnoughPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <EnoughWizard />
      </main>
      <SiteFooter />
    </div>
  );
}
