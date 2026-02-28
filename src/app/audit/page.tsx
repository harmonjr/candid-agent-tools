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
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <AuditWizard />
      </main>
      <SiteFooter />
    </div>
  );
}
