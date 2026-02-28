import SiteHeader from '@/components/audit/SiteHeader';
import SiteFooter from '@/components/audit/SiteFooter';
import ConversationsLanding from '@/components/conversations/ConversationsLanding';

export const metadata = {
  title: 'Margin Message Framework | The Candid Agent',
  description:
    'Scripts and frameworks for the hard conversations agents need to have with clients about money, budgets, and protection. The Bob Method, packaged.',
};

export default function ConversationsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main>
        <ConversationsLanding />
      </main>
      <SiteFooter />
    </div>
  );
}
