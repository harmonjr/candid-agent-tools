import {
  Lightbulb,
  BarChart3,
  HelpCircle,
  GraduationCap,
  Calculator,
  Mail,
} from 'lucide-react';
import type { TemplateCategory } from '@/lib/content-templates';
import ContentTemplateCard from './ContentTemplateCard';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  'lightbulb': Lightbulb,
  'bar-chart-3': BarChart3,
  'help-circle': HelpCircle,
  'graduation-cap': GraduationCap,
  'calculator': Calculator,
  'mail': Mail,
};

interface CategoryDetailProps {
  category: TemplateCategory;
  onBack: () => void;
}

export default function CategoryDetail({ category, onBack }: CategoryDetailProps) {
  const IconComponent = ICON_MAP[category.icon] ?? Lightbulb;

  return (
    <div>
      <button
        onClick={onBack}
        className="mb-6 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid transition-colors duration-200 hover:text-accent-hover focus:outline-hidden focus:ring-2 focus:ring-accent/20"
      >
        &larr; All Categories
      </button>

      <div className="flex items-center gap-3">
        <IconComponent className="h-6 w-6 text-candid" />
        <h2 className="font-serif text-3xl font-light text-ink">
          {category.title}
        </h2>
      </div>

      <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-ink-muted">
        {category.description}
      </p>

      <div className="mt-8 space-y-4">
        {category.templates.map((template) => (
          <ContentTemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  );
}
