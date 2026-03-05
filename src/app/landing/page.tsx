import type { Metadata } from 'next';
import SiteHeader from '@/components/audit/SiteHeader';
import SiteFooter from '@/components/audit/SiteFooter';
import ManifestoHero from '@/components/landing/ManifestoHero';
import PhilosophySection from '@/components/landing/PhilosophySection';
import FeaturedTool from '@/components/landing/FeaturedTool';
import ToolGrid from '@/components/landing/ToolGrid';
import ManifestoSection from '@/components/landing/ManifestoSection';
import ClosingCta from '@/components/landing/ClosingCta';

export const metadata: Metadata = {
  title: 'Tools for Agents Who Want to Thrive | The Candid Agent',
  description:
    'Free tools for real estate agents who want to build a sustainable practice. No login. No upsell. No data harvesting.',
};

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader />
      <main>
        <ManifestoHero />
        <PhilosophySection />
        <FeaturedTool />
        <ToolGrid />
        <ManifestoSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  );
}
