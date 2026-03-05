import SiteHeader from '@/components/audit/SiteHeader';
import SiteFooter from '@/components/audit/SiteFooter';
import HomeHero from '@/components/home/HomeHero';
import HomeFeaturedAudit from '@/components/home/HomeFeaturedAudit';
import HomeToolGrid from '@/components/home/HomeToolGrid';
import HomeClosingCta from '@/components/home/HomeClosingCta';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader />
      <main>
        <HomeHero />
        <HomeFeaturedAudit />
        <HomeToolGrid />
        <HomeClosingCta />
      </main>
      <SiteFooter />
    </div>
  );
}
