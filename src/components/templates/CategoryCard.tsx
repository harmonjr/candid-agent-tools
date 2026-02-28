import {
  Lightbulb,
  BarChart3,
  HelpCircle,
  GraduationCap,
  Calculator,
  Mail,
} from 'lucide-react';
import type { TemplateCategory } from '@/lib/content-templates';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  'lightbulb': Lightbulb,
  'bar-chart-3': BarChart3,
  'help-circle': HelpCircle,
  'graduation-cap': GraduationCap,
  'calculator': Calculator,
  'mail': Mail,
};

interface CategoryCardProps {
  category: TemplateCategory;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export default function CategoryCard({ category, isSelected, onSelect }: CategoryCardProps) {
  const IconComponent = ICON_MAP[category.icon] ?? Lightbulb;
  const templateCount = category.templates.length;

  return (
    <button
      onClick={() => onSelect(category.id)}
      className={`w-full border-t-2 px-6 py-6 text-left transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-accent/20 ${
        isSelected
          ? 'border-candid bg-highlight'
          : 'border-candid bg-white hover:bg-highlight'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="mt-0.5 shrink-0">
          <IconComponent className="h-5 w-5 text-candid" />
        </div>
        <div className="min-w-0">
          <h2 className="font-serif text-xl font-light text-ink">
            {category.title}
          </h2>
          <p className="mt-2 font-sans text-sm leading-relaxed text-ink-muted">
            {category.description}
          </p>
          <span className="mt-3 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
            {templateCount} {templateCount === 1 ? 'template' : 'templates'}
          </span>
        </div>
      </div>
    </button>
  );
}
