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
        <TemplatesLanding />
      </main>
      <SiteFooter />
    </div>
  );
}
