'use client';

import { useState, useCallback } from 'react';
import { TEMPLATE_CATEGORIES } from '@/lib/content-templates';
import CategoryCard from './CategoryCard';
import CategoryDetail from './CategoryDetail';
import ContentPrinciples from './ContentPrinciples';

export default function TemplatesLanding() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const selectedCategory = selectedCategoryId
    ? TEMPLATE_CATEGORIES.find((c) => c.id === selectedCategoryId) ?? null
    : null;

  const handleSelect = useCallback((id: string) => {
    setSelectedCategoryId((prev) => (prev === id ? null : id));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBack = useCallback(() => {
    setSelectedCategoryId(null);
  }, []);

  const totalTemplates = TEMPLATE_CATEGORIES.reduce(
    (sum, cat) => sum + cat.templates.length,
    0,
  );

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      {!selectedCategory && (
        <>
          <div className="text-center">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
              Content Templates
            </span>
            <h1 className="mt-4 font-serif text-4xl font-light leading-tight text-ink sm:text-5xl">
              Write content that builds trust
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-ink-muted sm:text-lg">
              {totalTemplates} pre-structured templates designed around The Candid
              Agent's principles. Copy them, customize them for your market, and
              publish content that educates instead of sells.
            </p>
          </div>

          <div className="mt-12">
            <ContentPrinciples />
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {TEMPLATE_CATEGORIES.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                isSelected={false}
                onSelect={handleSelect}
              />
            ))}
          </div>
        </>
      )}

      {selectedCategory && (
        <>
          <CategoryDetail category={selectedCategory} onBack={handleBack} />
          <div className="mt-12">
            <ContentPrinciples />
          </div>
        </>
      )}
    </div>
  );
}
