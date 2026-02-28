import SiteHeader from '@/components/audit/SiteHeader';
import BoardView from '@/components/board/BoardView';
import SiteFooter from '@/components/audit/SiteFooter';

export const metadata = {
  title: 'The Candid Board | The Candid Agent',
  description:
    'A radically simple CRM for agents who serve fewer clients better. One board, five stages, zero complexity.',
};

export default function BoardPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main>
        <BoardView />
      </main>
      <SiteFooter />
    </div>
  );
}
