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
        <ExpectationsLanding />
      </main>
      <SiteFooter />
    </div>
  );
}
