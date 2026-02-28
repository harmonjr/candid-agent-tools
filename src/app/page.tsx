import SiteHeader from '@/components/audit/SiteHeader';
import AuditLanding from '@/components/audit/AuditLanding';
import SiteFooter from '@/components/audit/SiteFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main>
        <AuditLanding />
      </main>
      <SiteFooter />
    </div>
  );
}
